# Amectar BookShop & Service POS Enterprise (Electron + SQL Server)

A modern desktop Point of Sale (POS) designed for **Bookshops, Stationery Stores, Gift & Toy Shops, and Digital Print/Copy Centers**.

## 🚀 Quick Start
1. Install Node 18+ and make sure SQL Server accepts `sa` / TCP on localhost (port 1433).
2. `npm install` then `npm start` (build installer: `npm run dist`).
3. First run auto-creates the `LocalShop` database, tables, and loads the comprehensive Bookshop & Print Services catalog.
4. Default login: **admin / admin123** (Super Admin) — change it immediately in Users.

---

## 📚 Bookshop, Stationery & Service Capabilities

### 1. Dual Product & Service Architecture
* **Physical Products (Tracked Stock & Barcodes):**
  * Books (Novels, Textbooks, Grade 5 / O/L Past Papers, Dictionaries, Story Books).
  * Stationery (Pens, CR Books, Exercise Books, Geometry Sets, Rulers, Adhesives, Paper Reams).
  * Keytags, Small Toys, Party Items & Gift Wrappers.
* **Services & Digital Jobs (Stockless / On-Demand Billing):**
  * Photocopy (A4 / A3, B/W & Color, Single / Double-sided).
  * Computer Document Printouts (USB / Email / Phone).
  * Laminating (ID Card, A4, A3).
  * Typesetting & Document Typing (Sinhala / English Letters, CVs, Exam Papers).
  * Spiral & Tape Document Binding.
  * *Service items are never blocked by zero stock and do not deduct physical inventory.*

### 2. 🖨️ Quick Print & Copy Speed Calculator (`F2`)
* Press **`F2`** or tap the header button on the POS screen:
  * Select preset (A4 B/W 1-side, Double-sided, Color, A3, Lamination, Typing, Binding).
  * Enter or tap page count with quick increment buttons (`+1`, `+5`, `+10`, `+25`, `+50`, `+100`).
  * Live total calculation and customizable unit rate.
  * Instant **"➕ Add to Bill"** with formatted descriptions.

### 3. ⚡ Quick Custom Item / Open Price (`F3`)
* Press **`F3`** to sell unlisted toys, keytags, or custom services on the fly with custom description and price.

### 4. 🏷️ Barcode Generator & Printable Sticker Labels
* Auto-generate clean SKUs (`BKP-XXXXXX`) for barcode-less toys, keytags, and single pens.
* Print multi-label price sticker sheets with barcode stripes, item name, and LKR price directly from Inventory.

### 5. ⚡ Fast Keyboard Cashier Flow
* `F1`: Focus search input or scan 13-digit ISBN / barcode scanner.
* `F2`: Open Copy, Print & Service Calculator.
* `F3`: Open Quick Custom / Open Price Item.
* `↑ ↓ ← →` Arrow Keys: Navigate product tiles in catalog.
* `Enter` on tile: Adds item to bill.
* `Shift`: Advance directly from search or cart to **Bill Discount**.
* `Enter` on Bill Discount: Focuses directly to **Cash Received**.
* `Enter` on Cash Received: Validates payment and completes sale.
* `F8`: Toggle automatic receipt printing ON/OFF.

### 6. 📦 Goods Received Note (GRN) Receiving
* Receive stock from publishers and stationery distributors (e.g. Atlas, Sarasavi, Richard).
* Auto-calculates total cost, line totals, and updates selling prices and stock in real time.

### 7. 🌐 Bilingual & Localization
* 100% bilingual support: English & Sinhala (සිංහල).
* Sri Lankan Rupee (`LKR`) formatting with standard 80mm / 58mm thermal receipts.

