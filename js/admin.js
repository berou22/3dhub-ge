/* ── ADMIN PANEL ── */

const ADMIN_ORDERS = [
  { id: 'ORD-2501', date: '31.05.2025', client: 'გიორგი კ. / George K.', email: 'george@mail.com', total: 3490, status: 'paid', items: 'Bambu Lab X1 Carbon' },
  { id: 'ORD-2500', date: '30.05.2025', client: 'ნინო მ. / Nino M.', email: 'nino@mail.com', total: 108, status: 'shipped', items: 'PLA Black 1kg x2, ABS Grey 1kg' },
  { id: 'ORD-2499', date: '30.05.2025', client: 'ალექსი ბ. / Alexi B.', email: 'alexi@mail.com', total: 2190, status: 'new', items: 'Bambu Lab P1S' },
  { id: 'ORD-2498', date: '29.05.2025', client: 'მარი ო. / Mari O.', email: 'mari@mail.com', total: 390, status: 'done', items: 'Creality Ender-3 V3 SE' },
  { id: 'ORD-2497', date: '29.05.2025', client: 'დავით ც. / David Ts.', email: 'david@mail.com', total: 89, status: 'cancel', items: 'Creality Sonic Pad' },
  { id: 'ORD-2496', date: '28.05.2025', client: 'თამარ ს. / Tamar S.', email: 'tamar@mail.com', total: 1090, status: 'paid', items: 'Bambu A1 Mini Combo' },
];

const ADMIN_LEADS = [
  { id: 1, name: 'ლევან კ.', phone: '+995 598 100 200', source: 'Website', service: '3D ბეჭდვა', status: 'new', date: '31.05.2025' },
  { id: 2, name: 'Ana Smith', phone: '+995 577 200 300', source: 'Instagram', service: 'Consultation', status: 'called', date: '30.05.2025' },
  { id: 3, name: 'ზაზა ბ.', phone: '+995 555 300 400', source: 'Telegram', service: 'Repair', status: 'done', date: '29.05.2025' },
];

let adminSection = 'dashboard';
let editingProduct = null;

function renderAdmin() {
  return `
  <div class="admin-layout">
    <aside class="admin-sidebar">
      <div class="admin-logo">
        <div class="admin-logo-text">3D<span>Hub</span>.ge</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:2px">Admin Panel</div>
      </div>
      <nav class="admin-nav">
        <div class="admin-nav-section">მთავარი / Main</div>
        ${[
          ['dashboard','ti-layout-dashboard','Dashboard'],
          ['orders','ti-shopping-bag','შეკვეთები / Orders'],
          ['leads','ti-user-plus','ლიდები / Leads'],
          ['customers','ti-users','კლიენტები / Clients'],
        ].map(([s,icon,name]) => `
        <div class="admin-nav-item ${adminSection===s?'active':''}" onclick="setAdminSection('${s}')">
          <i class="ti ${icon}"></i>${name}
        </div>`).join('')}
        <div class="admin-nav-section">კატალოგი / Catalog</div>
        ${[
          ['products','ti-box','პროდუქტები / Products'],
          ['categories','ti-category','კატეგ. / Categories'],
          ['prices','ti-tag','ფასები / Prices'],
          ['stock','ti-packages','მარაგი / Stock'],
        ].map(([s,icon,name]) => `
        <div class="admin-nav-item ${adminSection===s?'active':''}" onclick="setAdminSection('${s}')">
          <i class="ti ${icon}"></i>${name}
        </div>`).join('')}
        <div class="admin-nav-section">კონტენტი / Content</div>
        ${[
          ['content','ti-file-text','გვერდები / Pages'],
          ['banners','ti-photo','ბანერები / Banners'],
          ['blog','ti-article','ბლოგი / Blog'],
          ['faq','ti-help-circle','FAQ'],
        ].map(([s,icon,name]) => `
        <div class="admin-nav-item ${adminSection===s?'active':''}" onclick="setAdminSection('${s}')">
          <i class="ti ${icon}"></i>${name}
        </div>`).join('')}
        <div class="admin-nav-section">სისტემა / System</div>
        ${[
          ['users','ti-user-cog','მომხმარებლები / Users'],
          ['settings','ti-settings','პარამეტრები / Settings'],
        ].map(([s,icon,name]) => `
        <div class="admin-nav-item ${adminSection===s?'active':''}" onclick="setAdminSection('${s}')">
          <i class="ti ${icon}"></i>${name}
        </div>`).join('')}
      </nav>
      <div style="padding:1rem 1.25rem;border-top:1px solid rgba(255,255,255,0.1)">
        <div style="display:flex;align-items:center;gap:10px">
          <div style="width:32px;height:32px;border-radius:50%;background:#3b82f6;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff">AD</div>
          <div><div style="font-size:12px;font-weight:600;color:#fff">Admin</div><div style="font-size:10px;color:rgba(255,255,255,0.4)">admin@3dhub.ge</div></div>
        </div>
        <button onclick="navigate('home')" style="margin-top:10px;width:100%;padding:7px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.1);border-radius:6px;color:rgba(255,255,255,0.7);font-size:12px;cursor:pointer;font-family:var(--ff);display:flex;align-items:center;gap:6px;justify-content:center">
          <i class="ti ti-external-link"></i>საიტი / Website
        </button>
      </div>
    </aside>
    <div class="admin-main">
      <div class="admin-topbar">
        <h1 id="admin-section-title">${getAdminSectionTitle()}</h1>
        <div style="display:flex;align-items:center;gap:10px">
          <div class="search-bar"><i class="ti ti-search"></i><input type="text" placeholder="ძებნა / Search..."></div>
          <div class="icon-btn"><i class="ti ti-bell"></i><span class="cart-count" style="display:flex">3</span></div>
          <div class="icon-btn" onclick="navigate('home')"><i class="ti ti-home"></i></div>
        </div>
      </div>
      <div class="admin-content" id="admin-section-content">
        ${renderAdminSection()}
      </div>
    </div>
  </div>`;
}

function getAdminSectionTitle() {
  const titles = { dashboard: 'Dashboard', orders: 'შეკვეთები / Orders', leads: 'ლიდები / Leads', customers: 'კლიენტები / Clients', products: 'პროდუქტები / Products', categories: 'კატეგორიები', prices: 'ფასები', stock: 'მარაგი', content: 'კონტენტი', banners: 'ბანერები', blog: 'ბლოგი', faq: 'FAQ', users: 'მომხმარებლები', settings: 'პარამეტრები' };
  return titles[adminSection] || 'Admin';
}

function setAdminSection(s) {
  adminSection = s;
  const titleEl = document.getElementById('admin-section-title');
  const contentEl = document.getElementById('admin-section-content');
  if (titleEl) titleEl.textContent = getAdminSectionTitle();
  if (contentEl) contentEl.innerHTML = renderAdminSection();
  document.querySelectorAll('.admin-nav-item').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.admin-nav-item').forEach(el => { if (el.textContent.includes(s)) el.classList.add('active'); });
}

function renderAdminSection() {
  switch (adminSection) {
    case 'dashboard': return renderAdminDashboard();
    case 'orders': return renderAdminOrders();
    case 'leads': return renderAdminLeads();
    case 'products': return renderAdminProducts();
    case 'customers': return renderAdminCustomers();
    case 'settings': return renderAdminSettings();
    default: return `<div class="empty-state"><div class="empty-icon"><i class="ti ti-tools"></i></div><div class="empty-title">Coming soon</div></div>`;
  }
}

function renderAdminDashboard() {
  const revenue = ADMIN_ORDERS.filter(o => o.status !== 'cancel').reduce((s, o) => s + o.total, 0);
  return `
  <div class="stat-cards">
    ${[
      { label: 'შემოსავალი / Revenue', value: '₾' + revenue.toLocaleString(), change: '+18% vs last month', up: true, icon: 'ti-currency-dollar', bg: 'var(--accent-light)', c: 'var(--accent)' },
      { label: 'შეკვეთები / Orders', value: ADMIN_ORDERS.length, change: '+6 this week', up: true, icon: 'ti-shopping-bag', bg: 'var(--green-light)', c: 'var(--green)' },
      { label: 'ლიდები / Leads', value: 24, change: '+3 today', up: true, icon: 'ti-user-plus', bg: 'var(--purple-light)', c: 'var(--purple)' },
      { label: 'კლიენტები / Clients', value: 312, change: '+5 this week', up: true, icon: 'ti-users', bg: 'var(--amber-light)', c: 'var(--amber)' },
    ].map(s => `
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

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem">
    <div class="admin-card">
      <div class="admin-section-header">
        <h2>ბოლო შეკვეთები / Recent Orders</h2>
        <button class="btn btn-outline btn-xs" onclick="setAdminSection('orders')">ყველა / All</button>
      </div>
      <table class="data-table">
        <thead><tr><th>#</th><th>კლიენტი</th><th>თანხა</th><th>სტატუსი</th></tr></thead>
        <tbody>
          ${ADMIN_ORDERS.slice(0,5).map(o => `
          <tr>
            <td style="font-weight:600;color:var(--accent)">${o.id}</td>
            <td>${o.client.split(' / ')[0]}</td>
            <td style="font-weight:700">₾${o.total.toLocaleString()}</td>
            <td>${statusPill(o.status)}</td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
    <div class="admin-card">
      <div class="admin-section-header">
        <h2>ახალი ლიდები / New Leads</h2>
        <button class="btn btn-outline btn-xs" onclick="setAdminSection('leads')">ყველა / All</button>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${ADMIN_LEADS.map(l => `
        <div style="display:flex;align-items:center;gap:10px;padding:10px;background:var(--bg2);border-radius:var(--radius);border:1px solid var(--border)">
          <div class="avatar" style="background:var(--accent-light);color:var(--accent)">${l.name.substring(0,2)}</div>
          <div style="flex:1"><div style="font-size:13px;font-weight:600">${l.name}</div><div style="font-size:11px;color:var(--text3)">${l.service} · ${l.source}</div></div>
          <div>${statusPill(l.status==='new'?'new':l.status==='called'?'paid':'done')}</div>
          <button class="btn btn-outline btn-xs"><i class="ti ti-phone"></i></button>
        </div>`).join('')}
      </div>
    </div>
  </div>`;
}

function renderAdminOrders() {
  return `
  <div class="admin-section-header">
    <div style="display:flex;gap:10px;align-items:center">
      <div class="search-bar"><i class="ti ti-search"></i><input type="text" placeholder="ძებნა შეკვეთის / Search order..." oninput="filterOrders(this.value)"></div>
      <select class="sort-select" style="height:38px" onchange="filterOrderStatus(this.value)">
        <option value="">ყველა სტატუსი / All statuses</option>
        <option value="new">ახალი / New</option>
        <option value="paid">გადახდილი / Paid</option>
        <option value="shipped">გაგზავნილი / Shipped</option>
        <option value="done">შესრულდა / Done</option>
        <option value="cancel">გაუქმდა / Cancelled</option>
      </select>
    </div>
    <button class="btn btn-primary btn-sm" onclick="showCreateOrderModal()"><i class="ti ti-plus"></i>შეკვეთის შექმნა / New order</button>
  </div>
  <table class="data-table" id="orders-table">
    <thead><tr>
      <th>#</th><th>თარიღი / Date</th><th>კლიენტი / Client</th><th>პროდუქტი / Product</th><th>თანხა / Amount</th><th>სტატუსი / Status</th><th>მოქ. / Actions</th>
    </tr></thead>
    <tbody id="orders-tbody">
      ${ADMIN_ORDERS.map(o => `
      <tr data-status="${o.status}" data-id="${o.id}">
        <td><span style="font-weight:700;color:var(--accent)">${o.id}</span></td>
        <td>${o.date}</td>
        <td>
          <div style="font-weight:600">${o.client.split(' / ')[0]}</div>
          <div style="font-size:11px;color:var(--text3)">${o.email}</div>
        </td>
        <td style="font-size:12px;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${o.items}</td>
        <td><span style="font-weight:800;font-size:14px">₾${o.total.toLocaleString()}</span></td>
        <td>
          <select class="sort-select" style="padding:4px 8px;font-size:11px;height:28px" onchange="updateOrderStatus('${o.id}',this.value)">
            ${['new','paid','shipped','done','cancel'].map(s=>`<option value="${s}" ${o.status===s?'selected':''}>${s}</option>`).join('')}
          </select>
        </td>
        <td>
          <div style="display:flex;gap:4px">
            <button class="btn btn-outline btn-xs" onclick="viewOrder('${o.id}')"><i class="ti ti-eye"></i></button>
            <button class="btn btn-outline btn-xs"><i class="ti ti-printer"></i></button>
          </div>
        </td>
      </tr>`).join('')}
    </tbody>
  </table>`;
}

function filterOrders(q) {
  const rows = document.querySelectorAll('#orders-tbody tr');
  rows.forEach(r => { r.style.display = r.textContent.toLowerCase().includes(q.toLowerCase()) ? '' : 'none'; });
}

function filterOrderStatus(status) {
  const rows = document.querySelectorAll('#orders-tbody tr');
  rows.forEach(r => { r.style.display = !status || r.dataset.status === status ? '' : 'none'; });
}

function updateOrderStatus(id, status) {
  const order = ADMIN_ORDERS.find(o => o.id === id);
  if (order) { order.status = status; showToast(`Order ${id} → ${status}`, 'success'); }
}

function viewOrder(id) {
  const o = ADMIN_ORDERS.find(order => order.id === id);
  if (!o) return;
  showAdminModal(`Order ${o.id}`, `
    <div style="display:flex;flex-direction:column;gap:12px">
      <div class="summary-row"><span>Client</span><span>${o.client}</span></div>
      <div class="summary-row"><span>Email</span><span>${o.email}</span></div>
      <div class="summary-row"><span>Date</span><span>${o.date}</span></div>
      <div class="summary-row"><span>Product</span><span>${o.items}</span></div>
      <div class="summary-row total"><span>Total</span><span>₾${o.total.toLocaleString()}</span></div>
      <div class="summary-row"><span>Status</span><span>${statusPill(o.status)}</span></div>
    </div>`);
}

function renderAdminLeads() {
  return `
  <div class="admin-section-header">
    <h2>ლიდები / Leads (${ADMIN_LEADS.length})</h2>
    <button class="btn btn-primary btn-sm" onclick="showAddLeadModal()"><i class="ti ti-plus"></i>ლიდის დამატება / Add lead</button>
  </div>
  <div style="display:flex;flex-direction:column;gap:10px">
    ${ADMIN_LEADS.map(l => `
    <div class="admin-card" style="margin-bottom:0">
      <div style="display:flex;align-items:center;gap:1rem">
        <div class="avatar" style="width:42px;height:42px;background:var(--accent-light);color:var(--accent);font-size:13px">${l.name.substring(0,2)}</div>
        <div style="flex:1">
          <div style="font-size:14px;font-weight:700">${l.name}</div>
          <div style="font-size:12px;color:var(--text3)">${l.phone} · ${l.source} · ${l.date}</div>
          <div style="font-size:12px;color:var(--text2);margin-top:2px">${l.service}</div>
        </div>
        <div style="display:flex;gap:8px;align-items:center">
          ${statusPill(l.status==='new'?'new':l.status==='called'?'paid':'done')}
          <button class="btn btn-outline btn-xs"><i class="ti ti-phone"></i>დარეკვა / Call</button>
          <button class="btn btn-primary btn-xs" onclick="showToast('Lead moved to orders','success')"><i class="ti ti-shopping-bag"></i>შეკვ. / Order</button>
        </div>
      </div>
    </div>`).join('')}
  </div>`;
}

function renderAdminProducts() {
  return `
  <div class="admin-section-header">
    <div class="search-bar"><i class="ti ti-search"></i><input type="text" placeholder="პროდუქტის ძებნა / Search product..." oninput="filterAdminProducts(this.value)"></div>
    <button class="btn btn-primary btn-sm" onclick="showProductModal(null)"><i class="ti ti-plus"></i>პროდუქტის დამ. / Add product</button>
  </div>
  <table class="data-table" id="products-admin-table">
    <thead><tr><th>პროდუქტი / Product</th><th>კატ. / Category</th><th>ფასი / Price</th><th>მარ. / Stock</th><th>სტ. / Status</th><th>მოქ. / Actions</th></tr></thead>
    <tbody>
      ${PRODUCTS.map(p => `
      <tr>
        <td>
          <div style="display:flex;align-items:center;gap:10px">
            <div style="width:40px;height:40px;background:var(--bg2);border:1px solid var(--border);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:18px">${p.icon}</div>
            <div><div style="font-weight:600;font-size:13px">${p.name}</div><div style="font-size:11px;color:var(--text3)">${p.brand}</div></div>
          </div>
        </td>
        <td><span class="badge badge-blue" style="font-size:10px">${p.category}</span></td>
        <td>
          <div style="font-weight:800">₾${p.price.toLocaleString()}</div>
          ${p.oldPrice ? `<div style="font-size:11px;color:var(--text3);text-decoration:line-through">₾${p.oldPrice.toLocaleString()}</div>` : ''}
        </td>
        <td>
          <input type="number" value="${Math.floor(Math.random()*30)+1}" min="0" style="width:60px;padding:4px 8px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:12px;font-family:var(--ff)">
        </td>
        <td>${p.inStock ? `<span class="status-pill status-paid">● In stock</span>` : `<span class="status-pill status-cancel">● Out of stock</span>`}</td>
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
  const rows = document.querySelectorAll('#products-admin-table tbody tr');
  rows.forEach(r => { r.style.display = r.textContent.toLowerCase().includes(q.toLowerCase()) ? '' : 'none'; });
}

function deleteProductAdmin(id) {
  if (confirm('Are you sure?')) { showToast('Product deleted (demo)', 'error'); }
}

function showProductModal(id) {
  const p = id ? PRODUCTS.find(pr => pr.id === id) : null;
  showAdminModal(p ? 'Edit product' : 'Add product', `
    <div class="form-group"><label class="form-label">Name</label><input class="form-input" type="text" value="${p?.name||''}"></div>
    <div class="form-group"><label class="form-label">Brand</label><input class="form-input" type="text" value="${p?.brand||''}"></div>
    <div class="form-grid-2">
      <div class="form-group"><label class="form-label">Price ₾</label><input class="form-input" type="number" value="${p?.price||''}"></div>
      <div class="form-group"><label class="form-label">Old price ₾</label><input class="form-input" type="number" value="${p?.oldPrice||''}"></div>
    </div>
    <div class="form-group"><label class="form-label">Category</label>
      <select class="form-input form-select">
        ${['printers','filament','parts','accessories'].map(c=>`<option ${p?.category===c?'selected':''}>${c}</option>`).join('')}
      </select>
    </div>
    <div class="form-group"><label class="form-label">Description (KA)</label><textarea class="form-input form-textarea" style="min-height:80px">${p?.desc_ka||''}</textarea></div>
    <div class="form-group"><label class="form-label">Description (EN)</label><textarea class="form-input form-textarea" style="min-height:80px">${p?.desc_en||''}</textarea></div>
    <div style="display:flex;gap:8px;margin-top:4px">
      <button class="btn btn-primary" style="flex:1;justify-content:center" onclick="saveProductAdmin()"><i class="ti ti-check"></i>Save</button>
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
    </div>`);
}

function saveProductAdmin() {
  showToast('Product saved!', 'success');
  closeModal();
}

function renderAdminCustomers() {
  const customers = [
    { name: 'გიორგი კვარაცხელია', email: 'george@mail.com', orders: 3, total: 5180, date: '31.05.2025' },
    { name: 'ნინო მელიქიშვილი', email: 'nino@mail.com', orders: 7, total: 890, date: '30.05.2025' },
    { name: 'ალექსი ბაქრაძე', email: 'alexi@mail.com', orders: 1, total: 2190, date: '30.05.2025' },
    { name: 'Ana Smith', email: 'ana.smith@mail.com', orders: 4, total: 1560, date: '28.05.2025' },
  ];
  return `
  <div class="admin-section-header">
    <div class="search-bar"><i class="ti ti-search"></i><input type="text" placeholder="კლიენტის ძებნა / Search..."></div>
    <div style="font-size:14px;color:var(--text2)">სულ / Total: <strong>${customers.length}</strong></div>
  </div>
  <table class="data-table">
    <thead><tr><th>კლიენტი / Client</th><th>შეკვ. / Orders</th><th>სულ. / Total spent</th><th>ბოლო შ. / Last order</th><th>მოქ. / Actions</th></tr></thead>
    <tbody>
      ${customers.map(c => `
      <tr>
        <td>
          <div style="display:flex;align-items:center;gap:10px">
            <div class="avatar" style="background:var(--accent-light);color:var(--accent)">${c.name.substring(0,2)}</div>
            <div><div style="font-weight:600">${c.name}</div><div style="font-size:11px;color:var(--text3)">${c.email}</div></div>
          </div>
        </td>
        <td style="font-weight:700">${c.orders}</td>
        <td style="font-weight:800;color:var(--accent)">₾${c.total.toLocaleString()}</td>
        <td style="font-size:12px;color:var(--text3)">${c.date}</td>
        <td>
          <div style="display:flex;gap:4px">
            <button class="btn btn-outline btn-xs"><i class="ti ti-eye"></i></button>
            <button class="btn btn-outline btn-xs"><i class="ti ti-mail"></i></button>
          </div>
        </td>
      </tr>`).join('')}
    </tbody>
  </table>`;
}

function renderAdminSettings() {
  return `
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem">
    <div class="admin-card">
      <h3 style="font-size:15px;font-weight:700;margin-bottom:1.25rem">საიტის პარამეტრები / Site settings</h3>
      <div class="form-group"><label class="form-label">Site name</label><input class="form-input" type="text" value="3DHub.ge"></div>
      <div class="form-group"><label class="form-label">Email</label><input class="form-input" type="email" value="info@3dhub.ge"></div>
      <div class="form-group"><label class="form-label">Phone</label><input class="form-input" type="tel" value="+995 555 000 000"></div>
      <div class="form-group"><label class="form-label">Address (KA)</label><input class="form-input" type="text" value="თბილისი, რუსთაველის 42"></div>
      <button class="btn btn-primary" onclick="showToast('Settings saved!','success')"><i class="ti ti-check"></i>Save</button>
    </div>
    <div class="admin-card">
      <h3 style="font-size:15px;font-weight:700;margin-bottom:1.25rem">მომხმარებლები / Users</h3>
      ${[{name:'Admin',role:'Super Admin',email:'admin@3dhub.ge'},{name:'Manager',role:'Sales Manager',email:'manager@3dhub.ge'},{name:'Content',role:'Content Editor',email:'content@3dhub.ge'}].map(u=>`
      <div style="display:flex;align-items:center;gap:10px;padding:10px;background:var(--bg2);border-radius:var(--radius);border:1px solid var(--border);margin-bottom:8px">
        <div class="avatar" style="background:var(--accent-light);color:var(--accent)">${u.name.substring(0,2)}</div>
        <div style="flex:1"><div style="font-size:13px;font-weight:600">${u.name}</div><div style="font-size:11px;color:var(--text3)">${u.email} · ${u.role}</div></div>
        <button class="btn btn-outline btn-xs"><i class="ti ti-edit"></i></button>
      </div>`).join('')}
      <button class="btn btn-outline btn-sm" style="margin-top:8px" onclick="showToast('Coming soon','')"><i class="ti ti-plus"></i>Add user</button>
    </div>
    <div class="admin-card">
      <h3 style="font-size:15px;font-weight:700;margin-bottom:1.25rem">მიტანა / Delivery</h3>
      <div class="form-group"><label class="form-label">Free delivery threshold ₾</label><input class="form-input" type="number" value="300"></div>
      <div class="form-group"><label class="form-label">Delivery cost ₾</label><input class="form-input" type="number" value="15"></div>
      <button class="btn btn-primary btn-sm" onclick="showToast('Saved!','success')"><i class="ti ti-check"></i>Save</button>
    </div>
    <div class="admin-card">
      <h3 style="font-size:15px;font-weight:700;margin-bottom:1.25rem">შეტყობინებები / Notifications</h3>
      ${[['Email on new order','checked'],['Telegram on new order','checked'],['Email on new lead','checked'],['Daily report','']].map(([label,checked])=>`
      <label style="display:flex;align-items:center;gap:10px;margin-bottom:12px;cursor:pointer">
        <input type="checkbox" ${checked} style="accent-color:var(--accent);width:16px;height:16px">
        <span style="font-size:13px">${label}</span>
      </label>`).join('')}
      <div class="form-group"><label class="form-label">Telegram Bot Token</label><input class="form-input" type="text" placeholder="1234567890:AAxxxxx"></div>
      <button class="btn btn-primary btn-sm" onclick="showToast('Saved!','success')"><i class="ti ti-check"></i>Save</button>
    </div>
  </div>`;
}

/* ── MODAL ── */
function showAdminModal(title, content) {
  let overlay = document.getElementById('admin-modal');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'admin-modal';
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `<div class="modal"><div class="modal-header"><h2 id="modal-title"></h2><button class="modal-close" onclick="closeModal()"><i class="ti ti-x"></i></button></div><div id="modal-body"></div></div>`;
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
    document.body.appendChild(overlay);
  }
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').innerHTML = content;
  setTimeout(() => overlay.classList.add('open'), 10);
}

function closeModal() {
  const overlay = document.getElementById('admin-modal');
  if (overlay) overlay.classList.remove('open');
}

function showCreateOrderModal() {
  showAdminModal('Create order', `
    <div class="form-group"><label class="form-label">Client name</label><input class="form-input" type="text"></div>
    <div class="form-group"><label class="form-label">Phone</label><input class="form-input" type="tel"></div>
    <div class="form-group"><label class="form-label">Product</label>
      <select class="form-input form-select">
        ${PRODUCTS.map(p => `<option value="${p.id}">${p.name} — ₾${p.price}</option>`).join('')}
      </select>
    </div>
    <div class="form-group"><label class="form-label">Comment</label><textarea class="form-input form-textarea" style="min-height:60px"></textarea></div>
    <button class="btn btn-primary" style="width:100%;justify-content:center" onclick="showToast('Order created!','success');closeModal()"><i class="ti ti-check"></i>Create</button>`);
}

function showAddLeadModal() {
  showAdminModal('Add lead', `
    <div class="form-group"><label class="form-label">Name</label><input class="form-input" type="text"></div>
    <div class="form-group"><label class="form-label">Phone</label><input class="form-input" type="tel"></div>
    <div class="form-group"><label class="form-label">Service</label><select class="form-input form-select"><option>3D Printing</option><option>3D Scanning</option><option>Repair</option><option>Consultation</option></select></div>
    <button class="btn btn-primary" style="width:100%;justify-content:center" onclick="showToast('Lead added!','success');closeModal()"><i class="ti ti-check"></i>Add</button>`);
}

function statusPill(status) {
  const map = { new: ['status-new','●  New / ახალი'], paid: ['status-paid','● Paid / გადახდ.'], shipped: ['status-shipped','● Shipped / გაგზ.'], done: ['status-done','● Done / შესრ.'], cancel: ['status-cancel','● Cancelled'] };
  const [cls, label] = map[status] || ['status-new', status];
  return `<span class="status-pill ${cls}">${label}</span>`;
}
