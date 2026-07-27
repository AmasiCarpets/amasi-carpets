const STORE_WHATSAPP = "+966554403379";

/* =========================
   المقاسات
========================= */

const carpetSizes = [
  "400 × 500",
  "300 × 400",
  "250 × 350",
  "200 × 290",
  "150 × 220",
  "100 × 300",
  "100 × 200",
  "80 × 150",
  "50 × 80"
];

const floriaSizes = [
  "500 × 700",
  "500 × 600",
  "400 × 700",
  "400 × 600",
  "400 × 500",
  "400 × 400",
  "300 × 500",
  "300 × 400",
  "250 × 350",
  "200 × 300",
  "150 × 220",
  "100 × 500",
  "100 × 400",
  "100 × 300",
  "100 × 200"
];

/* =========================
   المجلدات / الماركات
========================= */

const collections = [
  {
    id: "ruby",
    ar: "نقشات من ماركة روبي",
    en: "Ruby Carpet Patterns",
    cover: "carpet-01.jpeg",
    descriptionAr: "اضغط لمشاهدة جميع نقشات ماركة روبي",
    descriptionEn: "Tap to view all Ruby carpet patterns",
    brandAr: "روبي",
    brandEn: "Ruby",
    originAr: "",
    originEn: "",
    patternAr: "",
    patternEn: "",
    sizes: carpetSizes
  },
  {
    id: "floria",
    ar: "نقشات ماركة فلوريا",
    en: "Floria Carpet Patterns",
    cover: "floria/IMG_0200.jpeg",
    descriptionAr: "اضغط لمشاهدة جميع نقشات فلوريا",
    descriptionEn: "Tap to view all Floria carpet patterns",
    brandAr: "فلوريا",
    brandEn: "Floria",
    originAr: "صناعة تركية 🇹🇷",
    originEn: "Made in Turkey 🇹🇷",
    patternAr: "نقشة فرنسية",
    patternEn: "French pattern",
    sizes: floriaSizes
  }
];

/* =========================
   جميع النقشات
========================= */

const products = [
  {
    id: 1,
    collection: "ruby",
    img: "carpet-01.jpeg",
    cat: "medallion",
    ar: "نقشة روبي 01",
    en: "Ruby Pattern 01"
  },
  {
    id: 2,
    collection: "ruby",
    img: "carpet-02.jpeg",
    cat: "medallion",
    ar: "نقشة روبي 02",
    en: "Ruby Pattern 02"
  },
  {
    id: 3,
    collection: "ruby",
    img: "carpet-03.jpeg",
    cat: "floral",
    ar: "نقشة روبي 03",
    en: "Ruby Pattern 03"
  },
  {
    id: 4,
    collection: "ruby",
    img: "carpet-04.jpeg",
    cat: "medallion",
    ar: "نقشة روبي 04",
    en: "Ruby Pattern 04"
  },
  {
    id: 5,
    collection: "ruby",
    img: "carpet-05.jpeg",
    cat: "garden",
    ar: "نقشة روبي 05",
    en: "Ruby Pattern 05"
  },
  {
    id: 6,
    collection: "ruby",
    img: "carpet-06.jpeg",
    cat: "garden",
    ar: "نقشة روبي 06",
    en: "Ruby Pattern 06"
  },
  {
    id: 7,
    collection: "ruby",
    img: "carpet-07.jpeg",
    cat: "medallion",
    ar: "نقشة روبي 07",
    en: "Ruby Pattern 07"
  },
  {
    id: 8,
    collection: "ruby",
    img: "carpet-08.jpeg",
    cat: "medallion",
    ar: "نقشة روبي 08",
    en: "Ruby Pattern 08"
  },
  {
    id: 9,
    collection: "ruby",
    img: "carpet-09.jpeg",
    cat: "floral",
    ar: "نقشة روبي 09",
    en: "Ruby Pattern 09"
  },
  {
    id: 10,
    collection: "ruby",
    img: "carpet-10.jpeg",
    cat: "medallion",
    ar: "نقشة روبي 10",
    en: "Ruby Pattern 10"
  },

  {
    id: 12,
    collection: "floria",
    img: "floria/IMG_0200.jpeg",
    cat: "medallion",
    ar: "نقشة فلوريا 01",
    en: "Floria Pattern 01"
  },
  {
    id: 13,
    collection: "floria",
    img: "floria/IMG_0201.jpeg",
    cat: "floral",
    ar: "نقشة فلوريا 02",
    en: "Floria Pattern 02"
  },
  {
    id: 14,
    collection: "floria",
    img: "floria/IMG_0202.jpeg",
    cat: "garden",
    ar: "نقشة فلوريا 03",
    en: "Floria Pattern 03"
  },
  {
    id: 15,
    collection: "floria",
    img: "floria/IMG_0203.jpeg",
    cat: "medallion",
    ar: "نقشة فلوريا 04",
    en: "Floria Pattern 04"
  },
  {
    id: 16,
    collection: "floria",
    img: "floria/IMG_0204.jpeg",
    cat: "floral",
    ar: "نقشة فلوريا 05",
    en: "Floria Pattern 05"
  },
  {
    id: 17,
    collection: "floria",
    img: "floria/IMG_0205.jpeg",
    cat: "garden",
    ar: "نقشة فلوريا 06",
    en: "Floria Pattern 06"
  },
  {
    id: 18,
    collection: "floria",
    img: "floria/IMG_0206.jpeg",
    cat: "medallion",
    ar: "نقشة فلوريا 07",
    en: "Floria Pattern 07"
  },
  {
    id: 19,
    collection: "floria",
    img: "floria/IMG_0207.jpeg",
    cat: "floral",
    ar: "نقشة فلوريا 08",
    en: "Floria Pattern 08"
  },
  {
    id: 20,
    collection: "floria",
    img: "floria/IMG_0208.jpeg",
    cat: "garden",
    ar: "نقشة فلوريا 09",
    en: "Floria Pattern 09"
  },
  {
    id: 21,
    collection: "floria",
    img: "floria/IMG_0209.jpeg",
    cat: "medallion",
    ar: "نقشة فلوريا 10",
    en: "Floria Pattern 10"
  }

  /*
  لإضافة نقشة جديدة:
  ضع فاصلة بعد المنتج السابق ثم أضف كائنًا جديدًا.
  يجب أن يكون id مختلفًا، وcollection مطابقًا لمعرف المجلد.
  */
];

/* =========================
   إعدادات الموقع
========================= */

const ITEMS_PER_PAGE = 24;

let lang = "ar";
let activeCollectionId = null;
let activeProduct = null;
let currentPage = 1;
let showingFavorites = false;

let favorites = JSON.parse(
  localStorage.getItem("amasiFavs") || "[]"
);

const grid = document.getElementById("productGrid");
const search = document.getElementById("searchInput");

const category =
  document.getElementById("category") ||
  document.getElementById("categoryFilter");

const category =
  document.getElementById("categorySelect") ||
  document.getElementById("category") ||
  document.getElementById("categoryFilter");

function t(ar, en) {
  return lang === "ar" ? ar : en;
}

function getCollection(collectionId) {
  return collections.find(
    (collection) => collection.id === collectionId
  );
}

function getProductSizes(product) {
  const collection = getCollection(product?.collection);
  return collection?.sizes || carpetSizes;
}

function resetFilters() {
  currentPage = 1;

  if (search) {
    search.value = "";
  }

  if (category) {
    category.value = "all";
  }
}

/* =========================
   عرض المجلدات
========================= */

function renderCollections() {
  activeCollectionId = null;
  showingFavorites = false;
  currentPage = 1;

  const query = search
    ? search.value.trim().toLowerCase()
    : "";

  const filteredCollections = collections.filter((collection) => {
    const collectionProducts = products.filter(
      (product) => product.collection === collection.id
    );

    const searchableText = [
      collection.ar,
      collection.en,
      collection.descriptionAr,
      collection.descriptionEn,
      collection.brandAr,
      collection.brandEn,
      collection.originAr,
      collection.originEn,
      collection.patternAr,
      collection.patternEn,
      ...(collection.sizes || []),
      ...collectionProducts.map(
        (product) => `${product.ar} ${product.en}`
      )
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(query);
  });

  grid.innerHTML = filteredCollections
    .map((collection) => {
      const count = products.filter(
        (product) => product.collection === collection.id
      ).length;

      return `
        <article class="product-card">

          <span class="badge">
            ${t("مجموعة", "COLLECTION")}
          </span>

          <div
            class="product-image"
            onclick="openCollection('${collection.id}')"
          >
            <img
              src="${collection.cover}"
              alt="${t(collection.ar, collection.en)}"
              loading="lazy"
            >
          </div>

          <div class="product-info">
            <h3>${t(collection.ar, collection.en)}</h3>

            <p>
              ${t(
                collection.descriptionAr,
                collection.descriptionEn
              )}
            </p>

            <p>
              ${t(
                `عدد النقشات: ${count}`,
                `Patterns: ${count}`
              )}
            </p>

            <span
              class="view"
              onclick="openCollection('${collection.id}')"
            >
              ${t(
                "عرض جميع النقشات ←",
                "View all patterns →"
              )}
            </span>
          </div>

        </article>
      `;
    })
    .join("");

  if (empty) {
    empty.classList.toggle(
      "hidden",
      filteredCollections.length !== 0
    );
  }

  updateFavCount();
}

/* =========================
   فتح مجلد
========================= */

function openCollection(collectionId) {
  activeCollectionId = collectionId;
  showingFavorites = false;
  resetFilters();
  renderProducts();

  document.getElementById("products")?.scrollIntoView({
    behavior: "smooth"
  });
}

function goBackToCollections() {
  activeCollectionId = null;
  showingFavorites = false;
  resetFilters();
  renderCollections();

  document.getElementById("products")?.scrollIntoView({
    behavior: "smooth"
  });
}

/* =========================
   عرض النقشات
========================= */

function getFilteredProducts() {
  const query = search
    ? search.value.trim().toLowerCase()
    : "";

  const selectedCategory = category
    ? category.value
    : "all";

  return products.filter((product) => {
    const matchesCollection = showingFavorites
      ? favorites.includes(product.id)
      : product.collection === activeCollectionId;

    const matchesCategory =
      selectedCategory === "all" ||
      product.cat === selectedCategory;

    const searchableText = `
      ${product.ar}
      ${product.en}
      ${product.id}
      ${getProductSizes(product).join(" ")}
    `.toLowerCase();

    return (
      matchesCollection &&
      matchesCategory &&
      searchableText.includes(query)
    );
  });
}

function renderProducts() {
  const filtered = getFilteredProducts();

  const totalPages = Math.max(
    1,
    Math.ceil(filtered.length / ITEMS_PER_PAGE)
  );

  if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  const startIndex =
    (currentPage - 1) * ITEMS_PER_PAGE;

  const visibleProducts = filtered.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const currentCollection =
    getCollection(activeCollectionId);

  const headerCard = `
    <article class="product-card">
      <div class="product-info">

        <h3>
          ${
            showingFavorites
              ? t("المفضلة", "Favorites")
              : currentCollection
                ? t(
                    currentCollection.ar,
                    currentCollection.en
                  )
                : t("النقشات", "Patterns")
          }
        </h3>

        <p>
          ${t(
            `عدد النتائج: ${filtered.length}`,
            `Results: ${filtered.length}`
          )}
        </p>

        <span
          class="view"
          onclick="goBackToCollections()"
        >
          ${t(
            "← الرجوع إلى المجلدات",
            "← Back to collections"
          )}
        </span>

      </div>
    </article>
  `;

  const cards = visibleProducts
    .map((product) => `
      <article class="product-card">

        <button
          class="fav ${
            favorites.includes(product.id)
              ? "active"
              : ""
          }"
          onclick="toggleFav(${product.id})"
          aria-label="${t(
            "إضافة إلى المفضلة",
            "Add to favorites"
          )}"
        >
          ${
            favorites.includes(product.id)
              ? "♥"
              : "♡"
          }
        </button>

        <span class="badge">
          ${t("جديد", "NEW")}
        </span>

        <div
          class="product-image"
          onclick="openProduct(${product.id})"
        >
          <img
            src="${product.img}"
            alt="${t(product.ar, product.en)}"
            loading="lazy"
          >
        </div>

        <div class="product-info">

          <h3>${t(product.ar, product.en)}</h3>

          <p>
            ${t(
              "جميع المقاسات متوفرة",
              "Multiple sizes available"
            )}
          </p>

          <span
            class="view"
            onclick="openProduct(${product.id})"
          >
            ${t(
              "عرض التفاصيل ←",
              "View details →"
            )}
          </span>

        </div>

      </article>
    `)
    .join("");

  const pagination = filtered.length
    ? `
      <article class="product-card">
        <div class="product-info">

          <h3>
            ${t(
              `صفحة ${currentPage} من ${totalPages}`,
              `Page ${currentPage} of ${totalPages}`
            )}
          </h3>

          ${
            currentPage > 1
              ? `
                <span
                  class="view"
                  onclick="changePage(${currentPage - 1})"
                >
                  ${t(
                    "← الصفحة السابقة",
                    "← Previous page"
                  )}
                </span>
              `
              : ""
          }

          ${
            currentPage < totalPages
              ? `
                <span
                  class="view"
                  onclick="changePage(${currentPage + 1})"
                >
                  ${t(
                    "الصفحة التالية →",
                    "Next page →"
                  )}
                </span>
              `
              : ""
          }

        </div>
      </article>
    `
    : "";

  grid.innerHTML =
    headerCard +
    cards +
    pagination;

  if (empty) {
    empty.classList.toggle(
      "hidden",
      filtered.length !== 0
    );
  }

  updateFavCount();
}

function changePage(pageNumber) {
  currentPage = pageNumber;
  renderProducts();

  document.getElementById("products")?.scrollIntoView({
    behavior: "smooth"
  });
}

/* =========================
   المفضلة
========================= */

function toggleFav(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(
      (favoriteId) => favoriteId !== id
    );
  } else {
    favorites.push(id);
  }

  localStorage.setItem(
    "amasiFavs",
    JSON.stringify(favorites)
  );

  if (activeCollectionId || showingFavorites) {
    renderProducts();
  } else {
    renderCollections();
  }
}

function updateFavCount() {
  const favCount =
    document.getElementById("favCount");

  if (favCount) {
    favCount.textContent = favorites.length;
  }
}

function showFavorites() {
  activeCollectionId = null;
  showingFavorites = true;
  resetFilters();
  renderProducts();

  document.getElementById("products")?.scrollIntoView({
    behavior: "smooth"
  });
}

/* =========================
   نافذة تفاصيل النقشة
========================= */

function openProduct(id) {
  activeProduct = products.find(
    (product) => product.id === id
  );

  if (!activeProduct) {
    return;
  }

  const activeCollection =
    getCollection(activeProduct.collection);

  const productSizes =
    getProductSizes(activeProduct);

  const modalImg =
    document.getElementById("modalImg");

  const modalTitle =
    document.getElementById("modalTitle");

  const modalDesc =
    document.getElementById("modalDesc");

  const sizeSelect =
    document.getElementById("sizeSelect");

  if (modalImg) {
    modalImg.src = activeProduct.img;
    modalImg.alt = t(
      activeProduct.ar,
      activeProduct.en
    );
  }

  if (modalTitle) {
    modalTitle.textContent = t(
      activeProduct.ar,
      activeProduct.en
    );
  }

  if (modalDesc) {
    if (activeCollection?.id === "floria") {
      modalDesc.textContent = t(
        "ماركة فلوريا، صناعة تركية 🇹🇷، نقشة فرنسية. اختر المقاس المطلوب وتواصل معنا لمعرفة السعر والتوفر.",
        "Floria brand, made in Turkey 🇹🇷, French pattern. Select the required size and contact us for price and availability."
      );
    } else {
      modalDesc.textContent = t(
        "سجاد فاخر متوفر بمقاسات متعددة. تواصل معنا لمعرفة السعر والتوفر.",
        "Luxury carpet available in multiple sizes. Contact us for price and availability."
      );
    }
  }

  if (sizeSelect) {
    sizeSelect.innerHTML = productSizes
      .map(
        (size) =>
          `<option value="${size}">${size}</option>`
      )
      .join("");
  }

  document
    .getElementById("productModal")
    ?.classList.remove("hidden");
}

function closeModal() {
  document
    .getElementById("productModal")
    ?.classList.add("hidden");
}

/* =========================
   تغيير اللغة
========================= */

function switchLang() {
  lang = lang === "ar" ? "en" : "ar";

  document.documentElement.lang = lang;
  document.documentElement.dir =
    lang === "ar" ? "rtl" : "ltr";

  const langBtn =
    document.getElementById("langBtn");

  if (langBtn) {
    langBtn.textContent =
      lang === "ar" ? "EN" : "AR";
  }

  document
    .querySelectorAll("[data-ar]")
    .forEach((element) => {
      element.textContent =
        lang === "ar"
          ? element.dataset.ar
          : element.dataset.en;
    });

  if (search) {
    search.placeholder = t(
      "ابحث عن ماركة أو نقشة أو مقاس",
      "Search for a brand, pattern or size"
    );
  }

  if (activeCollectionId || showingFavorites) {
    renderProducts();
  } else {
    renderCollections();
  }
}

/* =========================
   البحث والتصفية
========================= */

if (search) {
  search.addEventListener("input", () => {
    currentPage = 1;

    if (activeCollectionId || showingFavorites) {
      renderProducts();
    } else {
      renderCollections();
    }
  });
}

if (category) {
  category.addEventListener("change", () => {
    currentPage = 1;

    if (activeCollectionId || showingFavorites) {
      renderProducts();
    }
  });
}

/* =========================
   الأزرار
========================= */

const langBtn =
  document.getElementById("langBtn");

if (langBtn) {
  langBtn.onclick = switchLang;
}

const favBtn =
  document.getElementById("favBtn");

if (favBtn) {
  favBtn.onclick = showFavorites;
}

const closeModalBtn =
  document.getElementById("closeModal");

if (closeModalBtn) {
  closeModalBtn.onclick = closeModal;
}

const productModal =
  document.getElementById("productModal");

if (productModal) {
  productModal.onclick = (event) => {
    if (event.target.id === "productModal") {
      closeModal();
    }
  };
}

/* =========================
   الطلب عبر واتساب
========================= */

const whatsappBtn =
  document.getElementById("whatsappBtn");

if (whatsappBtn) {
  whatsappBtn.onclick = () => {
    if (!activeProduct) {
      return;
    }

    const sizeSelect =
      document.getElementById("sizeSelect");

    const selectedSize =
      sizeSelect?.value || "";

    const productName = t(
      activeProduct.ar,
      activeProduct.en
    );

    const productCollection =
      getCollection(activeProduct.collection);

    const brandName = productCollection
      ? t(
          productCollection.brandAr || productCollection.ar,
          productCollection.brandEn || productCollection.en
        )
      : "";

    const message = t(
      `السلام عليكم، أرغب بطلب ${productName} من ماركة ${brandName} بمقاس ${selectedSize}. أرجو تزويدي بالسعر والتوصيل.`,
      `Hello, I would like to order ${productName} from ${brandName} in size ${selectedSize}. Please send me the price and delivery details.`
    );

    const phoneNumber =
      STORE_WHATSAPP.replace(/\D/g, "");

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };
}

/* تشغيل الموقع */

updateFavCount();
renderCollections();
