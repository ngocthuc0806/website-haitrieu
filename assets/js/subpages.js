/*
 * Chức năng dùng chung cho các trang con của Hải Triều:
 * - Điều hướng mobile, hộp thoại tìm kiếm nhanh, Lightbox phóng to ảnh và nút lên đầu trang.
 * - Dựng danh mục có thanh lọc/tìm kiếm trực tiếp, chi tiết sản phẩm đầy đủ thông tin,
 *   trang dự án khách hàng và giới thiệu công ty từ data.js.
 */
(function () {
  "use strict";

  var data = window.HAI_TRIEU_DATA;
  var page = document.body.getAttribute("data-page");
  var categoryLabels = {
    "cho-thue-am-thanh": "Cho thuê âm thanh",
    "cho-thue-anh-sang": "Cho thuê ánh sáng",
    "cho-thue-man-hinh-led": "Cho thuê màn hình LED",
    "cho-thue-san-khau": "Cho thuê sân khấu",
    "thiet-bi": "Thiết bị sự kiện"
  };

  var equipmentArchiveProducts = [
    { id: "equipment-line-array-hdl6a", name: "Hệ thống Loa Line Array RCF HDL 6A", category: "Thiết bị", badge: "Loa RCF", image: data.imageUrl("upload/1P4HNITFIX-212006072020.jpg"), summary: "Hệ thống loa Line Array Active RCF HDL 6A nhập khẩu chính hãng, âm thanh mạnh mẽ, độ phủ rộng cho sự kiện chuyên nghiệp." },
    { id: "equipment-hdl6a", name: "Cụm Loa Array RCF HDL 6A Biểu Diễn", category: "Thiết bị", badge: "Loa RCF", image: data.imageUrl("upload/S04XJNFLCG-212106072020.jpg"), summary: "Cụm loa Line Array treo giàn Truss tiêu chuẩn biểu diễn sân khấu lớn và hội trường." },
    { id: "equipment-console-x32", name: "Bàn Mixer Digital Console Behringer X32", category: "Thiết bị", badge: "Mixer", image: data.imageUrl("upload/2V2771TZWY-212606072020.jpg"), summary: "Bàn điều khiển âm thanh kỹ thuật số 40 kênh đầu vào, 25 bus, tích hợp fader cơ giới hóa và hiệu ứng Klark Teknik." },
    { id: "equipment-sub-218-active", name: "Loa的超Trầm Sub Đôi 218 Active Công Suất Lớn", category: "Thiết bị", badge: "Loa Sub", image: data.imageUrl("upload/YW51APHGJX-212606072020.jpg"), summary: "Loa Subwoofer đôi 2x18 inch Active mang lại dải trầm sâu, chắc và uy lực cho nhạc sống, DJ và đại nhạc hội." },
    { id: "equipment-sennheiser-e135-g3", name: "Bộ Micro Không Dây Sennheiser EW 135 G3", category: "Thiết bị", badge: "Micro", image: data.imageUrl("upload/06HS5U5H2P-212706072020.jpg"), summary: "Micro không dây cao cấp từ Đức, thu âm giọng hát và phát biểu trung thực, sóng UHF cực kỳ ổn định." },
    { id: "equipment-tiger-touch-ii", name: "Bàn Điều Khiển Ánh Sáng Avolites Tiger Touch II", category: "Thiết bị", badge: "Đèn & ĐK", image: data.imageUrl("upload/J05105HMTN-212706072020.jpg"), summary: "Bàn điều khiển ánh sáng sân khấu chuyên nghiệp màn hình cảm ứng lớn, lập trình hiệu ứng Timecode đỉnh cao." },
    { id: "equipment-neodymium-speaker", name: "Loa Sân Khấu Từ Neo (Neodymium Speaker)", category: "Thiết bị", badge: "Loa Pro", image: data.imageUrl("upload/Q8BFF05PQT-212806072020.jpg"), summary: "Củ loa từ Neodymium hiệu suất cao, trọng lượng nhẹ, độ nhạy vượt trội cho âm thanh sân khấu chi tiết." },
    { id: "equipment-bo-loa", name: "Trọn Bộ Hệ Thống Loa Sân Khấu & Monitor", category: "Thiết bị", badge: "Hệ thống loa", image: data.imageUrl("upload/XA8WCUVPH7-212806072020.jpg"), summary: "Combo loa Full-range, loa Sub và loa Monitor kiểm âm sân khấu đồng bộ cho ban nhạc và ca sĩ." },
    { id: "equipment-loa-gw803cxa", name: "Loa Kiểm Âm & Hội Trường GW803CXA", category: "Thiết bị", badge: "Loa Pro", image: data.imageUrl("upload/5RDVZX2S03-212906072020.jpg"), summary: "Thiết kế đồng trục nhỏ gọn, âm thanh rõ nét cho sân khấu biểu diễn và hội nghị cao cấp." },
    { id: "equipment-sub", name: "Hệ Thống Loa Subwoofer Sân Khấu Ngoài Trời", category: "Thiết bị", badge: "Loa Sub", image: data.imageUrl("upload/J4NXJPZ7UR-212906072020.jpg"), summary: "Dàn loa Sub công suất lớn xếp chồng hoặc đánh Cardioid giúp kiểm soát âm trầm hoàn hảo." },
    { id: "equipment-micro-shure-qldx24", name: "Micro Không Dây Kỹ Thuật Số Shure QLXD24/SM58", category: "Thiết bị", badge: "Micro Shure", image: data.imageUrl("upload/PSU76F2TZ7-153129062020.jpg"), summary: "Micro kỹ thuật số 24-bit tiêu chuẩn quốc tế với đầu thu huyền thoại SM58, mã hóa tín hiệu chống nhiễu tuyệt đối." },
    { id: "equipment-sennheiser-e335-g3", name: "Micro Biểu Diễn Chuyên Nghiệp Sennheiser E835/G3", category: "Thiết bị", badge: "Micro", image: data.imageUrl("upload/BNKMGBZWJ0-153229062020.jpg"), summary: "Dòng micro không dây chuyên trị sân khấu lớn, khả năng chống hú cao và tái tạo giọng ca nội lực." }
  ];

  var lightingArchiveProducts = [
    { id: "lighting-archive-9", name: "Hệ Thống Ánh Sáng & Màn Hình LED Sự Kiện Lớn", category: "Cho thuê ánh sáng", badge: "Ánh sáng Pro", image: data.aboutImages[6].image },
    { id: "lighting-archive-10", name: "Trình Diễn Ánh Sáng Sân Khấu Nghệ Thuật", category: "Cho thuê ánh sáng", badge: "Biểu diễn", image: data.aboutImages[7].image },
    { id: "lighting-archive-11", name: "Cho Thuê Ánh Sáng Sự Kiện Tại Cần Thơ (0918 408 673)", category: "Cho thuê ánh sáng", badge: "Trọn gói", image: data.aboutImages[8].image },
    { id: "lighting-archive-12", name: "Hệ Thống Giàn Đèn Sân Khấu Ngoài Trời Cần Thơ", category: "Cho thuê ánh sáng", badge: "Ngoài trời", image: data.aboutImages[9].image },
    { id: "lighting-archive-13", name: "Hiệu Ứng Ánh Sáng Beam & Matrix Đêm Nhạc", category: "Cho thuê ánh sáng", badge: "LED Matrix", image: data.customerStories[6].image },
    { id: "lighting-archive-14", name: "Thiết Kế Ánh Sáng Hội Nghị & Lễ Vinh Danh", category: "Cho thuê ánh sáng", badge: "Hội nghị", image: data.customerStories[7].image },
    { id: "lighting-archive-15", name: "Ánh Sáng Sân Khấu Gala Dinner Sang Trọng", category: "Cho thuê ánh sáng", badge: "Gala Dinner", image: data.customerStories[8].image },
    { id: "lighting-archive-16", name: "Giải Pháp Ánh Sáng Chuyên Nghiệp Cho Doanh Nghiệp", category: "Cho thuê ánh sáng", badge: "Sự kiện", image: data.customerStories[9].image }
  ];

  var ledArchiveProducts = [
    { id: "led-archive-9", name: "Cho Thuê Màn Hình LED Hội Nghị Tại Cần Thơ", category: "Cho thuê màn hình LED", badge: "LED P3", image: data.customerStories[2].image },
    { id: "led-archive-10", name: "Thi Công Màn Hình LED Sự Kiện Doanh Nghiệp", category: "Cho thuê màn hình LED", badge: "LED Sự kiện", image: data.customerStories[3].image },
    { id: "led-archive-11", name: "Hệ Thống Màn Hình LED Sân Khấu Đa Tầng", category: "Cho thuê màn hình LED", badge: "Đa màn hình", image: data.customerStories[4].image },
    { id: "led-archive-12", name: "Màn Hình LED Biểu Diễn Nghệ Thuật Trực Tiếp", category: "Cho thuê màn hình LED", badge: "Sân khấu lớn", image: data.customerStories[5].image },
    { id: "led-archive-13", name: "Đội Xe Vận Chuyển & Lắp Đặt Màn Hình LED Hải Triều", category: "Cho thuê màn hình LED", badge: "Vận chuyển 24/7", image: data.aboutImages[0].image },
    { id: "led-archive-14", name: "Hệ Thống Xử Lý Hình Ảnh & Âm Thanh Đồng Bộ", category: "Cho thuê màn hình LED", badge: "Kỹ thuật số", image: data.aboutImages[1].image },
    { id: "led-archive-15", name: "Lắp Đặt Màn Hình LED Outdoor Khung Truss Chịu Lực", category: "Cho thuê màn hình LED", badge: "LED Outdoor", image: data.aboutImages[2].image },
    { id: "led-archive-16", name: "Bàn Điều Khiển Visual Màn Hình LED & Ánh Sáng", category: "Cho thuê màn hình LED", badge: "Điều khiển", image: data.aboutImages[3].image },
    { id: "led-archive-17", name: "Kỹ Thuật Viên Hải Triều Thi Công Sân Khấu LED", category: "Cho thuê màn hình LED", badge: "Đội ngũ Pro", image: data.aboutImages[4].image },
    { id: "led-archive-18", name: "Màn Hình LED Trung Tâm Hội Trường & Khách Sạn", category: "Cho thuê màn hình LED", badge: "Hội trường", image: data.aboutImages[5].image },
    { id: "led-archive-19", name: "Màn Hình LED Kết Hợp Ánh Sáng Sân Khấu Hoành Tráng", category: "Cho thuê màn hình LED", badge: "Đại nhạc hội", image: data.customerStories[6].image }
  ];

  var allArchiveProducts = equipmentArchiveProducts.concat(lightingArchiveProducts, ledArchiveProducts);

  function getSectionProducts(section) {
    if (section.id === "thiet-bi") return section.products.concat(equipmentArchiveProducts);
    if (section.id === "cho-thue-anh-sang") return section.products.concat(lightingArchiveProducts);
    if (section.id === "cho-thue-man-hinh-led") return section.products.concat(ledArchiveProducts);
    return section.products;
  }

  function getAllUniqueProducts() {
    var seen = {};
    var list = [];
    data.productSections.forEach(function (section) {
      getSectionProducts(section).forEach(function (item) {
        if (!seen[item.id]) {
          seen[item.id] = true;
          list.push(item);
        }
      });
    });
    return list;
  }

  function escapeHTML(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function renderSidebar() {
    var root = document.getElementById("shared-sidebar");
    if (!root) return;

    var equipmentSubcategories = [
      { id: "loa", label: "Hệ thống Loa" },
      { id: "micro", label: "Micro không dây" },
      { id: "mixer", label: "Bàn Mixer" },
      { id: "den", label: "Đèn sân khấu" }
    ];
    var selectedEquipmentType = new URLSearchParams(window.location.search).get("loai");
    var selectedCategory = new URLSearchParams(window.location.search).get("danh-muc");

    var categories = data.productSections.map(function (section) {
      var href = "san-pham.html?danh-muc=" + encodeURIComponent(section.id);
      if (section.id !== "thiet-bi") {
        var currentClass = selectedCategory === section.id ? ' class="is-current" aria-current="page"' : "";
        return '<a' + currentClass + ' href="' + href + '"><span aria-hidden="true">›</span> ' +
          escapeHTML(categoryLabels[section.id] || section.title) + '</a>';
      }

      var subcategoryLinks = equipmentSubcategories.map(function (subcategory) {
        var selectedClass = selectedEquipmentType === subcategory.id ? ' class="is-current" aria-current="page"' : "";
        return '<a' + selectedClass + ' href="' + href + '&loai=' + encodeURIComponent(subcategory.id) + '">' +
          '<span aria-hidden="true">›</span> ' + escapeHTML(subcategory.label) + '</a>';
      }).join("");
      var subcategoriesOpen = selectedCategory === "thiet-bi" || equipmentSubcategories.some(function (subcategory) {
        return subcategory.id === selectedEquipmentType;
      });
      return '<div class="sidebar-equipment">' +
        '<div class="sidebar-equipment__row">' +
          '<a' + (selectedCategory === "thiet-bi" && !selectedEquipmentType ? ' class="is-current" aria-current="page"' : '') + ' href="' + href + '"><span aria-hidden="true">›</span> Thiết bị sự kiện</a>' +
          '<button class="sidebar-equipment-toggle" type="button" aria-expanded="' + subcategoriesOpen + '" aria-controls="sidebar-equipment-subcategories" data-toggle-subcategories aria-label="' + (subcategoriesOpen ? "Đóng" : "Mở") + ' danh mục thiết bị">' + (subcategoriesOpen ? "−" : "+") + '</button>' +
        '</div>' +
        '<div class="sidebar-subcategories" id="sidebar-equipment-subcategories"' + (subcategoriesOpen ? "" : " hidden") + '>' + subcategoryLinks + '</div>' +
      '</div>';
    }).join("");

    var stageSection = data.productSections.filter(function (section) {
      return section.id === "cho-thue-san-khau";
    })[0];
    var sideImage = stageSection && stageSection.products[1] ? stageSection.products[1].image : data.heroImages[0].image;

    root.innerHTML =
      '<div class="sidebar-cta-card">' +
        '<span class="sidebar-cta-card__eyebrow">TƯ VẤN & BÁO GIÁ 24/7</span>' +
        '<h3>Cần cấu hình cho sự kiện?</h3>' +
        '<p>Đội ngũ kỹ thuật Hải Triều khảo sát tận nơi và lên phương án tối ưu ngân sách.</p>' +
        '<a class="sidebar-hotline" href="tel:0918408673"><span aria-hidden="true"><svg class="icon" viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.56 3.57.56.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.19 2.45.56 3.57a1 1 0 0 1-.25 1.02l-2.19 2.2z"/></svg></span><strong>0918 408 673</strong></a>' +
        '<a class="button button--zalo button--full" href="https://zalo.me/0918408673" target="_blank" rel="noreferrer">Nhắn Zalo nhận báo giá</a>' +
      '</div>' +
      '<section class="sidebar-categories" aria-label="Danh mục sản phẩm">' +
        '<h2>DANH MỤC DỊCH VỤ</h2>' +
        '<div>' +
          '<a' + (!selectedCategory ? ' class="is-current" aria-current="page"' : '') + ' href="san-pham.html?view=all"><span aria-hidden="true">›</span> Tất cả sản phẩm</a>' +
          categories +
        '</div>' +
      '</section>' +
      '<div class="sidebar-photos">' +
        '<img src="' + escapeHTML(data.introImage) + '" alt="Hải Triều lắp đặt sân khấu và thiết bị sự kiện" loading="lazy">' +
        '<img src="' + escapeHTML(sideImage) + '" alt="Hệ thống sân khấu ngoài trời Hải Triều" loading="lazy">' +
      '</div>';

    root.querySelectorAll("[data-toggle-subcategories]").forEach(function (button) {
      button.addEventListener("click", function () {
        var expanded = button.getAttribute("aria-expanded") === "true";
        var submenu = document.getElementById(button.getAttribute("aria-controls"));
        button.setAttribute("aria-expanded", String(!expanded));
        button.setAttribute("aria-label", expanded ? "Mở danh mục thiết bị" : "Đóng danh mục thiết bị");
        button.textContent = expanded ? "+" : "−";
        submenu.hidden = expanded;
      });
    });
  }

  function productCard(product) {
    var badge = escapeHTML(product.badge || product.category);
    return '<article class="archive-card">' +
      '<a class="archive-card__link" href="chi-tiet-san-pham.html?id=' + encodeURIComponent(product.id) + '" aria-label="Xem chi tiết: ' + escapeHTML(product.name) + '">' +
        '<span class="archive-card__img-wrap">' +
          '<span class="product-card__badge">' + badge + '</span>' +
          '<img src="' + escapeHTML(product.image) + '" alt="' + escapeHTML(product.name) + '" loading="lazy">' +
        '</span>' +
        '<h2><span class="archive-card__title-text">' + escapeHTML(product.name) + '</span></h2>' +
      '</a>' +
      '<div class="archive-card__footer">' +
        '<p>Giá: <a href="lien-he.html?dich-vu=' + encodeURIComponent(product.name) + '">Liên hệ</a></p>' +
        '<a class="archive-card__zalo" href="https://zalo.me/0918408673" target="_blank" rel="noreferrer" title="Báo giá nhanh qua Zalo">Zalo →</a>' +
      '</div>' +
    '</article>';
  }

  function pagination(current, total, query, pageParameter) {
    if (total < 2) return "";
    var links = [];
    for (var number = 1; number <= total; number += 1) {
      var active = number === current ? ' aria-current="page" class="is-current"' : "";
      links.push('<a href="' + query + '&' + (pageParameter || "trang") + '=' + number + '"' + active + '>' + number + '</a>');
    }
    return '<nav class="archive-pagination" aria-label="Chọn trang">' + links.join("") + '</nav>';
  }

  function catalogPagination(current, total) {
    if (total < 2) return "";
    var links = [];
    var base = "san-pham.html?view=all&pindex=";
    var start = current <= 5 ? 1 : 6;

    if (current > 5) {
      links.push('<a href="' + base + '1" aria-label="Về trang đầu">|«</a>');
      links.push('<a href="' + base + (current - 1) + '" aria-label="Trang trước">«</a>');
    }

    for (var number = start; number <= Math.min(total, start + 4); number += 1) {
      var active = number === current ? ' aria-current="page" class="is-current"' : "";
      links.push('<a href="' + base + number + '"' + active + '>' + number + '</a>');
    }

    if (current <= 5 && total > 5) {
      links.push('<a href="' + base + '6" aria-label="Các trang tiếp theo">»</a>');
      links.push('<a href="' + base + total + '" aria-label="Trang cuối">»|</a>');
    }
    return '<nav class="archive-pagination archive-pagination--catalog" aria-label="Phân trang sản phẩm">' + links.join("") + '</nav>';
  }

  // Sinh mô tả kỹ thuật và quyền lợi dịch vụ chi tiết cho từng sản phẩm
  function getProductDetailedInfo(product) {
    var cat = (product.category || "").toLowerCase();
    var summary = product.summary || "Giải pháp thiết bị sự kiện chuyên nghiệp do Công ty TNHH MTV Giải Pháp Truyền Thông Hải Triều cung cấp, lắp đặt và vận hành trọn gói tại TP. Cần Thơ và các tỉnh miền Tây.";
    var highlights = [];

    if (cat.indexOf("âm thanh") !== -1) {
      highlights = [
        "Hệ thống loa chính hãng (RCF, JBL, Column...) âm thanh trung thực, phủ đều mọi vị trí khán giả.",
        "Bàn Mixer kỹ thuật số Midas M32 / Behringer X32 căn chỉnh chống hú rít tuyệt đối.",
        "Micro không dây Shure / Sennheiser độ nhạy cao, sóng khỏe cho phát biểu và biểu diễn.",
        "Bao gồm trọn gói dây tín hiệu, tủ nguồn, vận chuyển lắp đặt và kỹ thuật viên trực xuyên suốt."
      ];
    } else if (cat.indexOf("ánh sáng") !== -1) {
      highlights = [
        "Hệ thống đèn Moving Head Beam 280, Par LED 3in1 RGBW, Par LED vàng ấm chiếu mặt sắc nét.",
        "Điều khiển chuyên nghiệp qua bàn Avolites Tiger Touch II theo kịch bản chương trình.",
        "Giàn khung Truss hợp kim nhôm chắc chắn, đảm bảo an toàn và thẩm mỹ sân khấu.",
        "Tích hợp máy khói, hazer tạo hiệu ứng tia sáng 3D lung linh khi lên hình và quay phim."
      ];
    } else if (cat.indexOf("led") !== -1) {
      highlights = [
        "Cabin LED P3 / P4 Indoor & Outdoor độ phân giải cao, tần số quét ≥ 3840Hz không bị sọc máy quay.",
        "Độ sáng mạnh mẽ, màu sắc chuẩn xác, ghép nối linh hoạt theo mọi kích thước sân khấu.",
        "Bộ xử lý hình ảnh Novastar hỗ trợ trình chiếu đa lớp, chạy chữ, video, hiệu ứng Visual mượt mà.",
        "Kỹ thuật viên trực vận hành file trình chiếu và hỗ trợ chuyển cảnh theo kịch bản."
      ];
    } else if (cat.indexOf("sân khấu") !== -1) {
      highlights = [
        "Kết cấu khung sắt lắp ghép chịu tải trọng lớn, mặt sàn gỗ dày phẳng và an toàn tuyệt đối.",
        "Thảm trải sân khấu mới 100%, màu sắc đa dạng (Đỏ, Đen, Xanh, Xám...) kèm bậc tam cấp.",
        "Thiết bị hiệu ứng sân khấu (Khói lạnh, pháo điện, màn sao) tạo điểm nhấn cảm xúc.",
        "Thi công lắp đặt nhanh chóng, tháo dỡ gọn gàng đúng thời gian cam kết."
      ];
    } else {
      highlights = [
        "Thiết bị Pro-AV chính hãng, được bảo dưỡng và kiểm tra kỹ thuật nghiêm ngặt trước mỗi show.",
        "Tương thích hoàn hảo với các hệ thống âm thanh, ánh sáng tiêu chuẩn biểu diễn chuyên nghiệp.",
        "Hỗ trợ giao nhận, lắp đặt tận nơi và hướng dẫn vận hành hoặc cử kỹ thuật viên đi kèm.",
        "Giá thuê linh hoạt theo ngày hoặc theo trọn gói dự án sự kiện."
      ];
    }

    return {
      summary: summary,
      highlights: highlights
    };
  }

  function renderProductDetail() {
    var root = document.getElementById("product-detail-content");
    if (!root) return;

    var productId = new URLSearchParams(window.location.search).get("id");
    var products = getAllUniqueProducts();
    var product = products.filter(function (item) { return item.id === productId; })[0];

    if (!product) {
      document.title = "Không tìm thấy sản phẩm | Công ty Hải Triều";
      document.getElementById("breadcrumb-current").textContent = "Không tìm thấy sản phẩm";
      root.innerHTML = '<div class="product-detail-empty"><h1>Không tìm thấy sản phẩm</h1><p>Sản phẩm bạn tìm có thể đã đổi đường dẫn.</p><a class="button button--orange" href="san-pham.html?view=all">Quay lại danh sách sản phẩm</a></div>';
      return;
    }

    document.title = product.name + " | Công ty Hải Triều";
    var section = data.productSections.filter(function (item) {
      return item.title.toLowerCase() === product.category.toLowerCase() ||
             (categoryLabels[item.id] && categoryLabels[item.id].toLowerCase() === product.category.toLowerCase());
    })[0];
    var categoryName = section ? (categoryLabels[section.id] || section.title) : product.category;
    var categoryLink = section ? "san-pham.html?danh-muc=" + encodeURIComponent(section.id) : "san-pham.html?view=all";

    var breadcrumb = document.querySelector(".breadcrumb .page-width");
    if (breadcrumb) {
      breadcrumb.innerHTML = '<a href="index.html">Trang chủ</a><span>/</span>' +
        '<a href="san-pham.html?view=all">Sản phẩm</a><span>/</span>' +
        (section ? '<a href="' + categoryLink + '">' + escapeHTML(categoryName) + '</a><span>/</span>' : "") +
        '<span id="breadcrumb-current">' + escapeHTML(product.name) + '</span>';
    }

    var detailInfo = getProductDetailedInfo(product);
    var highlightsHTML = detailInfo.highlights.map(function (h) {
      return '<li><span class="detail-check" aria-hidden="true">✓</span><span>' + escapeHTML(h) + '</span></li>';
    }).join("");

    var relatedSource = section ? getSectionProducts(section) : products.slice(0, 8);
    var relatedProducts = relatedSource.filter(function (item) {
      return item.id !== product.id;
    });
    var relatedHTML = relatedProducts.map(function (item) {
      return '<article class="product-card"><a class="product-card__trigger" href="chi-tiet-san-pham.html?id=' +
        encodeURIComponent(item.id) + '" aria-label="Xem chi tiết: ' + escapeHTML(item.name) + '">' +
        '<span class="product-card__image"><span class="product-card__badge">' + escapeHTML(item.badge || item.category) + '</span><img src="' + escapeHTML(item.image) + '" alt="' + escapeHTML(item.name) + '" loading="lazy"></span>' +
        '<span class="product-card__body"><span class="product-card__title"><span class="product-card__title-text">' + escapeHTML(item.name) + '</span></span>' +
        '<span class="product-card__footer"><span class="product-card__price">Giá: <strong>Liên hệ</strong></span><span class="product-card__cta">Xem →</span></span></span></a></article>';
    }).join("");

    var contactQuoteUrl = "lien-he.html?dich-vu=" + encodeURIComponent(product.name);

    root.innerHTML = '<article class="product-detail">' +
      '<div class="product-detail__top">' +
        '<div class="product-detail__gallery">' +
          '<div class="product-detail__image" id="detail-image-trigger" tabindex="0" role="button" aria-label="Bấm để phóng to ảnh">' +
            '<img id="detail-main-image" src="' + escapeHTML(product.image) + '" alt="' + escapeHTML(product.name) + '">' +
            '<span class="product-detail__zoom-hint">🔍 Bấm để phóng to</span>' +
          '</div>' +
          '<button class="product-detail__thumbnail is-selected" type="button" aria-label="Xem ảnh ' + escapeHTML(product.name) + '"><img src="' + escapeHTML(product.image) + '" alt=""></button>' +
        '</div>' +
        '<div class="product-detail__copy">' +
          '<div class="product-detail__meta">' +
            '<a class="product-detail__cat-tag" href="' + categoryLink + '">' + escapeHTML(categoryName) + '</a>' +
            '<span class="product-detail__status">● Sẵn sàng phục vụ tại Cần Thơ & Miền Tây</span>' +
          '</div>' +
          '<h1>' + escapeHTML(product.name) + '</h1>' +
          '<div class="product-detail__price-box">' +
            '<span class="product-detail__price-label">Báo giá dịch vụ / thuê thiết bị:</span>' +
            '<strong class="product-detail__price-value">Liên hệ 0918 408 673</strong>' +
            '<small>Giá ưu đãi theo quy mô chương trình và số ngày thuê</small>' +
          '</div>' +
          '<p class="product-detail__summary">' + escapeHTML(detailInfo.summary) + '</p>' +
          '<div class="product-detail__cta-group">' +
            '<a class="button button--orange button--lg" href="https://zalo.me/0918408673" target="_blank" rel="noreferrer">💬 Nhận báo giá qua Zalo</a>' +
            '<a class="button button--outline button--lg" href="tel:0918408673">📞 Gọi ngay: 0918 408 673</a>' +
            '<a class="button button--glass" href="' + contactQuoteUrl + '">📝 Gửi yêu cầu đặt lịch</a>' +
          '</div>' +
          '<div class="product-detail__Perks">' +
            '<div><strong>✓ Khảo sát tận nơi</strong><span>Tư vấn phương án miễn phí</span></div>' +
            '<div><strong>✓ Thiết bị chính hãng</strong><span>Hoạt động ổn định 100%</span></div>' +
            '<div><strong>✓ Kỹ thuật viên 24/7</strong><span>Trực vận hành suốt sự kiện</span></div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<section class="product-detail__information">' +
        '<h2>Thông tin chi tiết & Quy chuẩn dịch vụ</h2>' +
        '<div class="product-detail__information-body">' +
          '<p>' + escapeHTML(detailInfo.summary) + '</p>' +
          '<h3>Ưu điểm nổi bật khi thuê tại Hải Triều Media:</h3>' +
          '<ul class="detail-highlights-list">' + highlightsHTML + '</ul>' +
          '<div class="detail-note-box">' +
            '<strong>Hỗ trợ nhanh tại TP. Cần Thơ & ĐBSCL:</strong> Quý khách cần tư vấn cấu hình chi tiết hoặc báo giá trọn gói, vui lòng liên hệ trực tiếp Hotline/Zalo <a href="tel:0918408673">0918 408 673</a> để được phản hồi ngay lập tức.' +
          '</div>' +
        '</div>' +
      '</section>' +
      (relatedHTML ? '<section class="product-detail__related"><div class="section-heading section-heading--modern"><h2>SẢN PHẨM & DỊCH VỤ CÙNG NHÓM</h2></div>' +
        '<div class="product-detail__related-controls" aria-label="Điều khiển sản phẩm khác">' +
          '<button class="circle-control" type="button" data-related-direction="-1" aria-label="Sản phẩm trước">‹</button>' +
          '<button class="circle-control" type="button" data-related-direction="1" aria-label="Sản phẩm tiếp theo">›</button>' +
        '</div><div class="product-grid" id="related-products-track">' + relatedHTML + '</div></section>' : "") +
      '</article>';

    var detailImgTrigger = document.getElementById("detail-image-trigger");
    if (detailImgTrigger) {
      detailImgTrigger.addEventListener("click", function () {
        openSingleLightbox(product.image, product.name);
      });
    }

    var relatedSection = root.querySelector(".product-detail__related");
    var relatedTrack = root.querySelector("#related-products-track");
    if (relatedSection && relatedTrack) {
      function moveRelated(direction) {
        var firstCard = relatedTrack.firstElementChild;
        if (!firstCard) return;
        var gap = parseFloat(window.getComputedStyle(relatedTrack).columnGap) || 0;
        var step = firstCard.getBoundingClientRect().width + gap;
        var end = relatedTrack.scrollWidth - relatedTrack.clientWidth;
        if (direction > 0 && relatedTrack.scrollLeft + step >= end - 4) {
          relatedTrack.scrollTo({ left: 0, behavior: "smooth" });
        } else if (direction < 0 && relatedTrack.scrollLeft <= 4) {
          relatedTrack.scrollTo({ left: end, behavior: "smooth" });
        } else {
          relatedTrack.scrollBy({ left: direction * step, behavior: "smooth" });
        }
      }

      root.querySelectorAll("[data-related-direction]").forEach(function (button) {
        button.addEventListener("click", function () {
          moveRelated(Number(button.getAttribute("data-related-direction")));
        });
      });
    }
  }

  function renderProducts() {
    var root = document.getElementById("product-page-content");
    if (!root) return;

    var pageParameters = new URLSearchParams(window.location.search);
    var requestedCategory = pageParameters.get("danh-muc");
    var showAllProducts = pageParameters.get("view") === "all" || !requestedCategory;
    var requested = showAllProducts ? null : requestedCategory;
    var requestedType = showAllProducts ? null : pageParameters.get("loai");
    var equipmentTypeLabels = { loa: "Hệ thống Loa", micro: "Micro không dây", mixer: "Bàn Mixer", den: "Đèn sân khấu" };
    var pageNumber = Math.max(1, Number(pageParameters.get("trang") || pageParameters.get("pindex")) || 1);
    var selected = data.productSections.filter(function (section) {
      return section.id === requested;
    });
    var isSingleCategory = selected.length > 0;
    var sections = isSingleCategory ? selected : data.productSections;

    var currentTitle = requestedType && equipmentTypeLabels[requestedType]
      ? equipmentTypeLabels[requestedType]
      : (isSingleCategory ? categoryLabels[selected[0].id] : "Tất cả Sản phẩm & Dịch vụ");

    document.title = currentTitle + " | Công ty Hải Triều";
    document.getElementById("breadcrumb-current").textContent = currentTitle;

    // Thanh công cụ lọc danh mục & tìm kiếm trực tiếp trên trang Sản phẩm
    var filterPillsHTML = [
      { id: "", label: "Tất cả", href: "san-pham.html?view=all", active: showAllProducts },
      { id: "cho-thue-am-thanh", label: "🔊 Âm thanh", href: "san-pham.html?danh-muc=cho-thue-am-thanh", active: requested === "cho-thue-am-thanh" },
      { id: "cho-thue-anh-sang", label: "✨ Ánh sáng", href: "san-pham.html?danh-muc=cho-thue-anh-sang", active: requested === "cho-thue-anh-sang" },
      { id: "cho-thue-man-hinh-led", label: "🖥️ Màn hình LED", href: "san-pham.html?danh-muc=cho-thue-man-hinh-led", active: requested === "cho-thue-man-hinh-led" },
      { id: "cho-thue-san-khau", label: "🎪 Sân khấu", href: "san-pham.html?danh-muc=cho-thue-san-khau", active: requested === "cho-thue-san-khau" },
      { id: "thiet-bi", label: "🎛️ Thiết bị", href: "san-pham.html?danh-muc=thiet-bi", active: requested === "thiet-bi" }
    ].map(function (pill) {
      return '<a class="catalog-filter-pill' + (pill.active ? ' is-active' : '') + '" href="' + pill.href + '">' + pill.label + '</a>';
    }).join("");

    var toolbarHTML =
      '<div class="catalog-toolbar">' +
        '<div class="catalog-toolbar__top">' +
          '<h1 class="subpage-title">' + escapeHTML(currentTitle) + '</h1>' +
          '<div class="catalog-search-box">' +
            '<svg class="icon" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z"/></svg>' +
            '<input type="search" id="inline-product-search" placeholder="Lọc nhanh theo tên loa, đèn, mixer, LED..." aria-label="Tìm nhanh sản phẩm">' +
          '</div>' +
        '</div>' +
        '<div class="catalog-filter-bar">' + filterPillsHTML + '</div>' +
      '</div>';

    var allCatalogProducts = [];
    if (showAllProducts) {
      var openingProducts = data.productSections[1].products.slice(0, 2)
        .concat(data.productSections[0].products.slice(0, 2))
        .concat(data.productSections[2].products.slice(0, 5));
      var openingIds = openingProducts.map(function (product) { return product.id; });
      var remainingProducts = data.productSections.reduce(function (all, section) {
        return all.concat(getSectionProducts(section));
      }, []).filter(function (product) {
        return openingIds.indexOf(product.id) === -1;
      });
      allCatalogProducts = openingProducts.concat(remainingProducts);
      var catalogPageSize = 9;
      var catalogPageCount = Math.ceil(allCatalogProducts.length / catalogPageSize);
      var catalogPage = Math.min(pageNumber, catalogPageCount);
      var catalogVisibleProducts = allCatalogProducts.slice(
        (catalogPage - 1) * catalogPageSize,
        catalogPage * catalogPageSize
      );
      root.innerHTML = toolbarHTML +
        '<div id="product-listing-body">' +
          '<div class="archive-grid archive-grid--catalog">' +
            catalogVisibleProducts.map(productCard).join("") +
          '</div>' +
          catalogPagination(catalogPage, catalogPageCount) +
        '</div>';
    } else {
      var content = sections.map(function (section) {
        var products = getSectionProducts(section);
        if (section.id === "thiet-bi" && equipmentTypeLabels[requestedType]) {
          var equipmentPatterns = {
            loa: /vỏ thùng|loa|rockwave|sub|neodymium|hdl/i,
            micro: /micro|sennheiser|shure/i,
            mixer: /console|mixer|tiger touch/i,
            den: /đèn|parled|par led|beam/i
          };
          products = products.filter(function (product) {
            return equipmentPatterns[requestedType].test(product.name);
          });
        }
        allCatalogProducts = products;
        var itemsPerPage = 12;
        var pageCount = Math.max(1, Math.ceil(products.length / itemsPerPage));
        var safePage = Math.min(pageNumber, pageCount);
        var visible = products.slice((safePage - 1) * itemsPerPage, safePage * itemsPerPage);
        var query = "san-pham.html?danh-muc=" + encodeURIComponent(section.id);
        if (section.id === "thiet-bi" && equipmentTypeLabels[requestedType]) query += "&loai=" + encodeURIComponent(requestedType);
        var pageParameter = section.id === "thiet-bi" ? "pindex" : "trang";

        return '<section class="archive-category">' +
          '<div class="archive-grid">' + visible.map(productCard).join("") + '</div>' +
          pagination(safePage, pageCount, query, pageParameter) +
        '</section>';
      }).join("");

      root.innerHTML = toolbarHTML + '<div id="product-listing-body">' + content + '</div>';
    }

    // Xử lý tìm kiếm tức thì ngay trên trang sản phẩm
    var inlineSearch = document.getElementById("inline-product-search");
    var listingBody = document.getElementById("product-listing-body");
    var originalListingHTML = listingBody ? listingBody.innerHTML : "";
    var searchablePool = showAllProducts ? allCatalogProducts : getAllUniqueProducts();

    if (inlineSearch && listingBody) {
      inlineSearch.addEventListener("input", function () {
        var q = inlineSearch.value.trim().toLowerCase();
        if (!q) {
          listingBody.innerHTML = originalListingHTML;
          return;
        }
        var filtered = searchablePool.filter(function (item) {
          return item.name.toLowerCase().indexOf(q) !== -1 ||
                 item.category.toLowerCase().indexOf(q) !== -1;
        });
        if (!filtered.length) {
          listingBody.innerHTML = '<div class="product-detail-empty"><h2>Không tìm thấy "' + escapeHTML(inlineSearch.value) + '"</h2><p>Hãy thử từ khóa khác hoặc gọi Hotline <a href="tel:0918408673">0918 408 673</a> để được hỗ trợ ngay.</p></div>';
          return;
        }
        listingBody.innerHTML = '<div class="archive-grid">' + filtered.map(productCard).join("") + '</div>';
      });
    }
  }

  function renderCustomers() {
    var root = document.getElementById("customer-page-content");
    if (!root) return;

    var params = new URLSearchParams(window.location.search);
    var requestedPage = Math.max(1, Number(params.get("trang")) || 1);
    var perPage = 8;
    var pageCount = Math.ceil(data.customerStories.length / perPage);
    var currentPage = Math.min(requestedPage, pageCount);
    var startIdx = (currentPage - 1) * perPage;
    var visible = data.customerStories.slice(startIdx, startIdx + perPage);

    root.innerHTML =
      '<div class="subpage-header-block">' +
        '<span class="section-eyebrow">HỒ SƠ NĂNG LỰC & SỰ KIỆN THỰC TẾ</span>' +
        '<h1 class="subpage-title">HẢI TRIỀU ĐỒNG HÀNH CÙNG QUÝ KHÁCH HÀNG</h1>' +
        '<p class="subpage-lead">Hàng trăm chương trình đại nhạc hội, hội nghị khách hàng, lễ khởi công, khai trương và tiệc cưới tại Cần Thơ & miền Tây đã tin tưởng lựa chọn Hải Triều.</p>' +
      '</div>' +
      '<div class="customer-list">' + visible.map(function (story, index) {
        var globalIdx = startIdx + index;
        return '<article class="customer-row" data-story-index="' + globalIdx + '" tabindex="0" role="button" aria-label="Phóng to ảnh: ' + escapeHTML(story.title) + '">' +
          '<div class="customer-row__img-wrap">' +
            '<img src="' + escapeHTML(story.image) + '" alt="' + escapeHTML(story.title) + '" loading="lazy">' +
            '<span class="customer-row__zoom">🔍 Phóng to</span>' +
          '</div>' +
          '<div class="customer-row__content">' +
            '<span class="customer-row__tag">' + escapeHTML(story.tag || "Dự án tiêu biểu") + '</span>' +
            '<h2>' + escapeHTML(story.title) + '</h2>' +
            '<p>Cung cấp và vận hành trọn gói hệ thống âm thanh, ánh sáng sân khấu và màn hình LED chất lượng cao bởi đội ngũ kỹ thuật viên Hải Triều Media.</p>' +
            '<span class="customer-row__action">Xem ảnh lớn →</span>' +
          '</div>' +
        '</article>';
      }).join("") + '</div>' +
      pagination(currentPage, pageCount, "khach-hang.html?");

    root.querySelectorAll("[data-story-index]").forEach(function (row) {
      row.addEventListener("click", function () {
        var idx = Number(row.getAttribute("data-story-index"));
        var item = data.customerStories[idx];
        if (item) openSingleLightbox(item.image, item.title);
      });
    });
  }

  function renderAbout() {
    var root = document.getElementById("about-page-content");
    if (!root) return;

    var galleryImages = data.aboutImages || [];
    var introImages = galleryImages.slice(0, 6);
    var brandImages = galleryImages.slice(6);
    function renderAboutImage(image, index) {
      return '<figure class="about-gallery-card" data-about-img="' + escapeHTML(image.image) + '" data-about-alt="' + escapeHTML(image.alt) + '" tabindex="0" role="button">' +
        '<img src="' + escapeHTML(image.image) + '" alt="' + escapeHTML(image.alt) + '" loading="lazy">' +
        '<figcaption>' + escapeHTML(image.alt) + '</figcaption>' +
      '</figure>';
    }

    root.innerHTML =
      '<section class="about-hero-card">' +
        '<span class="section-eyebrow">CÔNG TY TNHH MTV GIẢI PHÁP TRUYỀN THÔNG HẢI TRIỀU</span>' +
        '<h1>CHO THUÊ ÂM THANH, ÁNH SÁNG & MÀN HÌNH LED CHUYÊN NGHIỆP</h1>' +
        '<p><strong>HẢI TRIỀU Co.,LTD</strong> là một trong những công ty cho thuê âm thanh, ánh sáng và màn hình LED chuyên nghiệp chất lượng cao hàng đầu tại Cần Thơ. Chúng tôi cung cấp các cấp độ dịch vụ cao cấp cho một lượng khách hàng lớn, bao gồm tư vấn giải pháp, cho thuê thiết bị, sản xuất kỹ thuật và lắp đặt trọn gói.</p>' +
        '<p>Với <strong>hơn 10 năm kinh nghiệm</strong>, Hải Triều không ngừng đầu tư vào các dòng thiết bị chính hãng hiện đại nhất (RCF, Midas, Behringer, Shure, Sennheiser, Avolites, LED P3/P4...) cùng đội ngũ kỹ thuật viên tận tâm để tối ưu hóa mọi nhu cầu đa dạng của Quý khách hàng.</p>' +
      '</section>' +
      '<div class="about-page-gallery about-page-gallery--grid">' + introImages.map(renderAboutImage).join("") + '</div>' +
      '<section class="about-page-brand-gallery">' +
        '<span class="section-eyebrow">CÔNG NGHỆ TRÌNH DIỄN</span>' +
        '<h2>Hải Triều đồng hành cùng các thương hiệu nổi tiếng</h2>' +
        '<p>Hệ thống LED Matrix, khói lạnh, màn sao và âm thanh Line Array tạo dấu ấn cho các sự kiện trọng đại</p>' +
        '<div class="about-page-gallery about-page-gallery--grid">' + brandImages.map(renderAboutImage).join("") + '</div>' +
      '</section>' +
      '<section class="about-values-grid">' +
        '<div class="about-value-card">' +
          '<h2>PHÁT TRIỂN KINH DOANH</h2>' +
          '<p>' + escapeHTML(data.companyDevelopment) + '</p>' +
        '</div>' +
        '<div class="about-value-card">' +
          '<h2>TÔN CHỈ VÀ HÀNH ĐỘNG</h2>' +
          '<p>' + escapeHTML(data.companyPrinciples) + '</p>' +
        '</div>' +
      '</section>';

    root.querySelectorAll("[data-about-img]").forEach(function (fig) {
      fig.addEventListener("click", function () {
        openSingleLightbox(fig.getAttribute("data-about-img"), fig.getAttribute("data-about-alt"));
      });
    });
  }

  function setupContactForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;

    var prefilledService = new URLSearchParams(window.location.search).get("dich-vu");
    var subjectInput = document.getElementById("contact-subject");
    if (prefilledService && subjectInput) {
      subjectInput.value = "Yêu cầu báo giá: " + prefilledService;
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var values = new FormData(form);
      var body = [
        "Họ tên: " + values.get("name"),
        "Số điện thoại: " + values.get("phone"),
        "Email: " + values.get("email"),
        "Dịch vụ quan tâm: " + values.get("subject"),
        "",
        "Nội dung chi tiết:",
        values.get("message") || "(Chưa nhập nội dung)"
      ].join("\n");

      var statusEl = document.getElementById("contact-status");
      if (statusEl) {
        statusEl.textContent = "✓ Đang mở trình gửi Email. Bạn cũng có thể bấm 'Chat trực tiếp qua Zalo' để gửi nhanh hơn!";
      }
      window.location.href = "mailto:amthanhcantho@gmail.com?subject=" +
        encodeURIComponent(String(values.get("subject"))) + "&body=" + encodeURIComponent(body);
    });
  }

  function setupNavigation() {
    var menuButton = document.getElementById("menu-toggle");
    var menu = document.getElementById("primary-menu");
    var productsNav = document.getElementById("products-nav");
    var submenuButton = document.getElementById("submenu-toggle");

    var selectedCategory = new URLSearchParams(window.location.search).get("danh-muc");
    if (selectedCategory) {
      var currentCategoryLink = Array.prototype.filter.call(
        document.querySelectorAll(".products-submenu a"),
        function (link) {
          return new URL(link.href, window.location.href).searchParams.get("danh-muc") === selectedCategory;
        }
      )[0];
      if (currentCategoryLink) {
        currentCategoryLink.classList.add("is-current");
        currentCategoryLink.setAttribute("aria-current", "page");
      }
    }

    if ((page === "products" || page === "product-detail") && productsNav) {
      var navLink = productsNav.querySelector(".nav-link");
      if (navLink) navLink.classList.add("is-current");
    }

    function setMenuOpen(isOpen) {
      if (!menu || !menuButton) return;
      menu.classList.toggle("is-open", isOpen);
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Đóng menu điều hướng" : "Mở menu điều hướng");
    }

    if (menuButton && menu) {
      menuButton.addEventListener("click", function () {
        setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
      });
      menu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () { setMenuOpen(false); });
      });
    }

    if (submenuButton && productsNav) {
      submenuButton.addEventListener("click", function () {
        var isOpen = submenuButton.getAttribute("aria-expanded") !== "true";
        productsNav.classList.toggle("is-open", isOpen);
        submenuButton.setAttribute("aria-expanded", String(isOpen));
      });
    }

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        if (productsNav) productsNav.classList.remove("is-open");
        if (submenuButton) submenuButton.setAttribute("aria-expanded", "false");
      }
    });

    var backToTop = document.getElementById("back-to-top");
    var header = document.querySelector(".site-header");

    function updateHeaderScrollState() {
      if (header) header.classList.toggle("is-scrolled", window.scrollY > 12);
      if (backToTop) backToTop.classList.toggle("is-visible", window.scrollY > 420);
    }

    window.addEventListener("scroll", updateHeaderScrollState, { passive: true });
    updateHeaderScrollState();
    if (backToTop) {
      backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  // Lightbox đơn giản dùng chung cho trang con
  var singleLightboxModal;
  function openSingleLightbox(src, caption) {
    if (!singleLightboxModal) {
      singleLightboxModal = document.createElement("div");
      singleLightboxModal.className = "lightbox-modal";
      singleLightboxModal.innerHTML =
        '<div class="lightbox-modal__backdrop" data-close-lb></div>' +
        '<div class="lightbox-modal__content" role="dialog" aria-modal="true">' +
          '<button class="lightbox-modal__close" type="button" data-close-lb aria-label="Đóng">✕</button>' +
          '<figure class="lightbox-modal__figure">' +
            '<img id="subpage-lb-img" src="" alt="">' +
            '<figcaption id="subpage-lb-cap"></figcaption>' +
          '</figure>' +
        '</div>';
      document.body.appendChild(singleLightboxModal);
      singleLightboxModal.querySelectorAll("[data-close-lb]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          singleLightboxModal.setAttribute("hidden", "");
          document.body.style.overflow = "";
        });
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && singleLightboxModal && !singleLightboxModal.hasAttribute("hidden")) {
          singleLightboxModal.setAttribute("hidden", "");
          document.body.style.overflow = "";
        }
      });
    }
    document.getElementById("subpage-lb-img").src = src;
    document.getElementById("subpage-lb-img").alt = caption || "";
    document.getElementById("subpage-lb-cap").textContent = caption || "";
    singleLightboxModal.removeAttribute("hidden");
    document.body.style.overflow = "hidden";
  }

  // Hộp thoại tìm kiếm nhanh trên các trang con
  function setupSearchModal() {
    var openBtn = document.getElementById("open-search-modal");
    if (!openBtn) return;

    var allProducts = getAllUniqueProducts();
    var modal = document.createElement("div");
    modal.className = "search-modal";
    modal.setAttribute("hidden", "");
    modal.innerHTML =
      '<div class="search-modal__backdrop" data-close-search></div>' +
      '<div class="search-modal__dialog" role="dialog" aria-modal="true" aria-label="Tìm kiếm thiết bị">' +
        '<div class="search-modal__header">' +
          '<svg class="icon" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z"/></svg>' +
          '<input type="search" id="subpage-search-input" placeholder="Nhập tên thiết bị, dịch vụ (VD: Loa RCF, Midas M32, LED, Ánh sáng...)" autocomplete="off">' +
          '<button type="button" class="search-modal__close" data-close-search>ESC</button>' +
        '</div>' +
        '<div class="search-modal__body" id="subpage-search-results"></div>' +
      '</div>';
    document.body.appendChild(modal);

    var input = document.getElementById("subpage-search-input");
    var resultsRoot = document.getElementById("subpage-search-results");

    function renderResults(query) {
      var q = String(query || "").trim().toLowerCase();
      var matches = !q ? allProducts.slice(0, 8) : allProducts.filter(function (p) {
        return p.name.toLowerCase().indexOf(q) !== -1 || p.category.toLowerCase().indexOf(q) !== -1;
      });

      if (!matches.length) {
        resultsRoot.innerHTML = '<div class="search-modal__empty">Không tìm thấy thiết bị phù hợp. Hãy thử từ khóa khác hoặc <a href="https://zalo.me/0918408673" target="_blank" rel="noreferrer">nhắn Zalo 0918 408 673</a>.</div>';
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

    openBtn.addEventListener("click", function () {
      modal.removeAttribute("hidden");
      document.body.style.overflow = "hidden";
      renderResults(input.value);
      window.setTimeout(function () { input.focus(); }, 40);
    });
    input.addEventListener("input", function () { renderResults(input.value); });
    modal.querySelectorAll("[data-close-search]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        modal.setAttribute("hidden", "");
        document.body.style.overflow = "";
      });
    });
  }

  var brandLogo = document.getElementById("brand-logo");
  if (brandLogo) brandLogo.src = data.logo;
  var socialLogo = document.getElementById("social-logo");
  if (socialLogo) socialLogo.src = data.logo;

  setupNavigation();
  renderSidebar();
  setupSearchModal();
  if (page === "products") renderProducts();
  if (page === "product-detail") renderProductDetail();
  if (page === "customers") renderCustomers();
  if (page === "about") renderAbout();
  if (page === "contact") setupContactForm();
}());
