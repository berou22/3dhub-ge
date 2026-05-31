/* ── BAMBU LAB FILAMENT CATALOG ── */
/* All filaments from inventory with official hex codes, descriptions, specs */

const FILAMENT_DESCRIPTIONS = {
  'PLA Basic': {
    desc_ka: 'BambuLab PLA Basic — ყველაზე პოპულარული და ადვილად დასაბეჭდი ფილამენტი. შესანიშნავი ფენების შეჭიდულობა, მაღალი სიმტკიცე სტანდარტულ PLA-სთან შედარებით. 258 mm/s-მდე სიჩქარე 0.4mm სასხლეტით.',
    desc_en: 'BambuLab PLA Basic — the most popular and easiest-to-print filament. Excellent layer adhesion, higher strength compared to standard PLA. Up to 258mm/s speed with 0.4mm nozzle.',
    specs: { diameter: '1.75mm ±0.03mm', weight: '1kg', printTemp: '190–240°C', bedTemp: '35–45°C', speed: '≤258mm/s', dryTemp: '55°C / 8h' }
  },
  'PLA Matte': {
    desc_ka: 'BambuLab PLA Matte — მატ ზედაპირი, რომელიც მალავს ბეჭდვის ხაზებს. მდიდარი ფერების პალიტრა. შესანიშნავი ვიზუალური კომპონენტებისა და სუვენირებისთვის.',
    desc_en: 'BambuLab PLA Matte — matte surface that hides layer lines. Rich color palette. Perfect for visual components, figurines and souvenirs.',
    specs: { diameter: '1.75mm ±0.03mm', weight: '1kg', printTemp: '190–240°C', bedTemp: '35–45°C', speed: '≤250mm/s', dryTemp: '55°C / 8h' }
  },
  'PLA Light': {
    desc_ka: 'BambuLab PLA Light — მსუბუქი, გამჭვირვალე PLA ფილამენტი. ნაკლები სიმკვრივე, შესაფერისია მოდელებისთვის სადაც მსუბუქი ფაქტურა სასურველია.',
    desc_en: 'BambuLab PLA Light — lightweight, translucent PLA filament. Lower density, suitable for models where a light texture is desired.',
    specs: { diameter: '1.75mm ±0.03mm', weight: '1kg', printTemp: '190–235°C', bedTemp: '35–45°C', speed: '≤250mm/s', dryTemp: '55°C / 8h' }
  },
  'PETG Basic': {
    desc_ka: 'BambuLab PETG Basic — გაუმჯობესებული PETG ფილამენტი ფუნქციური ნაწილებისთვის. შესანიშნავი ქიმიური მდგრადობა, მცირე ჭაობი. PLA-ზე უფრო მდგრადია ტემპერატურის მიმართ.',
    desc_en: 'BambuLab PETG Basic — improved PETG filament for functional parts. Excellent chemical resistance, minimal warping. More heat resistant than PLA.',
    specs: { diameter: '1.75mm ±0.03mm', weight: '1kg', printTemp: '230–260°C', bedTemp: '70–90°C', speed: '≤200mm/s', dryTemp: '65°C / 8h' }
  },
  'ABS': {
    desc_ka: 'BambuLab ABS — მაღალი სიმტკიცის ფილამენტი ინდუსტრიული ნაწილებისთვის. მაღალი სიმკვრივე, სიმტკიცე და ტემპერატურის მდგრადობა. საჭიროებს დახურულ კამერას.',
    desc_en: 'BambuLab ABS — high-strength filament for industrial parts. High density, toughness and temperature resistance. Requires enclosed chamber.',
    specs: { diameter: '1.75mm ±0.03mm', weight: '1kg', printTemp: '240–280°C', bedTemp: '80–100°C', speed: '≤200mm/s', dryTemp: '80°C / 8h' }
  }
};

// Color hex map by filament type
const FILAMENT_COLORS = {
  'PLA Basic': {
    'Jade White': '#FFFFFF', 'Black': '#000000', 'Red': '#C12E1F',
    'Blue': '#0A2989', 'Gray': '#8E9089', 'Bambu Green': '#00AE42',
    'Mistletoe Green': '#3F8E43', 'Cyan': '#0086D6', 'Yellow': '#F4EE2A',
    'Purple': '#5E43B7', 'Magenta': '#EC008C', 'Gold': '#E4BD68',
    'Pink': '#F55A74', 'Sunflower Yellow': '#FEC600', 'Bronze': '#847D48',
    'Turquoise': '#00B1B7', 'Indigo Purple': '#482960', 'Light Gray': '#D1D3D5',
    'Hot Pink': '#F5547C', 'Cocoa Brown': '#6F5034', 'Blue Grey': '#5B6579',
    'Silver': '#A6A9AA', 'Orange': '#FF6A13', 'Bright Green': '#BECF00',
    'Brown': '#9D432C', 'Dark Gray': '#545454', 'Pumpkin Orange': '#FF9016',
    'Maroon Red': '#9D2235', 'Cobalt Blue': '#0056B8', 'Beige': '#F7E6DE',
  },
  'PLA Matte': {
    'Ivory White': '#FFFFFF', 'Bone White': '#CBC6B8', 'Desert Tan': '#E8DBB7',
    'Latte Brown': '#D3B7A7', 'Caramel': '#AE835B', 'Terracotta': '#B15533',
    'Dark Brown': '#7D6556', 'Dark Chocolate': '#4D3324', 'Lilac Purple': '#AE96D4',
    'Sakura Pink': '#E8AFCF', 'Mandarin Orange': '#F99963', 'Lemon Yellow': '#F7D959',
    'Plum': '#950051', 'Scarlet Red': '#DE4343', 'Dark Red': '#BB3D43',
    'Dark Green': '#68724D', 'Grass Green': '#61C680', 'Apple Green': '#C2E189',
    'Ice Blue': '#A3D8E1', 'Sky Blue': '#56B7E6', 'Marine Blue': '#0078BF',
    'Dark Blue': '#042F56', 'Ash Gray': '#9B9EA0', 'Nardo Gray': '#757575',
    'Charcoal': '#2C2C2C', 'White': '#FFFFFF', 'Orange': '#F99963',
    'Red': '#DE4343', 'Grey': '#9B9EA0', 'Blue': '#0078BF',
    'Dark Blue Spool': '#042F56', 'Nardo Greey': '#757575',
  },
  'PLA Light': {
    'Black': '#2C2C2C', 'Grey': '#B0B0B0', 'Dark Grey': '#5A5A5A',
    'Red': '#E05555', 'Orange': '#F5A460', 'Yellow': '#F5E070',
    'Green': '#7BC87B', 'Blue': '#6699CC', 'Blue2': '#7AAED4',
    'Brown': '#C4956A', 'Beage': '#F5E6C8',
  },
  'PETG Basic': {
    'Red': '#D6001C', 'Yellow': '#FCE300', 'Reflex Blue': '#001489',
    'Black': '#000000', 'Gray': '#7F7E83', 'Grey Blue': '#7090A0',
    'Dark Brown': '#4F2C1D', 'White': '#FFFFFF', 'Blue': '#0050AA',
    'Forest Green': '#2E6B3E', 'Green': '#3A9A3A', 'Brown': '#7A4B2A',
    'Orange': '#FF6A13',
  },
  'ABS': {
    'Black': '#000000', 'Silver': '#87909A', 'White': '#FFFFFF',
    'Bambu Green': '#00AE42', 'Olive': '#789D4A', 'Azure': '#489FDF',
    'Navy Blue': '#0C2340', 'Blue': '#0A2CA5', 'Tangerine Yellow': '#FFC72C',
    'Orange': '#FF6A13', 'Red': '#D32941', 'Purple': '#AF1685',
  }
};

// Parse inventory into structured filament products
const FILAMENT_INVENTORY = [
  // ABS
  { sku:'40101', type:'ABS', color:'Black', spool:false, qty:200, price:60 },
  { sku:'40101', type:'ABS', color:'Black', spool:true, qty:30, price:65 },
  { sku:'40102', type:'ABS', color:'Silver', spool:true, qty:30, price:65 },
  // PETG Basic
  { sku:'30201', type:'PETG Basic', color:'Red', spool:false, qty:5, price:60 },
  { sku:'30201', type:'PETG Basic', color:'Red', spool:true, qty:5, price:65 },
  { sku:'30105', type:'PETG Basic', color:'Black', spool:false, qty:47, price:60 },
  { sku:'30105', type:'PETG Basic', color:'Black', spool:true, qty:23, price:65 },
  { sku:'30603', type:'PETG Basic', color:'Blue', spool:false, qty:5, price:60 },
  { sku:'30603', type:'PETG Basic', color:'Blue', spool:true, qty:5, price:65 },
  { sku:'30800', type:'PETG Basic', color:'Brown', spool:false, qty:5, price:60 },
  { sku:'30503', type:'PETG Basic', color:'Forest Green', spool:false, qty:5, price:60 },
  { sku:'30503', type:'PETG Basic', color:'Forest Green', spool:true, qty:5, price:65 },
  { sku:'30502', type:'PETG Basic', color:'Green', spool:false, qty:5, price:60 },
  { sku:'30502', type:'PETG Basic', color:'Green', spool:true, qty:5, price:65 },
  { sku:'30107', type:'PETG Basic', color:'Gray', spool:false, qty:5, price:60 },
  { sku:'30108', type:'PETG Basic', color:'Grey Blue', spool:true, qty:5, price:65 },
  { sku:'30107', type:'PETG Basic', color:'Gray', spool:true, qty:5, price:60 },
  { sku:'30301', type:'PETG Basic', color:'Orange', spool:true, qty:5, price:65 },
  { sku:'30106', type:'PETG Basic', color:'White', spool:false, qty:5, price:60 },
  { sku:'30106', type:'PETG Basic', color:'White', spool:true, qty:5, price:65 },
  { sku:'30402', type:'PETG Basic', color:'Yellow', spool:false, qty:5, price:60 },
  { sku:'30402', type:'PETG Basic', color:'Yellow', spool:true, qty:5, price:65 },
  // PLA Basic
  { sku:'10501', type:'PLA Basic', color:'Bambu Green', spool:false, qty:5, price:60 },
  { sku:'10501', type:'PLA Basic', color:'Bambu Green', spool:true, qty:5, price:70 },
  { sku:'10101', type:'PLA Basic', color:'Black', spool:false, qty:23, price:65 },
  { sku:'10101', type:'PLA Basic', color:'Black', spool:true, qty:23, price:70 },
  { sku:'10602', type:'PLA Basic', color:'Blue Grey', spool:false, qty:5, price:65 },
  { sku:'10602', type:'PLA Basic', color:'Blue Grey', spool:true, qty:5, price:70 },
  { sku:'10601', type:'PLA Basic', color:'Blue', spool:true, qty:5, price:70 },
  { sku:'10801', type:'PLA Basic', color:'Bronze', spool:false, qty:5, price:65 },
  { sku:'10801', type:'PLA Basic', color:'Bronze', spool:true, qty:5, price:70 },
  { sku:'10800', type:'PLA Basic', color:'Brown', spool:false, qty:5, price:65 },
  { sku:'10800', type:'PLA Basic', color:'Brown', spool:true, qty:5, price:70 },
  { sku:'10603', type:'PLA Basic', color:'Cyan', spool:false, qty:5, price:65 },
  { sku:'10105', type:'PLA Basic', color:'Dark Gray', spool:false, qty:5, price:65 },
  { sku:'10401', type:'PLA Basic', color:'Gold', spool:false, qty:5, price:65 },
  { sku:'10401', type:'PLA Basic', color:'Gold', spool:true, qty:5, price:70 },
  { sku:'10103', type:'PLA Basic', color:'Gray', spool:false, qty:5, price:65 },
  { sku:'10103', type:'PLA Basic', color:'Gray', spool:true, qty:5, price:70 },
  { sku:'10100', type:'PLA Basic', color:'Jade White', spool:false, qty:5, price:65 },
  { sku:'10100', type:'PLA Basic', color:'Jade White', spool:true, qty:5, price:70 },
  { sku:'10104', type:'PLA Basic', color:'Light Gray', spool:false, qty:5, price:65 },
  { sku:'10202', type:'PLA Basic', color:'Magenta', spool:false, qty:5, price:65 },
  { sku:'10502', type:'PLA Basic', color:'Mistletoe Green', spool:false, qty:5, price:65 },
  { sku:'10502', type:'PLA Basic', color:'Mistletoe Green', spool:true, qty:5, price:70 },
  { sku:'10300', type:'PLA Basic', color:'Orange', spool:false, qty:5, price:65 },
  { sku:'10203', type:'PLA Basic', color:'Pink', spool:false, qty:5, price:65 },
  { sku:'10700', type:'PLA Basic', color:'Purple', spool:false, qty:5, price:65 },
  { sku:'10200', type:'PLA Basic', color:'Red', spool:false, qty:5, price:65 },
  { sku:'10200', type:'PLA Basic', color:'Red', spool:true, qty:5, price:70 },
  { sku:'10102', type:'PLA Basic', color:'Silver', spool:false, qty:5, price:65 },
  { sku:'10400', type:'PLA Basic', color:'Yellow', spool:false, qty:5, price:65 },
  { sku:'10400', type:'PLA Basic', color:'Yellow', spool:true, qty:5, price:70 },
  // PLA Light
  { sku:'16700', type:'PLA Light', color:'Beage', spool:false, qty:5, price:55 },
  { sku:'16100', type:'PLA Light', color:'Black', spool:false, qty:5, price:55 },
  { sku:'16100', type:'PLA Light', color:'Black', spool:true, qty:5, price:60 },
  { sku:'16600', type:'PLA Light', color:'Blue', spool:false, qty:5, price:55 },
  { sku:'16601', type:'PLA Light', color:'Blue', spool:false, qty:5, price:55 },
  { sku:'16600', type:'PLA Light', color:'Blue', spool:true, qty:5, price:60 },
  { sku:'16601', type:'PLA Light', color:'Blue', spool:true, qty:5, price:60 },
  { sku:'16800', type:'PLA Light', color:'Brown', spool:false, qty:5, price:55 },
  { sku:'16102', type:'PLA Light', color:'Dark Grey', spool:false, qty:5, price:55 },
  { sku:'16102', type:'PLA Light', color:'Dark Grey', spool:true, qty:5, price:60 },
  { sku:'16501', type:'PLA Light', color:'Green', spool:false, qty:5, price:55 },
  { sku:'16101', type:'PLA Light', color:'Grey', spool:false, qty:5, price:55 },
  { sku:'16101', type:'PLA Light', color:'Grey', spool:true, qty:5, price:60 },
  { sku:'16301', type:'PLA Light', color:'Orange', spool:false, qty:5, price:55 },
  { sku:'16301', type:'PLA Light', color:'Orange', spool:true, qty:5, price:60 },
  { sku:'16200', type:'PLA Light', color:'Red', spool:false, qty:5, price:55 },
  { sku:'16200', type:'PLA Light', color:'Red', spool:true, qty:5, price:60 },
  { sku:'16400', type:'PLA Light', color:'Yellow', spool:false, qty:5, price:55 },
  { sku:'16401', type:'PLA Light', color:'Yellow', spool:false, qty:5, price:55 },
  { sku:'16400', type:'PLA Light', color:'Yellow', spool:true, qty:5, price:60 },
  { sku:'16401', type:'PLA Light', color:'Yellow', spool:true, qty:5, price:60 },
  // PLA Matte
  { sku:'11801', type:'PLA Matte', color:'Dark Brown', spool:false, qty:5, price:65 },
  { sku:'11801', type:'PLA Matte', color:'Dark Brown', spool:true, qty:5, price:70 },
  { sku:'11502', type:'PLA Matte', color:'Apple Green', spool:false, qty:5, price:65 },
  { sku:'11600', type:'PLA Matte', color:'Blue', spool:false, qty:5, price:65 },
  { sku:'11600', type:'PLA Matte', color:'Blue', spool:true, qty:5, price:70 },
  { sku:'11803', type:'PLA Matte', color:'Caramel', spool:false, qty:5, price:65 },
  { sku:'11101', type:'PLA Matte', color:'Charcoal', spool:false, qty:5, price:65 },
  { sku:'11101', type:'PLA Matte', color:'Charcoal', spool:true, qty:5, price:70 },
  { sku:'11501', type:'PLA Matte', color:'Dark Green', spool:false, qty:5, price:65 },
  { sku:'11602', type:'PLA Matte', color:'Dark Blue', spool:false, qty:5, price:65 },
  { sku:'11602', type:'PLA Matte', color:'Dark Blue', spool:true, qty:5, price:70 },
  { sku:'11802', type:'PLA Matte', color:'Dark Chocolate', spool:false, qty:5, price:65 },
  { sku:'11202', type:'PLA Matte', color:'Dark Red', spool:false, qty:5, price:65 },
  { sku:'11202', type:'PLA Matte', color:'Dark Red', spool:true, qty:5, price:70 },
  { sku:'11401', type:'PLA Matte', color:'Desert Tan', spool:false, qty:5, price:65 },
  { sku:'11500', type:'PLA Matte', color:'Grass Green', spool:false, qty:5, price:65 },
  { sku:'11500', type:'PLA Matte', color:'Grass Green', spool:true, qty:5, price:70 },
  { sku:'11102', type:'PLA Matte', color:'Grey', spool:false, qty:5, price:65 },
  { sku:'11102', type:'PLA Matte', color:'Grey', spool:true, qty:5, price:70 },
  { sku:'11601', type:'PLA Matte', color:'Ice Blue', spool:false, qty:5, price:65 },
  { sku:'11601', type:'PLA Matte', color:'Ice Blue', spool:true, qty:5, price:70 },
  { sku:'11800', type:'PLA Matte', color:'Latte Brown', spool:false, qty:5, price:65 },
  { sku:'11800', type:'PLA Matte', color:'Latte Brown', spool:true, qty:5, price:70 },
  { sku:'11400', type:'PLA Matte', color:'Lemon Yellow', spool:false, qty:5, price:65 },
  { sku:'11400', type:'PLA Matte', color:'Lemon Yellow', spool:true, qty:5, price:70 },
  { sku:'11700', type:'PLA Matte', color:'Lilac Purple', spool:false, qty:5, price:65 },
  { sku:'11700', type:'PLA Matte', color:'Lilac Purple', spool:true, qty:5, price:70 },
  { sku:'11104', type:'PLA Matte', color:'Nardo Gray', spool:false, qty:5, price:65 },
  { sku:'11300', type:'PLA Matte', color:'Orange', spool:false, qty:5, price:65 },
  { sku:'11300', type:'PLA Matte', color:'Orange', spool:true, qty:5, price:70 },
  { sku:'11204', type:'PLA Matte', color:'Plum', spool:false, qty:5, price:65 },
  { sku:'11200', type:'PLA Matte', color:'Red', spool:false, qty:5, price:65 },
  { sku:'11200', type:'PLA Matte', color:'Red', spool:true, qty:5, price:70 },
  { sku:'11203', type:'PLA Matte', color:'Terracotta', spool:false, qty:5, price:65 },
  { sku:'11100', type:'PLA Matte', color:'White', spool:false, qty:5, price:65 },
  { sku:'11103', type:'PLA Matte', color:'White', spool:false, qty:5, price:65 },
  { sku:'11100', type:'PLA Matte', color:'White', spool:true, qty:5, price:70 },
];

// Get hex color for a filament
function getFilamentHex(type, color) {
  const typeColors = FILAMENT_COLORS[type] || {};
  // Try exact match first
  if (typeColors[color]) return typeColors[color];
  // Try case-insensitive
  const key = Object.keys(typeColors).find(k => k.toLowerCase() === color.toLowerCase());
  if (key) return typeColors[key];
  // Fallback by color name guess
  const fallbacks = {
    'black':'#1a1a1a','white':'#ffffff','red':'#cc2222','blue':'#1a3d8f',
    'green':'#2e7d32','yellow':'#f5e642','orange':'#f5782a','grey':'#888888',
    'gray':'#888888','brown':'#7a4b2a','silver':'#a0a0a0','gold':'#c8a83a',
    'pink':'#f06090','purple':'#6e3ab0','cyan':'#0099cc','beige':'#f5e6c8',
  };
  return fallbacks[color.toLowerCase()] || '#888888';
}

// Group inventory by type+color for the color picker UI
function getFilamentGroups() {
  const groups = {};
  FILAMENT_INVENTORY.forEach(item => {
    const key = `${item.type}__${item.color}`;
    if (!groups[key]) {
      groups[key] = {
        type: item.type,
        color: item.color,
        hex: getFilamentHex(item.type, item.color),
        sku: item.sku,
        variants: []
      };
    }
    groups[key].variants.push(item);
  });
  return Object.values(groups);
}

// Build unique filament "products" (one per type+color, with spool/refill variants)
function buildFilamentProducts() {
  const groups = getFilamentGroups();
  const startId = 1000;
  return groups.map((g, i) => {
    const refill = g.variants.find(v => !v.spool);
    const spoolV = g.variants.find(v => v.spool);
    const basePrice = refill ? refill.price : (spoolV ? spoolV.price : 60);
    const totalQty = g.variants.reduce((s, v) => s + v.qty, 0);
    const info = FILAMENT_DESCRIPTIONS[g.type] || FILAMENT_DESCRIPTIONS['PLA Basic'];
    return {
      id: startId + i,
      isFilament: true,
      brand: 'Bambu Lab',
      name: `BambuLab ${g.type} — ${g.color}${spoolV && !refill ? ' Spool' : ''}`,
      nameShort: `${g.type} ${g.color}`,
      type: g.type,
      colorName: g.color,
      colorHex: g.hex,
      sku: g.sku,
      price: basePrice,
      spoolPrice: spoolV ? spoolV.price : null,
      refillPrice: refill ? refill.price : null,
      hasRefill: !!refill,
      hasSpool: !!spoolV,
      stock: totalQty,
      inStock: totalQty > 0,
      category: 'filament',
      material: g.type.split(' ')[0], // PLA / PETG / ABS
      diameter: '1.75mm',
      weight: '1kg',
      rating: 4.8,
      reviews: Math.floor(Math.random() * 80) + 20,
      icon: '🧵',
      badge: totalQty > 50 ? 'hot' : null,
      desc_ka: info.desc_ka,
      desc_en: info.desc_en,
      specs: info.specs,
    };
  });
}

const FILAMENT_PRODUCTS = buildFilamentProducts();

/* ── FILAMENT CATALOG PAGE ── */
function renderFilamentCatalog() {
  const l = t();
  const typeFilter = getParam('ftype') || 'all';
  const colorFilter = getParam('fcolor') || '';

  // All unique filament types
  const types = ['all', 'PLA Basic', 'PLA Matte', 'PLA Light', 'PETG Basic', 'ABS'];

  let products = [...FILAMENT_PRODUCTS];
  if (typeFilter !== 'all') products = products.filter(p => p.type === typeFilter);
  if (colorFilter) products = products.filter(p => p.colorName.toLowerCase().includes(colorFilter.toLowerCase()));

  // Color swatches for filter
  const allColors = [...new Set(FILAMENT_PRODUCTS.filter(p => typeFilter === 'all' || p.type === typeFilter).map(p => p.colorHex))];

  return `
  <div style="background:var(--bg2);border-bottom:1px solid var(--border)">
    <div class="container">
      <nav class="breadcrumbs">
        <a onclick="navigate('home')">${state.lang==='ka'?'მთავარი':'Home'}</a>
        <i class="ti ti-chevron-right" style="font-size:12px"></i>
        <span>${state.lang==='ka'?'ფილამენტი':'Filament'}</span>
      </nav>
    </div>
  </div>

  <!-- HERO -->
  <div style="background:linear-gradient(135deg,#0f1923 0%,#1a3060 100%);padding:3rem 0 2.5rem">
    <div class="container" style="display:flex;align-items:center;justify-content:space-between;gap:2rem">
      <div>
        <div class="badge badge-blue" style="margin-bottom:1rem;background:rgba(255,255,255,0.1);border-color:rgba(255,255,255,0.2);color:#fff">
          <span class="badge-dot" style="background:#60a5fa"></span>Bambu Lab Official Dealer
        </div>
        <h1 style="font-size:38px;font-weight:800;letter-spacing:-2px;color:#fff;margin-bottom:8px">
          ${state.lang==='ka'?'ფილამენტი':'Filament'}
        </h1>
        <p style="color:rgba(255,255,255,0.6);font-size:14px;max-width:420px">
          ${state.lang==='ka'?'BambuLab-ის ოფიციალური ფილამენტი — PLA, PETG, ABS. 1.75mm, 1kg. მიტანა მთელ საქართველოში.':'Official BambuLab filament — PLA, PETG, ABS. 1.75mm, 1kg. Delivery across Georgia.'}
        </p>
        <div style="display:flex;gap:1.5rem;margin-top:1.5rem">
          ${[['🧵', state.lang==='ka'?`${FILAMENT_PRODUCTS.length} ფერი`:`${FILAMENT_PRODUCTS.length} colors`],['⚡','1.75mm'],['📦','1kg'],['🚚',state.lang==='ka'?'1–3 დღე':'1–3 days']].map(([ic,tx])=>`
          <div style="display:flex;align-items:center;gap:6px">
            <span style="font-size:16px">${ic}</span>
            <span style="font-size:12px;color:rgba(255,255,255,0.7);font-weight:600">${tx}</span>
          </div>`).join('')}
        </div>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;max-width:280px">
        ${FILAMENT_PRODUCTS.slice(0,12).map(p=>`
        <div style="width:36px;height:36px;border-radius:50%;background:${p.colorHex};border:3px solid rgba(255,255,255,0.2);box-shadow:0 2px 8px rgba(0,0,0,0.4)" title="${p.colorName}"></div>`).join('')}
      </div>
    </div>
  </div>

  <!-- TYPE TABS -->
  <div style="background:var(--bg);border-bottom:1px solid var(--border);position:sticky;top:62px;z-index:100">
    <div class="container">
      <div style="display:flex;gap:0;overflow-x:auto">
        ${types.map(tp=>`
        <button onclick="navigateFilament('${tp}','${colorFilter}')" style="padding:14px 20px;border:none;background:none;font-size:13px;font-weight:600;color:${typeFilter===tp?'var(--accent)':'var(--text3)'};cursor:pointer;border-bottom:2px solid ${typeFilter===tp?'var(--accent)':'transparent'};white-space:nowrap;font-family:var(--ff);transition:all 0.15s">
          ${tp === 'all' ? (state.lang==='ka'?'ყველა':'All') : tp}
          <span style="margin-left:4px;font-size:11px;color:var(--text3)">${tp==='all'?FILAMENT_PRODUCTS.length:FILAMENT_PRODUCTS.filter(p=>p.type===tp).length}</span>
        </button>`).join('')}
      </div>
    </div>
  </div>

  <div class="container" style="padding-top:2rem;padding-bottom:3rem">
    <div style="display:flex;gap:2rem">
      <!-- SIDEBAR -->
      <aside style="width:240px;flex-shrink:0">
        <div class="filters-sidebar">
          <div style="font-size:13px;font-weight:700;margin-bottom:1.25rem;display:flex;align-items:center;gap:8px"><i class="ti ti-palette" style="color:var(--accent)"></i>${state.lang==='ka'?'ფერის ფილტრი':'Color filter'}</div>

          <!-- Color swatches -->
          <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:1.25rem">
            <div onclick="navigateFilament('${typeFilter}','')" style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#ff6b6b,#ffd93d,#6bcb77,#4d96ff);cursor:pointer;border:3px solid ${!colorFilter?'var(--accent)':'var(--border)'};box-shadow:0 1px 4px rgba(0,0,0,0.15)" title="${state.lang==='ka'?'ყველა':'All'}"></div>
            ${[...new Set(FILAMENT_PRODUCTS.filter(p=>typeFilter==='all'||p.type===typeFilter).map(p=>JSON.stringify({name:p.colorName,hex:p.colorHex})))].map(s=>{
              const {name,hex} = JSON.parse(s);
              const isSelected = colorFilter === name;
              return `<div onclick="navigateFilament('${typeFilter}','${name}')" style="width:28px;height:28px;border-radius:50%;background:${hex};cursor:pointer;border:3px solid ${isSelected?'var(--accent)':'rgba(0,0,0,0.1)'};box-shadow:0 1px 4px rgba(0,0,0,0.2);transition:all 0.15s" title="${name}"></div>`;
            }).join('')}
          </div>

          ${colorFilter ? `<div style="background:var(--accent-light);border:1px solid var(--accent-light2);border-radius:var(--radius);padding:8px 12px;font-size:12px;color:var(--accent);font-weight:600;display:flex;align-items:center;gap:8px;margin-bottom:1rem">
            <div style="width:14px;height:14px;border-radius:50%;background:${FILAMENT_PRODUCTS.find(p=>p.colorName===colorFilter)?.colorHex||'#888'};border:1px solid rgba(0,0,0,0.1)"></div>
            ${colorFilter}
            <button onclick="navigateFilament('${typeFilter}','')" style="margin-left:auto;background:none;border:none;color:var(--accent);cursor:pointer;font-size:14px">×</button>
          </div>` : ''}

          <div class="filter-group">
            <div class="filter-title">${state.lang==='ka'?'მასალა':'Material'}</div>
            <div class="filter-options">
              ${types.map(tp=>`<label class="filter-option">
                <input type="radio" name="ftype" ${typeFilter===tp?'checked':''} onchange="navigateFilament('${tp}','${colorFilter}')">
                <label>${tp==='all'?(state.lang==='ka'?'ყველა':'All'):tp}</label>
                <span class="count">${tp==='all'?FILAMENT_PRODUCTS.length:FILAMENT_PRODUCTS.filter(p=>p.type===tp).length}</span>
              </label>`).join('')}
            </div>
          </div>

          <div class="filter-group" style="border:none;padding:0">
            <div class="filter-title">${state.lang==='ka'?'მარაგი':'Stock'}</div>
            <div class="filter-options">
              <label class="filter-option"><input type="checkbox" checked><label>${state.lang==='ka'?'მარაგშია':'In stock'}</label></label>
            </div>
          </div>
        </div>
      </aside>

      <!-- GRID -->
      <div style="flex:1;min-width:0">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.25rem">
          <div style="font-size:14px;color:var(--text2)">${state.lang==='ka'?'ნაპოვნია':'Found'}: <strong>${products.length}</strong></div>
          <div style="display:flex;gap:8px;align-items:center">
            <select class="sort-select">
              <option>${state.lang==='ka'?'შერჩევით':'Default'}</option>
              <option>${state.lang==='ka'?'ფასი ↑':'Price ↑'}</option>
              <option>${state.lang==='ka'?'ფასი ↓':'Price ↓'}</option>
            </select>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:14px">
          ${products.map(p => filamentCardHTML(p)).join('')}
        </div>
      </div>
    </div>
  </div>`;
}

function navigateFilament(type, color) {
  const params = new URLSearchParams({ page: 'filament' });
  if (type && type !== 'all') params.set('ftype', type);
  if (color) params.set('fcolor', color);
  window.history.pushState({}, '', '?' + params.toString());
  renderPage();
  window.scrollTo(0, 0);
}

function filamentCardHTML(p) {
  const l = t();
  const isLight = isLightColor(p.colorHex);
  const textColor = isLight ? '#1a1a1a' : '#ffffff';
  return `
  <div class="product-card" onclick="navigate('filament_detail','sku=${p.sku}&type=${encodeURIComponent(p.type)}&color=${encodeURIComponent(p.colorName)}')" style="cursor:pointer">
    <!-- Color block -->
    <div style="height:140px;background:${p.colorHex};display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;transition:all 0.2s">
      ${p.badge==='hot'?`<span style="position:absolute;top:8px;left:8px;background:rgba(255,255,255,0.9);color:var(--red);font-size:10px;font-weight:700;padding:2px 8px;border-radius:10px">● HOT</span>`:''}
      <div style="font-size:36px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3))">🧵</div>
      <div style="font-size:11px;font-weight:700;color:${textColor};opacity:0.85;margin-top:6px;background:rgba(0,0,0,0.15);padding:3px 10px;border-radius:20px">${p.colorName}</div>
    </div>
    <div class="product-info">
      <div class="product-brand" style="display:flex;align-items:center;gap:6px">
        Bambu Lab
        <div style="width:10px;height:10px;border-radius:50%;background:${p.colorHex};border:1px solid rgba(0,0,0,0.15)"></div>
      </div>
      <div class="product-name" style="font-size:13px">${p.type} — ${p.colorName}</div>
      <div class="product-specs">
        <span class="spec-tag">${p.diameter}</span>
        <span class="spec-tag">${p.weight}</span>
        ${p.hasSpool&&p.hasRefill?`<span class="spec-tag" style="background:var(--accent-light);color:var(--accent);border-color:var(--accent-light2)">${state.lang==='ka'?'სპული+რეფილი':'Spool+Refill'}</span>`:''}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px">
        <div>
          <div style="font-size:18px;font-weight:800">₾${p.price}</div>
          ${p.hasSpool&&p.hasRefill?`<div style="font-size:10px;color:var(--text3)">${state.lang==='ka'?'სპული':'Spool'}: ₾${p.spoolPrice}</div>`:''}
        </div>
        <button class="btn btn-primary btn-xs" onclick="event.stopPropagation();addToCart({id:${p.id},name:'BambuLab ${p.type} ${p.colorName}',price:${p.price},icon:'🧵'})">
          <i class="ti ti-shopping-cart"></i>
        </button>
      </div>
    </div>
  </div>`;
}

/* ── FILAMENT DETAIL PAGE ── */
function renderFilamentDetail() {
  const sku = getParam('sku');
  const type = decodeURIComponent(getParam('type') || '');
  const colorName = decodeURIComponent(getParam('color') || '');

  const product = FILAMENT_PRODUCTS.find(p => p.type === type && p.colorName === colorName) || FILAMENT_PRODUCTS[0];
  const info = FILAMENT_DESCRIPTIONS[product.type] || FILAMENT_DESCRIPTIONS['PLA Basic'];
  const hex = product.colorHex;
  const isLight = isLightColor(hex);
  const textOnColor = isLight ? '#1a1a1a' : '#ffffff';

  // Same-type products for color picker
  const sameType = FILAMENT_PRODUCTS.filter(p => p.type === product.type);
  // Variants: refill vs spool
  const refill = FILAMENT_INVENTORY.find(i => i.sku === product.sku && !i.spool);
  const spool = FILAMENT_INVENTORY.find(i => i.sku === product.sku && i.spool);

  const l = t();

  return `
  <div style="background:var(--bg2);border-bottom:1px solid var(--border)">
    <div class="container">
      <nav class="breadcrumbs">
        <a onclick="navigate('home')">${state.lang==='ka'?'მთავარი':'Home'}</a>
        <i class="ti ti-chevron-right" style="font-size:12px"></i>
        <a onclick="navigateFilament('all','')">${state.lang==='ka'?'ფილამენტი':'Filament'}</a>
        <i class="ti ti-chevron-right" style="font-size:12px"></i>
        <a onclick="navigateFilament('${product.type}','')">${product.type}</a>
        <i class="ti ti-chevron-right" style="font-size:12px"></i>
        <span>${product.colorName}</span>
      </nav>
    </div>
  </div>

  <div class="container" style="padding-top:2rem;padding-bottom:3rem">
    <div class="product-page-grid">
      <!-- LEFT: Color visual -->
      <div>
        <div style="border-radius:var(--radius-xl);overflow:hidden;height:360px;background:${hex};display:flex;align-items:center;justify-content:center;flex-direction:column;gap:1rem;position:relative;box-shadow:0 8px 32px ${hex}66">
          <div style="font-size:80px;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.3))">🧵</div>
          <div style="color:${textOnColor};font-size:18px;font-weight:700;opacity:0.9">${product.colorName}</div>
          <div style="color:${textOnColor};font-size:13px;opacity:0.6">${product.type}</div>
          <div style="position:absolute;bottom:16px;left:16px;background:rgba(0,0,0,0.25);color:#fff;padding:4px 12px;border-radius:20px;font-size:11px;font-weight:700;font-family:monospace">${hex.toUpperCase()}</div>
        </div>

        <!-- Color picker: same type -->
        <div style="margin-top:1.5rem">
          <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:var(--text3);margin-bottom:10px">${state.lang==='ka'?'სხვა ფერები':'Other colors'} — ${product.type}</div>
          <div style="display:flex;flex-wrap:wrap;gap:8px">
            ${sameType.map(sp=>`
            <div onclick="navigate('filament_detail','sku=${sp.sku}&type=${encodeURIComponent(sp.type)}&color=${encodeURIComponent(sp.colorName)}')"
              title="${sp.colorName}"
              style="width:32px;height:32px;border-radius:50%;background:${sp.colorHex};cursor:pointer;border:3px solid ${sp.colorName===product.colorName?'var(--accent)':'rgba(0,0,0,0.1)'};box-shadow:0 2px 6px rgba(0,0,0,0.2);transition:all 0.15s">
            </div>`).join('')}
          </div>
        </div>
      </div>

      <!-- RIGHT: Details -->
      <div>
        <div style="font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--text3)">Bambu Lab</div>
        <h1 style="font-size:26px;font-weight:800;letter-spacing:-0.5px;margin:6px 0">BambuLab ${product.type}</h1>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:1rem">
          <div style="width:20px;height:20px;border-radius:50%;background:${hex};border:2px solid rgba(0,0,0,0.1)"></div>
          <span style="font-size:15px;font-weight:600">${product.colorName}</span>
          <span style="font-size:12px;color:var(--text3);font-family:monospace">${hex.toUpperCase()}</span>
        </div>

        <div style="display:flex;align-items:center;gap:6px;margin-bottom:1.5rem">
          <span style="color:#f59e0b;font-size:13px">★★★★★</span>
          <span style="font-size:12px;color:var(--text3)">(${product.reviews} ${state.lang==='ka'?'მიმოხილვა':'reviews'})</span>
          ${product.inStock?`<span class="badge badge-green" style="margin-left:8px"><span class="badge-dot"></span>${state.lang==='ka'?'მარაგშია':'In stock'} (${product.stock})</span>`:'<span class="badge badge-red">Out of stock</span>'}
        </div>

        <!-- Variant selector: Refill vs Spool -->
        <div style="margin-bottom:1.5rem">
          <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:var(--text3);margin-bottom:10px">${state.lang==='ka'?'ტიპი':'Type'}</div>
          <div style="display:flex;gap:10px" id="variant-selector">
            ${refill ? `
            <div class="radio-option selected" id="var-refill" onclick="selectVariant('refill',${refill.price})" style="flex:1;cursor:pointer">
              <div>
                <div style="font-size:13px;font-weight:700">${state.lang==='ka'?'რეფილი (Refill)':'Refill'}</div>
                <div style="font-size:11px;color:var(--text3)">${state.lang==='ka'?'გამოიყენება BambuLab სპულით':'Use with BambuLab spool'}</div>
              </div>
              <span style="font-size:16px;font-weight:800;color:var(--accent)">₾${refill.price}</span>
            </div>` : ''}
            ${spool ? `
            <div class="radio-option ${!refill?'selected':''}" id="var-spool" onclick="selectVariant('spool',${spool.price})" style="flex:1;cursor:pointer">
              <div>
                <div style="font-size:13px;font-weight:700">${state.lang==='ka'?'სპულით (Spool)':'With Spool'}</div>
                <div style="font-size:11px;color:var(--text3)">${state.lang==='ka'?'მოყვება სპული':'Includes reusable spool'}</div>
              </div>
              <span style="font-size:16px;font-weight:800;color:var(--accent)">₾${spool.price}</span>
            </div>` : ''}
          </div>
        </div>

        <div style="font-size:32px;font-weight:800;letter-spacing:-1px;margin-bottom:1.5rem" id="filament-price">
          ₾${product.price}
        </div>

        <div style="display:flex;gap:10px;margin-bottom:1.5rem;flex-wrap:wrap">
          <button class="btn btn-primary" style="flex:1;justify-content:center;padding:14px" onclick="addFilamentToCart('BambuLab ${product.type} ${product.colorName}',${product.id})">
            <i class="ti ti-shopping-cart"></i>${state.lang==='ka'?'კალათაში':'Add to cart'}
          </button>
          <button class="btn btn-outline" style="flex:1;justify-content:center" onclick="addFilamentToCart('BambuLab ${product.type} ${product.colorName}',${product.id});navigate('cart')">
            <i class="ti ti-bolt"></i>${state.lang==='ka'?'ყიდვა':'Buy now'}
          </button>
        </div>

        <div style="background:var(--bg2);border:1px solid var(--border);border-radius:var(--radius-lg);padding:1.25rem;display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:1.5rem">
          ${Object.entries(info.specs).map(([k,v])=>`
          <div>
            <div style="font-size:10px;color:var(--text3);font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:2px">${k}</div>
            <div style="font-size:13px;font-weight:700">${v}</div>
          </div>`).join('')}
        </div>

        <div class="product-meta">
          <div class="product-meta-row"><i class="ti ti-truck"></i>${state.lang==='ka'?'მიტანა 1–3 დღე':'Delivery 1–3 days'}</div>
          <div class="product-meta-row"><i class="ti ti-shield-check"></i>${state.lang==='ka'?'ოფიციალური BambuLab':'Official BambuLab'}</div>
          <div class="product-meta-row"><i class="ti ti-refresh"></i>${state.lang==='ka'?'დაბრუნება 14 დღეში':'14-day returns'}</div>
        </div>
      </div>
    </div>

    <!-- DESCRIPTION TABS -->
    <div style="margin-top:3rem">
      <div class="tabs">
        ${[['desc',l.tabDesc],['specs',l.tabSpecs],['compat','${state.lang==="ka"?"თავსებადობა":"Compatibility"}']].map(([id,nm],i)=>`<button class="tab-btn ${i===0?'active':''}" onclick="switchTab('${id}',this)">${nm}</button>`).join('')}
      </div>
      <div class="tab-content active" id="tab-desc">
        <p style="font-size:14px;line-height:1.8;color:var(--text2)">${state.lang==='ka'?info.desc_ka:info.desc_en}</p>
      </div>
      <div class="tab-content" id="tab-specs">
        <table class="specs-table">
          ${Object.entries(info.specs).map(([k,v])=>`<tr><td>${k}</td><td><strong>${v}</strong></td></tr>`).join('')}
          <tr><td>SKU</td><td><strong>${product.sku}</strong></td></tr>
          <tr><td>${state.lang==='ka'?'ფერის კოდი':'Color code'}</td><td><strong style="font-family:monospace">${hex.toUpperCase()}</strong></td></tr>
        </table>
      </div>
      <div class="tab-content" id="tab-compat">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:8px">
          ${['Bambu Lab X1 Carbon','Bambu Lab P1S','Bambu Lab A1 Mini','Bambu Lab X1E','Creality K2 Plus','All FDM printers'].map(pr=>`
          <div style="display:flex;align-items:center;gap:8px;padding:10px;background:var(--bg2);border-radius:var(--radius);border:1px solid var(--border)">
            <i class="ti ti-check" style="color:var(--green);font-size:16px"></i>
            <span style="font-size:12px;font-weight:600">${pr}</span>
          </div>`).join('')}
        </div>
      </div>
    </div>

    <!-- SAME TYPE OTHER COLORS -->
    <div style="margin-top:3rem">
      <div class="section-title" style="font-size:20px;margin-bottom:1.5rem">${state.lang==='ka'?product.type+'-ის სხვა ფერები':'More '+product.type+' colors'}</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px">
        ${sameType.filter(p=>p.colorName!==product.colorName).slice(0,8).map(p=>filamentCardHTML(p)).join('')}
      </div>
    </div>
  </div>`;
}

let selectedVariant = 'refill';
let selectedVariantPrice = 0;

function selectVariant(type, price) {
  selectedVariant = type;
  selectedVariantPrice = price;
  document.querySelectorAll('#variant-selector .radio-option').forEach(el => el.classList.remove('selected'));
  document.getElementById('var-' + type)?.classList.add('selected');
  const priceEl = document.getElementById('filament-price');
  if (priceEl) priceEl.textContent = '₾' + price;
}

function addFilamentToCart(name, id) {
  const price = selectedVariantPrice || FILAMENT_PRODUCTS.find(p=>p.id===id)?.price || 60;
  addToCart({ id, name: name + (selectedVariant==='spool'?' (Spool)':' (Refill)'), price, icon: '🧵' });
}

function isLightColor(hex) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return (r*299 + g*587 + b*114) / 1000 > 150;
}
