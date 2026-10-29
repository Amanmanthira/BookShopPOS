/* ==========================================================================
   MASTER BOOKSHOP, STATIONERY, TOYS & PRINT SERVICES CATALOG
   Provides intelligent auto-matching, categories, preset items & keywords
   ========================================================================== */

const BOOKSHOP_CATEGORIES = [
  { id: 'Stationery', name: 'Stationery & Office', icon: '✏️', hue: 150 },
  { id: 'Books', name: 'Books & Educational', icon: '📚', hue: 210 },
  { id: 'Toys & Keytags', name: 'Keytags & Toys', icon: '🎁', hue: 35 },
  { id: 'Photocopy & Print', name: 'Photocopy & Printing', icon: '🖨️', hue: 275 },
  { id: 'Lamination & Binding', name: 'Lamination & Binding', icon: '🛡️', hue: 190 },
  { id: 'Typing & Services', name: 'Typing & Doc Services', icon: '⌨️', hue: 330 },
  { id: 'General', name: 'General & Gifts', icon: '📦', hue: 240 }
];

const BOOKSHOP_CATALOG = [
  // --- STATIONERY: PENS, PENCILS & WRITING ---
  {
    name: 'Atlas Chooty Ballpoint Pen (Blue)',
    category: 'Stationery',
    defaultPrice: 40,
    isService: false,
    keywords: ['atlas', 'chooty', 'blue pen', 'ballpoint', 'pen', 'writing', 'panhe'],
    barcode: '8901234001',
    stock: 200
  },
  {
    name: 'Atlas Chooty Ballpoint Pen (Black)',
    category: 'Stationery',
    defaultPrice: 40,
    isService: false,
    keywords: ['atlas', 'chooty', 'black pen', 'ballpoint', 'pen', 'writing'],
    barcode: '8901234002',
    stock: 200
  },
  {
    name: 'Atlas Chooty Ballpoint Pen (Red)',
    category: 'Stationery',
    defaultPrice: 40,
    isService: false,
    keywords: ['atlas', 'chooty', 'red pen', 'ballpoint', 'pen'],
    barcode: '8901234003',
    stock: 100
  },
  {
    name: 'Cello Butterflow Blue Ballpoint Pen',
    category: 'Stationery',
    defaultPrice: 90,
    isService: false,
    keywords: ['cello', 'butterflow', 'smooth pen', 'blue pen'],
    barcode: '8901234005',
    stock: 80
  },
  {
    name: 'Gel Pen 0.5mm (Blue/Black)',
    category: 'Stationery',
    defaultPrice: 120,
    isService: false,
    keywords: ['gel pen', 'roller pen', 'gel', '0.5mm'],
    barcode: '8901234006',
    stock: 60
  },
  {
    name: 'Permanent Marker Pen (Black)',
    category: 'Stationery',
    defaultPrice: 150,
    isService: false,
    keywords: ['permanent marker', 'marker', 'black marker', 'chisel'],
    barcode: '8901234007',
    stock: 50
  },
  {
    name: 'Whiteboard Marker (Blue/Black)',
    category: 'Stationery',
    defaultPrice: 160,
    isService: false,
    keywords: ['whiteboard marker', 'whiteboard pen', 'marker'],
    barcode: '8901234008',
    stock: 50
  },
  {
    name: 'Highlighter Fluorescent Yellow',
    category: 'Stationery',
    defaultPrice: 180,
    isService: false,
    keywords: ['highlighter', 'yellow highlighter', 'fluorescent', 'textmarker'],
    barcode: '8901234009',
    stock: 40
  },
  {
    name: 'Natraj 2B Pencil Pack (10 Pcs)',
    category: 'Stationery',
    defaultPrice: 300,
    isService: false,
    keywords: ['natraj', 'pencil', '2b pencil', 'lead pencil', 'pencils pack'],
    barcode: '8901234020',
    stock: 50
  },
  {
    name: 'Natraj 2B Pencil (Single Piece)',
    category: 'Stationery',
    defaultPrice: 30,
    isService: false,
    keywords: ['natraj', 'pencil', 'lead pencil', 'pencil single'],
    barcode: '8901234021',
    stock: 250
  },
  {
    name: 'Maped Technic Eraser (Small)',
    category: 'Stationery',
    defaultPrice: 25,
    isService: false,
    keywords: ['eraser', 'maped eraser', 'rubber', 'pencil eraser', 'erasers'],
    barcode: '8901234025',
    stock: 180
  },
  {
    name: 'Pencil Sharpener with Container',
    category: 'Stationery',
    defaultPrice: 50,
    isService: false,
    keywords: ['sharpener', 'pencil sharpener', 'cutter'],
    barcode: '8901234026',
    stock: 120
  },
  {
    name: 'Plastic Ruler 30cm (12 Inch)',
    category: 'Stationery',
    defaultPrice: 60,
    isService: false,
    keywords: ['ruler', '30cm ruler', 'foot ruler', 'scale', 'plastic ruler'],
    barcode: '8901234030',
    stock: 100
  },
  {
    name: 'Mathematical Instrument Box (Geometry Set)',
    category: 'Stationery',
    defaultPrice: 450,
    isService: false,
    keywords: ['instrument box', 'geometry box', 'math set', 'compass', 'divider'],
    barcode: '8901234035',
    stock: 40
  },

  // --- STATIONERY: BOOKS & PAPER ---
  {
    name: 'Atlas CR Book 80 Pages Single Rule',
    category: 'Stationery',
    defaultPrice: 180,
    isService: false,
    keywords: ['cr book', '80 pages cr', 'atlas cr', 'single rule cr'],
    barcode: '8901234010',
    stock: 120
  },
  {
    name: 'Atlas CR Book 120 Pages Single Rule',
    category: 'Stationery',
    defaultPrice: 260,
    isService: false,
    keywords: ['cr book', '120 pages cr', 'atlas cr 120', 'single rule'],
    barcode: '8901234011',
    stock: 100
  },
  {
    name: 'Atlas CR Book 160 Pages Single Rule',
    category: 'Stationery',
    defaultPrice: 340,
    isService: false,
    keywords: ['cr book', '160 pages cr', 'atlas cr 160'],
    barcode: '8901234012',
    stock: 90
  },
  {
    name: 'Atlas CR Book 200 Pages Hard Cover',
    category: 'Stationery',
    defaultPrice: 420,
    isService: false,
    keywords: ['cr book', '200 pages', 'hard cover cr', 'thick cr book'],
    barcode: '8901234013',
    stock: 80
  },
  {
    name: 'Exercise Book 80 Pgs Single Rule',
    category: 'Stationery',
    defaultPrice: 110,
    isService: false,
    keywords: ['exercise book', '80 pages single rule', 'school book', 'poth'],
    barcode: '8901234015',
    stock: 150
  },
  {
    name: 'Exercise Book 80 Pgs Square Rule (Maths)',
    category: 'Stationery',
    defaultPrice: 110,
    isService: false,
    keywords: ['square rule', 'exercise book', 'maths book', 'kotu potha'],
    barcode: '8901234016',
    stock: 150
  },
  {
    name: 'Exercise Book 80 Pgs Double Rule',
    category: 'Stationery',
    defaultPrice: 110,
    isService: false,
    keywords: ['double rule', 'exercise book', 'ira dek potha'],
    barcode: '8901234017',
    stock: 100
  },
  {
    name: 'Exercise Book 80 Pgs Blank (Drawing)',
    category: 'Stationery',
    defaultPrice: 110,
    isService: false,
    keywords: ['blank book', 'drawing exercise book', 'plain book'],
    barcode: '8901234018',
    stock: 80
  },
  {
    name: 'Drawing Book 40 Pages A4 Landscape',
    category: 'Stationery',
    defaultPrice: 220,
    isService: false,
    keywords: ['drawing book', 'art book', 'chithra potha', 'a4 drawing'],
    barcode: '8901234019',
    stock: 60
  },
  {
    name: 'A4 Photocopy Paper 80gsm Ream (500 Sheets)',
    category: 'Stationery',
    defaultPrice: 1850,
    isService: false,
    keywords: ['a4 paper ream', 'ream', 'photocopy paper', '80gsm', '500 sheets'],
    barcode: '8901234050',
    stock: 35
  },
  {
    name: 'A4 Photocopy Paper 70gsm Ream (500 Sheets)',
    category: 'Stationery',
    defaultPrice: 1650,
    isService: false,
    keywords: ['a4 paper 70gsm', 'paper ream', '70gsm paper'],
    barcode: '8901234051',
    stock: 30
  },
  {
    name: 'Color A4 Sheets Pack (50 Assorted Colors)',
    category: 'Stationery',
    defaultPrice: 450,
    isService: false,
    keywords: ['color a4', 'colored paper', 'color sheets', 'craft paper'],
    barcode: '8901234052',
    stock: 40
  },
  {
    name: 'White Bristol Board Sheet (Full Size)',
    category: 'Stationery',
    defaultPrice: 80,
    isService: false,
    keywords: ['bristol board', 'white board paper', 'poster board', 'bristol'],
    barcode: '8901234053',
    stock: 80
  },

  // --- STATIONERY: OFFICE, ADHESIVES & FILES ---
  {
    name: 'UHU Glue Stick 8.2g',
    category: 'Stationery',
    defaultPrice: 190,
    isService: false,
    keywords: ['uhu', 'glue stick', 'glue', 'uhu stick', 'adhesive'],
    barcode: '8901234040',
    stock: 70
  },
  {
    name: 'Fevicol MR Squeeze Bottle 50g',
    category: 'Stationery',
    defaultPrice: 140,
    isService: false,
    keywords: ['fevicol', 'white glue', 'liquid glue', 'pasting glue'],
    barcode: '8901234041',
    stock: 60
  },
  {
    name: 'Clear Tape / Cellotape 1/2 Inch',
    category: 'Stationery',
    defaultPrice: 70,
    isService: false,
    keywords: ['cellotape', 'clear tape', 'adhesive tape', 'small tape'],
    barcode: '8901234042',
    stock: 120
  },
  {
    name: 'Packaging Brown Tape 2 Inch',
    category: 'Stationery',
    defaultPrice: 280,
    isService: false,
    keywords: ['brown tape', 'packaging tape', 'box tape', 'carton tape'],
    barcode: '8901234043',
    stock: 40
  },
  {
    name: 'Stapler Machine No. 10 with Pins',
    category: 'Stationery',
    defaultPrice: 420,
    isService: false,
    keywords: ['stapler', 'stapler machine', 'no 10 stapler', 'stapler pins'],
    barcode: '8901234044',
    stock: 35
  },
  {
    name: 'Stapler Pins Box No. 10',
    category: 'Stationery',
    defaultPrice: 90,
    isService: false,
    keywords: ['stapler pins', 'pins box', 'staples', 'stapler katu'],
    barcode: '8901234045',
    stock: 100
  },
  {
    name: 'Standard Office Paper Scissors',
    category: 'Stationery',
    defaultPrice: 220,
    isService: false,
    keywords: ['scissors', 'paper scissors', 'cutter', 'gathura'],
    barcode: '8901234046',
    stock: 50
  },
  {
    name: 'Paper Cutter Knife (Utility Knife)',
    category: 'Stationery',
    defaultPrice: 120,
    isService: false,
    keywords: ['cutter', 'utility knife', 'blade', 'box cutter', 'paper knife'],
    barcode: '8901234047',
    stock: 60
  },
  {
    name: 'Standard Document Box File (A4)',
    category: 'Stationery',
    defaultPrice: 380,
    isService: false,
    keywords: ['box file', 'office file', 'lever arch file', 'document file'],
    barcode: '8901234060',
    stock: 50
  },
  {
    name: 'Clear Display Folder 20 Pockets',
    category: 'Stationery',
    defaultPrice: 290,
    isService: false,
    keywords: ['clear folder', 'display file', '20 pockets', 'pocket file'],
    barcode: '8901234061',
    stock: 45
  },
  {
    name: 'Document Clip File / Flat File',
    category: 'Stationery',
    defaultPrice: 90,
    isService: false,
    keywords: ['clip file', 'flat file', 'paper file', 'folder'],
    barcode: '8901234062',
    stock: 100
  },

  // --- BOOKS & EDUCATIONAL ---
  {
    name: 'Grade 5 Scholarship Model Exam Papers',
    category: 'Books',
    defaultPrice: 450,
    isService: false,
    keywords: ['grade 5', 'scholarship', 'shishyathwaya', 'model papers', 'past papers'],
    barcode: '9789551234011',
    stock: 50
  },
  {
    name: 'O/L Mathematics 10-Year Past Papers',
    category: 'Books',
    defaultPrice: 650,
    isService: false,
    keywords: ['o/l maths', 'mathematics past papers', 'o level maths', 'ganithaya'],
    barcode: '9789551234028',
    stock: 35
  },
  {
    name: 'O/L Science Past Papers & Answers',
    category: 'Books',
    defaultPrice: 680,
    isService: false,
    keywords: ['o/l science', 'science past papers', 'vidyava', 'o level science'],
    barcode: '9789551234035',
    stock: 35
  },
  {
    name: 'English-Sinhala Pocket Dictionary (Malalasekera)',
    category: 'Books',
    defaultPrice: 550,
    isService: false,
    keywords: ['dictionary', 'english sinhala dictionary', 'malalasekera', 'shabdakoshaya'],
    barcode: '9789551234042',
    stock: 25
  },
  {
    name: 'Sinhala Children Illustrated Story Book',
    category: 'Books',
    defaultPrice: 250,
    isService: false,
    keywords: ['story book', 'children book', 'sinhala katha', 'kids reading'],
    barcode: '9789551234059',
    stock: 45
  },
  {
    name: 'English Picture Word Book for Kids',
    category: 'Books',
    defaultPrice: 320,
    isService: false,
    keywords: ['word book', 'picture book', 'early learning', 'preschool book'],
    barcode: '9789551234066',
    stock: 30
  },
  {
    name: 'Popular Sinhala Novel (Paperback)',
    category: 'Books',
    defaultPrice: 500,
    isService: false,
    keywords: ['novel', 'sinhala novel', 'nawa katha', 'fiction book'],
    barcode: '9789551234073',
    stock: 20
  },

  // --- KEYTAGS, TOYS & GIFTS ---
  {
    name: 'Cartoon Anime Rubber Keytag',
    category: 'Toys & Keytags',
    defaultPrice: 150,
    isService: false,
    keywords: ['keytag', 'rubber keytag', 'anime keychain', 'character keytag', 'keyring'],
    barcode: 'KTG-001',
    stock: 80
  },
  {
    name: 'Metal Vehicle / Car Keytag',
    category: 'Toys & Keytags',
    defaultPrice: 220,
    isService: false,
    keywords: ['metal keytag', 'car keytag', 'luxury keytag', 'bike keytag', 'keychain'],
    barcode: 'KTG-002',
    stock: 60
  },
  {
    name: 'Personalized Photo / Name Keytag',
    category: 'Toys & Keytags',
    defaultPrice: 180,
    isService: false,
    keywords: ['acrylic keytag', 'name keytag', 'photo keytag'],
    barcode: 'KTG-003',
    stock: 50
  },
  {
    name: 'Die-Cast Mini Metal Pullback Toy Car',
    category: 'Toys & Keytags',
    defaultPrice: 350,
    isService: false,
    keywords: ['toy car', 'diecast car', 'pullback car', 'mini vehicle', 'small toy'],
    barcode: 'TOY-001',
    stock: 40
  },
  {
    name: '3x3 Speed Magic Cube / Rubik Cube',
    category: 'Toys & Keytags',
    defaultPrice: 480,
    isService: false,
    keywords: ['rubik', 'cube', 'rubiks cube', 'magic cube', 'speed cube', 'puzzle'],
    barcode: 'TOY-002',
    stock: 30
  },
  {
    name: 'Bubble Wand Blower (Soap Bubbles)',
    category: 'Toys & Keytags',
    defaultPrice: 120,
    isService: false,
    keywords: ['bubble wand', 'bubbles', 'soap bubble', 'kids bubble toy'],
    barcode: 'TOY-003',
    stock: 60
  },
  {
    name: 'Pop-It Silicone Fidget Toy',
    category: 'Toys & Keytags',
    defaultPrice: 280,
    isService: false,
    keywords: ['pop it', 'fidget toy', 'sensory toy', 'popit'],
    barcode: 'TOY-004',
    stock: 35
  },
  {
    name: 'Mini Water Gun Pistol',
    category: 'Toys & Keytags',
    defaultPrice: 220,
    isService: false,
    keywords: ['water gun', 'squirt gun', 'mini pistol', 'summer toy'],
    barcode: 'TOY-005',
    stock: 40
  },
  {
    name: 'Decorative Gift Wrapping Sheet (Assorted)',
    category: 'Toys & Keytags',
    defaultPrice: 50,
    isService: false,
    keywords: ['gift wrap', 'wrapping paper', 'birthday wrap', 'gift sheet'],
    barcode: 'GFT-001',
    stock: 150
  },
  {
    name: 'Glitter Gift Ribbon Bow (Pack of 5)',
    category: 'Toys & Keytags',
    defaultPrice: 120,
    isService: false,
    keywords: ['gift ribbon', 'ribbon bow', 'gift decor', 'ribbon'],
    barcode: 'GFT-002',
    stock: 60
  },
  {
    name: 'Birthday Greeting Card with Envelope',
    category: 'Toys & Keytags',
    defaultPrice: 180,
    isService: false,
    keywords: ['greeting card', 'birthday card', 'wish card', 'subapathum'],
    barcode: 'GFT-003',
    stock: 75
  },

  // --- PHOTOCOPY & PRINTING SERVICES (IsService = 1) ---
  {
    name: 'Photocopy A4 B/W (Single Sided)',
    category: 'Photocopy & Print',
    defaultPrice: 10,
    isService: true,
    keywords: ['photocopy a4', 'a4 photocopy', 'xerox', 'b/w copy', 'single side copy', 'copy'],
    barcode: 'SRV-PC-A4S',
    stock: 0
  },
  {
    name: 'Photocopy A4 B/W (Double Sided)',
    category: 'Photocopy & Print',
    defaultPrice: 15,
    isService: true,
    keywords: ['photocopy double sided', 'both sides copy', 'a4 double side', '2 side copy'],
    barcode: 'SRV-PC-A4D',
    stock: 0
  },
  {
    name: 'Photocopy A3 B/W (Large Sheet)',
    category: 'Photocopy & Print',
    defaultPrice: 25,
    isService: true,
    keywords: ['photocopy a3', 'a3 copy', 'a3 xerox', 'large copy'],
    barcode: 'SRV-PC-A3',
    stock: 0
  },
  {
    name: 'Color Photocopy / Print A4 (Text & Graphics)',
    category: 'Photocopy & Print',
    defaultPrice: 50,
    isService: true,
    keywords: ['color copy', 'color photocopy', 'color print a4', 'a4 color'],
    barcode: 'SRV-PR-A4C',
    stock: 0
  },
  {
    name: 'Color Photocopy / Print A3 (Full Page)',
    category: 'Photocopy & Print',
    defaultPrice: 120,
    isService: true,
    keywords: ['color print a3', 'a3 color', 'a3 color photocopy'],
    barcode: 'SRV-PR-A3C',
    stock: 0
  },
  {
    name: 'Computer Document Print A4 B/W (USB / Email / Phone)',
    category: 'Photocopy & Print',
    defaultPrice: 15,
    isService: true,
    keywords: ['printout', 'computer print', 'usb print', 'pdf print', 'document print'],
    barcode: 'SRV-PR-A4BW',
    stock: 0
  },
  {
    name: 'Glossy Photo Print 4x6 / Passport Size (4 Photos)',
    category: 'Photocopy & Print',
    defaultPrice: 200,
    isService: true,
    keywords: ['passport photo', 'photo print', '4x6 print', 'glossy photo', 'photograph'],
    barcode: 'SRV-PR-PHOTO',
    stock: 0
  },

  // --- LAMINATION & BINDING SERVICES (IsService = 1) ---
  {
    name: 'ID Card / Driving License Lamination',
    category: 'Lamination & Binding',
    defaultPrice: 80,
    isService: true,
    keywords: ['id lamination', 'card lamination', 'nic lamination', 'license lamination'],
    barcode: 'SRV-LAM-ID',
    stock: 0
  },
  {
    name: 'A4 Document / Certificate Lamination',
    category: 'Lamination & Binding',
    defaultPrice: 150,
    isService: true,
    keywords: ['a4 lamination', 'certificate lamination', 'laminate document', 'lamination'],
    barcode: 'SRV-LAM-A4',
    stock: 0
  },
  {
    name: 'A3 Document / Poster Lamination',
    category: 'Lamination & Binding',
    defaultPrice: 300,
    isService: true,
    keywords: ['a3 lamination', 'poster lamination', 'large lamination'],
    barcode: 'SRV-LAM-A3',
    stock: 0
  },
  {
    name: 'Spiral / Comb Binding Small (Up to 50 Pages)',
    category: 'Lamination & Binding',
    defaultPrice: 180,
    isService: true,
    keywords: ['spiral binding', 'comb binding', 'book binding', 'small binding'],
    barcode: 'SRV-BND-SM',
    stock: 0
  },
  {
    name: 'Spiral / Comb Binding Large (50 to 150 Pages)',
    category: 'Lamination & Binding',
    defaultPrice: 280,
    isService: true,
    keywords: ['spiral binding large', 'thick book binding', 'large binding'],
    barcode: 'SRV-BND-LG',
    stock: 0
  },
  {
    name: 'Tape / Strip Document Binding',
    category: 'Lamination & Binding',
    defaultPrice: 120,
    isService: true,
    keywords: ['tape binding', 'strip binding', 'folder binding'],
    barcode: 'SRV-BND-TP',
    stock: 0
  },

  // --- TYPING & DIGITAL DOCUMENT SERVICES (IsService = 1) ---
  {
    name: 'Sinhala Letter / Document Typing (Per Page)',
    category: 'Typing & Services',
    defaultPrice: 200,
    isService: true,
    keywords: ['sinhala typing', 'letter typing', 'type setting', 'typing sinhala'],
    barcode: 'SRV-TYP-SIN',
    stock: 0
  },
  {
    name: 'English Letter / Agreement Typing (Per Page)',
    category: 'Typing & Services',
    defaultPrice: 150,
    isService: true,
    keywords: ['english typing', 'typewriting', 'agreement typing', 'letter typing'],
    barcode: 'SRV-TYP-ENG',
    stock: 0
  },
  {
    name: 'Professional CV / Resume Creation & Formatting',
    category: 'Typing & Services',
    defaultPrice: 500,
    isService: true,
    keywords: ['cv typing', 'resume formatting', 'job cv', 'cv creation', 'curriculum vitae'],
    barcode: 'SRV-TYP-CV',
    stock: 0
  },
  {
    name: 'Document Scanning to PDF / Email (Per Page)',
    category: 'Typing & Services',
    defaultPrice: 30,
    isService: true,
    keywords: ['scan', 'scanning', 'pdf scan', 'email document', 'scanner'],
    barcode: 'SRV-SCN-PDF',
    stock: 0
  },
  {
    name: 'Exam Paper / Booklet Typesetting (Per Page)',
    category: 'Typing & Services',
    defaultPrice: 180,
    isService: true,
    keywords: ['typesetting', 'exam paper typing', 'book formatting', 'type sting'],
    barcode: 'SRV-TYP-SET',
    stock: 0
  },
  {
    name: 'General Custom Service / Open Job',
    category: 'Typing & Services',
    defaultPrice: 100,
    isService: true,
    keywords: ['custom service', 'other service', 'open service', 'miscellaneous'],
    barcode: 'SRV-CUSTOM',
    stock: 0
  }
];

/* Helper: Levenshtein distance for fuzzy matching typos */
function levenshteinDistance(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

/* Helper: Intelligent matching for Bookshop catalog */
function matchBookshopCatalogItem(query) {
  if (!query || typeof query !== 'string') return null;
  const qClean = query.toLowerCase().trim().replace(/[^a-z0-9\s]/g, ' ');
  const tokens = qClean.split(/\s+/).filter(w => w.length >= 2);
  if (!tokens.length) return null;

  let bestMatch = null;
  let highestScore = 0;

  for (const item of BOOKSHOP_CATALOG) {
    let score = 0;
    const nameLower = item.name.toLowerCase();

    if (nameLower.includes(qClean)) score += 60;

    for (const kw of item.keywords) {
      if (kw === qClean) {
        score += 80;
      } else if (qClean.includes(kw)) {
        score += 50;
      } else if (kw.includes(qClean)) {
        score += 40;
      }

      for (const t of tokens) {
        if (kw === t) {
          score += 35;
        } else if (kw.includes(t)) {
          score += 20;
        }
      }
    }

    // Fuzzy check
    for (const kw of item.keywords) {
      for (const t of tokens) {
        if (Math.abs(kw.length - t.length) <= 2) {
          const dist = levenshteinDistance(kw, t);
          if (dist === 1) score += 30;
          else if (dist === 2 && t.length >= 5) score += 15;
        }
      }
    }

    if (score > highestScore && score >= 35) {
      highestScore = score;
      bestMatch = item;
    }
  }

  return bestMatch;
}

// Global alias for compatibility
const matchFoodCatalogItem = matchBookshopCatalogItem;

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    BOOKSHOP_CATEGORIES,
    BOOKSHOP_CATALOG,
    matchBookshopCatalogItem,
    matchFoodCatalogItem
  };
}
