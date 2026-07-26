const STORE_WHATSAPP = "+966554403379"; // استبدل هذا الرقم برقم واتساب المتجر بدون +
const carpetSizes = ["400 × 500", "300 × 400", "250 × 350", "200 × 290", "150 × 220"];
const runnerSizes = ["100 × 300", "100 × 200", "80 × 150", "50 × 80"];
const products = [
  {id:1,img:"assets/carpet-01.jpeg",cat:"medallion",ar:"روبي لؤلؤة 01",en:"Ruby Pearl 01"},
  {id:2,img:"assets/carpet-02.jpeg",cat:"medallion",ar:"روبي قصر 02",en:"Ruby Palace 02"},
  {id:3,img:"assets/carpet-03.jpeg",cat:"floral",ar:"روبي حديقة 03",en:"Ruby Garden 03"},
  {id:4,img:"assets/carpet-04.jpeg",cat:"medallion",ar:"روبي ملكي 04",en:"Ruby Royal 04"},
  {id:5,img:"assets/carpet-05.jpeg",cat:"garden",ar:"روبي بختياري 05",en:"Ruby Bakhtiari 05"},
  {id:6,img:"assets/carpet-06.jpeg",cat:"garden",ar:"روبي بختياري 06",en:"Ruby Bakhtiari 06"},
  {id:7,img:"assets/carpet-07.jpeg",cat:"medallion",ar:"روبي أميرة 07",en:"Ruby Princess 07"},
  {id:8,img:"assets/carpet-08.jpeg",cat:"medallion",ar:"روبي تاج 08",en:"Ruby Crown 08"},
  {id:9,img:"assets/carpet-09.jpeg",cat:"floral",ar:"روبي زهرة 09",en:"Ruby Blossom 09"},
  {id:10,img:"assets/carpet-10.jpeg",cat:"medallion",ar:"روبي لؤلؤة 10",en:"Ruby Pearl 10"}
];
let lang="ar", favorites=JSON.parse(localStorage.getItem("amasiFavs")||"[]"), activeProduct=null;
const grid=document.getElementById("productGrid"), search=document.getElementById("searchInput"), category=document.getElementById("categorySelect"), empty=document.getElementById("emptyState");
function t(ar,en){return lang==="ar"?ar:en}
function render(){
  const q=search.value.trim().toLowerCase(), cat=category.value;
  const filtered=products.filter(p=>(cat==="all"||p.cat===cat)&&(`${p.ar} ${p.en} ${carpetSizes.join(" ")}`.toLowerCase().includes(q)));
  grid.innerHTML=filtered.map(p=>`<article class="product-card">
    <button class="fav ${favorites.includes(p.id)?"active":""}" onclick="toggleFav(${p.id})">${favorites.includes(p.id)?"♥":"♡"}</button>
    <span class="badge">${t("جديد","NEW")}</span>
    <div class="product-image" onclick="openProduct(${p.id})"><img src="${p.img}" alt="${lang==='ar'?p.ar:p.en}" loading="lazy"></div>
    <div class="product-info"><h3>${lang==='ar'?p.ar:p.en}</h3><p>${t("ماركة روبي • جميع المقاسات متوفرة","Ruby brand • Multiple sizes available")}</p><span class="view" onclick="openProduct(${p.id})">${t("عرض التفاصيل ←","View details →")}</span></div>
  </article>`).join("");
  empty.classList.toggle("hidden",filtered.length!==0); updateFavCount();
}
function toggleFav(id){favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];localStorage.setItem("amasiFavs",JSON.stringify(favorites));render()}
function updateFavCount(){document.getElementById("favCount").textContent=favorites.length}
function openProduct(id){activeProduct=products.find(p=>p.id===id);document.getElementById("modalImg").src=activeProduct.img;document.getElementById("modalTitle").textContent=lang==='ar'?activeProduct.ar:activeProduct.en;document.getElementById("modalDesc").textContent=t("تصميم جديد من مجموعة روبي بألوان هادئة وفخمة، مناسب للمجالس وغرف المعيشة وغرف النوم.","A new Ruby collection design in calm, elegant tones, ideal for living rooms, majlis areas and bedrooms.");document.getElementById("sizeSelect").innerHTML=[...carpetSizes,...runnerSizes].map(s=>`<option>${s} cm</option>`).join("");document.getElementById("productModal").classList.remove("hidden")}
function closeModal(){document.getElementById("productModal").classList.add("hidden")}
function switchLang(){lang=lang==="ar"?"en":"ar";document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr";document.getElementById("langBtn").textContent=lang==="ar"?"EN":"AR";document.querySelectorAll("[data-ar]").forEach(el=>el.textContent=el.dataset[lang]);search.placeholder=t("ابحث عن تصميم أو مقاس","Search design or size");[...category.options].forEach(o=>o.textContent=o.dataset[lang]);render();if(activeProduct&&!document.getElementById("productModal").classList.contains("hidden"))openProduct(activeProduct.id)}
search.addEventListener("input",render);category.addEventListener("change",render);document.getElementById("langBtn").onclick=switchLang;document.getElementById("closeModal").onclick=closeModal;document.getElementById("productModal").onclick=e=>{if(e.target.id==="productModal")closeModal()};
document.getElementById("favBtn").onclick=()=>{search.value="";category.value="all";const all=products;const saved=products.filter(p=>favorites.includes(p.id));grid.innerHTML=saved.length?saved.map(p=>`<article class="product-card"><button class="fav active" onclick="toggleFav(${p.id})">♥</button><span class="badge">${t("مفضلة","FAVORITE")}</span><div class="product-image" onclick="openProduct(${p.id})"><img src="${p.img}" alt=""></div><div class="product-info"><h3>${lang==='ar'?p.ar:p.en}</h3><p>${t("ماركة روبي • جميع المقاسات متوفرة","Ruby brand • Multiple sizes available")}</p><span class="view" onclick="openProduct(${p.id})">${t("عرض التفاصيل ←","View details →")}</span></div></article>`).join(""):`<p class="empty">${t("لا توجد منتجات في المفضلة.","Your favorites list is empty.")}</p>`;document.getElementById("products").scrollIntoView()};
document.getElementById("whatsappBtn").onclick=()=>{const size=document.getElementById("sizeSelect").value;const name=lang==='ar'?activeProduct.ar:activeProduct.en;const msg=t(`السلام عليكم، أرغب بطلب ${name} بمقاس ${size}. أرجو تزويدي بالسعر والتوصيل.`,`Hello, I would like to order ${name} in size ${size}. Please send me the price and delivery details.`);window.open(`https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(msg)}`,"_blank")};
render();
