/*
 * Chức năng giao diện hiện đại của trang chủ Hải Triều.
 * Bao gồm: Hero Slider động, Bộ lọc nhanh, Gói Combo sự kiện,
 * Băng chuyền sản phẩm, Lightbox xem ảnh và Hộp thoại tìm kiếm nhanh.
 */
(function () {
  "use strict";

  var data = window.HAI_TRIEU_DATA;

  function escapeHTML(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Tạo thẻ sản phẩm hiện đại với nhãn danh mục và nút hành động nhanh.
  function productCardHTML(product, compact) {
    var compactClass = compact ? " product-card--compact" : "";
    var escapedId = escapeHTML(product.id);
    var escapedName = escapeHTML(product.name);
    var escapedCategory = escapeHTML(product.badge || product.category);
    var escapedImage = escapeHTML(product.image);
    var detailUrl = "chi-tiet-san-pham.html?id=" + encodeURIComponent(product.id);

    return [
      '<article class="product-card', compactClass, '">',
        '<a class="product-card__trigger" href="', detailUrl, '" aria-label="Xem chi tiết: ', escapedName, '">',
          '<span class="product-card__image">',
            '<span class="product-card__badge">', escapedCategory, '</span>',
            '<img src="', escapedImage, '" alt="', escapedName, '" loading="lazy">',
            '<span class="product-card__zoom" aria-hidden="true">Xem chi tiết</span>',
          '</span>',
          '<span class="product-card__body">',
            '<span class="product-card__title"><span class="product-card__title-text">', escapedName, '</span></span>',
            '<span class="product-card__footer">',
              '<span class="product-card__price">Giá: <strong>Liên hệ</strong></span>',
              '<span class="product-card__cta">Báo giá →</span>',
            '</span>',
          '</span>',
        '</a>',
      '</article>'
    ].join("");
  }

  function highlightCompanyName(text, companyName) {
    var safeText = escapeHTML(text);
    var safeName = escapeHTML(companyName);
    return safeText.replace(safeName, '<strong class="intro-emphasis">' + safeName + '</strong>');
  }

  function renderCompanyIntro() {
    var brandLogo = document.getElementById("brand-logo");
    var socialLogo = document.getElementById("social-logo");
    var introImage = document.getElementById("intro-image");
    if (brandLogo) brandLogo.src = data.logo;
    if (socialLogo) socialLogo.src = data.logo;
    if (introImage) introImage.src = data.introImage;

    var descEl = document.getElementById("company-description");
    var expEl = document.getElementById("company-experience");
    if (descEl) descEl.innerHTML = highlightCompanyName(data.companyDescription, "HẢI TRIỀU Co.,LTD");
    if (expEl) expEl.innerHTML = highlightCompanyName(data.companyExperience, "HẢI TRIỀU Co., Ltd");
  }

  function renderHero() {
    var slidesRoot = document.getElementById("hero-slides");
    var dotsRoot = document.getElementById("hero-dots");
    if (!slidesRoot || !dotsRoot) return;

    slidesRoot.innerHTML = data.heroImages.map(function (slide, index) {
      var activeClass = index === 0 ? " is-active" : "";
      return '<div class="hero-slide' + activeClass + '" aria-hidden="' + (index !== 0) + '">' +
        '<img src="' + escapeHTML(slide.image) + '" alt="' + escapeHTML(slide.alt) + '">' +
      '</div>';
    }).join("");

    dotsRoot.innerHTML = data.heroImages.map(function (_, index) {
      return '<button class="hero-dot' + (index === 0 ? " is-active" : "") +
        '" type="button" data-slide-index="' + index + '" aria-label="Ảnh banner ' +
        (index + 1) + '"' + (index === 0 ? ' aria-current="true"' : "") + '></button>';
    }).join("");
  }

  function renderPackages() {
    var grid = document.getElementById("packages-grid");
    if (!grid || !data.servicePackages) return;

    grid.innerHTML = data.servicePackages.map(function (pkg) {
      var featuredClass = pkg.featured ? " package-card--featured" : "";
      var featuresHTML = pkg.features.map(function (feat) {
        return '<li><span class="package-check" aria-hidden="true">✓</span><span>' + escapeHTML(feat) + '</span></li>';
      }).join("");
      var contactHref = "lien-he.html?dich-vu=" + encodeURIComponent(pkg.title);

      return '<article class="package-card' + featuredClass + '">' +
        '<div class="package-card__top">' +
          '<span class="package-card__badge">' + escapeHTML(pkg.badge) + '</span>' +
          '<span class="package-card__audience">' + escapeHTML(pkg.audience) + '</span>' +
        '</div>' +
        '<h3 class="package-card__title">' + escapeHTML(pkg.title) + '</h3>' +
        '<p class="package-card__desc">' + escapeHTML(pkg.description) + '</p>' +
        '<ul class="package-card__list">' + featuresHTML + '</ul>' +
        '<div class="package-card__actions">' +
          '<a class="button button--orange" href="https://zalo.me/0918408673" target="_blank" rel="noreferrer">Báo giá qua Zalo</a>' +
          '<a class="button button--outline" href="' + contactHref + '">Đặt lịch tư vấn</a>' +
        '</div>' +
      '</article>';
    }).join("");
  }

  function renderCatalog() {
    var featuredTrack = document.getElementById("featured-track");
    if (featuredTrack) {
      featuredTrack.innerHTML = data.featuredProducts.map(function (product) {
        return productCardHTML(product, true);
      }).join("");
    }

    var catalogRoot = document.getElementById("catalog");
    if (!catalogRoot) return;

    var sectionsHTML = data.productSections.map(function (section) {
      var cards = section.products.map(function (product) {
        return productCardHTML(product, false);
      }).join("");
      var catUrl = "san-pham.html?danh-muc=" + encodeURIComponent(section.id);

      return '<section class="product-section" id="' + escapeHTML(section.id) + '">' +
        '<div class="section-heading section-heading--modern">' +
          '<div>' +
            '<h2><a href="' + catUrl + '">' + escapeHTML(section.title) + '</a></h2>' +
            (section.subtitle ? '<p class="section-subtitle">' + escapeHTML(section.subtitle) + '</p>' : '') +
          '</div>' +
          '<a class="section-more-link" href="' + catUrl + '">Xem tất cả →</a>' +
        '</div>' +
        '<div class="product-grid">' + cards + '</div>' +
      '</section>';
    }).join("");

    catalogRoot.innerHTML = sectionsHTML;
  }

  function renderCustomerStories() {
    var track = document.getElementById("news-track");
    if (!track) return;

    track.innerHTML = data.customerStories.map(function (story, index) {
      return '<article class="news-card" data-lightbox-index="' + index + '" tabindex="0" role="button" aria-label="Xem ảnh sự kiện: ' + escapeHTML(story.title) + '">' +
        '<div class="news-card__img-wrap">' +
          '<span class="news-card__tag">' + escapeHTML(story.tag || "Sự kiện Hải Triều") + '</span>' +
          '<img src="' + escapeHTML(story.image) + '" alt="' + escapeHTML(story.title) + ' - hình ' + (index + 1) + '" loading="lazy">' +
          '<span class="news-card__zoom" aria-hidden="true">🔍 Phóng to ảnh</span>' +
        '</div>' +
        '<h3>' + escapeHTML(story.title) + '</h3>' +
      '</article>';
    }).join("");
  }

  function setupMobileMenu() {
    var menuButton = document.getElementById("menu-toggle");
    var menu = document.getElementById("primary-menu");
    if (!menuButton || !menu) return;

    function setMenuOpen(isOpen) {
      menu.classList.toggle("is-open", isOpen);
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Đóng menu điều hướng" : "Mở menu điều hướng");
    }

    menuButton.addEventListener("click", function () {
      var isOpen = menuButton.getAttribute("aria-expanded") === "true";
      setMenuOpen(!isOpen);
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenuOpen(false);
      });
    });

    var productsNav = document.getElementById("products-nav");
    var submenuButton = document.getElementById("submenu-toggle");

    if (submenuButton && productsNav) {
      submenuButton.addEventListener("click", function () {
        var isOpen = submenuButton.getAttribute("aria-expanded") === "true";
        productsNav.classList.toggle("is-open", !isOpen);
        submenuButton.setAttribute("aria-expanded", String(!isOpen));
        submenuButton.setAttribute("aria-label", isOpen ? "Mở danh mục sản phẩm" : "Đóng danh mục sản phẩm");
      });
    }

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        if (productsNav) productsNav.classList.remove("is-open");
        if (submenuButton) submenuButton.setAttribute("aria-expanded", "false");
      }
    });
  }

  function setupHeroSlider() {
    var slides = Array.prototype.slice.call(document.querySelectorAll(".hero-slide"));
    var dots = Array.prototype.slice.call(document.querySelectorAll(".hero-dot"));
    var tagEl = document.getElementById("hero-tag");
    var titleEl = document.getElementById("hero-title");
    var subtitleEl = document.getElementById("hero-subtitle");
    if (!slides.length) return;

    var currentIndex = 0;
    var timerId;

    function showSlide(index) {
      currentIndex = (index + slides.length) % slides.length;

      slides.forEach(function (slide, slideIndex) {
        var isActive = slideIndex === currentIndex;
        slide.classList.toggle("is-active", isActive);
        slide.setAttribute("aria-hidden", String(!isActive));
      });

      dots.forEach(function (dot, dotIndex) {
        var isActive = dotIndex === currentIndex;
        dot.classList.toggle("is-active", isActive);
        if (isActive) {
          dot.setAttribute("aria-current", "true");
        } else {
          dot.removeAttribute("aria-current");
        }
      });

      var slideData = data.heroImages[currentIndex];
      if (slideData) {
        if (tagEl && slideData.tag) tagEl.textContent = slideData.tag;
        if (titleEl && slideData.title) titleEl.textContent = slideData.title;
        if (subtitleEl && slideData.subtitle) subtitleEl.textContent = slideData.subtitle;
      }
    }

    function restartTimer() {
      window.clearInterval(timerId);
      timerId = window.setInterval(function () {
        showSlide(currentIndex + 1);
      }, 5500);
    }

    var prevBtn = document.getElementById("hero-previous");
    var nextBtn = document.getElementById("hero-next");
    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        showSlide(currentIndex - 1);
        restartTimer();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        showSlide(currentIndex + 1);
        restartTimer();
      });
    }

    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        showSlide(Number(dot.getAttribute("data-slide-index")));
        restartTimer();
      });
    });

    restartTimer();
  }

  function setupHorizontalControls() {
    document.querySelectorAll("[data-scroll-target]").forEach(function (button) {
      button.addEventListener("click", function () {
        var target = document.getElementById(button.getAttribute("data-scroll-target"));
        var direction = Number(button.getAttribute("data-scroll-direction"));
        if (!target) return;

        var step = Math.max(target.clientWidth * 0.8, 240);
        if (target.id === "featured-track" && target.firstElementChild) {
          var cardGap = parseFloat(window.getComputedStyle(target).columnGap) || 0;
          step = target.firstElementChild.getBoundingClientRect().width + cardGap;
        }
        target.scrollBy({
          left: direction * step,
          behavior: "smooth"
        });
      });
    });
  }

  function setupFeaturedAutoSlide() {
    var section = document.getElementById("san-pham-noi-bat");
    var track = document.getElementById("featured-track");
    if (!section || !track || (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) return;

    var timerId;
    function stop() {
      window.clearInterval(timerId);
    }
    function advance() {
      var card = track.firstElementChild;
      if (!card) return;
      var gap = parseFloat(window.getComputedStyle(track).columnGap) || 0;
      var step = card.getBoundingClientRect().width + gap;
      var end = track.scrollWidth - track.clientWidth;
      if (track.scrollLeft + step >= end - 4) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: step, behavior: "smooth" });
      }
    }
    function start() {
      stop();
      timerId = window.setInterval(advance, 3200);
    }

    section.addEventListener("mouseenter", stop);
    section.addEventListener("mouseleave", start);
    section.addEventListener("focusin", stop);
    section.addEventListener("focusout", function (event) {
      if (!section.contains(event.relatedTarget)) start();
    });
    section.addEventListener("touchstart", stop, { passive: true });
    section.addEventListener("touchend", function () {
      window.setTimeout(start, 3500);
    }, { passive: true });
    start();
  }

  function setupBackToTop() {
    var button = document.getElementById("back-to-top");
    var header = document.querySelector(".site-header");
    if (!button) return;

    function updateScrollState() {
      var isScrolled = window.scrollY > 12;
      button.classList.toggle("is-visible", window.scrollY > 420);
      if (header) header.classList.toggle("is-scrolled", isScrolled);
    }

    window.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();

    button.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Lightbox phóng to ảnh sự kiện trên trang chủ
  function setupLightbox() {
    var stories = data.customerStories || [];
    if (!stories.length) return;

    var modal = document.createElement("div");
    modal.className = "lightbox-modal";
    modal.id = "lightbox-modal";
    modal.setAttribute("hidden", "");
    modal.innerHTML =
      '<div class="lightbox-modal__backdrop" data-close-lightbox></div>' +
      '<div class="lightbox-modal__content" role="dialog" aria-modal="true" aria-label="Xem ảnh phóng to">' +
        '<button class="lightbox-modal__close" type="button" data-close-lightbox aria-label="Đóng ảnh">✕</button>' +
        '<button class="lightbox-modal__nav lightbox-modal__nav--prev" type="button" data-lightbox-dir="-1" aria-label="Ảnh trước">‹</button>' +
        '<figure class="lightbox-modal__figure">' +
          '<img id="lightbox-img" src="" alt="">' +
          '<figcaption id="lightbox-caption"></figcaption>' +
        '</figure>' +
        '<button class="lightbox-modal__nav lightbox-modal__nav--next" type="button" data-lightbox-dir="1" aria-label="Ảnh tiếp theo">›</button>' +
      '</div>';
    document.body.appendChild(modal);

    var currentIndex = 0;
    var imgEl = document.getElementById("lightbox-img");
    var captionEl = document.getElementById("lightbox-caption");

    function showImage(index) {
      currentIndex = (index + stories.length) % stories.length;
      var item = stories[currentIndex];
      imgEl.src = item.image;
      imgEl.alt = item.title;
      captionEl.textContent = item.title + " (" + (currentIndex + 1) + "/" + stories.length + ")";
      modal.removeAttribute("hidden");
      document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
      modal.setAttribute("hidden", "");
      document.body.style.overflow = "";
    }

    document.querySelectorAll("[data-lightbox-index]").forEach(function (card) {
      card.addEventListener("click", function () {
        showImage(Number(card.getAttribute("data-lightbox-index")));
      });
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          showImage(Number(card.getAttribute("data-lightbox-index")));
        }
      });
    });

    modal.querySelectorAll("[data-close-lightbox]").forEach(function (btn) {
      btn.addEventListener("click", closeLightbox);
    });

    modal.querySelectorAll("[data-lightbox-dir]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        showImage(currentIndex + Number(btn.getAttribute("data-lightbox-dir")));
      });
    });

    document.addEventListener("keydown", function (e) {
      if (modal.hasAttribute("hidden")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showImage(currentIndex - 1);
      if (e.key === "ArrowRight") showImage(currentIndex + 1);
    });
  }

  // Hộp thoại tìm kiếm nhanh sản phẩm & dịch vụ trên toàn trang
  function setupSearchModal() {
    var openBtn = document.getElementById("open-search-modal");
    if (!openBtn) return;

    var allProducts = data.productSections.reduce(function (acc, section) {
      return acc.concat(section.products);
    }, []);

    var modal = document.createElement("div");
    modal.className = "search-modal";
    modal.id = "search-modal";
    modal.setAttribute("hidden", "");
    modal.innerHTML =
      '<div class="search-modal__backdrop" data-close-search></div>' +
      '<div class="search-modal__dialog" role="dialog" aria-modal="true" aria-label="Tìm kiếm thiết bị và dịch vụ">' +
        '<div class="search-modal__header">' +
          '<svg class="icon" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z"/></svg>' +
          '<input type="search" id="global-search-input" placeholder="Nhập tên thiết bị, dịch vụ (VD: Loa RCF, Midas M32, Màn hình LED, Ánh sáng...)" autocomplete="off">' +
          '<button type="button" class="search-modal__close" data-close-search aria-label="Đóng tìm kiếm">ESC</button>' +
        '</div>' +
        '<div class="search-modal__body" id="global-search-results"></div>' +
      '</div>';
    document.body.appendChild(modal);

    var input = document.getElementById("global-search-input");
    var resultsRoot = document.getElementById("global-search-results");

    function renderResults(query) {
      var q = String(query || "").trim().toLowerCase();
      var matches = !q ? allProducts.slice(0, 8) : allProducts.filter(function (p) {
        return p.name.toLowerCase().indexOf(q) !== -1 ||
               p.category.toLowerCase().indexOf(q) !== -1 ||
               (p.summary && p.summary.toLowerCase().indexOf(q) !== -1);
      });

      if (!matches.length) {
        resultsRoot.innerHTML = '<div class="search-modal__empty">Không tìm thấy thiết bị phù hợp. Hãy thử từ khóa khác hoặc <a href="https://zalo.me/0918408673" target="_blank" rel="noreferrer">nhắn Zalo 0918 408 673</a> để được tư vấn ngay.</div>';
        return;
      }

      resultsRoot.innerHTML = '<div class="search-results-list">' + matches.slice(0, 10).map(function (item) {
        return '<a class="search-result-item" href="chi-tiet-san-pham.html?id=' + encodeURIComponent(item.id) + '">' +
          '<img src="' + escapeHTML(item.image) + '" alt="' + escapeHTML(item.name) + '" loading="lazy">' +
          '<div class="search-result-item__info">' +
            '<strong>' + escapeHTML(item.name) + '</strong>' +
            '<span>' + escapeHTML(item.category) + ' • Giá: Liên hệ</span>' +
          '</div>' +
          '<span class="search-result-item__arrow">→</span>' +
        '</a>';
      }).join("") + '</div>';
    }

    function openSearch() {
      modal.removeAttribute("hidden");
      document.body.style.overflow = "hidden";
      renderResults(input.value);
      window.setTimeout(function () { input.focus(); }, 40);
    }

    function closeSearch() {
      modal.setAttribute("hidden", "");
      document.body.style.overflow = "";
    }

    openBtn.addEventListener("click", openSearch);
    input.addEventListener("input", function () {
      renderResults(input.value);
    });
    modal.querySelectorAll("[data-close-search]").forEach(function (btn) {
      btn.addEventListener("click", closeSearch);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !modal.hasAttribute("hidden")) closeSearch();
    });
  }

  renderCompanyIntro();
  renderHero();
  renderPackages();
  renderCatalog();
  renderCustomerStories();
  setupMobileMenu();
  setupHeroSlider();
  setupHorizontalControls();
  setupFeaturedAutoSlide();
  setupBackToTop();
  setupLightbox();
  setupSearchModal();
}());
