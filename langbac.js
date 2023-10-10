// Lắng nghe sự kiện khi trang web đã tải hoàn toàn
document.addEventListener("DOMContentLoaded", function () {
    // Lắng nghe sự kiện click trên tất cả các liên kết trong menu điều hướng
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            // Ngăn chặn hành vi mặc định của liên kết (không chuyển hướng)
            event.preventDefault();

            // Lấy phần tử mục tiêu (section) dựa trên thuộc tính href của liên kết
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            // Cuộn mượt đến phần tử mục tiêu
            targetElement.scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
