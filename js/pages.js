/* ── PAGE RENDERERS ── */

/* ── HOME PAGE ── */
function renderHome() {
  const l = t();
  const topProducts = PRODUCTS.filter(p => p.badge).slice(0, 3);
  const featuredProducts = PRODUCTS.slice(0, 4);

  return `
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="badge badge-blue"><span class="badge-dot"></span>${l.heroBadge}</div>
        <h1>${l.heroH1}</h1>
        <p>${l.heroP}</p>
        <div class="hero-btns">
          <button class="btn btn-primary" onclick="navigate('catalog')"><i class="ti ti-printer"></i>${l.heroBtn1}</button>
          <button class="btn btn-outline" onclick="navigate('services')"><i class="ti ti-layers-difference"></i>${l.heroBtn2}</button>
          <button class="btn btn-green" onclick="navigate('contact')"><i class="ti ti-message-circle"></i>${l.heroBtn3}</button>
        </div>
      </div>
    </div>
  </section>

  <div class="stats-bar">
    <div class="container" style="display:contents">
      <div class="stat-item"><div class="stat-num">500<em>+</em></div><div class="stat-label">${l.statProd}</div></div>
      <div class="stat-item"><div class="stat-num">1200<em>+</em></div><div class="stat-label">${l.statOrders}</div></div>
      <div class="stat-item"><div class="stat-num">3 <em style="font-size:13px">${l.statYears.split(' ')[0]}</em></div><div class="stat-label">${l.statYears.split(' ').slice(1).join(' ')}</div></div>
      <div class="stat-item"><div class="stat-num">4.9<em>★</em></div><div class="stat-label">${l.statRating}</div></div>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <div class="section-label">${l.catLabel}</div>
      <div class="section-header">
        <div><div class="section-title">${l.catTitle}</div><div class="section-sub">${l.catSub}</div></div>
      </div>
      <div class="cats-grid">
        ${[
          {icon:'ti-printer',name:l.cat1,count:'48',type:'printers'},
          {icon:'ti-cylinder',name:l.cat2,count:'120+',type:'filament_page'},
          {icon:'ti-settings-2',name:l.cat3,count:'200+',type:'parts'},
          {icon:'ti-tool',name:l.cat4,count:'150+',type:'accessories'},
          {icon:'ti-layers-difference',name:l.cat5,count:state.lang==='ka'?'შეკვეთაზე':'On demand',type:'service-print'},
          {icon:'ti-scan',name:l.cat6,count:state.lang==='ka'?'პროფ.':'Pro',type:'service-scan'},
        ].map(c => `
        <div class="cat-card" onclick="${c.type.startsWith('service')?`navigate('services')`:c.type==='filament_page'?`navigate('filament')`:`navigate('catalog','type=${c.type}')`}">
          <div class="cat-icon"><i class="ti ${c.icon}"></i></div>
          <div class="cat-name">${c.name}</div>
          <div class="cat-count">${c.count}</div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="container">
      <div class="section-label">${l.topLabel}</div>
      <div class="section-header">
        <div><div class="section-title">${l.topTitle}</div><div class="section-sub">${l.topSub}</div></div>
        <button class="btn btn-outline btn-sm" onclick="navigate('catalog')"><i class="ti ti-arrow-right"></i>${state.lang==='ka'?'ყველა':'View all'}</button>
      </div>
      <div class="products-grid">
        ${topProducts.map(productCardHTML).join('')}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-label">${l.cmpLabel}</div>
      <div class="section-title">${l.cmpTitle}</div>
      <div class="section-sub">${l.cmpSub}</div>
      <div class="compare-table-wrap">
        <table class="compare-table">
          <thead><tr>
            <th>${state.lang==='ka'?'მახასიათებელი':'Feature'}</th>
            <th>X1 Carbon</th><th>P1S</th><th>A1 Mini</th>
          </tr></thead>
          <tbody>
            ${[
              [state.lang==='ka'?'ფასი':'Price','₾3 490','₾2 190','₾1 090',true],
              [state.lang==='ka'?'ბეჭდვის არე':'Print area','256³ mm','256³ mm','180³ mm'],
              [state.lang==='ka'?'სიჩქარე':'Speed','600 mm/s','500 mm/s','500 mm/s'],
              [state.lang==='ka'?'დახურული':'Enclosed','✓','✓','✗'],
              ['AMS','✓','✓','✓'],
              ['LiDAR','✓','✗','✗'],
            ].map(([label,...vals]) => `<tr><td>${label}</td>${vals.filter(v=>v!==true).map((v,i)=>`<td class="${v==='✓'?'check':v==='✗'?'cross':vals[4]?'price-strong':''}">${v}</td>`).join('')}</tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="container">
      <div class="section-label">${l.whyLabel}</div>
      <div class="section-title">${l.whyTitle}</div>
      <div class="benefits-grid" style="margin-top:1.5rem">
        ${[
          {icon:'ti-shield-check',t:l.b1t,d:l.b1d},
          {icon:'ti-headset',t:l.b2t,d:l.b2d},
          {icon:'ti-truck',t:l.b3t,d:l.b3d},
          {icon:'ti-tool',t:l.b4t,d:l.b4d},
          {icon:'ti-settings',t:l.b5t,d:l.b5d},
        ].map(b=>`<div class="benefit-card"><div class="benefit-icon"><i class="ti ${b.icon}"></i></div><div class="benefit-title">${b.t}</div><div class="benefit-desc">${b.d}</div></div>`).join('')}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-label">${l.svcLabel}</div>
      <div class="section-header">
        <div><div class="section-title">${l.svcTitle}</div><div class="section-sub">${l.svcSub}</div></div>
        <button class="btn btn-outline btn-sm" onclick="navigate('services')"><i class="ti ti-arrow-right"></i>${state.lang==='ka'?'ყველა':'All services'}</button>
      </div>
      <div class="services-grid">
        ${[
          {icon:'ti-layers-difference',bg:'var(--accent-light)',c:'var(--accent)',t:l.s1t,d:l.s1d,link:l.s1l,col:'var(--accent)'},
          {icon:'ti-scan',bg:'var(--purple-light)',c:'var(--purple)',t:l.s2t,d:l.s2d,link:l.s2l,col:'var(--purple)'},
          {icon:'ti-3d-cube-sphere',bg:'var(--green-light)',c:'var(--green)',t:l.s3t,d:l.s3d,link:l.s3l,col:'var(--green)'},
          {icon:'ti-tool',bg:'var(--amber-light)',c:'var(--amber)',t:l.s4t,d:l.s4d,link:l.s4l,col:'var(--amber)'},
        ].map(s=>`
        <div class="service-card" onclick="navigate('services')">
          <div class="service-icon" style="background:${s.bg};color:${s.c}"><i class="ti ${s.icon}"></i></div>
          <div class="service-content">
            <div class="title">${s.t}</div>
            <div class="desc">${s.d}</div>
            <a class="link" style="color:${s.col}">${s.link}</a>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="container">
      <div class="section-label">${l.rvLabel}</div>
      <div class="section-title">${l.rvTitle}</div>
      <div class="reviews-grid" style="margin-top:1.5rem">
        ${REVIEWS.map(r=>`
        <div class="review-card">
          <div class="review-stars">${'★'.repeat(r.rating)}</div>
          <div class="review-text">${state.lang==='ka'?r.text_ka:r.text_en}</div>
          <div class="review-author">
            <div class="avatar" style="background:${r.color};color:${r.tc}">${r.initials}</div>
            <div><div class="reviewer-name">${r.author}</div><div class="reviewer-product">${r.product}</div></div>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-label">${l.faqLabel}</div>
      <div class="section-header">
        <div><div class="section-title">${l.faqTitle}</div></div>
      </div>
      <div class="faq-list">${renderFAQs(FAQS)}</div>
    </div>
  </section>

  <div class="cta-section">
    <div class="container">
      <div class="section-label">${l.ctaLabel}</div>
      <h2>${l.ctaTitle}</h2>
      <p>${l.ctaSub}</p>
      <div class="cta-form">
        <input class="cta-input" type="text" placeholder="${l.ctaInput}" id="cta-input">
        <button class="btn btn-white" onclick="submitCTA()">${l.ctaBtn}</button>
      </div>
    </div>
  </div>`;
}

function submitCTA() {
  const val = document.getElementById('cta-input')?.value;
  if (!val) { showToast(state.lang==='ka'?'შეიყვანეთ საკონტაქტო ინფორმაცია':'Please enter your contact info', 'error'); return; }
  showToast(state.lang==='ka'?'გაგზავნილია! მალე დაგიკავშირდებით.':'Sent! We will contact you soon.', 'success');
  document.getElementById('cta-input').value = '';
}

/* ── CATALOG PAGE ── */
function renderCatalog() {
  const l = t();
  const typeParam = getParam('type') || 'all';
  const searchParam = getParam('q') || '';

  let products = [...PRODUCTS];
  if (typeParam && typeParam !== 'all') products = products.filter(p => p.category === typeParam);
  if (searchParam) products = products.filter(p => p.name.toLowerCase().includes(searchParam.toLowerCase()) || p.brand.toLowerCase().includes(searchParam.toLowerCase()));

  const brands = [...new Set(PRODUCTS.map(p => p.brand))];

  return `
  <div class="page-header">
    <div class="container">
      <nav class="breadcrumbs"><a onclick="navigate('home')">Home</a><i class="ti ti-chevron-right" style="font-size:12px"></i><span>${l.catPageTitle}</span></nav>
      <h1>${l.catPageTitle}</h1>
      <p>${l.resultsFound} <strong>${products.length}</strong> ${l.results}</p>
    </div>
  </div>
  <div class="container" style="padding-top:2rem;padding-bottom:3rem">
    <div class="catalog-layout">
      <aside class="filters-sidebar">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.25rem">
          <span style="font-size:14px;font-weight:700"><i class="ti ti-adjustments-horizontal" style="margin-right:6px;color:var(--accent)"></i>${l.filterTitle}</span>
          <button class="btn btn-xs btn-outline" onclick="navigate('catalog')">${l.clearFilters}</button>
        </div>
        <div class="filter-group">
          <div class="filter-title"><span>${state.lang==='ka'?'კატეგორია':'Category'}</span></div>
          <div class="filter-options">
            ${[['all',state.lang==='ka'?'ყველა':'All'],['printers',l.cat1],['filament',l.cat2],['parts',l.cat3],['accessories',l.cat4]].map(([v,n])=>`
            <label class="filter-option">
              <input type="radio" name="cat" value="${v}" ${typeParam===v?'checked':''} onchange="navigate('catalog','type='+this.value)">
              <label>${n}</label>
            </label>`).join('')}
          </div>
        </div>
        <div class="filter-group">
          <div class="filter-title">${l.filterBrand}</div>
          <div class="filter-options">
            ${brands.map(b=>`<label class="filter-option"><input type="checkbox" value="${b}"><label>${b}</label><span class="count">${PRODUCTS.filter(p=>p.brand===b).length}</span></label>`).join('')}
          </div>
        </div>
        <div class="filter-group">
          <div class="filter-title">${l.filterPrice}</div>
          <div class="price-range">
            <div class="price-inputs">
              <input class="price-input" type="number" placeholder="${state.lang==='ka'?'დან':'From'}" min="0">
              <span style="color:var(--text3)">—</span>
              <input class="price-input" type="number" placeholder="${state.lang==='ka'?'მდე':'To'}" max="99999">
            </div>
          </div>
        </div>
        <div class="filter-group">
          <div class="filter-title">${l.filterStock}</div>
          <div class="filter-options">
            <label class="filter-option"><input type="checkbox" id="instock-filter" onchange="filterInStock()"><label>${l.filterInStock}</label></label>
          </div>
        </div>
      </aside>
      <div>
        <div class="catalog-top">
          <div class="catalog-count">${l.resultsFound} <strong>${products.length}</strong> ${l.results}</div>
          <div style="display:flex;gap:10px;align-items:center">
            <select class="sort-select" onchange="applySortCatalog(this.value)">
              <option value="default">${l.sortDefault}</option>
              <option value="price-asc">${l.sortPriceAsc}</option>
              <option value="price-desc">${l.sortPriceDesc}</option>
              <option value="new">${l.sortNew}</option>
            </select>
            <div class="view-toggle">
              <button class="view-btn active"><i class="ti ti-layout-grid"></i></button>
              <button class="view-btn"><i class="ti ti-list"></i></button>
            </div>
          </div>
        </div>
        <div class="products-grid" id="catalog-grid">
          ${products.length ? products.map(productCardHTML).join('') : `<div class="empty-state" style="grid-column:1/-1"><div class="empty-icon"><i class="ti ti-search-off"></i></div><div class="empty-title">${state.lang==='ka'?'პროდუქტი ვერ მოიძებნა':'No products found'}</div><div class="empty-desc">${state.lang==='ka'?'სცადეთ სხვა ძიება':'Try a different search'}</div><button class="btn btn-primary" onclick="navigate('catalog')">${l.clearFilters}</button></div>`}
        </div>
        <div class="pagination">
          ${[1,2,3,'...',8].map(n=>`<button class="page-btn ${n===1?'active':''}">${n}</button>`).join('')}
          <button class="page-btn"><i class="ti ti-chevron-right"></i></button>
        </div>
      </div>
    </div>
  </div>`;
}

function applySortCatalog(val) {
  const grid = document.getElementById('catalog-grid');
  if (!grid) return;
  const cards = [...grid.querySelectorAll('.product-card')];
  if (val === 'price-asc') cards.sort((a,b) => parseFloat(a.querySelector('.product-price').textContent.replace(/[^0-9]/g,'')) - parseFloat(b.querySelector('.product-price').textContent.replace(/[^0-9]/g,'')));
  if (val === 'price-desc') cards.sort((a,b) => parseFloat(b.querySelector('.product-price').textContent.replace(/[^0-9]/g,'')) - parseFloat(a.querySelector('.product-price').textContent.replace(/[^0-9]/g,'')));
  cards.forEach(c => grid.appendChild(c));
}

function filterInStock() {
  const checked = document.getElementById('instock-filter')?.checked;
  document.querySelectorAll('#catalog-grid .product-card').forEach(card => {
    if (checked && card.querySelector('.badge-red')) card.style.display = 'none';
    else card.style.display = '';
  });
}

/* ── PRODUCT PAGE ── */
function renderProduct() {
  const l = t();
  const id = parseInt(getParam('id'));
  const p = PRODUCTS.find(pr => pr.id === id) || PRODUCTS[0];
  const similar = PRODUCTS.filter(pr => pr.category === p.category && pr.id !== p.id).slice(0, 4);
  const desc = state.lang==='ka' ? p.desc_ka : p.desc_en;
  const discount = p.oldPrice ? Math.round((1 - p.price/p.oldPrice)*100) : 0;

  return `
  <div style="background:var(--bg2);border-bottom:1px solid var(--border)">
    <div class="container"><nav class="breadcrumbs">
      <a onclick="navigate('home')">${state.lang==='ka'?'მთავარი':'Home'}</a>
      <i class="ti ti-chevron-right" style="font-size:12px"></i>
      <a onclick="navigate('catalog','type=${p.category}')">${state.lang==='ka'?p.category==='printers'?'პრინტერები':p.category==='filament'?'ფილამენტი':'სხვა':p.category}</a>
      <i class="ti ti-chevron-right" style="font-size:12px"></i>
      <span>${p.name}</span>
    </nav></div>
  </div>
  <div class="container" style="padding-top:2rem;padding-bottom:3rem">
    <div class="product-page-grid">
      <div class="product-gallery">
        <div class="gallery-main">${p.icon}</div>
        <div class="gallery-thumbs">
          ${[1,2,3,4].map(i=>`<div class="gallery-thumb ${i===1?'active':''}">${p.icon}</div>`).join('')}
        </div>
      </div>
      <div>
        <div class="product-detail-brand">${p.brand}</div>
        <div class="product-detail-name">${p.name}</div>
        <div class="product-detail-rating">
          <span style="color:#f59e0b">★</span> ${p.rating}
          <span style="color:var(--text3);font-size:12px">(${p.reviews} ${state.lang==='ka'?'მიმოხილვა':'reviews'})</span>
          ${p.inStock ? `<span class="badge badge-green" style="margin-left:8px"><span class="badge-dot"></span>${l.inStock}</span>` : `<span class="badge badge-red">${l.outStock}</span>`}
        </div>
        <div class="product-detail-price-row">
          <div class="product-detail-price">₾${p.price.toLocaleString()}</div>
          ${p.oldPrice ? `<div class="product-detail-old">₾${p.oldPrice.toLocaleString()}</div>` : ''}
          ${discount ? `<div class="product-detail-discount">-${discount}%</div>` : ''}
        </div>
        <div class="qty-selector">
          <span style="font-size:13px;color:var(--text2)">${l.qty}:</span>
          <button class="qty-btn" onclick="changeQty(-1)">−</button>
          <span class="qty-num" id="qty-val">1</span>
          <button class="qty-btn" onclick="changeQty(1)">+</button>
        </div>
        <div class="product-actions-row">
          <button class="btn btn-primary" style="flex:1" onclick="addToCart({id:${p.id},name:'${p.name}',price:${p.price},icon:'${p.icon}'})"><i class="ti ti-shopping-cart"></i>${l.addCart}</button>
          <button class="btn btn-outline" onclick="addToCart({id:${p.id},name:'${p.name}',price:${p.price},icon:'${p.icon}'});navigate('cart')"><i class="ti ti-bolt"></i>${l.quickBuy}</button>
          <button class="icon-btn" onclick="toggleWishlistBtn(${p.id},this)" style="width:44px;height:44px;border-radius:var(--radius)"><i class="ti ti-heart"></i></button>
        </div>
        <div class="product-meta">
          <div class="product-meta-row"><i class="ti ti-truck"></i>${l.delivery}: <strong>${state.lang==='ka'?'1–3 დღე':'1–3 days'}</strong></div>
          <div class="product-meta-row"><i class="ti ti-shield-check"></i>${l.warranty}: <strong>${l.guarantee}</strong></div>
          <div class="product-meta-row"><i class="ti ti-refresh"></i>${state.lang==='ka'?'დაბრუნება 14 დღეში':'14-day returns'}</div>
          <div class="product-meta-row"><i class="ti ti-download"></i><a href="#" style="color:var(--accent)">${state.lang==='ka'?'ინსტრუქციის გადმოწერა':'Download manual'}</a></div>
        </div>
      </div>
    </div>

    <div style="margin-top:3rem">
      <div class="tabs">
        ${[['desc',l.tabDesc],['specs',l.tabSpecs],['reviews',l.tabReviews],['faq','FAQ']].map(([id,name],i)=>`<button class="tab-btn ${i===0?'active':''}" onclick="switchTab('${id}',this)">${name}</button>`).join('')}
      </div>
      <div class="tab-content active" id="tab-desc"><p style="font-size:14px;line-height:1.8;color:var(--text2)">${desc}</p></div>
      <div class="tab-content" id="tab-specs">
        <table class="specs-table">
          ${[
            [state.lang==='ka'?'ბრენდი':'Brand', p.brand],
            [l.specArea, p.area || '—'],
            [l.specSpeed, p.speed || '—'],
            ['AMS', p.ams ? (state.lang==='ka'?'დიახ':'Yes') : (state.lang==='ka'?'არა':'No')],
            [state.lang==='ka'?'კამერა':'Camera', p.camera ? (state.lang==='ka'?'დიახ':'Yes') : '—'],
            [state.lang==='ka'?'დახურული კამერა':'Enclosed', p.enclosed ? (state.lang==='ka'?'დიახ':'Yes') : (state.lang==='ka'?'არა':'No')],
            [state.lang==='ka'?'მასალა':'Material', p.material || 'PLA, PETG, ABS, ASA, TPU, PA'],
          ].map(([k,v])=>`<tr><td>${k}</td><td>${v}</td></tr>`).join('')}
        </table>
      </div>
      <div class="tab-content" id="tab-reviews">
        <div class="reviews-grid">
          ${REVIEWS.map(r=>`
          <div class="review-card">
            <div class="review-stars">${'★'.repeat(r.rating)}</div>
            <div class="review-text">${state.lang==='ka'?r.text_ka:r.text_en}</div>
            <div class="review-author">
              <div class="avatar" style="background:${r.color};color:${r.tc}">${r.initials}</div>
              <div><div class="reviewer-name">${r.author}</div><div class="reviewer-product">${r.product}</div></div>
            </div>
          </div>`).join('')}
        </div>
      </div>
      <div class="tab-content" id="tab-faq"><div class="faq-list">${renderFAQs(FAQS.slice(0,3))}</div></div>
    </div>

    ${similar.length ? `
    <div style="margin-top:3rem">
      <div class="section-title" style="margin-bottom:1.5rem">${l.similar}</div>
      <div class="products-grid products-grid-4">${similar.map(productCardHTML).join('')}</div>
    </div>` : ''}
  </div>`;
}

function changeQty(delta) {
  const el = document.getElementById('qty-val');
  if (!el) return;
  el.textContent = Math.max(1, parseInt(el.textContent) + delta);
}

function switchTab(tabId, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  const el = document.getElementById('tab-' + tabId);
  if (el) el.classList.add('active');
}

/* ── CART PAGE ── */
function renderCart() {
  const l = t();
  const total = getCartTotal();
  const delivery = total >= 300 ? 0 : 15;

  if (state.cart.length === 0) {
    return `<div class="container" style="padding:4rem 0">
      <div class="empty-state">
        <div class="empty-icon"><i class="ti ti-shopping-cart"></i></div>
        <div class="empty-title">${l.cartEmpty}</div>
        <div class="empty-desc">${l.cartEmptyDesc}</div>
        <button class="btn btn-primary" onclick="navigate('catalog')"><i class="ti ti-arrow-left"></i>${state.lang==='ka'?'კატალოგი':'Catalog'}</button>
      </div>
    </div>`;
  }

  return `
  <div class="page-header">
    <div class="container">
      <h1>${l.cartTitle} (${getCartCount()})</h1>
    </div>
  </div>
  <div class="container" style="padding-top:2rem;padding-bottom:3rem">
    <div class="cart-layout">
      <div id="cart-items">
        ${state.cart.map(item => `
        <div class="cart-item" id="cart-item-${item.id}">
          <div class="cart-item-img">${item.icon}</div>
          <div class="cart-item-info">
            <div class="cart-item-brand" style="font-size:10px;color:var(--text3);text-transform:uppercase;letter-spacing:1px"></div>
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">₾${(item.price * item.qty).toLocaleString()}</div>
            <div class="cart-item-actions">
              <div class="qty-selector" style="margin:0">
                <button class="qty-btn" style="width:28px;height:28px;font-size:14px" onclick="updateQtyUI(${item.id},-1)">−</button>
                <span class="qty-num" id="item-qty-${item.id}" style="font-size:14px;min-width:24px">${item.qty}</span>
                <button class="qty-btn" style="width:28px;height:28px;font-size:14px" onclick="updateQtyUI(${item.id},1)">+</button>
              </div>
              <button class="btn btn-danger btn-xs" onclick="removeCartItem(${item.id})"><i class="ti ti-trash"></i>${l.remove}</button>
            </div>
          </div>
        </div>`).join('')}
      </div>
      <div>
        <div class="cart-summary">
          <h3>${l.cartTitle}</h3>
          <div class="promo-input-row">
            <input class="promo-input" type="text" placeholder="${l.cartPromo}" id="promo-code">
            <button class="btn btn-outline btn-sm" onclick="applyPromo()">${l.cartPromoApply}</button>
          </div>
          <div class="summary-row"><span>${state.lang==='ka'?'სულ პროდუქტი':'Subtotal'}</span><span>₾${total.toLocaleString()}</span></div>
          <div class="summary-row"><span>${l.cartDelivery}</span><span>${delivery === 0 ? `<span style="color:var(--green);font-weight:600">${l.cartFree}</span>` : `₾${delivery}`}</span></div>
          ${delivery > 0 ? `<div style="font-size:11px;color:var(--text3);text-align:right;margin-top:-4px">${state.lang==='ka'?`კიდევ ₾${300-total} დარჩა უფასო მიტანამდე`:`₾${300-total} more for free delivery`}</div>` : ''}
          <div id="promo-discount" style="display:none" class="summary-row"><span>${state.lang==='ka'?'ფასდაკლება':'Discount'}</span><span id="discount-val" style="color:var(--green)"></span></div>
          <div class="summary-row total">
            <span>${l.cartTotal}</span>
            <span id="cart-total-display">₾${(total + delivery).toLocaleString()}</span>
          </div>
          <button class="btn btn-primary" style="width:100%;margin-top:1rem;justify-content:center" onclick="navigate('checkout')">
            <i class="ti ti-credit-card"></i>${l.checkout}
          </button>
          <button class="btn btn-outline" style="width:100%;margin-top:8px;justify-content:center" onclick="navigate('catalog')">
            <i class="ti ti-arrow-left"></i>${state.lang==='ka'?'ყიდვის გაგრძელება':'Continue shopping'}
          </button>
        </div>
      </div>
    </div>
  </div>`;
}

function updateQtyUI(id, delta) {
  const item = state.cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCartCount();
  const el = document.getElementById('item-qty-' + id);
  if (el) el.textContent = item.qty;
  const priceEl = document.querySelector(`#cart-item-${id} .cart-item-price`);
  if (priceEl) priceEl.textContent = '₾' + (item.price * item.qty).toLocaleString();
  updateCartSummary();
}

function removeCartItem(id) {
  removeFromCart(id);
  const el = document.getElementById('cart-item-' + id);
  if (el) el.remove();
  updateCartSummary();
  if (state.cart.length === 0) navigate('cart');
}

function updateCartSummary() {
  const total = getCartTotal();
  const delivery = total >= 300 ? 0 : 15;
  const el = document.getElementById('cart-total-display');
  if (el) el.textContent = '₾' + (total + delivery).toLocaleString();
}

function applyPromo() {
  const code = document.getElementById('promo-code')?.value.toUpperCase();
  if (code === 'PRINT10') {
    const disc = Math.round(getCartTotal() * 0.1);
    document.getElementById('promo-discount').style.display = 'flex';
    document.getElementById('discount-val').textContent = '-₾' + disc;
    showToast(state.lang==='ka'?'10% ფასდაკლება გამოიყენა!':'10% discount applied!', 'success');
  } else {
    showToast(state.lang==='ka'?'კოდი არასწორია':'Invalid promo code', 'error');
  }
}

/* ── CHECKOUT PAGE ── */
function renderCheckout() {
  const l = t();
  const total = getCartTotal();
  const delivery = total >= 300 ? 0 : 15;
  return `
  <div class="page-header">
    <div class="container"><h1>${l.checkoutTitle}</h1></div>
  </div>
  <div class="container" style="padding-top:2rem;padding-bottom:3rem">
    <div class="cart-layout">
      <div>
        <div class="form-section">
          <h3><i class="ti ti-user"></i>${state.lang==='ka'?'პირადი ინფორმაცია':'Personal info'}</h3>
          <div class="form-grid-2">
            <div class="form-group"><label class="form-label">${state.lang==='ka'?'სახელი':'First name'}</label><input class="form-input" type="text" placeholder="${state.lang==='ka'?'გიორგი':'George'}"></div>
            <div class="form-group"><label class="form-label">${state.lang==='ka'?'გვარი':'Last name'}</label><input class="form-input" type="text" placeholder="${state.lang==='ka'?'კვარაცხელია':'Smith'}"></div>
          </div>
          <div class="form-grid-2">
            <div class="form-group"><label class="form-label">${state.lang==='ka'?'ტელეფონი':'Phone'}</label><input class="form-input" type="tel" placeholder="+995 5xx xxx xxx"></div>
            <div class="form-group"><label class="form-label">Email</label><input class="form-input" type="email" placeholder="email@example.com"></div>
          </div>
        </div>
        <div class="form-section">
          <h3><i class="ti ti-map-pin"></i>${state.lang==='ka'?'მიწოდების მისამართი':'Delivery address'}</h3>
          <div class="form-group">
            <label class="form-label">${state.lang==='ka'?'ქალაქი':'City'}</label>
            <select class="form-input form-select">
              <option>თბილისი / Tbilisi</option><option>ბათუმი / Batumi</option><option>ქუთაისი / Kutaisi</option><option>რუსთავი / Rustavi</option>
            </select>
          </div>
          <div class="form-group"><label class="form-label">${state.lang==='ka'?'მისამართი':'Address'}</label><input class="form-input" type="text" placeholder="${state.lang==='ka'?'ქუჩა, ბინა':'Street, apt'}"></div>
          <div class="form-group"><label class="form-label">${state.lang==='ka'?'კომენტარი':'Comment'}</label><textarea class="form-input form-textarea" placeholder="${state.lang==='ka'?'სურვილები კურიერისთვის...':'Notes for courier...'}"></textarea></div>
        </div>
        <div class="form-section">
          <h3><i class="ti ti-truck"></i>${state.lang==='ka'?'მიწოდების მეთოდი':'Delivery method'}</h3>
          <div class="radio-group">
            ${[
              {id:'courier',icon:'ti-truck',name:state.lang==='ka'?'კურიერი':'Courier',desc:state.lang==='ka'?'1–2 დღეში':'1–2 days',price:total>=300?state.lang==='ka'?'უფასო':'Free':'₾15'},
              {id:'pickup',icon:'ti-building',name:state.lang==='ka'?'თვითაღება':'Self pickup',desc:state.lang==='ka'?'ჩვენი ოფისიდან':'From our office',price:state.lang==='ka'?'უფასო':'Free'},
            ].map((opt,i) => `
            <div class="radio-option ${i===0?'selected':''}" onclick="selectDelivery(this)">
              <input type="radio" name="delivery" value="${opt.id}" ${i===0?'checked':''}>
              <div style="flex:1">
                <div style="font-size:13px;font-weight:600;display:flex;align-items:center;gap:6px"><i class="ti ${opt.icon}"></i>${opt.name}</div>
                <div style="font-size:12px;color:var(--text3)">${opt.desc}</div>
              </div>
              <span style="font-size:13px;font-weight:700;color:var(--green)">${opt.price}</span>
            </div>`).join('')}
          </div>
        </div>
        <div class="form-section">
          <h3><i class="ti ti-credit-card"></i>${state.lang==='ka'?'გადახდის მეთოდი':'Payment method'}</h3>
          <div class="radio-group">
            ${[
              {icon:'ti-credit-card',name:state.lang==='ka'?'ბარათით ონლაინ':'Pay by card online'},
              {icon:'ti-cash',name:state.lang==='ka'?'ნაღდი კურიერთან':'Cash on delivery'},
              {icon:'ti-building-bank',name:state.lang==='ka'?'საბანკო გადარიცხვა':'Bank transfer'},
            ].map((opt,i) => `
            <div class="radio-option ${i===0?'selected':''}" onclick="selectDelivery(this)">
              <input type="radio" name="payment" ${i===0?'checked':''}>
              <div style="display:flex;align-items:center;gap:8px;font-size:13px;font-weight:600"><i class="ti ${opt.icon}"></i>${opt.name}</div>
            </div>`).join('')}
          </div>
        </div>
        <button class="btn btn-primary" style="width:100%;justify-content:center;padding:14px" onclick="placeOrder()">
          <i class="ti ti-check"></i>${state.lang==='ka'?'შეკვეთის დადასტურება':'Place order'} — ₾${(total+delivery).toLocaleString()}
        </button>
      </div>
      <div>
        <div class="cart-summary">
          <h3>${state.lang==='ka'?'შეკვეთის შინაარსი':'Order summary'}</h3>
          ${state.cart.map(item=>`
          <div style="display:flex;gap:10px;align-items:center;margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid var(--border)">
            <div style="width:44px;height:44px;background:var(--bg2);border:1px solid var(--border);border-radius:var(--radius);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">${item.icon}</div>
            <div style="flex:1;font-size:12px"><div style="font-weight:600">${item.name}</div><div style="color:var(--text3)">${state.lang==='ka'?'რაოდ':'Qty'}: ${item.qty}</div></div>
            <div style="font-size:14px;font-weight:700">₾${(item.price*item.qty).toLocaleString()}</div>
          </div>`).join('')}
          <div class="summary-row"><span>${state.lang==='ka'?'მიწოდება':'Delivery'}</span><span>${delivery===0?`<span style="color:var(--green);font-weight:600">${state.lang==='ka'?'უფასო':'Free'}</span>`:'₾'+delivery}</span></div>
          <div class="summary-row total"><span>${l.cartTotal}</span><span>₾${(total+delivery).toLocaleString()}</span></div>
        </div>
      </div>
    </div>
  </div>`;
}

function selectDelivery(el) {
  const group = el.closest('.radio-group');
  if (!group) return;
  group.querySelectorAll('.radio-option').forEach(opt => opt.classList.remove('selected'));
  el.classList.add('selected');
  const radio = el.querySelector('input[type="radio"]');
  if (radio) radio.checked = true;
}

function placeOrder() {
  const l = t();
  showToast(l.orderPlaced, 'success');
  state.cart = [];
  saveCart();
  updateCartCount();
  setTimeout(() => navigate('home'), 2000);
}

/* ── SERVICES PAGE ── */
function renderServices() {
  const l = t();
  const services = [
    { icon: 'ti-layers-difference', bg: 'var(--accent-light)', c: 'var(--accent)', title_ka: '3D ბეჭდვა შეკვეთაზე', title_en: '3D Printing on demand', desc_ka: 'ბეჭდავთ ნებისმიერ 3D მოდელს PLA, PETG, ABS, ASA, TPU, PA, PC მასალებში. STL/STEP/OBJ ფაილებიდან. ბრეჭდვის სიზუსტე 0.05–0.2 mm.', desc_en: 'We print any 3D model in PLA, PETG, ABS, ASA, TPU, PA, PC materials. From STL/STEP/OBJ files. Print precision 0.05–0.2 mm.' },
    { icon: 'ti-scan', bg: 'var(--purple-light)', c: 'var(--purple)', title_ka: '3D სკანირება', title_en: '3D Scanning', desc_ka: 'ობიექტების ციფრიზაცია 3D სკანერით. გამოიყენება რევერს-ინჟინერინგისთვის, კულტურული მემკვიდრეობის შენახვისთვის ან პერსონალური გამოყენებისთვის.', desc_en: 'Object digitization with 3D scanner. Used for reverse engineering, cultural heritage preservation or personal use.' },
    { icon: 'ti-3d-cube-sphere', bg: 'var(--green-light)', c: 'var(--green)', title_ka: '3D მოდელირება', title_en: '3D Modeling', desc_ka: 'ვქმნით 3D მოდელებს ნახაზებიდან, ფოტოდან ან ვერბალური აღწერილობიდან. SolidWorks, Fusion 360, Blender. ნებისმიერი სირთულე.', desc_en: 'We create 3D models from drawings, photos or verbal descriptions. SolidWorks, Fusion 360, Blender. Any complexity.' },
    { icon: 'ti-tool', bg: 'var(--amber-light)', c: 'var(--amber)', title_ka: 'სერვისი და რემონტი', title_en: 'Service & Repair', desc_ka: 'ნებისმიერი 3D პრინტერის შეკეთება და სერვისი. ოსტატის გამოძახება თბილისში. ყველა ბრენდი: Bambu Lab, Creality, Prusa, Elegoo.', desc_en: 'Repair and servicing of any 3D printer. Home visit in Tbilisi. All brands: Bambu Lab, Creality, Prusa, Elegoo.' },
    { icon: 'ti-settings', bg: 'var(--bg2)', c: 'var(--text2)', title_ka: 'კონსულტაცია და დაყენება', title_en: 'Consultation & Setup', desc_ka: 'ვეხმარებით 3D პრინტერის სწორ არჩევანში, ყიდვის შემდეგ დაყენებასა და Bambu Studio / Orca Slicer-ის სწავლებაში.', desc_en: 'We help choose the right 3D printer, set it up after purchase and learn Bambu Studio / Orca Slicer.' },
  ];

  const steps = [
    {n:1, t_ka:'ფაილის ატვირთვა', t_en:'Upload file', d_ka:'STL, STEP, OBJ ან ZIP', d_en:'STL, STEP, OBJ or ZIP'},
    {n:2, t_ka:'ფასის მიღება', t_en:'Get a quote', d_ka:'1 საათში', d_en:'Within 1 hour'},
    {n:3, t_ka:'გადახდა', t_en:'Payment', d_ka:'ონლაინ ან ნაღდი', d_en:'Online or cash'},
    {n:4, t_ka:'მიღება', t_en:'Receive', d_ka:'1–5 სამ. დღე', d_en:'1–5 working days'},
  ];

  return `
  <div class="service-hero section-alt">
    <div class="container">
      <div class="badge badge-blue" style="margin-bottom:1rem"><span class="badge-dot"></span>${state.lang==='ka'?'3D სერვისები':'3D Services'}</div>
      <h1 class="section-title" style="font-size:42px">${l.serviceTitle}</h1>
      <p style="font-size:15px;color:var(--text2);max-width:520px;margin:0 auto 2rem">${state.lang==='ka'?'ვბეჭდავთ, ვსკანირებთ, ვმოდელირებთ. პროფესიონალური 3D სერვისები თბილისში.':'We print, scan, model. Professional 3D services in Tbilisi.'}</p>
      <div class="service-steps">
        ${steps.map(s=>`
        <div class="service-step">
          <div class="step-num">${s.n}</div>
          <div class="step-title">${state.lang==='ka'?s.t_ka:s.t_en}</div>
          <div class="step-desc">${state.lang==='ka'?s.d_ka:s.d_en}</div>
        </div>`).join('')}
      </div>
    </div>
  </div>
  <div class="container" style="padding-top:3rem;padding-bottom:3rem">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:3rem">
      ${services.map(s=>`
      <div class="service-card">
        <div class="service-icon" style="background:${s.bg};color:${s.c}"><i class="ti ${s.icon}"></i></div>
        <div class="service-content">
          <div class="title">${state.lang==='ka'?s.title_ka:s.title_en}</div>
          <div class="desc">${state.lang==='ka'?s.desc_ka:s.desc_en}</div>
        </div>
      </div>`).join('')}
    </div>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:var(--radius-lg);padding:2rem">
      <div class="section-title" style="margin-bottom:1.5rem;font-size:22px">${state.lang==='ka'?'3D ბეჭდვის განაცხადი':'3D Printing Request'}</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:3rem">
        <div>
          <div class="service-upload-area" id="upload-area" onclick="document.getElementById('file-input').click()" ondrop="handleDrop(event)" ondragover="event.preventDefault();this.classList.add('dragover')" ondragleave="this.classList.remove('dragover')">
            <input type="file" id="file-input" style="display:none" accept=".stl,.step,.obj,.zip" onchange="fileSelected(this)">
            <div class="upload-icon"><i class="ti ti-cloud-upload"></i></div>
            <div class="upload-title">${l.uploadFile}</div>
            <div class="upload-sub">${l.uploadDrag}</div>
            <div class="upload-sub" style="margin-top:4px;font-weight:600">${l.uploadFormats}</div>
          </div>
          <div id="file-info" style="display:none;margin-top:12px;padding:10px 14px;background:var(--green-light);border:1px solid #a7f3d0;border-radius:var(--radius);font-size:13px;color:#065f46;display:none;align-items:center;gap:8px">
            <i class="ti ti-file-check"></i><span id="file-name"></span>
          </div>
        </div>
        <div>
          <div class="form-group"><label class="form-label">${state.lang==='ka'?'სახელი':'Name'}</label><input class="form-input" type="text" placeholder="${state.lang==='ka'?'თქვენი სახელი':'Your name'}"></div>
          <div class="form-group"><label class="form-label">${state.lang==='ka'?'ტელეფონი / Email':'Phone / Email'}</label><input class="form-input" type="text" placeholder="+995 5xx xx xx xx"></div>
          <div class="form-group">
            <label class="form-label">${state.lang==='ka'?'მასალა':'Material'}</label>
            <select class="form-input form-select">
              <option>PLA</option><option>PETG</option><option>ABS</option><option>ASA</option><option>TPU</option><option>PA (Nylon)</option><option>PA-CF</option>
            </select>
          </div>
          <div class="form-group"><label class="form-label">${state.lang==='ka'?'კომენტარი':'Comment'}</label><textarea class="form-input form-textarea" style="min-height:80px" placeholder="${state.lang==='ka'?'ფერი, რაოდენობა, სურვილები...':'Color, quantity, preferences...'}"></textarea></div>
          <button class="btn btn-primary" style="width:100%;justify-content:center" onclick="submitServiceRequest()">
            <i class="ti ti-send"></i>${state.lang==='ka'?'განაცხადის გაგზავნა':'Send request'}
          </button>
        </div>
      </div>
    </div>
  </div>`;
}

function fileSelected(input) {
  if (!input.files[0]) return;
  const info = document.getElementById('file-info');
  const name = document.getElementById('file-name');
  if (info && name) { name.textContent = input.files[0].name; info.style.display = 'flex'; }
}

function handleDrop(e) {
  e.preventDefault();
  document.getElementById('upload-area')?.classList.remove('dragover');
  const file = e.dataTransfer?.files[0];
  if (file) { document.getElementById('file-name').textContent = file.name; document.getElementById('file-info').style.display = 'flex'; }
}

function submitServiceRequest() {
  showToast(state.lang==='ka'?'განაცხადი გაგზავნილია! 1 საათში დაგიკავშირდებით.':'Request sent! We will contact you within 1 hour.', 'success');
}

/* ── SIMPLE PAGES ── */
function renderBlog() {
  const l = t();
  const posts = [
    { title_ka: 'Bambu Lab X1 Carbon vs P1S — რომელი ავირჩიოთ?', title_en: 'Bambu Lab X1 Carbon vs P1S — which to choose?', date: '15 მაისი 2025', tag_ka: 'შედარება', tag_en: 'Comparison', icon: '📊' },
    { title_ka: 'PLA vs PETG: სრული სახელმძღვანელო', title_en: 'PLA vs PETG: complete guide', date: '8 მაისი 2025', tag_ka: 'ფილამენტი', tag_en: 'Filament', icon: '🧵' },
    { title_ka: 'Klipper-ი Ender 3-ზე: ინსტალაციის სახელმძღვანელო', title_en: 'Klipper on Ender 3: installation guide', date: '1 მაისი 2025', tag_ka: 'სახელმძღვანელო', tag_en: 'Guide', icon: '⚙️' },
    { title_ka: '3D ბეჭდვა ბიზნეს პროტოტიპებისთვის', title_en: '3D printing for business prototypes', date: '20 აპრილი 2025', tag_ka: 'ბიზნესი', tag_en: 'Business', icon: '🏢' },
    { title_ka: 'Bambu Lab AMS: ყველაფერი რაც უნდა იცოდეთ', title_en: 'Bambu Lab AMS: everything you need to know', date: '10 აპრილი 2025', tag_ka: 'სახელმძღვანელო', tag_en: 'Guide', icon: '🎨' },
    { title_ka: 'ბეჭდვის ხარისხის პრობლემების გადაჭრა', title_en: 'Solving print quality problems', date: '1 აპრილი 2025', tag_ka: 'მხარდაჭერა', tag_en: 'Support', icon: '🔧' },
  ];
  return `
  <div class="page-header"><div class="container"><h1>${state.lang==='ka'?'ბლოგი':'Blog'}</h1><p>${state.lang==='ka'?'სახელმძღვანელოები, შედარებები და სიახლეები':'Guides, comparisons and news'}</p></div></div>
  <div class="container" style="padding-top:2rem;padding-bottom:3rem">
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px">
      ${posts.map(p=>`
      <div class="product-card" style="cursor:pointer">
        <div class="product-img" style="height:140px;font-size:48px">${p.icon}</div>
        <div class="product-info">
          <div class="badge badge-blue" style="margin-bottom:8px">${state.lang==='ka'?p.tag_ka:p.tag_en}</div>
          <div class="product-name">${state.lang==='ka'?p.title_ka:p.title_en}</div>
          <div style="font-size:12px;color:var(--text3);margin-top:8px;display:flex;align-items:center;gap:4px"><i class="ti ti-calendar" style="font-size:13px"></i>${p.date}</div>
        </div>
      </div>`).join('')}
    </div>
  </div>`;
}

function renderSupport() {
  return `
  <div class="page-header"><div class="container"><h1>${t().supportTitle}</h1><p>${state.lang==='ka'?'ვეხმარებით ნებისმიერ კითხვაში':'We help with any question'}</p></div></div>
  <div class="container" style="padding-top:2rem;padding-bottom:3rem">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:2rem;margin-bottom:2rem">
      ${[
        {icon:'ti-message-circle',bg:'var(--accent-light)',c:'var(--accent)',t_ka:'გამოგვიგზავნეთ შეტყობინება',t_en:'Send us a message',d_ka:'ვპასუხობთ 15 წუთში',d_en:'We reply within 15 minutes'},
        {icon:'ti-phone',bg:'var(--green-light)',c:'var(--green)',t_ka:'დაგვიძახეთ',t_en:'Call us',d_ka:'+995 555 000 000',d_en:'+995 555 000 000'},
        {icon:'ti-brand-telegram',bg:'var(--purple-light)',c:'var(--purple)',t_ka:'Telegram',t_en:'Telegram',d_ka:'@3dhubge',d_en:'@3dhubge'},
        {icon:'ti-brand-whatsapp',bg:'var(--green-light)',c:'var(--green)',t_ka:'WhatsApp',t_en:'WhatsApp',d_ka:'+995 555 000 000',d_en:'+995 555 000 000'},
      ].map(s=>`
      <div class="service-card">
        <div class="service-icon" style="background:${s.bg};color:${s.c}"><i class="ti ${s.icon}"></i></div>
        <div class="service-content"><div class="title">${state.lang==='ka'?s.t_ka:s.t_en}</div><div class="desc">${state.lang==='ka'?s.d_ka:s.d_en}</div></div>
      </div>`).join('')}
    </div>
    <div class="section-title" style="margin-bottom:1.25rem">${t().faqTitle}</div>
    <div class="faq-list">${renderFAQs(FAQS)}</div>
    <div style="margin-top:2rem;background:var(--bg2);border:1px solid var(--border);border-radius:var(--radius-lg);padding:1.5rem">
      <div style="font-size:16px;font-weight:700;margin-bottom:1.25rem">${state.lang==='ka'?'განაცხადის გაგზავნა':'Send a request'}</div>
      <div class="form-grid-2"><div class="form-group"><label class="form-label">${state.lang==='ka'?'სახელი':'Name'}</label><input class="form-input" type="text"></div><div class="form-group"><label class="form-label">Email / ${state.lang==='ka'?'ტელეფონი':'Phone'}</label><input class="form-input" type="text"></div></div>
      <div class="form-group"><label class="form-label">${state.lang==='ka'?'შეტყობინება':'Message'}</label><textarea class="form-input form-textarea" style="min-height:100px"></textarea></div>
      <button class="btn btn-primary" onclick="showToast(state.lang==='ka'?'გაგზავნილია!':'Sent!','success')"><i class="ti ti-send"></i>${state.lang==='ka'?'გაგზავნა':'Send'}</button>
    </div>
  </div>`;
}

function renderWishlist() {
  const l = t();
  const wished = PRODUCTS.filter(p => state.wishlist.includes(p.id));
  return `
  <div class="page-header"><div class="container"><h1>${state.lang==='ka'?'რჩეულები':'Wishlist'}</h1></div></div>
  <div class="container" style="padding-top:2rem;padding-bottom:3rem">
    ${wished.length ? `<div class="products-grid">${wished.map(productCardHTML).join('')}</div>` : `
    <div class="empty-state"><div class="empty-icon"><i class="ti ti-heart"></i></div><div class="empty-title">${state.lang==='ka'?'სიია ცარიელია':'Wishlist is empty'}</div><button class="btn btn-primary" onclick="navigate('catalog')"><i class="ti ti-search"></i>${l.catLabel}</button></div>`}
  </div>`;
}

function renderSearch() {
  const q = getParam('q') || '';
  const results = q ? PRODUCTS.filter(p => p.name.toLowerCase().includes(q.toLowerCase()) || p.brand.toLowerCase().includes(q.toLowerCase())) : [];
  return `
  <div class="page-header"><div class="container"><h1>${state.lang==='ka'?'ძებნა':'Search'}</h1></div></div>
  <div class="container" style="padding-top:2rem;padding-bottom:3rem">
    <div style="display:flex;gap:10px;margin-bottom:2rem">
      <input class="form-input" type="text" id="search-input" value="${q}" placeholder="${t().searchPlaceholder}" style="max-width:500px" onkeydown="if(event.key==='Enter')navigate('search','q='+this.value)">
      <button class="btn btn-primary" onclick="navigate('search','q='+document.getElementById('search-input').value)"><i class="ti ti-search"></i></button>
    </div>
    ${q ? `<p style="margin-bottom:1.5rem;font-size:14px;color:var(--text2)">${t().resultsFound}: <strong>${results.length}</strong></p>
    <div class="products-grid">${results.length ? results.map(productCardHTML).join('') : `<div class="empty-state" style="grid-column:1/-1"><div class="empty-icon"><i class="ti ti-search-off"></i></div><div class="empty-title">${state.lang==='ka'?'ვერ მოიძებნა':'Not found'}</div></div>`}</div>` : ''}
  </div>`;
}

function renderSimplePage(key) {
  const titles = { about: { ka: 'ჩვენს შესახებ', en: 'About us' }, contact: { ka: 'კონტაქტი', en: 'Contact' }, delivery: { ka: 'მიტანა და გადახდა', en: 'Delivery & payment' }, privacy: { ka: 'კონფიდენციალურობა', en: 'Privacy policy' }, terms: { ka: 'გამოყენების პირობები', en: 'Terms of use' }, login: { ka: 'შესვლა', en: 'Sign in' } };
  const info = titles[key] || { ka: key, en: key };
  return `
  <div class="page-header"><div class="container"><h1>${state.lang==='ka'?info.ka:info.en}</h1></div></div>
  <div class="container" style="padding-top:2rem;padding-bottom:3rem">
    ${key==='contact' ? `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:3rem">
      <div>
        <div style="font-size:15px;font-weight:700;margin-bottom:1.25rem">${state.lang==='ka'?'დაგვიკავშირდით':'Contact us'}</div>
        <div class="form-group"><label class="form-label">${state.lang==='ka'?'სახელი':'Name'}</label><input class="form-input" type="text"></div>
        <div class="form-group"><label class="form-label">Email</label><input class="form-input" type="email"></div>
        <div class="form-group"><label class="form-label">${state.lang==='ka'?'შეტყობინება':'Message'}</label><textarea class="form-input form-textarea"></textarea></div>
        <button class="btn btn-primary" onclick="showToast(state.lang==='ka'?'გაგზავნილია!':'Sent!','success')"><i class="ti ti-send"></i>${state.lang==='ka'?'გაგზავნა':'Send'}</button>
      </div>
      <div>
        ${[{icon:'ti-map-pin',t_ka:'მისამართი',t_en:'Address',d:'თბილისი, რუსთაველის 42 / Rustaveli 42, Tbilisi'},{icon:'ti-phone',t_ka:'ტელეფონი',t_en:'Phone',d:'+995 555 000 000'},{icon:'ti-mail',t_ka:'ელ-ფოსტა',t_en:'Email',d:'info@3dhub.ge'},{icon:'ti-clock',t_ka:'სამუშაო საათები',t_en:'Working hours',d:state.lang==='ka'?'ორ–შაბ: 10:00–19:00':'Mon–Sat: 10:00–19:00'}].map(r=>`
        <div style="display:flex;gap:12px;margin-bottom:1.25rem">
          <div style="width:40px;height:40px;border-radius:10px;background:var(--accent-light);border:1px solid var(--accent-light2);display:flex;align-items:center;justify-content:center;color:var(--accent);flex-shrink:0"><i class="ti ${r.icon}"></i></div>
          <div><div style="font-size:12px;color:var(--text3);font-weight:600;text-transform:uppercase;letter-spacing:0.5px">${state.lang==='ka'?r.t_ka:r.t_en}</div><div style="font-size:14px;margin-top:2px">${r.d}</div></div>
        </div>`).join('')}
      </div>
    </div>` : key==='login' ? `
    <div style="max-width:400px;margin:0 auto">
      <div class="form-section">
        <div class="form-group"><label class="form-label">Email</label><input class="form-input" type="email"></div>
        <div class="form-group"><label class="form-label">${state.lang==='ka'?'პაროლი':'Password'}</label><input class="form-input" type="password"></div>
        <button class="btn btn-primary" style="width:100%;justify-content:center" onclick="showToast(state.lang==='ka'?'მოგესალმებით!':'Welcome back!','success');navigate('home')"><i class="ti ti-login"></i>${state.lang==='ka'?'შესვლა':'Sign in'}</button>
        <div style="text-align:center;margin-top:1rem;font-size:13px;color:var(--text3)">${state.lang==='ka'?'ანგარიში არ გაქვთ?':'No account?'} <a style="color:var(--accent);cursor:pointer" onclick="navigate('register')">${state.lang==='ka'?'დარეგისტრირდით':'Register'}</a></div>
      </div>
    </div>` : `<div style="max-width:720px"><p style="font-size:14px;color:var(--text2);line-height:1.8">${state.lang==='ka'?'ეს გვერდი მალე შეივსება.':'This page is coming soon.'}</p></div>`}
  </div>`;
}
