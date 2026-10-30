const SHOP = 'MY SHOP';

/* ---------- i18n Dictionary: [English, Sinhala] ---------- */
const D = {
  // Common & Auth
  signInSub: ['Sign in to access your point of sale terminal', 'ඔබගේ විකුණුම් පර්යන්තයට පිවිසෙන්න'],
  username: ['Username', 'පරිශීලක නාමය'],
  password: ['Password', 'මුරපදය'],
  signIn: ['Sign In', 'පිවිසෙන්න'],
  logout: ['Log out', 'ඉවත් වන්න'],
  suspended: ['TERMINAL SUSPENDED', 'පද්ධතිය අත්හිටුවා ඇත'],
  suspendedMsg: ['Monthly software license is pending payment. Please transfer the subscription fee to the Super Admin bank account below.', 'මාසික දායකත්ව ගාස්තුව ගෙවීම ප්‍රමාද වී ඇත. කරුණාකර පහත සුපිරි පරිපාලකගේ බැංකු ගිණුමට මුදල් බැර කරන්න.'],
  overrideNote: ['Super Admin manual unlock credentials:', 'සුපිරි පරිපාලක අගුළු හැරීම:'],
  unlock: ['Verify & Unlock Terminal', 'පද්ධතිය අගුළු හරින්න'],
  unlocked: ['Terminal unlocked successfully', 'පද්ධතිය අගුළු හරින ලදී'],

  // Nav Menu
  dashboard: ['Dashboard', 'උපකරණ පුවරුව'],
  pos: ['POS Terminal', 'විකුණුම් (POS)'],
  items: ['Inventory', 'භාණ්ඩ'],
  grn: ['GRN Receiving', 'භාණ්ඩ ලැබීම් (GRN)'],
  reports: ['Reports', 'වාර්තා'],
  receipts: ['Receipt & Print', 'රිසිට්පත් සහ මුද්‍රණය'],
  users: ['Users', 'පරිශීලකයින්'],
  subs: ['Subscription', 'දායකත්වය'],
  backup: ['Database Backup', 'දත්ත සමුදාය බැකප්'],
  help: ['User Guide & Help', 'භාවිතා කිරීමේ උපදෙස්'],

  // Backup & Data Protection
  backupTitle: ['Database Backup & Data Protection', 'දත්ත සමුදාය බැකප් සහ දත්ත ආරක්ෂණය'],
  backupSub: ['Automated hourly database backups saved to your chosen drive / folder · 1 file per day refreshed every hour', 'තෝරාගත් මාර්ගයට සෑම පැයකටම ස්වයංක්‍රීයව දත්ත සුරැකේ · දිනකට එක් ගොනුවක් බැගින් සෑම පැයකදීම යාවත්කාලීන වේ'],
  autoBackupActive: ['Hourly Backup Active', 'පැයක බැකප් සක්‍රියයි'],
  everyHour: ['Every 1 Hour', 'සෑම පැය 1කට වරක්'],
  retentionDaily: ['1 File Per Day', 'දිනකට එක් ගොනුවක්'],
  retentionSub: ['Overwritten hourly with fresh data', 'සෑම පැයකදීම නවතම දත්ත වලින් යාවත්කාලීන වේ'],
  lastBackup: ['Last Backup Time', 'අවසාන බැකප් කළ වේලාව'],
  backupPathLabel: ['Backup Storage Directory (Selected Path)', 'බැකප් ගබඩා කරන ෆෝල්ඩරය'],
  browseFolder: ['📁 Browse Folder…', '📁 ෆෝල්ඩරය තෝරන්න…'],
  savePath: ['Save Path', 'සුරකින්න'],
  openFolder: ['📂 Open Folder', '📂 ෆෝල්ඩරය විවෘත කරන්න'],
  backupNow: ['⚡ Backup Now', '⚡ දැන් බැකප් කරන්න'],
  backingUp: ['Backing up database…', 'දත්ත බැකප් වෙමින් පවතී…'],
  backupSuccess: ['Database backup completed successfully!', 'දත්ත සමුදාය සාර්ථකව බැකප් කරන ලදී!'],
  todayBackupCard: ["Today's Active Daily Backup", 'අද දින ක්‍රියාකාරී බැකප් ගොනුව'],
  historyBackups: ['Backup Archives & Daily Snapshots', 'පෙර දිනවල බැකප් ගොනු ලේඛනාගාරය'],
  fileName: ['File Name', 'ගොනු නම'],
  fileSize: ['File Size', 'ගොනු ප්‍රමාණය'],
  lastUpdated: ['Last Updated', 'අවසන් වරට යාවත්කාලීන කළ වේලාව'],
  fileType: ['Format', 'ආකෘතිය'],

  // Receipt & Print Settings
  receiptSettings: ['Receipt Customization & Thermal Print', 'රිසිට්පත් සැකසුම් සහ මුද්‍රණය'],
  livePreview: ['Live Thermal Preview', 'සජීවී රිසිට්පත් පෙරදසුන'],
  printTest: ['Print Test Receipt', 'පරීක්ෂණ රිසිට්පත මුද්‍රණය'],
  saveReceiptSettings: ['Save Receipt Settings', 'රිසිට්පත් සැකසුම් සුරකින්න'],
  shopName: ['Store / Business Name', 'වෙළඳසැලේ නම'],
  shopTagline: ['Tagline / Header Slogan', 'පාඨය / සටහන'],
  shopAddress: ['Store Address', 'ලිපිනය'],
  shopPhone: ['Phone / WhatsApp', 'දුරකථන අංක'],
  shopTaxNo: ['Business Reg / Tax No', 'ව්‍යාපාර ලියාපදිංචි / බදු අංකය'],
  receiptHeader: ['Receipt Top Header Note', 'රිසිට්පත් ඉහළ සටහන'],
  receiptFooter: ['Receipt Bottom Footer Note', 'රිසිට්පත් පහළ සටහන'],
  paperWidth: ['Paper Width (80mm / 58mm)', 'කඩදාසි පළල (80mm / 58mm)'],
  autoPrintReceipt: ['Auto Print on Checkout', 'ගෙවීම අවසන් වූ විට ස්වයංක්‍රීයව මුද්‍රණය'],
  printOn: ['🖨️ Print: ON', '🖨️ මුද්‍රණය: සක්‍රියයි'],
  printOff: ['🖨️ Print: OFF', '🖨️ මුද්‍රණය: අක්‍රියයි'],
  cashRequiredAlert: ['Please enter cash received amount (Numbers only, minimum total)!', 'කරුණාකර ලැබුණු මුදල ඇතුළත් කරන්න (අවම එකතුවට සමාන හෝ වැඩි විය යුතුය)!'],
  selectProduct: ['Search product to add (All categories)…', 'එක් කිරීමට භාණ්ඩය සොයන්න (සියලු කාණ්ඩ)…'],
  allCategories: ['All Categories', 'සියලු වර්ග'],
  qty: ['Quantity', 'ප්‍රමාණය'],
  f1Hint: ['F1 Search', 'F1 සෙවීම'],
  arrowKeysHint: ['Arrow Keys Select', 'ඊතල යතුරු තෝරන්න'],
  enterAddHint: ['Enter Add', 'Enter එකතු කරන්න'],
  enterPayHint: ['Enter Payment', 'Enter ගෙවීම'],

  // Dashboard & Charts
  currentBalance: ['Current Balance (Today)', 'වත්මන් ශේෂය (අද)'],
  latestIncome: ['Monthly Gross Sales', 'මාසික මුළු ආදායම'],
  inventoryValuation: ['Inventory Valuation', 'තොගයේ මුළු වටිනාකම'],
  dueCalendar: ['Billing Schedule', 'බිල්පත් දින දර්ශනය'],
  revenueChartTitle: ['Revenue & Sales Overview (14-Day Live Trend)', 'දින 14ක සජීවී විකුණුම් විශ්ලේෂණය'],
  salesLegend: ['Sales Revenue (LKR)', 'විකුණුම් ආදායම (රු.)'],
  billsLegend: ['Bills Volume', 'බිල්පත් ගණන'],
  myCardsTitle: ['Super Admin Bank Card', 'සුපිරි පරිපාලකගේ බැංකු කාඩ්පත'],
  superAdminAcc: ['SUPER ADMIN BANK ACCOUNT', 'සුපිරි පරිපාලකගේ බැංකු ගිණුම'],
  dueTag: ['DUE: 25th OF MONTH', 'නියමිත දිනය: සෑම මසකම 25'],
  historyTitle: ['History', 'ඉතිහාසය'],
  upcomingPayments: ['Upcoming Subscription Payment', 'ඉදිරි දායකත්ව ගෙවීම'],
  softwareSubDue: ['POS Terminal Subscription · Due: 25th', 'මෘදුකාංග දායකත්වය · නියමිත දිනය: 25'],
  categorySales: ['Sales by Category (Last 30 Days)', 'කාණ්ඩ අනුව විකුණුම් (දින 30)'],
  paymentBreakdown: ['Payment Method Breakdown (Cash vs Card)', 'මුදල් සහ කාඩ්පත් ගෙවීම් බෙදීම'],
  staffLeaderboard: ['Cashier Sales Ranking', 'අයකැමි කාර්යසාධනය'],
  inventoryAlerts: ['Low Stock Inventory Alerts', 'අඩු තොග භාණ්ඩ'],
  copyPrintCalc: ['Copy, Print & Service Calculator (F2)', 'ෆොටෝකොපි සහ මුද්‍රණ ගණකය (F2)'],
  quickItem: ['Quick Custom Item (F3)', 'ක්ෂණික භාණ්ඩයක් (F3)'],
  itemType: ['Item Type', 'භාණ්ඩ වර්ගය'],
  typeProduct: ['Physical Product (Track Stock)', 'භාණ්ඩය (තොග ගණනය වේ)'],
  typeService: ['Service / Print Job (No Stock Limit)', 'සේවාව (තොග සීමා රහිත)'],
  serviceBadge: ['⚙️ Service', '⚙️ සේවාව'],
  genBarcode: ['Generate Barcode', 'බාර්කෝඩ් සාදන්න'],
  printBarcodeLabels: ['Print Barcode Labels', 'බාර්කෝඩ් ලේබල් මුද්‍රණය'],
  loadBookshopDefaults: ['Load Default Bookshop Catalog', 'පොත්හල් පෙරනිමි භාණ්ඩ ඇතුළත් කරන්න'],
  today: ['Today', 'අද'],
  aov: ['Avg Order Value (AOV)', 'සාමාන්‍ය බිල්පත් අගය'],
  totalUnits: ['Total Units in Stock', 'මුළු තොග ඒකක'],
  discountsGiven: ['Discounts Given', 'ලබා දුන් වට්ටම්'],

  // POS
  searchPos: ['Search product, category or scan barcode… (F9 Checkout)', 'භාණ්ඩය සොයන්න හෝ බාර්කෝඩ් ස්කෑන් කරන්න… (F9)'],
  all: ['All', 'සියල්ල'],
  stock: ['Stock', 'තොගය'],
  currentBill: ['Current Bill', 'වත්මන් බිල'],
  tapToAdd: ['Tap or scan an item to add to register.', 'එක් කිරීමට භාණ්ඩයක් ඔබන්න.'],
  subtotal: ['Subtotal', 'අනු එකතුව'],
  billDiscount: ['Bill Discount (LKR)', 'බිල්පත් වට්ටම (රු.)'],
  total: ['Total Payable', 'ගෙවිය යුතු මුළු මුදල'],
  paymentMethod: ['Payment Method', 'ගෙවීම් ක්‍රමය'],
  cash: ['Cash', 'මුදල්'],
  card: ['Card', 'කාඩ්පත්'],
  cashReceived: ['Cash Received', 'ලැබුණු මුදල'],
  balance: ['Balance / Change', 'ඉතිරිය'],
  shortBy: ['Short by', 'අඩුව'],
  cardReady: ['Ready for POS Card Swipe / Tap', 'කාඩ්පත් ගෙවීම් යන්ත්‍රය සූදානම්'],
  checkout: ['Complete Sale (F9)', 'බිල් කරන්න (F9)'],
  clearBill: ['Clear Bill', 'බිල හිස් කරන්න'],
  notEnough: ['Insufficient stock available', 'තොගය ප්‍රමාණවත් නොවේ'],
  cartEmpty: ['Cart is currently empty', 'බිල හිස් ය'],
  thanks: ['Thank you! Come again.', 'ස්තූතියි! නැවත එන්න.'],
  close: ['Close', 'වසන්න'],
  print: ['🖨 Print Receipt', '🖨 මුද්‍රණය'],
  cancel: ['Cancel', 'අවලංගු'],
  save: ['Save Changes', 'සුරකින්න'],
  saved: ['Successfully saved', 'සුරැකිණි'],
  deleted: ['Deleted successfully', 'මකා දමන ලදී'],
  exact: ['Exact', 'හරියටම'],

  // Items
  addItem: ['+ New Product', '+ නව භාණ්ඩයක්'],
  editItem: ['Edit Product', 'භාණ්ඩය සංස්කරණය'],
  newItem: ['Add Product', 'භාණ්ඩයක් එක් කරන්න'],
  name: ['Product Name', 'භාණ්ඩයේ නම'],
  category: ['Category', 'කාණ්ඩය'],
  price: ['Price (LKR)', 'මිල (රු.)'],
  priceLkr: ['Price (LKR)', 'මිල (රු.)'],
  stockQty: ['Stock Quantity', 'තොග ප්‍රමාණය'],
  barcode: ['Barcode / SKU', 'බාර්කෝඩ් / SKU'],
  edit: ['Edit', 'සංස්කරණය'],
  del: ['Delete', 'මකන්න'],
  confirmDel: ['Are you sure you want to delete this product?', 'මෙම භාණ්ඩය මකා දැමීමට අවශ්‍යද?'],
  searchItems: ['Search products by name, category or barcode…', 'නම, කාණ්ඩය හෝ බාර්කෝඩ් මගින් සොයන්න…'],

  // GRN (Goods Received Note)
  newGrn: ['+ Receive New GRN', '+ නව GRN එකක්'],
  grnNo: ['GRN Number', 'GRN අංකය'],
  supplier: ['Supplier / Vendor', 'සැපයුම්කරු'],
  invoiceRef: ['Invoice / Ref No', 'ඉන්වොයිස් අංකය'],
  unitCost: ['Unit Cost (LKR)', 'ඒකක පිරිවැය (රු.)'],
  batchNo: ['Batch No / Lot No', 'කාණ්ඩ අංකය (Batch No)'],
  expiryDate: ['Expiry Date', 'කල් ඉකුත්වන දිනය'],
  updatePrice: ['Update Selling Price?', 'විකුණුම් මිල යාවත්කාලීන කරන්නද?'],
  totalCost: ['Total Goods Value', 'මුළු පිරිවැය'],
  receivedBy: ['Received By', 'ලැබූ පුද්ගලයා'],
  createdAt: ['Date & Time', 'දිනය සහ වේලාව'],
  itemsCount: ['Items Count', 'භාණ්ඩ ගණන'],
  notes: ['Notes / Vehicle No', 'සටහන් / වාහන අංකය'],
  addItemRow: ['+ Add Product Row', '+ තවත් භාණ්ඩයක් එක් කරන්න'],
  saveGrn: ['Approve & Update Stock', 'තහවුරු කර තොග යාවත්කාලීන කරන්න'],
  grnSaved: ['GRN received and stock updated successfully', 'GRN එක සටහන් කර තොග යාවත්කාලීන විය'],
  viewGrn: ['View Details', 'විස්තර බලන්න'],

  // Bank & Subscription
  superAdminBankDetails: ['Super Admin Bank Details (Customer Subscription Transfer)', 'සුපිරි පරිපාලකගේ බැංකු විස්තර (දායකත්ව ගාස්තු ගෙවීමට)'],
  bankName: ['Bank Name', 'බැංකුවේ නම'],
  accName: ['Account Name', 'ගිණුමේ නම'],
  accNumber: ['Account Number', 'ගිණුම් අංකය'],
  bankBranch: ['Branch', 'ශාඛාව'],
  bankNotes: ['Transfer Reference Notes', 'ගෙවීම් උපදෙස්'],
  copy: ['Copy', 'පිටපත්'],
  copied: ['Account Number copied to clipboard!', 'ගිණුම් අංකය පිටපත් කරන ලදී!'],
  viewBankDetails: ['View Bank Details', 'බැංකු විස්තර බලන්න'],
  feeCfg: ['⚙ Fee & Due Day', '⚙ ගාස්තුව සහ දිනය'],
  bankCfg: ['💳 Super Admin Bank Account', '💳 සුපිරි පරිපාලකගේ බැංකු ගිණුම'],
  recPay: ['+ Record Payment', '+ ගෙවීමක් සටහන් කරන්න'],
  history: ['Payment History', 'ගෙවීම් ඉතිහාසය'],
  monthlyFee: ['Monthly License Fee', 'මාසික ගාස්තුව'],
  dueDay: ['Due Day', 'නියමිත දිනය'],
  dayOfMonth: ['of each month', 'සෑම මසකම'],
  nextDue: ['Next Due Date', 'ඊළඟ නියමිත දිනය'],
  outstanding: ['Outstanding Period', 'ගෙවීමට ඇති මාසය'],
  freeNote: ['Installation month ({m}) is free — billing begins the following month.', 'පළමු මාසය ({m}) නොමිලේ — ගෙවීම ඊළඟ මාසයෙන් ආරම්භ වේ.'],
  cfgTitle: ['Subscription Settings', 'දායකත්ව සැකසුම්'],
  feeLkr: ['Monthly Fee (LKR)', 'මාසික ගාස්තුව (රු.)'],
  dueDayIn: ['Due Day of Month (1-28)', 'මාසයේ නියමිත දිනය (1-28)'],
  recTitle: ['Record License Payment', 'ගෙවීම සටහන් කරන්න'],
  period: ['Period (YYYY-MM)', 'කාලය (YYYY-MM)'],
  amount: ['Amount (LKR)', 'මුදල (රු.)'],
  method: ['Method', 'ක්‍රමය'],
  note: ['Note', 'සටහන'],
  paidAt: ['Paid At', 'ගෙවූ වේලාව'],
  by: ['Recorded By', 'සටහන් කළේ'],
  periodC: ['Period', 'කාලය'],
  inDays: ['in {n} day(s)', 'දින {n} කින්'],
  bannerDue: ['🔔 Monthly Subscription Payment: Due on the 25th ({date}). Settle fee ({fee}) to maintain terminal access.', '🔔 මාසික දායකත්ව ගාස්තුව ({fee}): සෑම මසකම 25 වන දිනට ({date}) ගෙවිය යුතුය.'],
  stActive: ['Active & Compliant', 'සක්‍රියයි'],
  stWarn: ['Payment Due Soon (25th of Month)', 'ගෙවීම ආසන්නයි (25 වන දිනට)'],
  stLocked: ['SUSPENDED — Unpaid License', 'අත්හිටුවා ඇත — ගෙවා නැත'],

  // Activation & Renewal Codes
  activationCode: ['Monthly Activation / Renewal Code', 'මාසික සක්‍රිය / අලුත් කිරීමේ කේතය'],
  enterCode: ['Enter Monthly Renewal Code', 'මාසික අලුත් කිරීමේ කේතය ඇතුළත් කරන්න'],
  activateCode: ['Activate Code', 'කේතය සක්‍රිය කරන්න'],
  codePlaceholder: ['e.g. B1K1P1A9X7', 'උදා: B1K1P1A9X7'],
  subActive: ['Subscription Active & Unlocked', 'දායකත්වය සක්‍රියයි'],
  subDueSoon: ['Subscription Payment Due Soon', 'දායකත්ව ගෙවීම ඉක්මනින් සම්පූර්ණ කරන්න'],
  subLocked: ['Terminal Suspended — Payment Required', 'පර්යන්තය අත්හිටුවා ඇත — ගෙවීමක් අවශ්‍යයි'],
  codeSuccess: ['Code activated successfully! Subscription extended for {p}.', 'කේතය සාර්ථකව සක්‍රිය විය! {p} සඳහා දායකත්වය දීර්ඝ කරන ලදී.'],
  codeInvalid: ['Invalid or already used activation code. Please contact vendor.', 'වලංගු නොවන හෝ භාවිතා කළ කේතයකි. කරුණාකර විකුණුම්කරු අමතන්න.'],
  vendorCodes: ['Secret Pattern Code Generator & History', 'රහස් රටා කේත ජනකය සහ ඉතිහාසය'],
  copyCode: ['Copy Code', 'කේතය පිටපත්'],
  allCodes: ['All Codes', 'සියලු කේත'],
  availCodes: ['Available', 'භාවිතා නොකළ'],
  usedCodes: ['Redeemed', 'භාවිතා කළ'],
  installDate: ['Software Installation Date', 'මෘදුකාංගය ස්ථාපනය කළ දිනය'],
  freeInstallMonth: ['Free Installation Month', 'නොමිලේ හිමිවන ස්ථාපන මාසය'],
  freeMonthNote: ['The installation month is completely free. No codes or payments required. Subscription starts next month.', 'ස්ථාපනය කළ මාසය සම්පූර්ණයෙන්ම නොමිලේ. කේත හෝ ගෙවීම් අවශ්‍ය නොවේ. දායකත්වය ඊළඟ මස සිට ආරම්භ වේ.'],

  // Reports & Users
  daily: ['Daily Sales Breakdown', 'දෛනික විකුණුම්'],
  itemwise: ['Item-wise Sales Breakdown', 'භාණ්ඩ අනුව විකුණුම්'],
  cashierwise: ['Cashier-wise Sales Summary', 'අයකැමි අනුව සාරාංශය'],
  from: ['From', 'සිට'],
  to: ['To', 'දක්වා'],
  run: ['Generate Report', 'වාර්තාව බලන්න'],
  grand: ['Grand Total', 'මුළු එකතුව'],
  date: ['Date', 'දිනය'],
  bills: ['Bills', 'බිල් ගණන'],
  item: ['Item', 'භාණ්ඩය'],
  qtySold: ['Qty Sold', 'විකුණූ ප්‍රමාණය'],
  cashier: ['Cashier', 'අයකැමි'],
  noData: ['No records found', 'දත්ත නැත'],
  newUser: ['+ New User', '+ නව පරිශීලකයෙක්'],
  editUser: ['Edit User & Permissions', 'පරිශීලක සහ අවසර සංස්කරණය'],
  addUser: ['New User & Permissions', 'නව පරිශීලකයා'],
  fullName: ['Full Name', 'සම්පූර්ණ නම'],
  role: ['Role', 'තනතුර'],
  active: ['Active', 'සක්‍රිය'],
  passBlank: ['(leave blank to keep unchanged)', '(නොවෙනස් නම් හිස්ව තබන්න)'],
  changePassword: ['Change Password', 'මුරපදය වෙනස් කරන්න'],
  newPassword: ['New Password', 'නව මුරපදය'],
  confirmPassword: ['Confirm Password', 'මුරපදය තහවුරු කරන්න'],
  currentPassword: ['Current Password', 'වත්මන් මුරපදය'],
  permissions: ['Permissions', 'අවසර'],
  passMinLength: ['Password must be at least 6 characters', 'මුරපදය අවම වශයෙන් අකුරු 6ක් විය යුතුය'],
  passMismatch: ['Passwords do not match', 'මුරපද නොගැලපේ'],
  passUpdated: ['Password updated successfully!', 'මුරපදය සාර්ථකව වෙනස් කරන ලදී!'],
  Yes: ['Active', 'ඔව්'],
  No: ['Disabled', 'නැත'],
  Cashier: ['Cashier', 'අයකැමි'],
  'Store Manager': ['Store Manager', 'වෙළඳසැල් කළමනාකරු'],
  'Super Admin': ['Super Admin', 'සුපිරි පරිපාලක'],
  Cash: ['Cash', 'මුදල්'],
  Card: ['Card', 'කාඩ්පත්'],
  Bank: ['Bank Transfer', 'බැංකු හුවමාරු'],
  Other: ['Other', 'වෙනත්'],

  // Dashboard & Best Selling Items
  bestSelling: ['Best Selling Items', 'වැඩිම අලෙවියක් ඇති භාණ්ඩ'],
  bestSellingSub: ['Top revenue & volume performers', 'වැඩිම ආදායමක් සහ ඉල්ලුමක් ඇති භාණ්ඩ'],
  timeToday: ['Today', 'අද'],
  timeWeek: ['This Week (7D)', 'මෙම සතිය (දින 7)'],
  timeMonth: ['This Month (30D)', 'මෙම මාසය (දින 30)'],
  noTopSales: ['No sales recorded for this timeframe yet', 'මෙම කාලසීමාව තුළ විකුණුම් වාර්තා වී නොමැත'],
  themeStudio: ['Theme Studio & Aesthetics', 'තේමා මැදිරිය'],
  unitsSold: ['units sold', 'අලෙවි වූ ප්‍රමාණය']
};

let lang = 'en';
try { lang = localStorage.getItem('lang') || 'en'; } catch {}
const t = (k, o) => {
  const v = D[k] ? D[k][lang === 'si' ? 1 : 0] : k;
  return o ? v.replace(/\{(\w+)\}/g, (_, x) => o[x]) : v;
};
const fd = d => new Date(d).toLocaleString(lang === 'si' ? 'si-LK' : 'en-GB');

/* ---------- Modern 6-Theme Design System ---------- */
const THEMES = [
  { id: 'light', name: 'Aurora Modern', nameSi: 'ඕරෝරා ආලෝකය', desc: 'Clean Minimalist Light · SaaS & Apple Inspired', icon: '☀️', swatch: 'theme-swatch-light', bg: '#f4f6fc', brand: '#4f46e5' },
  { id: 'dark', name: 'Cyber Obsidian', nameSi: 'සයිබර් අඳුරු', desc: 'Titanium Dark & Neon Indigo Glow', icon: '🌙', swatch: 'theme-swatch-dark', bg: '#090d16', brand: '#6366f1' },
  { id: 'emerald', name: 'Midnight Emerald', nameSi: 'මිඩ්නයිට් එමරල්ඩ්', desc: 'Luxury Forest Green & Champagne Gold · Private Banking Style', icon: '🌲', swatch: 'theme-swatch-emerald', bg: '#041411', brand: '#10b981' },
  { id: 'purple', name: 'Velvet Nebula', nameSi: 'වෙල්වට් නෙබියුලා', desc: 'Cosmic Violet & Radiant Neon Magenta Glow', icon: '🔮', swatch: 'theme-swatch-purple', bg: '#0c0617', brand: '#a855f7' },
  { id: 'bookstore', name: 'Artisan Bookshop', nameSi: 'පොත්හල් තේමාව', desc: 'Warm Roasted Espresso Leather & Antique Amber · Cozy Library', icon: '📖', swatch: 'theme-swatch-bookstore', bg: '#16110d', brand: '#d97706' },
  { id: 'ocean', name: 'Nordic Arctic', nameSi: 'නෝර්ඩික් ආක්ටික්', desc: 'Deep Naval Marine & Glacier Cyan · High Contrast Precision', icon: '🌊', swatch: 'theme-swatch-ocean', bg: '#061220', brand: '#0ea5e9' }
];

function initTheme() {
  const saved = localStorage.getItem('kade_theme') || 'light';
  setTheme(saved);
}

function setTheme(theme) {
  const valid = THEMES.some(x => x.id === theme) ? theme : 'light';
  document.documentElement.setAttribute('data-theme', valid);
  try { localStorage.setItem('kade_theme', valid); } catch {}
  document.querySelectorAll('.theme-swatch-btn, .theme-switch-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === valid);
  });
}

function showThemeStudioModal() {
  const current = localStorage.getItem('kade_theme') || 'light';
  const m = modal(`
    <div class="modal-header">
      <div style="display:flex; align-items:center; gap:10px;">
        <span style="font-size:24px;">🎨</span>
        <div>
          <h3 class="modal-title" style="margin:0;">${t('themeStudio')}</h3>
          <small class="muted">Select from 6 distinct modern themes with completely customized sidebar styles, gradients & aesthetics.</small>
        </div>
      </div>
      <button class="modal-close-x" data-x>✕</button>
    </div>

    <div class="theme-gallery-grid">
      ${THEMES.map(th => {
        const isActive = th.id === current;
        return `
          <div class="theme-card-option ${isActive ? 'active' : ''}" data-theme-id="${th.id}">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <div style="display:flex; align-items:center; gap:8px;">
                <span style="font-size:20px;">${th.icon}</span>
                <b style="font-size:14.5px; color:var(--text-main);">${lang === 'si' ? th.nameSi : th.name}</b>
              </div>
              <span class="pill ${isActive ? 'ok' : 'info'}" style="font-size:9.5px; padding:2px 7px;">
                ${isActive ? 'CURRENT ACTIVE' : 'APPLY THEME'}
              </span>
            </div>

            <p style="font-size:11.5px; color:var(--text-muted); margin:0; line-height:1.4;">${th.desc}</p>

            <!-- Mini Visual Preview Pill showing theme colors -->
            <div class="theme-preview-pill" style="background:${th.bg}; border:1.5px solid ${th.brand};">
              <span style="color:${th.brand}; font-weight:800; font-size:12px;">BookShop POS</span>
              <span style="background:${th.brand}; color:#fff; padding:2px 8px; border-radius:6px; font-size:10px; font-weight:800;">PREVIEW</span>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `);

  m.querySelectorAll('.theme-card-option').forEach(card => {
    card.onclick = () => {
      const mode = card.dataset.themeId;
      setTheme(mode);
      const chosen = THEMES.find(x => x.id === mode);
      toast(`Theme applied: ${chosen?.name || mode}`);
      m.close();
    };
  });
  m.querySelectorAll('[data-x]').forEach(el => el.onclick = m.close);
}

document.addEventListener('click', e => {
  const swatch = e.target.closest('.theme-swatch-btn, .theme-switch-btn');
  if (swatch && swatch.dataset.mode) {
    setTheme(swatch.dataset.mode);
    const chosen = THEMES.find(x => x.id === swatch.dataset.mode);
    if (chosen) toast(`Theme: ${chosen.name}`);
    return;
  }
  const btnStudio = e.target.closest('#btnThemeStudio, .btn-open-themes');
  if (btnStudio) {
    showThemeStudioModal();
    return;
  }
});

initTheme();

/* ---------- Helpers ---------- */
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const fmt = n => 'LKR ' + Number(n || 0).toLocaleString('en-LK', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const today = () => new Date(Date.now() - new Date().getTimezoneOffset() * 6e4).toISOString().slice(0, 10);
const hue = s => [...String(s)].reduce((a, c) => (a * 31 + c.charCodeAt(0)) % 360, 7);
const catIcon = c => {
  if (!c) return '📦';
  const l = String(c).toLowerCase();
  if (l.includes('stationery') || l.includes('pen') || l.includes('pencil') || l.includes('office') || l.includes('paper')) return '✏️';
  if (l.includes('book') || l.includes('novel') || l.includes('past paper') || l.includes('education')) return '📚';
  if (l.includes('toy') || l.includes('keytag') || l.includes('gift')) return '🎁';
  if (l.includes('photo') || l.includes('copy') || l.includes('print')) return '🖨️';
  if (l.includes('laminat') || l.includes('bind')) return '🛡️';
  if (l.includes('typ') || l.includes('doc') || l.includes('cv') || l.includes('scan') || l.includes('sting')) return '⌨️';
  return '📦';
};
const C = 'Cashier', M = 'Store Manager', A = 'Super Admin';

/* SVG Icons */
const ICON = {
  dashboard: '<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>',
  pos: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><path d="M7 8h10M7 12h5"/>',
  items: '<path d="M21 8l-9-5-9 5v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
  grn: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/>',
  reports: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
  receipts: '<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  subs: '<rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>',
  backup: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
  help: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>'
};

let me = null, sub = null, items = [], cart = [], cat = 'All', tab = 'dashboard', poll;
let posPaymentMethod = 'Cash';
let posBillDiscount = 0;
let posAutoPrint = localStorage.getItem('kade_pos_autoprint') !== '0';
let cachedReceiptSettings = null;

/* API Bridge */
async function call(ch, p) {
  const r = await api.call(ch, p);
  if (!r.ok) {
    if (r.error === 'SYSTEM_LOCKED') boot();
    throw new Error(r.error);
  }
  return r.data;
}

function toast(m, err) {
  const e = document.createElement('div');
  e.className = 'toast-msg' + (err ? ' err' : '');
  e.innerHTML = `<span>${err ? '⚠' : '✓'}</span><span>${esc(m)}</span>`;
  document.body.appendChild(e);
  setTimeout(() => e.remove(), 3500);
}

function modal(html, isLg = false) {
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  backdrop.innerHTML = `<div class="modal-card ${isLg ? 'modal-lg' : ''}">${html}</div>`;
  document.body.appendChild(backdrop);
  backdrop.close = () => backdrop.remove();
  backdrop.onclick = e => { if (e.target === backdrop) backdrop.close(); };
  return backdrop;
}

function formModal(title, fields, init, onSubmit) {
  const m = modal(`
    <div class="modal-header">
      <h3 class="modal-title">${title}</h3>
      <button class="modal-close-x" data-x>✕</button>
    </div>
    <form class="auth-form">
      ${fields.map(([n, l, ty = 'text', x]) => `
        <label class="field-wrap">
          <span class="field-label">${l}</span>
          ${ty === 'select' ? `
            <select name="${n}">
              ${x.map(o => `<option value="${esc(o)}" ${o === init[n] ? 'selected' : ''}>${esc(t(o))}</option>`).join('')}
            </select>
          ` : `
            <input name="${n}" type="${ty}" step="any" value="${esc(init[n] ?? '')}" ${Array.isArray(x) ? `list="dl_${n}"` : ''} required>
            ${Array.isArray(x) ? `<datalist id="dl_${n}">${x.map(o => `<option value="${esc(o)}">`).join('')}</datalist>` : ''}
          `}
        </label>
      `).join('')}
      <div class="modal-actions">
        <button type="button" class="btn btn-ghost" data-x>${t('cancel')}</button>
        <button type="submit" class="btn btn-primary">${t('save')}</button>
      </div>
    </form>
  `);
  m.querySelectorAll('[data-x]').forEach(el => el.onclick = m.close);
  m.querySelector('form').onsubmit = async e => {
    e.preventDefault();
    try {
      await onSubmit(Object.fromEntries(new FormData(e.target)));
      m.close();
      toast(t('saved'));
    } catch (x) {
      toast(x.message, 1);
    }
  };
}

/* ---------- Super Admin Bank Details Modal (For Customer Transfers) ---------- */
function showBankModal() {
  const b = sub?.bankDetails || {};
  const m = modal(`
    <div class="modal-header">
      <h3 class="modal-title">💳 ${t('superAdminBankDetails')}</h3>
      <button class="modal-close-x" data-x>✕</button>
    </div>

    <!-- Purple Credit Card inside Modal -->
    <div class="superadmin-credit-card" style="margin: 12px 0;">
      <div class="card-hologram-shine"></div>
      <div class="card-top-row">
        <span class="card-brand-label">SUPER ADMIN / VENDOR ACCOUNT</span>
        <span class="card-subscription-tag">${t('dueTag')}</span>
      </div>
      <div class="card-number-row">
        <span id="modalCardNo">${esc(b.accNumber || '8030194935')}</span>
        <button type="button" class="btn-card-copy" id="modalCopyBtn">
          <svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          <span>${t('copy')}</span>
        </button>
      </div>
      <div class="card-bottom-row">
        <div>
          <div style="font-size:9.5px; opacity:0.8;">ACCOUNT HOLDER</div>
          <div class="card-holder-name">${esc(b.accName || 'H.A AMAN MANTHIRA HAPUARACHCHI')}</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:9.5px; opacity:0.8;">BANK & BRANCH</div>
          <b>${esc(b.bankName || 'Commercial Bank')}</b> · <span>${esc(b.bankBranch || 'Gampaha')}</span>
        </div>
      </div>
    </div>

    <div class="bank-info-meta-list">
      <div class="bank-meta-item">
        <span class="bank-meta-label">${t('bankName')}:</span>
        <span class="bank-meta-val">${esc(b.bankName || 'Commercial Bank')}</span>
      </div>
      <div class="bank-meta-item">
        <span class="bank-meta-label">${t('accName')}:</span>
        <span class="bank-meta-val">${esc(b.accName || 'H.A Aman Manthira Hapuarachchi')}</span>
      </div>
      <div class="bank-meta-item">
        <span class="bank-meta-label">${t('accNumber')}:</span>
        <span class="bank-meta-val" style="font-family:monospace; font-size:14px; color:var(--brand);">${esc(b.accNumber || '8030194935')}</span>
      </div>
      <div class="bank-meta-item">
        <span class="bank-meta-label">${t('bankBranch')}:</span>
        <span class="bank-meta-val">${esc(b.bankBranch || 'Gampaha')}</span>
      </div>
      <div class="bank-meta-item">
        <span class="bank-meta-label">${t('bankNotes')}:</span>
        <span class="bank-meta-val" style="font-size:11.5px; color:var(--text-muted);">${esc(b.bankNotes || 'Please WhatsApp transfer slip with your store name and receipt invoice.')}</span>
      </div>
    </div>

    <div class="modal-actions">
      <button class="btn btn-primary" data-x>${t('close')}</button>
    </div>
  `);

  m.querySelectorAll('[data-x]').forEach(el => el.onclick = m.close);
  m.querySelector('#modalCopyBtn').onclick = () => {
    navigator.clipboard.writeText((b.accNumber || '8030194935').replace(/\s+/g, ''));
    toast(t('copied'));
  };
}

/* ---------- Activation / Renewal Code Modal ---------- */
function showCodeModal() {
  const m = modal(`
    <div class="modal-header">
      <h3 class="modal-title">🔑 ${t('enterCode')}</h3>
      <button class="modal-close-x" data-x>✕</button>
    </div>

    <div style="padding:14px 0 6px;">
      <div style="background:var(--brand-light); border-radius:12px; padding:12px 14px; margin-bottom:14px; display:flex; align-items:center; gap:10px;">
        <span style="font-size:20px;">🛡️</span>
        <div>
          <b style="font-size:13px; color:var(--text-main);">${t('activationCode')}</b>
          <p class="small muted" style="margin:2px 0 0; font-size:11.5px;">Enter the 10-digit code from your vendor to instantly renew your monthly subscription and prevent terminal interruption.</p>
        </div>
      </div>

      <form id="modalCodeForm" style="display:flex; flex-direction:column; gap:12px;">
        <label>
          <span style="font-size:12px; font-weight:700; margin-bottom:6px; display:block;">10-Digit Renewal Code:</span>
          <input id="modalCodeInp" name="code" maxlength="12" placeholder="e.g. B1K1P1A9X7" style="font-family:monospace; font-weight:800; font-size:16px; letter-spacing:2px; text-transform:uppercase; text-align:center; padding:11px;" required autocomplete="off">
        </label>
        <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:8px;">
          <button type="button" class="btn btn-ghost" data-x>${t('cancel')}</button>
          <button type="submit" class="btn btn-primary" id="modalCodeBtn">${t('activateCode')}</button>
        </div>
      </form>
    </div>
  `);

  m.querySelectorAll('[data-x]').forEach(el => el.onclick = m.close);
  m.querySelector('#modalCodeForm').onsubmit = async e => {
    e.preventDefault();
    const inp = m.querySelector('#modalCodeInp');
    const code = (inp.value || '').trim();
    if (!code) return;
    const btn = m.querySelector('#modalCodeBtn');
    btn.disabled = true;
    btn.textContent = 'Verifying…';
    try {
      const res = await call('sub:redeemCode', { code });
      m.close();
      toast(t('codeSuccess', { p: res.period }));
      await refreshSub();
      if (tab === 'dashboard') vDashboard();
    } catch (err) {
      toast(err.message, 1);
      btn.disabled = false;
      btn.textContent = t('activateCode');
      await refreshSub();
    }
  };
}

/* ---------- Static Language Application ---------- */
function applyStatic() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(e => {
    e.textContent = t(e.dataset.i18n);
  });
  document.querySelectorAll('.langsw').forEach(s => {
    s.innerHTML = `
      <button data-lang="en" class="${lang === 'en' ? 'on' : ''}">English</button>
      <button data-lang="si" class="${lang === 'si' ? 'on' : ''}">සිංහල</button>
    `;
  });
}

document.addEventListener('click', e => {
  const b = e.target.closest('[data-lang]');
  if (!b) return;
  lang = b.dataset.lang;
  try { localStorage.setItem('lang', lang); } catch {}
  applyStatic();
  if (me && !$('#app').classList.contains('hide')) {
    shell();
    banner();
    go(tab);
  }
});

/* ---------- Boot, Auth, Lock & Subscription ---------- */
const screen = id => ['login', 'lock', 'app'].forEach(s => $('#' + s).classList.toggle('hide', s !== id));

function populateLockBankDetails() {
  if (!sub) return;
  const isTamper = sub.state === 'tamper_locked' || sub.tamperLocked;

  // Security Fraud Lockdown Banner & Code Form toggle
  const tamperBanner = $('#tamperLockBanner');
  const codeForm = $('#lockCodeForm');
  const statusBadge = $('#lkStatusBadge');
  const mainTitle = $('#lkMainTitle');
  const descText = $('#lkDescText');
  const attemptWarning = $('#attemptWarning');

  if (isTamper) {
    if (tamperBanner) tamperBanner.classList.remove('hide');
    if (codeForm) codeForm.classList.add('hide');
    if (statusBadge) {
      statusBadge.textContent = 'SECURITY LOCKDOWN';
      statusBadge.style.color = 'var(--bad)';
    }
    if (mainTitle) mainTitle.textContent = 'Terminal Fraud Protection Active';
    if (descText) descText.textContent = 'Multiple unauthorized code attempts detected. Code entry has been permanently locked to prevent cheating. Super Admin Aman Manthira Hapuarachchi must verify identity to unlock.';
  } else {
    if (tamperBanner) tamperBanner.classList.add('hide');
    if (codeForm) codeForm.classList.remove('hide');
    if (statusBadge) {
      statusBadge.textContent = t('suspended');
      statusBadge.style.color = '';
    }
    if (mainTitle) mainTitle.textContent = 'Subscription Payment Required';
    if (descText) descText.textContent = t('suspendedMsg');

    // Show attempt warning if any failed attempts exist
    if (attemptWarning) {
      if (sub.failedAttempts > 0) {
        attemptWarning.classList.remove('hide');
        attemptWarning.textContent = `⚠️ Security Warning: ${sub.failedAttempts} of 3 invalid attempts. (${sub.attemptsLeft} attempt${sub.attemptsLeft > 1 ? 's' : ''} left before security fraud lockout)`;
      } else {
        attemptWarning.classList.add('hide');
      }
    }
  }

  const b = sub.bankDetails;
  if (!b) return;
  $('#lkBankName').textContent = b.bankName || 'Commercial Bank';
  $('#lkAccName').textContent = (b.accName || 'H.A AMAN MANTHIRA HAPUARACHCHI').toUpperCase();
  $('#lkAccNo').textContent = b.accNumber || '8030194935';
  $('#lkBankBranch').textContent = b.bankBranch || 'Gampaha';
  $('#lkCopyBtn').onclick = () => {
    navigator.clipboard.writeText((b.accNumber || '8030194935').replace(/\s+/g, ''));
    toast(t('copied'));
  };
}

async function boot() {
  document.querySelectorAll('.modal-backdrop').forEach(m => m.remove());
  try {
    sub = await call('sub:status');
  } catch (e) {
    return toast(e.message, 1);
  }
  populateLockBankDetails();
  if (sub.subEnabled && (sub.state === 'locked' || sub.state === 'tamper_locked' || sub.tamperLocked)) return screen('lock');
  me ? startApp() : screen('login');
}

$('#loginForm').onsubmit = async e => {
  e.preventDefault();
  try {
    me = await call('auth:login', Object.fromEntries(new FormData(e.target)));
    e.target.reset();
    tab = me.role === C ? 'pos' : 'dashboard';
    startApp();
  } catch (x) {
    toast(x.message, 1);
  }
};

$('#togglePass').onclick = () => {
  const inp = $('#loginPass');
  inp.type = inp.type === 'password' ? 'text' : 'password';
};

$('#lockForm').onsubmit = async e => {
  e.preventDefault();
  try {
    await call('sub:override', Object.fromEntries(new FormData(e.target)));
    e.target.reset();
    toast('Terminal unlocked by Super Admin Aman Manthira Hapuarachchi');
    await boot();
  } catch (x) {
    toast(x.message, 1);
  }
};

const lcf = $('#lockCodeForm');
if (lcf) {
  lcf.onsubmit = async e => {
    e.preventDefault();
    const inp = $('#lockActivationCode');
    const code = (inp.value || '').trim();
    if (!code) return;
    const btn = $('#lockCodeSubmitBtn');
    btn.disabled = true;
    btn.textContent = 'Verifying…';
    try {
      const res = await call('sub:redeemCode', { code });
      toast(t('codeSuccess', { p: res.period }));
      inp.value = '';
      await boot();
    } catch (x) {
      toast(x.message, 1);
      btn.disabled = false;
      btn.textContent = t('activateCode');
      await refreshSub();
    }
  };
}

$('#logout').onclick = async () => {
  await call('auth:logout');
  me = null;
  cart = [];
  clearInterval(poll);
  screen('login');
};

/* Top Banner Notification near the 25th */
function banner() {
  const b = $('#banner');
  if (!sub || !sub.subEnabled || (sub.state !== 'warning' && sub.state !== 'locked')) return b.classList.add('hide');

  const d = sub.daysLeft;
  const when = d > 0 ? t('inDays', { n: d }) : d === 0 ? t('today') : t('agoDays', { n: -d });
  b.className = 'payment-alert-banner';
  b.innerHTML = `
    <div class="banner-left-info">
      <span>🔔</span>
      <span>${t('bannerDue', { fee: fmt(sub.fee), date: sub.due || '25th' })} (${when})</span>
    </div>
    <div style="display:flex; gap:8px; align-items:center;">
      <button class="banner-view-bank-btn" id="bannerCodeBtn" style="background:var(--brand); color:#fff; border:none; font-weight:700;">🔑 ${t('enterCode')}</button>
      <button class="banner-view-bank-btn" id="bannerBankBtn">${t('viewBankDetails')}</button>
    </div>
  `;
  b.querySelector('#bannerBankBtn').onclick = showBankModal;
  b.querySelector('#bannerCodeBtn').onclick = showCodeModal;
}

async function refreshSub() {
  try {
    sub = await call('sub:status');
    populateLockBankDetails();
    banner();
    if (sub.subEnabled && (sub.state === 'locked' || sub.state === 'tamper_locked' || sub.tamperLocked)) boot();
  } catch {}
}

const SYSTEM_MODULES = [
  { key: 'pos', name: 'POS Terminal', desc: 'Cashier checkout, rapid barcode billing, discounts & receipts', icon: ICON.pos },
  { key: 'dashboard', name: 'Dashboard Overview', desc: 'Summary metrics, sales KPIs, revenue wave charts & alerts', icon: ICON.dashboard },
  { key: 'items', name: 'Inventory & Items', desc: 'Product catalog, pricing, category management & stock levels', icon: ICON.items },
  { key: 'grn', name: 'Goods Received Note (GRN)', desc: 'Supplier stock entry, batch tracking & purchase costs', icon: ICON.grn },
  { key: 'reports', name: 'Financial & Sales Reports', desc: 'Daily revenue, item-wise sales and cashier performance', icon: ICON.reports },
  { key: 'receipts', name: 'Receipt Settings', desc: 'Thermal printer 58mm/80mm format, header & footer design', icon: ICON.receipts },
  { key: 'backup', name: 'Database Backup', desc: 'Hourly automated backups, custom storage path & manual snapshot', icon: ICON.backup },
  { key: 'help', name: 'User Guide & Help', desc: 'Step-by-step cashier tutorials, shortcuts & operations guide', icon: ICON.help }
];

function userHasPerm(k) {
  if (!me) return false;
  // User Guide & Help is open to all staff and roles
  if (k === 'help') return true;
  // Super Admin always has full master access to everything
  if (me.role === A) return true;
  // User accounts management & subscription settings are restricted to Super Admin only by default
  if (k === 'users' || k === 'subs') return me.role === A;
  if (k === 'backup') return me.role === A || me.role === M;

  if (me.permissions) {
    const list = me.permissions.split(',').map(s => s.trim().toLowerCase());
    return list.includes(k.toLowerCase());
  }
  // Role defaults when no custom permissions are set
  if (me.role === M) return ['dashboard', 'pos', 'items', 'grn', 'reports', 'receipts', 'backup'].includes(k);
  if (me.role === C) return ['pos', 'dashboard'].includes(k);
  return false;
}

/* Tabs: Role and Permission based access */
const TABS = {
  dashboard: [vDashboard, 2],
  pos: [vPos, null],
  items: [vItems, null],
  grn: [vGrn, null],
  reports: [vReports, null],
  receipts: [vReceiptSettings, null],
  backup: [vBackup, null],
  users: [vUsers, null],
  subs: [vSubs, null],
  help: [vHelp, null]
};

function shell() {
  $('#av').textContent = me.fullName.trim().charAt(0).toUpperCase();
  $('#uname').textContent = me.fullName;
  $('#urole').textContent = t(me.role);
  $('#userGreeting').textContent = `Hello, ${me.fullName.split(' ')[0]}!`;

  $('#nav').innerHTML = Object.entries(TABS)
    .filter(([k]) => userHasPerm(k))
    .map(([k, v]) => `
      <button data-t="${k}" class="nav-item-btn ${k === tab ? 'on' : ''}">
        <svg viewBox="0 0 24 24">${ICON[k]}</svg>
        <span>${t(k)}</span>
        ${v[1] && k === tab ? `<span class="nav-badge-pill">${v[1]}</span>` : ''}
      </button>
    `).join('');
}

function changeSelfPasswordModal() {
  const m = modal(`
    <div class="modal-header">
      <div>
        <h3 class="modal-title">${t('changePassword')}</h3>
        <span class="muted small">${esc(me.fullName)} (@${esc(me.username)})</span>
      </div>
      <button class="modal-close-x" data-x>✕</button>
    </div>
    <form class="auth-form" style="margin-top:14px; display:flex; flex-direction:column; gap:14px;">
      <label class="field-wrap">
        <span class="field-label">${t('currentPassword')} *</span>
        <input name="currentPassword" type="password" required placeholder="Enter current password" autocomplete="current-password">
      </label>
      <label class="field-wrap">
        <span class="field-label">${t('newPassword')} *</span>
        <input name="newPassword" id="selfNewPwd" type="password" minlength="6" required placeholder="At least 6 characters" autocomplete="new-password">
      </label>
      <label class="field-wrap">
        <span class="field-label">${t('confirmPassword')} *</span>
        <input name="confirmPassword" id="selfConfPwd" type="password" minlength="6" required placeholder="Confirm new password" autocomplete="new-password">
      </label>
      <div style="display:flex; align-items:center; gap:8px;">
        <input type="checkbox" id="showSelfPwdToggle" style="accent-color:var(--brand); cursor:pointer;">
        <label for="showSelfPwdToggle" class="small muted" style="cursor:pointer; user-select:none;">Show passwords</label>
      </div>
      <div class="modal-actions" style="margin-top:14px;">
        <button type="button" class="btn btn-ghost" data-x>${t('cancel')}</button>
        <button type="submit" class="btn btn-primary">${t('changePassword')}</button>
      </div>
    </form>
  `);
  m.querySelectorAll('[data-x]').forEach(el => el.onclick = m.close);
  const showToggle = m.querySelector('#showSelfPwdToggle');
  const p1 = m.querySelector('#selfNewPwd');
  const p2 = m.querySelector('#selfConfPwd');
  showToggle.onchange = () => {
    const ty = showToggle.checked ? 'text' : 'password';
    p1.type = ty;
    p2.type = ty;
  };
  m.querySelector('form').onsubmit = async e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    if (data.newPassword !== data.confirmPassword) {
      toast(t('passMismatch') || 'Passwords do not match', 1);
      return;
    }
    if (data.newPassword.length < 6) {
      toast(t('passMinLength') || 'Password must be at least 6 characters', 1);
      return;
    }
    try {
      await call('auth:changePassword', {
        currentPassword: data.currentPassword,
        newPassword: data.newPassword
      });
      m.close();
      toast(t('passUpdated') || 'Password changed successfully!');
    } catch (err) {
      toast(err.message, 1);
    }
  };
}

function startApp() {
  screen('app');
  applyStatic();
  if (!userHasPerm(tab)) {
    tab = Object.keys(TABS).find(k => userHasPerm(k)) || 'pos';
  }
  shell();
  banner();
  $('#nav').onclick = e => {
    const b = e.target.closest('button');
    if (b) go(b.dataset.t);
  };
  const selfPwdBtn = $('#btnChangeMyPwd');
  if (selfPwdBtn) selfPwdBtn.onclick = e => { e.stopPropagation(); changeSelfPasswordModal(); };
  const userCard = $('#userProfileCard');
  if (userCard) userCard.onclick = () => changeSelfPasswordModal();

  clearInterval(poll);
  poll = setInterval(refreshSub, 6e5);
  go(tab);
}

async function go(k) {
  if (!userHasPerm(k)) {
    const firstAllowed = Object.keys(TABS).find(x => userHasPerm(x));
    if (firstAllowed && firstAllowed !== k) return go(firstAllowed);
    toast('Access denied: Insufficient permissions', 1);
    return;
  }
  tab = k;
  shell();
  try {
    await TABS[k][0]();
  } catch (e) {
    toast(e.message, 1);
  }
}

/* ==========================================================================
   DYNAMIC REAL DATA SVG CHART GENERATOR
   ========================================================================== */
function renderDynamicWaveChart(days, width = 650, height = 210) {
  if (!days || !days.length) {
    return `<div class="muted small" style="text-align:center; padding:50px;">No sales recorded in the past 14 days</div>`;
  }

  const maxSales = Math.max(...days.map(d => +d.Total || 0), 100);
  const maxBills = Math.max(...days.map(d => +d.Bills || 0), 5);
  const padX = 20;
  const padY = 25;
  const plotW = width - padX * 2;
  const plotH = height - padY * 2;
  const step = plotW / (days.length - 1);

  // Compute exact coordinate points for Sales curve
  const salesPoints = days.map((d, i) => {
    const x = padX + i * step;
    const y = padY + plotH - ((+d.Total || 0) / maxSales) * plotH;
    return { x, y, val: +d.Total || 0, date: d.Day, label: d.Weekday.slice(0, 3) };
  });

  // Compute exact coordinate points for Bills curve
  const billsPoints = days.map((d, i) => {
    const x = padX + i * step;
    const y = padY + plotH - ((+d.Bills || 0) / maxBills) * (plotH * 0.75);
    return { x, y, val: +d.Bills || 0 };
  });

  function smoothPath(pts) {
    if (pts.length < 2) return '';
    let path = `M ${pts[0].x},${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i];
      const p1 = pts[i + 1];
      const cx1 = p0.x + (p1.x - p0.x) / 2;
      const cy1 = p0.y;
      const cx2 = p0.x + (p1.x - p0.x) / 2;
      const cy2 = p1.y;
      path += ` C ${cx1},${cy1} ${cx2},${cy2} ${p1.x},${p1.y}`;
    }
    return path;
  }

  const salesLine = smoothPath(salesPoints);
  const salesArea = `${salesLine} L ${salesPoints[salesPoints.length - 1].x},${height} L ${salesPoints[0].x},${height} Z`;

  const billsLine = smoothPath(billsPoints);
  const billsArea = `${billsLine} L ${billsPoints[billsPoints.length - 1].x},${height} L ${billsPoints[0].x},${height} Z`;

  return `
    <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" style="width:100%; height:100%;">
      <defs>
        <linearGradient id="dynSalesGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#5b52f9" stop-opacity="0.45"/>
          <stop offset="100%" stop-color="#5b52f9" stop-opacity="0.0"/>
        </linearGradient>
        <linearGradient id="dynBillsGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f43f72" stop-opacity="0.32"/>
          <stop offset="100%" stop-color="#f43f72" stop-opacity="0.0"/>
        </linearGradient>
      </defs>

      <!-- Background Grid lines -->
      <line x1="0" y1="${padY}" x2="${width}" y2="${padY}" stroke="rgba(140,160,190,0.12)" stroke-dasharray="4"/>
      <line x1="0" y1="${padY + plotH / 2}" x2="${width}" y2="${padY + plotH / 2}" stroke="rgba(140,160,190,0.12)" stroke-dasharray="4"/>
      <line x1="0" y1="${height - padY}" x2="${width}" y2="${height - padY}" stroke="rgba(140,160,190,0.12)"/>

      <!-- Area Fills -->
      <path d="${salesArea}" fill="url(#dynSalesGrad)"/>
      <path d="${billsArea}" fill="url(#dynBillsGrad)"/>

      <!-- Smooth Line Strokes -->
      <path d="${billsLine}" fill="none" stroke="#f43f72" stroke-width="2.5" stroke-linecap="round"/>
      <path d="${salesLine}" fill="none" stroke="#5b52f9" stroke-width="3.5" stroke-linecap="round"/>

      <!-- Dynamic Data Nodes with Native Tooltip -->
      ${salesPoints.map(p => `
        <circle cx="${p.x}" cy="${p.y}" r="4" fill="#ffffff" stroke="#5b52f9" stroke-width="2.5" class="chart-interactive-dot">
          <title>${p.date} (${p.label}): LKR ${p.val.toFixed(2)}</title>
        </circle>
      `).join('')}
    </svg>
  `;
}

/* ==========================================================================
   VIEW 1: EXECUTIVE DASHBOARD (COMPREHENSIVE & DYNAMIC REAL DATA)
   ========================================================================== */
async function vDashboard() {
  const data = await call('dashboard:overview');
  const isSub = sub?.subEnabled !== false;
  const b = sub?.bankDetails || {};
  const currentDueDay = sub?.dueDay || 25;
  const curPeriod = `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}`;
  const isFreeMonth = sub?.freeMonth && curPeriod <= sub.freeMonth;

  const totalCatRevenue = data.categorySales?.reduce((s, c) => s + (+c.Total || 0), 0) || 1;
  const catColors = ['#5b52f9', '#10b981', '#f59e0b', '#ec4899', '#06b6d4', '#8b5cf6'];

  const cashMethod = data.paymentMethods?.find(m => m.Method === 'Cash') || { Bills: 0, Total: 0 };
  const cardMethod = data.paymentMethods?.find(m => m.Method === 'Card') || { Bills: 0, Total: 0 };
  const totalPayMethodRevenue = (+cashMethod.Total || 0) + (+cardMethod.Total || 0) || 1;
  const cashShare = Math.round(((+cashMethod.Total || 0) / totalPayMethodRevenue) * 100);
  const cardShare = 100 - cashShare;

  $('#view').innerHTML = `
    <div class="dash-layout-grid">
      <!-- Row 1: Top 4 Executive KPI Cards -->
      <div class="top-stats-row">
        <!-- Card 1: Today's Revenue -->
        <div class="fin-stat-card">
          <div class="stat-text-col">
            <span class="stat-label-title">${t('currentBalance')}</span>
            <div class="stat-main-number coral">${fmt(data.todaySales)}</div>
            <span class="stat-trend-sub">${data.todayBills} ${t('bills')} · Disc: ${fmt(data.todayDiscount)}</span>
          </div>
          <div class="stat-sparkline-box">
            <svg viewBox="0 0 90 48">
              <path d="M 0,40 Q 20,38 35,28 T 65,15 T 90,8 L 90,48 L 0,48 Z" fill="rgba(244,63,114,0.15)"/>
              <path d="M 0,40 Q 20,38 35,28 T 65,15 T 90,8" fill="none" stroke="#f43f72" stroke-width="2.5"/>
            </svg>
          </div>
        </div>

        <!-- Card 2: Monthly Sales & Average Order Value -->
        <div class="fin-stat-card">
          <div class="stat-text-col">
            <span class="stat-label-title">${t('latestIncome')}</span>
            <div class="stat-main-number green">+ ${fmt(data.monthSales)}</div>
            <span class="stat-trend-sub">AOV: ${fmt(data.aov)} (${data.monthBills} bills)</span>
          </div>
          <div class="stat-sparkline-box">
            <svg viewBox="0 0 90 48">
              <path d="M 0,42 Q 25,40 45,22 T 70,18 T 90,6 L 90,48 L 0,48 Z" fill="rgba(16,185,129,0.15)"/>
              <path d="M 0,42 Q 25,40 45,22 T 70,18 T 90,6" fill="none" stroke="#10b981" stroke-width="2.5"/>
            </svg>
          </div>
        </div>

        <!-- Card 3: Inventory Valuation & Stock Units -->
        <div class="fin-stat-card">
          <div class="stat-text-col">
            <span class="stat-label-title">${t('inventoryValuation')}</span>
            <div class="stat-main-number purple">${fmt(data.totalValuation)}</div>
            <span class="stat-trend-sub">${data.totalUnits} units across ${data.totalItems} items</span>
          </div>
          <div class="stat-sparkline-box">
            <svg viewBox="0 0 90 48">
              <path d="M 0,38 Q 20,40 40,25 T 65,30 T 90,10 L 90,48 L 0,48 Z" fill="rgba(91,82,249,0.15)"/>
              <path d="M 0,38 Q 20,40 40,25 T 65,30 T 90,10" fill="none" stroke="#5b52f9" stroke-width="2.5"/>
            </svg>
          </div>
        </div>

        <!-- Card 4: Due Calendar (Subscription Mode) OR Lifetime Ownership Badge (One-Payment Mode) -->
        ${isSub ? `
        <div class="due-calendar-card">
          <div class="due-cal-header">
            <span>${new Date().toLocaleDateString(lang === 'si' ? 'si-LK' : 'en-US', { weekday: 'long' })}</span>
            <span class="muted">${t('dueTag')}</span>
          </div>
          <div style="font-size:10.5px; color:var(--text-muted); margin:4px 0 6px; display:flex; justify-content:space-between; align-items:center;">
            <span>📅 Installed: <b>${sub?.installedOn || '—'}</b></span>
            <span class="pill ${isFreeMonth ? 'ok' : 'info'}" style="font-size:9px; padding:1px 6px;">${isFreeMonth ? 'FREE MONTH' : 'ACTIVE'}</span>
          </div>
          <div class="due-cal-days">
            <div class="cal-day-cell"><span>22</span><span>Thu</span></div>
            <div class="cal-day-cell"><span>23</span><span>Fri</span></div>
            <div class="cal-day-cell"><span>24</span><span>Sat</span></div>
            <div class="cal-day-cell active-due"><span>25</span><span>DUE</span></div>
            <div class="cal-day-cell"><span>26</span><span>Mon</span></div>
            <div class="cal-day-cell"><span>27</span><span>Tue</span></div>
            <div class="cal-day-cell"><span>28</span><span>Wed</span></div>
          </div>
        </div>
        ` : `
        <div class="fin-stat-card" style="border-left: 5px solid var(--accent-lime); background: radial-gradient(ellipse at top right, rgba(16,185,129,0.08), transparent 70%);">
          <div class="stat-text-col" style="width:100%;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="stat-label-title">License Status</span>
              <span class="pill ok" style="font-size:9.5px; font-weight:800;">PERPETUAL</span>
            </div>
            <div class="stat-main-number" style="color:var(--accent-lime); font-size:19px; margin:4px 0;">💎 Lifetime License</div>
            <span class="stat-trend-sub" style="color:var(--text-main); font-weight:700;">One-Time Project · Full Access</span>
            <div style="font-size:10.5px; color:var(--text-dim); margin-top:4px;">Installed: <b>${sub?.installedOn || 'Active'}</b> · Zero Recurring Fees</div>
          </div>
        </div>
        `}
      </div>

      <!-- Row 2: 3 Columns (Dynamic Real-Data Wave Chart + Center Column + History) -->
      <div class="dash-middle-row">
        <!-- 1. Revenue Real-Data Dynamic Waves Chart -->
        <div class="chart-panel-card">
          <div class="chart-panel-header">
            <div>
              <h3 class="chart-title">${t('revenueChartTitle')}</h3>
              <div class="chart-legends" style="margin-top:4px;">
                <span><span class="legend-dot sales"></span> ${t('salesLegend')}</span>
                <span><span class="legend-dot bills"></span> ${t('billsLegend')}</span>
              </div>
            </div>
            <span class="small muted" style="background:var(--bg-input); padding:4px 10px; border-radius:8px;">
              Live Database Stream · ${data.trendDays?.length || 14} Days
            </span>
          </div>

          <!-- Dynamic SVG Wave generated with exact SQL coordinates -->
          <div class="svg-wave-chart-wrap">
            ${renderDynamicWaveChart(data.trendDays)}
          </div>

          <!-- Real Dates on X-Axis -->
          <div style="display:flex; justify-content:space-between; font-size:11px; color:var(--text-dim); padding-top:4px;">
            ${data.trendDays?.slice(-7).map(d => `<span>${d.Day.slice(5)}</span>`).join('')}
          </div>
        </div>

        <!-- 2. Middle Panel: Super Admin Bank Card (Subscription Mode) OR Perpetual Ownership Shield (Lifetime Mode) -->
        ${isSub ? `
        <div class="bank-showcase-panel">
          <div class="panel-header-row">
            <h3 class="panel-heading">${t('myCardsTitle')}</h3>
            <button class="btn btn-sm btn-ghost" id="dashViewBankBtn">Details</button>
          </div>

          <!-- Purple Credit Card Element -->
          <div class="superadmin-credit-card">
            <div class="card-hologram-shine"></div>
            <div class="card-top-row">
              <span class="card-brand-label">SUPER ADMIN / VENDOR</span>
              <span class="card-subscription-tag">${t('dueTag')}</span>
            </div>
            <div class="card-number-row">
              <span id="dashCardAccNo">${esc(b.accNumber || '8030194935')}</span>
              <button type="button" class="btn-card-copy" id="dashCardCopyBtn">
                <svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                <span>${t('copy')}</span>
              </button>
            </div>
            <div class="card-bottom-row">
              <div>
                <div style="font-size:9.5px; opacity:0.8;">CARD HOLDER</div>
                <div class="card-holder-name">${esc(b.accName || 'H.A AMAN MANTHIRA HAPUARACHCHI')}</div>
              </div>
              <div style="text-align:right;">
                <div style="font-size:9.5px; opacity:0.8;">BANK & BRANCH</div>
                <b>${esc(b.bankName || 'Commercial Bank')}</b> · <span>${esc(b.bankBranch || 'Gampaha')}</span>
              </div>
            </div>
          </div>

          <!-- Meta rows below credit card -->
          <div class="bank-info-meta-list">
            <div class="bank-meta-item">
              <span class="bank-meta-label">Bank:</span>
              <span class="bank-meta-val">${esc(b.bankName || 'Commercial Bank')}</span>
            </div>
            <div class="bank-meta-item">
              <span class="bank-meta-label">Account Name:</span>
              <span class="bank-meta-val">${esc(b.accName || 'H.A Aman Manthira Hapuarachchi')}</span>
            </div>
            <div class="bank-meta-item">
              <span class="bank-meta-label">Branch:</span>
              <span class="bank-meta-val">${esc(b.bankBranch || 'Gampaha')}</span>
            </div>
          </div>

          <!-- Activation / Renewal Code Section -->
          <div class="dash-code-box ${isFreeMonth ? 'free-month-box' : sub?.state === 'warning' ? 'warn-box' : sub?.state === 'locked' ? 'lock-box' : ''}">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
              <div style="display:flex; align-items:center; gap:6px;">
                <span style="font-size:14px;">${isFreeMonth ? '🎉' : '🔑'}</span>
                <b style="font-size:12px; font-weight:700;">${isFreeMonth ? t('freeInstallMonth') : t('enterCode')}</b>
              </div>
              <span class="pill ${isFreeMonth ? 'ok' : sub?.state === 'warning' ? 'warn' : sub?.state === 'locked' ? 'bad' : 'ok'}" style="font-size:9.5px; padding:1px 6px;">
                ${isFreeMonth ? 'FREE PERIOD' : sub?.state === 'warning' ? 'PAYMENT DUE' : sub?.state === 'locked' ? 'LOCKED' : 'ACTIVE'}
              </span>
            </div>
            <p class="small muted" style="margin:0 0 10px; font-size:11px; line-height:1.4;">
              ${isFreeMonth 
                ? `System installed on <b>${sub.installedOn}</b>. This installation month (${sub.freeMonth}) is completely free — no codes or payments required! First monthly subscription begins on <b>${sub.nextDue || 'next month'}</b>.`
                : sub?.state === 'warning'
                ? `Pay fee (${fmt(sub.fee)}) to the bank above, then enter the code from your vendor to clear warning.`
                : `Enter vendor activation code after monthly transfer to extend subscription and keep terminal active.`}
            </p>
            <form id="dashActivationForm" style="display:flex; gap:6px;">
              <input 
                id="dashCodeInput" 
                class="dash-code-inp" 
                placeholder="${isFreeMonth ? 'Optional advance code' : t('codePlaceholder')}" 
                maxlength="24" 
                autocomplete="off"
                ${isFreeMonth ? '' : 'required'}
              >
              <button type="submit" class="btn btn-primary btn-sm" id="dashCodeSubmitBtn" style="white-space:nowrap; padding:0 12px; font-weight:700;">
                ${t('activateCode')}
              </button>
            </form>
          </div>
        </div>
        ` : `
        <div class="panel-card" style="display:flex; flex-direction:column; justify-content:space-between; border:1px solid rgba(16,185,129,0.25); background:radial-gradient(ellipse at top left, rgba(16,185,129,0.06), transparent 70%);">
          <div>
            <div class="panel-header-row" style="margin-bottom:12px;">
              <div style="display:flex; align-items:center; gap:8px;">
                <span style="font-size:22px;">💎</span>
                <div>
                  <h3 class="panel-heading" style="margin:0;">Lifetime Software License</h3>
                  <small class="muted">Perpetual Standalone Edition</small>
                </div>
              </div>
              <span class="pill ok" style="font-size:10px; font-weight:800;">VERIFIED</span>
            </div>

            <div style="background:var(--bg-input); border-radius:14px; padding:14px; border:1px solid var(--border-light); margin-bottom:12px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                <span style="font-size:11px; font-weight:800; color:var(--accent-lime); text-transform:uppercase; letter-spacing:0.5px;">✓ One-Payment Project</span>
                <span class="small muted">Installed: ${sub?.installedOn || 'Active'}</span>
              </div>
              <div style="font-size:13.5px; font-weight:800; color:var(--text-main); margin-bottom:3px;">
                Permanent Station Ownership
              </div>
              <small class="muted" style="display:block; font-size:11.5px; line-height:1.45;">
                This POS software is licensed as a one-time payment project. Monthly renewals and recurring subscription requirements are completely disabled.
              </small>
            </div>

            <div style="display:flex; flex-direction:column; gap:8px; font-size:12px;">
              <div style="display:flex; justify-content:space-between; padding:5px 0; border-bottom:1px solid var(--border-light);">
                <span class="muted">License Type:</span>
                <b style="color:var(--accent-lime);">Perpetual Lifetime Ownership</b>
              </div>
              <div style="display:flex; justify-content:space-between; padding:5px 0; border-bottom:1px solid var(--border-light);">
                <span class="muted">Recurring Fees:</span>
                <b>None (0.00 LKR / Free forever)</b>
              </div>
              <div style="display:flex; justify-content:space-between; padding:5px 0;">
                <span class="muted">System Access:</span>
                <span style="color:var(--accent-lime); font-weight:700;">● 100% Unlocked</span>
              </div>
            </div>
          </div>

          <div style="margin-top:14px; padding:10px 12px; background:rgba(16,185,129,0.08); border-radius:10px; border:1px solid rgba(16,185,129,0.2); font-size:11px; color:var(--text-muted); display:flex; align-items:center; gap:8px;">
            <span>🛡️</span>
            <span>All cashier POS billing, inventory, GRN, barcode sticker printing and reporting are permanently active.</span>
          </div>
        </div>
        `}

        <!-- 3. History / Recent Transactions Column with Payment Badges -->
        <div class="history-panel-card">
          <div class="panel-header-row">
            <h3 class="panel-heading">${t('historyTitle')}</h3>
            <span class="small muted">${t('today')}</span>
          </div>

          <input class="history-search-input" id="histSearch" placeholder="Search invoices…">

          ${isSub ? `
          <!-- Upcoming Subscription Payment Notice on 25th (Subscription Mode Only) -->
          <div style="background:var(--brand-light); border-radius:12px; padding:10px 12px; display:flex; flex-direction:column; gap:2px;">
            <span style="font-size:10.5px; font-weight:800; color:var(--brand); text-transform:uppercase;">${t('upcomingPayments')}</span>
            <b style="font-size:12px; color:var(--text-main);">${t('softwareSubDue')}</b>
          </div>
          ` : ''}

          <div class="history-list-stream" id="histStream">
            ${data.recentSales.length ? data.recentSales.map(s => `
              <div class="history-item-row">
                <div>
                  <h5 class="history-item-title">${esc(s.InvoiceNo)}</h5>
                  <p class="history-item-time">${esc(s.Cashier)} · ${new Date(s.CreatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                </div>
                <div style="text-align:right;">
                  <span class="pill ${s.PaymentMethod === 'Card' ? 'info' : 'ok'}" style="font-size:9.5px; padding:1px 6px;">${esc(s.PaymentMethod || 'Cash')}</span>
                  <div class="history-amount-badge">+${fmt(s.Total).replace('LKR ', '')}</div>
                </div>
              </div>
            `).join('') : `<div class="muted small" style="text-align:center; padding:20px;">${t('noData')}</div>`}
          </div>
        </div>
      </div>

      <!-- Row 3: Best Selling Items (Today / Weekly / Monthly Switcher) & Category Breakdown -->
      <div class="dash-bottom-row" style="grid-template-columns: 1.35fr 1fr; margin-bottom: 20px;">
        <!-- 1. Best Selling Items Panel -->
        <div class="best-selling-panel">
          <div class="best-selling-header">
            <div>
              <div style="display:flex; align-items:center; gap:8px;">
                <h3 class="panel-heading" style="margin:0;">🏆 ${t('bestSelling')}</h3>
                <span class="pill ok" style="font-size:10px; font-weight:800;">TOP REVENUE</span>
              </div>
              <small class="muted">${t('bestSellingSub')}</small>
            </div>

            <!-- Timeframe Pill Switcher -->
            <div class="timeframe-pill" id="bestSellingTimeframe">
              <button type="button" class="timeframe-btn active" data-timeframe="today">⚡ ${t('timeToday')}</button>
              <button type="button" class="timeframe-btn" data-timeframe="weekly">📅 ${t('timeWeek')}</button>
              <button type="button" class="timeframe-btn" data-timeframe="monthly">📊 ${t('timeMonth')}</button>
            </div>
          </div>

          <!-- Dynamic Best Selling Stream Container -->
          <div id="bestSellingContainer" class="best-selling-list">
          </div>
        </div>

        <!-- 2. Category Sales Multi-color Breakdown -->
        <div class="panel-card" style="display:flex; flex-direction:column; gap:14px;">
          <div class="panel-header-row">
            <h3 class="panel-heading">${t('categorySales')}</h3>
            <span class="small muted">${data.categorySales?.length || 0} Categories</span>
          </div>

          ${data.categorySales?.length ? `
            <div style="display:flex; flex-direction:column; gap:12px;">
              <!-- Multi-color Progress Strip -->
              <div style="display:flex; height:12px; border-radius:99px; overflow:hidden; background:var(--bg-input);">
                ${data.categorySales.map((c, i) => {
                  const pct = Math.max(2, Math.round(((+c.Total || 0) / totalCatRevenue) * 100));
                  return `<div style="width:${pct}%; background:${catColors[i % catColors.length]};" title="${c.Category}: ${pct}% (${fmt(c.Total)})"></div>`;
                }).join('')}
              </div>

              <!-- Category Grid -->
              <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap:10px;">
                ${data.categorySales.map((c, i) => {
                  const pct = Math.round(((+c.Total || 0) / totalCatRevenue) * 100);
                  return `
                    <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 12px; background:var(--bg-input); border-radius:10px;">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span style="width:8px; height:8px; border-radius:50%; background:${catColors[i % catColors.length]}; flex-shrink:0;"></span>
                        <b style="font-size:12.5px;">${esc(c.Category)}</b>
                      </div>
                      <div style="text-align:right;">
                        <b style="font-size:12px; color:var(--brand);">${fmt(c.Total)}</b>
                        <span class="muted small" style="display:block;">${pct}% (${c.Qty} items)</span>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          ` : `<div class="muted small" style="text-align:center; padding:20px;">No category sales records in past 30 days</div>`}
        </div>
      </div>

      <!-- Row 4: Cash vs Card Payment Split & Staff Leaderboard -->
      <div class="dash-bottom-row" style="grid-template-columns: 1fr 1fr;">
        <!-- Cash vs Card Payment Split -->
        <div class="panel-card" style="display:flex; flex-direction:column; gap:14px;">
          <div class="panel-header-row">
            <h3 class="panel-heading">${t('paymentBreakdown')}</h3>
          </div>

          <div style="display:flex; gap:12px;">
            <div style="flex:1; padding:14px; background:var(--bg-input); border-radius:14px; border:1px solid var(--border-card);">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <b style="font-size:12px; color:var(--accent-lime);">💵 CASH</b>
                <span class="pill ok" style="font-size:10px;">${cashShare}%</span>
              </div>
              <div style="font-size:18px; font-weight:800; margin:6px 0;">${fmt(cashMethod.Total)}</div>
              <small class="muted">${cashMethod.Bills} transactions</small>
            </div>

            <div style="flex:1; padding:14px; background:var(--bg-input); border-radius:14px; border:1px solid var(--border-card);">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <b style="font-size:12px; color:var(--brand);">💳 CARD</b>
                <span class="pill info" style="font-size:10px;">${cardShare}%</span>
              </div>
              <div style="font-size:18px; font-weight:800; margin:6px 0;">${fmt(cardMethod.Total)}</div>
              <small class="muted">${cardMethod.Bills} transactions</small>
            </div>
          </div>
        </div>

        <!-- Staff Performance Leaderboard -->
        <div class="panel-card" style="display:flex; flex-direction:column; gap:12px;">
          <div class="panel-header-row">
            <h3 class="panel-heading">${t('staffLeaderboard')}</h3>
            <span class="small muted">${data.cashiers?.length || 0} Staff</span>
          </div>

          <div style="display:flex; flex-direction:column; gap:8px;">
            ${data.cashiers?.length ? data.cashiers.map(c => `
              <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 12px; background:var(--bg-input); border-radius:10px; font-size:12px;">
                <div style="display:flex; align-items:center; gap:8px;">
                  <span style="font-size:16px;">👤</span>
                  <b>${esc(c.Cashier)}</b>
                </div>
                <div>
                  <b style="color:var(--brand);">${fmt(c.Total)}</b> <span class="muted small">(${c.Bills} bills)</span>
                </div>
              </div>
            `).join('') : '<div class="muted small" style="text-align:center; padding:18px;">No staff sales yet</div>'}
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach Dashboard events & Best Selling Items interactive switcher
  let activeTimeframe = 'today';
  if (!data.topItemsToday?.length && (data.topItemsWeekly?.length || data.topItemsMonthly?.length)) {
    activeTimeframe = data.topItemsWeekly?.length ? 'weekly' : 'monthly';
  }

  const renderBestSellingList = (tf) => {
    const list = tf === 'today' ? (data.topItemsToday || []) 
               : tf === 'weekly' ? (data.topItemsWeekly || []) 
               : (data.topItemsMonthly || []);
    const container = $('#bestSellingContainer');
    if (!container) return;

    // Toggle active timeframe pill button
    document.querySelectorAll('.timeframe-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.timeframe === tf);
    });

    if (!list.length) {
      container.innerHTML = `
        <div style="text-align:center; padding:34px 16px; background:var(--bg-input); border-radius:14px; border:1px dashed var(--border-light);">
          <div style="font-size:32px; margin-bottom:8px;">🛍️</div>
          <b style="font-size:13.5px; color:var(--text-main);">${t('noTopSales')}</b>
          <p class="small muted" style="margin:5px 0 0; font-size:11.5px;">New sales transactions completed at the POS terminal will automatically rank here in real time.</p>
        </div>
      `;
      return;
    }

    const maxTotal = Math.max(...list.map(x => +x.Total || 0), 1);

    container.innerHTML = list.map((item, idx) => {
      const rank = idx + 1;
      const rankCls = rank === 1 ? 'rank-gold' : rank === 2 ? 'rank-silver' : rank === 3 ? 'rank-bronze' : 'rank-other';
      const rankLabel = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : `#${rank}`;
      const icon = catIcon(item.Category);
      const pct = Math.max(10, Math.round(((+item.Total || 0) / maxTotal) * 100));

      return `
        <div class="best-selling-row">
          <div style="display:flex; align-items:center; gap:10px; min-width:0; flex:1;">
            <div class="rank-medal-badge ${rankCls}">${rankLabel}</div>
            <div class="best-item-icon">${icon}</div>
            <div class="best-item-details">
              <span class="best-item-name" title="${esc(item.Name)}">${esc(item.Name)}</span>
              <div class="best-item-meta">
                <span class="pill info" style="font-size:9.5px; padding:1px 6px;">${esc(item.Category || 'General')}</span>
                <span><b>${item.Qty}</b> ${t('unitsSold')}</span>
                ${item.Bills ? `<span>· ${item.Bills} ${t('bills')}</span>` : ''}
              </div>
            </div>
          </div>

          <div class="best-item-rev-col">
            <span class="best-item-rev">${fmt(item.Total)}</span>
            <div class="best-progress-track" title="${pct}% of top seller volume">
              <div class="best-progress-fill" style="width:${pct}%;"></div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  };

  renderBestSellingList(activeTimeframe);

  document.querySelectorAll('.timeframe-btn').forEach(btn => {
    btn.onclick = () => {
      activeTimeframe = btn.dataset.timeframe;
      renderBestSellingList(activeTimeframe);
    };
  });

  if ($('#dashViewBankBtn')) $('#dashViewBankBtn').onclick = showBankModal;
  if ($('#dashCardCopyBtn')) {
    $('#dashCardCopyBtn').onclick = () => {
      navigator.clipboard.writeText((b.accNumber || '8030194935').replace(/\s+/g, ''));
      toast(t('copied'));
    };
  }

  const dashCodeForm = $('#dashActivationForm');
  if (dashCodeForm) {
    dashCodeForm.onsubmit = async e => {
      e.preventDefault();
      const inp = $('#dashCodeInput');
      const code = (inp.value || '').trim();
      if (!code) return;
      const btn = $('#dashCodeSubmitBtn');
      btn.disabled = true;
      btn.textContent = 'Verifying…';
      try {
        const res = await call('sub:redeemCode', { code });
        toast(t('codeSuccess', { p: res.period }));
        inp.value = '';
        await refreshSub();
        vDashboard();
      } catch (err) {
        toast(err.message, 1);
        btn.disabled = false;
        btn.textContent = t('activateCode');
        await refreshSub();
      }
    };
  }

  $('#histSearch').oninput = e => {
    const q = e.target.value.toLowerCase();
    const rows = data.recentSales.filter(s => (s.InvoiceNo + s.Cashier).toLowerCase().includes(q));
    $('#histStream').innerHTML = rows.map(s => `
      <div class="history-item-row">
        <div>
          <h5 class="history-item-title">${esc(s.InvoiceNo)}</h5>
          <p class="history-item-time">${esc(s.Cashier)} · ${new Date(s.CreatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
        </div>
        <div style="text-align:right;">
          <span class="pill ${s.PaymentMethod === 'Card' ? 'info' : 'ok'}" style="font-size:9.5px; padding:1px 6px;">${esc(s.PaymentMethod || 'Cash')}</span>
          <div class="history-amount-badge">+${fmt(s.Total).replace('LKR ', '')}</div>
        </div>
      </div>
    `).join('') || `<div class="muted small" style="text-align:center; padding:16px;">${t('noData')}</div>`;
  };
}

/* ==========================================================================
   STANDARD THERMAL RECEIPT GENERATOR & LIVE PREVIEW SYSTEM
   ========================================================================== */
function renderStandardReceiptHtml(r, cfg = {}) {
  const shopName = cfg.shopName || 'KADE POS SUPERMARKET & CAFE';
  const shopTagline = cfg.shopTagline || 'Quality Groceries & Dining';
  const shopAddress = cfg.shopAddress || 'No 124, High Level Road, Colombo 03';
  const shopPhone = cfg.shopPhone || 'Tel: 071 234 5678 / 011 234 5678';
  const shopTaxNo = cfg.shopTaxNo ? `BR/VAT: ${cfg.shopTaxNo}` : '';
  const headerNote = cfg.receiptHeader || 'TAX INVOICE / OFFICIAL RECEIPT';
  const footerNote = cfg.receiptFooter || 'Thank you for shopping with us! Please come again.';
  const paperWidth = cfg.receiptPaperWidth === '58mm' ? '280px' : '320px';

  const sub = +(r.subtotal || r.total || 0);
  const disc = +(r.discount || 0);
  const tot = +(r.total || 0);
  const paid = +(r.paid || 0);
  const bal = +(r.balance || 0);
  const lines = Array.isArray(r.lines) ? r.lines : [];

  return `
    <div class="thermal-receipt-paper" style="width:${paperWidth};">
      <div class="tr-header">
        <h2 class="tr-shop-name">${esc(shopName)}</h2>
        ${shopTagline ? `<div class="tr-tagline">${esc(shopTagline)}</div>` : ''}
        ${shopAddress ? `<div class="tr-contact">${esc(shopAddress)}</div>` : ''}
        ${shopPhone ? `<div class="tr-contact">${esc(shopPhone)}</div>` : ''}
        ${shopTaxNo ? `<div class="tr-tax">${esc(shopTaxNo)}</div>` : ''}
        <div style="font-weight:800; font-size:11px; margin-top:5px; letter-spacing:0.8px;">${esc(headerNote)}</div>
      </div>

      <hr class="tr-divider-double">

      <div class="tr-meta-row">
        <span><b>INV:</b> ${esc(r.invoiceNo || 'INV-000000')}</span>
        <span><b>METH:</b> ${esc(r.paymentMethod || 'Cash').toUpperCase()}</span>
      </div>
      <div class="tr-meta-row">
        <span><b>DATE:</b> ${new Date(r.createdAt || Date.now()).toLocaleDateString()}</span>
        <span><b>TIME:</b> ${new Date(r.createdAt || Date.now()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
      </div>
      <div class="tr-meta-row">
        <span><b>CASHIER:</b> ${esc(r.cashier || me?.fullName || 'Cashier')}</span>
      </div>

      <hr class="tr-divider-dashed">

      <table class="tr-table">
        <thead>
          <tr>
            <th style="width:48%;">ITEM</th>
            <th style="text-align:center; width:14%;">QTY</th>
            <th style="text-align:right; width:18%;">PRICE</th>
            <th style="text-align:right; width:20%;">TOTAL</th>
          </tr>
        </thead>
        <tbody>
          ${lines.map(l => `
            <tr>
              <td>
                <b>${esc(l.name)}</b>
                ${l.disc ? `<br><small style="color:#000000;">Disc -${l.disc}%</small>` : ''}
              </td>
              <td style="text-align:center;">${l.qty}</td>
              <td style="text-align:right;">${(+l.price).toFixed(2)}</td>
              <td style="text-align:right;"><b>${(+l.total).toFixed(2)}</b></td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <hr class="tr-divider-dashed">

      <div class="tr-sum-row">
        <span>SUBTOTAL:</span>
        <b>LKR ${sub.toFixed(2)}</b>
      </div>
      ${disc > 0 ? `
        <div class="tr-sum-row" style="color:#000000;">
          <span>BILL DISCOUNT:</span>
          <b>- LKR ${disc.toFixed(2)}</b>
        </div>
      ` : ''}

      <div class="tr-sum-row tr-total-row">
        <span>NET TOTAL PAYABLE:</span>
        <span>LKR ${tot.toFixed(2)}</span>
      </div>

      <div class="tr-sum-row">
        <span>PAYMENT (${esc(r.paymentMethod || 'Cash').toUpperCase()}):</span>
        <b>LKR ${paid.toFixed(2)}</b>
      </div>
      <div class="tr-sum-row">
        <span>CHANGE / BALANCE:</span>
        <b>LKR ${bal.toFixed(2)}</b>
      </div>

      <hr class="tr-divider-dashed">

      <div class="tr-meta-row" style="justify-content:center; gap:16px; font-weight:700;">
        <span>ITEMS: ${lines.length}</span>
        <span>TOTAL QTY: ${lines.reduce((s, l) => s + (+l.qty || 0), 0)}</span>
      </div>

      <div class="tr-footer">
        <p style="margin:6px 0 3px;">${esc(footerNote)}</p>
        <p style="margin:2px 0 0; font-size:10px; font-weight:700; color:#000000;">Powered by amectar</p>
        <p style="margin:1px 0 3px; font-size:9.5px; color:#000000; font-family:monospace; letter-spacing:0.5px;">0741800901</p>
        <div style="letter-spacing:3px; font-weight:800; margin-top:6px; font-size:11px;">*${esc(r.invoiceNo || 'INV-000000')}*</div>
      </div>
    </div>
  `;
}

/* ==========================================================================
   PHOTOCOPY, PRINTING, LAMINATION & TYPING SPEED CALCULATOR
   ========================================================================== */
function showPrintServiceCalculator(onAdd) {
  let activeTab = 'copy';

  const COPY_PRESETS = [
    { id: 'A4_BW_1', name: 'Photocopy A4 B/W (1-Side)', rate: 10, icon: '📄' },
    { id: 'A4_BW_2', name: 'Photocopy A4 B/W (Double Sided)', rate: 15, icon: '📑' },
    { id: 'A4_COL', name: 'Color Photocopy / Print A4', rate: 50, icon: '🌈' },
    { id: 'A4_DOC_BW', name: 'Computer Document Print A4 B/W', rate: 15, icon: '🖨️' },
    { id: 'A3_BW', name: 'Photocopy A3 B/W (Large Sheet)', rate: 25, icon: '📰' },
    { id: 'A3_COL', name: 'Color Photocopy / Print A3', rate: 120, icon: '🎨' },
    { id: 'PHOTO_4X6', name: 'Photo Print 4x6 / Passport (4 Photos)', rate: 200, icon: '📷' }
  ];

  const LAM_PRESETS = [
    { id: 'ID', name: 'ID Card / License Lamination', rate: 80, icon: '🪪' },
    { id: 'A4', name: 'A4 Document / Certificate Lamination', rate: 150, icon: '📜' },
    { id: 'A3', name: 'A3 Document / Poster Lamination', rate: 300, icon: '🖼️' }
  ];

  const TYP_PRESETS = [
    { id: 'sin_ltr', name: 'Sinhala Letter / Document Typing (Per Page)', rate: 200, icon: '⌨️' },
    { id: 'eng_ltr', name: 'English Letter / Agreement Typing (Per Page)', rate: 150, icon: '💻' },
    { id: 'cv', name: 'Professional CV / Resume Creation', rate: 500, icon: '👔' },
    { id: 'scan', name: 'Document Scanning to PDF / Email (Per Page)', rate: 30, icon: '📥' },
    { id: 'typeset', name: 'Exam Paper / Book Typesetting (Per Page)', rate: 180, icon: '📖' }
  ];

  const BND_PRESETS = [
    { id: 'sp_sm', name: 'Spiral / Comb Binding Small (Up to 50 pgs)', rate: 180, icon: '🌀' },
    { id: 'sp_lg', name: 'Spiral / Comb Binding Large (50-150 pgs)', rate: 280, icon: '📚' },
    { id: 'tape', name: 'Tape / Strip Document Binding', rate: 120, icon: '📑' }
  ];

  let curPreset = COPY_PRESETS[0];
  let curCount = 1;
  let curRate = curPreset.rate;

  const m = modal(`
    <div class="modal-header" style="border-bottom:1px solid var(--border); padding-bottom:12px;">
      <div style="display:flex; align-items:center; gap:10px;">
        <span style="font-size:26px;">🖨️</span>
        <div>
          <h3 class="modal-title" style="margin:0; font-size:18px;">Print, Copy & Services Calculator</h3>
          <small class="muted">Instant billing for Photocopy, Printouts, Laminating, Typing & Binding (F2)</small>
        </div>
      </div>
      <button class="modal-close-x" data-x>✕</button>
    </div>

    <!-- Mode Tabs -->
    <div class="calc-nav-tabs" style="display:flex; gap:6px; margin:14px 0 16px; border-bottom:1px solid var(--border); padding-bottom:10px;">
      <button type="button" class="btn btn-sm btn-calc-tab active" data-tab="copy" style="font-weight:700;">📄 Copy & Print</button>
      <button type="button" class="btn btn-sm btn-calc-tab" data-tab="lam" style="font-weight:700;">🛡️ Lamination</button>
      <button type="button" class="btn btn-sm btn-calc-tab" data-tab="typ" style="font-weight:700;">⌨️ Typing & Doc</button>
      <button type="button" class="btn btn-sm btn-calc-tab" data-tab="bnd" style="font-weight:700;">🌀 Binding</button>
    </div>

    <div id="calcBody"></div>
  `, true);

  const renderCalcBody = () => {
    let presets = COPY_PRESETS;
    let unitLabel = 'Pages / Copies';
    let stepBtns = [1, 5, 10, 25, 50, 100];

    if (activeTab === 'lam') {
      presets = LAM_PRESETS;
      unitLabel = 'Lamination Count';
      stepBtns = [1, 2, 5, 10, 20];
    } else if (activeTab === 'typ') {
      presets = TYP_PRESETS;
      unitLabel = 'Pages / Documents';
      stepBtns = [1, 2, 5, 10, 20];
    } else if (activeTab === 'bnd') {
      presets = BND_PRESETS;
      unitLabel = 'Book / Binding Count';
      stepBtns = [1, 2, 5, 10];
    }

    if (!presets.find(p => p.id === curPreset.id)) {
      curPreset = presets[0];
      curRate = curPreset.rate;
    }

    const subtotal = Math.round(curCount * curRate * 100) / 100;

    m.querySelector('#calcBody').innerHTML = `
      <div style="display:flex; flex-direction:column; gap:16px;">
        <!-- Preset Cards Grid -->
        <div>
          <span style="display:block; font-size:12px; font-weight:700; margin-bottom:8px; text-transform:uppercase; letter-spacing:0.5px; color:var(--text-dim);">Select Service Type</span>
          <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr)); gap:8px;">
            ${presets.map(p => `
              <button type="button" class="calc-preset-card ${p.id === curPreset.id ? 'active' : ''}" data-pid="${p.id}" style="
                display:flex; align-items:center; justify-content:space-between; padding:10px 12px; border-radius:10px;
                border:1.5px solid ${p.id === curPreset.id ? 'var(--brand)' : 'var(--border)'};
                background:${p.id === curPreset.id ? 'rgba(99,102,241,0.08)' : 'var(--bg-card)'};
                cursor:pointer; text-align:left; transition:all 0.15s;
              ">
                <div style="display:flex; align-items:center; gap:8px;">
                  <span style="font-size:18px;">${p.icon}</span>
                  <div>
                    <b style="display:block; font-size:12px; color:var(--text-main);">${esc(p.name)}</b>
                    <small class="muted" style="font-size:10.5px;">Default: LKR ${p.rate.toFixed(2)}</small>
                  </div>
                </div>
                ${p.id === curPreset.id ? '<span style="color:var(--brand); font-weight:800; font-size:16px;">✓</span>' : ''}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Quantity Steppers & Rate Inputs -->
        <div style="display:grid; grid-template-columns:1.4fr 1fr; gap:14px; background:var(--bg-input); padding:14px; border-radius:12px; border:1px solid var(--border);">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
              <span class="field-label" style="font-size:12px; font-weight:800;">${unitLabel}</span>
              <small class="muted" style="font-size:11px;">Quick Add:</small>
            </div>
            <div style="display:flex; gap:8px; margin-bottom:8px;">
              <input id="calcCountInput" type="number" min="1" step="1" value="${curCount}" style="width:100px; font-size:18px; font-weight:800; text-align:center;">
              <div style="display:flex; gap:4px; flex-wrap:wrap; align-items:center;">
                ${stepBtns.map(n => `<button type="button" class="btn btn-sm btn-ghost btn-step-pill" data-n="${n}" style="padding:4px 8px; font-size:11px; font-weight:700;">+${n}</button>`).join('')}
                <button type="button" class="btn btn-sm btn-ghost btn-step-set" data-s="1" style="padding:4px 8px; font-size:11px; font-weight:700; color:var(--brand);">Reset</button>
              </div>
            </div>
          </div>

          <div>
            <span class="field-label" style="display:block; font-size:12px; font-weight:800; margin-bottom:6px;">Unit Rate (LKR)</span>
            <input id="calcRateInput" type="number" min="0" step="0.5" value="${curRate}" style="font-size:16px; font-weight:700;">
            <small class="muted" style="font-size:10px; display:block; margin-top:4px;">You can override the unit price anytime.</small>
          </div>
        </div>

        <!-- Summary & Add to Bill -->
        <div style="display:flex; justify-content:space-between; align-items:center; background:linear-gradient(135deg, rgba(79,70,229,0.12) 0%, rgba(124,58,237,0.12) 100%); padding:14px 18px; border-radius:12px; border:1px solid rgba(99,102,241,0.3);">
          <div>
            <div style="font-size:11px; text-transform:uppercase; font-weight:800; color:var(--brand); letter-spacing:0.5px;">Calculated Bill Line</div>
            <b style="font-size:14px; display:block; margin:2px 0;">${esc(curPreset.name)}</b>
            <span style="font-size:12px; color:var(--text-dim);">${curCount} units × LKR ${Number(curRate).toFixed(2)}</span>
          </div>
          <div style="text-align:right;">
            <div style="font-size:22px; font-weight:900; color:var(--text-main);">${fmt(subtotal)}</div>
            <button type="button" class="btn btn-primary" id="btnCalcAddToBill" style="margin-top:6px; padding:10px 22px; font-weight:800; border-radius:10px; box-shadow:0 4px 12px rgba(99,102,241,0.35);">
              ➕ Add to Bill
            </button>
          </div>
        </div>
      </div>
    `;

    m.querySelectorAll('.calc-preset-card').forEach(btn => {
      btn.onclick = () => {
        const pid = btn.dataset.pid;
        const found = presets.find(p => p.id === pid);
        if (found) {
          curPreset = found;
          curRate = found.rate;
          renderCalcBody();
        }
      };
    });

    m.querySelectorAll('.btn-step-pill').forEach(btn => {
      btn.onclick = () => {
        curCount += +btn.dataset.n;
        renderCalcBody();
      };
    });

    m.querySelectorAll('.btn-step-set').forEach(btn => {
      btn.onclick = () => {
        curCount = +btn.dataset.s;
        renderCalcBody();
      };
    });

    const cntInput = m.querySelector('#calcCountInput');
    if (cntInput) {
      cntInput.onchange = () => {
        curCount = Math.max(1, parseInt(cntInput.value) || 1);
        renderCalcBody();
      };
    }

    const rtInput = m.querySelector('#calcRateInput');
    if (rtInput) {
      rtInput.onchange = () => {
        curRate = Math.max(0, parseFloat(rtInput.value) || 0);
        renderCalcBody();
      };
    }

    const addBtn = m.querySelector('#btnCalcAddToBill');
    if (addBtn) {
      addBtn.onclick = () => {
        onAdd({
          name: curPreset.name,
          price: curRate,
          qty: curCount,
          isService: true
        });
        m.close();
        toast(`Added "${curPreset.name}" (${curCount} pcs) to bill!`);
      };
    }
  };

  m.querySelectorAll('.btn-calc-tab').forEach(btn => {
    btn.onclick = () => {
      m.querySelectorAll('.btn-calc-tab').forEach(b => {
        b.classList.remove('active', 'btn-primary');
        b.classList.add('btn-ghost');
      });
      btn.classList.add('active', 'btn-primary');
      btn.classList.remove('btn-ghost');
      activeTab = btn.dataset.tab;
      renderCalcBody();
    };
  });

  renderCalcBody();
  m.querySelectorAll('[data-x]').forEach(el => el.onclick = m.close);
}

/* ==========================================================================
   QUICK CUSTOM ITEM MODAL (OPEN PRICE ITEM - F3)
   ========================================================================== */
function showQuickCustomItemModal(onAdd) {
  const m = modal(`
    <div class="modal-header">
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="font-size:22px;">⚡</span>
        <div>
          <h3 class="modal-title" style="margin:0;">Quick Custom Item / Open Price</h3>
          <small class="muted">Add unique keytags, toys, or custom services directly to bill (F3)</small>
        </div>
      </div>
      <button class="modal-close-x" data-x>✕</button>
    </div>
    <form id="quickCustomForm" class="auth-form" style="gap:14px; margin-top:10px;">
      <!-- Quick Bookshop Presets -->
      <div>
        <span class="field-label" style="display:block; margin-bottom:6px;">1-Click Bookshop Presets</span>
        <div style="display:flex; flex-wrap:wrap; gap:6px;">
          <button type="button" class="quick-preset-pill" data-pname="Cartoon Rubber Keytag" data-pprice="150">🏷️ Rubber Keytag (150)</button>
          <button type="button" class="quick-preset-pill" data-pname="Small Toy Car / Figurine" data-pprice="250">🧸 Small Toy (250)</button>
          <button type="button" class="quick-preset-pill" data-pname="ID Card Lamination" data-pprice="80">🪪 ID Lamination (80)</button>
          <button type="button" class="quick-preset-pill" data-pname="WhatsApp / Phone Print" data-pprice="25">📱 WhatsApp Print (25)</button>
          <button type="button" class="quick-preset-pill" data-pname="Scan Document to USB / Email" data-pprice="50">💾 Scan to USB (50)</button>
          <button type="button" class="quick-preset-pill" data-pname="Gift Wrapping Service" data-pprice="100">🎁 Gift Wrap (100)</button>
        </div>
      </div>

      <label class="field-wrap">
        <span class="field-label">Item / Service Description *</span>
        <input id="qcName" placeholder="e.g. Spider-Man Keychain, Custom Toy, Laminate Poster" required autofocus autocomplete="off">
      </label>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
        <label class="field-wrap">
          <span class="field-label">Price (LKR) *</span>
          <input id="qcPrice" type="number" min="0" step="0.5" placeholder="0.00" required>
        </label>
        <label class="field-wrap">
          <span class="field-label">Quantity *</span>
          <input id="qcQty" type="number" min="1" step="1" value="1" required>
        </label>
      </div>
      <div class="modal-actions" style="margin-top:8px;">
        <button type="button" class="btn btn-ghost" data-x>${t('cancel')}</button>
        <button type="submit" class="btn btn-primary" style="padding:10px 24px; font-weight:800;">➕ Add to Bill</button>
      </div>
    </form>
  `);
  m.querySelectorAll('[data-x]').forEach(el => el.onclick = m.close);
  m.querySelectorAll('.quick-preset-pill').forEach(btn => {
    btn.onclick = () => {
      m.querySelector('#qcName').value = btn.dataset.pname;
      m.querySelector('#qcPrice').value = btn.dataset.pprice;
      m.querySelector('#qcQty').focus();
    };
  });
  m.querySelector('form').onsubmit = e => {
    e.preventDefault();
    const name = m.querySelector('#qcName').value.trim();
    const price = Math.max(0, parseFloat(m.querySelector('#qcPrice').value) || 0);
    const qty = Math.max(1, parseInt(m.querySelector('#qcQty').value) || 1);
    if (!name) return toast('Please enter an item description', 1);
    onAdd({
      name,
      price,
      qty,
      isService: true
    });
    m.close();
    toast(`Added "${name}" to bill`);
  };
}

/* ==========================================================================
   BARCODE LABELS GENERATOR FOR STICKERS & LABELS
   ========================================================================== */
function showBarcodeLabelsModal() {
  const products = items.filter(i => !i.IsService);
  if (!products.length) return toast('No physical products available for barcode labels', 1);

  let selectedId = products[0].Id;
  let labelQty = 12;

  const m = modal(`
    <div class="modal-header" style="border-bottom:1px solid var(--border); padding-bottom:12px;">
      <div style="display:flex; align-items:center; gap:10px;">
        <span style="font-size:24px;">🏷️</span>
        <div>
          <h3 class="modal-title" style="margin:0;">Barcode Sticker Labels Generator</h3>
          <small class="muted">Generate and print price barcode stickers for keytags, toys & stationery</small>
        </div>
      </div>
      <button class="modal-close-x" data-x>✕</button>
    </div>

    <div style="display:grid; grid-template-columns: 2fr 1fr; gap:12px; margin:14px 0;">
      <label class="field-wrap">
        <span class="field-label">Select Product to Print Stickers</span>
        <select id="lblProduct">
          ${products.map(p => `<option value="${p.Id}" ${p.Id === selectedId ? 'selected' : ''}>${esc(p.Name)} (LKR ${p.Price.toFixed(2)}) · ${p.Barcode || 'No SKU'}</option>`).join('')}
        </select>
      </label>
      <label class="field-wrap">
        <span class="field-label">Number of Stickers</span>
        <input id="lblQty" type="number" min="1" max="100" value="${labelQty}">
      </label>
    </div>

    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
      <b style="font-size:13px;">Sticker Sheet Live Preview</b>
      <button type="button" class="btn btn-primary btn-sm" id="btnPrintLabels" style="display:flex; align-items:center; gap:6px;">
        <span>🖨️ Print Labels</span>
      </button>
    </div>

    <div id="labelsPreviewWrap" class="labels-sheet-preview" style="max-height:360px; overflow-y:auto; background:var(--bg-card); border:1px solid var(--border); padding:16px; border-radius:12px; display:grid; grid-template-columns:repeat(auto-fill, minmax(140px, 1fr)); gap:10px;">
    </div>
  `, true);

  const drawPreview = () => {
    const it = products.find(p => p.Id === +m.querySelector('#lblProduct').value);
    const count = Math.min(100, Math.max(1, parseInt(m.querySelector('#lblQty').value) || 12));
    if (!it) return;

    const bc = it.Barcode || ('SKU-' + String(it.Id).padStart(6, '0'));
    const stickersHtml = Array.from({ length: count }).map(() => `
      <div class="barcode-sticker" style="background:#ffffff; color:#000000; border:1px dashed #cccccc; padding:8px 6px; border-radius:6px; text-align:center; font-family:sans-serif; box-shadow:0 1px 3px rgba(0,0,0,0.06);">
        <div style="font-size:8px; font-weight:800; text-transform:uppercase; letter-spacing:0.5px; overflow:hidden; white-space:nowrap; text-overflow:ellipsis;">AMECTAR BOOKSHOP</div>
        <div style="font-size:9.5px; font-weight:700; margin:2px 0; overflow:hidden; white-space:nowrap; text-overflow:ellipsis;">${esc(it.Name)}</div>
        <div style="background:#000; height:24px; margin:3px 4px; display:flex; align-items:stretch; justify-content:center; gap:1.5px; padding:0 3px;">
          ${Array.from({ length: 22 }).map((_, idx) => `<span style="background:${(idx * 7 + bc.length) % 2 === 0 ? '#fff' : '#000'}; flex:${(idx % 3 === 0) ? '2' : '1'};"></span>`).join('')}
        </div>
        <div style="font-family:monospace; font-size:8px; letter-spacing:1px; font-weight:700;">*${esc(bc)}*</div>
        <div style="font-size:11px; font-weight:800; color:#000000; margin-top:2px;">LKR ${it.Price.toFixed(2)}</div>
      </div>
    `).join('');

    m.querySelector('#labelsPreviewWrap').innerHTML = stickersHtml;
  };

  m.querySelector('#lblProduct').onchange = drawPreview;
  m.querySelector('#lblQty').oninput = drawPreview;
  drawPreview();

  m.querySelector('#btnPrintLabels').onclick = () => {
    const previewContent = m.querySelector('#labelsPreviewWrap').innerHTML;
    const printWin = window.open('', '_blank', 'width=800,height=600');
    if (!printWin) return toast('Pop-up blocked. Please allow popups.', 1);
    printWin.document.write(`
      <html>
        <head>
          <title>Barcode Labels</title>
          <style>
            @page { size: auto; margin: 10mm; }
            body { margin: 0; font-family: sans-serif; background: #fff; color: #000; }
            .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8mm; }
            .barcode-sticker { border: 1px dashed #bbb; padding: 6px; border-radius: 4px; text-align: center; page-break-inside: avoid; }
          </style>
        </head>
        <body onload="window.print(); window.close();">
          <div class="grid">\${previewContent}</div>
        </body>
      </html>
    `);
    printWin.document.close();
  };

  m.querySelectorAll('[data-x]').forEach(el => el.onclick = m.close);
}

/* ==========================================================================
   VIEW 2: POS TERMINAL (RAPID KEYBOARD WORKFLOW & ENTERPRISE REGISTER)
   ========================================================================== */
async function vPos() {
  items = await call('items:list');
  try {
    cachedReceiptSettings = await call('settings:getReceipt');
  } catch {}

  posPaymentMethod = 'Cash';
  posBillDiscount = 0;

  let selectedTileIndex = 0;
  let isNavigatingGrid = false;

  const getSubtotal = () => Math.round(cart.reduce((s, l) => s + l.price * l.qty * (1 - (l.disc || 0) / 100), 0) * 100) / 100;
  const getDiscount = () => Math.max(0, parseFloat($('#posDiscount')?.value) || 0);
  const getTotal = () => Math.max(0, Math.round((getSubtotal() - getDiscount()) * 100) / 100);

  $('#view').innerHTML = `
    <div class="pos-layout">
      <!-- Left: Fast Catalog & Search Section -->
      <section class="pos-catalog">
        <!-- Search Bar with F1 Focus Hint and Print / Custom Shortcuts -->
        <div class="pos-search-bar" style="display:flex; gap:10px; align-items:center;">
          <div class="pos-search-bar-wrap" style="flex:1;">
            <svg class="pos-search-icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input id="q" placeholder="${t('searchPos')}" autofocus autocomplete="off">
            <span class="pos-shortcut-hint-pill">F1</span>
          </div>

          <button type="button" class="btn btn-primary" id="btnPosCalc" title="Photocopy, Printing, Lamination & Typing Calculator (F2)" style="display:flex; align-items:center; gap:6px; font-weight:800; white-space:nowrap; padding:10px 16px; border-radius:12px; background:linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); border:none; box-shadow:0 4px 12px rgba(99,102,241,0.35);">
            <span>🖨️ Copy / Print (F2)</span>
          </button>
          <button type="button" class="btn btn-secondary" id="btnPosCustom" title="Quick Custom Item (F3)" style="display:flex; align-items:center; gap:6px; font-weight:700; white-space:nowrap; padding:10px 14px; border-radius:12px;">
            <span>⚡ Custom (F3)</span>
          </button>
        </div>

        <!-- Category Chips -->
        <div id="cats" class="category-chips"></div>

        <!-- Product Grid with Arrow Key Navigation -->
        <div id="grid" class="pos-grid"></div>
      </section>

      <!-- Right: Enterprise Cart & Cash Register Panel -->
      <aside class="pos-cart-panel">
        <div class="cart-header">
          <div class="cart-title-wrap">
            <h3 class="cart-title">${t('currentBill')}</h3>
            <span class="cart-count-pill" id="cartCountPill">0 items</span>
          </div>

          <div class="cart-header-actions">
            <!-- Print Receipt ON/OFF Toggle -->
            <button type="button" class="print-toggle-btn ${posAutoPrint ? 'active' : ''}" id="posPrintToggle" title="Toggle Auto Receipt Printing (F8)">
              <span>🖨️</span>
              <span id="posPrintToggleText">${posAutoPrint ? t('printOn') : t('printOff')}</span>
            </button>

            <!-- Clear Bill -->
            <button id="clr" class="cart-clear-btn" title="Clear Bill">${t('clearBill')}</button>
          </div>
        </div>

        <!-- Cart Lines Stream -->
        <div id="lines" class="cart-lines"></div>

        <!-- Checkout Summary -->
        <div class="cart-summary">
          <!-- Subtotal -->
          <div class="cart-sum-row">
            <span class="muted">${t('subtotal')}</span>
            <b id="posSubtot" style="font-size:16px;">LKR 0.00</b>
          </div>

          <!-- Bill Discount Input Field -->
          <div class="discount-field-row">
            <div style="display:flex; flex-direction:column;">
              <span style="font-size:13px; font-weight:700;">${t('billDiscount')}</span>
              <small class="muted" style="font-size:10.5px;">Press Shift to Focus · Enter moves to Cash ↵</small>
            </div>
            <input id="posDiscount" type="number" min="0" step="1" value="0" placeholder="0">
          </div>

          <!-- Massive High-Contrast Grand Total Banner -->
          <div class="total-payable-banner">
            <div>
              <div class="total-banner-label">${t('total')}</div>
              <small style="font-size:10px; color:#a5b4fc;">Net Payable Amount</small>
            </div>
            <div class="total-banner-amount" id="tot">LKR 0.00</div>
          </div>

          <!-- Payment Method Selector: Cash vs Card -->
          <div style="display:flex; flex-direction:column; gap:6px;">
            <div class="pay-method-toggle">
              <button type="button" class="pay-method-btn active" data-meth="Cash">
                💵 ${t('cash')}
              </button>
              <button type="button" class="pay-method-btn" data-meth="Card">
                💳 ${t('card')}
              </button>
            </div>
          </div>

          <!-- Cash Received Inputs (Only visible in Cash mode) -->
          <div id="cashFieldsWrap" style="display:flex; flex-direction:column; gap:8px;">
            <div class="cash-received-box">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                <span class="field-label" style="font-weight:800;">${t('cashReceived')} (LKR) *</span>
                <small class="muted" style="font-size:11px;">Press Enter to Complete ↵</small>
              </div>
              <input id="paid" type="text" inputmode="decimal" placeholder="0.00" autocomplete="off">
            </div>

            <div class="quick-cash-row">
              <button type="button" class="quick-cash-btn" data-add="500">+500</button>
              <button type="button" class="quick-cash-btn" data-add="1000">+1,000</button>
              <button type="button" class="quick-cash-btn" data-add="5000">+5,000</button>
              <button type="button" class="quick-cash-btn" id="qcExact">${t('exact')}</button>
            </div>

            <!-- Dynamic Balance / Change Status -->
            <div id="balanceBadge" class="balance-status-badge exact-or-change">
              <span>${t('balance')}</span>
              <b id="bal" style="font-size:16px;">LKR 0.00</b>
            </div>
          </div>

          <!-- Card Ready Notification (Only visible in Card mode) -->
          <div id="cardFieldWrap" class="pay-card-indicator hide">
            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" fill="none"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
            <div>
              <div style="font-weight:800;">${t('cardReady')}</div>
              <small style="font-size:10.5px; opacity:0.85;">Charge exact total on card terminal and press Complete Sale.</small>
            </div>
          </div>

          <!-- Complete Sale Button -->
          <button id="pay" class="btn btn-primary btn-lg btn-block" style="font-size:16px; font-weight:800; padding:14px; border-radius:12px;">
            ✓ ${t('checkout')} (Enter)
          </button>
        </div>
      </aside>
    </div>
  `;

  const getVisibleItems = () => {
    const q = ($('#q')?.value || '').toLowerCase().trim();
    return items.filter(i => (cat === 'All' || i.Category === cat) && (i.Name + ' ' + (i.Barcode || '') + ' ' + i.Category).toLowerCase().includes(q));
  };

  const updateTileFocus = () => {
    const tiles = document.querySelectorAll('.item-tile');
    tiles.forEach((el, idx) => {
      if (isNavigatingGrid && idx === selectedTileIndex) {
        el.classList.add('active-keyboard-tile');
        el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      } else {
        el.classList.remove('active-keyboard-tile');
      }
    });
  };

  const drawGrid = () => {
    const cats = ['All', ...new Set(items.map(i => i.Category).filter(Boolean))];
    $('#cats').innerHTML = cats.map(c => `
      <button class="cat-chip ${c === cat ? 'on' : ''}" data-c="${esc(c)}">
        <span>${c === 'All' ? '🌟' : catIcon(c)}</span> ${c === 'All' ? t('all') : esc(c)}
      </button>
    `).join('');

    const visible = getVisibleItems();
    if (selectedTileIndex >= visible.length) selectedTileIndex = Math.max(0, visible.length - 1);

    $('#grid').innerHTML = visible.map((i, idx) => {
      const isServ = !!(i.IsService || i.ItemType === 'Service');
      return `
      <div class="item-tile ${!isServ && i.Stock <= 0 ? 'out-of-stock' : ''} ${isNavigatingGrid && idx === selectedTileIndex ? 'active-keyboard-tile' : ''}" 
           style="--cat-hue:${hue(i.Category)}" 
           data-id="${i.Id}" 
           data-idx="${idx}">
        <span class="tile-enter-badge">↵ Add</span>

        <div class="tile-img-box">
          ${i.ImageUrl ? `
            <img src="${esc(i.ImageUrl)}" class="tile-food-img" alt="${esc(i.Name)}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="tile-img-fallback hide" style="background:hsl(${hue(i.Category)}, 70%, 93%); color:hsl(${hue(i.Category)}, 80%, 40%);">
              <span style="font-size:26px;">${catIcon(i.Category)}</span>
            </div>
          ` : `
            <div class="tile-img-fallback" style="background:hsl(${hue(i.Category)}, 70%, 93%); color:hsl(${hue(i.Category)}, 80%, 40%);">
              <span style="font-size:26px;">${catIcon(i.Category)}</span>
            </div>
          `}
        </div>

        <div>
          <div class="tile-name">${esc(i.Name)}</div>
          <div class="tile-cat-badge">${catIcon(i.Category)} ${esc(i.Category || 'General')}</div>
        </div>
        <div class="tile-bottom">
          <span class="tile-price">${fmt(i.Price)}</span>
          ${isServ 
            ? `<span class="tile-stock" style="background:rgba(99,102,241,0.12); color:#4f46e5; font-weight:800; border:1px solid rgba(99,102,241,0.25);">⚙️ Service</span>`
            : `<span class="tile-stock ${i.Stock <= 5 ? 'low' : ''}">${t('stock')}: ${i.Stock}</span>`
          }
        </div>
      </div>
    `;
    }).join('') || `
      <div class="muted" style="grid-column:1/-1; text-align:center; padding:40px;">
        No products or services found matching your search.
      </div>
    `;
  };

  const calcBal = () => {
    const tot = getTotal();
    const paidInput = $('#paid');
    const badge = $('#balanceBadge');

    if (posPaymentMethod === 'Card') {
      paidInput.value = tot.toFixed(2);
      $('#bal').textContent = 'LKR 0.00';
      badge.className = 'balance-status-badge exact-or-change';
      return;
    }

    const p = parseFloat(paidInput.value);
    if (isNaN(p) || !paidInput.value.trim()) {
      $('#bal').textContent = '—';
      badge.className = 'balance-status-badge exact-or-change';
    } else if (p >= tot) {
      $('#bal').textContent = fmt(p - tot);
      badge.className = 'balance-status-badge exact-or-change';
    } else {
      $('#bal').textContent = t('shortBy') + ' ' + fmt(tot - p);
      badge.className = 'balance-status-badge short';
    }
  };

  const drawCart = (lastAddedId = null) => {
    const sub = getSubtotal();
    const tot = getTotal();

    $('#cartCountPill').textContent = `${cart.length} items (${cart.reduce((s, l) => s + l.qty, 0)} pcs)`;

    $('#lines').innerHTML = cart.map((l, i) => `
      <div class="cart-line-card ${l.id === lastAddedId ? 'newly-added' : ''}" data-idx="${i}">
        <div class="cart-line-top">
          <div>
            <div class="cart-line-name">${esc(l.name)}</div>
            <div class="cart-line-meta">@ LKR ${l.price.toFixed(2)} ${l.isService ? '· <span style="color:#6366f1; font-weight:700;">⚙️ Service</span>' : `· In Stock: ${l.stock}`}</div>
          </div>
          <button type="button" class="cart-line-del" data-rm="${i}" title="Remove item">✕</button>
        </div>

        <div class="cart-line-controls">
          <div class="qty-stepper">
            <button type="button" class="qty-step-btn" data-step="-1" data-i="${i}">−</button>
            <input type="number" min="1" max="${l.isService ? 99999 : l.stock}" value="${l.qty}" class="qty-input-box" data-i="${i}" data-f="qty">
            <button type="button" class="qty-step-btn" data-step="1" data-i="${i}">+</button>
          </div>

          <div class="cart-line-disc-wrap">
            <span>Disc %:</span>
            <input type="number" min="0" max="100" value="${l.disc || 0}" class="cart-line-disc-input" data-i="${i}" data-f="disc">
          </div>

          <div class="cart-line-total">LKR ${(l.price * l.qty * (1 - (l.disc || 0) / 100)).toFixed(2)}</div>
        </div>
      </div>
    `).join('') || `
      <div class="cart-empty-state">
        <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" fill="none"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>
        <span style="font-size:14px; font-weight:800;">Bill is currently empty</span>
        <small style="color:var(--text-muted);">Press F1 to search or use Arrow Keys to select items</small>
      </div>
    `;

    $('#posSubtot').textContent = fmt(sub);
    $('#tot').textContent = fmt(tot);
    calcBal();

    if (lastAddedId) {
      const addedEl = $('#lines .cart-line-card.newly-added');
      if (addedEl) addedEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  };

  const add = (id, customLine = null) => {
    if (customLine) {
      const servItem = items.find(i => i.IsService || i.ItemType === 'Service') || items[0] || { Id: 1 };
      cart.push({
        id: servItem.Id,
        name: customLine.name,
        price: +customLine.price,
        qty: customLine.qty || 1,
        disc: 0,
        stock: 99999,
        isService: true,
        customPrice: +customLine.price,
        customName: customLine.name
      });
      drawCart(servItem.Id);
      return;
    }

    const it = items.find(i => i.Id === id);
    if (!it) return;
    const isService = !!(it.IsService || it.ItemType === 'Service');
    const l = cart.find(c => c.id === id);
    if (!isService && (l ? l.qty : 0) + 1 > it.Stock) return toast(t('notEnough'), 1);

    if (l) {
      l.qty++;
    } else {
      cart.push({
        id,
        name: it.Name,
        price: +it.Price,
        qty: 1,
        disc: 0,
        stock: it.Stock,
        isService: isService
      });
    }
    drawCart(id);
  };

  const togglePrint = () => {
    posAutoPrint = !posAutoPrint;
    localStorage.setItem('kade_pos_autoprint', posAutoPrint ? '1' : '0');
    const btn = $('#posPrintToggle');
    const txt = $('#posPrintToggleText');
    if (btn && txt) {
      btn.className = `print-toggle-btn ${posAutoPrint ? 'active' : ''}`;
      txt.textContent = posAutoPrint ? t('printOn') : t('printOff');
    }
    toast(posAutoPrint ? 'Receipt Auto-Print Enabled' : 'Receipt Auto-Print Disabled');
  };

  $('#posPrintToggle').onclick = togglePrint;

  // Payment Method Switcher (Cash vs Card)
  document.querySelectorAll('.pay-method-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.pay-method-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      posPaymentMethod = btn.dataset.meth;
      if (posPaymentMethod === 'Card') {
        $('#cashFieldsWrap').classList.add('hide');
        $('#cardFieldWrap').classList.remove('hide');
      } else {
        $('#cashFieldsWrap').classList.remove('hide');
        $('#cardFieldWrap').classList.add('hide');
      }
      calcBal();
    };
  });

  // Filter numeric cash input
  $('#paid').oninput = e => {
    // Only allow numbers and decimal point
    e.target.value = e.target.value.replace(/[^0-9.]/g, '');
    const parts = e.target.value.split('.');
    if (parts.length > 2) e.target.value = parts[0] + '.' + parts.slice(1).join('');
    calcBal();
  };

  $('#posDiscount').oninput = () => {
    $('#tot').textContent = fmt(getTotal());
    calcBal();
  };

  const checkout = async () => {
    if (!cart.length) return toast(t('cartEmpty'), 1);
    const tot = getTotal();
    const paidInput = $('#paid');
    const rawPaid = paidInput.value.trim();

    if (posPaymentMethod === 'Cash') {
      const p = parseFloat(rawPaid);
      if (!rawPaid || isNaN(p) || p < tot) {
        paidInput.classList.remove('input-shake-error');
        void paidInput.offsetWidth;
        paidInput.classList.add('input-shake-error');
        paidInput.focus();
        paidInput.select();
        toast(t('cashRequiredAlert') + ` (LKR ${tot.toFixed(2)})`, 1);
        return;
      }
    }

    const paid = posPaymentMethod === 'Card' ? tot : parseFloat(rawPaid);
    const disc = getDiscount();

    try {
      const r = await call('sales:checkout', {
        lines: cart.map(l => ({
          id: l.id,
          qty: l.qty,
          disc: l.disc,
          customPrice: l.customPrice,
          customName: l.customName
        })),
        paid: isNaN(paid) ? tot : paid,
        paymentMethod: posPaymentMethod,
        billDiscount: disc
      });
      cart = [];
      receipt(r);
      vPos();
    } catch (e) {
      toast(e.message, 1);
    }
  };

  $('#q').oninput = () => {
    selectedTileIndex = 0;
    drawGrid();
  };

  $('#btnPosCalc').onclick = () => showPrintServiceCalculator(customLine => add(null, customLine));
  $('#btnPosCustom').onclick = () => showQuickCustomItemModal(customLine => add(null, customLine));

  $('#cats').onclick = e => {
    const b = e.target.closest('button');
    if (b) {
      cat = b.dataset.c;
      selectedTileIndex = 0;
      drawGrid();
    }
  };

  $('#grid').onclick = e => {
    const b = e.target.closest('.item-tile');
    if (b) add(+b.dataset.id);
  };

  // Cart event delegation (Steppers, quantity input, discount, deletion)
  $('#lines').onclick = e => {
    const stepBtn = e.target.closest('[data-step]');
    if (stepBtn) {
      const idx = +stepBtn.dataset.i;
      const step = +stepBtn.dataset.step;
      const l = cart[idx];
      if (l) {
        const nextQty = l.qty + step;
        if (nextQty <= 0) {
          cart.splice(idx, 1);
        } else if (l.isService || nextQty <= l.stock) {
          l.qty = nextQty;
        } else {
          toast(t('notEnough'), 1);
        }
        drawCart();
      }
      return;
    }

    const delBtn = e.target.closest('[data-rm]');
    if (delBtn) {
      cart.splice(+delBtn.dataset.rm, 1);
      drawCart();
    }
  };

  $('#lines').onchange = e => {
    const { i, f } = e.target.dataset;
    if (i == null) return;
    const l = cart[i];
    if (!l) return;
    const v = Math.max(f === 'qty' ? 1 : 0, parseFloat(e.target.value) || 0);
    if (f === 'qty') l.qty = l.isService ? Math.floor(v) : Math.min(Math.floor(v), l.stock);
    else l.disc = Math.min(v, 100);
    drawCart();
  };

  $('#pay').onclick = checkout;
  $('#clr').onclick = () => { cart = []; drawCart(); };

  document.querySelectorAll('.quick-cash-btn[data-add]').forEach(btn => {
    btn.onclick = () => {
      const addVal = +btn.dataset.add;
      const curr = parseFloat($('#paid').value) || 0;
      $('#paid').value = (curr + addVal).toFixed(2);
      calcBal();
    };
  });

  $('#qcExact').onclick = () => {
    $('#paid').value = getTotal().toFixed(2);
    calcBal();
  };

  // Keyboard Navigation Handler
  window.onkeydown = e => {
    if (tab !== 'pos' || $('.modal-backdrop')) return;

    // F1: Focus Search Input
    if (e.key === 'F1') {
      e.preventDefault();
      const qEl = $('#q');
      if (qEl) {
        qEl.focus();
        qEl.select();
        isNavigatingGrid = false;
        updateTileFocus();
      }
      return;
    }

    // F2: Copy & Print Calculator Modal
    if (e.key === 'F2') {
      e.preventDefault();
      showPrintServiceCalculator(customLine => add(null, customLine));
      return;
    }

    // F3: Quick Custom Item Modal
    if (e.key === 'F3') {
      e.preventDefault();
      showQuickCustomItemModal(customLine => add(null, customLine));
      return;
    }

    // F8: Toggle Print
    if (e.key === 'F8') {
      e.preventDefault();
      togglePrint();
      return;
    }

    // Shift Key: Advance from item selection directly to Bill Discount
    if (e.key === 'Shift') {
      if (cart.length > 0) {
        e.preventDefault();
        isNavigatingGrid = false;
        updateTileFocus();
        const discEl = $('#posDiscount');
        if (discEl) {
          discEl.focus();
          discEl.select();
        }
      } else {
        toast(t('cartEmpty'), 1);
      }
      return;
    }

    // If focus is in Cash Received: Enter attempts checkout
    if (document.activeElement === $('#paid')) {
      if (e.key === 'Enter') {
        e.preventDefault();
        checkout();
        return;
      }
    }

    // If focus is in Bill Discount: Enter moves to Cash Received
    if (document.activeElement === $('#posDiscount')) {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (posPaymentMethod === 'Card') {
          checkout();
        } else {
          const paidEl = $('#paid');
          if (paidEl) {
            paidEl.focus();
            paidEl.select();
          }
        }
        return;
      }
    }

    // If focus is in Search Box:
    if (document.activeElement === $('#q')) {
      const qVal = $('#q').value.trim();

      if (e.key === 'Enter') {
        e.preventDefault();
        // 1. Exact barcode match
        const exactBarcode = items.find(it => it.Barcode && it.Barcode === qVal);
        if (exactBarcode) {
          add(exactBarcode.Id);
          $('#q').value = '';
          drawGrid();
          return;
        }

        // 2. First matching item
        const visible = getVisibleItems();
        if (qVal && visible.length) {
          add(visible[0].Id);
          $('#q').value = '';
          drawGrid();
          return;
        }

        // 3. Search is empty -> Advance directly to Bill Discount
        if (!qVal) {
          if (cart.length > 0) {
            const discEl = $('#posDiscount');
            if (discEl) {
              discEl.focus();
              discEl.select();
            }
          } else {
            toast(t('cartEmpty'), 1);
          }
          return;
        }
      }

      // Arrow Down/Right moves focus into products grid
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        const visible = getVisibleItems();
        if (visible.length) {
          e.preventDefault();
          $('#q').blur();
          isNavigatingGrid = true;
          selectedTileIndex = 0;
          updateTileFocus();
        }
        return;
      }
    }

    // If navigating products grid with Arrow Keys:
    if (isNavigatingGrid && !['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      const visible = getVisibleItems();
      if (!visible.length) return;

      const gridEl = $('#grid');
      const cols = Math.max(1, Math.floor((gridEl?.clientWidth || 600) / 190)) || 3;

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        selectedTileIndex = Math.min(selectedTileIndex + 1, visible.length - 1);
        updateTileFocus();
        return;
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        selectedTileIndex = Math.max(selectedTileIndex - 1, 0);
        updateTileFocus();
        return;
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedTileIndex = Math.min(selectedTileIndex + cols, visible.length - 1);
        updateTileFocus();
        return;
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (selectedTileIndex < cols) {
          isNavigatingGrid = false;
          const qEl = $('#q');
          if (qEl) { qEl.focus(); qEl.select(); }
          updateTileFocus();
        } else {
          selectedTileIndex = Math.max(selectedTileIndex - cols, 0);
          updateTileFocus();
        }
        return;
      }

      if (e.key === 'Enter') {
        e.preventDefault();
        const it = visible[selectedTileIndex];
        if (it) {
          add(it.Id);
        }
        return;
      }

      if (e.key === 'Escape') {
        isNavigatingGrid = false;
        const qEl = $('#q');
        if (qEl) qEl.focus();
        updateTileFocus();
        return;
      }
    }
  };

  drawGrid();
  drawCart();
}

function receipt(r) {
  const settings = r.shopSettings || cachedReceiptSettings || {};

  // Update dedicated thermal print container
  const printArea = document.getElementById('printableReceiptArea');
  if (printArea) {
    printArea.innerHTML = renderStandardReceiptHtml(r, settings);
  }

  // If Auto-Print is enabled, trigger printer immediately
  if (posAutoPrint) {
    window.print();
  }

  // Display receipt modal with live thermal layout
  const m = modal(`
    <div style="display:flex; flex-direction:column; align-items:center;">
      <div style="display:flex; justify-content:space-between; align-items:center; width:100%; margin-bottom:12px;">
        <h3 class="modal-title" style="margin:0;">🧾 ${t('checkout')} Completed</h3>
        <button class="modal-close-x" id="rc">✕</button>
      </div>

      <div style="width:100%; max-height:480px; overflow-y:auto; padding:4px;">
        ${renderStandardReceiptHtml(r, settings)}
      </div>

      <div class="modal-actions" style="margin-top:16px; width:100%;">
        <button class="btn btn-ghost" id="rcBtn">${t('close')} (Enter)</button>
        <button class="btn btn-primary" id="rpBtn">🖨️ ${t('print')}</button>
      </div>
    </div>
  `, true);

  const closeIt = () => {
    m.close();
    const qEl = $('#q');
    if (qEl) qEl.focus();
  };

  m.querySelector('#rc').onclick = closeIt;
  m.querySelector('#rcBtn').onclick = closeIt;
  m.querySelector('#rpBtn').onclick = () => window.print();

  const onKey = e => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      window.removeEventListener('keydown', onKey);
      closeIt();
    }
  };
  window.addEventListener('keydown', onKey);
}

/* ==========================================================================
   VIEW: RECEIPT CUSTOMIZATION & LIVE THERMAL PREVIEW
   ========================================================================== */
async function vReceiptSettings() {
  const s = await call('settings:getReceipt');
  cachedReceiptSettings = s;

  $('#view').innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
      <div>
        <h2 style="margin:0; font-size:22px; font-weight:800;">${t('receiptSettings')}</h2>
        <span class="muted small">Customize store branding, address, phone numbers & live thermal preview</span>
      </div>
      <div style="display:flex; gap:10px;">
        <button class="btn btn-ghost" id="btnTestPrint">🖨️ ${t('printTest')}</button>
        <button class="btn btn-primary" id="btnSaveReceipt">${t('saveReceiptSettings')}</button>
      </div>
    </div>

    <div class="receipt-editor-layout">
      <!-- Left: Configuration Form -->
      <div class="panel-card" style="display:flex; flex-direction:column; gap:14px;">
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px;">
          <label class="field-wrap">
            <span class="field-label">${t('shopName')}</span>
            <input id="rShopName" value="${esc(s.shopName)}">
          </label>
          <label class="field-wrap">
            <span class="field-label">${t('shopTagline')}</span>
            <input id="rShopTagline" value="${esc(s.shopTagline)}">
          </label>
          <label class="field-wrap" style="grid-column: 1 / -1;">
            <span class="field-label">${t('shopAddress')}</span>
            <input id="rShopAddress" value="${esc(s.shopAddress)}">
          </label>
          <label class="field-wrap">
            <span class="field-label">${t('shopPhone')}</span>
            <input id="rShopPhone" value="${esc(s.shopPhone)}">
          </label>
          <label class="field-wrap">
            <span class="field-label">${t('shopTaxNo')}</span>
            <input id="rShopTaxNo" value="${esc(s.shopTaxNo)}">
          </label>
          <label class="field-wrap">
            <span class="field-label">${t('receiptHeader')}</span>
            <input id="rReceiptHeader" value="${esc(s.receiptHeader)}">
          </label>
          <label class="field-wrap">
            <span class="field-label">${t('paperWidth')}</span>
            <select id="rPaperWidth">
              <option value="80mm" ${s.receiptPaperWidth === '80mm' ? 'selected' : ''}>80mm Standard Thermal Roll</option>
              <option value="58mm" ${s.receiptPaperWidth === '58mm' ? 'selected' : ''}>58mm Compact Thermal Roll</option>
            </select>
          </label>
          <label class="field-wrap" style="grid-column: 1 / -1;">
            <span class="field-label">${t('receiptFooter')}</span>
            <textarea id="rReceiptFooter" rows="2">${esc(s.receiptFooter)}</textarea>
          </label>
        </div>

        <label style="display:flex; align-items:center; gap:10px; cursor:pointer; padding:8px 0; border-top:1px solid var(--border-card);">
          <input type="checkbox" id="rAutoPrint" ${s.receiptAutoPrint === '1' ? 'checked' : ''} style="width:18px; height:18px;">
          <span style="font-weight:700; font-size:13px;">${t('autoPrintReceipt')}</span>
        </label>
      </div>

      <!-- Right: Live Simulated Thermal Receipt Preview -->
      <div style="display:flex; flex-direction:column; align-items:center; gap:12px;">
        <span class="small muted" style="font-weight:800; text-transform:uppercase; letter-spacing:0.5px;">${t('livePreview')}</span>
        <div id="liveThermalPreviewWrap"></div>
      </div>
    </div>
  `;

  const getFormCfg = () => ({
    shopName: $('#rShopName').value,
    shopTagline: $('#rShopTagline').value,
    shopAddress: $('#rShopAddress').value,
    shopPhone: $('#rShopPhone').value,
    shopTaxNo: $('#rShopTaxNo').value,
    receiptHeader: $('#rReceiptHeader').value,
    receiptFooter: $('#rReceiptFooter').value,
    receiptPaperWidth: $('#rPaperWidth').value,
    receiptAutoPrint: $('#rAutoPrint').checked ? '1' : '0'
  });

  const sampleReceiptData = {
    invoiceNo: 'INV-000042',
    createdAt: new Date().toISOString(),
    cashier: me?.fullName || 'Cashier User',
    lines: [
      { name: 'Atlas CR Book 120 Pgs', qty: 2, price: 260, disc: 0, total: 520 },
      { name: 'Photocopy A4 B/W (Double Sided)', qty: 30, price: 15, disc: 0, total: 450 },
      { name: 'Atlas Chooty Pen (Blue)', qty: 3, price: 40, disc: 0, total: 120 },
      { name: 'Cartoon Anime Rubber Keytag', qty: 1, price: 150, disc: 0, total: 150 }
    ],
    subtotal: 1240,
    discount: 40,
    total: 1200,
    paid: 1500,
    balance: 300,
    paymentMethod: 'Cash'
  };

  const updatePreview = () => {
    const cfg = getFormCfg();
    $('#liveThermalPreviewWrap').innerHTML = renderStandardReceiptHtml(sampleReceiptData, cfg);
  };

  updatePreview();

  $('#rShopName').oninput = updatePreview;
  $('#rShopTagline').oninput = updatePreview;
  $('#rShopAddress').oninput = updatePreview;
  $('#rShopPhone').oninput = updatePreview;
  $('#rShopTaxNo').oninput = updatePreview;
  $('#rReceiptHeader').oninput = updatePreview;
  $('#rReceiptFooter').oninput = updatePreview;
  $('#rPaperWidth').onchange = updatePreview;
  $('#rAutoPrint').onchange = updatePreview;

  $('#btnTestPrint').onclick = () => {
    const cfg = getFormCfg();
    const container = document.getElementById('printableReceiptArea');
    if (container) {
      container.innerHTML = renderStandardReceiptHtml(sampleReceiptData, cfg);
      window.print();
    }
  };

  $('#btnSaveReceipt').onclick = async () => {
    try {
      const cfg = getFormCfg();
      await call('settings:saveReceipt', cfg);
      cachedReceiptSettings = cfg;
      posAutoPrint = cfg.receiptAutoPrint === '1';
      localStorage.setItem('kade_pos_autoprint', posAutoPrint ? '1' : '0');
      toast(t('saved'));
    } catch (err) {
      toast(err.message, 1);
    }
  };
}

/* ==========================================================================
   VIEW: AUTOMATED HOURLY DATABASE BACKUP & DATA PROTECTION
   ========================================================================== */
async function vBackup() {
  const info = await call('backup:getInfo');

  function fmtBytes(bytes) {
    if (!bytes || bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  function fmtTime(isoStr) {
    if (!isoStr) return 'Never executed';
    const d = new Date(isoStr);
    if (isNaN(d.getTime())) return isoStr;
    const diffMin = Math.round((Date.now() - d.getTime()) / 60000);
    let rel = '';
    if (diffMin < 1) rel = 'Just now';
    else if (diffMin < 60) rel = `${diffMin}m ago`;
    else {
      const h = Math.floor(diffMin / 60);
      const m = diffMin % 60;
      rel = `${h}h ${m}m ago`;
    }
    return `${d.toLocaleDateString()} ${d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })} (${rel})`;
  }

  const hasToday = Boolean(info.todayFile);

  $('#view').innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; flex-wrap:wrap; gap:12px;">
      <div>
        <h2 style="margin:0; font-size:22px; font-weight:800;">${t('backupTitle')}</h2>
        <span class="muted small">${t('backupSub')}</span>
      </div>
      <div style="display:flex; gap:10px;">
        <button class="btn btn-ghost" id="btnOpenFolderHead">📂 ${t('openFolder')}</button>
        <button class="btn btn-primary" id="btnBackupNowHead">⚡ ${t('backupNow')}</button>
      </div>
    </div>

    <!-- Top KPI Stat Cards -->
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:14px; margin-bottom:20px;">
      <div class="panel-card" style="display:flex; flex-direction:column; gap:6px;">
        <span class="muted small" style="text-transform:uppercase; font-weight:800; letter-spacing:0.5px;">⏱️ Auto-Backup Schedule</span>
        <div style="display:flex; align-items:center; gap:8px;">
          <h3 style="margin:0; font-size:18px; font-weight:800;">Every 1 Hour</h3>
          <span class="pill ok" style="font-size:10px; font-weight:800;">ACTIVE</span>
        </div>
        <small class="muted">Runs automatically in background</small>
      </div>

      <div class="panel-card" style="display:flex; flex-direction:column; gap:6px;">
        <span class="muted small" style="text-transform:uppercase; font-weight:800; letter-spacing:0.5px;">📅 Retention Strategy</span>
        <div style="display:flex; align-items:center; gap:8px;">
          <h3 style="margin:0; font-size:18px; font-weight:800;">1 File Per Day</h3>
          <span class="pill info" style="font-size:10px; font-weight:800;">HOURLY UPDATE</span>
        </div>
        <small class="muted">Updated & overwritten every hour</small>
      </div>

      <div class="panel-card" style="display:flex; flex-direction:column; gap:6px;">
        <span class="muted small" style="text-transform:uppercase; font-weight:800; letter-spacing:0.5px;">🕒 Last Backup Time</span>
        <div style="display:flex; align-items:center; gap:8px;">
          <h3 style="margin:0; font-size:14px; font-weight:800; color:var(--text-main); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
            ${info.lastBackupTime ? fmtTime(info.lastBackupTime) : 'Pending first hourly run'}
          </h3>
        </div>
        <small class="muted">${info.lastBackupStatus === 'Success' ? '✓ Backup successful' : 'Status: ' + (info.lastBackupStatus || 'Ready')}</small>
      </div>

      <div class="panel-card" style="display:flex; flex-direction:column; gap:6px;">
        <span class="muted small" style="text-transform:uppercase; font-weight:800; letter-spacing:0.5px;">💾 Today's File Size</span>
        <div style="display:flex; align-items:center; gap:8px;">
          <h3 style="margin:0; font-size:18px; font-weight:800; color:var(--brand);">
            ${hasToday ? fmtBytes(info.todayFileSize) : '0 B'}
          </h3>
          <span class="pill ${hasToday ? 'ok' : 'warn'}" style="font-size:10px; font-weight:800;">
            ${hasToday ? (info.todayFileType || 'Active') : 'PENDING'}
          </span>
        </div>
        <small class="muted">${hasToday ? info.todayFile : 'Will generate on next cycle'}</small>
      </div>
    </div>

    <!-- Backup Storage Directory Selector -->
    <div class="panel-card" style="margin-bottom:20px;">
      <div class="panel-header-row" style="margin-bottom:12px;">
        <div>
          <h3 class="panel-heading" style="margin:0; font-size:16px;">📁 ${t('backupPathLabel')}</h3>
          <small class="muted">Select any local partition, Documents folder, or USB drive destination</small>
        </div>
        <div style="display:flex; gap:8px;">
          <button class="btn btn-sm btn-ghost" id="btnOpenFolderRow">📂 ${t('openFolder')}</button>
          <button class="btn btn-sm btn-primary" id="btnBrowseFolderRow">${t('browseFolder')}</button>
        </div>
      </div>

      <div style="display:flex; gap:10px; align-items:center; margin-bottom:14px; flex-wrap:wrap;">
        <div style="flex:1; min-width:280px;">
          <input id="txtBackupPath" value="${esc(info.backupPath)}" style="width:100%; font-family:monospace; font-size:13px; font-weight:600; padding:10px 14px; background:var(--bg-card-subtle); border:1px solid var(--border-card); border-radius:8px;">
        </div>
        <button class="btn btn-secondary btn-sm" id="btnSavePath">${t('savePath')}</button>
      </div>

      <div style="padding:12px 16px; border-radius:10px; background:radial-gradient(ellipse at top left, rgba(91,82,249,0.08), transparent 70%); border:1px solid rgba(91,82,249,0.2); font-size:12.5px; line-height:1.6;">
        <b>💡 How Hourly Database Protection Works:</b>
        <ul style="margin:6px 0 0; padding-left:18px; color:var(--text-muted);">
          <li><b>One File Per Day:</b> Rather than creating 24 separate files every single day and consuming storage space, the system saves exactly <b>one file per day</b> (e.g., <code>BookShop_Backup_${info.todayDate}.bak</code> or <code>.json</code>).</li>
          <li><b>Updated Hourly:</b> Every hour, the system updates this exact file with your latest inventory changes, sales receipts, and user activity.</li>
          <li><b>Dual-Safe Storage:</b> Performs both native SQL Server <code>.bak</code> backups and structured JSON database exports to ensure your data is 100% portable and protected across operating systems.</li>
        </ul>
      </div>
    </div>

    <!-- Today's Active Daily Backup Card -->
    <div class="panel-card" style="margin-bottom:20px; border-left:4px solid ${hasToday ? 'var(--accent-lime)' : 'var(--accent-amber)'};">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:12px;">
        <div style="display:flex; align-items:center; gap:10px;">
          <span style="font-size:24px;">${hasToday ? '🟢' : '🟡'}</span>
          <div>
            <h3 style="margin:0; font-size:16px; font-weight:800;">
              ${hasToday ? "Today's Active Daily Backup Is Up To Date" : "Today's First Backup Pending"}
            </h3>
            <span class="muted small">
              ${hasToday 
                ? `Last updated ${fmtTime(info.todayFileMtime)} · Overwritten/refreshed every hour` 
                : 'No backup recorded for today yet. It will run automatically or you can trigger it now.'}
            </span>
          </div>
        </div>
        <button class="btn btn-sm btn-primary" id="btnBackupNowCard">⚡ ${hasToday ? 'Update Backup Now' : 'Create First Backup Now'}</button>
      </div>

      ${hasToday ? `
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:12px; padding:12px; background:var(--bg-card-subtle); border-radius:8px;">
          <div>
            <span class="muted small" style="display:block;">${t('fileName')}</span>
            <code style="font-size:13px; font-weight:800; color:var(--brand);">${info.todayFile}</code>
          </div>
          <div>
            <span class="muted small" style="display:block;">${t('fileSize')}</span>
            <b style="font-size:13.5px;">${fmtBytes(info.todayFileSize)}</b>
          </div>
          <div>
            <span class="muted small" style="display:block;">${t('fileType')}</span>
            <span class="pill info" style="font-size:11px;">${info.todayFileType || 'SQL Server / JSON'}</span>
          </div>
          <div>
            <span class="muted small" style="display:block;">${t('lastUpdated')}</span>
            <b style="font-size:13px;">${fmtTime(info.todayFileMtime)}</b>
          </div>
        </div>
      ` : `
        <div style="padding:14px; text-align:center; color:var(--text-muted); font-size:13px;">
          Press <b>⚡ Create First Backup Now</b> to create today's backup file immediately.
        </div>
      `}
    </div>

    <!-- Past Daily Backups Archives -->
    <div class="panel-card">
      <div class="panel-header-row" style="margin-bottom:14px;">
        <div>
          <h3 class="panel-heading" style="margin:0; font-size:16px;">📚 ${t('historyBackups')}</h3>
          <small class="muted">Daily backup files found in the selected folder (${info.backupsList.length} files found)</small>
        </div>
        <button class="btn btn-sm btn-ghost" id="btnRefreshList">🔄 Refresh List</button>
      </div>

      ${info.backupsList.length ? `
        <div class="table-card" style="margin-top:10px;">
          <table>
            <thead>
              <tr>
                <th style="width:130px;">Date</th>
                <th>${t('fileName')}</th>
                <th style="width:100px;">${t('fileType')}</th>
                <th style="width:110px;">${t('fileSize')}</th>
                <th style="width:200px;">${t('lastUpdated')}</th>
                <th style="width:120px; text-align:right;">Action</th>
              </tr>
            </thead>
            <tbody>
              ${info.backupsList.map(b => `
                <tr>
                  <td><b style="font-size:13px;">${b.date}</b></td>
                  <td><code style="font-size:12.5px; font-weight:700;">${b.fileName}</code></td>
                  <td><span class="pill ${b.type === 'BAK' ? 'info' : 'ok'}" style="font-size:10px;">${b.type}</span></td>
                  <td>${fmtBytes(b.size)}</td>
                  <td><span class="small muted">${fmtTime(b.updatedAt)}</span></td>
                  <td style="text-align:right;">
                    <button class="btn btn-xs btn-ghost btn-open-item-folder" title="Open directory">📂 Reveal</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      ` : `
        <div style="padding:32px; text-align:center; color:var(--text-muted);">
          <div style="font-size:32px; margin-bottom:8px;">📂</div>
          <p style="margin:0; font-size:13.5px;">No historical backup files in this folder yet.</p>
          <small>Automated hourly backups will record daily archives here automatically.</small>
        </div>
      `}
    </div>
  `;

  // Event Listeners
  const triggerBackup = async (btn) => {
    try {
      if (btn) {
        btn.disabled = true;
        btn.innerHTML = '⏳ Backing up…';
      }
      toast(t('backingUp'));
      const res = await call('backup:run');
      if (res.success) {
        toast(t('backupSuccess'));
      } else {
        toast('Backup error: ' + (res.error || 'Unknown error'), 1);
      }
      await vBackup();
    } catch (e) {
      toast(e.message, 1);
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = '⚡ ' + t('backupNow');
      }
    }
  };

  const btnHead = $('#btnBackupNowHead');
  if (btnHead) btnHead.onclick = () => triggerBackup(btnHead);

  const btnCard = $('#btnBackupNowCard');
  if (btnCard) btnCard.onclick = () => triggerBackup(btnCard);

  const openFolderFn = async () => {
    try {
      await call('backup:openFolder');
    } catch (e) {
      toast(e.message, 1);
    }
  };

  const btnOpenHead = $('#btnOpenFolderHead');
  if (btnOpenHead) btnOpenHead.onclick = openFolderFn;

  const btnOpenRow = $('#btnOpenFolderRow');
  if (btnOpenRow) btnOpenRow.onclick = openFolderFn;

  document.querySelectorAll('.btn-open-item-folder').forEach(el => {
    el.onclick = openFolderFn;
  });

  const btnBrowse = $('#btnBrowseFolderRow');
  if (btnBrowse) {
    btnBrowse.onclick = async () => {
      try {
        const res = await call('backup:chooseDirectory');
        if (!res.canceled && res.path) {
          toast(`Backup folder path updated to: ${res.path}`);
          await vBackup();
        }
      } catch (e) {
        toast(e.message, 1);
      }
    };
  }

  const btnSave = $('#btnSavePath');
  if (btnSave) {
    btnSave.onclick = async () => {
      try {
        const p = $('#txtBackupPath').value;
        await call('backup:setPath', { path: p });
        toast('Backup directory updated successfully!');
        await vBackup();
      } catch (e) {
        toast(e.message, 1);
      }
    };
  }

  const btnRef = $('#btnRefreshList');
  if (btnRef) btnRef.onclick = () => vBackup();
}

/* ==========================================================================
   VIEW 3: INVENTORY (ITEMS - STATIONERY, BOOKS, TOYS & SERVICES)
   ========================================================================== */
async function vItems() {
  items = await call('items:list');
  $('#view').innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
      <div>
        <h2 style="margin:0; font-size:22px; font-weight:800;">${t('items')}</h2>
        <span class="muted small">${items.length} products & services listed</span>
      </div>
      <div style="display:flex; gap:10px; align-items:center;">
        <input id="s" placeholder="${t('searchItems')}" style="width:240px;">
        <button class="btn btn-secondary" id="btnSeedBookshop" title="Load or reset standard stationery, books, toys & service items">📚 Load Catalog</button>
        <button class="btn btn-secondary" id="btnBarcodeLabels" title="Print barcode stickers for toys, keytags & books">🏷️ Barcode Labels</button>
        <button class="btn btn-primary" id="add">${t('addItem')}</button>
      </div>
    </div>
    <div class="table-card" id="tbl"></div>
  `;

  const draw = () => {
    const q = $('#s').value.toLowerCase();
    const rows = items.filter(i => (i.Name + i.Category + (i.Barcode || '')).toLowerCase().includes(q));
    $('#tbl').innerHTML = `
      <table>
        <thead>
          <tr>
            <th>${t('name')}</th>
            <th>${t('category')}</th>
            <th>${t('price')}</th>
            <th>${t('stock')}</th>
            <th>${t('barcode')}</th>
            <th style="text-align:right;">Actions</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map(i => {
            const isServ = !!(i.IsService || i.ItemType === 'Service');
            return `
            <tr>
              <td>
                <div style="display:flex; align-items:center; gap:12px;">
                  <div class="table-cat-icon-box" style="width:36px; height:36px; border-radius:8px; display:flex; align-items:center; justify-content:center; background:hsl(${hue(i.Category)}, 70%, 93%); font-size:18px;">
                    ${catIcon(i.Category)}
                  </div>
                  <div>
                    <b>${esc(i.Name)}</b>
                    ${isServ ? `<small style="display:block; color:#6366f1; font-size:10px; font-weight:800;">⚙️ Print / Doc Service</small>` : ''}
                  </div>
                </div>
              </td>
              <td>
                <span class="pill info" style="display:inline-flex; align-items:center; gap:4px;">
                  <span>${catIcon(i.Category)}</span> ${esc(i.Category)}
                </span>
              </td>
              <td><b>${fmt(i.Price)}</b></td>
              <td>
                ${isServ 
                  ? `<span class="pill" style="background:rgba(99,102,241,0.15); color:#4f46e5; font-weight:800; border:1px solid rgba(99,102,241,0.25);">⚙️ Service</span>`
                  : `<span class="pill ${i.Stock <= 5 ? 'no' : 'ok'}">${i.Stock}</span>`
                }
              </td>
              <td><code class="muted">${esc(i.Barcode || '—')}</code></td>
              <td style="text-align:right;">
                <button class="btn btn-sm btn-ghost" data-a="e" data-id="${i.Id}">${t('edit')}</button>
                <button class="btn btn-sm btn-danger" data-a="d" data-id="${i.Id}">${t('del')}</button>
              </td>
            </tr>
          `;
          }).join('') || `<tr><td colspan="6" class="muted" style="text-align:center; padding:30px;">${t('noData')}</td></tr>`}
        </tbody>
      </table>
    `;
  };

  draw();
  $('#s').oninput = draw;
  $('#add').onclick = () => itemForm();
  $('#btnBarcodeLabels').onclick = () => showBarcodeLabelsModal();
  $('#btnSeedBookshop').onclick = async () => {
    if (confirm('Load standard Bookshop, Stationery, Toys & Print/Copy Service presets into inventory?')) {
      try {
        await call('items:seedBookshop');
        toast('Default bookshop catalog loaded successfully!');
        vItems();
      } catch (err) {
        toast(err.message, 1);
      }
    }
  };

  $('#tbl').onclick = async e => {
    const b = e.target.closest('button');
    if (!b) return;
    const id = +b.dataset.id;
    if (b.dataset.a === 'e') itemForm(items.find(i => i.Id === id));
    if (b.dataset.a === 'd' && confirm(t('confirmDel'))) {
      try {
        await call('items:delete', { id });
        toast(t('deleted'));
        vItems();
      } catch (x) {
        toast(x.message, 1);
      }
    }
  };
}

const itemForm = (it = {}) => {
  const BOOKSHOP_PRESET_CATS = [
    'Stationery', 'Books', 'Toys & Keytags', 'Photocopy & Print',
    'Lamination & Binding', 'Typing & Services', 'General'
  ];
  const cats = [...new Set([...BOOKSHOP_PRESET_CATS, ...items.map(i => i.Category).filter(Boolean)])];
  let isService = !!(it.IsService || it.ItemType === 'Service');

  const m = modal(`
    <div class="modal-header">
      <h3 class="modal-title">${it.Id ? t('editItem') : t('newItem')}</h3>
      <button class="modal-close-x" data-x>✕</button>
    </div>

    <form id="itemFormModal" class="auth-form" style="gap:12px;">
      <!-- Product vs Service Toggle -->
      <div style="background:var(--bg-input); padding:10px 14px; border-radius:12px; border:1px solid var(--border);">
        <span class="field-label" style="display:block; margin-bottom:8px; font-weight:800;">${t('itemType')} *</span>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
          <button type="button" class="btn btn-sm ${!isService ? 'btn-primary' : 'btn-ghost'} btn-type-toggle" data-type="product" style="font-weight:700;">
            📦 Physical Product (Track Stock)
          </button>
          <button type="button" class="btn btn-sm ${isService ? 'btn-primary' : 'btn-ghost'} btn-type-toggle" data-type="service" style="font-weight:700;">
            ⚙️ Service (No Stock Limit)
          </button>
        </div>
      </div>

      <label class="field-wrap">
        <span class="field-label">${t('name')} *</span>
        <input id="formItemName" value="${esc(it.Name || '')}" placeholder="e.g. Atlas CR Book 120 Pgs, A4 Double Side Copy, Anime Keytag" required autofocus autocomplete="off">
        <small class="muted" style="font-size:11px;">Typing will automatically suggest category, default price & SKU from bookshop catalog</small>
      </label>

      <!-- Auto-Matched Bookshop Preview Box -->
      <div id="imagePreviewContainer" class="auto-match-preview-card hide" style="background:var(--bg-input); border:1px solid var(--border); padding:10px 14px; border-radius:12px; display:flex; align-items:center; gap:12px;">
        <span id="previewCatIcon" style="font-size:28px;">📚</span>
        <div style="flex:1;">
          <span class="auto-match-badge" id="previewBadgeText" style="font-size:10px; font-weight:800; color:var(--brand); text-transform:uppercase;">✓ Auto-Matched Preset</span>
          <b id="previewFoodTitle" style="display:block; font-size:13px; margin:2px 0;">Product</b>
          <small class="muted" id="previewFoodSub" style="font-size:11px;">Bookshop & Print Catalog Match</small>
        </div>
      </div>

      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px;">
        <label class="field-wrap">
          <span class="field-label">${t('category')} *</span>
          <input id="formItemCategory" list="catDatalist" value="${esc(it.Category || 'Stationery')}" placeholder="Select or type category" required>
          <datalist id="catDatalist">
            ${cats.map(c => `<option value="${esc(c)}">`).join('')}
          </datalist>
        </label>

        <label class="field-wrap">
          <span class="field-label">${t('priceLkr')} *</span>
          <input id="formItemPrice" type="number" min="0" step="0.5" value="${it.Price != null ? it.Price : ''}" placeholder="0.00" required>
        </label>

        <label class="field-wrap" id="stockFieldWrap" style="${isService ? 'opacity:0.5; pointer-events:none;' : ''}">
          <span class="field-label">${t('stockQty')} ${isService ? '(Service: Unlimited)' : '*'}</span>
          <input id="formItemStock" type="number" min="0" step="1" value="${it.Stock != null ? it.Stock : 50}" placeholder="0" ${isService ? 'disabled' : 'required'}>
        </label>

        <label class="field-wrap">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="field-label">${t('barcode')}</span>
            <button type="button" class="btn btn-ghost btn-sm" id="btnGenSku" style="padding:0 6px; font-size:10px; color:var(--brand); font-weight:800;">⚡ Auto SKU</button>
          </div>
          <input id="formItemBarcode" value="${esc(it.Barcode || '')}" placeholder="ISBN / Barcode / SKU">
        </label>
      </div>

      <div class="modal-actions" style="margin-top:10px;">
        <button type="button" class="btn btn-ghost" data-x>${t('cancel')}</button>
        <button type="submit" class="btn btn-primary">${t('save')}</button>
      </div>
    </form>
  `, true);

  const nameInput = m.querySelector('#formItemName');
  const catInput = m.querySelector('#formItemCategory');
  const priceInput = m.querySelector('#formItemPrice');
  const stockInput = m.querySelector('#formItemStock');
  const barcodeInput = m.querySelector('#formItemBarcode');
  const stockWrap = m.querySelector('#stockFieldWrap');
  const previewBox = m.querySelector('#imagePreviewContainer');
  const previewIcon = m.querySelector('#previewCatIcon');
  const previewTitle = m.querySelector('#previewFoodTitle');

  // Toggle Product vs Service
  m.querySelectorAll('.btn-type-toggle').forEach(btn => {
    btn.onclick = () => {
      m.querySelectorAll('.btn-type-toggle').forEach(b => {
        b.classList.remove('btn-primary');
        b.classList.add('btn-ghost');
      });
      btn.classList.add('btn-primary');
      btn.classList.remove('btn-ghost');
      isService = btn.dataset.type === 'service';
      if (isService) {
        stockInput.disabled = true;
        stockInput.value = '0';
        stockWrap.style.opacity = '0.5';
        stockWrap.style.pointerEvents = 'none';
      } else {
        stockInput.disabled = false;
        if (+stockInput.value === 0) stockInput.value = '50';
        stockWrap.style.opacity = '1';
        stockWrap.style.pointerEvents = 'auto';
      }
    };
  });

  // Auto SKU generator for barcode-less items (keytags, toys, loose pens)
  m.querySelector('#btnGenSku').onclick = () => {
    const randomSku = 'BKP-' + Math.floor(100000 + Math.random() * 900000);
    barcodeInput.value = randomSku;
    toast(`Generated SKU: ${randomSku}`);
  };

  const onNameChange = () => {
    const val = nameInput.value.trim();
    if (!val) {
      previewBox.classList.add('hide');
      return;
    }

    if (typeof matchBookshopCatalogItem === 'function') {
      const match = matchBookshopCatalogItem(val);
      if (match) {
        previewIcon.textContent = catIcon(match.category);
        previewTitle.textContent = match.name;
        previewBox.classList.remove('hide');
        if (!catInput.value || catInput.value === 'Stationery') catInput.value = match.category;
        if (!priceInput.value) priceInput.value = match.defaultPrice;
        if (!barcodeInput.value && match.barcode) barcodeInput.value = match.barcode;
        if (match.isService && !isService) {
          const servBtn = m.querySelector('.btn-type-toggle[data-type="service"]');
          if (servBtn) servBtn.click();
        }
        return;
      }
    }
    previewBox.classList.add('hide');
  };

  nameInput.oninput = onNameChange;

  m.querySelectorAll('[data-x]').forEach(el => el.onclick = m.close);

  m.querySelector('#itemFormModal').onsubmit = async e => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const category = catInput.value.trim();
    const price = parseFloat(priceInput.value) || 0;
    const stock = isService ? 0 : (parseInt(stockInput.value) || 0);
    const barcode = barcodeInput.value.trim();

    try {
      await call('items:save', {
        id: it.Id,
        name,
        category,
        price,
        stock,
        barcode,
        isService: isService,
        itemType: isService ? 'Service' : 'Product'
      });
      m.close();
      toast(t('saved'));
      vItems();
    } catch (err) {
      toast(err.message, 1);
    }
  };
};

/* ==========================================================================
   VIEW 4: GRN RECEIVING (GOODS RECEIVED NOTE)
   ========================================================================== */
async function vGrn() {
  const grns = await call('grn:list');
  const totalReceived = grns.reduce((s, g) => s + Number(g.TotalCost || 0), 0);

  $('#view').innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
      <div>
        <h2 style="margin:0; font-size:22px; font-weight:800;">${t('grn')}</h2>
        <span class="muted small">Stationery, Books & Goods Inward Receipts</span>
      </div>
      <div style="display:flex; gap:10px;">
        <input id="grnSearch" placeholder="Search supplier or GRN #…" style="width:240px;">
        <button class="btn btn-primary" id="btnNewGrn">${t('newGrn')}</button>
      </div>
    </div>

    <div class="top-stats-row" style="margin-bottom:20px;">
      <div class="fin-stat-card">
        <div class="stat-text-col">
          <span class="stat-label-title">Total GRN Receipts</span>
          <div class="stat-main-number purple">${grns.length}</div>
          <span class="stat-trend-sub">Completed inward shipments</span>
        </div>
      </div>
      <div class="fin-stat-card">
        <div class="stat-text-col">
          <span class="stat-label-title">Total Purchases Value</span>
          <div class="stat-main-number green">${fmt(totalReceived)}</div>
          <span class="stat-trend-sub">Inventory purchases recorded</span>
        </div>
      </div>
    </div>

    <div class="table-card" id="grnTbl"></div>
  `;

  const drawGrnTable = () => {
    const q = ($('#grnSearch').value || '').toLowerCase();
    const rows = grns.filter(g => (g.GrnNo + g.Supplier + (g.InvoiceRef || '')).toLowerCase().includes(q));

    $('#grnTbl').innerHTML = `
      <table>
        <thead>
          <tr>
            <th>${t('grnNo')}</th>
            <th>${t('supplier')}</th>
            <th>${t('invoiceRef')}</th>
            <th>${t('totalCost')}</th>
            <th>${t('itemsCount')}</th>
            <th>${t('receivedBy')}</th>
            <th>${t('createdAt')}</th>
            <th style="text-align:right;">Action</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map(g => `
            <tr>
              <td><b>${esc(g.GrnNo)}</b></td>
              <td><span class="pill info">${esc(g.Supplier)}</span></td>
              <td><code class="muted">${esc(g.InvoiceRef || '—')}</code></td>
              <td><b>${fmt(g.TotalCost)}</b></td>
              <td>${g.ItemCount} items (${g.TotalQty} units)</td>
              <td><small class="muted">${esc(g.ReceivedBy)}</small></td>
              <td><small class="muted">${fd(g.CreatedAt)}</small></td>
              <td style="text-align:right;">
                <button class="btn btn-sm btn-ghost" data-view="${g.Id}">${t('viewGrn')}</button>
              </td>
            </tr>
          `).join('') || `<tr><td colspan="8" class="muted" style="text-align:center; padding:30px;">${t('noData')}</td></tr>`}
        </tbody>
      </table>
    `;
  };

  drawGrnTable();
  $('#grnSearch').oninput = drawGrnTable;
  $('#btnNewGrn').onclick = () => showNewGrnModal();
  $('#grnTbl').onclick = async e => {
    const b = e.target.closest('[data-view]');
    if (!b) return;
    showGrnDetailsModal(+b.dataset.view);
  };
}

async function showGrnDetailsModal(grnId) {
  try {
    const { grn, items } = await call('grn:get', { id: grnId });
    modal(`
      <div class="modal-header">
        <div>
          <h3 class="modal-title">${esc(grn.GrnNo)}</h3>
          <small class="muted">${esc(grn.Supplier)} · ${fd(grn.CreatedAt)}</small>
        </div>
        <button class="modal-close-x" data-x>✕</button>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; font-size:12.5px; margin: 10px 0;">
        <div><b>${t('supplier')}:</b> ${esc(grn.Supplier)}</div>
        <div><b>${t('invoiceRef')}:</b> ${esc(grn.InvoiceRef || '—')}</div>
        <div><b>${t('receivedBy')}:</b> ${esc(grn.ReceivedBy)}</div>
        <div><b>${t('totalCost')}:</b> <span style="color:var(--brand); font-weight:800;">${fmt(grn.TotalCost)}</span></div>
        ${grn.Notes ? `<div style="grid-column:1/-1;"><b>${t('notes')}:</b> ${esc(grn.Notes)}</div>` : ''}
      </div>

      <table style="width:100%; border:1px solid var(--border-card); border-radius:12px; margin-top:8px;">
        <thead>
          <tr>
            <th>${t('item')}</th>
            <th>Qty</th>
            <th>${t('unitCost')}</th>
            <th>${t('batchNo')}</th>
            <th>${t('expiryDate')}</th>
            <th style="text-align:right;">Total</th>
          </tr>
        </thead>
        <tbody>
          ${items.map(it => `
            <tr>
              <td><b>${esc(it.ItemName)}</b></td>
              <td>${it.Qty}</td>
              <td>${fmt(it.UnitCost)}</td>
              <td><code>${esc(it.BatchNo || '—')}</code></td>
              <td><small>${esc(it.ExpiryDate || '—')}</small></td>
              <td style="text-align:right;"><b>${fmt(it.LineTotal)}</b></td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <div class="modal-actions" style="margin-top:16px;">
        <button class="btn btn-ghost" data-x>${t('close')}</button>
        <button class="btn btn-primary" onclick="window.print()">${t('print')}</button>
      </div>
    `, true).querySelectorAll('[data-x]').forEach(el => el.onclick = () => el.closest('.modal-backdrop').remove());
  } catch (err) {
    toast(err.message, 1);
  }
}

async function showNewGrnModal() {
  const catalog = await call('items:list');
  if (!catalog.length) return toast('Please add products to inventory before receiving GRN', 1);

  const categories = ['All', ...new Set(catalog.map(c => c.Category).filter(Boolean))];
  const pad = n => String(n).padStart(2, '0');
  const d = new Date();
  const defaultGrnNo = `GRN-${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}-${Math.floor(100 + Math.random()*900)}`;

  let rows = [];
  // Preload first item
  rows.push({
    itemId: catalog[0].Id,
    name: catalog[0].Name,
    category: catalog[0].Category,
    currentStock: catalog[0].Stock,
    qty: 10,
    unitCost: Math.round(catalog[0].Price * 0.75),
    batchNo: `BCH-${d.getFullYear()}${pad(d.getMonth()+1)}-01`,
    expiryDate: ''
  });

  const m = modal(`
    <div class="modal-header">
      <div>
        <h3 class="modal-title">${t('newGrn')}</h3>
        <small class="muted">Receive stock for Stationery, Books, Toys & inventory categories</small>
      </div>
      <button class="modal-close-x" data-x>✕</button>
    </div>

    <form id="grnForm" class="auth-form" style="gap:14px;">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
        <label class="field-wrap">
          <span class="field-label">${t('grnNo')}</span>
          <input name="grnNo" value="${defaultGrnNo}" required>
        </label>
        <label class="field-wrap">
          <span class="field-label">${t('supplier')}</span>
          <input name="supplier" placeholder="e.g. Atlas Axillia / Richard Trading / Sarasavi Publishers" required>
        </label>
        <label class="field-wrap">
          <span class="field-label">${t('invoiceRef')}</span>
          <input name="invoiceRef" placeholder="e.g. INV-99201">
        </label>
        <label class="field-wrap">
          <span class="field-label">${t('notes')}</span>
          <input name="notes" placeholder="Delivery notes / Vehicle No / Batch info">
        </label>
      </div>

      <!-- Searchable Product Selector with Category Filter -->
      <div style="background:var(--bg-input); padding:12px; border-radius:12px; border:1px solid var(--border-card); display:flex; flex-direction:column; gap:8px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <b style="font-size:13px;">🔍 Add Products to GRN (Search Across All Categories)</b>
          <button type="button" class="btn btn-sm" id="grnManualAddBtn">+ Add Row</button>
        </div>
        <div class="grn-product-search-box">
          <select id="grnCatFilter" style="width:160px; padding:8px 10px; font-weight:700;">
            ${categories.map(c => `<option value="${esc(c)}">${c === 'All' ? t('allCategories') : esc(c)}</option>`).join('')}
          </select>
          <div style="position:relative; flex:1;">
            <input id="grnItemSearch" placeholder="${t('selectProduct')}" autocomplete="off" style="width:100%; padding:8px 12px;">
            <div id="grnSuggestList" class="grn-suggest-dropdown hide"></div>
          </div>
        </div>
      </div>

      <!-- Inward Items Table -->
      <div style="overflow-x:auto; max-height:260px; border:1px solid var(--border-card); border-radius:12px;">
        <table style="width:100%; font-size:12.5px; border-collapse:collapse;">
          <thead>
            <tr style="background:var(--bg-input); text-align:left;">
              <th style="padding:8px 10px;">Item & Category</th>
              <th style="padding:8px 6px; text-align:center;">Current</th>
              <th style="padding:8px 6px; width:75px; text-align:center;">Inward Qty</th>
              <th style="padding:8px 6px; width:90px;">Unit Cost</th>
              <th style="padding:8px 6px; width:110px;">Batch / GRN #</th>
              <th style="padding:8px 6px; width:125px;">Expiry Date</th>
              <th style="padding:8px 6px; text-align:right;">Line Total</th>
              <th style="padding:8px 6px; width:30px;"></th>
            </tr>
          </thead>
          <tbody id="grnTbody"></tbody>
        </table>
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; padding:12px; background:var(--bg-input); border-radius:12px;">
        <span style="font-weight:700;">${t('totalCost')}:</span>
        <b id="grnTotalCost" style="font-size:20px; color:var(--brand);">LKR 0.00</b>
      </div>

      <div class="modal-actions">
        <button type="button" class="btn btn-ghost" data-x>${t('cancel')}</button>
        <button type="submit" class="btn btn-primary">${t('saveGrn')}</button>
      </div>
    </form>
  `, true);

  const renderRows = () => {
    const tbody = m.querySelector('#grnTbody');
    if (!tbody) return;

    tbody.innerHTML = rows.map((r, i) => `
      <tr style="border-bottom:1px solid var(--border-card);">
        <td style="padding:8px 10px;">
          <b>${esc(r.name)}</b>
          <div style="font-size:10.5px; color:var(--text-muted);">${esc(r.category || 'General')}</div>
        </td>
        <td style="padding:8px 6px; text-align:center; color:var(--text-muted); font-size:11.5px;">
          ${r.currentStock}
        </td>
        <td style="padding:8px 6px;">
          <input type="number" min="1" value="${r.qty}" data-idx="${i}" data-f="qty" style="padding:5px; text-align:center; width:100%;">
        </td>
        <td style="padding:8px 6px;">
          <input type="number" min="0" step="0.01" value="${r.unitCost}" data-idx="${i}" data-f="unitCost" style="padding:5px; width:100%;">
        </td>
        <td style="padding:8px 6px;">
          <input type="text" value="${esc(r.batchNo)}" placeholder="Batch" data-idx="${i}" data-f="batchNo" style="padding:5px; width:100%;">
        </td>
        <td style="padding:8px 6px;">
          <input type="date" value="${esc(r.expiryDate)}" data-idx="${i}" data-f="expiryDate" style="padding:5px; width:100%;">
        </td>
        <td style="padding:8px 6px; text-align:right; font-weight:800; color:var(--brand);">
          ${fmt((+r.qty || 0) * (+r.unitCost || 0))}
        </td>
        <td style="padding:8px 6px; text-align:center;">
          <button type="button" class="btn-ghost" data-delrow="${i}" style="color:var(--bad); font-size:14px; cursor:pointer; border:0; padding:2px;">✕</button>
        </td>
      </tr>
    `).join('') || `<tr><td colspan="8" class="muted" style="text-align:center; padding:20px;">No items added yet. Search and select items above.</td></tr>`;

    const tot = rows.reduce((s, r) => s + (Number(r.qty) || 0) * (Number(r.unitCost) || 0), 0);
    m.querySelector('#grnTotalCost').textContent = fmt(tot);
  };

  renderRows();

  // Search and Autocomplete Logic
  const searchInput = m.querySelector('#grnItemSearch');
  const catFilter = m.querySelector('#grnCatFilter');
  const suggestList = m.querySelector('#grnSuggestList');

  const updateSuggestions = () => {
    const selCat = catFilter.value;
    const q = searchInput.value.toLowerCase().trim();

    const matches = catalog.filter(it => 
      (selCat === 'All' || it.Category === selCat) &&
      (it.Name + ' ' + (it.Barcode || '') + ' ' + it.Category).toLowerCase().includes(q)
    );

    if (!matches.length) {
      suggestList.innerHTML = `<div class="muted small" style="padding:10px 14px;">No products found</div>`;
      suggestList.classList.remove('hide');
      return;
    }

    suggestList.innerHTML = matches.slice(0, 15).map(it => `
      <div class="grn-suggest-item" data-item-id="${it.Id}">
        <div>
          <b>${esc(it.Name)}</b>
          <div style="font-size:11px; color:var(--text-muted);">${esc(it.Category)} · Stock: ${it.Stock} ${it.Barcode ? `· ${it.Barcode}` : ''}</div>
        </div>
        <div style="text-align:right;">
          <b style="color:var(--brand);">${fmt(it.Price)}</b>
          <span class="pill ok" style="font-size:10px; margin-left:6px;">+ Select</span>
        </div>
      </div>
    `).join('');
    suggestList.classList.remove('hide');
  };

  searchInput.oninput = updateSuggestions;
  searchInput.onfocus = updateSuggestions;
  catFilter.onchange = updateSuggestions;

  // Add selected item from autocomplete
  suggestList.onclick = e => {
    const itemEl = e.target.closest('[data-item-id]');
    if (!itemEl) return;
    const itId = +itemEl.dataset.itemId;
    const it = catalog.find(c => c.Id === itId);
    if (it) {
      rows.push({
        itemId: it.Id,
        name: it.Name,
        category: it.Category,
        currentStock: it.Stock,
        qty: 10,
        unitCost: Math.round(it.Price * 0.75),
        batchNo: `BCH-${d.getFullYear()}${pad(d.getMonth()+1)}-${String(rows.length + 1).padStart(2, '0')}`,
        expiryDate: ''
      });
      searchInput.value = '';
      suggestList.classList.add('hide');
      renderRows();
    }
  };

  // Close suggestions when clicking outside
  m.onclick = e => {
    if (!e.target.closest('.grn-product-search-box')) {
      suggestList.classList.add('hide');
    }
  };

  m.querySelector('#grnManualAddBtn').onclick = () => {
    const first = catalog[0];
    rows.push({
      itemId: first.Id,
      name: first.Name,
      category: first.Category,
      currentStock: first.Stock,
      qty: 10,
      unitCost: Math.round(first.Price * 0.75),
      batchNo: '',
      expiryDate: ''
    });
    renderRows();
  };

  m.querySelector('#grnTbody').oninput = e => {
    const { idx, f } = e.target.dataset;
    if (idx != null && f && rows[idx]) {
      rows[idx][f] = e.target.value;
      const tot = rows.reduce((s, r) => s + (Number(r.qty) || 0) * (Number(r.unitCost) || 0), 0);
      m.querySelector('#grnTotalCost').textContent = fmt(tot);
    }
  };

  m.querySelector('#grnTbody').onclick = e => {
    const del = e.target.closest('[data-delrow]');
    if (del) {
      rows.splice(+del.dataset.delrow, 1);
      renderRows();
    }
  };

  m.querySelectorAll('[data-x]').forEach(el => el.onclick = m.close);

  m.querySelector('#grnForm').onsubmit = async e => {
    e.preventDefault();
    if (!rows.length) return toast('Please add at least one product row to receive', 1);

    const fd = new FormData(e.target);
    try {
      await call('grn:create', {
        grnNo: fd.get('grnNo'),
        supplier: fd.get('supplier'),
        invoiceRef: fd.get('invoiceRef'),
        notes: fd.get('notes'),
        items: rows.map(r => ({
          itemId: +r.itemId,
          qty: +r.qty || 1,
          unitCost: +r.unitCost || 0,
          batchNo: r.batchNo,
          expiryDate: r.expiryDate
        }))
      });
      m.close();
      toast(t('grnSaved'));
      vGrn();
    } catch (err) {
      toast(err.message, 1);
    }
  };
}

/* ==========================================================================
   VIEW 5: REPORTS & ANALYTICS
   ========================================================================== */
const REPORTS = {
  daily: ['daily', () => [[t('date'), r => r.Day], [t('bills'), r => r.Bills], [t('total'), r => fmt(r.Total)]]],
  items: ['itemwise', () => [[t('item'), r => esc(r.Item)], [t('qtySold'), r => r.Qty], [t('total'), r => fmt(r.Total)]]],
  cashiers: ['cashierwise', () => [[t('cashier'), r => esc(r.Cashier)], [t('bills'), r => r.Bills], [t('total'), r => fmt(r.Total)]]]
};

async function vReports() {
  $('#view').innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; flex-wrap:wrap; gap:12px;">
      <div>
        <h2 style="margin:0; font-size:22px; font-weight:800;">${t('reports')}</h2>
        <span class="muted small">Sales performance & cashier summaries</span>
      </div>
      <div style="display:flex; gap:10px; align-items:center;">
        <select id="rt" style="width:200px;">
          ${Object.entries(REPORTS).map(([k, v]) => `<option value="${k}">${t(v[0])}</option>`).join('')}
        </select>
        <input id="f" type="date" value="${today()}" style="width:140px;">
        <input id="t" type="date" value="${today()}" style="width:140px;">
        <button class="btn btn-primary" id="run">${t('run')}</button>
      </div>
    </div>
    <div class="table-card" id="out"></div>
  `;

  const run = async () => {
    try {
      const k = $('#rt').value;
      const cols = REPORTS[k][1]();
      const rows = await call('reports:' + k, { from: $('#f').value, to: $('#t').value });
      $('#out').innerHTML = `
        <table>
          <thead>
            <tr>${cols.map(c => `<th>${c[0]}</th>`).join('')}</tr>
          </thead>
          <tbody>
            ${rows.map(r => `<tr>${cols.map(c => `<td>${c[1](r)}</td>`).join('')}</tr>`).join('') || `<tr><td colspan="${cols.length}" class="muted" style="text-align:center; padding:30px;">${t('noData')}</td></tr>`}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="${cols.length - 1}">${t('grand')}</td>
              <td>${fmt(rows.reduce((s, r) => s + Number(r.Total), 0))}</td>
            </tr>
          </tfoot>
        </table>
      `;
    } catch (e) {
      toast(e.message, 1);
    }
  };

  $('#run').onclick = run;
  $('#rt').onchange = run;
  run();
}

/* ==========================================================================
   VIEW 6: USERS (RBAC & GRANULAR PERMISSIONS)
   ========================================================================== */
function userPasswordModal(u) {
  const m = modal(`
    <div class="modal-header">
      <div>
        <h3 class="modal-title">🔑 Reset Staff Password</h3>
        <span class="muted small">Changing password for <b>${esc(u.Username)}</b> (${esc(u.FullName)})</span>
      </div>
      <button class="modal-close-x" data-x>✕</button>
    </div>
    <form class="auth-form" style="margin-top:14px; display:flex; flex-direction:column; gap:14px;">
      <label class="field-wrap">
        <span class="field-label">${t('newPassword')} *</span>
        <input name="newPassword" id="usrNewPwd" type="password" minlength="6" required placeholder="Minimum 6 characters" autocomplete="new-password">
      </label>
      <label class="field-wrap">
        <span class="field-label">${t('confirmPassword')} *</span>
        <input name="confirmPassword" id="usrConfPwd" type="password" minlength="6" required placeholder="Re-type new password" autocomplete="new-password">
      </label>
      <div style="display:flex; align-items:center; gap:8px;">
        <input type="checkbox" id="showPwdToggle" style="accent-color:var(--brand); cursor:pointer;">
        <label for="showPwdToggle" class="small muted" style="cursor:pointer; user-select:none;">Show passwords</label>
      </div>
      <div class="modal-actions" style="margin-top:16px;">
        <button type="button" class="btn btn-ghost" data-x>${t('cancel')}</button>
        <button type="submit" class="btn btn-primary">Update Password</button>
      </div>
    </form>
  `);
  m.querySelectorAll('[data-x]').forEach(el => el.onclick = m.close);
  const showToggle = m.querySelector('#showPwdToggle');
  const p1 = m.querySelector('#usrNewPwd');
  const p2 = m.querySelector('#usrConfPwd');
  showToggle.onchange = () => {
    const ty = showToggle.checked ? 'text' : 'password';
    p1.type = ty;
    p2.type = ty;
  };
  m.querySelector('form').onsubmit = async e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    if (data.newPassword !== data.confirmPassword) {
      toast(t('passMismatch') || 'Passwords do not match', 1);
      return;
    }
    if (data.newPassword.length < 6) {
      toast(t('passMinLength') || 'Password must be at least 6 characters', 1);
      return;
    }
    try {
      await call('users:changePassword', { id: u.Id, newPassword: data.newPassword });
      m.close();
      toast(`Password for ${u.Username} updated successfully!`);
    } catch (err) {
      toast(err.message, 1);
    }
  };
}

function userEditModal(u = {}) {
  const isEdit = !!u.Id;
  const currentRole = u.Role || C;
  let initialPerms = [];
  if (u.Permissions) {
    initialPerms = u.Permissions.split(',').map(s => s.trim().toLowerCase());
  } else if (isEdit) {
    if (u.Role === M) initialPerms = ['dashboard', 'pos', 'items', 'grn', 'reports', 'receipts'];
    else if (u.Role === C) initialPerms = ['pos', 'dashboard'];
    else if (u.Role === A) initialPerms = SYSTEM_MODULES.map(m => m.key);
  } else {
    initialPerms = ['pos', 'dashboard'];
  }

  const m = modal(`
    <div class="modal-header">
      <div>
        <h3 class="modal-title">${isEdit ? 'Edit Staff User & System Permissions' : 'Create New Staff User'}</h3>
        <span class="muted small">${isEdit ? `Updating account for <b>${esc(u.Username)}</b>` : 'Add cashier, store manager or admin staff'}</span>
      </div>
      <button class="modal-close-x" data-x>✕</button>
    </div>
    <form class="auth-form" style="margin-top:14px; display:flex; flex-direction:column; gap:16px;">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
        <label class="field-wrap">
          <span class="field-label">${t('username')} *</span>
          <input name="username" type="text" value="${esc(u.Username || '')}" required placeholder="e.g. kasun" ${isEdit ? '' : 'autofocus'}>
        </label>
        <label class="field-wrap">
          <span class="field-label">${t('fullName')} *</span>
          <input name="fullName" type="text" value="${esc(u.FullName || '')}" required placeholder="e.g. Kasun Perera">
        </label>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
        <label class="field-wrap">
          <span class="field-label">${t('role')}</span>
          <select name="role" id="userRoleSelect">
            <option value="${C}" ${currentRole === C ? 'selected' : ''}>${t(C)}</option>
            <option value="${M}" ${currentRole === M ? 'selected' : ''}>${t(M)}</option>
            <option value="${A}" ${currentRole === A ? 'selected' : ''}>${t(A)}</option>
          </select>
        </label>
        <label class="field-wrap">
          <span class="field-label">${t('active')}</span>
          <select name="active">
            <option value="Yes" ${u.Active !== false ? 'selected' : ''}>Active</option>
            <option value="No" ${u.Active === false ? 'selected' : ''}>Disabled</option>
          </select>
        </label>
      </div>

      <label class="field-wrap">
        <span class="field-label">${t('password')} ${isEdit ? '<span class="muted small">(Leave blank to keep unchanged)</span>' : '* (min 6 characters)'}</span>
        <input name="password" type="password" minlength="${isEdit ? '0' : '6'}" ${isEdit ? '' : 'required'} placeholder="${isEdit ? 'Leave blank to keep current password' : 'Enter login password'}">
      </label>

      <!-- Granular System Permissions Section -->
      <div class="perms-container">
        <div class="perms-header">
          <div>
            <div style="font-size:13px; font-weight:800; color:var(--text-main); display:flex; align-items:center; gap:6px;">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>System Permissions & Feature Access</span>
            </div>
            <span class="muted small">Grant or restrict specific module access for this user</span>
          </div>
          <div class="perms-presets">
            <button type="button" class="perms-preset-btn" id="presetCashier">Cashier Default</button>
            <button type="button" class="perms-preset-btn" id="presetManager">Manager Default</button>
            <button type="button" class="perms-preset-btn" id="presetAll">All Features</button>
            <button type="button" class="perms-preset-btn" id="presetNone">Clear</button>
          </div>
        </div>

        <div id="superAdminNotice" class="hide" style="padding:10px 14px; background:rgba(124,58,237,0.08); border:1px solid rgba(124,58,237,0.2); border-radius:10px; font-size:12px; color:var(--brand); font-weight:700;">
          👑 Super Admin accounts always have master access to all features, settings and users.
        </div>

        <div class="perms-grid" id="permsGrid">
          ${SYSTEM_MODULES.map(m => `
            <label class="perm-card-label">
              <input type="checkbox" name="perms" value="${m.key}" ${initialPerms.includes(m.key) ? 'checked' : ''}>
              <div class="perm-card-info">
                <span class="perm-card-title">${m.name}</span>
                <span class="perm-card-desc">${m.desc}</span>
              </div>
            </label>
          `).join('')}
        </div>
      </div>

      <div class="modal-actions" style="margin-top:10px;">
        <button type="button" class="btn btn-ghost" data-x>${t('cancel')}</button>
        <button type="submit" class="btn btn-primary">${isEdit ? 'Save Changes' : 'Create User'}</button>
      </div>
    </form>
  `, true);

  m.querySelectorAll('[data-x]').forEach(el => el.onclick = m.close);

  const roleSelect = m.querySelector('#userRoleSelect');
  const notice = m.querySelector('#superAdminNotice');
  const checkBoxes = () => [...m.querySelectorAll('input[name="perms"]')];

  const updateRoleUI = () => {
    const isSA = roleSelect.value === A;
    notice.classList.toggle('hide', !isSA);
    if (isSA) {
      checkBoxes().forEach(cb => cb.checked = true);
    }
  };
  roleSelect.onchange = updateRoleUI;
  updateRoleUI();

  m.querySelector('#presetCashier').onclick = () => {
    checkBoxes().forEach(cb => cb.checked = ['pos', 'dashboard'].includes(cb.value));
  };
  m.querySelector('#presetManager').onclick = () => {
    checkBoxes().forEach(cb => cb.checked = ['pos', 'dashboard', 'items', 'grn', 'reports', 'receipts'].includes(cb.value));
  };
  m.querySelector('#presetAll').onclick = () => {
    checkBoxes().forEach(cb => cb.checked = true);
  };
  m.querySelector('#presetNone').onclick = () => {
    checkBoxes().forEach(cb => cb.checked = false);
  };

  m.querySelector('form').onsubmit = async e => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const selectedPerms = checkBoxes().filter(cb => cb.checked).map(cb => cb.value).join(',');
    const pwd = (fd.get('password') || '').trim();
    if (!isEdit && (!pwd || pwd.length < 6)) {
      toast(t('passMinLength') || 'Password must be at least 6 characters', 1);
      return;
    }
    if (isEdit && pwd && pwd.length < 6) {
      toast(t('passMinLength') || 'Password must be at least 6 characters', 1);
      return;
    }
    try {
      await call('users:save', {
        id: u.Id,
        username: fd.get('username'),
        fullName: fd.get('fullName'),
        role: fd.get('role'),
        active: fd.get('active') === 'Yes',
        password: pwd || undefined,
        permissions: selectedPerms
      });
      if (isEdit && me && me.id === u.Id) {
        me.fullName = fd.get('fullName');
        me.role = fd.get('role');
        me.permissions = selectedPerms;
        shell();
      }
      m.close();
      toast('User and permissions saved successfully!');
      vUsers();
    } catch (err) {
      toast(err.message, 1);
    }
  };
}

async function vUsers() {
  const us = await call('users:list');
  $('#view').innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; flex-wrap:wrap; gap:12px;">
      <div>
        <h2 style="margin:0; font-size:22px; font-weight:800; display:flex; align-items:center; gap:8px;">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2">${ICON.users}</svg>
          <span>${t('users')} & System Permissions</span>
        </h2>
        <span class="muted small">Staff accounts, granular feature permissions & password control (Super Admin Only)</span>
      </div>
      <button class="btn btn-primary" id="nu" style="display:flex; align-items:center; gap:6px;">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        <span>${t('newUser')}</span>
      </button>
    </div>

    <div class="table-card" id="userTbl">
      <table>
        <thead>
          <tr>
            <th>User Account</th>
            <th>Role</th>
            <th>Assigned System Permissions</th>
            <th>Status</th>
            <th style="text-align:right;">Actions</th>
          </tr>
        </thead>
        <tbody>
          ${us.map(u => {
            const isSA = u.Role === A;
            const permsList = u.Permissions ? u.Permissions.split(',').map(s => s.trim().toLowerCase()) : (
              u.Role === M ? ['dashboard', 'pos', 'items', 'grn', 'reports', 'receipts'] :
              u.Role === C ? ['pos', 'dashboard'] : ['*']
            );
            return `
              <tr>
                <td>
                  <div style="display:flex; align-items:center; gap:10px;">
                    <div class="user-avatar-circle" style="width:34px; height:34px; font-size:14px; background:var(--brand); color:#fff; border-radius:50%; display:grid; place-items:center; font-weight:800;">
                      ${esc(u.FullName || u.Username).charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div style="font-weight:800; color:var(--text-main); font-size:13.5px;">${esc(u.Username)}</div>
                      <div class="muted small">${esc(u.FullName)}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span class="pill ${isSA ? 'info' : u.Role === M ? 'warn' : 'ok'}">${t(u.Role)}</span>
                </td>
                <td style="max-width:320px;">
                  ${isSA ? `
                    <span class="perm-badge-pill" style="background:rgba(124,58,237,0.12); color:var(--brand); border-color:rgba(124,58,237,0.3); font-weight:800;">
                      ★ Master Access (All Features)
                    </span>
                  ` : (
                    permsList.length ? permsList.map(p => {
                      const mod = SYSTEM_MODULES.find(m => m.key === p);
                      return `<span class="perm-badge-pill">${mod ? mod.name : p}</span>`;
                    }).join(' ') : `<span class="muted small">No permissions assigned</span>`
                  )}
                </td>
                <td>
                  <span class="pill ${u.Active ? 'ok' : 'no'}">${u.Active ? t('Yes') : t('No')}</span>
                </td>
                <td style="text-align:right;">
                  <div style="display:inline-flex; gap:6px;">
                    <button class="btn btn-sm btn-outline edit-user-btn" data-id="${u.Id}">Permissions & Edit</button>
                    <button class="btn btn-sm btn-ghost pwd-user-btn" data-id="${u.Id}" title="Reset Password" style="color:var(--brand); font-weight:700;">🔑 Password</button>
                  </div>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;

  $('#nu').onclick = () => userEditModal();
  $('#userTbl').onclick = e => {
    const editBtn = e.target.closest('.edit-user-btn');
    if (editBtn) {
      const u = us.find(x => x.Id === +editBtn.dataset.id);
      if (u) userEditModal(u);
      return;
    }
    const pwdBtn = e.target.closest('.pwd-user-btn');
    if (pwdBtn) {
      const u = us.find(x => x.Id === +pwdBtn.dataset.id);
      if (u) userPasswordModal(u);
      return;
    }
  };
}

/* ==========================================================================
   VIEW 7: SUBSCRIPTION & SUPER ADMIN'S BANK ACCOUNT CONFIGURATION
   ========================================================================== */
async function vSubs() {
  const [{ status: s, payments }, codesInfo] = await Promise.all([
    call('sub:overview'),
    call('sub:listCodes')
  ]);
  const isSub = s.subEnabled !== false;
  const label = !isSub 
    ? '💎 One-Time Lifetime License Active' 
    : { ok: t('stActive'), warning: t('stWarn'), locked: t('stLocked') }[s.state];
  const b = s.bankDetails || {};

  $('#view').innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; flex-wrap:wrap; gap:12px;">
      <div>
        <h2 style="margin:0; font-size:22px; font-weight:800;">${t('subs')}</h2>
        <span class="muted small">Monthly software licensing, Super Admin bank account & activation codes</span>
      </div>
      <div style="display:flex; gap:10px;">
        <button class="btn btn-sm" id="btnBankCfg">${t('bankCfg')}</button>
        <button class="btn btn-sm" id="cfg">${t('feeCfg')}</button>
        <button class="btn btn-primary btn-sm" id="pay">${t('recPay')}</button>
      </div>
    </div>

    <!-- Project Licensing Model Switcher (Subscription vs One-Payment Lifetime License) -->
    <div class="panel-card" style="margin-bottom:20px; border:2px solid ${isSub ? 'var(--brand)' : 'var(--accent-lime)'}; background:radial-gradient(ellipse at top left, ${isSub ? 'rgba(91,82,249,0.08)' : 'rgba(16,185,129,0.08)'}, transparent 70%);">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:14px;">
        <div style="display:flex; align-items:center; gap:14px;">
          <div style="width:48px; height:48px; border-radius:14px; background:${isSub ? 'var(--brand-light)' : 'rgba(16,185,129,0.15)'}; display:grid; place-items:center; font-size:24px;">
            ${isSub ? '🔄' : '💎'}
          </div>
          <div>
            <div style="display:flex; align-items:center; gap:8px;">
              <h3 style="margin:0; font-size:16.5px; font-weight:800;">
                Project License Model: <span style="color:${isSub ? 'var(--brand)' : 'var(--accent-lime)'};">${isSub ? 'Monthly Subscription Mode (Default)' : 'One-Time Payment Lifetime License'}</span>
              </h3>
              <span class="pill ${isSub ? 'info' : 'ok'}" style="font-size:10px; font-weight:800;">
                ${isSub ? 'RECURRING MONTHLY' : 'ONE-TIME PROJECT'}
              </span>
            </div>
            <p class="muted small" style="margin:3px 0 0; font-size:12px;">
              ${isSub 
                ? 'System operates on monthly recurring billing. Vendor bank card details & renewal code boxes appear on the 25th of every month.' 
                : 'Subscription is TURNED OFF. This is a one-time payment project. Terminal will NEVER lock, and your personal bank card details are completely hidden from all other dashboards.'}
            </p>
          </div>
        </div>

        <div style="display:flex; align-items:center; gap:10px;">
          <div class="theme-switch-pill" style="padding:4px; height:auto; gap:4px;">
            <button type="button" class="theme-switch-btn ${isSub ? 'active' : ''}" id="btnModeSub" style="padding:7px 16px; font-size:12px; font-weight:700;">
              🔄 Monthly Subscription
            </button>
            <button type="button" class="theme-switch-btn ${!isSub ? 'active' : ''}" id="btnModeLifetime" style="padding:7px 16px; font-size:12px; font-weight:700; ${!isSub ? 'background:var(--accent-lime); color:#fff;' : ''}">
              💎 One-Time Lifetime License
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- License State Card -->
    <div class="fin-stat-card" style="margin-bottom:20px; border-left:5px solid ${!isSub ? 'var(--accent-lime)' : s.state === 'ok' ? 'var(--accent-lime)' : s.state === 'warning' ? 'var(--accent-amber)' : 'var(--bad)'};">
      <div>
        <div style="display:flex; align-items:center; gap:10px;">
          <h3 style="margin:0; font-size:18px;">${label}</h3>
          <span class="pill ${!isSub ? 'ok' : s.state === 'ok' ? 'ok' : s.state === 'warning' ? 'warn' : 'no'}">
            ${!isSub ? 'PERPETUAL LIFETIME' : s.state.toUpperCase()}
          </span>
          ${isSub ? `<span class="pill info">Free Month: ${s.freeMonth}</span>` : `<span class="pill ok">Zero Recurring Fees</span>`}
        </div>
        <p style="margin:8px 0 3px; font-size:13.5px;">
          📅 <b>${t('installDate')}</b>: <b style="color:var(--brand);">${s.installedOn || 'Not Set'}</b>
          ${isSub ? `· Free Installation Month: <b>${s.freeMonth}</b> (No codes or fees needed)` : `· <b>Permanent Lifetime Software Ownership Granted</b>`}
        </p>
        ${isSub ? `
          <p style="margin:3px 0 2px;">
            ${t('monthlyFee')}: <b>${fmt(s.fee)}</b> · ${t('dueDay')}: <b>${s.dueDay}</b> ${t('dayOfMonth')} · First Monthly Subscription Begins: <b style="color:var(--brand);">${s.nextDue || 'Next month'}</b>
          </p>
          <small class="muted">${t('freeMonthNote')}</small>
        ` : `
          <p style="margin:3px 0 2px; color:var(--accent-lime); font-weight:700;">
            ✓ Monthly fee collection disabled. No subscription codes or bank transfers required from client.
          </p>
          <small class="muted">You can switch this project back to Monthly Subscription mode at any time using the toggle above.</small>
        `}
      </div>
    </div>

    <!-- Database Backup Quick Summary Card -->
    <div class="panel-card" style="margin-bottom:20px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; background:radial-gradient(ellipse at top left, rgba(91,82,249,0.06), transparent 70%);">
      <div style="display:flex; align-items:center; gap:14px;">
        <div style="width:44px; height:44px; border-radius:12px; background:var(--brand-light); display:grid; place-items:center; font-size:22px;">
          💾
        </div>
        <div>
          <div style="display:flex; align-items:center; gap:8px;">
            <h4 style="margin:0; font-size:15px; font-weight:800;">Automated Hourly Database Backup: Active</h4>
            <span class="pill ok" style="font-size:10px; font-weight:800;">1 FILE / DAY</span>
          </div>
          <span class="muted small">Refreshes every hour into today's backup file. Safe-keeps all sales, stock & invoice data.</span>
        </div>
      </div>
      <button class="btn btn-sm btn-secondary" id="btnGoToBackup">📁 Configure Backup Settings</button>
    </div>

    <!-- Super Admin Bank Account Card (What customers see when payment is due) -->
    <div class="bank-showcase-panel" style="margin-bottom:24px;">
      <div class="panel-header-row">
        <div>
          <div style="display:flex; align-items:center; gap:8px;">
            <h3 class="panel-heading" style="margin:0;">💳 ${t('superAdminBankDetails')}</h3>
            ${!isSub ? `<span class="pill warn" style="font-size:10px; font-weight:700;">HIDDEN FROM CLIENT DASHBOARDS</span>` : ''}
          </div>
          <small class="muted">${isSub ? 'Customers and cashiers see this bank account on the 25th of every month to make payments.' : 'Because One-Time Lifetime License is active, cashiers and store owners do not see this bank card on their dashboard.'}</small>
        </div>
        <button class="btn btn-sm btn-primary" id="btnEditBank">Edit My Bank Details</button>
      </div>

      <div class="superadmin-credit-card">
        <div class="card-hologram-shine"></div>
        <div class="card-top-row">
          <span class="card-brand-label">SUPER ADMIN / VENDOR ACCOUNT</span>
          <span class="card-subscription-tag">${t('dueTag')}</span>
        </div>
        <div class="card-number-row">
          <span>${esc(b.accNumber || '8030194935')}</span>
          <button type="button" class="btn-card-copy" id="subsCopyBtn">
            <svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            <span>${t('copy')}</span>
          </button>
        </div>
        <div class="card-bottom-row">
          <div>
            <div style="font-size:9.5px; opacity:0.8;">ACCOUNT HOLDER</div>
            <div class="card-holder-name">${esc(b.accName || 'H.A AMAN MANTHIRA HAPUARACHCHI')}</div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:9.5px; opacity:0.8;">BANK & BRANCH</div>
            <b>${esc(b.bankName || 'Commercial Bank')}</b> · <span>${esc(b.bankBranch || 'Gampaha')}</span>
          </div>
        </div>
      </div>

      <div class="bank-info-meta-list">
        <div class="bank-meta-item">
          <span class="bank-meta-label">${t('bankName')}:</span>
          <span class="bank-meta-val">${esc(b.bankName || 'Commercial Bank')}</span>
        </div>
        <div class="bank-meta-item">
          <span class="bank-meta-label">${t('accName')}:</span>
          <span class="bank-meta-val">${esc(b.accName || 'H.A Aman Manthira Hapuarachchi')}</span>
        </div>
        <div class="bank-meta-item">
          <span class="bank-meta-label">${t('accNumber')}:</span>
          <span class="bank-meta-val" style="font-family:monospace; color:var(--brand);">${esc(b.accNumber || '8030194935')}</span>
        </div>
        <div class="bank-meta-item">
          <span class="bank-meta-label">${t('bankBranch')}:</span>
          <span class="bank-meta-val">${esc(b.bankBranch || 'Gampaha')}</span>
        </div>
        <div class="bank-meta-item">
          <span class="bank-meta-label">${t('bankNotes')}:</span>
          <span class="bank-meta-val" style="font-size:12px; color:var(--text-muted);">${esc(b.bankNotes || 'Please send slip to WhatsApp')}</span>
        </div>
      </div>
    </div>

    <!-- Master Secret Pattern Activation System -->
    <div class="panel-card" style="margin-bottom:24px; border:1px solid rgba(91,82,249,0.3); background:radial-gradient(ellipse at top right, rgba(91,82,249,0.06), transparent 70%);">
      <div class="panel-header-row" style="flex-wrap:wrap; gap:12px;">
        <div>
          <div style="display:flex; align-items:center; gap:8px;">
            <h3 class="panel-heading" style="margin:0;">🔐 ${t('vendorCodes')}</h3>
            <span class="pill ok" style="font-size:10px; font-weight:800;">SUPER ADMIN ONLY</span>
          </div>
          <small class="muted">Instant 10-digit monthly renewal codes with anti-cheat protection & lifetime single-use tracking.</small>
        </div>
        <div style="display:flex; gap:8px; align-items:center;">
          <button type="button" class="btn btn-primary btn-sm" id="btnGenSecretCode" style="font-weight:700; padding:7px 16px; gap:6px;">
            <span>⚡</span> Generate Fresh Secret Code
          </button>
        </div>
      </div>

      <!-- Secret Pattern Rule Explanation Box (Confidential to Aman) -->
      <div style="background:var(--bg-input); border-radius:12px; padding:14px 16px; margin-top:14px; border:1px dashed rgba(91,82,249,0.35);">
        <div style="font-size:12px; font-weight:800; color:var(--brand); text-transform:uppercase; letter-spacing:0.5px; margin-bottom:6px;">
          🤫 Confidential Vendor Algorithm Rules:
        </div>
        <div style="font-size:12.5px; line-height:1.65; color:var(--text-main);">
          • <b>Code Format</b>: Exactly <b>10 alphanumeric characters</b> (letters & digits, uppercase/case-insensitive).<br>
          • <b>Secret Rule</b>: Must contain <b>exactly three '1' digits</b> and <b>exactly one 'A' letter</b> (e.g., <code style="background:var(--bg-card); padding:2px 6px; border-radius:4px; font-weight:700; color:var(--accent-lime);">B1K1P1A9X7</code>, <code style="background:var(--bg-card); padding:2px 6px; border-radius:4px; font-weight:700; color:var(--accent-lime);">19A41R7X1K</code>). You can create valid codes in your head anytime!<br>
          • <b>Anti-Cheat Fraud Lockdown</b>: If a customer attempts 3 random invalid codes, the terminal locks permanently in <b>Security Fraud Lockdown</b>.<br>
          • <b>Fraud Unlock</b>: Requires Super Admin password and full name: <b style="color:var(--brand);">Aman Manthira Hapuarachchi</b>.<br>
          • <b>Single-Use Protected</b>: When a code is redeemed, it is recorded in the SQL Server database so it can never be used again.
        </div>
      </div>

      <!-- Active Generated Code Showcase -->
      <div id="genResultCard" style="display:none; background:var(--bg-card); border-radius:12px; padding:16px 18px; margin-top:14px; border:1.5px solid var(--brand); box-shadow:0 8px 24px rgba(91,82,249,0.12);">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
          <div>
            <div style="display:flex; align-items:center; gap:6px;">
              <span class="pill ok" style="font-size:10px; font-weight:800;">✓ FRESH CODE READY</span>
              <span class="small muted">Matches 3×'1' + 1×'A' pattern & unused in DB</span>
            </div>
            <div id="genDisplayCode" style="font-family:monospace; font-size:26px; font-weight:900; letter-spacing:3px; color:var(--brand); margin-top:6px;">
              ----------
            </div>
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <button type="button" class="btn btn-sm btn-primary" id="btnCopyGenCode" style="padding:7px 14px; font-weight:700;">
              📋 Copy Code
            </button>
            <button type="button" class="btn btn-sm" id="btnCopyWhatsAppMsg" style="padding:7px 14px; background:#25D366; color:#fff; border:none; font-weight:700; display:flex; align-items:center; gap:6px;">
              💬 Copy WhatsApp Text
            </button>
          </div>
        </div>
      </div>

      <!-- Lifetime Redeemed Codes History Section -->
      <div style="margin-top:20px; border-top:1px solid var(--border); padding-top:16px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:10px;">
          <div>
            <h4 style="margin:0; font-size:14px; font-weight:800;">📜 Lifetime Redeemed Codes History (${codesInfo.codes ? codesInfo.codes.length : 0})</h4>
            <small class="muted">All codes successfully redeemed and permanently registered in the database.</small>
          </div>
          <input id="codeSearchInp" placeholder="Search redeemed code or period…" style="width:220px; height:32px; font-size:12px; padding:0 10px; border-radius:8px; border:1px solid var(--border); background:var(--bg-input); color:var(--text-main);">
        </div>

        <div id="codesGridContainer" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:10px; max-height:280px; overflow-y:auto; padding:4px 2px;">
        </div>
      </div>
    </div>

    <!-- Payments History Table -->
    <h3 style="margin:20px 0 12px; font-size:17px; font-weight:800;">${t('history')}</h3>
    <div class="table-card">
      <table>
        <thead>
          <tr>
            <th>${t('periodC')}</th>
            <th>${t('amount')}</th>
            <th>${t('method')}</th>
            <th>${t('note')}</th>
            <th>${t('paidAt')}</th>
            <th>${t('by')}</th>
          </tr>
        </thead>
        <tbody>
          ${payments.map(p => `
            <tr>
              <td><b>${p.Period}</b></td>
              <td><b>${fmt(p.Amount)}</b></td>
              <td><span class="pill info">${esc(p.Method)}</span></td>
              <td><small class="muted">${esc(p.Note || '—')}</small></td>
              <td><small>${fd(p.PaidAt)}</small></td>
              <td><small>${esc(p.RecordedBy)}</small></td>
            </tr>
          `).join('') || `<tr><td colspan="6" class="muted" style="text-align:center; padding:24px;">${t('noData')}</td></tr>`}
        </tbody>
      </table>
    </div>
  `;

  // Secret Pattern Code Generator & Lifetime Redeemed List
  let latestGeneratedCode = '';

  const genBtn = $('#btnGenSecretCode');
  if (genBtn) {
    genBtn.onclick = async () => {
      try {
        genBtn.disabled = true;
        genBtn.innerHTML = '<span>⏳</span> Generating…';
        const res = await call('sub:generateSecretCode');
        latestGeneratedCode = res.code;
        const resultCard = $('#genResultCard');
        const display = $('#genDisplayCode');
        if (resultCard && display) {
          display.textContent = latestGeneratedCode;
          resultCard.style.display = 'block';
          resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        toast(`New Code ${latestGeneratedCode} generated!`);
      } catch (err) {
        toast('Failed to generate code: ' + err.message, 'warn');
      } finally {
        genBtn.disabled = false;
        genBtn.innerHTML = '<span>⚡</span> Generate Fresh Secret Code';
      }
    };
  }

  const btnCopyGenCode = $('#btnCopyGenCode');
  if (btnCopyGenCode) {
    btnCopyGenCode.onclick = () => {
      if (!latestGeneratedCode) return;
      navigator.clipboard.writeText(latestGeneratedCode);
      toast(`Code ${latestGeneratedCode} copied to clipboard!`);
    };
  }

  const btnCopyWhatsAppMsg = $('#btnCopyWhatsAppMsg');
  if (btnCopyWhatsAppMsg) {
    btnCopyWhatsAppMsg.onclick = () => {
      if (!latestGeneratedCode) return;
      const msg = `Hello! Thank you for your payment. Here is your 1-Month Renewal Code for BookShop POS:\n\n*${latestGeneratedCode}*\n\nPlease enter this 10-character code on your POS lock screen or go to Settings > Activate Code to unlock.\n\nThank you!\n- Aman Manthira Hapuarachchi (Super Admin)`;
      navigator.clipboard.writeText(msg);
      toast('WhatsApp message template copied!');
    };
  }

  const renderCodesGrid = () => {
    const q = ($('#codeSearchInp')?.value || '').trim().toUpperCase();
    const codesList = codesInfo.codes || [];
    const filtered = codesList.filter(c => {
      if (q && !c.code.toUpperCase().includes(q) && !(c.period || '').toUpperCase().includes(q)) return false;
      return true;
    });

    const container = $('#codesGridContainer');
    if (!container) return;
    if (!filtered.length) {
      container.innerHTML = `<div class="muted small" style="grid-column:1/-1; text-align:center; padding:20px;">${codesList.length === 0 ? 'No codes have been redeemed yet. Terminal will log every activated code here.' : 'No redeemed codes match search.'}</div>`;
      return;
    }

    container.innerHTML = filtered.map(c => `
      <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 12px; background:var(--bg-input); border-radius:10px; border:1px solid var(--border);">
        <div>
          <div style="font-family:monospace; font-weight:700; font-size:13.5px; color:var(--text-main); letter-spacing:0.8px;">
            ${esc(c.code)}
          </div>
          <div style="font-size:10.5px; color:var(--text-muted); margin-top:2px;">
            Redeemed for <b>${esc(c.period || '—')}</b> · ${fd(c.usedAt)} · ${esc(c.usedBy || 'Customer')}
          </div>
        </div>
        <div>
          <span class="pill" style="font-size:9.5px; opacity:0.8; font-weight:700;">REDEEMED</span>
        </div>
      </div>
    `).join('');
  };

  renderCodesGrid();
  const searchInp = $('#codeSearchInp');
  if (searchInp) searchInp.oninput = renderCodesGrid;

  const editBankModal = () => formModal(
    'Configure Super Admin Bank Account (For Customer Subscriptions)',
    [
      ['bankName', t('bankName')],
      ['accName', t('accName')],
      ['accNumber', t('accNumber')],
      ['bankBranch', t('bankBranch')],
      ['bankNotes', t('bankNotes')]
    ],
    {
      bankName: b.bankName || 'Commercial Bank',
      accName: b.accName || 'H.A Aman Manthira Hapuarachchi',
      accNumber: b.accNumber || '8030194935',
      bankBranch: b.bankBranch || 'Gampaha',
      bankNotes: b.bankNotes || 'Please state store name and bill invoice ID as payment reference.'
    },
    async v => {
      await call('sub:saveBank', v);
      await refreshSub();
      vSubs();
    }
  );

  const btnModeSub = $('#btnModeSub');
  if (btnModeSub) {
    btnModeSub.onclick = async () => {
      if (s.subEnabled) return;
      await call('sub:setMode', { subEnabled: true });
      await refreshSub();
      toast('Switched to Monthly Subscription Mode (Recurring)');
      vSubs();
    };
  }

  const btnModeLifetime = $('#btnModeLifetime');
  if (btnModeLifetime) {
    btnModeLifetime.onclick = async () => {
      if (!s.subEnabled) return;
      await call('sub:setMode', { subEnabled: false });
      await refreshSub();
      toast('Switched to One-Time Lifetime License! Subscriptions & bank details disabled on client dashboards.');
      vSubs();
    };
  }

  const btnGoBackup = $('#btnGoToBackup');
  if (btnGoBackup) btnGoBackup.onclick = () => go('backup');

  $('#btnBankCfg').onclick = editBankModal;
  $('#btnEditBank').onclick = editBankModal;
  $('#subsCopyBtn').onclick = () => {
    navigator.clipboard.writeText((b.accNumber || '8030194935').replace(/\s+/g, ''));
    toast(t('copied'));
  };

  $('#cfg').onclick = () => formModal(
    'License & Installation Settings',
    [
      ['installedOn', t('installDate'), 'date'],
      ['fee', t('feeLkr'), 'number'],
      ['dueDay', t('dueDayIn'), 'number']
    ],
    { installedOn: s.installedOn || today(), fee: s.fee, dueDay: s.dueDay },
    async v => {
      await call('sub:save', { fee: +v.fee, dueDay: +v.dueDay, installedOn: v.installedOn });
      await refreshSub();
      vSubs();
    }
  );

  $('#pay').onclick = () => formModal(
    t('recTitle'),
    [
      ['period', t('period')],
      ['amount', t('amount'), 'number'],
      ['method', t('method'), 'select', ['Cash', 'Bank', 'Other']],
      ['note', t('note')]
    ],
    { period: s.period || today().slice(0, 7), amount: s.fee },
    async v => {
      await call('sub:pay', { ...v, amount: +v.amount });
      await refreshSub();
      vSubs();
    }
  );
}

/* ==========================================================================
   VIEW 9: USER GUIDE & HELP (CASHIER & STORE OPERATIONS)
   ========================================================================== */
async function vHelp() {
  const isSi = lang === 'si';

  $('#view').innerHTML = `
    <div style="max-width:1100px; margin:0 auto; padding-bottom:50px;">
      <!-- Header Banner with In-Page Language Toggle Switcher -->
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px; margin-bottom:24px; background:linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(124,58,237,0.12) 100%); padding:22px 26px; border-radius:16px; border:1px solid rgba(99,102,241,0.25);">
        <div>
          <div style="display:flex; align-items:center; gap:12px;">
            <span style="font-size:32px;">📖</span>
            <div>
              <h2 style="margin:0; font-size:24px; font-weight:900; color:var(--text-main);">
                ${isSi ? 'පොත්හල් සහ සේවා POS පද්ධති මාර්ගෝපදේශය' : 'BookShop & Services POS User Guide'}
              </h2>
              <span class="muted" style="display:block; margin-top:4px; font-size:13px;">
                ${isSi ? 'අයකැමි කාර්යයන්, ෆොටෝකොපි/මුද්‍රණ ගණකය, බාර්කෝඩ් සහ තොග කළමනාකරණය' : 'Complete operational guide for cashier billing, print/copy services & stock management'}
              </span>
            </div>
          </div>
        </div>

        <!-- In-Page Language Switcher -->
        <div style="display:flex; align-items:center; gap:8px; background:var(--bg-card); padding:5px 8px; border-radius:12px; border:1.5px solid var(--border); box-shadow:0 2px 8px rgba(0,0,0,0.06);">
          <span style="font-size:12px; font-weight:800; color:var(--text-dim); margin-left:6px;">${isSi ? 'භාෂාව මාරු කරන්න:' : 'Language:'}</span>
          <button type="button" data-lang="en" class="btn btn-sm ${!isSi ? 'btn-primary' : 'btn-ghost'}" style="font-weight:800; padding:6px 14px; border-radius:8px; cursor:pointer;">
            🇬🇧 English
          </button>
          <button type="button" data-lang="si" class="btn btn-sm ${isSi ? 'btn-primary' : 'btn-ghost'}" style="font-weight:800; padding:6px 14px; border-radius:8px; cursor:pointer;">
            🇱🇰 සිංහල
          </button>
        </div>
      </div>

      <!-- Main Guide Cards Grid -->
      <div style="display:flex; flex-direction:column; gap:22px;">

        <!-- 1. Keyboard Shortcuts Cheat Sheet -->
        <div class="table-card" style="padding:22px;">
          <div style="display:flex; align-items:center; gap:10px; margin-bottom:16px;">
            <span style="font-size:22px;">⚡</span>
            <div>
              <h3 style="margin:0; font-size:18px; font-weight:800;">
                ${isSi ? 'වේගවත් අයකැමි කෙටිමං යතුරු (Keyboard Shortcuts)' : 'Fast Cashier Keyboard Shortcuts'}
              </h3>
              <small class="muted">${isSi ? 'මවුසය රහිතව සම්පූර්ණ විකුණුම් ක්‍රියාවලිය යතුරුපුවරුවෙන්ම සිදුකිරීම සඳහා' : 'Run the entire cashier workflow hands-on without touching the mouse'}</small>
            </div>
          </div>

          <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(240px, 1fr)); gap:12px;">
            <div style="background:var(--bg-input); padding:14px; border-radius:12px; border:1px solid var(--border);">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                <b style="font-size:13.5px; color:var(--text-main);">${isSi ? 'සෙවීම සහ බාර්කෝඩ්' : 'Search / Barcode'}</b>
                <span class="pill info" style="font-weight:900; font-family:monospace; font-size:12px;">F1</span>
              </div>
              <small class="muted" style="display:block; font-size:12px; line-height:1.4;">
                ${isSi ? 'සෙවුම් තීරුව සක්‍රිය කරයි. බාර්කෝඩ් ස්කෑනරයෙන් කෙලින්ම ස්කෑන් කර බිලට ඇතුළත් කළ හැක.' : 'Focuses search bar. Scan ISBN or barcode directly to add items.'}
              </small>
            </div>

            <div style="background:var(--bg-input); padding:14px; border-radius:12px; border:1px solid var(--border);">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                <b style="font-size:13.5px; color:var(--text-main);">${isSi ? 'ෆොටෝකොපි / මුද්‍රණ ගණකය' : 'Copy / Print Calc'}</b>
                <span class="pill info" style="font-weight:900; font-family:monospace; font-size:12px;">F2</span>
              </div>
              <small class="muted" style="display:block; font-size:12px; line-height:1.4;">
                ${isSi ? 'ෆොටෝකොපි, පරිගණක මුද්‍රණ, ලැමිනේට්, ටයිපින් සහ බයින්ඩින් ක්ෂණික ගණකය විවෘත වේ.' : 'Opens speed calculator for Photocopy, Print, Lamination, Typing & Binding.'}
              </small>
            </div>

            <div style="background:var(--bg-input); padding:14px; border-radius:12px; border:1px solid var(--border);">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                <b style="font-size:13.5px; color:var(--text-main);">${isSi ? 'ක්ෂණික භාණ්ඩයක්' : 'Quick Custom Item'}</b>
                <span class="pill info" style="font-weight:900; font-family:monospace; font-size:12px;">F3</span>
              </div>
              <small class="muted" style="display:block; font-size:12px; line-height:1.4;">
                ${isSi ? 'පද්ධතියේ ලියාපදිංචි නොවූ සෙල්ලම් බඩු, කීටැග් හෝ සේවා ක්ෂණික මිලකට බිල් කරයි.' : 'Instantly bill uncatalogued toys, novelty keytags or custom repair jobs.'}
              </small>
            </div>

            <div style="background:var(--bg-input); padding:14px; border-radius:12px; border:1px solid var(--border);">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                <b style="font-size:13.5px; color:var(--text-main);">${isSi ? 'රිසිට්පත් මුද්‍රණය' : 'Auto Print Toggle'}</b>
                <span class="pill info" style="font-weight:900; font-family:monospace; font-size:12px;">F8</span>
              </div>
              <small class="muted" style="display:block; font-size:12px; line-height:1.4;">
                ${isSi ? 'බිල අවසන් වූ විට ස්වයංක්‍රීයව රිසිට්පත මුද්‍රණය සක්‍රිය (ON) හෝ අක්‍රිය (OFF) කරයි.' : 'Toggle thermal receipt auto-printing ON or OFF directly from register.'}
              </small>
            </div>

            <div style="background:var(--bg-input); padding:14px; border-radius:12px; border:1px solid var(--border);">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                <b style="font-size:13.5px; color:var(--text-main);">${isSi ? 'භාණ්ඩ තෝරාගැනීම' : 'Catalog Navigation'}</b>
                <span class="pill info" style="font-weight:900; font-family:monospace; font-size:12px;">↑ ↓ ← →</span>
              </div>
              <small class="muted" style="display:block; font-size:12px; line-height:1.4;">
                ${isSi ? 'ඊතල යතුරු මගින් භාණ්ඩ කාඩ්පත් තෝරා Enter ඔබා බිලට ඇතුළත් කරන්න.' : 'Navigate product tiles with arrow keys and press Enter to add to cart.'}
              </small>
            </div>

            <div style="background:var(--bg-input); padding:14px; border-radius:12px; border:1px solid var(--border);">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                <b style="font-size:13.5px; color:var(--text-main);">${isSi ? 'වට්ටම සහ ගෙවීම' : 'Discount & Checkout'}</b>
                <span class="pill info" style="font-weight:900; font-family:monospace; font-size:12px;">Shift ➔ Enter</span>
              </div>
              <small class="muted" style="display:block; font-size:12px; line-height:1.4;">
                ${isSi ? 'Shift ඔබා වට්ටම ලියන්න ➔ Enter ඔබා ලැබුණු මුදල ලියා Enter ඔබා බිල අවසන් කරන්න.' : 'Shift moves to Bill Discount ➔ Enter moves to Cash Received ➔ Enter completes checkout.'}
              </small>
            </div>
          </div>
        </div>

        <!-- 2. Selling Physical Items (Books, Stationery, Toys, Keytags) -->
        <div class="table-card" style="padding:22px;">
          <div style="display:flex; align-items:center; gap:10px; margin-bottom:14px;">
            <span style="font-size:22px;">📚</span>
            <h3 style="margin:0; font-size:18px; font-weight:800;">
              ${isSi ? '1. පොත්, ලිපිද්‍රව්‍ය, සෙල්ලම් බඩු සහ කීටැග් අලෙවිය' : '1. Selling Physical Products (Books, Stationery, Toys & Keytags)'}
            </h3>
          </div>
          <div style="font-size:13.5px; line-height:1.65; color:var(--text-dim); display:flex; flex-direction:column; gap:10px;">
            <p style="margin:0;">
              ${isSi 
                ? '<b>බාර්කෝඩ් හෝ ISBN ස්කෑන් කිරීම:</b> ස්කෑනරය මගින් ඕනෑම පොතක ඇති 13-digit ISBN බාර්කෝඩ් එකක් හෝ ඇසුරුමක ඇති බාර්කෝඩ් එකක් ස්කෑන් කළ විට, එය ක්ෂණිකව බිලට එකතු වේ. තනි පෑන්, පැන්සල් හෝ යතුරු රඳවනයක් වැනි බාර්කෝඩ් නොමැති භාණ්ඩ සඳහා නමේ කොටසක් (උදා: Atlas Blue හෝ Keytag) සෙවුම් තීරුවේ ටයිප් කරන්න.' 
                : '<b>Scanning Barcodes & ISBNs:</b> Scan any book ISBN or stationery package with your barcode scanner (shortcut F1). The item is instantly verified and added to the bill. For unboxed pens or keytags, type the item name (e.g. "Atlas Blue" or "Keytag") in the search box.'}
            </p>
            <p style="margin:0;">
              ${isSi 
                ? '<b>ප්‍රමාණය වෙනස් කිරීම සහ වට්ටම්:</b> බිලෙහි ඇති ඕනෑම භාණ්ඩයක ප්‍රමාණය + සහ - බොත්තම් වලින් හෝ අගය කෙලින්ම ලියා වෙනස් කළ හැක. පාරිභෝගිකයාට එක් එක් භාණ්ඩය සඳහා ප්‍රතිශත (Disc %) වට්ටමක් හෝ සම්පූර්ණ බිලටම රුපියල් (LKR) වට්ටමක් (Shift යතුර) ලබා දිය හැක.' 
                : '<b>Adjusting Quantities & Discounts:</b> Adjust line quantities using + / - steppers or direct number input. You can grant a line item percentage discount (Disc %) or an overall net Bill Discount in LKR by pressing Shift.'}
            </p>
            <p style="margin:0;">
              ${isSi 
                ? '<b>ගෙවීම් ක්‍රමය (Cash vs Card):</b> මුදල් ගෙවීමේදී ලැබුණු මුදල ඇතුළත් කළ විට ඉතිරිය (Balance / Change) ස්වයංක්‍රීයව ගණනය වේ. කාඩ්පත් ගෙවීම් සඳහා "Card" බොත්තම තෝරා අයකැමි යන්ත්‍රයෙන් කාඩ්පත ස්වයිප් කර බිල අවසන් කරන්න.' 
                : '<b>Payment Modes:</b> In Cash mode, type the received cash and the system calculates customer balance change. In Card mode, the exact payable total is matched for your POS credit/debit card swipe machine.'}
            </p>
          </div>
        </div>

        <!-- 3. Using the Print & Copy Speed Calculator (F2) -->
        <div class="table-card" style="padding:22px;">
          <div style="display:flex; align-items:center; gap:10px; margin-bottom:14px;">
            <span style="font-size:22px;">🖨️</span>
            <h3 style="margin:0; font-size:18px; font-weight:800;">
              ${isSi ? '2. ෆොටෝකොපි, මුද්‍රණ, ලැමිනේට් සහ ටයිපින් සේවා ගණකය (F2)' : '2. Print, Copy, Laminating & Typing Speed Calculator (F2)'}
            </h3>
          </div>
          <div style="font-size:13.5px; line-height:1.65; color:var(--text-dim); display:flex; flex-direction:column; gap:12px;">
            <p style="margin:0;">
              ${isSi 
                ? 'පාරිභෝගිකයෙකු පිටු 45ක දෙපැත්ත ෆොටෝකොපි හෝ කලර් පිටපත් ලබා ගැනීමට පැමිණි විට හස්තීයව ගණනය කිරීම අවශ්‍ය නොවේ. <b>F2</b> ඔබන්න හෝ POS තිරයේ ඉහළ ඇති <b>"🖨️ Copy / Print (F2)"</b> ඔබන්න.' 
                : 'When a customer brings 45 pages of double-sided photocopy or color printouts, do not calculate manually. Simply press <b>F2</b> or click <b>"🖨️ Copy / Print (F2)"</b> on the POS header.'}
            </p>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(230px, 1fr)); gap:10px;">
              <div style="background:var(--bg-input); padding:12px; border-radius:10px; border:1px solid var(--border);">
                <b style="color:var(--text-main); font-size:12.5px;">📄 ${isSi ? 'ෆොටෝකොපි සහ පරිගණක ප්‍රින්ට්' : 'Photocopy & Document Print'}</b>
                <small class="muted" style="display:block; margin-top:4px; font-size:11.5px;">
                  ${isSi ? 'A4 තනි පැත්ත (රු. 10), දෙපැත්ත (රු. 15), A4 කලර් (රු. 50), A3 B/W (රු. 25), A3 කලර් (රු. 120), USB/Email ප්‍රින්ට් (රු. 15).' : 'A4 1-Side (LKR 10), 2-Sided (LKR 15), A4 Color (LKR 50), A3 B/W (LKR 25), A3 Color (LKR 120), USB/Email Print (LKR 15).'}
                </small>
              </div>
              <div style="background:var(--bg-input); padding:12px; border-radius:10px; border:1px solid var(--border);">
                <b style="color:var(--text-main); font-size:12.5px;">🛡️ ${isSi ? 'ලැමිනේට් සේවා' : 'Lamination Services'}</b>
                <small class="muted" style="display:block; margin-top:4px; font-size:11.5px;">
                  ${isSi ? 'හැඳුනුම්පත් / රියදුරු බලපත්‍ර (රු. 80), A4 සහතිකපත් (රු. 150), A3 පෝස්ටර් (රු. 300).' : 'ID Card / License (LKR 80), A4 Certificate (LKR 150), A3 Poster (LKR 300).'}
                </small>
              </div>
              <div style="background:var(--bg-input); padding:12px; border-radius:10px; border:1px solid var(--border);">
                <b style="color:var(--text-main); font-size:12.5px;">⌨️ ${isSi ? 'ටයිපින් සහ ලේඛන සේවා' : 'Typing & Document Services'}</b>
                <small class="muted" style="display:block; margin-top:4px; font-size:11.5px;">
                  ${isSi ? 'සිංහල ලිපි ටයිප් කිරීම (රු. 200), ඉංග්‍රීසි ගිවිසුම් (රු. 150), CV හැදීම (රු. 500), PDF ස්කෑන් කිරීම (රු. 30).' : 'Sinhala Letter Typing (LKR 200), English Agreement (LKR 150), CV Creation (LKR 500), PDF Scanning (LKR 30).'}
                </small>
              </div>
              <div style="background:var(--bg-input); padding:12px; border-radius:10px; border:1px solid var(--border);">
                <b style="color:var(--text-main); font-size:12.5px;">🌀 ${isSi ? 'පොත් බයින්ඩින්' : 'Book Binding'}</b>
                <small class="muted" style="display:block; margin-top:4px; font-size:11.5px;">
                  ${isSi ? 'ස්පයිරල් බයින්ඩින් කුඩා (රු. 180), ලොකු (රු. 280), ටේප් බයින්ඩින් (රු. 120).' : 'Spiral Binding Small (LKR 180), Large (LKR 280), Tape Binding (LKR 120).'}
                </small>
              </div>
            </div>
            <p style="margin:0;">
              ${isSi 
                ? '<b>තොග සීමා නොමැති වීම (Unlimited Service):</b> ෆොටෝකොපි සහ ටයිපින් වැනි සේවාවන් සඳහා තොග ගණන් (Stock counts) බලපෑමක් නොකරයි. එබැවින් තොග අවසන් වීමක් සිදු නොවන අතර ඕනෑම පිටු ගණනක් ක්ෂණිකව බිල් කළ හැක.' 
                : '<b>Unlimited Service Architecture:</b> Print and typing jobs are configured as Services (IsService = 1) and will never be blocked by zero stock at checkout.'}
            </p>
          </div>
        </div>

        <!-- 4. Quick Custom Items & Barcode Stickers (F3) -->
        <div class="table-card" style="padding:22px;">
          <div style="display:flex; align-items:center; gap:10px; margin-bottom:14px;">
            <span style="font-size:22px;">🏷️</span>
            <h3 style="margin:0; font-size:18px; font-weight:800;">
              ${isSi ? '3. ලියාපදිංචි නොවූ භාණ්ඩ (F3) සහ බාර්කෝඩ් ස්ටිකර් මුද්‍රණය' : '3. Quick Custom Items (F3) & Barcode Label Stickers'}
            </h3>
          </div>
          <div style="font-size:13.5px; line-height:1.65; color:var(--text-dim); display:flex; flex-direction:column; gap:10px;">
            <p style="margin:0;">
              ${isSi 
                ? '<b>ලියාපදිංචි නොවූ භාණ්ඩ විකිණීම (F3):</b> අලුතින් ගෙනා විශේෂිත යතුරු රඳවනයක් හෝ සෙල්ලම් බඩුවක් තවම ඉන්වෙන්ටරියට ඇතුළත් කර නොමැති නම්, <b>F3</b> ඔබා නම, මිල සහ ප්‍රමාණය ලියා එකවර බිලට එක්කරන්න.' 
                : '<b>Open Price / Unlisted Items (F3):</b> When selling a specialty keytag, toy, or custom repair job that isn\'t pre-registered in inventory, press <b>F3</b> to specify the description, price, and quantity directly.'}
            </p>
            <p style="margin:0;">
              ${isSi 
                ? '<b>බාර්කෝඩ් ලේබල් මුද්‍රණය:</b> තොග පිටුවට (Inventory) ගොස් <b>"🏷️ Barcode Labels"</b> ඔබන්න. අවශ්‍ය භාණ්ඩය සහ ස්ටිකර් ගණන තෝරා ලේබල් ප්‍රින්ටරයකින් හෝ සාමාන්‍ය ස්ටිකර් කොළයකින් මුද්‍රණය කර භාණ්ඩවල අලවන්න.' 
                : '<b>Printing Barcode Price Stickers:</b> Open Inventory and click <b>"🏷️ Barcode Labels"</b>. Choose the product and sticker quantity to preview and print clean barcode stickers with your store name, barcode lines, and LKR price.'}
            </p>
            <p style="margin:0;">
              ${isSi 
                ? '<b>ස්වයංක්‍රීය SKU සැකසීම:</b> අලුත් භාණ්ඩයක් ඇතුළත් කිරීමේදී බාර්කෝඩ් එකක් නොමැති නම් <b>"⚡ Auto SKU"</b> ඔබන්න. පද්ධතිය විසින්ම අද්විතීය බාර්කෝඩ් අංකයක් (උදා: BKP-948123) ස්වයංක්‍රීයව සාදයි.' 
                : '<b>Auto SKU Generator:</b> When adding a loose item without a barcode, click <b>"⚡ Auto SKU"</b> to generate a clean barcode identifier (e.g. BKP-XXXXXX).'}
            </p>
          </div>
        </div>

        <!-- 5. Goods Inward (GRN) -->
        <div class="table-card" style="padding:22px;">
          <div style="display:flex; align-items:center; gap:10px; margin-bottom:14px;">
            <span style="font-size:22px;">📦</span>
            <h3 style="margin:0; font-size:18px; font-weight:800;">
              ${isSi ? '4. බෙදාහරින්නන්ගෙන් භාණ්ඩ ලැබීම් සටහන් කිරීම (GRN)' : '4. Stock Inward Receiving (GRN)'}
            </h3>
          </div>
          <div style="font-size:13.5px; line-height:1.65; color:var(--text-dim); display:flex; flex-direction:column; gap:10px;">
            <p style="margin:0;">
              ${isSi 
                ? 'ඇට්ලස්, රිචඩ්, සරසවි හෝ වෙනත් සැපයුම්කරුවන්ගෙන් තොග ලැබුණු විට <b>GRN Receiving</b> පිටුවට ගොස් <b>"+ Receive New GRN"</b> ඔබන්න. සැපයුම්කරුගේ නම, ලැබුණු ප්‍රමාණය සහ මිලදී ගත් ඒකක පිරිවැය (Unit Cost) සටහන් කර සුරකින්න. එමගින් තොග ප්‍රමාණයන් ක්ෂණිකව ඉහළ යයි.' 
                : 'When stock arrives from distributors (Atlas Axillia, Richard Trading, Sarasavi, etc.), navigate to <b>GRN Receiving</b> and click <b>"+ Receive New GRN"</b>. Entering received quantities and unit costs updates stock counts and stores a permanent receiving voucher.'}
            </p>
          </div>
        </div>

        <!-- 6. Daily Reports & Drawer Balancing -->
        <div class="table-card" style="padding:22px;">
          <div style="display:flex; align-items:center; gap:10px; margin-bottom:14px;">
            <span style="font-size:22px;">📊</span>
            <h3 style="margin:0; font-size:18px; font-weight:800;">
              ${isSi ? '5. දෛනික ආදායම් වාර්තා සහ ලාච්චුවේ මුදල් සමථය (Reports)' : '5. Daily Reports & Cash Drawer Balancing'}
            </h3>
          </div>
          <div style="font-size:13.5px; line-height:1.65; color:var(--text-dim); display:flex; flex-direction:column; gap:10px;">
            <p style="margin:0;">
              ${isSi 
                ? 'දවස අවසානයේදී <b>Reports</b> පිටුවට පිවිස දවසේ මුළු ආදායම, නිකුත් කළ බිල්පත් ගණන, මුදල් (Cash) සහ කාඩ්පත් (Card) මගින් ලැබුණු එකතුව පරීක්ෂා කර මුදල් ලාච්චුවේ ඇති මුදල සමඟ සමථයකට පත්කර ගන්න. භාණ්ඩ අනුව වාර්තාවෙන් (Item Sales) වැඩිපුරම අලෙවි වූ පොත් සහ ලිපිද්‍රව්‍ය පිළිබඳ තොරතුරු ලබාගත හැක.' 
                : 'At end of shift, navigate to <b>Reports</b> to review daily revenue, total invoices, and the exact Cash vs Card split to balance against your physical register drawer. The Item Sales report shows the top-selling stationery, books, and total copy pages.'}
            </p>
          </div>
        </div>

      </div>
    </div>
  `;
}

/* Initialize App */
applyStatic();
boot();
