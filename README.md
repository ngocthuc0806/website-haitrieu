# Website Hải Triều — bản dựng chạy trong VS Code

Đây là website tĩnh gồm trang chủ và các trang riêng cho Sản phẩm, Khách hàng, Giới thiệu và Liên hệ. Các liên kết ở thanh menu mở trang tương ứng; từng danh mục sản phẩm có địa chỉ riêng qua tham số trên trang sản phẩm.

## Cách mở và chạy

1. Mở Visual Studio Code.
2. Chọn **File → Open Folder...**.
3. Chọn folder hai-trieu-website này.
4. Cài extension **Live Server** nếu máy chưa có.
5. Mở index.html, nhấn chuột phải trong file và chọn **Open with Live Server**.
6. Dùng thanh menu của website để mở các trang con.

Cũng có thể mở trực tiếp index.html bằng trình duyệt. Live Server tiện hơn khi bạn sửa nội dung vì trình duyệt tự tải lại.

## Các trang

- index.html: Trang chủ theo ảnh tham khảo.
- san-pham.html: Danh mục sản phẩm. Các nhóm riêng:
  - san-pham.html?danh-muc=cho-thue-am-thanh
  - san-pham.html?danh-muc=cho-thue-anh-sang
  - san-pham.html?danh-muc=cho-thue-man-hinh-led
  - san-pham.html?danh-muc=cho-thue-san-khau
  - san-pham.html?danh-muc=thiet-bi
- khach-hang.html: Hình ảnh các chương trình Hải Triều đồng hành.
- gioi-thieu.html: Nội dung và thư viện ảnh giới thiệu công ty.
- lien-he.html: Thông tin công ty, bản đồ và biểu mẫu liên hệ.

## Cấu trúc thư mục

    hai-trieu-website/
    ├── index.html
    ├── san-pham.html
    ├── khach-hang.html
    ├── gioi-thieu.html
    ├── lien-he.html
    ├── README.md
    └── assets/
        ├── css/
        │   └── styles.css       # Màu sắc, bố cục và hiển thị trên điện thoại
        └── js/
            ├── data.js          # Nội dung, sản phẩm và đường dẫn ảnh
            ├── main.js          # Tương tác của trang chủ
            └── subpages.js      # Nội dung và tương tác của các trang con

## Chỉnh sửa

- Chỉnh nội dung, ảnh sản phẩm, ảnh khách hàng trong assets/js/data.js.
- Chỉnh màu sắc, cỡ chữ, khoảng cách và bố cục trong assets/css/styles.css.
- Chỉnh khung riêng của từng trang trong các file HTML.
- Chỉnh cách dựng sản phẩm, khách hàng và biểu mẫu trong assets/js/subpages.js.

Các phần chính trong mã có chú thích tiếng Việt. Ảnh hiện tải từ website tham khảo nên cần Internet. Biểu mẫu liên hệ dùng mailto: để mở ứng dụng email của máy; để nhận dữ liệu trực tiếp trên website cần tích hợp dịch vụ hoặc máy chủ xử lý biểu mẫu.