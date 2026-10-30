const { app, BrowserWindow, ipcMain, dialog, shell } = require('electron');
const path = require('path');
const fs = require('fs');
const sql = require('mssql');
const bcrypt = require('bcryptjs');


const DB = {
  server: 'localhost', database: 'BookShop', user: 'sa', password: 'sapins@071',
  options: { encrypt: false, trustServerCertificate: true }
};
const C = 'Cashier', M = 'Store Manager', A = 'Super Admin';
const ALL = [C, M, A], MA = [M, A], ADMIN = [A];
let pool, session = null;
const r2 = x => Math.round(x * 100) / 100;

const SCHEMA = [
`IF OBJECT_ID('Users','U') IS NULL CREATE TABLE Users(Id INT IDENTITY PRIMARY KEY, Username NVARCHAR(50) NOT NULL UNIQUE, FullName NVARCHAR(100) NOT NULL, PasswordHash NVARCHAR(100) NOT NULL, Role NVARCHAR(20) NOT NULL CHECK (Role IN ('Cashier','Store Manager','Super Admin')), Active BIT NOT NULL DEFAULT 1, Permissions NVARCHAR(500) NULL)`,
`IF OBJECT_ID('Items','U') IS NULL CREATE TABLE Items(Id INT IDENTITY PRIMARY KEY, Name NVARCHAR(100) NOT NULL, Category NVARCHAR(50) NOT NULL, Price DECIMAL(12,2) NOT NULL, Stock INT NOT NULL DEFAULT 0, Barcode NVARCHAR(50) NULL, ImageUrl NVARCHAR(500) NULL, ItemType NVARCHAR(20) NOT NULL DEFAULT 'Product', IsService BIT NOT NULL DEFAULT 0, Active BIT NOT NULL DEFAULT 1)`,
`IF OBJECT_ID('Sales','U') IS NULL CREATE TABLE Sales(Id INT IDENTITY PRIMARY KEY, InvoiceNo NVARCHAR(30) NULL, CashierId INT NOT NULL REFERENCES Users(Id), Total DECIMAL(12,2) NOT NULL, Paid DECIMAL(12,2) NOT NULL, Balance DECIMAL(12,2) NOT NULL, PaymentMethod NVARCHAR(20) NOT NULL DEFAULT 'Cash', Discount DECIMAL(12,2) NOT NULL DEFAULT 0, CreatedAt DATETIME2 NOT NULL DEFAULT SYSDATETIME())`,
`IF OBJECT_ID('SaleItems','U') IS NULL CREATE TABLE SaleItems(Id INT IDENTITY PRIMARY KEY, SaleId INT NOT NULL REFERENCES Sales(Id), ItemId INT NOT NULL REFERENCES Items(Id), ItemName NVARCHAR(100) NOT NULL, Qty INT NOT NULL, UnitPrice DECIMAL(12,2) NOT NULL, DiscountPct DECIMAL(5,2) NOT NULL DEFAULT 0, LineTotal DECIMAL(12,2) NOT NULL)`,
`IF OBJECT_ID('Settings','U') IS NULL CREATE TABLE Settings([Key] NVARCHAR(50) PRIMARY KEY, [Value] NVARCHAR(200) NOT NULL)`,
`IF OBJECT_ID('Payments','U') IS NULL CREATE TABLE Payments(Id INT IDENTITY PRIMARY KEY, Period CHAR(7) NOT NULL, Amount DECIMAL(12,2) NOT NULL, Method NVARCHAR(20) NOT NULL, Note NVARCHAR(200) NULL, PaidAt DATETIME2 NOT NULL DEFAULT SYSDATETIME(), RecordedBy NVARCHAR(50) NOT NULL)`,
`IF OBJECT_ID('GRNs','U') IS NULL CREATE TABLE GRNs(Id INT IDENTITY PRIMARY KEY, GrnNo NVARCHAR(50) NOT NULL UNIQUE, Supplier NVARCHAR(100) NOT NULL, InvoiceRef NVARCHAR(50) NULL, TotalCost DECIMAL(12,2) NOT NULL DEFAULT 0, Notes NVARCHAR(250) NULL, ReceivedBy NVARCHAR(100) NOT NULL, CreatedAt DATETIME2 NOT NULL DEFAULT SYSDATETIME())`,
`IF OBJECT_ID('GRNItems','U') IS NULL CREATE TABLE GRNItems(Id INT IDENTITY PRIMARY KEY, GrnId INT NOT NULL REFERENCES GRNs(Id) ON DELETE CASCADE, ItemId INT NOT NULL REFERENCES Items(Id), ItemName NVARCHAR(100) NOT NULL, Qty INT NOT NULL, UnitCost DECIMAL(12,2) NOT NULL DEFAULT 0, LineTotal DECIMAL(12,2) NOT NULL DEFAULT 0, BatchNo NVARCHAR(50) NULL, ExpiryDate NVARCHAR(20) NULL)`,
`IF OBJECT_ID('SubscriptionCodes','U') IS NULL CREATE TABLE SubscriptionCodes(Code NVARCHAR(50) PRIMARY KEY, Months INT NOT NULL DEFAULT 1, UsedAt DATETIME2 NOT NULL DEFAULT SYSDATETIME(), Period NVARCHAR(10) NOT NULL, UsedBy NVARCHAR(100) NOT NULL, Note NVARCHAR(200) NULL)`,
`IF OBJECT_ID('Returns','U') IS NULL CREATE TABLE Returns(Id INT IDENTITY PRIMARY KEY, ReturnNo NVARCHAR(50) NOT NULL UNIQUE, SaleId INT NULL REFERENCES Sales(Id), InvoiceNo NVARCHAR(50) NULL, CashierId INT NOT NULL REFERENCES Users(Id), TotalRefund DECIMAL(12,2) NOT NULL DEFAULT 0, RefundMethod NVARCHAR(20) NOT NULL DEFAULT 'Cash', Reason NVARCHAR(250) NULL, Notes NVARCHAR(500) NULL, CreatedAt DATETIME2 NOT NULL DEFAULT SYSDATETIME())`,
`IF OBJECT_ID('ReturnItems','U') IS NULL CREATE TABLE ReturnItems(Id INT IDENTITY PRIMARY KEY, ReturnId INT NOT NULL REFERENCES Returns(Id) ON DELETE CASCADE, ItemId INT NOT NULL REFERENCES Items(Id), ItemName NVARCHAR(100) NOT NULL, Qty INT NOT NULL, UnitPrice DECIMAL(12,2) NOT NULL, RefundTotal DECIMAL(12,2) NOT NULL, Restock BIT NOT NULL DEFAULT 1, Reason NVARCHAR(100) NULL)`,
`IF OBJECT_ID('SupplierReturns','U') IS NULL CREATE TABLE SupplierReturns(Id INT IDENTITY PRIMARY KEY, ReturnNo NVARCHAR(50) NOT NULL UNIQUE, GrnId INT NULL REFERENCES GRNs(Id), GrnNo NVARCHAR(50) NULL, Supplier NVARCHAR(100) NOT NULL, TotalDebit DECIMAL(12,2) NOT NULL DEFAULT 0, Reason NVARCHAR(250) NULL, Notes NVARCHAR(500) NULL, ReturnedBy NVARCHAR(100) NOT NULL, CreatedAt DATETIME2 NOT NULL DEFAULT SYSDATETIME())`,
`IF OBJECT_ID('SupplierReturnItems','U') IS NULL CREATE TABLE SupplierReturnItems(Id INT IDENTITY PRIMARY KEY, ReturnId INT NOT NULL REFERENCES SupplierReturns(Id) ON DELETE CASCADE, ItemId INT NOT NULL REFERENCES Items(Id), ItemName NVARCHAR(100) NOT NULL, Qty INT NOT NULL, UnitCost DECIMAL(12,2) NOT NULL DEFAULT 0, LineTotal DECIMAL(12,2) NOT NULL DEFAULT 0, BatchNo NVARCHAR(50) NULL, Reason NVARCHAR(100) NULL)`,
`IF OBJECT_ID('Categories','U') IS NULL CREATE TABLE Categories(Id INT IDENTITY PRIMARY KEY, Name NVARCHAR(50) NOT NULL UNIQUE, Icon NVARCHAR(10) NULL DEFAULT '📦', CreatedAt DATETIME2 NOT NULL DEFAULT SYSDATETIME())`
];

const DEFAULT_BOOKSHOP_ITEMS = [
  // Stationery
  { name: 'Atlas Chooty Pen Blue', category: 'Stationery', price: 40, stock: 200, barcode: '8901234001', isService: 0 },
  { name: 'Atlas Chooty Pen Black', category: 'Stationery', price: 40, stock: 200, barcode: '8901234002', isService: 0 },
  { name: 'Atlas Chooty Pen Red', category: 'Stationery', price: 40, stock: 100, barcode: '8901234003', isService: 0 },
  { name: 'Natraj 2B Pencil', category: 'Stationery', price: 30, stock: 250, barcode: '8901234020', isService: 0 },
  { name: 'Maped Technic Eraser', category: 'Stationery', price: 25, stock: 180, barcode: '8901234025', isService: 0 },
  { name: 'Plastic Ruler 30cm', category: 'Stationery', price: 60, stock: 100, barcode: '8901234030', isService: 0 },
  { name: 'Mathematical Instrument Box', category: 'Stationery', price: 450, stock: 40, barcode: '8901234035', isService: 0 },
  { name: 'Atlas CR Book 80 Pgs Single Rule', category: 'Stationery', price: 180, stock: 120, barcode: '8901234010', isService: 0 },
  { name: 'Atlas CR Book 120 Pgs Single Rule', category: 'Stationery', price: 260, stock: 100, barcode: '8901234011', isService: 0 },
  { name: 'Atlas CR Book 200 Pgs Hard Cover', category: 'Stationery', price: 420, stock: 80, barcode: '8901234013', isService: 0 },
  { name: 'Exercise Book 80 Pgs Single Rule', category: 'Stationery', price: 110, stock: 150, barcode: '8901234015', isService: 0 },
  { name: 'Exercise Book 80 Pgs Square Rule', category: 'Stationery', price: 110, stock: 150, barcode: '8901234016', isService: 0 },
  { name: 'A4 Paper Ream 80gsm (500 Sheets)', category: 'Stationery', price: 1850, stock: 35, barcode: '8901234050', isService: 0 },
  { name: 'UHU Glue Stick 8.2g', category: 'Stationery', price: 190, stock: 70, barcode: '8901234040', isService: 0 },
  { name: 'Clear Box File A4', category: 'Stationery', price: 380, stock: 50, barcode: '8901234060', isService: 0 },
  // Books
  { name: 'Grade 5 Scholarship Model Papers', category: 'Books', price: 450, stock: 50, barcode: '9789551234011', isService: 0 },
  { name: 'O/L Mathematics Past Papers (10 Yrs)', category: 'Books', price: 650, stock: 35, barcode: '9789551234028', isService: 0 },
  { name: 'O/L Science Past Papers & Answers', category: 'Books', price: 680, stock: 35, barcode: '9789551234035', isService: 0 },
  { name: 'English-Sinhala Pocket Dictionary', category: 'Books', price: 550, stock: 25, barcode: '9789551234042', isService: 0 },
  { name: 'Children Illustrated Story Book', category: 'Books', price: 250, stock: 45, barcode: '9789551234059', isService: 0 },
  // Toys & Keytags
  { name: 'Cartoon Rubber Keytag', category: 'Toys & Keytags', price: 150, stock: 80, barcode: 'KTG-001', isService: 0 },
  { name: 'Metal Luxury Keytag', category: 'Toys & Keytags', price: 220, stock: 60, barcode: 'KTG-002', isService: 0 },
  { name: 'Die-Cast Mini Pullback Toy Car', category: 'Toys & Keytags', price: 350, stock: 40, barcode: 'TOY-001', isService: 0 },
  { name: '3x3 Speed Magic Rubik Cube', category: 'Toys & Keytags', price: 480, stock: 30, barcode: 'TOY-002', isService: 0 },
  { name: 'Bubble Wand Soap Blower', category: 'Toys & Keytags', price: 120, stock: 60, barcode: 'TOY-003', isService: 0 },
  { name: 'Decorative Gift Wrapping Sheet', category: 'Toys & Keytags', price: 50, stock: 150, barcode: 'GFT-001', isService: 0 },
  // Photocopy & Printing Services (IsService = 1, Stock = 0)
  { name: 'Photocopy A4 B/W (Single Sided)', category: 'Photocopy & Print', price: 10, stock: 0, barcode: 'SRV-PC-A4S', isService: 1 },
  { name: 'Photocopy A4 B/W (Double Sided)', category: 'Photocopy & Print', price: 15, stock: 0, barcode: 'SRV-PC-A4D', isService: 1 },
  { name: 'Photocopy A3 B/W', category: 'Photocopy & Print', price: 25, stock: 0, barcode: 'SRV-PC-A3', isService: 1 },
  { name: 'Color Photocopy / Print A4', category: 'Photocopy & Print', price: 50, stock: 0, barcode: 'SRV-PR-A4C', isService: 1 },
  { name: 'Color Photocopy / Print A3', category: 'Photocopy & Print', price: 120, stock: 0, barcode: 'SRV-PR-A3C', isService: 1 },
  { name: 'Computer Document Print A4 B/W', category: 'Photocopy & Print', price: 15, stock: 0, barcode: 'SRV-PR-A4BW', isService: 1 },
  { name: 'Passport / Photo Print (4 Copies)', category: 'Photocopy & Print', price: 200, stock: 0, barcode: 'SRV-PR-PHOTO', isService: 1 },
  // Laminating & Binding (IsService = 1, Stock = 0)
  { name: 'ID Card / License Lamination', category: 'Lamination & Binding', price: 80, stock: 0, barcode: 'SRV-LAM-ID', isService: 1 },
  { name: 'A4 Document / Certificate Lamination', category: 'Lamination & Binding', price: 150, stock: 0, barcode: 'SRV-LAM-A4', isService: 1 },
  { name: 'A3 Document / Poster Lamination', category: 'Lamination & Binding', price: 300, stock: 0, barcode: 'SRV-LAM-A3', isService: 1 },
  { name: 'Spiral Binding Small (Up to 50 pgs)', category: 'Lamination & Binding', price: 180, stock: 0, barcode: 'SRV-BND-SM', isService: 1 },
  { name: 'Spiral Binding Large (50-150 pgs)', category: 'Lamination & Binding', price: 280, stock: 0, barcode: 'SRV-BND-LG', isService: 1 },
  // Typing & Document Services (IsService = 1, Stock = 0)
  { name: 'Sinhala Letter Typing (Per Page)', category: 'Typing & Services', price: 200, stock: 0, barcode: 'SRV-TYP-SIN', isService: 1 },
  { name: 'English Letter / Agreement Typing', category: 'Typing & Services', price: 150, stock: 0, barcode: 'SRV-TYP-ENG', isService: 1 },
  { name: 'Professional CV / Resume Creation', category: 'Typing & Services', price: 500, stock: 0, barcode: 'SRV-TYP-CV', isService: 1 },
  { name: 'Document Scanning to PDF / Email', category: 'Typing & Services', price: 30, stock: 0, barcode: 'SRV-SCN-PDF', isService: 1 },
  { name: 'Exam Paper / Book Typesetting', category: 'Typing & Services', price: 180, stock: 0, barcode: 'SRV-TYP-SET', isService: 1 },
  { name: 'General Custom Service / Open Job', category: 'Typing & Services', price: 100, stock: 0, barcode: 'SRV-CUSTOM', isService: 1 }
];

async function seedBookshopCatalog(txOrPool) {
  for (const it of DEFAULT_BOOKSHOP_ITEMS) {
    const itemType = it.isService ? 'Service' : 'Product';
    await txOrPool.request()
      .input('n', sql.NVarChar, it.name)
      .input('c', sql.NVarChar, it.category)
      .input('p', sql.Decimal(12, 2), it.price)
      .input('s', sql.Int, it.stock)
      .input('b', sql.NVarChar, it.barcode)
      .input('it', sql.NVarChar, itemType)
      .input('is', sql.Bit, it.isService ? 1 : 0)
      .query(`
        IF NOT EXISTS(SELECT 1 FROM Items WHERE Name=@n AND Active=1)
          INSERT INTO Items(Name,Category,Price,Stock,Barcode,ItemType,IsService,Active)
          VALUES(@n,@c,@p,@s,@b,@it,@is,1)
      `);
  }
}

async function initDb() {
  const boot = await new sql.ConnectionPool({ ...DB, database: 'master' }).connect();
  await boot.request().query(`IF DB_ID('${DB.database}') IS NULL CREATE DATABASE [${DB.database}]`);
  await boot.close();
  pool = await new sql.ConnectionPool(DB).connect();
  for (const s of SCHEMA) await pool.request().query(s);
  await pool.request().query(`
    IF COL_LENGTH('Sales', 'PaymentMethod') IS NULL
      ALTER TABLE Sales ADD PaymentMethod NVARCHAR(20) NOT NULL DEFAULT 'Cash';
    IF COL_LENGTH('Sales', 'Discount') IS NULL
      ALTER TABLE Sales ADD Discount DECIMAL(12,2) NOT NULL DEFAULT 0;
    IF COL_LENGTH('Items', 'ImageUrl') IS NULL
      ALTER TABLE Items ADD ImageUrl NVARCHAR(500) NULL;
    IF COL_LENGTH('Items', 'ItemType') IS NULL
      ALTER TABLE Items ADD ItemType NVARCHAR(20) NOT NULL DEFAULT 'Product';
    IF COL_LENGTH('Items', 'IsService') IS NULL
      ALTER TABLE Items ADD IsService BIT NOT NULL DEFAULT 0;
    IF COL_LENGTH('Users', 'Permissions') IS NULL
      ALTER TABLE Users ADD Permissions NVARCHAR(500) NULL;
    IF OBJECT_ID('SubscriptionCodes','U') IS NULL
      CREATE TABLE SubscriptionCodes(Code NVARCHAR(50) PRIMARY KEY, Months INT NOT NULL DEFAULT 1, UsedAt DATETIME2 NOT NULL DEFAULT SYSDATETIME(), Period NVARCHAR(10) NOT NULL, UsedBy NVARCHAR(100) NOT NULL, Note NVARCHAR(200) NULL);
    UPDATE Settings SET [Value] = 'Commercial Bank' WHERE [Key] = 'bankName';
    UPDATE Settings SET [Value] = 'H.A Aman Manthira Hapuarachchi' WHERE [Key] = 'accName';
    UPDATE Settings SET [Value] = '8030194935' WHERE [Key] = 'accNumber';
    UPDATE Settings SET [Value] = 'Gampaha' WHERE [Key] = 'bankBranch';

    -- Deactivate legacy restaurant/food sample items if present
    UPDATE Items SET Active = 0 WHERE Name IN (
      'Chicken Fried Rice', 'Egg Fried Rice', 'Chicken Kottu', 'Cheese Kottu',
      'Fish Cutlet', 'Egg Roll', 'Vegetable Roti', 'Milk Tea', 'Lime Juice', 'Coca-Cola 400ml'
    );

    -- Seed Default Bookshop Categories if empty
    IF NOT EXISTS (SELECT 1 FROM Categories)
    BEGIN
      INSERT INTO Categories(Name, Icon) VALUES
      ('Stationery', '✏️'),
      ('Books', '📚'),
      ('Toys & Keytags', '🧸'),
      ('Photocopy & Print', '🖨️'),
      ('Lamination & Binding', '📑'),
      ('Typing & Services', '⌨️'),
      ('Paper & Files', '📁'),
      ('Gift Items & Art', '🎁'),
      ('General', '🌟');
    END;

    -- Sync any existing distinct categories from Items table
    INSERT INTO Categories(Name, Icon)
    SELECT DISTINCT LTRIM(RTRIM(Category)), '📦'
    FROM Items
    WHERE Category IS NOT NULL AND LTRIM(RTRIM(Category)) <> ''
      AND LTRIM(RTRIM(Category)) NOT IN (SELECT Name FROM Categories);
  `);
  const q = () => pool.request();
  if (!(await q().query('SELECT COUNT(*) c FROM Users')).recordset[0].c)
    await q().input('h', sql.NVarChar, bcrypt.hashSync('admin123', 10))
      .query(`INSERT INTO Users(Username,FullName,PasswordHash,Role,Permissions) VALUES('admin','Super Admin',@h,'Super Admin','*')`);
  
  // Seed Bookshop & Services catalog if empty or only legacy items were present
  const activeCount = (await q().query('SELECT COUNT(*) c FROM Items WHERE Active=1')).recordset[0].c;
  if (activeCount === 0) {
    await seedBookshopCatalog(pool);
  }

  const defaults = {
    fee: '3000',
    dueDay: '25',
    installedOn: new Date().toISOString(),
    bankName: 'Commercial Bank',
    accName: 'H.A Aman Manthira Hapuarachchi',
    accNumber: '8030194935',
    bankBranch: 'Gampaha',
    bankNotes: 'Please state your store name and bill invoice ID as payment reference.',
    shopName: 'Amectar Bookshop & Communication',
    shopTagline: 'Books, Stationery, Gifts & Print/Copy Services',
    shopAddress: 'No. 45, Station Road, Colombo',
    shopPhone: '071 234 5678 / 011 234 5678',
    shopTaxNo: 'BR-2024-BOOK99',
    receiptHeader: 'WELCOME TO AMECTAR BOOKSHOP',
    receiptFooter: 'Thank you for shopping with us! Photocopy, Print & Lamination Available.',
    receiptPaperWidth: '80mm',
    receiptAutoPrint: '1',
    backupPath: path.join(__dirname, 'backups')
  };
  try {
    const defaultBackupDir = path.join(__dirname, 'backups');
    if (!fs.existsSync(defaultBackupDir)) fs.mkdirSync(defaultBackupDir, { recursive: true });
  } catch {}
  for (const [k, v] of Object.entries(defaults))
    await q().input('k', sql.NVarChar, k).input('v', sql.NVarChar, v)
      .query('IF NOT EXISTS(SELECT 1 FROM Settings WHERE [Key]=@k) INSERT INTO Settings([Key],[Value]) VALUES(@k,@v)');
}

/* ---------- Subscription logic ---------- */
async function getSettings() {
  const o = {};
  (await pool.request().query('SELECT [Key] k, [Value] v FROM Settings')).recordset.forEach(x => (o[x.k] = x.v));
  return o;
}
const setSetting = (k, v) => pool.request().input('k', sql.NVarChar, k).input('v', sql.NVarChar, String(v))
  .query('IF EXISTS(SELECT 1 FROM Settings WHERE [Key]=@k) UPDATE Settings SET [Value]=@v WHERE [Key]=@k ELSE INSERT INTO Settings([Key],[Value]) VALUES(@k,@v)');
const ymd = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

async function subStatus() {
  const s = await getSettings();
  const subEnabled = s.subEnabled !== '0'; // default true: subscription active; false: one-payment lifetime project
  const dueDay = +s.dueDay || 25, fee = +s.fee || 3000;
  const isTamperLocked = s.subTamperLocked === '1';
  const failedAttempts = +s.subFailedAttempts || 0;

  // Basic clock-rollback protection: never go behind the last date we saw.
  let now = new Date();
  const seen = s.lastSeen ? new Date(s.lastSeen) : null;
  if (seen && seen > now) now = seen; else await setSetting('lastSeen', now.toISOString());
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const inst = new Date(s.installedOn || now);
  const installKey = `${inst.getFullYear()}-${String(inst.getMonth() + 1).padStart(2, '0')}`;
  const installDateStr = `${inst.getFullYear()}-${String(inst.getMonth() + 1).padStart(2, '0')}-${String(inst.getDate()).padStart(2, '0')}`;
  const paid = new Set((await pool.request().query('SELECT DISTINCT Period FROM Payments')).recordset.map(r => r.Period));
  const res = {
    state: (isTamperLocked && subEnabled) ? 'tamper_locked' : 'ok',
    subEnabled,
    isLifetime: !subEnabled,
    tamperLocked: isTamperLocked && subEnabled,
    failedAttempts,
    attemptsLeft: Math.max(0, 3 - failedAttempts),
    superAdminName: 'Aman Manthira Hapuarachchi',
    fee, dueDay, due: null, period: null, daysLeft: null, nextDue: null, 
    freeMonth: installKey,
    installedOn: installDateStr,
    bankDetails: {
      bankName: s.bankName || 'Commercial Bank',
      accName: s.accName || 'H.A Aman Manthira Hapuarachchi',
      accNumber: s.accNumber || '8030194935',
      bankBranch: s.bankBranch || 'Gampaha',
      bankNotes: s.bankNotes || 'Please state your store name and bill invoice ID as payment reference.'
    }
  };

  // If subscription is turned OFF (One-time payment project / perpetual lifetime license)
  if (!subEnabled) {
    return {
      ...res,
      state: 'ok',
      tamperLocked: false,
      isLifetime: true,
      due: null,
      period: null,
      daysLeft: null,
      nextDue: null
    };
  }

  // If locked by anti-cheat tamper protection, override any other state
  if (isTamperLocked) {
    return {
      ...res,
      state: 'tamper_locked',
      due: ymd(today),
      period: `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`,
      daysLeft: -99
    };
  }

  for (let m = -2; m <= 3; m++) {
    const dim = new Date(today.getFullYear(), today.getMonth() + m + 1, 0).getDate();
    const d = new Date(today.getFullYear(), today.getMonth() + m, Math.min(dueDay, dim));
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    const diff = Math.round((d - today) / 864e5);
    // Find next upcoming due date (only for months after installation month)
    if (!res.nextDue && diff >= 0 && key > installKey) res.nextDue = ymd(d);
    // Installation month and any prior months are 100% free - customer can use system with no codes needed!
    if (paid.has(key) || key <= installKey) continue;
    if (diff <= -3) return { ...res, state: 'locked', due: ymd(d), period: key, daysLeft: diff };
    if (diff <= 7 && res.state === 'ok') Object.assign(res, { state: 'warning', due: ymd(d), period: key, daysLeft: diff });
  }
  return res;
}
const recordPayment = (period, amount, method, note, by) => pool.request()
  .input('p', sql.Char(7), period).input('a', sql.Decimal(12, 2), amount).input('m', sql.NVarChar, method)
  .input('n', sql.NVarChar, note || null).input('b', sql.NVarChar, by)
  .query('INSERT INTO Payments(Period,Amount,Method,Note,RecordedBy) VALUES(@p,@a,@m,@n,@b)');

/* ---------- IPC plumbing: auth + RBAC + subscription lock enforced here ---------- */
function hasAccess(ch, session, roles) {
  if (!session) return false;
  // Super Admin always has full access to everything
  if (session.role === A) return true;

  // users:* and sub:* are strictly restricted to Super Admin by default
  if (ch.startsWith('users:') || ch.startsWith('sub:')) {
    return false;
  }

  // Determine user permissions list
  let userPerms = [];
  if (session.permissions) {
    userPerms = session.permissions.split(',').map(s => s.trim().toLowerCase());
  } else {
    // Default fallback by role
    if (session.role === M) userPerms = ['pos', 'dashboard', 'items', 'grn', 'reports', 'receipts'];
    else if (session.role === C) userPerms = ['pos', 'dashboard'];
  }

  // Channel to permission mapping
  if (ch.startsWith('sales:')) return userPerms.includes('pos');
  if (ch.startsWith('dashboard:')) return userPerms.includes('dashboard');
  if (ch.startsWith('items:') || ch.startsWith('categories:')) {
    if (ch === 'items:list' || ch === 'categories:list') return userPerms.includes('pos') || userPerms.includes('items') || userPerms.includes('grn');
    return userPerms.includes('items');
  }
  if (ch.startsWith('grn:') || ch.startsWith('supplierReturns:')) return userPerms.includes('grn');
  if (ch.startsWith('returns:')) return userPerms.includes('pos') || userPerms.includes('reports');
  if (ch.startsWith('reports:')) return userPerms.includes('reports');
  if (ch.startsWith('settings:')) {
    if (ch === 'settings:getReceipt') return true;
    return userPerms.includes('receipts');
  }

  return roles ? roles.includes(session.role) : true;
}

function handle(ch, roles, fn) {
  ipcMain.handle(ch, async (_e, p = {}) => {
    try {
      if (roles) {
        if (!session) throw new Error('Not logged in');
        if (!hasAccess(ch, session, roles)) throw new Error('Permission denied');
        const curSt = await subStatus();
        if (curSt.subEnabled && !ch.startsWith('sub:') && (curSt.state === 'locked' || curSt.state === 'tamper_locked')) throw new Error('SYSTEM_LOCKED');
      }
      return { ok: true, data: await fn(p) };
    } catch (e) { return { ok: false, error: e.message }; }
  });
}
const rng = (p, rq) => rq.input('f', sql.VarChar, p.from).input('t', sql.VarChar, p.to);
const RANGE = 'CreatedAt >= CAST(@f AS DATE) AND CreatedAt < DATEADD(day,1,CAST(@t AS DATE))';

handle('auth:login', null, async ({ username, password }) => {
  const u = (await pool.request().input('u', sql.NVarChar, username || '')
    .query('SELECT * FROM Users WHERE Username=@u AND Active=1')).recordset[0];
  if (!u || !bcrypt.compareSync(password || '', u.PasswordHash)) throw new Error('Invalid username or password');
  session = { id: u.Id, username: u.Username, fullName: u.FullName, role: u.Role, permissions: u.Permissions || null };
  return session;
});
handle('auth:changePassword', null, async ({ currentPassword, newPassword }) => {
  if (!session) throw new Error('Not logged in');
  if (!newPassword || newPassword.trim().length < 6) throw new Error('New password must be at least 6 characters');
  const u = (await pool.request().input('id', sql.Int, session.id).query('SELECT * FROM Users WHERE Id=@id AND Active=1')).recordset[0];
  if (!u) throw new Error('User not found');
  if (!bcrypt.compareSync(currentPassword || '', u.PasswordHash)) throw new Error('Current password is incorrect');
  await pool.request()
    .input('id', sql.Int, session.id)
    .input('h', sql.NVarChar, bcrypt.hashSync(newPassword.trim(), 10))
    .query('UPDATE Users SET PasswordHash=@h WHERE Id=@id');
  return true;
});
handle('auth:logout', null, async () => { session = null; });
handle('sub:status', null, subStatus);
handle('sub:override', null, async ({ username, password, fullName }) => {
  const u = (await pool.request().input('u', sql.NVarChar, username || '')
    .query(`SELECT * FROM Users WHERE Username=@u AND Active=1 AND Role='Super Admin'`)).recordset[0];
  if (!u || !bcrypt.compareSync(password || '', u.PasswordHash)) {
    throw new Error('Super Admin username and password verification failed.');
  }

  // Super Admin Full Name Verification (Must be Aman Manthira Hapuarachchi)
  const normInput = (fullName || '').trim().toLowerCase().replace(/[^a-z]/g, '');
  const target1 = 'amanmanthirahapuarachchi';
  const target2 = 'haamanmanthirahapuarachchi';
  const dbTarget = (u.FullName || '').trim().toLowerCase().replace(/[^a-z]/g, '');

  if (!normInput || (normInput !== target1 && normInput !== target2 && normInput !== dbTarget)) {
    throw new Error('Verification failed: Super Admin Full Name must match "Aman Manthira Hapuarachchi".');
  }

  // Reset tamper lock & failed attempts
  await setSetting('subTamperLocked', '0');
  await setSetting('subFailedAttempts', '0');

  const st = await subStatus();
  if (st.state === 'locked' || st.state === 'tamper_locked') {
    const period = st.period || `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}`;
    await recordPayment(period, 0, 'OVERRIDE', 'Manual Super Admin unlock by Aman Manthira Hapuarachchi', u.Username);
  }
  return true;
});
handle('sub:overview', ADMIN, async () => ({
  status: await subStatus(),
  payments: (await pool.request().query('SELECT TOP 36 * FROM Payments ORDER BY Id DESC')).recordset
}));
handle('sub:save', ADMIN, async ({ fee, dueDay, installedOn, subEnabled }) => {
  if (subEnabled !== undefined) {
    await setSetting('subEnabled', subEnabled ? '1' : '0');
  }
  if (fee !== undefined && fee >= 0) await setSetting('fee', fee);
  if (dueDay !== undefined && dueDay >= 1 && dueDay <= 28) await setSetting('dueDay', Math.floor(dueDay));
  if (installedOn) {
    const d = new Date(installedOn);
    if (!isNaN(d.getTime())) {
      await setSetting('installedOn', d.toISOString());
    }
  }
  return true;
});
handle('sub:setMode', ADMIN, async ({ subEnabled }) => {
  const isEnabled = Boolean(subEnabled);
  await setSetting('subEnabled', isEnabled ? '1' : '0');
  if (!isEnabled) {
    await setSetting('subTamperLocked', '0');
    await setSetting('subFailedAttempts', '0');
  }
  return await subStatus();
});
handle('sub:saveBank', ADMIN, async ({ bankName, accName, accNumber, bankBranch, bankNotes }) => {
  await setSetting('bankName', (bankName || '').trim());
  await setSetting('accName', (accName || '').trim());
  await setSetting('accNumber', (accNumber || '').trim());
  await setSetting('bankBranch', (bankBranch || '').trim());
  await setSetting('bankNotes', (bankNotes || '').trim());
  return true;
});
handle('sub:pay', ADMIN, async ({ period, amount, method, note }) => {
  if (!/^\d{4}-\d{2}$/.test(period)) throw new Error('Period must be YYYY-MM');
  await recordPayment(period, +amount || 0, method || 'Cash', note, session.username);
});

/* ---------- Secret 10-Digit Alphanumeric Pattern Subscription System ----------
   The Secret Rule:
   1. Exactly 10 alphanumeric characters (letters and digits, case-insensitive).
   2. Contains EXACTLY THREE '1' digits.
   3. Contains EXACTLY ONE 'A' letter.
   4. Stored in DB table `SubscriptionCodes` so each code can only ever be redeemed ONCE.
   5. Anti-Cheat: 3 invalid attempts trigger permanent Security Tamper Lockdown!
   ------------------------------------------------------------------------------- */
function validateSecretSubscriptionCode(raw) {
  if (!raw || typeof raw !== 'string') return { valid: false, reason: 'Please enter a 10-digit renewal code.' };
  const clean = raw.trim().toUpperCase().replace(/[\s-_]/g, '');
  if (clean.length !== 10) return { valid: false, reason: 'Renewal code must be exactly 10 characters.' };
  if (!/^[A-Z0-9]{10}$/.test(clean)) return { valid: false, reason: 'Renewal code must contain only letters and numbers.' };
  const ones = (clean.match(/1/g) || []).length;
  const as = (clean.match(/A/g) || []).length;
  if (ones === 3 && as === 1) {
    return { valid: true, code: clean };
  }
  return { valid: false, reason: 'Invalid activation code.' };
}

handle('sub:redeemCode', null, async ({ code }) => {
  const s = await getSettings();
  if (s.subTamperLocked === '1') {
    throw new Error('SECURITY FRAUD LOCKDOWN: Terminal is locked due to multiple invalid code attempts. Super Admin Aman Manthira Hapuarachchi must verify identity to unlock.');
  }

  const cleanInput = (code || '').trim().toUpperCase();
  if (!cleanInput) throw new Error('Please enter a 10-character renewal code.');

  // Validate Secret Pattern (10 chars, exactly three '1's, one 'A')
  const validation = validateSecretSubscriptionCode(cleanInput);

  if (!validation.valid) {
    // Increment failed attempts for anti-cheat
    const currentAttempts = (+s.subFailedAttempts || 0) + 1;
    await setSetting('subFailedAttempts', currentAttempts);

    if (currentAttempts >= 3) {
      await setSetting('subTamperLocked', '1');
      throw new Error('SECURITY ALERT: 3 invalid activation code attempts! Terminal is now locked in Security Fraud Mode. Super Admin (Aman Manthira Hapuarachchi) verification required.');
    } else {
      const left = 3 - currentAttempts;
      throw new Error(`Invalid activation code. Attempt ${currentAttempts} of 3. (${left} attempt${left > 1 ? 's' : ''} remaining before terminal locks against fraud)`);
    }
  }

  const validCode = validation.code;

  // Check if this specific code has already been redeemed in the lifetime database
  let isUsedInDb = false;
  try {
    const checkDb = await pool.request()
      .input('c', sql.NVarChar, validCode)
      .query('SELECT 1 FROM SubscriptionCodes WHERE Code=@c');
    if (checkDb.recordset.length > 0) isUsedInDb = true;
  } catch {}

  if (isUsedInDb) {
    throw new Error('This renewal code has already been redeemed previously. Please request a new code from your vendor.');
  }

  // Determine target period to unlock
  const st = await subStatus();
  let targetPeriod = st.period;

  if (!targetPeriod) {
    const paid = new Set((await pool.request().query('SELECT DISTINCT Period FROM Payments')).recordset.map(r => r.Period));
    const now = new Date();
    for (let m = 0; m <= 24; m++) {
      const d = new Date(now.getFullYear(), now.getMonth() + m, 1);
      const pKey = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
      if (!paid.has(pKey)) {
        targetPeriod = pKey;
        break;
      }
    }
  }

  if (!targetPeriod) {
    const now = new Date();
    targetPeriod = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  }

  const user = session ? session.username : 'Customer';

  // Record into SubscriptionCodes so this code can NEVER be reused
  try {
    await pool.request()
      .input('c', sql.NVarChar, validCode)
      .input('m', sql.Int, 1)
      .input('p', sql.NVarChar, targetPeriod)
      .input('u', sql.NVarChar, user)
      .input('n', sql.NVarChar, 'Secret pattern verified code')
      .query('INSERT INTO SubscriptionCodes(Code,Months,Period,UsedBy,Note) VALUES(@c,@m,@p,@u,@n)');
  } catch (err) {
    console.error('DB insert into SubscriptionCodes error:', err.message);
  }

  // Record payment
  await recordPayment(targetPeriod, st.fee || 3000, 'SECRET_CODE', `Activated via secret code ${validCode}`, user);

  // Reset failed attempts on success!
  await setSetting('subFailedAttempts', '0');
  await setSetting('subTamperLocked', '0');

  const updatedStatus = await subStatus();
  return {
    success: true,
    code: validCode,
    period: targetPeriod,
    months: 1,
    status: updatedStatus
  };
});

handle('sub:generateSecretCode', ADMIN, async () => {
  const poolChars = 'BCDEFGHIJKLMNOPQRSTUVWXYZ023456789'; // excluding '1' and 'A'
  let code = '';
  let attempts = 0;
  while (attempts < 100) {
    attempts++;
    const others = Array.from({ length: 6 }, () => poolChars[Math.floor(Math.random() * poolChars.length)]);
    const all = ['1', '1', '1', 'A', ...others];
    for (let i = all.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [all[i], all[j]] = [all[j], all[i]];
    }
    const candidate = all.join('');
    // Check if candidate is already in DB
    const checkDb = await pool.request().input('c', sql.NVarChar, candidate).query('SELECT 1 FROM SubscriptionCodes WHERE Code=@c');
    if (checkDb.recordset.length === 0) {
      code = candidate;
      break;
    }
  }
  return { code, pattern: "10-digit alphanumeric with exactly three '1's and one 'A'" };
});

handle('sub:listCodes', ADMIN, async () => {
  try {
    const dbCodes = (await pool.request().query('SELECT Code, Months, Period, UsedBy, UsedAt, Note FROM SubscriptionCodes ORDER BY UsedAt DESC')).recordset;
    return {
      total: dbCodes.length,
      used: dbCodes.length,
      available: '∞ (Infinite secret pattern)',
      codes: dbCodes.map(c => ({
        code: c.Code,
        used: true,
        usedAt: c.UsedAt,
        period: c.Period,
        usedBy: c.UsedBy,
        note: c.Note
      }))
    };
  } catch (e) {
    return { total: 0, used: 0, available: '∞', codes: [] };
  }
});

/* ---------- Receipt & Store Profile Settings ---------- */
handle('settings:getReceipt', ALL, async () => {
  const s = await getSettings();
  return {
    shopName: s.shopName || 'Kade POS Supermarket & Cafe',
    shopTagline: s.shopTagline || 'Fresh Quality Groceries & Food',
    shopAddress: s.shopAddress || 'No 124, High Level Road, Colombo 03',
    shopPhone: s.shopPhone || '071 234 5678 / 011 234 5678',
    shopTaxNo: s.shopTaxNo || 'BR-2024-99881',
    receiptHeader: s.receiptHeader || 'WELCOME TO KADE POS',
    receiptFooter: s.receiptFooter || 'Thank you for shopping with us! Please come again.',
    receiptPaperWidth: s.receiptPaperWidth || '80mm',
    receiptAutoPrint: s.receiptAutoPrint !== '0' ? '1' : '0'
  };
});

handle('settings:saveReceipt', MA, async (settings = {}) => {
  if (settings.shopName !== undefined) await setSetting('shopName', (settings.shopName || '').trim());
  if (settings.shopTagline !== undefined) await setSetting('shopTagline', (settings.shopTagline || '').trim());
  if (settings.shopAddress !== undefined) await setSetting('shopAddress', (settings.shopAddress || '').trim());
  if (settings.shopPhone !== undefined) await setSetting('shopPhone', (settings.shopPhone || '').trim());
  if (settings.shopTaxNo !== undefined) await setSetting('shopTaxNo', (settings.shopTaxNo || '').trim());
  if (settings.receiptHeader !== undefined) await setSetting('receiptHeader', (settings.receiptHeader || '').trim());
  if (settings.receiptFooter !== undefined) await setSetting('receiptFooter', (settings.receiptFooter || '').trim());
  if (settings.receiptPaperWidth !== undefined) await setSetting('receiptPaperWidth', settings.receiptPaperWidth === '58mm' ? '58mm' : '80mm');
  if (settings.receiptAutoPrint !== undefined) await setSetting('receiptAutoPrint', settings.receiptAutoPrint ? '1' : '0');
  return true;
});

/* ==========================================================================
   AUTOMATED DATABASE BACKUP SYSTEM (Hourly, 1 File Per Day Overwritten/Updated)
   ========================================================================== */
function getDefaultBackupPath() {
  try {
    const docs = app.getPath('documents');
    if (docs && fs.existsSync(docs)) return path.join(docs, 'BookShop_Backups');
  } catch {}
  try {
    const userD = app.getPath('userData');
    if (userD) return path.join(userD, 'Backups');
  } catch {}
  return path.join(__dirname, 'backups');
}

async function performDatabaseBackup() {
  if (!pool || !pool.connected) {
    console.warn('[AutoBackup] Database pool not ready, skipping backup.');
    return { success: false, error: 'Database not connected' };
  }

  const s = await getSettings();
  let targetFolder = (s.backupPath || '').trim();
  if (!targetFolder) targetFolder = getDefaultBackupPath();

  try {
    if (!fs.existsSync(targetFolder)) {
      fs.mkdirSync(targetFolder, { recursive: true });
    }
  } catch (err) {
    console.error('[AutoBackup] Failed to ensure backup folder:', err.message);
    targetFolder = path.join(app.getPath('userData') || __dirname, 'Backups');
    fs.mkdirSync(targetFolder, { recursive: true });
  }

  const now = new Date();
  const pad = n => String(n).padStart(2, '0');
  const dateStr = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
  const timeStr = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  
  // Strategy: Exactly ONE file per day, updated/overwritten every hour!
  const bakFileName = `BookShop_Backup_${dateStr}.bak`;
  const jsonFileName = `BookShop_Backup_${dateStr}.json`;
  
  const bakFilePath = path.join(targetFolder, bakFileName);
  const jsonFilePath = path.join(targetFolder, jsonFileName);

  let bakSuccess = false;
  let bakError = null;
  let bakSize = 0;

  // 1. Attempt Native SQL Server .bak Backup with WITH INIT, FORMAT to update the single daily file
  try {
    await pool.request()
      .input('path', sql.NVarChar, bakFilePath)
      .input('name', sql.NVarChar, `BookShopPOS-DailyBackup-${dateStr}`)
      .query(`BACKUP DATABASE [${DB.database}] TO DISK = @path WITH INIT, FORMAT, NAME = @name, SKIP, NOREWIND, NOUNLOAD, STATS = 10`);
    
    if (fs.existsSync(bakFilePath)) {
      bakSuccess = true;
      bakSize = fs.statSync(bakFilePath).size;
    }
  } catch (err) {
    bakError = err.message;
    console.warn('[AutoBackup] Native SQL Server .bak backup note:', err.message);
  }

  // 2. Comprehensive Structured JSON Database Snapshot (Guaranteed via Node.js permissions)
  let jsonSuccess = false;
  let jsonSize = 0;
  let stats = {};
  try {
    const q = () => pool.request();
    const [users, items, sales, saleItems, settings, payments, grns, grnItems, subCodes, returns, returnItems, suppReturns, suppReturnItems, categories] = await Promise.all([
      q().query('SELECT Id, Username, FullName, Role, Active, Permissions, PasswordHash FROM Users').then(r => r.recordset).catch(() => []),
      q().query('SELECT * FROM Items').then(r => r.recordset).catch(() => []),
      q().query('SELECT * FROM Sales').then(r => r.recordset).catch(() => []),
      q().query('SELECT * FROM SaleItems').then(r => r.recordset).catch(() => []),
      q().query('SELECT [Key], [Value] FROM Settings').then(r => r.recordset).catch(() => []),
      q().query('SELECT * FROM Payments').then(r => r.recordset).catch(() => []),
      q().query('SELECT * FROM GRNs').then(r => r.recordset).catch(() => []),
      q().query('SELECT * FROM GRNItems').then(r => r.recordset).catch(() => []),
      q().query('SELECT * FROM SubscriptionCodes').then(r => r.recordset).catch(() => []),
      q().query('SELECT * FROM Returns').then(r => r.recordset).catch(() => []),
      q().query('SELECT * FROM ReturnItems').then(r => r.recordset).catch(() => []),
      q().query('SELECT * FROM SupplierReturns').then(r => r.recordset).catch(() => []),
      q().query('SELECT * FROM SupplierReturnItems').then(r => r.recordset).catch(() => []),
      q().query('SELECT * FROM Categories').then(r => r.recordset).catch(() => [])
    ]);

    stats = {
      usersCount: users.length,
      itemsCount: items.length,
      categoriesCount: categories.length,
      salesCount: sales.length,
      saleItemsCount: saleItems.length,
      grnCount: grns.length,
      returnsCount: returns.length,
      supplierReturnsCount: suppReturns.length,
      paymentsCount: payments.length
    };

    const dump = {
      app: 'Amectar BookShop POS',
      version: '2.0',
      database: DB.database,
      backupDate: dateStr,
      lastUpdated: now.toISOString(),
      lastUpdatedFormatted: `${dateStr} ${timeStr}`,
      frequency: 'Hourly (Updated into same daily file)',
      stats,
      data: {
        Users: users,
        Categories: categories || [],
        Items: items,
        Sales: sales,
        SaleItems: saleItems,
        Settings: settings,
        Payments: payments,
        GRNs: grns,
        GRNItems: grnItems,
        SubscriptionCodes: subCodes,
        Returns: returns,
        ReturnItems: returnItems,
        SupplierReturns: suppReturns,
        SupplierReturnItems: suppReturnItems
      }
    };

    fs.writeFileSync(jsonFilePath, JSON.stringify(dump, null, 2), 'utf-8');
    jsonSuccess = true;
    jsonSize = fs.statSync(jsonFilePath).size;
  } catch (err) {
    console.error('[AutoBackup] Error exporting JSON backup:', err.message);
  }

  const success = bakSuccess || jsonSuccess;
  const isoNow = now.toISOString();

  await setSetting('lastBackupTime', isoNow);
  await setSetting('lastBackupStatus', success ? 'Success' : 'Failed');
  await setSetting('lastBackupFile', bakSuccess ? bakFileName : jsonFileName);
  await setSetting('lastBackupSize', String(bakSuccess ? bakSize : jsonSize));

  return {
    success,
    dateStr,
    timeStr,
    targetFolder,
    bakSuccess,
    bakFileName,
    bakSize,
    bakError,
    jsonSuccess,
    jsonFileName,
    jsonSize,
    stats,
    updatedAt: isoNow
  };
}

async function getBackupInfo() {
  const s = await getSettings();
  const folder = (s.backupPath || '').trim() || getDefaultBackupPath();
  
  const now = new Date();
  const pad = n => String(n).padStart(2, '0');
  const todayStr = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
  
  const todayBak = `BookShop_Backup_${todayStr}.bak`;
  const todayJson = `BookShop_Backup_${todayStr}.json`;

  let todayFile = null;
  let todayFileSize = 0;
  let todayFileMtime = null;
  let todayFileType = null;

  if (fs.existsSync(folder)) {
    const bakPath = path.join(folder, todayBak);
    const jsonPath = path.join(folder, todayJson);
    if (fs.existsSync(bakPath)) {
      const st = fs.statSync(bakPath);
      todayFile = todayBak;
      todayFileSize = st.size;
      todayFileMtime = st.mtime.toISOString();
      todayFileType = 'BAK (SQL Server)';
    } else if (fs.existsSync(jsonPath)) {
      const st = fs.statSync(jsonPath);
      todayFile = todayJson;
      todayFileSize = st.size;
      todayFileMtime = st.mtime.toISOString();
      todayFileType = 'JSON (Structured DB)';
    }
  }

  // Scan folder for all daily backup files
  const backupsList = [];
  try {
    if (fs.existsSync(folder)) {
      const files = fs.readdirSync(folder);
      const seenDates = new Set();
      for (const f of files) {
        if (f.startsWith('BookShop_Backup_') && (f.endsWith('.bak') || f.endsWith('.json'))) {
          const match = f.match(/BookShop_Backup_(\d{4}-\d{2}-\d{2})\.(bak|json)/);
          if (match) {
            const date = match[1];
            const fullPath = path.join(folder, f);
            const st = fs.statSync(fullPath);
            backupsList.push({
              fileName: f,
              date,
              type: match[2].toUpperCase(),
              size: st.size,
              updatedAt: st.mtime.toISOString()
            });
          }
        }
      }
      backupsList.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    }
  } catch (e) {
    console.error('Error scanning backup directory:', e);
  }

  return {
    backupPath: folder,
    isDefault: !s.backupPath,
    interval: 'Every 1 Hour',
    strategy: '1 File Per Day (Updated Hourly)',
    lastBackupTime: s.lastBackupTime || todayFileMtime || null,
    lastBackupStatus: s.lastBackupStatus || (todayFile ? 'Success' : 'Pending'),
    todayDate: todayStr,
    todayFile,
    todayFileSize,
    todayFileMtime,
    todayFileType,
    backupsList: backupsList.slice(0, 50)
  };
}

let backupTimer = null;
function startBackupSchedule() {
  if (backupTimer) clearInterval(backupTimer);
  // Auto-backup runs automatically every 1 hour (3600000 ms)
  backupTimer = setInterval(async () => {
    try {
      console.log('[AutoBackup] Hourly scheduled backup starting...');
      await performDatabaseBackup();
      console.log('[AutoBackup] Hourly scheduled backup complete.');
    } catch (e) {
      console.error('[AutoBackup] Hourly backup failed:', e.message);
    }
  }, 60 * 60 * 1000);
}

handle('backup:getInfo', MA, async () => await getBackupInfo());
handle('backup:run', MA, async () => await performDatabaseBackup());
handle('backup:chooseDirectory', MA, async () => {
  const win = BrowserWindow.getFocusedWindow();
  const res = await dialog.showOpenDialog(win, {
    title: 'Select Destination Folder for Automated Hourly Backups',
    properties: ['openDirectory', 'createDirectory']
  });
  if (res.canceled || !res.filePaths.length) return { canceled: true };
  const chosenPath = res.filePaths[0];
  await setSetting('backupPath', chosenPath);
  return { canceled: false, path: chosenPath, info: await getBackupInfo() };
});
handle('backup:setPath', MA, async ({ path: newPath }) => {
  if (!newPath || !newPath.trim()) throw new Error('Backup folder path cannot be empty');
  const clean = newPath.trim();
  if (!fs.existsSync(clean)) {
    fs.mkdirSync(clean, { recursive: true });
  }
  await setSetting('backupPath', clean);
  return await getBackupInfo();
});
handle('backup:openFolder', MA, async () => {
  const s = await getSettings();
  const bPath = (s.backupPath || '').trim() || getDefaultBackupPath();
  if (!fs.existsSync(bPath)) {
    fs.mkdirSync(bPath, { recursive: true });
  }
  await shell.openPath(bPath);
  return true;
});

handle('users:list', ADMIN, async () => (await pool.request().query('SELECT Id,Username,FullName,Role,Active,Permissions FROM Users ORDER BY Id')).recordset);
handle('users:save', ADMIN, async ({ id, username, fullName, password, role, active, permissions }) => {
  if (![C, M, A].includes(role)) throw new Error('Invalid role');
  if (!username?.trim() || !fullName?.trim()) throw new Error('Username and name are required');
  if (id === session.id && (role !== A || !active)) throw new Error('You cannot demote or disable yourself');
  const rq = pool.request().input('u', sql.NVarChar, username.trim()).input('n', sql.NVarChar, fullName.trim())
    .input('r', sql.NVarChar, role).input('a', sql.Bit, active ? 1 : 0)
    .input('perm', sql.NVarChar, permissions !== undefined ? permissions : null);
  if (id) {
    rq.input('id', sql.Int, id);
    if (password && password.trim()) {
      if (password.trim().length < 6) throw new Error('Password must be at least 6 characters');
      rq.input('h', sql.NVarChar, bcrypt.hashSync(password.trim(), 10));
      await rq.query('UPDATE Users SET Username=@u,FullName=@n,Role=@r,Active=@a,PasswordHash=@h,Permissions=@perm WHERE Id=@id');
    } else {
      await rq.query('UPDATE Users SET Username=@u,FullName=@n,Role=@r,Active=@a,Permissions=@perm WHERE Id=@id');
    }
  } else {
    if (!password || password.trim().length < 6) throw new Error('Password must be at least 6 characters');
    rq.input('h', sql.NVarChar, bcrypt.hashSync(password.trim(), 10));
    await rq.query('INSERT INTO Users(Username,FullName,PasswordHash,Role,Active,Permissions) VALUES(@u,@n,@h,@r,@a,@perm)');
  }
  return true;
});
handle('users:changePassword', ADMIN, async ({ id, newPassword }) => {
  if (!newPassword || newPassword.trim().length < 6) throw new Error('Password must be at least 6 characters');
  await pool.request()
    .input('id', sql.Int, id)
    .input('h', sql.NVarChar, bcrypt.hashSync(newPassword.trim(), 10))
    .query('UPDATE Users SET PasswordHash=@h WHERE Id=@id');
  return true;
});

handle('items:list', ALL, async () => (await pool.request().query(
  'SELECT Id, Name, Category, Price, Stock, Barcode, ImageUrl, Active, ISNULL(IsService, 0) AS IsService, ISNULL(ItemType, \'Product\') AS ItemType FROM Items WHERE Active=1 ORDER BY Category,Name'
)).recordset);

handle('items:save', MA, async ({ id, name, category, price, stock, barcode, imageUrl, itemType, isService }) => {
  price = +price; stock = parseInt(stock) || 0;
  const isServ = (isService || itemType === 'Service') ? 1 : 0;
  const iType = isServ ? 'Service' : 'Product';
  if (!name?.trim() || !category?.trim()) throw new Error('Name and category are required');
  if (!(price >= 0)) throw new Error('Price must be zero or more');
  if (!isServ && !(stock >= 0)) throw new Error('Stock must be zero or more');
  const rq = pool.request().input('n', sql.NVarChar, name.trim()).input('c', sql.NVarChar, category.trim())
    .input('p', sql.Decimal(12, 2), price).input('s', sql.Int, isServ ? 0 : stock).input('b', sql.NVarChar, barcode?.trim() || null)
    .input('img', sql.NVarChar, imageUrl?.trim() || null)
    .input('it', sql.NVarChar, iType)
    .input('is', sql.Bit, isServ);
  if (id) await rq.input('id', sql.Int, id).query('UPDATE Items SET Name=@n,Category=@c,Price=@p,Stock=@s,Barcode=@b,ImageUrl=@img,ItemType=@it,IsService=@is WHERE Id=@id');
  else await rq.query('INSERT INTO Items(Name,Category,Price,Stock,Barcode,ImageUrl,ItemType,IsService) VALUES(@n,@c,@p,@s,@b,@img,@it,@is)');
});

handle('items:delete', MA, async ({ id }) => { // soft delete keeps sales history intact
  await pool.request().input('id', sql.Int, id).query('UPDATE Items SET Active=0 WHERE Id=@id');
});

handle('items:seedBookshop', ADMIN, async () => {
  await seedBookshopCatalog(pool);
  return true;
});

/* ---------- Category Management ---------- */
handle('categories:list', ALL, async () => (await pool.request().query(`
  SELECT c.Id, c.Name, ISNULL(c.Icon, '📦') AS Icon,
         COUNT(i.Id) AS ItemCount
  FROM Categories c
  LEFT JOIN Items i ON i.Category = c.Name AND i.Active = 1
  GROUP BY c.Id, c.Name, c.Icon
  ORDER BY c.Name ASC
`)).recordset);

handle('categories:save', MA, async ({ id, name, icon }) => {
  const n = name?.trim();
  if (!n) throw new Error('Category name is required');
  const ic = icon?.trim() || '📦';

  if (id) {
    const existing = (await pool.request().input('id', sql.Int, id).query('SELECT * FROM Categories WHERE Id=@id')).recordset[0];
    if (!existing) throw new Error('Category not found');

    const dup = (await pool.request().input('id', sql.Int, id).input('n', sql.NVarChar, n)
      .query('SELECT Id FROM Categories WHERE Name=@n AND Id<>@id')).recordset[0];
    if (dup) throw new Error(`Category "${n}" already exists`);

    await pool.request()
      .input('id', sql.Int, id)
      .input('n', sql.NVarChar, n)
      .input('ic', sql.NVarChar, ic)
      .query('UPDATE Categories SET Name=@n, Icon=@ic WHERE Id=@id');

    if (existing.Name !== n) {
      await pool.request()
        .input('oldN', sql.NVarChar, existing.Name)
        .input('newN', sql.NVarChar, n)
        .query('UPDATE Items SET Category=@newN WHERE Category=@oldN');
    }
    return { id, name: n, icon: ic };
  } else {
    const dup = (await pool.request().input('n', sql.NVarChar, n).query('SELECT Id FROM Categories WHERE Name=@n')).recordset[0];
    if (dup) throw new Error(`Category "${n}" already exists`);

    const ins = (await pool.request()
      .input('n', sql.NVarChar, n)
      .input('ic', sql.NVarChar, ic)
      .query('INSERT INTO Categories(Name, Icon) OUTPUT inserted.Id VALUES(@n, @ic)')).recordset[0];
    return { id: ins.Id, name: n, icon: ic };
  }
});

handle('categories:delete', MA, async ({ id, reassignTo }) => {
  const cat = (await pool.request().input('id', sql.Int, id).query('SELECT * FROM Categories WHERE Id=@id')).recordset[0];
  if (!cat) throw new Error('Category not found');

  const itemsCount = (await pool.request().input('n', sql.NVarChar, cat.Name)
    .query('SELECT COUNT(*) AS c FROM Items WHERE Category=@n AND Active=1')).recordset[0].c;

  if (itemsCount > 0) {
    const targetCat = reassignTo?.trim() || 'General';
    const targetExists = (await pool.request().input('t', sql.NVarChar, targetCat).query('SELECT Id FROM Categories WHERE Name=@t')).recordset[0];
    if (!targetExists) {
      await pool.request().input('t', sql.NVarChar, targetCat).query('INSERT INTO Categories(Name, Icon) VALUES(@t, \'🌟\')');
    }
    await pool.request().input('oldN', sql.NVarChar, cat.Name).input('newN', sql.NVarChar, targetCat)
      .query('UPDATE Items SET Category=@newN WHERE Category=@oldN');
  }

  await pool.request().input('id', sql.Int, id).query('DELETE FROM Categories WHERE Id=@id');
  return { deleted: true, reassignedItems: itemsCount };
});

handle('sales:checkout', ALL, async ({ lines, paid, paymentMethod, billDiscount, splitCash, splitCard }) => {
  if (!Array.isArray(lines) || !lines.length) throw new Error('Cart is empty');
  const tx = new sql.Transaction(pool); await tx.begin();
  try {
    let subtotal = 0; const out = [];
    for (const l of lines) {
      const qty = parseInt(l.qty), disc = Math.min(100, Math.max(0, +l.disc || 0));
      if (!(qty > 0)) throw new Error('Invalid quantity');

      const it = (await new sql.Request(tx).input('id', sql.Int, l.id)
        .query('SELECT Id, Name, Price, Stock, ISNULL(IsService, 0) AS IsService, ISNULL(ItemType, \'Product\') AS ItemType FROM Items WHERE Id=@id AND Active=1')).recordset[0];
      if (!it) throw new Error(`Item unavailable (#${l.id})`);

      let unitPrice = it.Price;
      let itemName = it.Name;

      if (it.IsService) {
        // Service items: allow custom price and name overrides from Service Calculator
        if (l.customPrice !== undefined && +l.customPrice >= 0) unitPrice = +l.customPrice;
        if (l.customName && l.customName.trim()) itemName = l.customName.trim();
        // Do not deduct stock for service items
      } else {
        // Physical Product: require Stock >= qty and deduct
        const r = (await new sql.Request(tx).input('id', sql.Int, l.id).input('q', sql.Int, qty)
          .query('UPDATE Items SET Stock=Stock-@q OUTPUT inserted.Id,inserted.Name,inserted.Price WHERE Id=@id AND Active=1 AND Stock>=@q')).recordset[0];
        if (!r) throw new Error(`Insufficient stock for "${it.Name}" (Available: ${it.Stock}, Requested: ${qty})`);
      }

      const lt = r2(unitPrice * qty * (1 - disc / 100)); subtotal += lt;
      out.push({ id: it.Id, name: itemName, price: unitPrice, qty, disc, total: lt, isService: !!it.IsService });
    }
    subtotal = r2(subtotal);
    const discAmount = r2(Math.max(0, Math.min(subtotal, +billDiscount || 0)));
    const total = r2(Math.max(0, subtotal - discAmount));

    const method = (paymentMethod || 'Cash').trim();
    paid = +paid || 0;
    let balance = 0;
    let finalSplitCash = 0;
    let finalSplitCard = 0;

    if (method === 'Card') {
      paid = total;
      balance = 0;
    } else if (method === 'Split') {
      finalSplitCash = r2(Math.max(0, +splitCash || 0));
      finalSplitCard = r2(Math.max(0, +splitCard || Math.max(0, total - finalSplitCash)));
      if (r2(finalSplitCash + finalSplitCard) < total) {
        throw new Error('Split Cash + Card does not cover total bill');
      }
      if (paid < finalSplitCash) {
        throw new Error('Cash received is less than the Cash portion of Split payment');
      }
      balance = r2(Math.max(0, paid - finalSplitCash));
    } else {
      if (!(paid >= total)) throw new Error('Cash received is less than the total');
      balance = r2(Math.max(0, paid - total));
    }

    const recordedPaid = method === 'Split' ? r2(paid + finalSplitCard) : paid;

    const sale = (await new sql.Request(tx)
      .input('c', sql.Int, session.id)
      .input('t', sql.Decimal(12, 2), total)
      .input('p', sql.Decimal(12, 2), recordedPaid)
      .input('b', sql.Decimal(12, 2), balance)
      .input('m', sql.NVarChar, method)
      .input('d', sql.Decimal(12, 2), discAmount)
      .query('INSERT INTO Sales(CashierId,Total,Paid,Balance,PaymentMethod,Discount) OUTPUT inserted.Id VALUES(@c,@t,@p,@b,@m,@d)')).recordset[0].Id;
    
    const invoiceNo = 'INV-' + String(sale).padStart(6, '0');
    await new sql.Request(tx).input('i', sql.NVarChar, invoiceNo).input('id', sql.Int, sale).query('UPDATE Sales SET InvoiceNo=@i WHERE Id=@id');
    for (const l of out)
      await new sql.Request(tx).input('s', sql.Int, sale).input('i', sql.Int, l.id).input('n', sql.NVarChar, l.name)
        .input('q', sql.Int, l.qty).input('u', sql.Decimal(12, 2), l.price).input('d', sql.Decimal(5, 2), l.disc).input('t', sql.Decimal(12, 2), l.total)
        .query('INSERT INTO SaleItems(SaleId,ItemId,ItemName,Qty,UnitPrice,DiscountPct,LineTotal) VALUES(@s,@i,@n,@q,@u,@d,@t)');
    await tx.commit();
    const st = await getSettings();
    return {
      invoiceNo,
      createdAt: new Date().toISOString(),
      cashier: session.fullName,
      lines: out,
      subtotal,
      discount: discAmount,
      total,
      paid,
      balance,
      paymentMethod: method,
      splitCash: finalSplitCash,
      splitCard: finalSplitCard,
      shopSettings: {
        shopName: st.shopName || 'Amectar Bookshop & Communication',
        shopTagline: st.shopTagline || 'Books, Stationery, Gifts & Print/Copy Services',
        shopAddress: st.shopAddress || 'No. 45, Station Road, Colombo',
        shopPhone: st.shopPhone || '071 234 5678 / 011 234 5678',
        shopTaxNo: st.shopTaxNo || 'BR-2024-BOOK99',
        receiptHeader: st.receiptHeader || 'WELCOME TO AMECTAR BOOKSHOP',
        receiptFooter: st.receiptFooter || 'Thank you for shopping with us! Photocopy, Print & Lamination Available.',
        receiptPaperWidth: st.receiptPaperWidth || '80mm',
        receiptAutoPrint: st.receiptAutoPrint !== '0' ? '1' : '0'
      }
    };
  } catch (e) { await tx.rollback().catch(() => {}); throw e; }
});

/* ==========================================================================
   CUSTOMER RETURNS & REFUNDS HANDLERS
   ========================================================================== */
handle('returns:findInvoice', ALL, async ({ invoiceNo, saleId }) => {
  let sale = null;
  if (invoiceNo && invoiceNo.trim()) {
    const inv = invoiceNo.trim();
    sale = (await pool.request()
      .input('inv', sql.NVarChar, inv)
      .input('num', sql.Int, parseInt(inv.replace(/\D/g, '')) || 0)
      .query(`SELECT s.*, u.FullName CashierName 
              FROM Sales s 
              LEFT JOIN Users u ON u.Id = s.CashierId 
              WHERE s.InvoiceNo = @inv OR s.Id = @num`)).recordset[0];
  } else if (saleId) {
    sale = (await pool.request().input('id', sql.Int, saleId)
      .query(`SELECT s.*, u.FullName CashierName 
              FROM Sales s 
              LEFT JOIN Users u ON u.Id = s.CashierId 
              WHERE s.Id = @id`)).recordset[0];
  }
  if (!sale) throw new Error('Invoice not found. Please verify bill number.');

  // Get sale items along with any already returned quantities
  const items = (await pool.request().input('sid', sql.Int, sale.Id)
    .query(`
      SELECT si.Id AS SaleItemId, si.ItemId, si.ItemName, si.Qty, si.UnitPrice, si.DiscountPct, si.LineTotal,
             ISNULL(i.IsService, 0) AS IsService,
             ISNULL((
               SELECT SUM(ri.Qty) 
               FROM ReturnItems ri 
               JOIN Returns r ON r.Id = ri.ReturnId 
               WHERE r.SaleId = si.SaleId AND ri.ItemId = si.ItemId
             ), 0) AS ReturnedQty
      FROM SaleItems si
      LEFT JOIN Items i ON i.Id = si.ItemId
      WHERE si.SaleId = @sid
    `)).recordset;

  const returnable = items.map(it => ({
    ...it,
    availableReturnQty: Math.max(0, it.Qty - it.ReturnedQty)
  }));

  return { sale, items: returnable };
});

handle('returns:process', ALL, async ({ saleId, invoiceNo, items, refundMethod, reason, notes }) => {
  if (!Array.isArray(items) || !items.length) throw new Error('No items selected for return');
  const tx = new sql.Transaction(pool);
  await tx.begin();
  try {
    let totalRefund = 0;
    const validated = [];
    for (const row of items) {
      const qty = parseInt(row.qty);
      if (!(qty > 0)) throw new Error('Invalid return quantity');
      const unitPrice = Math.max(0, +row.unitPrice || 0);
      const lineRefund = r2(qty * unitPrice);
      totalRefund += lineRefund;

      const it = (await new sql.Request(tx).input('id', sql.Int, row.itemId)
        .query('SELECT Id, Name, IsService, Stock FROM Items WHERE Id=@id')).recordset[0];
      if (!it) throw new Error(`Item not found (#${row.itemId})`);

      validated.push({
        itemId: it.Id,
        itemName: row.itemName || it.Name,
        qty,
        unitPrice,
        refundTotal: lineRefund,
        restock: Boolean(row.restock),
        isService: Boolean(it.IsService),
        reason: (row.reason || reason || 'Customer Return').trim()
      });
    }
    totalRefund = r2(totalRefund);

    const d = new Date();
    const pad = n => String(n).padStart(2, '0');
    const datePart = `${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}`;
    const rand = Math.floor(1000 + Math.random() * 9000);
    const returnNo = `RET-${datePart}-${rand}`;

    const retRes = await new sql.Request(tx)
      .input('rn', sql.NVarChar, returnNo)
      .input('sid', sql.Int, saleId || null)
      .input('inv', sql.NVarChar, invoiceNo || null)
      .input('cid', sql.Int, session.id)
      .input('tr', sql.Decimal(12, 2), totalRefund)
      .input('rm', sql.NVarChar, (refundMethod || 'Cash').trim())
      .input('rs', sql.NVarChar, (reason || 'Customer Return').trim())
      .input('nt', sql.NVarChar, (notes || '').trim() || null)
      .query(`INSERT INTO Returns(ReturnNo, SaleId, InvoiceNo, CashierId, TotalRefund, RefundMethod, Reason, Notes)
              OUTPUT inserted.Id VALUES(@rn, @sid, @inv, @cid, @tr, @rm, @rs, @nt)`);
    
    const returnId = retRes.recordset[0].Id;

    for (const v of validated) {
      await new sql.Request(tx)
        .input('rid', sql.Int, returnId)
        .input('iid', sql.Int, v.itemId)
        .input('inm', sql.NVarChar, v.itemName)
        .input('q', sql.Int, v.qty)
        .input('up', sql.Decimal(12, 2), v.unitPrice)
        .input('rt', sql.Decimal(12, 2), v.refundTotal)
        .input('rst', sql.Bit, v.restock ? 1 : 0)
        .input('rsn', sql.NVarChar, v.reason)
        .query(`INSERT INTO ReturnItems(ReturnId, ItemId, ItemName, Qty, UnitPrice, RefundTotal, Restock, Reason)
                VALUES(@rid, @iid, @inm, @q, @up, @rt, @rst, @rsn)`);

      // If restocking physical product, increment inventory stock
      if (v.restock && !v.isService) {
        await new sql.Request(tx)
          .input('iid', sql.Int, v.itemId)
          .input('q', sql.Int, v.qty)
          .query('UPDATE Items SET Stock = Stock + @q WHERE Id=@iid');
      }
    }

    await tx.commit();

    const st = await getSettings();
    return {
      returnId,
      returnNo,
      invoiceNo: invoiceNo || 'Direct Return',
      createdAt: d.toISOString(),
      cashier: session.fullName,
      items: validated,
      totalRefund,
      refundMethod: refundMethod || 'Cash',
      reason: reason || 'Customer Return',
      notes: notes || '',
      shopSettings: {
        shopName: st.shopName || 'Amectar Bookshop & Communication',
        shopTagline: st.shopTagline || 'Books, Stationery, Gifts & Print/Copy Services',
        shopAddress: st.shopAddress || 'No. 45, Station Road, Colombo',
        shopPhone: st.shopPhone || '071 234 5678 / 011 234 5678',
        receiptHeader: 'CUSTOMER RETURN & REFUND VOUCHER',
        receiptFooter: 'Item(s) processed for refund/exchange. Thank you.',
        receiptPaperWidth: st.receiptPaperWidth || '80mm'
      }
    };
  } catch (e) {
    await tx.rollback().catch(() => {});
    throw e;
  }
});

handle('returns:list', ALL, async () => (await pool.request().query(`
  SELECT TOP 100 r.Id, r.ReturnNo, r.InvoiceNo, r.TotalRefund, r.RefundMethod, r.Reason, r.CreatedAt,
         u.FullName AS CashierName,
         COUNT(ri.Id) AS ItemCount,
         ISNULL(SUM(ri.Qty), 0) AS TotalQty
  FROM Returns r
  LEFT JOIN Users u ON u.Id = r.CashierId
  LEFT JOIN ReturnItems ri ON ri.ReturnId = r.Id
  GROUP BY r.Id, r.ReturnNo, r.InvoiceNo, r.TotalRefund, r.RefundMethod, r.Reason, r.CreatedAt, u.FullName
  ORDER BY r.Id DESC
`)).recordset);

handle('returns:get', ALL, async ({ id }) => {
  const ret = (await pool.request().input('id', sql.Int, id)
    .query(`SELECT r.*, u.FullName CashierName 
            FROM Returns r 
            LEFT JOIN Users u ON u.Id = r.CashierId 
            WHERE r.Id = @id`)).recordset[0];
  if (!ret) throw new Error('Return voucher not found');
  const items = (await pool.request().input('id', sql.Int, id)
    .query('SELECT * FROM ReturnItems WHERE ReturnId = @id ORDER BY Id ASC')).recordset;
  return { return: ret, items };
});

/* ==========================================================================
   REPORTS & ANALYTICS HANDLERS
   ========================================================================== */
handle('reports:daily', MA, async p => (await rng(p, pool.request()).query(
  `SELECT CONVERT(VARCHAR(10),CreatedAt,120) Day, COUNT(*) Bills, SUM(Total) Total, ISNULL(SUM(Discount),0) Discount FROM Sales WHERE ${RANGE} GROUP BY CONVERT(VARCHAR(10),CreatedAt,120) ORDER BY Day DESC`)).recordset);

handle('reports:items', MA, async p => (await rng(p, pool.request()).query(
  `SELECT si.ItemName Item, ISNULL(i.Category, 'General') Category, SUM(si.Qty) Qty, SUM(si.LineTotal) Total 
   FROM SaleItems si 
   JOIN Sales ON Sales.Id=si.SaleId 
   LEFT JOIN Items i ON i.Id=si.ItemId
   WHERE ${RANGE} 
   GROUP BY si.ItemName, i.Category 
   ORDER BY Total DESC`)).recordset);

handle('reports:cashiers', MA, async p => (await rng(p, pool.request()).query(
  `SELECT u.FullName Cashier, COUNT(*) Bills, SUM(Sales.Total) Total,
          CASE WHEN COUNT(*) > 0 THEN ROUND(SUM(Sales.Total) / COUNT(*), 2) ELSE 0 END AOV
   FROM Sales 
   JOIN Users u ON u.Id=Sales.CashierId 
   WHERE ${RANGE} 
   GROUP BY u.FullName 
   ORDER BY Total DESC`)).recordset);

handle('reports:grn', MA, async p => (await rng(p, pool.request()).query(
  `SELECT g.Id, g.GrnNo, g.Supplier, ISNULL(g.InvoiceRef, '—') InvoiceRef, g.TotalCost Total, g.ReceivedBy,
          CONVERT(VARCHAR(10),g.CreatedAt,120) Day, g.CreatedAt,
          COUNT(gi.Id) ItemsCount, ISNULL(SUM(gi.Qty), 0) TotalQty
   FROM GRNs g
   LEFT JOIN GRNItems gi ON gi.GrnId = g.Id
   WHERE g.CreatedAt >= CAST(@f AS DATE) AND g.CreatedAt < DATEADD(day,1,CAST(@t AS DATE))
   GROUP BY g.Id, g.GrnNo, g.Supplier, g.InvoiceRef, g.TotalCost, g.ReceivedBy, g.CreatedAt
   ORDER BY g.Id DESC`)).recordset);

handle('reports:grn_items', MA, async p => (await rng(p, pool.request()).query(
  `SELECT gi.ItemName Item, g.Supplier, g.GrnNo, ISNULL(gi.BatchNo, '—') BatchNo,
          SUM(gi.Qty) Qty, gi.UnitCost, SUM(gi.LineTotal) Total,
          CONVERT(VARCHAR(10),g.CreatedAt,120) Day
   FROM GRNItems gi
   JOIN GRNs g ON g.Id = gi.GrnId
   WHERE g.CreatedAt >= CAST(@f AS DATE) AND g.CreatedAt < DATEADD(day,1,CAST(@t AS DATE))
   GROUP BY gi.ItemName, g.Supplier, g.GrnNo, gi.BatchNo, gi.UnitCost, CONVERT(VARCHAR(10),g.CreatedAt,120)
   ORDER BY Day DESC, Total DESC`)).recordset);

handle('reports:returns', MA, async p => (await rng(p, pool.request()).query(
  `SELECT r.Id, r.ReturnNo, ISNULL(r.InvoiceNo, 'Direct Return') InvoiceNo,
          u.FullName Cashier, r.RefundMethod Method, ISNULL(r.Reason, 'Customer Return') Reason,
          r.TotalRefund Total, CONVERT(VARCHAR(10),r.CreatedAt,120) Day, r.CreatedAt,
          COUNT(ri.Id) ItemsCount, ISNULL(SUM(ri.Qty), 0) TotalQty
   FROM Returns r
   LEFT JOIN Users u ON u.Id = r.CashierId
   LEFT JOIN ReturnItems ri ON ri.ReturnId = r.Id
   WHERE r.CreatedAt >= CAST(@f AS DATE) AND r.CreatedAt < DATEADD(day,1,CAST(@t AS DATE))
   GROUP BY r.Id, r.ReturnNo, r.InvoiceNo, u.FullName, r.RefundMethod, r.Reason, r.TotalRefund, r.CreatedAt
   ORDER BY r.Id DESC`)).recordset);

handle('reports:categories', MA, async p => (await rng(p, pool.request()).query(
  `SELECT ISNULL(i.Category, 'General') Category, COUNT(DISTINCT s.Id) Bills, SUM(si.Qty) Qty,
          ISNULL(SUM(si.LineTotal), 0) Total
   FROM SaleItems si
   JOIN Items i ON i.Id = si.ItemId
   JOIN Sales s ON s.Id = si.SaleId
   WHERE s.CreatedAt >= CAST(@f AS DATE) AND s.CreatedAt < DATEADD(day,1,CAST(@t AS DATE))
   GROUP BY i.Category
   ORDER BY Total DESC`)).recordset);

handle('reports:payments', MA, async p => (await rng(p, pool.request()).query(
  `SELECT ISNULL(PaymentMethod, 'Cash') Method, COUNT(*) Bills,
          ISNULL(SUM(Total), 0) Total
   FROM Sales
   WHERE CreatedAt >= CAST(@f AS DATE) AND CreatedAt < DATEADD(day,1,CAST(@t AS DATE))
   GROUP BY PaymentMethod
   ORDER BY Total DESC`)).recordset);

handle('reports:supplier_returns', MA, async p => (await rng(p, pool.request()).query(
  `SELECT sr.Id, sr.ReturnNo, sr.Supplier, ISNULL(sr.GrnNo, 'Direct Return') GrnNo,
          sr.TotalDebit Total, ISNULL(sr.Reason, 'Vendor Return') Reason,
          sr.ReturnedBy, CONVERT(VARCHAR(10),sr.CreatedAt,120) Day, sr.CreatedAt,
          COUNT(sri.Id) ItemsCount, ISNULL(SUM(sri.Qty), 0) TotalQty
   FROM SupplierReturns sr
   LEFT JOIN SupplierReturnItems sri ON sri.ReturnId = sr.Id
   WHERE sr.CreatedAt >= CAST(@f AS DATE) AND sr.CreatedAt < DATEADD(day,1,CAST(@t AS DATE))
   GROUP BY sr.Id, sr.ReturnNo, sr.Supplier, sr.GrnNo, sr.TotalDebit, sr.Reason, sr.ReturnedBy, sr.CreatedAt
   ORDER BY sr.Id DESC`)).recordset);

handle('reports:supplier_return_items', MA, async p => (await rng(p, pool.request()).query(
  `SELECT sri.ItemName Item, sr.Supplier, sr.ReturnNo, ISNULL(sri.BatchNo, '—') BatchNo,
          sri.Qty, sri.UnitCost, sri.LineTotal Total, ISNULL(sri.Reason, sr.Reason) Reason,
          CONVERT(VARCHAR(10),sr.CreatedAt,120) Day
   FROM SupplierReturnItems sri
   JOIN SupplierReturns sr ON sr.Id = sri.ReturnId
   WHERE sr.CreatedAt >= CAST(@f AS DATE) AND sr.CreatedAt < DATEADD(day,1,CAST(@t AS DATE))
   ORDER BY Day DESC, Total DESC`)).recordset);

/* ---------- Dashboard & GRN ---------- */
handle('dashboard:overview', ALL, async () => {
  const q = () => pool.request();
  
  const todayRow = (await q().query(`
    SELECT COUNT(*) bills, ISNULL(SUM(Total), 0) total, ISNULL(SUM(Discount), 0) discount
    FROM Sales
    WHERE CreatedAt >= CAST(CAST(GETDATE() AS DATE) AS DATETIME2)
  `)).recordset[0];

  const monthRow = (await q().query(`
    SELECT COUNT(*) bills, ISNULL(SUM(Total), 0) total, ISNULL(SUM(Discount), 0) discount
    FROM Sales
    WHERE CreatedAt >= DATEFROMPARTS(YEAR(GETDATE()), MONTH(GETDATE()), 1)
  `)).recordset[0];

  const stockRow = (await q().query(`
    SELECT 
      COUNT(*) totalItems,
      SUM(CASE WHEN ISNULL(IsService, 0) = 0 AND Stock <= 5 THEN 1 ELSE 0 END) lowStockCount,
      ISNULL(SUM(CASE WHEN ISNULL(IsService, 0) = 0 THEN Price * Stock ELSE 0 END), 0) totalValuation,
      ISNULL(SUM(CASE WHEN ISNULL(IsService, 0) = 0 THEN Stock ELSE 0 END), 0) totalUnits
    FROM Items
    WHERE Active = 1
  `)).recordset[0];

  const lowStockItems = (await q().query(`
    SELECT TOP 8 Id, Name, Category, Price, Stock
    FROM Items
    WHERE Active = 1 AND ISNULL(IsService, 0) = 0 AND Stock <= 10
    ORDER BY Stock ASC, Name ASC
  `)).recordset;

  const recentSales = (await q().query(`
    SELECT TOP 10 s.Id, s.InvoiceNo, s.Total, s.Paid, s.Balance, ISNULL(s.PaymentMethod, 'Cash') PaymentMethod, s.Discount, s.CreatedAt, u.FullName Cashier
    FROM Sales s
    JOIN Users u ON u.Id = s.CashierId
    ORDER BY s.Id DESC
  `)).recordset;

  // 14-day exact daily sales trend for fully dynamic SVG curves
  const last14Days = (await q().query(`
    WITH Dates AS (
      SELECT CAST(DATEADD(day, -v.n, CAST(GETDATE() AS DATE)) AS DATE) [Date]
      FROM (VALUES (0),(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13)) v(n)
    )
    SELECT 
      CONVERT(VARCHAR(10), d.[Date], 120) [Day],
      DATENAME(weekday, d.[Date]) [Weekday],
      COUNT(s.Id) Bills,
      ISNULL(SUM(s.Total), 0) Total,
      ISNULL(SUM(s.Discount), 0) Discount
    FROM Dates d
    LEFT JOIN Sales s ON CAST(s.CreatedAt AS DATE) = d.[Date]
    GROUP BY d.[Date]
    ORDER BY d.[Date] ASC
  `)).recordset;

  // Sales by Category (last 30 days)
  const categorySales = (await q().query(`
    SELECT i.Category, COUNT(DISTINCT s.Id) Bills, SUM(si.Qty) Qty, ISNULL(SUM(si.LineTotal), 0) Total
    FROM SaleItems si
    JOIN Items i ON i.Id = si.ItemId
    JOIN Sales s ON s.Id = si.SaleId
    WHERE s.CreatedAt >= DATEADD(day, -30, GETDATE())
    GROUP BY i.Category
    ORDER BY Total DESC
  `)).recordset;

  // Payment methods split (Cash vs Card)
  const paymentMethods = (await q().query(`
    SELECT ISNULL(PaymentMethod, 'Cash') Method, COUNT(*) Bills, ISNULL(SUM(Total), 0) Total
    FROM Sales
    WHERE CreatedAt >= DATEADD(day, -30, GETDATE())
    GROUP BY PaymentMethod
  `)).recordset;

  // Top selling items: Today, Weekly (7 days), and Monthly (30 days)
  const topItemsToday = (await q().query(`
    SELECT TOP 6 si.ItemName Name, ISNULL(MAX(i.Category), 'General') Category, SUM(si.Qty) Qty, ISNULL(SUM(si.LineTotal), 0) Total, COUNT(DISTINCT s.Id) Bills
    FROM SaleItems si
    LEFT JOIN Items i ON i.Id = si.ItemId
    JOIN Sales s ON s.Id = si.SaleId
    WHERE CAST(s.CreatedAt AS DATE) = CAST(GETDATE() AS DATE)
    GROUP BY si.ItemName
    ORDER BY Total DESC, Qty DESC
  `)).recordset;

  const topItemsWeekly = (await q().query(`
    SELECT TOP 6 si.ItemName Name, ISNULL(MAX(i.Category), 'General') Category, SUM(si.Qty) Qty, ISNULL(SUM(si.LineTotal), 0) Total, COUNT(DISTINCT s.Id) Bills
    FROM SaleItems si
    LEFT JOIN Items i ON i.Id = si.ItemId
    JOIN Sales s ON s.Id = si.SaleId
    WHERE s.CreatedAt >= DATEADD(day, -7, GETDATE())
    GROUP BY si.ItemName
    ORDER BY Total DESC, Qty DESC
  `)).recordset;

  const topItemsMonthly = (await q().query(`
    SELECT TOP 6 si.ItemName Name, ISNULL(MAX(i.Category), 'General') Category, SUM(si.Qty) Qty, ISNULL(SUM(si.LineTotal), 0) Total, COUNT(DISTINCT s.Id) Bills
    FROM SaleItems si
    LEFT JOIN Items i ON i.Id = si.ItemId
    JOIN Sales s ON s.Id = si.SaleId
    WHERE s.CreatedAt >= DATEADD(day, -30, GETDATE())
    GROUP BY si.ItemName
    ORDER BY Total DESC, Qty DESC
  `)).recordset;

  // Cashier sales summary
  const cashiers = (await q().query(`
    SELECT TOP 5 u.FullName Cashier, COUNT(s.Id) Bills, ISNULL(SUM(s.Total), 0) Total
    FROM Users u
    LEFT JOIN Sales s ON s.CashierId = u.Id AND s.CreatedAt >= DATEADD(day, -30, GETDATE())
    WHERE u.Active = 1
    GROUP BY u.FullName
    ORDER BY Total DESC
  `)).recordset;

  const totalBillsMonth = +monthRow.bills || 0;
  const totalSalesMonth = +monthRow.total || 0;
  const aov = totalBillsMonth > 0 ? r2(totalSalesMonth / totalBillsMonth) : 0;

  return {
    todaySales: r2(+todayRow.total || 0),
    todayBills: +todayRow.bills || 0,
    todayDiscount: r2(+todayRow.discount || 0),
    monthSales: r2(totalSalesMonth),
    monthBills: totalBillsMonth,
    monthDiscount: r2(+monthRow.discount || 0),
    aov,
    totalItems: +stockRow.totalItems || 0,
    lowStockCount: +stockRow.lowStockCount || 0,
    totalValuation: r2(+stockRow.totalValuation || 0),
    totalUnits: +stockRow.totalUnits || 0,
    lowStockItems,
    recentSales,
    trendDays: last14Days,
    categorySales,
    paymentMethods,
    topItems: topItemsMonthly,
    topItemsToday,
    topItemsWeekly,
    topItemsMonthly,
    cashiers
  };
});

handle('grn:list', MA, async () => (await pool.request().query(`
  SELECT g.Id, g.GrnNo, g.Supplier, g.InvoiceRef, g.TotalCost, g.Notes, g.ReceivedBy, g.CreatedAt,
         COUNT(gi.Id) ItemCount, ISNULL(SUM(gi.Qty), 0) TotalQty
  FROM GRNs g
  LEFT JOIN GRNItems gi ON gi.GrnId = g.Id
  GROUP BY g.Id, g.GrnNo, g.Supplier, g.InvoiceRef, g.TotalCost, g.Notes, g.ReceivedBy, g.CreatedAt
  ORDER BY g.Id DESC
`)).recordset);

handle('grn:get', MA, async ({ id }) => {
  const grn = (await pool.request().input('id', sql.Int, id)
    .query('SELECT * FROM GRNs WHERE Id=@id')).recordset[0];
  if (!grn) throw new Error('GRN not found');
  const items = (await pool.request().input('id', sql.Int, id)
    .query('SELECT * FROM GRNItems WHERE GrnId=@id ORDER BY Id ASC')).recordset;
  return { grn, items };
});

handle('grn:create', MA, async ({ grnNo, supplier, invoiceRef, notes, items }) => {
  if (!supplier?.trim()) throw new Error('Supplier name is required');
  if (!Array.isArray(items) || !items.length) throw new Error('At least one item is required in GRN');
  
  let finalGrnNo = grnNo?.trim();
  if (!finalGrnNo) {
    const pad = n => String(n).padStart(2, '0');
    const d = new Date();
    finalGrnNo = `GRN-${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}-${Math.floor(1000 + Math.random() * 9000)}`;
  }

  const tx = new sql.Transaction(pool);
  await tx.begin();
  try {
    let totalCost = 0;
    const validated = [];
    for (const row of items) {
      const it = (await new sql.Request(tx).input('id', sql.Int, row.itemId)
        .query('SELECT Id, Name, Price FROM Items WHERE Id=@id AND Active=1')).recordset[0];
      if (!it) throw new Error(`Invalid item ID: ${row.itemId}`);
      const qty = parseInt(row.qty);
      const unitCost = Math.max(0, +row.unitCost || 0);
      if (!(qty > 0)) throw new Error(`Invalid quantity for item ${it.Name}`);
      const lineTotal = r2(qty * unitCost);
      totalCost += lineTotal;
      validated.push({
        itemId: it.Id,
        itemName: it.Name,
        qty,
        unitCost,
        lineTotal,
        batchNo: row.batchNo?.trim() || null,
        updatePrice: Boolean(row.updatePrice),
        newPrice: +row.newPrice || 0
      });
    }
    totalCost = r2(totalCost);

    const grnInsert = await new sql.Request(tx)
      .input('gn', sql.NVarChar, finalGrnNo)
      .input('sup', sql.NVarChar, supplier.trim())
      .input('ref', sql.NVarChar, invoiceRef?.trim() || null)
      .input('tc', sql.Decimal(12, 2), totalCost)
      .input('not', sql.NVarChar, notes?.trim() || null)
      .input('rec', sql.NVarChar, session.fullName || session.username)
      .query('INSERT INTO GRNs(GrnNo,Supplier,InvoiceRef,TotalCost,Notes,ReceivedBy) OUTPUT inserted.Id VALUES(@gn,@sup,@ref,@tc,@not,@rec)');
    
    const grnId = grnInsert.recordset[0].Id;

    for (const v of validated) {
      await new sql.Request(tx)
        .input('gid', sql.Int, grnId)
        .input('iid', sql.Int, v.itemId)
        .input('inm', sql.NVarChar, v.itemName)
        .input('q', sql.Int, v.qty)
        .input('uc', sql.Decimal(12, 2), v.unitCost)
        .input('lt', sql.Decimal(12, 2), v.lineTotal)
        .input('bn', sql.NVarChar, v.batchNo)
        .input('ed', sql.NVarChar, null)
        .query('INSERT INTO GRNItems(GrnId,ItemId,ItemName,Qty,UnitCost,LineTotal,BatchNo,ExpiryDate) VALUES(@gid,@iid,@inm,@q,@uc,@lt,@bn,@ed)');

      await new sql.Request(tx)
        .input('iid', sql.Int, v.itemId)
        .input('q', sql.Int, v.qty)
        .query('UPDATE Items SET Stock = Stock + @q WHERE Id=@iid');

      if (v.updatePrice && v.newPrice > 0) {
        await new sql.Request(tx)
          .input('iid', sql.Int, v.itemId)
          .input('np', sql.Decimal(12, 2), r2(v.newPrice))
          .query('UPDATE Items SET Price = @np WHERE Id=@iid');
      }
    }

    await tx.commit();
    return { id: grnId, grnNo: finalGrnNo, totalCost, itemsCount: validated.length };
  } catch (err) {
    await tx.rollback().catch(() => {});
    throw err;
  }
});

/* ==========================================================================
   SUPPLIER RETURNS (PURCHASE RETURNS / DEBIT NOTES)
   ========================================================================== */
handle('supplierReturns:list', MA, async () => (await pool.request().query(`
  SELECT sr.Id, sr.ReturnNo, sr.GrnId, sr.GrnNo, sr.Supplier, sr.TotalDebit, sr.Reason, sr.Notes, sr.ReturnedBy, sr.CreatedAt,
         COUNT(sri.Id) AS ItemCount, ISNULL(SUM(sri.Qty), 0) AS TotalQty
  FROM SupplierReturns sr
  LEFT JOIN SupplierReturnItems sri ON sri.ReturnId = sr.Id
  GROUP BY sr.Id, sr.ReturnNo, sr.GrnId, sr.GrnNo, sr.Supplier, sr.TotalDebit, sr.Reason, sr.Notes, sr.ReturnedBy, sr.CreatedAt
  ORDER BY sr.Id DESC
`)).recordset);

handle('supplierReturns:get', MA, async ({ id }) => {
  const ret = (await pool.request().input('id', sql.Int, id)
    .query('SELECT * FROM SupplierReturns WHERE Id=@id')).recordset[0];
  if (!ret) throw new Error('Supplier Return not found');
  const items = (await pool.request().input('id', sql.Int, id)
    .query('SELECT * FROM SupplierReturnItems WHERE ReturnId=@id ORDER BY Id ASC')).recordset;
  return { return: ret, items };
});

handle('supplierReturns:create', MA, async ({ returnNo, grnId, grnNo, supplier, reason, notes, items }) => {
  if (!supplier?.trim()) throw new Error('Supplier name is required');
  if (!Array.isArray(items) || !items.length) throw new Error('At least one item is required to return to supplier');

  let finalRetNo = returnNo?.trim();
  if (!finalRetNo) {
    const pad = n => String(n).padStart(2, '0');
    const d = new Date();
    finalRetNo = `SRT-${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}-${Math.floor(1000 + Math.random() * 9000)}`;
  }

  const tx = new sql.Transaction(pool);
  await tx.begin();
  try {
    let totalDebit = 0;
    const validated = [];
    for (const row of items) {
      const it = (await new sql.Request(tx).input('id', sql.Int, row.itemId)
        .query('SELECT Id, Name, Price, Stock FROM Items WHERE Id=@id AND Active=1')).recordset[0];
      if (!it) throw new Error(`Invalid item ID: ${row.itemId}`);
      const qty = parseInt(row.qty);
      const unitCost = Math.max(0, +row.unitCost || 0);
      if (!(qty > 0)) throw new Error(`Invalid quantity for item ${it.Name}`);
      if (it.Stock < qty) {
        throw new Error(`Cannot return ${qty} of "${it.Name}". Current physical stock is only ${it.Stock}.`);
      }
      const lineTotal = r2(qty * unitCost);
      totalDebit += lineTotal;
      validated.push({
        itemId: it.Id,
        itemName: it.Name,
        qty,
        unitCost,
        lineTotal,
        batchNo: row.batchNo?.trim() || null,
        reason: row.reason?.trim() || reason || 'Damaged / Outdated Stock'
      });
    }
    totalDebit = r2(totalDebit);

    const d = new Date();
    const retInsert = await new sql.Request(tx)
      .input('rn', sql.NVarChar, finalRetNo)
      .input('gid', sql.Int, grnId || null)
      .input('gn', sql.NVarChar, grnNo?.trim() || null)
      .input('sup', sql.NVarChar, supplier.trim())
      .input('td', sql.Decimal(12, 2), totalDebit)
      .input('rs', sql.NVarChar, (reason || 'Damaged / Outdated Stock').trim())
      .input('not', sql.NVarChar, notes?.trim() || null)
      .input('ret', sql.NVarChar, session.fullName || session.username)
      .query(`INSERT INTO SupplierReturns(ReturnNo, GrnId, GrnNo, Supplier, TotalDebit, Reason, Notes, ReturnedBy)
              OUTPUT inserted.Id VALUES(@rn, @gid, @gn, @sup, @td, @rs, @not, @ret)`);

    const returnId = retInsert.recordset[0].Id;

    for (const v of validated) {
      await new sql.Request(tx)
        .input('rid', sql.Int, returnId)
        .input('iid', sql.Int, v.itemId)
        .input('inm', sql.NVarChar, v.itemName)
        .input('q', sql.Int, v.qty)
        .input('uc', sql.Decimal(12, 2), v.unitCost)
        .input('lt', sql.Decimal(12, 2), v.lineTotal)
        .input('bn', sql.NVarChar, v.batchNo)
        .input('rs', sql.NVarChar, v.reason)
        .query(`INSERT INTO SupplierReturnItems(ReturnId, ItemId, ItemName, Qty, UnitCost, LineTotal, BatchNo, Reason)
                VALUES(@rid, @iid, @inm, @q, @uc, @lt, @bn, @rs)`);

      // Deduct stock from inventory
      await new sql.Request(tx)
        .input('iid', sql.Int, v.itemId)
        .input('q', sql.Int, v.qty)
        .query('UPDATE Items SET Stock = Stock - @q WHERE Id=@iid');
    }

    await tx.commit();

    const st = await getSettings();
    return {
      returnId,
      returnNo: finalRetNo,
      grnNo: grnNo || 'Direct Return',
      supplier: supplier.trim(),
      totalDebit,
      itemsCount: validated.length,
      returnedBy: session.fullName || session.username,
      createdAt: d.toISOString(),
      items: validated,
      shopSettings: {
        shopName: st.shopName || 'Amectar Bookshop & Communication',
        shopAddress: st.shopAddress || 'No. 45, Station Road, Colombo',
        shopPhone: st.shopPhone || '071 234 5678',
        receiptPaperWidth: st.receiptPaperWidth || '80mm'
      }
    };
  } catch (err) {
    await tx.rollback().catch(() => {});
    throw err;
  }
});

/* ---------- Window ---------- */
function createWindow() {
  const w = new BrowserWindow({
    width: 1366, height: 820, minWidth: 1100, minHeight: 680, title: 'Kade POS',
    webPreferences: { preload: path.join(__dirname, 'preload.js'), contextIsolation: true, nodeIntegration: false, sandbox: true }
  });
  w.setMenuBarVisibility(false);
  w.loadFile(path.join(__dirname, 'renderer', 'index.html'));
}
app.whenReady().then(async () => {
  try {
    await initDb();
    createWindow();
    startBackupSchedule();
    // Run an initial backup 5 seconds after startup if today's backup file doesn't exist yet
    setTimeout(async () => {
      try {
        const info = await getBackupInfo();
        if (!info.todayFile) {
          console.log('[AutoBackup] Running startup database backup...');
          await performDatabaseBackup();
        }
      } catch (err) {
        console.warn('[AutoBackup] Startup backup note:', err.message);
      }
    }, 5000);
  }
  catch (e) { dialog.showErrorBox('Database error', `Cannot connect to SQL Server:\n${e.message}`); app.quit(); }
});
app.on('window-all-closed', () => app.quit());
