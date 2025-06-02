document.addEventListener("DOMContentLoaded", function () {
  const footer =
    document.querySelector(".footer") || document.querySelector("footer");

  if (footer) {
    const footerText = footer.textContent.toLowerCase();
    if (footerText.includes("nina")) {
      // Tìm phần tử cụ thể chứa chữ "nina"
      const ninaElement = Array.from(footer.querySelectorAll("*")).find((el) =>
        el.textContent.toLowerCase().includes("nina")
      );

      if (ninaElement) {
        // Thêm CSS animation đổi màu vào <head>
        const style = document.createElement("style");
        style.textContent = `
            @keyframes colorChange {
              0%   { color: #007aff; }
              25%  { color: #28a745; }
              50%  { color: #ff9800; }
              75%  { color: #e91e63; }
              100% { color: #007aff; }
            }
            .animated-link {
              animation: colorChange 3s linear infinite;
              font-weight: bold;
              font-size: 16px;
              text-decoration: none;
              display: inline-block;
            }
          `;
        document.head.appendChild(style);

        // Tạo dòng mới chứa link Zalo
        const container = document.createElement("div");
        container.style.marginTop = "10px";
        container.style.width = "100%";
        container.style.textAlign = "center";

        const link = document.createElement("a");
        link.href = "https://zalo.me/0764389365";
        link.textContent =
          "Nhân viên hỗ trợ website - Hoàng website - Hcode Dev";
        link.target = "_blank";
        link.className = "animated-link";

        container.appendChild(link);
        ninaElement.parentNode.insertBefore(container, ninaElement.nextSibling);
      }
    }
  }
});
