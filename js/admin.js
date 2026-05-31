/* ── 3DHUB.GE ADMIN PANEL + CRM ── */
/* Login: admin / 3dhub2025 */

/* ── AUTH ── */
const ADMIN_CREDENTIALS = { login: 'admin', password: '3dhub2025' };

function checkAdminAuth() {
  return sessionStorage.getItem('admin_auth') === 'yes';
}

function adminLogin(login, password) {
  if (login === ADMIN_CREDENTIALS.login && password === ADMIN_CREDENTIALS.password) {
    sessionStorage.setItem('admin_auth', 'yes');
    return true;
  }
  return false;
}

function adminLogout() {
  sessionStorage.removeItem('admin_auth');
  renderPage();
}

/* ── PERSISTENT STORAGE (localStorage) ── */
function loadAdminData() {
  const defaults = {
    orders: [
      { id: 'ORD-2501', date: '31.05.2025', client: 'გიორგი კ.', phone: '+995 598 100 200', email: 'george@mail.com', total: 3490, status: 'paid', items: 'Bambu Lab X1 Carbon Combo', comment: '', city: 'თბილისი' },
      { id: 'ORD-2500', date: '30.05.2025', client: 'ნინო მ.', phone: '+995 577 200 300', email: 'nino@mail.com', total: 108, status: 'shipped', items: 'PLA White 1kg x2, ABS Grey', comment: '', city: 'ბათუმი' },
      { id: 'ORD-2499', date: '30.05.2025', client: 'ალექსი ბ.', phone: '+995 555 300 400', email: 'alexi@mail.com', total: 2190, status: 'new', items: 'Bambu Lab P1S', comment: 'სასწრაფოდ', city: 'თბილისი' },
      { id: 'ORD-2498', date: '29.05.2025', client: 'მარი ო.', phone: '+995 551 400 500', email: 'mari@mail.com', total: 390, status: 'done', items: 'Creality Ender-3 V3 SE', comment: '', city: 'ქუთაისი' },
      { id: 'ORD-2497', date: '29.05.2025', client: 'დავით ც.', phone: '+995 599 500 600', email: 'david@mail.com', total: 89, status: 'cancel', items: 'Creality Sonic Pad', comment: 'გაუქმება მოითხოვა', city: 'თბილისი' },
    ],
    leads: [
      { id: 1, name: 'ლევან კ.', phone: '+995 598 100 200', source: 'Website', service: '3D ბეჭდვა', status: 'new', date: '31.05.2025', comment: 'STL ფაილი გამოგზავნა', nextAction: '' },
      { id: 2, name: 'Ana Smith', phone: '+995 577 200 300', source: 'Instagram', service: 'Consultation', status: 'called', date: '30.05.2025', comment: 'Interested in X1C', nextAction: 'Send price list' },
      { id: 3, name: 'ზაზა ბ.', phone: '+995 555 300 400', source: 'Telegram', service: 'Repair', status: 'done', date: '29.05.2025', comment: 'შეკეთება დასრულდა', nextAction: '' },
    ],
    products: JSON.parse(JSON.stringify(PRODUCTS)),
    banners: [
      { id: 1, title_ka: 'Bambu Lab X1 Carbon — საუკეთესო CoreXY პრინტერი', title_en: 'Bambu Lab X1 Carbon — Best CoreXY Printer', subtitle_ka: 'ახლა განვადებით 12 თვეზე', subtitle_en: 'Now available on 12-month installment', btnText_ka: 'ყიდვა', btnText_en: 'Buy now', btnLink: '?page=product&id=1', bg: 'linear-gradient(135deg,#1a56db,#3b82f6)', active: true },
      { id: 2, title_ka: 'Bambu Lab A1 Mini — ბეჭდვა ყველასთვის', title_en: 'Bambu Lab A1 Mini — Printing for everyone', subtitle_ka: 'დამწყებებისთვის საუკეთესო არჩევანი', subtitle_en: 'Best choice for beginners', btnText_ka: 'გაიგეთ მეტი', btnText_en: 'Learn more', btnLink: '?page=product&id=3', bg: 'linear-gradient(135deg,#7c3aed,#a855f7)', active: false },
    ],
    promos: [
      { id: 1, code: 'PRINT10', discount: 10, type: 'percent', minOrder: 0, active: true, uses: 14, desc: '10% ფასდაკლება' },
      { id: 2, code: 'BAMBU500', discount: 500, type: 'fixed', minOrder: 3000, active: true, uses: 3, desc: '₾500 ფასდაკლება Bambu Lab-ზე' },
      { id: 3, code: 'WELCOME', discount: 5, type: 'percent', minOrder: 0, active: false, uses: 28, desc: '5% პირველი შეკვეთისთვის' },
    ],
    settings: {
      siteName: '3DHub.ge',
      phone: '+995 555 000 000',
      email: 'info@3dhub.ge',
      address_ka: 'თბილისი, რუსთაველის 42',
      address_en: 'Tbilisi, Rustaveli 42',
      freeDelivery: 300,
      deliveryCost: 15,
      tgBot: '',
      tgChat: '',
      workHours: 'ორ–შაბ: 10:00–19:00',
    }
  };
  
  const saved = localStorage.getItem('admin_data');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      return { ...defaults, ...parsed };
    } catch(e) {}
  }
  return defaults;
}

function saveAdminData(data) {
  localStorage.setItem('admin_data', JSON.stringify(data));
}

let AD = loadAdminData(); // Admin Data shortcut

/* ── ADMIN SECTION STATE ── */
let adminSection = 'dashboard';

/* ── MAIN ADMIN RENDER ── */
function renderAdmin() {
  if (!checkAdminAuth()) return renderAdminLogin();
  return `
  <div class="admin-layout">
    <aside class="admin-sidebar">
      <div class="admin-logo">
        <div class="admin-logo-text">3D<span>Hub</span>.ge</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:2px">Admin Panel</div>
      </div>
      <nav class="admin-nav">
        <div class="admin-nav-section">მთავარი</div>
        ${adminNavItem('dashboard','ti-layout-dashboard','Dashboard')}
        ${adminNavItem('orders','ti-shopping-bag','შეკვეთები')}
        ${adminNavItem('leads','ti-user-plus','CRM / ლიდები')}
        ${adminNavItem('customers','ti-users','კლიენტები')}
        <div class="admin-nav-section">კატალოგი</div>
        ${adminNavItem('products','ti-box','პროდუქტები')}
        ${adminNavItem('categories','ti-category','კატეგორიები')}
        ${adminNavItem('stock','ti-packages','მარაგი / Stock')}
        <div class="admin-nav-section">მარკეტინგი</div>
        ${adminNavItem('banners','ti-photo','ბანერები')}
        ${adminNavItem('promos','ti-tag','აქციები / კოდები')}
        ${adminNavItem('services_admin','ti-tool','სერვის-განაცხადები')}
        <div class="admin-nav-section">კონტენტი</div>
        ${adminNavItem('blog_admin','ti-article','ბლოგი')}
        ${adminNavItem('faq_admin','ti-help-circle','FAQ')}
        ${adminNavItem('reviews_admin','ti-star','მიმოხილვები')}
        <div class="admin-nav-section">სისტემა</div>
        ${adminNavItem('settings','ti-settings','პარამეტრები')}
      </nav>
      <div style="padding:1rem 1.25rem;border-top:1px solid rgba(255,255,255,0.1)">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
          <div style="width:32px;height:32px;border-radius:50%;background:#3b82f6;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff">AD</div>
          <div><div style="font-size:12px;font-weight:600;color:#fff">Admin</div><div style="font-size:10px;color:rgba(255,255,255,0.4)">admin@3dhub.ge</div></div>
        </div>
        <div style="display:flex;gap:6px">
          <button onclick="navigate('home')" style="flex:1;padding:7px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.1);border-radius:6px;color:rgba(255,255,255,0.7);font-size:11px;cursor:pointer;font-family:var(--ff);display:flex;align-items:center;gap:5px;justify-content:center"><i class="ti ti-external-link"></i>საიტი</button>
          <button onclick="adminLogout()" style="flex:1;padding:7px;background:rgba(239,68,68,0.15);border:1px solid rgba(239,68,68,0.3);border-radius:6px;color:#f87171;font-size:11px;cursor:pointer;font-family:var(--ff);display:flex;align-items:center;gap:5px;justify-content:center"><i class="ti ti-logout"></i>გასვლა</button>
        </div>
      </div>
    </aside>
    <div class="admin-main">
      <div class="admin-topbar">
        <div style="display:flex;align-items:center;gap:12px">
          <h1 id="admin-section-title" style="font-size:18px;font-weight:700">${getAdminSectionTitle()}</h1>
        </div>
        <div style="display:flex;align-items:center;gap:10px">
          <div class="search-bar"><i class="ti ti-search"></i><input type="text" placeholder="ძებნა..." id="admin-global-search" oninput="adminGlobalSearch(this.value)"></div>
          <div class="icon-btn" style="position:relative">
            <i class="ti ti-bell"></i>
            <span class="cart-count" style="display:flex">${AD.leads.filter(l=>l.status==='new').length + AD.orders.filter(o=>o.status==='new').length}</span>
          </div>
        </div>
      </div>
      <div class="admin-content" id="admin-section-content">
        ${renderAdminSection()}
      </div>
    </div>
  </div>`;
}

function adminNavItem(section, icon, name) {
  return `<div class="admin-nav-item ${adminSection===section?'active':''}" onclick="setAdminSection('${section}')"><i class="ti ${icon}"></i>${name}</div>`;
}

function getAdminSectionTitle() {
  const titles = { dashboard:'Dashboard', orders:'შეკვეთები', leads:'CRM / ლიდები', customers:'კლიენტები', products:'პროდუქტები', categories:'კატეგორიები', stock:'მარაგი', banners:'ბანერები', promos:'აქციები', services_admin:'სერვის-განაცხადები', blog_admin:'ბლოგი', faq_admin:'FAQ', reviews_admin:'მიმოხილვები', settings:'პარამეტრები' };
  return titles[adminSection] || 'Admin';
}

function setAdminSection(s) {
  adminSection = s;
  const titleEl = document.getElementById('admin-section-title');
  const contentEl = document.getElementById('admin-section-content');
  if (titleEl) titleEl.textContent = getAdminSectionTitle();
  if (contentEl) contentEl.innerHTML = renderAdminSection();
  document.querySelectorAll('.admin-nav-item').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.admin-nav-item').forEach(el => {
    if (el.getAttribute('onclick') === `setAdminSection('${s}')`) el.classList.add('active');
  });
}

function renderAdminSection() {
  switch(adminSection) {
    case 'dashboard': return renderAdminDashboard();
    case 'orders': return renderAdminOrders();
    case 'leads': return renderAdminLeads();
    case 'customers': return renderAdminCustomers();
    case 'products': return renderAdminProducts();
    case 'categories': return renderAdminCategories();
    case 'stock': return renderAdminStock();
    case 'banners': return renderAdminBanners();
    case 'promos': return renderAdminPromos();
    case 'services_admin': return renderAdminServiceRequests();
    case 'blog_admin': return renderAdminBlog();
    case 'faq_admin': return renderAdminFAQ();
    case 'reviews_admin': return renderAdminReviews();
    case 'settings': return renderAdminSettings();
    default: return `<div class="empty-state"><div class="empty-icon"><i class="ti ti-tools"></i></div><div class="empty-title">Coming soon</div></div>`;
  }
}

/* ── LOGIN PAGE ── */
function renderAdminLogin() {
  return `
  <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:var(--bg2)">
    <div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-xl);padding:2.5rem;width:100%;max-width:380px;box-shadow:var(--shadow-lg)">
      <div style="text-align:center;margin-bottom:2rem">
        <div style="font-size:32px;font-weight:800;letter-spacing:-1px;margin-bottom:4px">3D<span style="color:var(--accent)">Hub</span>.ge</div>
        <div style="font-size:13px;color:var(--text3)">Admin Panel</div>
      </div>
      <div class="form-group">
        <label class="form-label">Login</label>
        <input class="form-input" type="text" id="al-login" placeholder="admin" onkeydown="if(event.key==='Enter')doAdminLogin()">
      </div>
      <div class="form-group">
        <label class="form-label">Password</label>
        <input class="form-input" type="password" id="al-pass" placeholder="••••••••" onkeydown="if(event.key==='Enter')doAdminLogin()">
      </div>
      <div id="al-error" style="display:none;color:var(--red);font-size:12px;margin-bottom:12px;padding:8px 12px;background:var(--red-light);border-radius:var(--radius-sm)">
        <i class="ti ti-alert-circle"></i> არასწორი login ან პაროლი
      </div>
      <button class="btn btn-primary" style="width:100%;justify-content:center;padding:13px" onclick="doAdminLogin()">
        <i class="ti ti-login"></i>შესვლა
      </button>
      <div style="text-align:center;margin-top:1rem;font-size:12px;color:var(--text3)">
        <a onclick="navigate('home')" style="color:var(--accent);cursor:pointer">← საიტზე დაბრუნება</a>
      </div>
    </div>
  </div>`;
}

function doAdminLogin() {
  const login = document.getElementById('al-login')?.value;
  const pass = document.getElementById('al-pass')?.value;
  if (adminLogin(login, pass)) {
    renderPage();
  } else {
    document.getElementById('al-error').style.display = 'block';
  }
}

/* ── DASHBOARD ── */
function renderAdminDashboard() {
  const revenue = AD.orders.filter(o=>o.status!=='cancel').reduce((s,o)=>s+o.total,0);
  const newOrders = AD.orders.filter(o=>o.status==='new').length;
  const newLeads = AD.leads.filter(l=>l.status==='new').length;
  const totalProducts = AD.products.length;
  const inStockCount = AD.products.filter(p=>p.inStock).length;

  return `
  <div class="stat-cards">
    ${[
      { label:'შემოსავალი', value:'₾'+revenue.toLocaleString(), change:'+18% ბოლო თვეს', icon:'ti-currency-dollar', bg:'var(--accent-light)', c:'var(--accent)' },
      { label:'შეკვეთები სულ', value:AD.orders.length, change:`${newOrders} ახალი`, icon:'ti-shopping-bag', bg:'var(--green-light)', c:'var(--green)' },
      { label:'ლიდები (CRM)', value:AD.leads.length, change:`${newLeads} დამუშავება`, icon:'ti-user-plus', bg:'var(--purple-light)', c:'var(--purple)' },
      { label:'პროდუქტები', value:totalProducts, change:`${inStockCount} მარაგშია`, icon:'ti-box', bg:'var(--amber-light)', c:'var(--amber)' },
    ].map(s=>`
    <div class="stat-card">
      <div style="display:flex;align-items:flex-start;justify-content:space-between">
        <div>
          <div class="stat-card-label">${s.label}</div>
          <div class="stat-card-value">${s.value}</div>
          <div class="stat-card-change">${s.change}</div>
        </div>
        <div style="width:44px;height:44px;border-radius:10px;background:${s.bg};display:flex;align-items:center;justify-content:center;color:${s.c};font-size:20px"><i class="ti ${s.icon}"></i></div>
      </div>
    </div>`).join('')}
  </div>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-top:1.5rem">
    <div class="admin-card">
      <div class="admin-section-header">
        <h2>ბოლო შეკვეთები</h2>
        <button class="btn btn-outline btn-xs" onclick="setAdminSection('orders')">ყველა →</button>
      </div>
      <table class="data-table">
        <thead><tr><th>#</th><th>კლიენტი</th><th>თანხა</th><th>სტატუსი</th></tr></thead>
        <tbody>
          ${AD.orders.slice(0,5).map(o=>`
          <tr>
            <td style="font-weight:700;color:var(--accent)">${o.id}</td>
            <td><div style="font-weight:600">${o.client}</div><div style="font-size:11px;color:var(--text3)">${o.city}</div></td>
            <td style="font-weight:800">₾${o.total.toLocaleString()}</td>
            <td>${statusPill(o.status)}</td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
    <div class="admin-card">
      <div class="admin-section-header">
        <h2>CRM — ახალი ლიდები</h2>
        <button class="btn btn-outline btn-xs" onclick="setAdminSection('leads')">ყველა →</button>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px">
        ${AD.leads.map(l=>`
        <div style="display:flex;align-items:center;gap:10px;padding:10px;background:var(--bg2);border-radius:var(--radius);border:1px solid var(--border)">
          <div class="avatar" style="background:var(--accent-light);color:var(--accent);width:36px;height:36px;font-size:12px">${l.name.substring(0,2)}</div>
          <div style="flex:1">
            <div style="font-size:13px;font-weight:600">${l.name}</div>
            <div style="font-size:11px;color:var(--text3)">${l.service} · ${l.source} · ${l.date}</div>
          </div>
          ${statusPill(l.status==='new'?'new':l.status==='called'?'paid':'done')}
          <a href="tel:${l.phone}" class="btn btn-outline btn-xs"><i class="ti ti-phone"></i></a>
        </div>`).join('')}
      </div>
    </div>
  </div>

  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:1.5rem">
    <div class="admin-card" style="grid-column:1/3">
      <div class="admin-section-header"><h2>ბოლო 7 დღის გაყიდვები</h2></div>
      <div style="display:flex;align-items:flex-end;gap:8px;height:100px">
        ${[42,78,55,90,65,110,95].map((v,i)=>{
          const days=['ორ','სამ','ოთხ','ხუთ','პარ','შაბ','კვი'];
          return `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px">
            <div style="flex:1;display:flex;align-items:flex-end;width:100%">
              <div style="width:100%;background:var(--accent);border-radius:4px 4px 0 0;height:${v}%;opacity:${i===6?1:0.6}"></div>
            </div>
            <div style="font-size:10px;color:var(--text3)">${days[i]}</div>
          </div>`;
        }).join('')}
      </div>
    </div>
    <div class="admin-card">
      <div style="font-size:13px;font-weight:700;margin-bottom:1rem">სტატუსები</div>
      ${['new','paid','shipped','done','cancel'].map(s=>{
        const count = AD.orders.filter(o=>o.status===s).length;
        const pct = Math.round(count/AD.orders.length*100)||0;
        return `<div style="margin-bottom:8px">
          <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:3px"><span>${s}</span><span style="font-weight:700">${count}</span></div>
          <div style="height:5px;background:var(--bg3);border-radius:3px"><div style="height:5px;background:var(--accent);border-radius:3px;width:${pct}%"></div></div>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}

/* ── ORDERS ── */
function renderAdminOrders() {
  return `
  <div class="admin-section-header">
    <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
      <div class="search-bar"><i class="ti ti-search"></i><input type="text" placeholder="ID, კლიენტი, ტელ..." oninput="filterOrders(this.value)"></div>
      <select class="sort-select" style="height:38px" onchange="filterOrderStatus(this.value)">
        <option value="">ყველა სტატუსი</option>
        <option value="new">ახალი</option><option value="paid">გადახდილი</option>
        <option value="shipped">გაგზავნილი</option><option value="done">შესრულდა</option><option value="cancel">გაუქმდა</option>
      </select>
    </div>
    <button class="btn btn-primary btn-sm" onclick="showCreateOrderModal()"><i class="ti ti-plus"></i>შეკვეთის შექმნა</button>
  </div>
  <table class="data-table" id="orders-table">
    <thead><tr><th>#</th><th>თარიღი</th><th>კლიენტი</th><th>პროდუქტი</th><th>თანხა</th><th>სტატუსი</th><th>მოქმედება</th></tr></thead>
    <tbody id="orders-tbody">
      ${AD.orders.map(o=>`
      <tr data-status="${o.status}" data-search="${o.id} ${o.client} ${o.phone} ${o.email}">
        <td><span style="font-weight:700;color:var(--accent);cursor:pointer" onclick="viewOrder('${o.id}')">${o.id}</span></td>
        <td style="font-size:12px">${o.date}</td>
        <td>
          <div style="font-weight:600;font-size:13px">${o.client}</div>
          <div style="font-size:11px;color:var(--text3)">${o.phone}</div>
          <div style="font-size:11px;color:var(--text3)">${o.city}</div>
        </td>
        <td style="font-size:12px;max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${o.items}">${o.items}</td>
        <td><span style="font-weight:800;font-size:14px">₾${o.total.toLocaleString()}</span></td>
        <td>
          <select class="sort-select" style="padding:4px 8px;font-size:11px;height:28px" onchange="updateOrderStatus('${o.id}',this.value)">
            ${['new','paid','shipped','done','cancel'].map(s=>`<option value="${s}" ${o.status===s?'selected':''}>${s}</option>`).join('')}
          </select>
        </td>
        <td>
          <div style="display:flex;gap:4px">
            <button class="btn btn-outline btn-xs" onclick="viewOrder('${o.id}')"><i class="ti ti-eye"></i></button>
            <button class="btn btn-outline btn-xs" onclick="editOrder('${o.id}')"><i class="ti ti-edit"></i></button>
            <button class="btn btn-danger btn-xs" onclick="deleteOrder('${o.id}')"><i class="ti ti-trash"></i></button>
          </div>
        </td>
      </tr>`).join('')}
    </tbody>
  </table>`;
}

function filterOrders(q) {
  document.querySelectorAll('#orders-tbody tr').forEach(r=>{
    r.style.display = r.dataset.search?.toLowerCase().includes(q.toLowerCase()) ? '' : 'none';
  });
}

function filterOrderStatus(s) {
  document.querySelectorAll('#orders-tbody tr').forEach(r=>{
    r.style.display = !s || r.dataset.status===s ? '' : 'none';
  });
}

function updateOrderStatus(id, status) {
  const o = AD.orders.find(o=>o.id===id);
  if (o) { o.status = status; saveAdminData(AD); showToast('სტატუსი განახლდა: '+status,'success'); }
}

function viewOrder(id) {
  const o = AD.orders.find(ord=>ord.id===id);
  if (!o) return;
  showAdminModal('შეკვეთა '+o.id, `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem">
      <div><div class="form-label">კლიენტი</div><div style="font-weight:600">${o.client}</div></div>
      <div><div class="form-label">ტელეფონი</div><div style="font-weight:600"><a href="tel:${o.phone}" style="color:var(--accent)">${o.phone}</a></div></div>
      <div><div class="form-label">Email</div><div style="font-size:13px">${o.email}</div></div>
      <div><div class="form-label">ქალაქი</div><div>${o.city}</div></div>
      <div><div class="form-label">თარიღი</div><div>${o.date}</div></div>
      <div><div class="form-label">სტატუსი</div><div>${statusPill(o.status)}</div></div>
    </div>
    <div style="background:var(--bg2);border-radius:var(--radius);padding:12px;margin-bottom:1rem">
      <div class="form-label" style="margin-bottom:4px">პროდუქტი</div>
      <div style="font-size:13px">${o.items}</div>
    </div>
    ${o.comment ? `<div style="background:var(--amber-light);border-radius:var(--radius);padding:12px;margin-bottom:1rem;font-size:13px"><i class="ti ti-message-circle" style="color:var(--amber)"></i> ${o.comment}</div>` : ''}
    <div style="display:flex;justify-content:space-between;align-items:center;border-top:2px solid var(--border);padding-top:12px">
      <span style="font-size:15px;font-weight:700">სულ</span>
      <span style="font-size:22px;font-weight:800;color:var(--accent)">₾${o.total.toLocaleString()}</span>
    </div>
    <div style="display:flex;gap:8px;margin-top:1rem">
      <button class="btn btn-outline btn-sm" style="flex:1;justify-content:center" onclick="window.print()"><i class="ti ti-printer"></i>ბეჭდვა</button>
      <button class="btn btn-primary btn-sm" style="flex:1;justify-content:center" onclick="editOrder('${o.id}');closeModal()"><i class="ti ti-edit"></i>რედაქტირება</button>
    </div>`);
}

function editOrder(id) {
  const o = AD.orders.find(ord=>ord.id===id);
  if (!o) return;
  showAdminModal('შეკვეთის რედაქტირება', `
    <div class="form-grid-2">
      <div class="form-group"><label class="form-label">კლიენტი</label><input class="form-input" id="eo-client" value="${o.client}"></div>
      <div class="form-group"><label class="form-label">ტელეფონი</label><input class="form-input" id="eo-phone" value="${o.phone}"></div>
      <div class="form-group"><label class="form-label">Email</label><input class="form-input" id="eo-email" value="${o.email}"></div>
      <div class="form-group"><label class="form-label">ქალაქი</label><input class="form-input" id="eo-city" value="${o.city}"></div>
    </div>
    <div class="form-group"><label class="form-label">პროდუქტი</label><input class="form-input" id="eo-items" value="${o.items}"></div>
    <div class="form-grid-2">
      <div class="form-group"><label class="form-label">თანხა ₾</label><input class="form-input" type="number" id="eo-total" value="${o.total}"></div>
      <div class="form-group"><label class="form-label">სტატუსი</label>
        <select class="form-input form-select" id="eo-status">
          ${['new','paid','shipped','done','cancel'].map(s=>`<option ${o.status===s?'selected':''}>${s}</option>`).join('')}
        </select>
      </div>
    </div>
    <div class="form-group"><label class="form-label">კომენტარი</label><textarea class="form-input form-textarea" id="eo-comment" style="min-height:60px">${o.comment}</textarea></div>
    <div style="display:flex;gap:8px">
      <button class="btn btn-primary" style="flex:1;justify-content:center" onclick="saveOrder('${o.id}')"><i class="ti ti-check"></i>შენახვა</button>
      <button class="btn btn-outline" onclick="closeModal()">გაუქმება</button>
    </div>`);
}

function saveOrder(id) {
  const o = AD.orders.find(ord=>ord.id===id);
  if (!o) return;
  o.client = document.getElementById('eo-client').value;
  o.phone = document.getElementById('eo-phone').value;
  o.email = document.getElementById('eo-email').value;
  o.city = document.getElementById('eo-city').value;
  o.items = document.getElementById('eo-items').value;
  o.total = parseInt(document.getElementById('eo-total').value)||0;
  o.status = document.getElementById('eo-status').value;
  o.comment = document.getElementById('eo-comment').value;
  saveAdminData(AD);
  showToast('შეკვეთა შენახულია','success');
  closeModal();
  setAdminSection('orders');
}

function deleteOrder(id) {
  if (!confirm('წავშალოთ შეკვეთა '+id+'?')) return;
  AD.orders = AD.orders.filter(o=>o.id!==id);
  saveAdminData(AD);
  showToast('შეკვეთა წაიშალა','error');
  setAdminSection('orders');
}

function showCreateOrderModal() {
  const newId = 'ORD-'+(parseInt(AD.orders[0]?.id?.split('-')[1]||2500)+1);
  showAdminModal('ახალი შეკვეთა', `
    <div class="form-grid-2">
      <div class="form-group"><label class="form-label">კლიენტი</label><input class="form-input" id="co-client" placeholder="სახელი გვარი"></div>
      <div class="form-group"><label class="form-label">ტელეფონი</label><input class="form-input" id="co-phone" placeholder="+995 5xx xxx xxx"></div>
      <div class="form-group"><label class="form-label">Email</label><input class="form-input" id="co-email" type="email"></div>
      <div class="form-group"><label class="form-label">ქალაქი</label><input class="form-input" id="co-city" placeholder="თბილისი"></div>
    </div>
    <div class="form-group"><label class="form-label">პროდუქტი</label>
      <select class="form-input form-select" id="co-product" onchange="updateOrderTotal()">
        ${AD.products.map(p=>`<option value="${p.name}|${p.price}">${p.name} — ₾${p.price}</option>`).join('')}
        <option value="სხვა|0">სხვა (ხელით შეყვანა)</option>
      </select>
    </div>
    <div class="form-grid-2">
      <div class="form-group"><label class="form-label">თანხა ₾</label><input class="form-input" type="number" id="co-total"></div>
      <div class="form-group"><label class="form-label">სტატუსი</label>
        <select class="form-input form-select" id="co-status">
          ${['new','paid','shipped','done','cancel'].map(s=>`<option>${s}</option>`).join('')}
        </select>
      </div>
    </div>
    <div class="form-group"><label class="form-label">კომენტარი</label><textarea class="form-input form-textarea" id="co-comment" style="min-height:60px"></textarea></div>
    <div style="display:flex;gap:8px">
      <button class="btn btn-primary" style="flex:1;justify-content:center" onclick="createOrder('${newId}')"><i class="ti ti-check"></i>შექმნა</button>
      <button class="btn btn-outline" onclick="closeModal()">გაუქმება</button>
    </div>`);
  setTimeout(updateOrderTotal, 100);
}

function updateOrderTotal() {
  const sel = document.getElementById('co-product');
  const totalEl = document.getElementById('co-total');
  if (sel && totalEl) {
    const price = sel.value.split('|')[1];
    if (price && price !== '0') totalEl.value = price;
  }
}

function createOrder(id) {
  const productSel = document.getElementById('co-product')?.value.split('|')[0];
  const order = {
    id, date: new Date().toLocaleDateString('ka-GE'),
    client: document.getElementById('co-client')?.value || '',
    phone: document.getElementById('co-phone')?.value || '',
    email: document.getElementById('co-email')?.value || '',
    city: document.getElementById('co-city')?.value || 'თბილისი',
    items: productSel || '',
    total: parseInt(document.getElementById('co-total')?.value)||0,
    status: document.getElementById('co-status')?.value || 'new',
    comment: document.getElementById('co-comment')?.value || '',
  };
  AD.orders.unshift(order);
  saveAdminData(AD);
  showToast('შეკვეთა შეიქმნა: '+id,'success');
  closeModal();
  setAdminSection('orders');
}

/* ── CRM / LEADS ── */
function renderAdminLeads() {
  const cols = [
    { key:'new', label:'ახალი', color:'var(--accent)' },
    { key:'called', label:'დაუკავშირდნენ', color:'var(--amber)' },
    { key:'negotiation', label:'მოლაპარაკება', color:'var(--purple)' },
    { key:'done', label:'დასრულდა', color:'var(--green)' },
    { key:'lost', label:'დაიკარგა', color:'var(--red)' },
  ];

  return `
  <div class="admin-section-header">
    <div style="display:flex;gap:8px">
      <div class="search-bar"><i class="ti ti-search"></i><input type="text" placeholder="სახელი, ტელ..." oninput="filterLeads(this.value)"></div>
      <select class="sort-select" style="height:38px" onchange="filterLeadSource(this.value)">
        <option value="">ყველა წყარო</option>
        ${['Website','Instagram','Telegram','Facebook','WhatsApp','Phone','Other'].map(s=>`<option>${s}</option>`).join('')}
      </select>
    </div>
    <button class="btn btn-primary btn-sm" onclick="showAddLeadModal()"><i class="ti ti-plus"></i>ლიდის დამატება</button>
  </div>

  <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:12px;overflow-x:auto" id="leads-board">
    ${cols.map(col=>`
    <div style="background:var(--bg2);border-radius:var(--radius-lg);padding:12px;min-height:300px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
        <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:${col.color}">${col.label}</div>
        <span style="background:${col.color}20;color:${col.color};font-size:11px;font-weight:700;padding:2px 8px;border-radius:10px">
          ${AD.leads.filter(l=>l.status===col.key).length}
        </span>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px" id="col-${col.key}">
        ${AD.leads.filter(l=>l.status===col.key).map(l=>leadCard(l)).join('')}
      </div>
    </div>`).join('')}
  </div>`;
}

function leadCard(l) {
  const sourceBadge = { Website:'🌐', Instagram:'📸', Telegram:'✈️', Facebook:'👤', WhatsApp:'💬', Phone:'📞' };
  return `
  <div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius);padding:12px;cursor:pointer" onclick="viewLead(${l.id})">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
      <div style="font-size:13px;font-weight:700">${l.name}</div>
      <span style="font-size:14px" title="${l.source}">${sourceBadge[l.source]||'📌'}</span>
    </div>
    <div style="font-size:11px;color:var(--text3);margin-bottom:4px">${l.service}</div>
    <div style="font-size:11px;color:var(--accent)">${l.phone}</div>
    ${l.comment ? `<div style="font-size:11px;color:var(--text2);margin-top:6px;padding:6px;background:var(--bg2);border-radius:4px">${l.comment}</div>` : ''}
    <div style="display:flex;gap:4px;margin-top:8px">
      <a href="tel:${l.phone}" class="btn btn-outline btn-xs" style="flex:1;justify-content:center" onclick="event.stopPropagation()"><i class="ti ti-phone"></i></a>
      <button class="btn btn-primary btn-xs" style="flex:1;justify-content:center" onclick="event.stopPropagation();moveLead(${l.id})"><i class="ti ti-arrow-right"></i></button>
      <button class="btn btn-danger btn-xs" onclick="event.stopPropagation();deleteLead(${l.id})"><i class="ti ti-trash"></i></button>
    </div>
    <div style="font-size:10px;color:var(--text3);margin-top:6px">${l.date}</div>
  </div>`;
}

function filterLeads(q) {
  AD.leads.forEach(l => {
    const el = document.querySelector(`[onclick="viewLead(${l.id})"]`);
    if (el) el.closest('div[style*="background:var(--bg)"]').style.display =
      (l.name+l.phone+l.service).toLowerCase().includes(q.toLowerCase()) ? '' : 'none';
  });
}

function filterLeadSource(src) {
  const board = document.getElementById('leads-board');
  if (!board) return;
  board.querySelectorAll('[onclick*="viewLead"]').forEach(el => {
    const card = el.closest('div[style*="background:var(--bg)"]');
    if (!card) return;
    const id = parseInt(el.getAttribute('onclick').match(/\d+/)[0]);
    const lead = AD.leads.find(l=>l.id===id);
    card.style.display = !src || lead?.source===src ? '' : 'none';
  });
}

function viewLead(id) {
  const l = AD.leads.find(lead=>lead.id===id);
  if (!l) return;
  const statuses = ['new','called','negotiation','done','lost'];
  showAdminModal('ლიდი: '+l.name, `
    <div class="form-grid-2" style="margin-bottom:1rem">
      <div><div class="form-label">სახელი</div><div style="font-weight:600">${l.name}</div></div>
      <div><div class="form-label">ტელეფონი</div><a href="tel:${l.phone}" style="color:var(--accent);font-weight:600">${l.phone}</a></div>
      <div><div class="form-label">სერვისი</div><div>${l.service}</div></div>
      <div><div class="form-label">წყარო</div><div>${l.source}</div></div>
    </div>
    <div class="form-group"><label class="form-label">სტატუსი</label>
      <select class="form-input form-select" id="vl-status">
        ${statuses.map(s=>`<option value="${s}" ${l.status===s?'selected':''}>${s}</option>`).join('')}
      </select>
    </div>
    <div class="form-group"><label class="form-label">კომენტარი</label><textarea class="form-input form-textarea" id="vl-comment" style="min-height:80px">${l.comment}</textarea></div>
    <div class="form-group"><label class="form-label">შემდეგი ნაბიჯი</label><input class="form-input" id="vl-next" value="${l.nextAction||''}"></div>
    <div style="display:flex;gap:8px">
      <button class="btn btn-primary" style="flex:1;justify-content:center" onclick="saveLead(${l.id})"><i class="ti ti-check"></i>შენახვა</button>
      <button class="btn btn-green" style="flex:1;justify-content:center" onclick="convertLeadToOrder(${l.id})"><i class="ti ti-shopping-bag"></i>შეკვეთად გადაყვანა</button>
    </div>`);
}

function saveLead(id) {
  const l = AD.leads.find(lead=>lead.id===id);
  if (!l) return;
  l.status = document.getElementById('vl-status')?.value || l.status;
  l.comment = document.getElementById('vl-comment')?.value || '';
  l.nextAction = document.getElementById('vl-next')?.value || '';
  saveAdminData(AD);
  showToast('ლიდი შენახულია','success');
  closeModal();
  setAdminSection('leads');
}

function moveLead(id) {
  const l = AD.leads.find(lead=>lead.id===id);
  if (!l) return;
  const order = ['new','called','negotiation','done','lost'];
  const idx = order.indexOf(l.status);
  if (idx < order.length-1) { l.status = order[idx+1]; saveAdminData(AD); setAdminSection('leads'); }
}

function deleteLead(id) {
  if (!confirm('წავშალოთ ლიდი?')) return;
  AD.leads = AD.leads.filter(l=>l.id!==id);
  saveAdminData(AD);
  setAdminSection('leads');
}

function convertLeadToOrder(id) {
  const l = AD.leads.find(lead=>lead.id===id);
  if (!l) return;
  closeModal();
  showCreateOrderModal();
  setTimeout(()=>{
    const clientEl = document.getElementById('co-client');
    const phoneEl = document.getElementById('co-phone');
    if (clientEl) clientEl.value = l.name;
    if (phoneEl) phoneEl.value = l.phone;
  }, 100);
}

function showAddLeadModal() {
  showAdminModal('ახალი ლიდი', `
    <div class="form-grid-2">
      <div class="form-group"><label class="form-label">სახელი</label><input class="form-input" id="nl-name" placeholder="სახელი გვარი"></div>
      <div class="form-group"><label class="form-label">ტელეფონი</label><input class="form-input" id="nl-phone" placeholder="+995 5xx xxx xxx"></div>
    </div>
    <div class="form-grid-2">
      <div class="form-group"><label class="form-label">სერვისი</label>
        <select class="form-input form-select" id="nl-service">
          ${['3D ბეჭდვა','3D სკანირება','3D მოდელირება','პრინტერის ყიდვა','რემონტი','კონსულტაცია','სხვა'].map(s=>`<option>${s}</option>`).join('')}
        </select>
      </div>
      <div class="form-group"><label class="form-label">წყარო</label>
        <select class="form-input form-select" id="nl-source">
          ${['Website','Instagram','Telegram','Facebook','WhatsApp','Phone','Other'].map(s=>`<option>${s}</option>`).join('')}
        </select>
      </div>
    </div>
    <div class="form-group"><label class="form-label">კომენტარი</label><textarea class="form-input form-textarea" id="nl-comment" style="min-height:80px" placeholder="რა სჭირდება, საიდან გაიგო..."></textarea></div>
    <div style="display:flex;gap:8px">
      <button class="btn btn-primary" style="flex:1;justify-content:center" onclick="createLead()"><i class="ti ti-check"></i>დამატება</button>
      <button class="btn btn-outline" onclick="closeModal()">გაუქმება</button>
    </div>`);
}

function createLead() {
  const newId = Math.max(...AD.leads.map(l=>l.id), 0) + 1;
  AD.leads.unshift({
    id: newId,
    name: document.getElementById('nl-name')?.value || '',
    phone: document.getElementById('nl-phone')?.value || '',
    service: document.getElementById('nl-service')?.value || '',
    source: document.getElementById('nl-source')?.value || '',
    comment: document.getElementById('nl-comment')?.value || '',
    status: 'new',
    date: new Date().toLocaleDateString('ka-GE'),
    nextAction: '',
  });
  saveAdminData(AD);
  showToast('ლიდი დაემატა','success');
  closeModal();
  setAdminSection('leads');
}

/* ── CUSTOMERS ── */
function renderAdminCustomers() {
  const customers = AD.orders.reduce((acc, o) => {
    const existing = acc.find(c=>c.phone===o.phone);
    if (existing) { existing.orders++; existing.total+=o.total; existing.lastOrder=o.date; }
    else acc.push({ name:o.client, phone:o.phone, email:o.email, city:o.city, orders:1, total:o.total, lastOrder:o.date });
    return acc;
  }, []).sort((a,b)=>b.total-a.total);

  return `
  <div class="admin-section-header">
    <div class="search-bar"><i class="ti ti-search"></i><input type="text" placeholder="კლიენტი, ტელ, email..." oninput="filterCustomers(this.value)"></div>
    <div style="font-size:13px;color:var(--text2)">სულ: <strong>${customers.length}</strong> კლიენტი</div>
  </div>
  <table class="data-table" id="customers-table">
    <thead><tr><th>კლიენტი</th><th>ქ-ი</th><th>შეკვეთები</th><th>სულ დახარჯა</th><th>ბოლო შეკვ.</th><th>მოქმედება</th></tr></thead>
    <tbody>
      ${customers.map(c=>`
      <tr data-search="${c.name} ${c.phone} ${c.email}">
        <td>
          <div style="display:flex;align-items:center;gap:10px">
            <div class="avatar" style="background:var(--accent-light);color:var(--accent)">${c.name.substring(0,2)}</div>
            <div><div style="font-weight:600">${c.name}</div><div style="font-size:11px;color:var(--text3)">${c.phone}</div></div>
          </div>
        </td>
        <td style="font-size:12px">${c.city||'—'}</td>
        <td><span style="font-weight:700;background:var(--accent-light);color:var(--accent);padding:2px 8px;border-radius:10px">${c.orders}</span></td>
        <td style="font-weight:800;color:var(--accent)">₾${c.total.toLocaleString()}</td>
        <td style="font-size:12px;color:var(--text3)">${c.lastOrder}</td>
        <td>
          <div style="display:flex;gap:4px">
            <a href="tel:${c.phone}" class="btn btn-outline btn-xs"><i class="ti ti-phone"></i></a>
            <a href="mailto:${c.email}" class="btn btn-outline btn-xs"><i class="ti ti-mail"></i></a>
            <button class="btn btn-primary btn-xs" onclick="addLeadFromCustomer('${c.name}','${c.phone}')"><i class="ti ti-user-plus"></i></button>
          </div>
        </td>
      </tr>`).join('')}
    </tbody>
  </table>`;
}

function filterCustomers(q) {
  document.querySelectorAll('#customers-table tbody tr').forEach(r=>{
    r.style.display = r.dataset.search?.toLowerCase().includes(q.toLowerCase()) ? '' : 'none';
  });
}

function addLeadFromCustomer(name, phone) {
  showAddLeadModal();
  setTimeout(()=>{
    const n = document.getElementById('nl-name');
    const p = document.getElementById('nl-phone');
    if (n) n.value = name;
    if (p) p.value = phone;
  }, 100);
}

/* ── PRODUCTS ── */
function renderAdminProducts() {
  return `
  <div class="admin-section-header">
    <div class="search-bar"><i class="ti ti-search"></i><input type="text" placeholder="პროდუქტი, ბრენდი..." oninput="filterAdminProducts(this.value)"></div>
    <button class="btn btn-primary btn-sm" onclick="showProductModal(null)"><i class="ti ti-plus"></i>პროდუქტის დამატება</button>
  </div>
  <table class="data-table" id="products-admin-table">
    <thead><tr><th>პროდუქტი</th><th>კატ.</th><th>ფასი</th><th>მარაგი</th><th>სტ.</th><th>მოქ.</th></tr></thead>
    <tbody>
      ${AD.products.map(p=>`
      <tr data-search="${p.name} ${p.brand} ${p.category}">
        <td>
          <div style="display:flex;align-items:center;gap:10px">
            <div style="width:40px;height:40px;background:var(--bg2);border:1px solid var(--border);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:20px">${p.icon||'📦'}</div>
            <div><div style="font-weight:600;font-size:13px">${p.name}</div><div style="font-size:11px;color:var(--text3)">${p.brand}</div></div>
          </div>
        </td>
        <td><span class="badge badge-blue" style="font-size:10px">${p.category}</span></td>
        <td>
          <div style="font-weight:800">₾${p.price?.toLocaleString()}</div>
          ${p.oldPrice?`<div style="font-size:11px;color:var(--text3);text-decoration:line-through">₾${p.oldPrice?.toLocaleString()}</div>`:''}
        </td>
        <td><input type="number" value="${p.stock||0}" min="0" style="width:60px;padding:4px 8px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:12px;font-family:var(--ff)" onchange="updateStock(${p.id},this.value)"></td>
        <td>
          <label style="display:flex;align-items:center;gap:6px;cursor:pointer">
            <input type="checkbox" ${p.inStock?'checked':''} style="accent-color:var(--accent)" onchange="toggleProductStock(${p.id},this.checked)">
            <span style="font-size:11px">${p.inStock?'✓':'—'}</span>
          </label>
        </td>
        <td>
          <div style="display:flex;gap:4px">
            <button class="btn btn-outline btn-xs" onclick="showProductModal(${p.id})"><i class="ti ti-edit"></i></button>
            <button class="btn btn-danger btn-xs" onclick="deleteProductAdmin(${p.id})"><i class="ti ti-trash"></i></button>
            <button class="btn btn-outline btn-xs" onclick="navigate('product','id=${p.id}')"><i class="ti ti-external-link"></i></button>
          </div>
        </td>
      </tr>`).join('')}
    </tbody>
  </table>`;
}

function filterAdminProducts(q) {
  document.querySelectorAll('#products-admin-table tbody tr').forEach(r=>{
    r.style.display = r.dataset.search?.toLowerCase().includes(q.toLowerCase()) ? '' : 'none';
  });
}

function updateStock(id, val) {
  const p = AD.products.find(pr=>pr.id===id);
  if (p) { p.stock = parseInt(val)||0; p.inStock = p.stock > 0; saveAdminData(AD); }
}

function toggleProductStock(id, inStock) {
  const p = AD.products.find(pr=>pr.id===id);
  if (p) { p.inStock = inStock; saveAdminData(AD); showToast(p.name+': '+(inStock?'მარაგშია':'ამოიწურა'),'success'); }
}

function deleteProductAdmin(id) {
  if (!confirm('წავშალოთ პროდუქტი?')) return;
  AD.products = AD.products.filter(p=>p.id!==id);
  saveAdminData(AD);
  showToast('პროდუქტი წაიშალა','error');
  setAdminSection('products');
}

function showProductModal(id) {
  const p = id ? AD.products.find(pr=>pr.id===id) : null;
  const icons = ['🖨️','🧵','⚙️','🔧','📱','📦','🎨','💡'];
  showAdminModal(p ? 'პროდუქტის რედაქტირება' : 'ახალი პროდუქტი', `
    <div class="form-grid-2">
      <div class="form-group"><label class="form-label">სახელი (KA)</label><input class="form-input" id="pm-name" value="${p?.name||''}"></div>
      <div class="form-group"><label class="form-label">ბრენდი</label><input class="form-input" id="pm-brand" value="${p?.brand||''}"></div>
    </div>
    <div class="form-grid-2">
      <div class="form-group"><label class="form-label">ფასი ₾</label><input class="form-input" type="number" id="pm-price" value="${p?.price||''}"></div>
      <div class="form-group"><label class="form-label">ძველი ფასი ₾ (სეილი)</label><input class="form-input" type="number" id="pm-oldprice" value="${p?.oldPrice||''}"></div>
    </div>
    <div class="form-grid-2">
      <div class="form-group"><label class="form-label">კატეგორია</label>
        <select class="form-input form-select" id="pm-cat">
          ${['printers','filament','parts','accessories'].map(c=>`<option ${p?.category===c?'selected':''}>${c}</option>`).join('')}
        </select>
      </div>
      <div class="form-group"><label class="form-label">Badge</label>
        <select class="form-input form-select" id="pm-badge">
          <option value="">—</option>
          ${['new','hot','sale'].map(b=>`<option value="${b}" ${p?.badge===b?'selected':''}>${b}</option>`).join('')}
        </select>
      </div>
    </div>
    <div class="form-grid-2">
      <div class="form-group"><label class="form-label">ბეჭდვის არე</label><input class="form-input" id="pm-area" value="${p?.area||''}" placeholder="256×256×256mm"></div>
      <div class="form-group"><label class="form-label">სიჩქარე</label><input class="form-input" id="pm-speed" value="${p?.speed||''}" placeholder="600mm/s"></div>
    </div>
    <div class="form-group"><label class="form-label">ემოჯი / ხატულა</label>
      <div style="display:flex;gap:8px;flex-wrap:wrap">${icons.map(ic=>`<button type="button" onclick="document.getElementById('pm-icon').value='${ic}';document.getElementById('pm-icon-preview').textContent='${ic}'" style="font-size:22px;padding:6px;border:1px solid var(--border);border-radius:8px;cursor:pointer;background:var(--bg2)">${ic}</button>`).join('')}</div>
      <input class="form-input" id="pm-icon" value="${p?.icon||'📦'}" style="margin-top:8px;width:80px" oninput="document.getElementById('pm-icon-preview').textContent=this.value">
      <span id="pm-icon-preview" style="font-size:28px;margin-left:10px">${p?.icon||'📦'}</span>
    </div>
    <div class="form-group"><label class="form-label">აღწერა (KA)</label><textarea class="form-input form-textarea" id="pm-desc-ka" style="min-height:70px">${p?.desc_ka||''}</textarea></div>
    <div class="form-group"><label class="form-label">აღწერა (EN)</label><textarea class="form-input form-textarea" id="pm-desc-en" style="min-height:70px">${p?.desc_en||''}</textarea></div>
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:1rem">
      <input type="checkbox" id="pm-instock" ${p?.inStock?'checked':''} style="accent-color:var(--accent);width:16px;height:16px">
      <label for="pm-instock" style="font-size:13px;font-weight:600">მარაგშია</label>
      <input type="checkbox" id="pm-ams" ${p?.ams?'checked':''} style="accent-color:var(--accent);width:16px;height:16px">
      <label for="pm-ams" style="font-size:13px">AMS</label>
      <input type="checkbox" id="pm-enclosed" ${p?.enclosed?'checked':''} style="accent-color:var(--accent);width:16px;height:16px">
      <label for="pm-enclosed" style="font-size:13px">Enclosed</label>
    </div>
    <div style="display:flex;gap:8px">
      <button class="btn btn-primary" style="flex:1;justify-content:center" onclick="saveProduct(${p?.id||'null'})"><i class="ti ti-check"></i>შენახვა</button>
      <button class="btn btn-outline" onclick="closeModal()">გაუქმება</button>
    </div>`);
}

function saveProduct(id) {
  const data = {
    name: document.getElementById('pm-name')?.value||'',
    brand: document.getElementById('pm-brand')?.value||'',
    price: parseInt(document.getElementById('pm-price')?.value)||0,
    oldPrice: parseInt(document.getElementById('pm-oldprice')?.value)||undefined,
    category: document.getElementById('pm-cat')?.value||'printers',
    badge: document.getElementById('pm-badge')?.value||undefined,
    area: document.getElementById('pm-area')?.value||undefined,
    speed: document.getElementById('pm-speed')?.value||undefined,
    icon: document.getElementById('pm-icon')?.value||'📦',
    desc_ka: document.getElementById('pm-desc-ka')?.value||'',
    desc_en: document.getElementById('pm-desc-en')?.value||'',
    inStock: document.getElementById('pm-instock')?.checked||false,
    ams: document.getElementById('pm-ams')?.checked||false,
    enclosed: document.getElementById('pm-enclosed')?.checked||false,
    rating: 4.5, reviews: 0,
  };
  if (id) {
    const idx = AD.products.findIndex(p=>p.id===id);
    if (idx>-1) { AD.products[idx] = { ...AD.products[idx], ...data }; }
  } else {
    data.id = Math.max(...AD.products.map(p=>p.id), 0) + 1;
    AD.products.unshift(data);
    // Also update global PRODUCTS array
    PRODUCTS.unshift(data);
  }
  saveAdminData(AD);
  showToast('პროდუქტი შენახულია','success');
  closeModal();
  setAdminSection('products');
}

/* ── STOCK ── */
function renderAdminStock() {
  const low = AD.products.filter(p=>(p.stock||0)<5);
  return `
  <div style="margin-bottom:1.5rem">
    ${low.length ? `<div style="background:var(--amber-light);border:1px solid #fcd34d;border-radius:var(--radius-lg);padding:1rem;display:flex;align-items:center;gap:10px;margin-bottom:1rem">
      <i class="ti ti-alert-triangle" style="color:var(--amber);font-size:20px"></i>
      <div><div style="font-weight:700;font-size:13px">${low.length} პროდუქტი დასრულებას უახლოვდება</div><div style="font-size:12px;color:var(--amber)">${low.map(p=>p.name).join(', ')}</div></div>
    </div>` : `<div style="background:var(--green-light);border:1px solid #a7f3d0;border-radius:var(--radius-lg);padding:1rem;display:flex;align-items:center;gap:10px;margin-bottom:1rem"><i class="ti ti-check" style="color:var(--green);font-size:20px"></i><div style="font-weight:600;font-size:13px">ყველა პროდუქტი მარაგშია</div></div>`}
  </div>
  <table class="data-table">
    <thead><tr><th>პროდუქტი</th><th>კატ.</th><th>ფასი</th><th>მარაგი</th><th>სტატუსი</th></tr></thead>
    <tbody>
      ${AD.products.map(p=>{
        const stock = p.stock||0;
        const status = stock===0?['status-cancel','ამოიწურა']:stock<5?['status-shipped','მცირე']:['status-paid','კარგი'];
        return `<tr>
          <td><div style="font-weight:600">${p.name}</div><div style="font-size:11px;color:var(--text3)">${p.brand}</div></td>
          <td><span class="badge badge-blue" style="font-size:10px">${p.category}</span></td>
          <td style="font-weight:700">₾${p.price?.toLocaleString()}</td>
          <td><input type="number" value="${stock}" min="0" style="width:70px;padding:5px 8px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:13px;font-family:var(--ff)" onchange="updateStock(${p.id},this.value)"></td>
          <td><span class="status-pill ${status[0]}">${status[1]}</span></td>
        </tr>`;
      }).join('')}
    </tbody>
  </table>`;
}

/* ── CATEGORIES ── */
function renderAdminCategories() {
  const cats = [
    { key:'printers', name_ka:'3D პრინტერები', icon:'ti-printer', count: AD.products.filter(p=>p.category==='printers').length },
    { key:'filament', name_ka:'ფილამენტი', icon:'ti-cylinder', count: AD.products.filter(p=>p.category==='filament').length },
    { key:'parts', name_ka:'სათ. ნაწილები', icon:'ti-settings-2', count: AD.products.filter(p=>p.category==='parts').length },
    { key:'accessories', name_ka:'აქსესუარები', icon:'ti-tool', count: AD.products.filter(p=>p.category==='accessories').length },
  ];
  return `
  <div class="admin-section-header"><h2>კატეგორიები</h2><button class="btn btn-primary btn-sm" onclick="showToast('Coming soon','')"><i class="ti ti-plus"></i>კატეგ. დამატება</button></div>
  <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:14px">
    ${cats.map(c=>`
    <div class="admin-card" style="display:flex;align-items:center;gap:1rem">
      <div style="width:50px;height:50px;border-radius:12px;background:var(--accent-light);color:var(--accent);display:flex;align-items:center;justify-content:center;font-size:22px"><i class="ti ${c.icon}"></i></div>
      <div style="flex:1"><div style="font-size:15px;font-weight:700">${c.name_ka}</div><div style="font-size:12px;color:var(--text3)">${c.count} პროდუქტი</div></div>
      <div style="display:flex;gap:6px">
        <button class="btn btn-outline btn-xs"><i class="ti ti-edit"></i></button>
        <button class="btn btn-outline btn-xs" onclick="navigate('catalog','type=${c.key}')"><i class="ti ti-external-link"></i></button>
      </div>
    </div>`).join('')}
  </div>`;
}

/* ── BANNERS ── */
function renderAdminBanners() {
  return `
  <div class="admin-section-header">
    <h2>ბანერები (${AD.banners.length})</h2>
    <button class="btn btn-primary btn-sm" onclick="showBannerModal(null)"><i class="ti ti-plus"></i>ბანერის დამატება</button>
  </div>
  <div style="display:flex;flex-direction:column;gap:14px">
    ${AD.banners.map(b=>`
    <div class="admin-card" style="padding:0;overflow:hidden">
      <div style="background:${b.bg};padding:1.5rem;display:flex;align-items:center;justify-content:space-between">
        <div>
          <div style="font-size:18px;font-weight:800;color:#fff;margin-bottom:4px">${b.title_ka}</div>
          <div style="font-size:13px;color:rgba(255,255,255,0.75)">${b.subtitle_ka}</div>
          <a style="display:inline-block;margin-top:10px;background:#fff;color:var(--accent);padding:6px 16px;border-radius:8px;font-size:12px;font-weight:700">${b.btnText_ka}</a>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px;align-items:flex-end">
          <label style="display:flex;align-items:center;gap:8px;cursor:pointer;color:#fff;font-size:13px;font-weight:600">
            <input type="checkbox" ${b.active?'checked':''} style="accent-color:#fff;width:16px;height:16px" onchange="toggleBanner(${b.id},this.checked)">
            ${b.active?'აქტიური':'გამორთული'}
          </label>
          <div style="display:flex;gap:6px">
            <button class="btn btn-xs" style="background:rgba(255,255,255,0.2);color:#fff;border:1px solid rgba(255,255,255,0.3)" onclick="showBannerModal(${b.id})"><i class="ti ti-edit"></i>რედ.</button>
            <button class="btn btn-xs" style="background:rgba(239,68,68,0.3);color:#fca5a5;border:1px solid rgba(239,68,68,0.3)" onclick="deleteBanner(${b.id})"><i class="ti ti-trash"></i></button>
          </div>
        </div>
      </div>
    </div>`).join('')}
  </div>`;
}

function toggleBanner(id, active) {
  const b = AD.banners.find(b=>b.id===id);
  if (b) { b.active = active; saveAdminData(AD); showToast('ბანერი '+(active?'გააქტიურდა':'გამოირთო'),'success'); }
}

function deleteBanner(id) {
  if (!confirm('წავშალოთ ბანერი?')) return;
  AD.banners = AD.banners.filter(b=>b.id!==id);
  saveAdminData(AD);
  setAdminSection('banners');
}

function showBannerModal(id) {
  const b = id ? AD.banners.find(bn=>bn.id===id) : null;
  const gradients = ['linear-gradient(135deg,#1a56db,#3b82f6)','linear-gradient(135deg,#7c3aed,#a855f7)','linear-gradient(135deg,#059669,#10b981)','linear-gradient(135deg,#d97706,#f59e0b)','linear-gradient(135deg,#dc2626,#ef4444)','linear-gradient(135deg,#0f172a,#334155)'];
  showAdminModal(b?'ბანერის რედ.':'ახალი ბანერი', `
    <div class="form-group"><label class="form-label">სათაური (KA)</label><input class="form-input" id="bm-title-ka" value="${b?.title_ka||''}"></div>
    <div class="form-group"><label class="form-label">სათაური (EN)</label><input class="form-input" id="bm-title-en" value="${b?.title_en||''}"></div>
    <div class="form-group"><label class="form-label">ქვე-სათაური (KA)</label><input class="form-input" id="bm-sub-ka" value="${b?.subtitle_ka||''}"></div>
    <div class="form-group"><label class="form-label">ღილაკი (KA)</label><input class="form-input" id="bm-btn-ka" value="${b?.btnText_ka||'ყიდვა'}"></div>
    <div class="form-group"><label class="form-label">ბმული</label><input class="form-input" id="bm-link" value="${b?.btnLink||'?page=catalog'}" placeholder="?page=catalog"></div>
    <div class="form-group"><label class="form-label">ფონის ფერი</label>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        ${gradients.map(g=>`<div onclick="document.getElementById('bm-bg').value='${g}'" style="width:40px;height:40px;border-radius:8px;background:${g};cursor:pointer;border:2px solid ${b?.bg===g?'var(--accent)':'transparent'}"></div>`).join('')}
      </div>
      <input class="form-input" id="bm-bg" value="${b?.bg||gradients[0]}" style="margin-top:8px">
    </div>
    <label style="display:flex;align-items:center;gap:8px;margin-bottom:1rem;cursor:pointer">
      <input type="checkbox" id="bm-active" ${b?.active!==false?'checked':''} style="accent-color:var(--accent);width:16px;height:16px">
      <span style="font-size:13px;font-weight:600">აქტიური</span>
    </label>
    <div style="display:flex;gap:8px">
      <button class="btn btn-primary" style="flex:1;justify-content:center" onclick="saveBanner(${b?.id||'null'})"><i class="ti ti-check"></i>შენახვა</button>
      <button class="btn btn-outline" onclick="closeModal()">გაუქმება</button>
    </div>`);
}

function saveBanner(id) {
  const data = {
    title_ka: document.getElementById('bm-title-ka')?.value||'',
    title_en: document.getElementById('bm-title-en')?.value||'',
    subtitle_ka: document.getElementById('bm-sub-ka')?.value||'',
    subtitle_en: document.getElementById('bm-sub-ka')?.value||'',
    btnText_ka: document.getElementById('bm-btn-ka')?.value||'ყიდვა',
    btnText_en: document.getElementById('bm-btn-ka')?.value||'Buy',
    btnLink: document.getElementById('bm-link')?.value||'',
    bg: document.getElementById('bm-bg')?.value||'',
    active: document.getElementById('bm-active')?.checked||false,
  };
  if (id) {
    const idx = AD.banners.findIndex(b=>b.id===id);
    if (idx>-1) AD.banners[idx] = { ...AD.banners[idx], ...data };
  } else {
    data.id = Math.max(...AD.banners.map(b=>b.id), 0) + 1;
    AD.banners.push(data);
  }
  saveAdminData(AD);
  showToast('ბანერი შენახულია','success');
  closeModal();
  setAdminSection('banners');
}

/* ── PROMOS ── */
function renderAdminPromos() {
  return `
  <div class="admin-section-header">
    <h2>პრომო კოდები და აქციები</h2>
    <button class="btn btn-primary btn-sm" onclick="showPromoModal(null)"><i class="ti ti-plus"></i>კოდის დამატება</button>
  </div>
  <table class="data-table">
    <thead><tr><th>კოდი</th><th>ფასდაკლება</th><th>მინ. შეკვ.</th><th>გამოყენება</th><th>სტ.</th><th>მოქ.</th></tr></thead>
    <tbody>
      ${AD.promos.map(p=>`
      <tr>
        <td><span style="font-family:monospace;font-weight:800;font-size:14px;background:var(--bg2);padding:4px 10px;border-radius:6px;border:1px solid var(--border)">${p.code}</span></td>
        <td><span style="font-weight:800;color:var(--green)">${p.type==='percent'?p.discount+'%':'₾'+p.discount}</span><div style="font-size:11px;color:var(--text3)">${p.desc}</div></td>
        <td style="font-size:13px">${p.minOrder>0?'₾'+p.minOrder:'—'}</td>
        <td><span style="font-weight:700">${p.uses}</span> <span style="color:var(--text3);font-size:12px">გამოყენება</span></td>
        <td>
          <label style="display:flex;align-items:center;gap:6px;cursor:pointer">
            <input type="checkbox" ${p.active?'checked':''} style="accent-color:var(--accent)" onchange="togglePromo(${p.id},this.checked)">
            <span class="status-pill ${p.active?'status-paid':'status-cancel'}">${p.active?'აქტ.':'გამ.'}</span>
          </label>
        </td>
        <td>
          <div style="display:flex;gap:4px">
            <button class="btn btn-outline btn-xs" onclick="showPromoModal(${p.id})"><i class="ti ti-edit"></i></button>
            <button class="btn btn-danger btn-xs" onclick="deletePromo(${p.id})"><i class="ti ti-trash"></i></button>
          </div>
        </td>
      </tr>`).join('')}
    </tbody>
  </table>`;
}

function togglePromo(id, active) {
  const p = AD.promos.find(p=>p.id===id);
  if (p) { p.active = active; saveAdminData(AD); showToast('კოდი '+(active?'გააქტიურდა':'გამოირთო'),'success'); }
}

function deletePromo(id) {
  if (!confirm('წავშალოთ?')) return;
  AD.promos = AD.promos.filter(p=>p.id!==id);
  saveAdminData(AD);
  setAdminSection('promos');
}

function showPromoModal(id) {
  const p = id ? AD.promos.find(pr=>pr.id===id) : null;
  showAdminModal(p?'კოდის რედ.':'ახალი პრომო კოდი', `
    <div class="form-group"><label class="form-label">კოდი</label><input class="form-input" id="pr-code" value="${p?.code||''}" placeholder="SUMMER20" style="font-family:monospace;font-weight:700;text-transform:uppercase"></div>
    <div class="form-grid-2">
      <div class="form-group"><label class="form-label">ტიპი</label>
        <select class="form-input form-select" id="pr-type">
          <option value="percent" ${p?.type==='percent'?'selected':''}>პროცენტი (%)</option>
          <option value="fixed" ${p?.type==='fixed'?'selected':''}>ფიქსირებული (₾)</option>
        </select>
      </div>
      <div class="form-group"><label class="form-label">ფასდაკლება</label><input class="form-input" type="number" id="pr-discount" value="${p?.discount||10}"></div>
    </div>
    <div class="form-group"><label class="form-label">მინ. შეკვ. ₾ (0 = არ არის)</label><input class="form-input" type="number" id="pr-min" value="${p?.minOrder||0}"></div>
    <div class="form-group"><label class="form-label">აღწერა</label><input class="form-input" id="pr-desc" value="${p?.desc||''}"></div>
    <label style="display:flex;align-items:center;gap:8px;margin-bottom:1rem;cursor:pointer">
      <input type="checkbox" id="pr-active" ${p?.active!==false?'checked':''} style="accent-color:var(--accent);width:16px;height:16px">
      <span style="font-size:13px;font-weight:600">აქტიური</span>
    </label>
    <div style="display:flex;gap:8px">
      <button class="btn btn-primary" style="flex:1;justify-content:center" onclick="savePromo(${p?.id||'null'})"><i class="ti ti-check"></i>შენახვა</button>
      <button class="btn btn-outline" onclick="closeModal()">გაუქმება</button>
    </div>`);
}

function savePromo(id) {
  const data = {
    code: (document.getElementById('pr-code')?.value||'').toUpperCase(),
    type: document.getElementById('pr-type')?.value||'percent',
    discount: parseInt(document.getElementById('pr-discount')?.value)||0,
    minOrder: parseInt(document.getElementById('pr-min')?.value)||0,
    desc: document.getElementById('pr-desc')?.value||'',
    active: document.getElementById('pr-active')?.checked||false,
    uses: 0,
  };
  if (id) {
    const idx = AD.promos.findIndex(p=>p.id===id);
    if (idx>-1) AD.promos[idx] = { ...AD.promos[idx], ...data };
  } else {
    data.id = Math.max(...AD.promos.map(p=>p.id), 0) + 1;
    AD.promos.push(data);
  }
  saveAdminData(AD);
  showToast('კოდი შენახულია: '+data.code,'success');
  closeModal();
  setAdminSection('promos');
}

/* ── SERVICE REQUESTS ── */
function renderAdminServiceRequests() {
  const requests = JSON.parse(localStorage.getItem('service_requests')||'[]');
  return `
  <div class="admin-section-header"><h2>სერვის-განაცხადები (${requests.length})</h2></div>
  ${requests.length===0 ? `<div class="empty-state"><div class="empty-icon"><i class="ti ti-inbox"></i></div><div class="empty-title">განაცხადები არ არის</div><div class="empty-desc">სერვისის გვერდზე შემოსული განაცხადები აქ გამოჩნდება</div></div>` :
  `<table class="data-table">
    <thead><tr><th>სახელი</th><th>ტელ.</th><th>მასალა</th><th>კომ.</th><th>თარიღი</th></tr></thead>
    <tbody>${requests.map(r=>`<tr><td>${r.name}</td><td>${r.phone}</td><td>${r.material}</td><td>${r.comment}</td><td>${r.date}</td></tr>`).join('')}</tbody>
  </table>`}`;
}

/* ── BLOG ── */
function renderAdminBlog() {
  const posts = JSON.parse(localStorage.getItem('blog_posts')||'[]');
  return `
  <div class="admin-section-header"><h2>ბლოგი (${posts.length})</h2>
    <button class="btn btn-primary btn-sm" onclick="showBlogModal(null)"><i class="ti ti-plus"></i>სტატიის დამატება</button>
  </div>
  ${posts.length===0 ? `<div class="empty-state"><div class="empty-icon"><i class="ti ti-article"></i></div><div class="empty-title">სტატიები არ არის</div><button class="btn btn-primary" onclick="showBlogModal(null)"><i class="ti ti-plus"></i>პირველი სტატია</button></div>` :
  `<table class="data-table"><thead><tr><th>სათაური</th><th>თარიღი</th><th>მოქ.</th></tr></thead>
  <tbody>${posts.map((p,i)=>`<tr><td style="font-weight:600">${p.title_ka}</td><td>${p.date}</td><td><div style="display:flex;gap:4px"><button class="btn btn-outline btn-xs" onclick="showBlogModal(${i})"><i class="ti ti-edit"></i></button><button class="btn btn-danger btn-xs" onclick="deleteBlogPost(${i})"><i class="ti ti-trash"></i></button></div></td></tr>`).join('')}</tbody>
  </table>`}`;
}

function showBlogModal(idx) {
  const posts = JSON.parse(localStorage.getItem('blog_posts')||'[]');
  const p = idx!==null ? posts[idx] : null;
  showAdminModal(p?'სტატიის რედ.':'ახალი სტატია', `
    <div class="form-group"><label class="form-label">სათაური (KA)</label><input class="form-input" id="bl-title-ka" value="${p?.title_ka||''}"></div>
    <div class="form-group"><label class="form-label">სათაური (EN)</label><input class="form-input" id="bl-title-en" value="${p?.title_en||''}"></div>
    <div class="form-group"><label class="form-label">ტექსტი (KA)</label><textarea class="form-input form-textarea" id="bl-body-ka" style="min-height:120px">${p?.body_ka||''}</textarea></div>
    <div class="form-group"><label class="form-label">ტეგი</label><input class="form-input" id="bl-tag" value="${p?.tag||''}"></div>
    <div style="display:flex;gap:8px">
      <button class="btn btn-primary" style="flex:1;justify-content:center" onclick="saveBlogPost(${idx})"><i class="ti ti-check"></i>შენახვა</button>
      <button class="btn btn-outline" onclick="closeModal()">გაუქმება</button>
    </div>`);
}

function saveBlogPost(idx) {
  const posts = JSON.parse(localStorage.getItem('blog_posts')||'[]');
  const data = { title_ka: document.getElementById('bl-title-ka')?.value||'', title_en: document.getElementById('bl-title-en')?.value||'', body_ka: document.getElementById('bl-body-ka')?.value||'', tag: document.getElementById('bl-tag')?.value||'', date: new Date().toLocaleDateString('ka-GE'), icon:'📝' };
  if (idx!==null && posts[idx]) posts[idx] = data; else posts.unshift(data);
  localStorage.setItem('blog_posts', JSON.stringify(posts));
  showToast('სტატია შენახულია','success');
  closeModal();
  setAdminSection('blog_admin');
}

function deleteBlogPost(idx) {
  if (!confirm('წავშალოთ სტატია?')) return;
  const posts = JSON.parse(localStorage.getItem('blog_posts')||'[]');
  posts.splice(idx, 1);
  localStorage.setItem('blog_posts', JSON.stringify(posts));
  setAdminSection('blog_admin');
}

/* ── FAQ ── */
function renderAdminFAQ() {
  return `
  <div class="admin-section-header"><h2>FAQ (${FAQS.length})</h2><button class="btn btn-primary btn-sm" onclick="showFaqModal(null)"><i class="ti ti-plus"></i>კითხვის დამ.</button></div>
  <div style="display:flex;flex-direction:column;gap:8px">
    ${FAQS.map((f,i)=>`
    <div class="admin-card" style="margin-bottom:0">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:1rem">
        <div style="flex:1">
          <div style="font-size:13px;font-weight:700;margin-bottom:4px">${f.q_ka}</div>
          <div style="font-size:12px;color:var(--text3)">${f.a_ka.substring(0,80)}...</div>
        </div>
        <div style="display:flex;gap:4px;flex-shrink:0">
          <button class="btn btn-outline btn-xs" onclick="showFaqModal(${i})"><i class="ti ti-edit"></i></button>
        </div>
      </div>
    </div>`).join('')}
  </div>`;
}

function showFaqModal(idx) {
  const f = idx!==null ? FAQS[idx] : null;
  showAdminModal(f?'კითხვის რედ.':'ახალი კითხვა', `
    <div class="form-group"><label class="form-label">კითხვა (KA)</label><input class="form-input" id="fq-q-ka" value="${f?.q_ka||''}"></div>
    <div class="form-group"><label class="form-label">კითხვა (EN)</label><input class="form-input" id="fq-q-en" value="${f?.q_en||''}"></div>
    <div class="form-group"><label class="form-label">პასუხი (KA)</label><textarea class="form-input form-textarea" id="fq-a-ka" style="min-height:100px">${f?.a_ka||''}</textarea></div>
    <div class="form-group"><label class="form-label">პასუხი (EN)</label><textarea class="form-input form-textarea" id="fq-a-en" style="min-height:80px">${f?.a_en||''}</textarea></div>
    <div style="display:flex;gap:8px">
      <button class="btn btn-primary" style="flex:1;justify-content:center" onclick="saveFaq(${idx})"><i class="ti ti-check"></i>შენახვა</button>
      <button class="btn btn-outline" onclick="closeModal()">გაუქმება</button>
    </div>`);
}

function saveFaq(idx) {
  const data = { q_ka:document.getElementById('fq-q-ka')?.value||'', q_en:document.getElementById('fq-q-en')?.value||'', a_ka:document.getElementById('fq-a-ka')?.value||'', a_en:document.getElementById('fq-a-en')?.value||'' };
  if (idx!==null) FAQS[idx]=data; else FAQS.push(data);
  showToast('FAQ შენახულია','success');
  closeModal();
  setAdminSection('faq_admin');
}

/* ── REVIEWS ── */
function renderAdminReviews() {
  return `
  <div class="admin-section-header"><h2>მიმოხილვები (${REVIEWS.length})</h2><button class="btn btn-primary btn-sm" onclick="showReviewModal(null)"><i class="ti ti-plus"></i>მიმოხ. დამ.</button></div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px">
    ${REVIEWS.map((r,i)=>`
    <div class="review-card">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px">
        <div class="review-stars">${'★'.repeat(r.rating)}</div>
        <div style="display:flex;gap:4px"><button class="btn btn-outline btn-xs" onclick="showReviewModal(${i})"><i class="ti ti-edit"></i></button><button class="btn btn-danger btn-xs" onclick="deleteReview(${i})"><i class="ti ti-trash"></i></button></div>
      </div>
      <div class="review-text">${r.text_ka}</div>
      <div class="review-author">
        <div class="avatar" style="background:${r.color};color:${r.tc}">${r.initials}</div>
        <div><div class="reviewer-name">${r.author}</div><div class="reviewer-product">${r.product}</div></div>
      </div>
    </div>`).join('')}
  </div>`;
}

function showReviewModal(idx) {
  const r = idx!==null ? REVIEWS[idx] : null;
  showAdminModal(r?'მიმოხ. რედ.':'ახალი მიმოხილვა', `
    <div class="form-grid-2">
      <div class="form-group"><label class="form-label">ავტორი</label><input class="form-input" id="rv-author" value="${r?.author||''}"></div>
      <div class="form-group"><label class="form-label">ინიციალები</label><input class="form-input" id="rv-initials" value="${r?.initials||''}" maxlength="2"></div>
    </div>
    <div class="form-group"><label class="form-label">პროდუქტი</label><input class="form-input" id="rv-product" value="${r?.product||''}"></div>
    <div class="form-group"><label class="form-label">შეფასება (1-5)</label><input class="form-input" type="number" id="rv-rating" value="${r?.rating||5}" min="1" max="5"></div>
    <div class="form-group"><label class="form-label">ტექსტი (KA)</label><textarea class="form-input form-textarea" id="rv-text-ka" style="min-height:80px">${r?.text_ka||''}</textarea></div>
    <div class="form-group"><label class="form-label">ტექსტი (EN)</label><textarea class="form-input form-textarea" id="rv-text-en" style="min-height:80px">${r?.text_en||''}</textarea></div>
    <div style="display:flex;gap:8px">
      <button class="btn btn-primary" style="flex:1;justify-content:center" onclick="saveReview(${idx})"><i class="ti ti-check"></i>შენახვა</button>
      <button class="btn btn-outline" onclick="closeModal()">გაუქმება</button>
    </div>`);
}

function saveReview(idx) {
  const data = { author:document.getElementById('rv-author')?.value||'', initials:document.getElementById('rv-initials')?.value||'', product:document.getElementById('rv-product')?.value||'', rating:parseInt(document.getElementById('rv-rating')?.value)||5, text_ka:document.getElementById('rv-text-ka')?.value||'', text_en:document.getElementById('rv-text-en')?.value||'', color:'var(--accent-light)', tc:'var(--accent)' };
  if (idx!==null) REVIEWS[idx]=data; else REVIEWS.push(data);
  showToast('მიმოხილვა შენახულია','success');
  closeModal();
  setAdminSection('reviews_admin');
}

function deleteReview(idx) {
  if (!confirm('წავშალოთ?')) return;
  REVIEWS.splice(idx,1);
  setAdminSection('reviews_admin');
}

/* ── SETTINGS ── */
function renderAdminSettings() {
  const s = AD.settings;
  return `
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem">
    <div class="admin-card">
      <h3 style="font-size:15px;font-weight:700;margin-bottom:1.25rem;display:flex;align-items:center;gap:8px"><i class="ti ti-settings" style="color:var(--accent)"></i>საიტის პარამეტრები</h3>
      <div class="form-group"><label class="form-label">საიტის სახელი</label><input class="form-input" id="st-name" value="${s.siteName}"></div>
      <div class="form-group"><label class="form-label">ტელეფონი</label><input class="form-input" id="st-phone" value="${s.phone}"></div>
      <div class="form-group"><label class="form-label">Email</label><input class="form-input" id="st-email" value="${s.email}"></div>
      <div class="form-group"><label class="form-label">მისამართი (KA)</label><input class="form-input" id="st-addr-ka" value="${s.address_ka}"></div>
      <div class="form-group"><label class="form-label">სამ. საათები</label><input class="form-input" id="st-hours" value="${s.workHours}"></div>
      <button class="btn btn-primary" onclick="saveSettings()"><i class="ti ti-check"></i>შენახვა</button>
    </div>
    <div class="admin-card">
      <h3 style="font-size:15px;font-weight:700;margin-bottom:1.25rem;display:flex;align-items:center;gap:8px"><i class="ti ti-truck" style="color:var(--accent)"></i>მიტანა და გადახდა</h3>
      <div class="form-group"><label class="form-label">უფასო მიტანა ₾-დან</label><input class="form-input" type="number" id="st-freedel" value="${s.freeDelivery}"></div>
      <div class="form-group"><label class="form-label">მიტანის ღირ. ₾</label><input class="form-input" type="number" id="st-delcost" value="${s.deliveryCost}"></div>
      <button class="btn btn-primary" onclick="saveSettings()"><i class="ti ti-check"></i>შენახვა</button>
    </div>
    <div class="admin-card">
      <h3 style="font-size:15px;font-weight:700;margin-bottom:1.25rem;display:flex;align-items:center;gap:8px"><i class="ti ti-brand-telegram" style="color:var(--accent)"></i>Telegram შეტყობინებები</h3>
      <div class="form-group"><label class="form-label">Bot Token</label><input class="form-input" id="st-tg-bot" value="${s.tgBot}" placeholder="123456:ABC..."></div>
      <div class="form-group"><label class="form-label">Chat ID</label><input class="form-input" id="st-tg-chat" value="${s.tgChat}" placeholder="-100123456789"></div>
      <button class="btn btn-primary" onclick="saveSettings()"><i class="ti ti-check"></i>შენახვა</button>
    </div>
    <div class="admin-card">
      <h3 style="font-size:15px;font-weight:700;margin-bottom:1.25rem;display:flex;align-items:center;gap:8px"><i class="ti ti-lock" style="color:var(--accent)"></i>უსაფრთხოება</h3>
      <div class="form-group"><label class="form-label">ახ. პაროლი</label><input class="form-input" type="password" id="st-newpass" placeholder="••••••••"></div>
      <div class="form-group"><label class="form-label">პაროლის დადასტ.</label><input class="form-input" type="password" id="st-confpass" placeholder="••••••••"></div>
      <button class="btn btn-primary" onclick="changePassword()"><i class="ti ti-check"></i>პაროლის შეცვლა</button>
      <div style="margin-top:1.5rem;padding-top:1.25rem;border-top:1px solid var(--border)">
        <button class="btn btn-danger" onclick="clearAllData()"><i class="ti ti-trash"></i>მონ. გასუფ. (Reset)</button>
      </div>
    </div>
  </div>`;
}

function saveSettings() {
  AD.settings = {
    ...AD.settings,
    siteName: document.getElementById('st-name')?.value || AD.settings.siteName,
    phone: document.getElementById('st-phone')?.value || AD.settings.phone,
    email: document.getElementById('st-email')?.value || AD.settings.email,
    address_ka: document.getElementById('st-addr-ka')?.value || AD.settings.address_ka,
    workHours: document.getElementById('st-hours')?.value || AD.settings.workHours,
    freeDelivery: parseInt(document.getElementById('st-freedel')?.value)||300,
    deliveryCost: parseInt(document.getElementById('st-delcost')?.value)||15,
    tgBot: document.getElementById('st-tg-bot')?.value || '',
    tgChat: document.getElementById('st-tg-chat')?.value || '',
  };
  saveAdminData(AD);
  showToast('პარამეტრები შენახულია','success');
}

function changePassword() {
  const np = document.getElementById('st-newpass')?.value;
  const cp = document.getElementById('st-confpass')?.value;
  if (!np) { showToast('შეიყვანეთ პაროლი','error'); return; }
  if (np !== cp) { showToast('პაროლები არ ემთხვევა','error'); return; }
  ADMIN_CREDENTIALS.password = np;
  showToast('პაროლი შეიცვალა','success');
}

function clearAllData() {
  if (!confirm('გაასუფთავოს ყველა მონაცემი? ეს ვერ გაუქმდება!')) return;
  localStorage.removeItem('admin_data');
  AD = loadAdminData();
  showToast('მონაცემები გასუფთავდა','success');
  setAdminSection('dashboard');
}

/* ── GLOBAL SEARCH ── */
function adminGlobalSearch(q) {
  if (!q || q.length < 2) return;
  const results = [
    ...AD.orders.filter(o=>(o.client+o.phone+o.id).toLowerCase().includes(q.toLowerCase())).map(o=>({type:'შეკვეთა',text:o.id+' — '+o.client,action:`setAdminSection('orders')`})),
    ...AD.leads.filter(l=>(l.name+l.phone).toLowerCase().includes(q.toLowerCase())).map(l=>({type:'ლიდი',text:l.name+' — '+l.phone,action:`viewLead(${l.id})`})),
    ...AD.products.filter(p=>p.name.toLowerCase().includes(q.toLowerCase())).map(p=>({type:'პროდ.',text:p.name,action:`showProductModal(${p.id})`})),
  ];
  if (results.length) showToast(`${results.length} შედეგი: ${results[0].type} — ${results[0].text}`,'');
}

/* ── MODAL ── */
function showAdminModal(title, content) {
  let overlay = document.getElementById('admin-modal');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'admin-modal';
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `<div class="modal" style="max-width:560px"><div class="modal-header"><h2 id="modal-title"></h2><button class="modal-close" onclick="closeModal()"><i class="ti ti-x"></i></button></div><div id="modal-body"></div></div>`;
    overlay.addEventListener('click', e=>{if(e.target===overlay)closeModal();});
    document.body.appendChild(overlay);
  }
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').innerHTML = content;
  setTimeout(()=>overlay.classList.add('open'), 10);
}

function closeModal() {
  const o = document.getElementById('admin-modal');
  if (o) o.classList.remove('open');
}

/* ── STATUS PILL ── */
function statusPill(status) {
  const map = { new:['status-new','● ახალი'], paid:['status-paid','● გადახდ.'], shipped:['status-shipped','● გაგზ.'], done:['status-done','● შესრ.'], cancel:['status-cancel','● გაუქმდა'] };
  const [cls, label] = map[status] || ['status-new', status];
  return `<span class="status-pill ${cls}">${label}</span>`;
}
