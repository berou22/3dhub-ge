/* ── 3DHUB.GE — CORE JS ── */

/* ── TRANSLATIONS ── */
const LANG = {
  ka: {
    promo: 'უფასო მიტანა თბილისში ₾300-ზე მეტი შეკვეთისთვის',
    promoLink: 'შეძენა →',
    navPrinters: 'პრინტერები', navFilament: 'ფილამენტი', navAcc: 'აქსესუარები',
    navServices: 'სერვისები', navBlog: 'ბლოგი', navSupport: 'მხარდაჭერა',
    login: 'შესვლა', search: 'ძებნა',
    heroBadge: 'Bambu Lab & Creality — ოფიციალური დილერი',
    heroH1: '3D ბეჭდვა.<br>ახალი <span class="accent">შესაძლებლობები</span><br>საქართველოში.',
    heroP: 'პრინტერები, ფილამენტი, აქსესუარები და 3D ბეჭდვის სერვისი. მიტანა მთელ საქართველოში.',
    heroBtn1: '3D პრინტერის ყიდვა', heroBtn2: '3D ბეჭდვის შეკვეთა', heroBtn3: 'კონსულტაცია',
    statProd: 'პოზიცია კატალოგში', statOrders: 'შეკვეთა შესრულებული', statYears: 'წელი ბაზარზე', statRating: 'საშუალო შეფასება',
    catLabel: 'კატალოგი', catTitle: 'კატეგორიები', catSub: 'ყველაფერი 3D ბეჭდვისთვის ერთ ადგილას',
    cat1: '3D პრინტერები', cat2: 'ფილამენტი', cat3: 'სათ. ნაწილები', cat4: 'აქსესუარები', cat5: '3D ბეჭდვა', cat6: '3D სკანირება',
    topLabel: 'ტოპ გაყიდვები', topTitle: 'პოპულარული პროდუქტები', topSub: 'ყველაზე მოთხოვნადი მოდელები ახლა',
    buyBtn: 'ყიდვა', quickBuy: '1 დაწკაპუნებით', addCart: 'კალათაში', toCart: 'კალათა',
    inStock: 'მარაგშია', outStock: 'ამოიწურა', preorder: 'წინასწარ შეკვეთა',
    badgeNew: 'სიახლე', badgeHot: 'ჰიტი', badgeSale: 'ფასდაკლება',
    cmpLabel: 'შედარება', cmpTitle: 'ტოპ მოდელები 2025', cmpSub: 'აირჩიეთ პრინტერი თქვენი ამოცანებისთვის',
    whyLabel: 'რატომ ჩვენ', whyTitle: 'ჩვენი უპირატესობები',
    b1t: '12 თვის გარანტია', b1d: 'ოფიციალური გარანტია ყველა პროდუქტზე',
    b2t: 'კონსულტაცია', b2d: 'ვეხმარებით სწორი არჩევანის გაკეთებაში',
    b3t: 'სწრაფი მიტანა', b3d: '1–3 დღე მთელ საქართველოში',
    b4t: 'სერვის ცენტრი', b4d: 'სარემონტო სერვისი თბილისში',
    b5t: 'დაყენება', b5d: 'პირველი გაშვება და სწავლება',
    svcLabel: 'სერვისები', svcTitle: '3D სერვისები', svcSub: 'ვბეჭდავთ, ვსკანირებთ და ვქმნით მოდელებს',
    s1t: '3D ბეჭდვა შეკვეთაზე', s1d: 'ნებისმიერი მოდელი: პროტოტიპები, დეტალები, სუვენირები.', s1l: 'შეკვეთა →',
    s2t: '3D სკანირება', s2d: 'ობიექტების ციფრიზაცია reverse engineering-ისთვის.', s2l: 'გაგება →',
    s3t: '3D მოდელირება', s3d: 'ვქმნით 3D მოდელებს ნახაზებიდან ან ფოტოდან.', s3l: 'განაცხადი →',
    s4t: 'სერვისი და რემონტი', s4d: 'ნებისმიერი 3D პრინტერის შეკეთება. ოსტატის გამოძახება.', s4l: 'ჩაწერა →',
    rvLabel: 'მიმოხილვები', rvTitle: 'კლიენტები ჩვენს შესახებ',
    faqLabel: 'კითხვები', faqTitle: 'ხშირი კითხვები',
    ctaTitle: 'დაგვიკავშირდით', ctaSub: 'სპეციალისტი გიპასუხებთ 15 წუთში', ctaBtn: 'გაგზავნა',
    ctaInput: 'ტელეფონი ან ელ-ფოსტა', ctaLabel: 'კონსულტაცია',
    fc1: 'კატალოგი', fc2: 'სერვისები', fc3: 'კომპანია',
    footerDesc: '3D პრინტერების, ფილამენტის და 3D ბეჭდვის სერვისების ონლაინ მაღაზია საქართველოში.',
    footerCopy: '© 2025 3DHub.ge — ყველა უფლება დაცულია',
    catPageTitle: 'კატალოგი',
    filterTitle: 'ფილტრი', filterBrand: 'ბრენდი', filterPrice: 'ფასი', filterType: 'ტიპი', filterStock: 'მარაგი',
    filterInStock: 'მარაგშია', filterAll: 'ყველა', clearFilters: 'გასუფთავება',
    sortDefault: 'შერჩევით', sortPriceAsc: 'ფასი: ზრდადი', sortPriceDesc: 'ფასი: კლებადი', sortNew: 'სიახლეები',
    resultsFound: 'ნაპოვნია', results: 'პროდუქტი',
    cartTitle: 'კალათა', cartEmpty: 'კალათა ცარიელია', cartEmptyDesc: 'დაამატეთ პროდუქტები კატალოგიდან',
    cartTotal: 'სულ', cartDelivery: 'მიტანა', cartFree: 'უფასო', cartPromo: 'პრომო კოდი',
    cartPromoApply: 'გამოყენება', checkout: 'შეძენა',
    checkoutTitle: 'შეკვეთის გაფორმება',
    orderPlaced: 'შეკვეთა მიღებულია! მადლობა.',
    addedToCart: 'კალათაში დაემატა',
    contactTitle: 'კონტაქტი',
    supportTitle: 'მხარდაჭერა',
    serviceTitle: '3D სერვისები',
    uploadFile: 'ფაილის ატვირთვა', uploadDrag: 'ან ჩააგდეთ ფაილი', uploadFormats: 'STL, STEP, OBJ, ZIP',
    qty: 'რაოდენობა', remove: 'წაშლა',
    specArea: 'ბეჭდვის არე', specSpeed: 'სიჩქარე', specDia: 'დიამეტრი', specMat: 'მასალა',
    tabDesc: 'აღწერა', tabSpecs: 'მახასიათებლები', tabReviews: 'მიმოხილვები', tabFaq: 'FAQ',
    delivery: 'მიტანა', warranty: 'გარანტია', guarantee: '12 თვე',
    similar: 'მსგავსი პროდუქტები',
    to: 'დან',
    adminTitle: 'ადმინ პანელი',
    ordersLabel: 'შეკვეთები', productsLabel: 'პროდუქტები', customersLabel: 'კლიენტები',
    statsLabel: 'სტატისტიკა', settingsLabel: 'პარამეტრები',
    orderNum: '№', orderDate: 'თარიღი', orderClient: 'კლიენტი', orderTotal: 'თანხა', orderStatus: 'სტატუსი', orderActions: 'მოქმედება',
    statusNew: 'ახალი', statusPaid: 'გადახდილი', statusShipped: 'გაგზავნილი', statusDone: 'შესრულდა', statusCancel: 'გაუქმდა',
    addProduct: 'პროდუქტის დამატება', editProduct: 'რედაქტირება', deleteProduct: 'წაშლა',
    save: 'შენახვა', cancel: 'გაუქმება', close: 'დახურვა',
    searchPlaceholder: 'ძებნა...',
  },
  en: {
    promo: 'Free delivery in Tbilisi for orders over ₾300',
    promoLink: 'Shop now →',
    navPrinters: 'Printers', navFilament: 'Filament', navAcc: 'Accessories',
    navServices: 'Services', navBlog: 'Blog', navSupport: 'Support',
    login: 'Sign in', search: 'Search',
    heroBadge: 'Bambu Lab & Creality — Official Dealer',
    heroH1: '3D printing.<br>New <span class="accent">possibilities</span><br>in Georgia.',
    heroP: 'Printers, filament, accessories and 3D printing services. Delivery across Georgia.',
    heroBtn1: 'Buy a 3D printer', heroBtn2: 'Order 3D printing', heroBtn3: 'Get consultation',
    statProd: 'Products in catalog', statOrders: 'Orders completed', statYears: 'years on market', statRating: 'Average rating',
    catLabel: 'Catalog', catTitle: 'Categories', catSub: 'Everything for 3D printing in one place',
    cat1: '3D Printers', cat2: 'Filament', cat3: 'Spare Parts', cat4: 'Accessories', cat5: '3D Printing', cat6: '3D Scanning',
    topLabel: 'Top sellers', topTitle: 'Popular products', topSub: 'Most in-demand models right now',
    buyBtn: 'Buy now', quickBuy: '1-click buy', addCart: 'Add to cart', toCart: 'Cart',
    inStock: 'In stock', outStock: 'Out of stock', preorder: 'Pre-order',
    badgeNew: 'New', badgeHot: 'Best seller', badgeSale: 'Sale',
    cmpLabel: 'Compare', cmpTitle: 'Top models 2025', cmpSub: 'Choose the right printer for your needs',
    whyLabel: 'Why us', whyTitle: 'Our advantages',
    b1t: '12-month warranty', b1d: 'Official warranty on all products',
    b2t: 'Consultation', b2d: 'We help you choose and set up equipment',
    b3t: 'Fast delivery', b3d: '1–3 days across all of Georgia',
    b4t: 'Service center', b4d: 'Own repair center in Tbilisi',
    b5t: 'Setup help', b5d: 'First launch assistance and training',
    svcLabel: 'Services', svcTitle: '3D Services', svcSub: 'We print, scan and model for you',
    s1t: '3D printing on demand', s1d: 'Any model: prototypes, parts, decor, souvenirs.', s1l: 'Order →',
    s2t: '3D scanning', s2d: 'Digitizing objects for reverse engineering or 3D modeling.', s2l: 'Learn more →',
    s3t: '3D modeling', s3d: 'We create 3D models from drawings, photos or descriptions.', s3l: 'Request →',
    s4t: 'Service & repair', s4d: 'Repair of any 3D printer. Home visit in Tbilisi.', s4l: 'Book →',
    rvLabel: 'Reviews', rvTitle: 'What clients say',
    faqLabel: 'FAQ', faqTitle: 'Frequently asked questions',
    ctaTitle: 'Get in touch', ctaSub: 'Our specialist will reply within 15 minutes', ctaBtn: 'Send',
    ctaInput: 'Phone or email', ctaLabel: 'Consultation',
    fc1: 'Catalog', fc2: 'Services', fc3: 'Company',
    footerDesc: 'Online store for 3D printers, filament and 3D printing services in Georgia.',
    footerCopy: '© 2025 3DHub.ge — All rights reserved',
    catPageTitle: 'Catalog',
    filterTitle: 'Filters', filterBrand: 'Brand', filterPrice: 'Price', filterType: 'Type', filterStock: 'Availability',
    filterInStock: 'In stock only', filterAll: 'All', clearFilters: 'Clear filters',
    sortDefault: 'Default', sortPriceAsc: 'Price: low to high', sortPriceDesc: 'Price: high to low', sortNew: 'Newest first',
    resultsFound: 'Found', results: 'products',
    cartTitle: 'Cart', cartEmpty: 'Your cart is empty', cartEmptyDesc: 'Add products from the catalog',
    cartTotal: 'Total', cartDelivery: 'Delivery', cartFree: 'Free', cartPromo: 'Promo code',
    cartPromoApply: 'Apply', checkout: 'Checkout',
    checkoutTitle: 'Checkout',
    orderPlaced: 'Order placed! Thank you.',
    addedToCart: 'Added to cart',
    contactTitle: 'Contact',
    supportTitle: 'Support',
    serviceTitle: '3D Services',
    uploadFile: 'Upload file', uploadDrag: 'or drag and drop', uploadFormats: 'STL, STEP, OBJ, ZIP',
    qty: 'Quantity', remove: 'Remove',
    specArea: 'Print area', specSpeed: 'Speed', specDia: 'Diameter', specMat: 'Material',
    tabDesc: 'Description', tabSpecs: 'Specs', tabReviews: 'Reviews', tabFaq: 'FAQ',
    delivery: 'Delivery', warranty: 'Warranty', guarantee: '12 months',
    similar: 'Similar products',
    to: 'to',
    adminTitle: 'Admin Panel',
    ordersLabel: 'Orders', productsLabel: 'Products', customersLabel: 'Customers',
    statsLabel: 'Statistics', settingsLabel: 'Settings',
    orderNum: '#', orderDate: 'Date', orderClient: 'Client', orderTotal: 'Amount', orderStatus: 'Status', orderActions: 'Actions',
    statusNew: 'New', statusPaid: 'Paid', statusShipped: 'Shipped', statusDone: 'Completed', statusCancel: 'Cancelled',
    addProduct: 'Add product', editProduct: 'Edit', deleteProduct: 'Delete',
    save: 'Save', cancel: 'Cancel', close: 'Close',
    searchPlaceholder: 'Search...',
  }
};

/* ── STATE ── */
const state = {
  lang: localStorage.getItem('lang') || 'ka',
  cart: JSON.parse(localStorage.getItem('cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('wishlist') || '[]'),
  user: JSON.parse(localStorage.getItem('user') || 'null'),
};

const t = () => LANG[state.lang];

function setLang(lang) {
  state.lang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  renderPage();
}

/* ── CART ── */
function saveCart() { localStorage.setItem('cart', JSON.stringify(state.cart)); }
function getCartCount() { return state.cart.reduce((s, i) => s + i.qty, 0); }
function getCartTotal() { return state.cart.reduce((s, i) => s + i.price * i.qty, 0); }

function addToCart(product) {
  const existing = state.cart.find(i => i.id === product.id);
  if (existing) { existing.qty++; }
  else { state.cart.push({ ...product, qty: 1 }); }
  saveCart();
  updateCartCount();
  showToast(t().addedToCart + ': ' + product.name, 'success');
}

function removeFromCart(id) {
  state.cart = state.cart.filter(i => i.id !== id);
  saveCart();
  updateCartCount();
}

function updateCartQty(id, qty) {
  const item = state.cart.find(i => i.id === id);
  if (item) { item.qty = Math.max(1, qty); }
  saveCart();
}

function updateCartCount() {
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = getCartCount();
    el.style.display = getCartCount() > 0 ? 'flex' : 'none';
  });
}

/* ── WISHLIST ── */
function saveWishlist() { localStorage.setItem('wishlist', JSON.stringify(state.wishlist)); }
function toggleWishlist(id) {
  const idx = state.wishlist.indexOf(id);
  if (idx > -1) { state.wishlist.splice(idx, 1); }
  else { state.wishlist.push(id); }
  saveWishlist();
}
function isWishlisted(id) { return state.wishlist.includes(id); }

/* ── PRODUCTS DATA ── */
const PRODUCTS = [
  { id: 1, brand: 'Bambu Lab', name: 'Bambu Lab X1 Carbon Combo', price: 3490, oldPrice: 3890, badge: 'hot', category: 'printers', type: 'CoreXY', area: '256×256×256mm', speed: '600mm/s', ams: true, camera: true, enclosed: true, inStock: true, rating: 4.9, reviews: 48, icon: '🖨️', desc_ka: 'პროფესიონალური CoreXY 3D პრინტერი LiDAR სკანერით, AI ხარვეზების დეტექციით და AMS კომბოთი მრავალფეროვანი ბეჭდვისთვის. შესანიშნავია სტუდიებისთვის და სერიოზული ენთუზიასტებისთვის.', desc_en: 'Professional CoreXY 3D printer with LiDAR scanner, AI failure detection and AMS Combo for multi-color printing. Perfect for studios and serious enthusiasts.' },
  { id: 2, brand: 'Bambu Lab', name: 'Bambu Lab P1S', price: 2190, badge: 'new', category: 'printers', type: 'CoreXY', area: '256×256×256mm', speed: '500mm/s', ams: true, camera: true, enclosed: true, inStock: true, rating: 4.8, reviews: 31, icon: '🖨️', desc_ka: 'სწრაფი და საიმედო CoreXY პრინტერი დახურული კამერით. ბეჭდავს PLA, PETG, ABS, ASA, PA, PC მასალებს. AMS-სთან თავსებადია.', desc_en: 'Fast and reliable CoreXY printer with enclosed chamber. Prints PLA, PETG, ABS, ASA, PA, PC materials. Compatible with AMS.' },
  { id: 3, brand: 'Bambu Lab', name: 'Bambu Lab A1 Mini Combo', price: 1090, badge: 'sale', category: 'printers', type: 'Bedslinger', area: '180×180×180mm', speed: '500mm/s', ams: true, camera: true, enclosed: false, inStock: true, rating: 4.7, reviews: 62, icon: '🖨️', desc_ka: 'კომპაქტური და ხელმისაწვდომი პრინტერი AMS Lite-ით 4 ფერის ბეჭდვისთვის. შესანიშნავი დამწყებებისა და სახლის გამოყენებისთვის.', desc_en: 'Compact and affordable printer with AMS Lite for 4-color printing. Great for beginners and home use.' },
  { id: 4, brand: 'Creality', name: 'Creality K2 Plus Combo', price: 2890, oldPrice: 3390, badge: 'sale', category: 'printers', type: 'CoreXY', area: '350×350×350mm', speed: '600mm/s', ams: true, camera: true, enclosed: true, inStock: true, rating: 4.6, reviews: 24, icon: '🖨️', desc_ka: 'დიდი ფორმატის CoreXY პრინტერი CFS სისტემით (7 ფერამდე). 350³mm ბეჭდვის მოცულობა პროფესიონალური გამოყენებისთვის.', desc_en: 'Large format CoreXY printer with CFS system (up to 7 colors). 350³mm build volume for professional use.' },
  { id: 5, brand: 'Creality', name: 'Creality Ender-3 V3 SE', price: 390, category: 'printers', type: 'Bedslinger', area: '220×220×250mm', speed: '250mm/s', ams: false, camera: false, enclosed: false, inStock: true, rating: 4.4, reviews: 89, icon: '🖨️', desc_ka: 'საუკეთესო შემოსვლის დონის პრინტერი, ავტო-კალიბრაციით და პირდაპირი ექსტრუდერით. PLA, PETG, TPU.', desc_en: 'Best entry-level printer with auto-calibration and direct extruder. PLA, PETG, TPU.' },
  { id: 6, brand: 'Bambu Lab', name: 'Bambu Lab X1E', price: 4490, badge: 'new', category: 'printers', type: 'CoreXY', area: '256×256×256mm', speed: '500mm/s', ams: true, camera: true, enclosed: true, inStock: false, rating: 5.0, reviews: 7, icon: '🖨️', desc_ka: 'საწარმო დონის CoreXY პრინტერი 300°C კამერით, PA, PC, PEI მასალებისთვის. HEPA ფილტრით.', desc_en: 'Enterprise-grade CoreXY printer with 300°C chamber for PA, PC, PEI materials. With HEPA filter.' },
  { id: 7, brand: 'Bambu Lab', name: 'Bambu Lab Filament PLA Basic — White 1kg', price: 49, category: 'filament', material: 'PLA', color: 'White', diameter: '1.75mm', weight: '1kg', inStock: true, rating: 4.8, reviews: 120, icon: '🧵', desc_ka: 'Bambu Lab-ის ოფიციალური PLA ფილამენტი. შესანიშნავი ადჰეზია, ნაკლები ჯაჭვი. ოპტიმიზებულია Bambu Lab პრინტერებისთვის.', desc_en: 'Official Bambu Lab PLA filament. Excellent adhesion, minimal stringing. Optimized for Bambu Lab printers.' },
  { id: 8, brand: 'Bambu Lab', name: 'Bambu Lab Filament PETG HF — Black 1kg', price: 59, badge: 'hot', category: 'filament', material: 'PETG', color: 'Black', diameter: '1.75mm', weight: '1kg', inStock: true, rating: 4.7, reviews: 55, icon: '🧵', desc_ka: 'მაღალი ნაკადის PETG ფილამენტი სწრაფი ბეჭდვისთვის. შესანიშნავი ფუნქციური ნაწილებისთვის, კარგი ქიმიური მდგრადობით.', desc_en: 'High-flow PETG filament for fast printing. Excellent for functional parts with good chemical resistance.' },
  { id: 9, brand: 'eSUN', name: 'eSUN ABS+ Filament — Grey 1kg', price: 35, category: 'filament', material: 'ABS', color: 'Grey', diameter: '1.75mm', weight: '1kg', inStock: true, rating: 4.5, reviews: 38, icon: '🧵', desc_ka: 'გაუმჯობესებული ABS ფილამენტი შემცირებული ჭაობით. შესანიშნავი ტექნიკური ნაწილებისთვის.', desc_en: 'Improved ABS filament with reduced warping. Great for technical parts.' },
  { id: 10, brand: 'Bambu Lab', name: 'Bambu Lab AMS Lite', price: 299, badge: 'new', category: 'accessories', inStock: true, rating: 4.9, reviews: 41, icon: '⚙️', desc_ka: 'AMS Lite — ავტომატური მასალის მიმწოდებელი A1 სერიის პრინტერებისთვის. 4 ფერამდე ბეჭდვა ერთდროულად.', desc_en: 'AMS Lite — automatic material feeder for A1 series printers. Up to 4 color printing simultaneously.' },
  { id: 11, brand: 'Bambu Lab', name: 'Bambu Lab Hardened Steel Nozzle 0.4mm', price: 25, category: 'parts', inStock: true, rating: 4.8, reviews: 73, icon: '🔧', desc_ka: 'გამაგრებული ფოლადის სასხლეტი ისეთი მასალებისთვის, როგორიცაა CF, GF, Metal-filled. დიამეტრი: 0.4mm.', desc_en: 'Hardened steel nozzle for abrasive materials like CF, GF, Metal-filled filaments. Diameter: 0.4mm.' },
  { id: 12, brand: 'Creality', name: 'Creality Sonic Pad', price: 89, badge: 'sale', category: 'accessories', inStock: true, rating: 4.3, reviews: 19, icon: '📱', desc_ka: 'Klipper-ზე დაფუძნებული სმარტ კონტროლერი, 7" ეკრანით. Ender სერიის პრინტერებისთვის.', desc_en: 'Klipper-based smart controller with 7" screen. For Ender series printers.' },
];

const REVIEWS = [
  { author: 'ალექსი კ.', initials: 'ალ', product: 'Bambu X1 Carbon', rating: 5, text_ka: '"ვიყიდე Bambu Lab X1C — შთაბეჭდილება მოახდინა ხარისხმა და მენეჯერის სიჩქარემ. თბილისში 2 დღეში მომიტანეს."', text_en: '"Bought Bambu Lab X1C — impressed by quality and how fast the manager responded. Delivered to Tbilisi in 2 days."', color: 'var(--accent-light)', tc: 'var(--accent)' },
  { author: 'ნინო ნ.', initials: 'ნი', product: '3D ბეჭდვა / 3D Printing', rating: 5, text_ka: '"დავბეჭდეთ პროტოტიპები სტარტაპისთვის. შესანიშნავი ხარისხი, სწრაფი და ხელმისაწვდომი."', text_en: '"Printed prototypes for our startup. Excellent quality, fast and at reasonable prices."', color: 'var(--purple-light)', tc: 'var(--purple)' },
  { author: 'გიორგი კ.', initials: 'გი', product: 'Creality K2 Plus', rating: 5, text_ka: '"დამეხმარნენ პრინტერის არჩევაში. ახლა რეგულარულად ვყიდულობ ფილამენტს."', text_en: '"They helped me choose a printer. Now I regularly buy filament — best prices in Georgia."', color: 'var(--green-light)', tc: 'var(--green)' },
];

const FAQS = [
  { q_ka: 'რა ღირს მიტანა საქართველოში?', q_en: 'How much does delivery cost in Georgia?', a_ka: 'თბილისში მიტანა უფასოა ₾300-ზე მეტი შეკვეთისთვის. საქართველოს რეგიონებში — ₾15. ჩვეულებრივ 1–3 სამუშაო დღე.', a_en: 'Free delivery in Tbilisi for orders over ₾300. Across Georgian regions — flat rate ₾15. Usually 1–3 business days.' },
  { q_ka: 'პრინტერებზე გარანტია რამდენია?', q_en: 'What warranty do printers come with?', a_ka: 'ყველა 3D პრინტერს ახლავს მწარმოებლის 12 თვიანი გარანტია. გარანტიის შემთხვევაში — შეცვლა ან შეკეთება ჩვენი ხარჯით.', a_en: 'All 3D printers come with a 12-month manufacturer warranty. Replacement or repair at our expense.' },
  { q_ka: '3D ბეჭდვისთვის STL ფაილები მიიღება?', q_en: 'Do you accept STL files for 3D printing?', a_ka: 'დიახ, ვიღებთ STL, STEP, OBJ და ZIP ფორმატებს. ატვირთეთ ფაილი, მიუთითეთ მასალა და 1 საათში მივაწვდით ფასს.', a_en: 'Yes, we accept STL, STEP, OBJ and ZIP archives. Upload your file, specify the material and we will send a quote within 1 hour.' },
  { q_ka: 'განვადება შესაძლებელია?', q_en: 'Is installment payment available?', a_ka: 'დიახ, ვმუშაობთ პარტნიორ ბანკებთან. განვადება 3, 6 და 12 თვეზე ₾500-ზე მეტი შეკვეთებისთვის.', a_en: 'Yes, we work with partner banks. Installments available for 3, 6 and 12 months on orders over ₾500.' },
  { q_ka: 'ანაზღაურება და დაბრუნება შესაძლებელია?', q_en: 'Are returns and refunds possible?', a_ka: 'დიახ, 14 დღის განმავლობაში შეგიძლიათ დაბრუნება, თუ პროდუქტი არ გამოიყენება და მის ორიგინალურ მდგომარეობაშია.', a_en: 'Yes, within 14 days if the product is unused and in original condition.' },
];

/* ── TOAST ── */
function showToast(message, type = '') {
  const container = document.getElementById('toast-container') || createToastContainer();
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<i class="ti ti-${type === 'success' ? 'check' : type === 'error' ? 'x' : 'info-circle'}"></i> ${message}`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 3000);
}
function createToastContainer() {
  const el = document.createElement('div');
  el.id = 'toast-container';
  el.className = 'toast-container';
  document.body.appendChild(el);
  return el;
}

/* ── ROUTER ── */
function navigate(page, params = {}) {
  const url = new URL(window.location);
  url.searchParams.set('page', page);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  window.history.pushState({}, '', url);
  renderPage();
  window.scrollTo(0, 0);
}

function getCurrentPage() {
  const params = new URLSearchParams(window.location.search);
  return params.get('page') || 'home';
}
function getParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

/* ── SHARED NAV & FOOTER ── */
function renderNav() {
  const l = t();
  return `
  <div class="promo-bar" id="promo-bar">
    <span>${l.promo}</span>
    <a onclick="navigate('catalog')">${l.promoLink}</a>
  </div>
  <nav class="navbar">
    <div class="nav-inner">
      <a class="logo" onclick="navigate('home')">3D<span>Hub</span><sub>.ge</sub></a>
      <div class="nav-links" id="nav-links">
        <a onclick="navigate('catalog','type=printers')" class="${getCurrentPage()==='catalog'?'active':''}">${l.navPrinters}</a>
        <a onclick="navigate('filament')" class="${getCurrentPage()==='filament'||getCurrentPage()==='filament_detail'?'active':''}">${l.navFilament}</a>
        <a onclick="navigate('catalog','type=accessories')">${l.navAcc}</a>
        <a onclick="navigate('services')" class="${getCurrentPage()==='services'?'active':''}">${l.navServices}</a>
        <a onclick="navigate('blog')">${l.navBlog}</a>
        <a onclick="navigate('support')">${l.navSupport}</a>
      </div>
      <div class="nav-right">
        <div class="lang-sw">
          <button class="lang-btn ${state.lang==='ka'?'active':''}" onclick="setLang('ka')">GE</button>
          <button class="lang-btn ${state.lang==='en'?'active':''}" onclick="setLang('en')">EN</button>
        </div>
        <div class="icon-btn" onclick="navigate('search')" title="${l.search}"><i class="ti ti-search"></i></div>
        <div class="icon-btn" onclick="navigate('wishlist')"><i class="ti ti-heart"></i></div>
        <div class="icon-btn" onclick="navigate('cart')">
          <i class="ti ti-shopping-cart"></i>
          <span class="cart-count" style="display:${getCartCount()>0?'flex':'none'}">${getCartCount()}</span>
        </div>
        <button class="btn-login" onclick="navigate('login')">${l.login}</button>
        <div class="hamburger" onclick="toggleMobileMenu()">
          <span></span><span></span><span></span>
        </div>
      </div>
    </div>
  </nav>
  <div id="mobile-menu" style="display:none;background:var(--bg);border-bottom:1px solid var(--border);padding:1rem 2rem;display:none;flex-direction:column;gap:12px;">
    <a style="font-size:14px;font-weight:600;color:var(--text2);cursor:pointer" onclick="navigate('catalog');toggleMobileMenu()">${l.navPrinters}</a>
    <a style="font-size:14px;font-weight:600;color:var(--text2);cursor:pointer" onclick="navigate('services');toggleMobileMenu()">${l.navServices}</a>
    <a style="font-size:14px;font-weight:600;color:var(--text2);cursor:pointer" onclick="navigate('cart');toggleMobileMenu()">${l.toCart}</a>
    <a style="font-size:14px;font-weight:600;color:var(--text2);cursor:pointer" onclick="navigate('support');toggleMobileMenu()">${l.navSupport}</a>
  </div>`;
}

function toggleMobileMenu() {
  const m = document.getElementById('mobile-menu');
  if (m) m.style.display = m.style.display === 'flex' ? 'none' : 'flex';
}

function renderFooter() {
  const l = t();
  const links1 = [[l.cat1,'catalog','type=printers'],[l.cat2,'catalog','type=filament'],[l.cat3,'catalog','type=parts'],[l.cat4,'catalog','type=accessories']];
  const links2 = [['3D '+(state.lang==='ka'?'ბეჭდვა':'Printing'),'services'],['3D '+(state.lang==='ka'?'სკანირება':'Scanning'),'services'],[(state.lang==='ka'?'მოდელირება':'Modeling'),'services'],[(state.lang==='ka'?'რემონტი':'Repair'),'services']];
  const links3 = [[(state.lang==='ka'?'ჩვენს შესახებ':'About us'),'about'],[(state.lang==='ka'?'კონტაქტი':'Contact'),'contact'],[(state.lang==='ka'?'ბლოგი':'Blog'),'blog'],[(state.lang==='ka'?'მხარდაჭერა':'Support'),'support'],[(state.lang==='ka'?'მიტანა':'Delivery'),'delivery']];
  return `<footer>
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-logo">3D<span>Hub</span>.ge</div>
          <p class="footer-desc">${l.footerDesc}</p>
          <div class="footer-socials">
            <a class="social-btn" href="https://t.me/3dhubge" target="_blank"><i class="ti ti-brand-telegram"></i></a>
            <a class="social-btn" href="https://instagram.com/3dhub.ge" target="_blank"><i class="ti ti-brand-instagram"></i></a>
            <a class="social-btn" href="https://facebook.com/3dhubge" target="_blank"><i class="ti ti-brand-facebook"></i></a>
            <a class="social-btn" href="https://wa.me/995555000000" target="_blank"><i class="ti ti-brand-whatsapp"></i></a>
          </div>
        </div>
        <div><div class="footer-col-title">${l.fc1}</div><ul class="footer-links">${links1.map(([n,p,pr])=>`<li><a onclick="navigate('${p}'${pr?`,'${pr}'`:''})">${n}</a></li>`).join('')}</ul></div>
        <div><div class="footer-col-title">${l.fc2}</div><ul class="footer-links">${links2.map(([n,p])=>`<li><a onclick="navigate('${p}')">${n}</a></li>`).join('')}</ul></div>
        <div><div class="footer-col-title">${l.fc3}</div><ul class="footer-links">${links3.map(([n,p])=>`<li><a onclick="navigate('${p}')">${n}</a></li>`).join('')}</ul></div>
      </div>
      <div class="footer-bottom">
        <span class="footer-copy">${l.footerCopy}</span>
        <div class="footer-legal">
          <a onclick="navigate('privacy')">${state.lang==='ka'?'კონფიდენციალურობა':'Privacy'}</a>
          <a onclick="navigate('terms')">${state.lang==='ka'?'პირობები':'Terms'}</a>
        </div>
      </div>
    </div>
  </footer>`;
}

/* ── PRODUCT CARD HTML ── */
function productCardHTML(p) {
  const l = t();
  const badges = { hot: `<span class="badge badge-red"><span class="badge-dot"></span>${l.badgeHot}</span>`, new: `<span class="badge badge-blue"><span class="badge-dot"></span>${l.badgeNew}</span>`, sale: `<span class="badge badge-green"><span class="badge-dot"></span>${l.badgeSale}</span>` };
  const wishlisted = isWishlisted(p.id);
  return `
  <div class="product-card" onclick="navigate('product','id=${p.id}')">
    <div class="product-img">
      <div class="product-badges">${p.badge ? badges[p.badge] : ''}${!p.inStock ? `<span class="badge badge-red">${l.outStock}</span>` : ''}</div>
      <div class="product-wishlist ${wishlisted?'active':''}" onclick="event.stopPropagation();toggleWishlistBtn(${p.id},this)"><i class="ti ti-heart"></i></div>
      <div class="product-img-placeholder">${p.icon}</div>
    </div>
    <div class="product-info">
      <div class="product-brand">${p.brand}</div>
      <div class="product-rating"><span>★</span> ${p.rating} <span style="color:var(--text3)">(${p.reviews})</span></div>
      <div class="product-name">${p.name}</div>
      <div class="product-specs">${buildSpecs(p)}</div>
      <div class="product-footer">
        <div>
          <div class="product-price">₾${p.price.toLocaleString()}</div>
          ${p.oldPrice ? `<div class="product-old-price">₾${p.oldPrice.toLocaleString()}</div>` : ''}
        </div>
        <div class="product-actions">
          <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();addToCart({id:${p.id},name:'${p.name}',price:${p.price},icon:'${p.icon}'})">
            <i class="ti ti-shopping-cart"></i> ${l.addCart}
          </button>
        </div>
      </div>
    </div>
  </div>`;
}

function buildSpecs(p) {
  const tags = [];
  if (p.area) tags.push(p.area);
  if (p.speed) tags.push(p.speed);
  if (p.material) tags.push(p.material);
  if (p.diameter) tags.push(p.diameter);
  if (p.ams) tags.push('AMS');
  if (p.enclosed) tags.push(state.lang==='ka'?'დახურული':'Enclosed');
  return tags.map(s => `<span class="spec-tag">${s}</span>`).join('');
}

function toggleWishlistBtn(id, el) {
  toggleWishlist(id);
  el.classList.toggle('active');
}

/* ── FAQs ── */
function renderFAQs(faqs) {
  return faqs.map((f, i) => `
    <div class="faq-item">
      <button class="faq-question" onclick="toggleFAQ(${i})">
        ${state.lang==='ka' ? f.q_ka : f.q_en}
        <i class="ti ti-plus faq-icon"></i>
      </button>
      <div class="faq-answer">${state.lang==='ka' ? f.a_ka : f.a_en}</div>
    </div>`).join('');
}

function toggleFAQ(i) {
  const items = document.querySelectorAll('.faq-item');
  const item = items[i];
  if (!item) return;
  const q = item.querySelector('.faq-question');
  const a = item.querySelector('.faq-answer');
  q.classList.toggle('open');
  a.classList.toggle('open');
}

/* renderPage is defined in index.html and called after all scripts load */
