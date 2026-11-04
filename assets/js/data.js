/*
 * Nội dung website được gom vào một nơi để dễ sửa mà không phải lục tìm trong HTML.
 * Các ảnh hiện tham chiếu tới thư mục ảnh công khai trên amthanhcantho.com.
 * Khi muốn dùng ảnh lưu trên máy, đổi hàm imageUrl() để trỏ vào assets/images.
 */
(function () {
  "use strict";

  var WEBSITE_ORIGIN = "https://amthanhcantho.com/";
  var productNumber = 0;

  // Ghép URL ảnh gốc; thêm dấu / ở đầu path giúp tránh sai đường dẫn.
  function imageUrl(path) {
    return WEBSITE_ORIGIN + String(path).replace(/^\/+/, "");
  }

  // Dùng cùng một định dạng dữ liệu cho mọi thẻ dịch vụ và thiết bị.
  function makeProduct(name, imagePath, category, badge, summary, specs) {
    productNumber += 1;
    return {
      id: "hai-trieu-product-" + productNumber,
      name: name,
      category: category,
      image: imageUrl(imagePath),
      price: "Liên hệ",
      badge: badge || category,
      summary: summary || "",
      specs: specs || []
    };
  }

  // Liên kết mạng xã hội và ứng dụng chính thức của Hải Triều.
  var socialLinks = [
    {
      id: "zalo",
      name: "Zalo Hải Triều",
      label: "Chat Zalo",
      handle: "0918 408 673",
      url: "https://zalo.me/0918408673"
    },
    {
      id: "facebook",
      name: "Facebook Fanpage",
      label: "Facebook",
      handle: "fb.com/amthanhcantho",
      url: "https://www.facebook.com/amthanhcantho"
    },
    {
      id: "youtube",
      name: "Kênh YouTube",
      label: "YouTube",
      handle: "Hải Triều Media",
      url: "https://www.youtube.com/results?search_query=%C3%82m+Thanh+%C3%81nh+S%C3%A1ng+M%C3%A0n+H%C3%ACnh+Led+H%E1%BA%A3i+Tri%E1%BB%81u+C%E1%BA%A7n+Th%C6%A1"
    },
    {
      id: "tiktok",
      name: "Kênh TikTok",
      label: "TikTok",
      handle: "@haitrieucantho",
      url: "https://www.tiktok.com/search?q=%C3%A2m%20thanh%20%C3%A1nh%20s%C3%A1ng%20h%E1%BA%A3i%20tri%E1%BB%81u%20c%E1%BA%A7n%20th%C6%A1"
    },
    {
      id: "messenger",
      name: "Facebook Messenger",
      label: "Messenger",
      handle: "Nhắn tin nhanh",
      url: "https://m.me/amthanhcantho"
    },
    {
      id: "maps",
      name: "Bản đồ Google Maps",
      label: "Chỉ đường",
      handle: "94 Tầm Vu, Cần Thơ",
      url: "https://www.google.com/maps?q=94%20T%E1%BA%A7m%20Vu%2C%20H%C6%B0ng%20L%E1%BB%A3i%2C%20Ninh%20Ki%E1%BB%81u%2C%20C%E1%BA%A7n%20Th%C6%A1"
    }
  ];

  // Ba ảnh banner đầu trang của website tham khảo, bổ sung tiêu đề & phụ đề hiện đại.
  var heroImages = [
    {
      image: "assets/images/banner-1.jpg",
      alt: "Sân khấu, âm thanh và xe thiết bị Hải Triều",
      tag: "GIẢI PHÁP SỰ KIỆN TOÀN DIỆN TẠI CẦN THƠ & MIỀN TÂY",
      title: "Hệ Thống Âm Thanh, Ánh Sáng & Màn Hình LED Đẳng Cấp",
      subtitle: "Đồng hành cùng hàng trăm sự kiện đại nhạc hội, hội nghị, lễ khởi công và tiệc cưới cao cấp với trang thiết bị chính hãng hiện đại nhất."
    },
    {
      image: "assets/images/banner-2.jpg",
      alt: "Thiết bị và không gian sự kiện do Hải Triều thực hiện",
      tag: "CÔNG NGHỆ TRÌNH DIỄN HIỆN ĐẠI",
      title: "Màn Hình LED & Ánh Sáng Sân Khấu Sắc Nét Mọi Góc Nhìn",
      subtitle: "Thi công nhanh chóng, vận hành an toàn bởi đội ngũ kỹ thuật viên hơn 10 năm kinh nghiệm thực chiến."
    },
    {
      image: "assets/images/banner-3.jpg",
      alt: "Hệ thống âm thanh và ánh sáng sự kiện",
      tag: "DỊCH VỤ CHUYÊN NGHIỆP 24/7",
      title: "Biến Ý Tưởng Sự Kiện Của Bạn Thành Hiện Thực",
      subtitle: "Tư vấn cấu hình tối ưu theo ngân sách, khảo sát tận nơi miễn phí tại TP. Cần Thơ và khắp các tỉnh ĐBSCL."
    }
  ];

  // Các gói combo tiêu biểu giúp khách hàng dễ chọn theo nhu cầu thực tế.
  var servicePackages = [
    {
      id: "combo-hoi-nghi",
      badge: "Phổ biến",
      title: "Gói Hội Nghị & Khai Trương",
      audience: "Quy mô 50 – 200 khách",
      description: "Âm thanh rõ nét, ánh sáng lịch sự và màn hình LED trình chiếu slide sắc nét cho hội thảo, lễ khai trương, họp báo.",
      features: [
        "Hệ thống loa Column / Full-range chính hãng",
        "04 – 06 Micro không dây Shure / Sennheiser",
        "Đèn Par LED ánh sáng vàng ấm & trắng chụp ảnh đẹp",
        "Màn hình LED P3 Indoor (tùy chọn kích thước)",
        "Kỹ thuật viên trực điều chỉnh suốt chương trình"
      ]
    },
    {
      id: "combo-gala-dinner",
      badge: "Bán chạy nhất",
      title: "Gói Gala Dinner & Tiệc Cưới",
      audience: "Quy mô 200 – 500 khách",
      featured: true,
      description: "Không gian âm nhạc sống động, hiệu ứng ánh sáng Beam + khói lạnh lãng mạn và màn hình LED sân khấu hoành tráng.",
      features: [
        "Hệ thống loa Line Array RCF HDL 6A + Sub đôi",
        "Bàn Mixer kỹ thuật số Midas M32 / Behringer X32",
        "Hệ thống đèn Moving Head Beam 280 + Par LED 3in1",
        "Màn hình LED sân khấu chính + 2 cánh gà",
        "Máy khói lạnh, màn sao sân khấu & đội ngũ vận hành"
      ]
    },
    {
      id: "combo-su-kien-lon",
      badge: "Cao cấp",
      title: "Gói Đại Nhạc Hội & Ngoài Trời",
      audience: "Quy mô 500 – 3.000+ khách",
      description: "Cấu hình âm thanh công suất lớn, giàn Truss nhôm không gian, ánh sáng lập trình Timecode và LED Outdoor siêu sáng.",
      features: [
        "Full hệ thống Line Array RCF công suất lớn treo giàn Truss",
        "Bàn điều khiển ánh sáng Avolites Tiger Touch II",
        "Hệ thống LED Matrix, Beam, Strobe, Blinder đồng bộ",
        "Màn hình LED Outdoor chống nước độ sáng cao",
        "Sân khấu lắp ghép chịu lực & phương án nguồn điện dự phòng"
      ]
    }
  ];

  /*
   * Các nhóm bên dưới lần lượt là âm thanh, ánh sáng, màn hình LED,
   * sân khấu và thiết bị. Thứ tự ảnh bám theo trang chủ tham khảo.
   */
  var productSections = [
    {
      id: "cho-thue-am-thanh",
      title: "CHO THUÊ ÂM THANH",
      subtitle: "Hệ thống loa Line Array, Mixer kỹ thuật số và Micro không dây cao cấp cho mọi quy mô sự kiện.",
      products: [
        makeProduct("Hệ thống Âm thanh Sự kiện Chuyên nghiệp", "upload/KJS0NKNTGZ-153419052024.jpg", "Cho thuê âm thanh", "Âm thanh Pro", "Cấu hình âm thanh Line Array đồng bộ, phủ âm đều và uy lực cho sự kiện trong nhà lẫn ngoài trời."),
        makeProduct("Dàn Âm thanh Hội nghị & Biểu diễn", "upload/C2MN7JBIL7-153319052024.jpg", "Cho thuê âm thanh", "Âm thanh Pro", "Giải pháp âm thanh trung thực, chống hú rít tuyệt đối, phù hợp hội nghị khách hàng và biểu diễn nghệ thuật."),
        makeProduct("Video clip Cho thuê âm thanh ánh sáng màn hình led", "upload/ARDZSZ38XV-103006072020.jpg", "Cho thuê âm thanh", "Trọn gói", "Tổng hợp các dự án âm thanh, ánh sáng và màn hình LED quy mô lớn do Hải Triều trực tiếp thi công."),
        makeProduct("Sự kiện Sinh Nhật TOYOTA Cần Thơ", "upload/UWUT4DLYV3-102406072020.jpg", "Cho thuê âm thanh", "Dự án tiêu biểu", "Cung cấp trọn gói hệ thống âm thanh, ánh sáng và sân khấu cho lễ kỷ niệm Toyota Cần Thơ."),
        makeProduct("Cho thuê Âm thanh Sân khấu Ngoài trời", "upload/VLR2I3F635-102606072020.jpg", "Cho thuê âm thanh", "Ngoài trời", "Hệ thống loa công suất lớn kết hợp Sub đôi đáp ứng không gian mở hàng ngàn khán giả."),
        makeProduct("Lễ Mở Bán STELLA MEGA CITY Cần Thơ", "upload/EVNG16CQES-102006072020.jpg", "Cho thuê âm thanh", "Dự án lớn", "Đồng hành kỹ thuật âm thanh - ánh sáng - LED cho sự kiện mở bán đại đô thị Stella Mega City."),
        makeProduct("Lễ Khởi Động Dự Án Đô Thị Mới Cồn Khương", "upload/2X84V6SFMT-102306072020.jpg", "Cho thuê âm thanh", "Dự án lớn", "Hệ thống âm thanh hội nghị cao cấp phục vụ lễ khởi động dự án tại Cồn Khương, Cần Thơ.")
      ]
    },
    {
      id: "cho-thue-anh-sang",
      title: "CHO THUÊ ÁNH SÁNG",
      subtitle: "Đèn Moving Head Beam, Par LED, Laser, Follow và bàn điều khiển Tiger Touch II tạo hiệu ứng sân khấu mãn nhãn.",
      products: [
        makeProduct("Hệ thống Ánh sáng Sân khấu Biểu diễn", "upload/LUXALY0QRN-160519052024.jpg", "Cho thuê ánh sáng", "Ánh sáng Pro", "Thiết kế và lập trình ánh sáng sân khấu chuyên nghiệp theo kịch bản chương trình."),
        makeProduct("Ánh sáng Sự kiện & Đại nhạc hội", "upload/RR738XZLS8-160419052024.jpg", "Cho thuê ánh sáng", "Đại nhạc hội", "Giàn đèn Beam, Par LED và hiệu ứng khói tạo không gian trình diễn bùng nổ cảm xúc."),
        makeProduct("Ánh sáng Gala Dinner & Hội nghị Khách hàng", "upload/1EWG5YVZNB-214006072020.jpg", "Cho thuê ánh sáng", "Gala Dinner", "Ánh sáng sang trọng, tôn vinh sân khấu và hỗ trợ quay phim, chụp ảnh sắc nét."),
        makeProduct("Hệ thống Đèn Beam & Giàn Truss Không gian", "upload/07SNMY4F2F-214106072020.jpg", "Cho thuê ánh sáng", "Giàn Truss", "Kết cấu giàn Truss hợp kim nhôm an toàn cùng hệ thống đèn hiệu ứng đa tầng."),
        makeProduct("Ánh sáng Trình diễn Nghệ thuật & Thời trang", "upload/Y21BC1MWPJ-213906072020.jpg", "Cho thuê ánh sáng", "Biểu diễn", "Độ hoàn màu CRI cao, chiếu sáng chuẩn xác cho người mẫu và nghệ sĩ trên sân khấu."),
        makeProduct("Ánh sáng Lễ hội & Sự kiện Ngoài trời", "upload/6J5AZ4UZ7E-213906072020.jpg", "Cho thuê ánh sáng", "Ngoài trời", "Đèn công suất lớn chiếu xa, hoạt động bền bỉ trong điều kiện sự kiện ngoài trời."),
        makeProduct("Hiệu ứng Ánh sáng LED Matrix Sân khấu", "upload/P6RZJJSA2T-214006072020.jpg", "Cho thuê ánh sáng", "LED Matrix", "Kết hợp ánh sáng Matrix, màn sao và khói lạnh tạo chiều sâu không gian 3D."),
        makeProduct("Gói Ánh sáng Tiệc cưới & Sự kiện Doanh nghiệp", "upload/4FIEEM6UPG-213906072020.jpg", "Cho thuê ánh sáng", "Tiệc & Sự kiện", "Lắp đặt gọn gàng, thẩm mỹ cao, tùy biến màu sắc theo nhận diện thương hiệu.")
      ]
    },
    {
      id: "cho-thue-man-hinh-led",
      title: "CHO THUÊ MÀN HÌNH LED",
      subtitle: "Màn hình LED P3, P4 Indoor & Outdoor siêu sáng, tần số quét cao, ghép nối đa kích thước.",
      products: [
        makeProduct("Cho thuê Màn hình LED Sân khấu Chính", "upload/Y0B1IZ34YJ-153019052024.jpg", "Cho thuê màn hình LED", "LED P3/P4", "Màn hình LED độ phân giải cao, màu sắc rực rỡ, không bị sọc khi quay phim chụp ảnh."),
        makeProduct("Màn hình LED Hội nghị & Sự kiện Trong nhà", "upload/C6V5U0T58K-153119052024.jpg", "Cho thuê màn hình LED", "LED Indoor", "Module LED P3 Indoor mịn nét, góc nhìn rộng, lắp đặt phẳng tuyệt đối."),
        makeProduct("Hệ thống Màn hình LED Đa Tầng (Chính & Cánh gà)", "upload/CIEA2S27T8-152419052024.jpg", "Cho thuê màn hình LED", "Đa màn hình", "Bố cục màn hình LED trung tâm kết hợp các dải LED cánh tạo hiệu ứng thị giác 3D."),
        makeProduct("Cho thuê Màn hình LED Sự kiện Ngoài trời", "upload/DD17N314CK-152419052024.jpg", "Cho thuê màn hình LED", "LED Outdoor", "Độ sáng cao chống chói dưới ánh nắng, đạt chuẩn kháng nước IP65 an toàn."),
        makeProduct("Màn hình LED Lễ Khai trương & Ra mắt Sản phẩm", "upload/6BUWMPH3FB-152419052024.jpg", "Cho thuê màn hình LED", "Sự kiện", "Trình chiếu TVC, slide thuyết trình và hiệu ứng visual sống động."),
        makeProduct("Màn hình LED Tiệc cưới & Trung tâm Hội nghị", "upload/JA8EC7WCTB-211406072020.jpg", "Cho thuê màn hình LED", "Hội trường", "Thay thế phông bạt truyền thống bằng không gian trình chiếu hiện đại, sang trọng."),
        makeProduct("Màn hình LED Biểu diễn Nghệ thuật Chuyên nghiệp", "upload/M37HV43U4G-211306072020.jpg", "Cho thuê màn hình LED", "Sân khấu lớn", "Xử lý hình ảnh mượt mà qua bộ xử lý Novastar / Linsn chuyên dụng."),
        makeProduct("Giải pháp Màn hình LED Kích thước Lớn", "upload/NAWQ0BVBJY-211306072020.jpg", "Cho thuê màn hình LED", "Quy mô lớn", "Đáp ứng diện tích từ 15m² đến hàng trăm m² theo thiết kế 3D của sự kiện.")
      ]
    },
    {
      id: "cho-thue-san-khau",
      title: "CHO THUÊ SÂN KHẤU",
      subtitle: "Sân khấu lắp ghép đa kích thước, thảm mới, giàn khung Truss và hiệu ứng khói lạnh chuyên nghiệp.",
      products: [
        makeProduct("Hiệu ứng Máy Khói Lạnh Sân Khấu", "upload/FRM5DHRSDH-211606072020.jpg", "Cho thuê sân khấu", "Hiệu ứng", "Tạo làn mây bồng bềnh sát mặt sàn sân khấu, lý tưởng cho tiết mục múa, ca nhạc và lễ cưới."),
        makeProduct("Cho thuê Sân Khấu Lắp Ghép Chuyên Nghiệp", "upload/68220SKUPR-211506072020.jpg", "Cho thuê sân khấu", "Sân khấu", "Khung sắt chịu lực cao, mặt ván dày chắc chắn, bọc thảm mới theo màu sắc yêu cầu.")
      ]
    },
    {
      id: "thiet-bi",
      title: "THIẾT BỊ",
      subtitle: "Trang thiết bị âm thanh, ánh sáng chính hãng từ RCF, Midas, Shure, Sennheiser, Avolites.",
      products: [
        makeProduct("Vỏ thùng & Tủ máy Thiết bị Chuyên dụng", "upload/PGG2LE6Q2E-212806072020.jpg", "Thiết bị", "Phụ kiện", "Flightcase chống sốc tiêu chuẩn lưu diễn, bảo vệ an toàn tuyệt đối cho hệ thống thiết bị."),
        makeProduct("Bộ tiếp sóng & Chia Ăng-ten Micro Không dây", "upload/X3NZQAIQWK-212506072020.jpg", "Thiết bị", "Micro", "Tăng cường khoảng cách thu phát sóng ổn định, chống mất sóng ở sự kiện quy mô lớn."),
        makeProduct("Loa Line Array RCF HDL 6A 1400W", "upload/L3HRI5TUJX-212406072020.jpg", "Thiết bị", "Loa RCF", "Loa Line Array Active chính hãng RCF (Italy), công suất 1400W Peak, DSP tích hợp cho âm thanh cực kỳ chi tiết."),
        makeProduct("Đèn Moving Head Beam 280 Siêu Bền", "upload/331FBDJ7BX-212206072020.jpg", "Thiết bị", "Đèn sân khấu", "Tia sáng sắc nét, tích hợp đĩa Gobo và lăng kính đa chiều tạo hiệu ứng không gian ấn tượng."),
        makeProduct("Đèn Sân Khấu Par LED 3in1 RGB", "upload/WPTL4GBU5T-212306072020.jpg", "Thiết bị", "Đèn sân khấu", "Pha trộn màu RGB mượt mà, làm nền sân khấu và nhuộm màu không gian sự kiện."),
        makeProduct("Bàn Mixer Digital Console Midas M32", "upload/2KXQNXN6KD-212406072020.jpg", "Thiết bị", "Mixer", "Bàn mixer kỹ thuật số huyền thoại với 32 tiền khuếch đại Midas PRO, xử lý âm thanh đẳng cấp phòng thu."),
        makeProduct("Đèn Par LED Vàng Ấm Chiếu Mặt Sân Khấu", "upload/XC2X27P5YE-212506072020.jpg", "Thiết bị", "Đèn sân khấu", "Ánh sáng Warm White tự nhiên giúp khuôn mặt đại biểu, ca sĩ sáng rõ khi lên hình."),
        makeProduct("Hệ thống Loa Cột ROCKWAVE Column Speaker", "upload/A61HGHW4KV-212506072020.jpg", "Thiết bị", "Loa cột", "Thiết kế thanh lịch, góc phủ âm rộng, rất phù hợp cho hội thảo, tiệc VIP và acoustic.")
      ]
    }
  ];

  // Lấy thẻ nổi bật trực tiếp từ các danh mục bên dưới để nội dung không bị nhân đôi.
  // Đặt ánh sáng và âm thanh trước, sau đó lần lượt tới LED, sân khấu và thiết bị.
  var featuredProducts = [
    productSections[1].products,
    productSections[0].products,
    productSections[2].products,
    productSections[3].products,
    productSections[4].products
  ].reduce(function (allProducts, sectionProducts) {
    return allProducts.concat(sectionProducts);
  }, []);

  // Hình ảnh khách hàng/dự án trong băng chuyền tin mới ở cuối trang.
  var customerStories = [
    { image: imageUrl("upload/news/DLYHKI0AD1-220119052024.jpg"), title: "Hải Triều đồng hành cùng Đại nhạc hội & Sự kiện Doanh nghiệp tại Cần Thơ", tag: "Sự kiện tiêu biểu" },
    { image: imageUrl("upload/news/74WCB284QH-220019052024.jpg"), title: "Thi công hệ thống Âm thanh - Ánh sáng - Màn hình LED Sân khấu lớn", tag: "Trình diễn nghệ thuật" },
    { image: imageUrl("upload/news/P65RM3ASGI-161119052024.jpg"), title: "Lắp đặt Màn hình LED và Ánh sáng Hội nghị Khách hàng Thường niên", tag: "Hội nghị & Gala" },
    { image: imageUrl("upload/news/5DW6QGR8JJ-161119052024.jpg"), title: "Hải Triều đồng hành cùng Lễ Kỷ niệm & Vinh danh Thương hiệu", tag: "Sự kiện doanh nghiệp" },
    { image: imageUrl("upload/news/8R5NXLWY2M-160019052024.jpg"), title: "Không gian Sân khấu & Màn hình LED Đa điểm nhìn ấn tượng", tag: "Màn hình LED" },
    { image: imageUrl("upload/news/WHDDF27XP8-160019052024.jpg"), title: "Đội ngũ kỹ thuật Hải Triều vận hành chương trình biểu diễn trực tiếp", tag: "Kỹ thuật sự kiện" },
    { image: imageUrl("upload/news/7IFARKWRE6-160119052024.jpg"), title: "Hệ thống Ánh sáng Beam & LED Matrix bùng nổ tại Đêm nhạc", tag: "Ánh sáng sân khấu" },
    { image: imageUrl("upload/news/V6RIFQJNLU-155519052024.jpg"), title: "Cung cấp thiết bị sự kiện trọn gói tại TP. Cần Thơ và các tỉnh Miền Tây", tag: "Dự án thực tế" },
    { image: imageUrl("upload/news/FVR3UV0P6M-155219052024.jpg"), title: "Sân khấu Gala Dinner sang trọng với âm thanh RCF và màn hình LED", tag: "Gala Dinner" },
    { image: imageUrl("upload/news/PWUHFEVYEA-160219052024.jpg"), title: "Hải Triều đồng hành cùng sự thành công của hàng trăm Quý Khách hàng", tag: "Đồng hành phát triển" }
  ];

  // Ảnh xếp theo đúng thứ tự thư viện trên trang Giới thiệu của Hải Triều.
  var aboutImages = [
    { image: imageUrl("Uploads/images/am-thanh-anh-sang--man-hinh-led-hai-trieu.jpg"), alt: "Xe thiết bị Hải Triều tại sự kiện" },
    { image: imageUrl("Uploads/images/am-thanh-anh-sang--man-hinh-led-hai-trieu-2.jpg"), alt: "Thiết bị âm thanh Hải Triều" },
    { image: imageUrl("Uploads/images/am-thanh-anh-sang--man-hinh-led-hai-trieu-3.jpg"), alt: "Lắp đặt hệ thống sân khấu ngoài trời" },
    { image: imageUrl("Uploads/images/am-thanh-anh-sang--man-hinh-led-hai-trieu-4.jpg"), alt: "Bàn điều khiển âm thanh và ánh sáng" },
    { image: imageUrl("Uploads/images/am-thanh-anh-sang-hai-trieu-can-tho-1.jpg"), alt: "Đội ngũ lắp đặt hệ thống loa" },
    { image: imageUrl("Uploads/images/am-thanh-anh-sang-hai-trieu-can-tho-3.jpg"), alt: "Sân khấu sự kiện trong nhà" },
    { image: imageUrl("Uploads/images/am-thanh-anh-sang-hai-trieu-can-tho-6.jpg"), alt: "Sự kiện với màn hình LED và ánh sáng" },
    { image: imageUrl("Uploads/images/am-thanh-anh-sang-hai-trieu-can-tho-5.jpg"), alt: "Trình diễn ánh sáng sân khấu" },
    { image: imageUrl("Uploads/images/am-thanh-anh-sang-hai-trieu-can-tho-4.jpg"), alt: "Không gian sự kiện Hải Triều thực hiện" },
    { image: imageUrl("Uploads/images/am-thanh-anh-sang-hai-trieu-can-tho-2.jpg"), alt: "Sân khấu ngoài trời tại Cần Thơ" }
  ];

  // Công khai dữ liệu để main.js và subpages.js trình bày và tương tác.
  window.HAI_TRIEU_DATA = {
    imageUrl: imageUrl,
    logo: "assets/images/logo.svg",
    introImage: imageUrl("Uploads/images/am-thanh-anh-sang-hai-trieu.jpg"),
    companyDescription:
      "HẢI TRIỀU Co.,LTD là một trong những công ty cho thuê âm thanh và ánh sáng màn hình led chuyên nghiệp chất lượng cao tại Cần Thơ. Chúng tôi cung cấp các cấp độ dịch vụ cao cấp cho một lượng khách hàng lớn với môi trường kinh tế đầy thách thức, cung cấp một loạt các sản phẩm chuyên nghiệp để bán, cho thuê, dịch vụ sản xuất, lắp đặt.",
    companyExperience:
      "HẢI TRIỀU Co., Ltd hơn 10 năm kinh nghiệm với tầm nhìn cung cấp giải pháp âm thanh, ánh sáng, màn hình led cho một loạt các sự kiện, giải trí. Kể từ đó, chúng tôi đã tiếp tục thực hiện và mở rộng tầm nhìn này bằng cách cải thiện kỹ năng của mình và liên tục đánh giá, tìm kiếm các thiết bị tốt nhất trong khi nuôi dưỡng mối quan hệ vững chắc với khách hàng và đối tác của chúng tôi để tối ưu hóa nhu cầu đa dạng của khách hàng.",
    companyDevelopment:
      "Chúng tôi tiếp tục dẫn đầu trong ngành bằng cách liên tục cập nhật công nghệ mới nhất. Đầu tư vào trang thiết bị máy móc hiện đại đáp ứng cho các show diễn và mục đích thương mại là động lực thúc đẩy chúng tôi cùng phát triển.",
    companyPrinciples:
      "Thiết bị tốt chỉ là công cụ. Hải Triều xây dựng đội ngũ chuyên gia giàu kinh nghiệm, tập trung vào mục tiêu của khách hàng và tạo nên trải nghiệm dịch vụ đáng tin cậy. Chúng tôi tiếp tục đổi mới để biến ý tưởng của khách hàng thành hiện thực.",
    socialLinks: socialLinks,
    servicePackages: servicePackages,
    heroImages: heroImages,
    aboutImages: aboutImages,
    featuredProducts: featuredProducts,
    productSections: productSections,
    customerStories: customerStories
  };
}());
