document.addEventListener("DOMContentLoaded", function () {
  const footer =
    document.querySelector(".footer") || document.querySelector("footer");

  if (footer) {
    const footerText = footer.textContent.toLowerCase();
    if (footerText.includes("nina")) {
      // Tạo dòng mới chứa link Zalo
      const container = document.createElement("div");
      container.style.marginTop = "10px";
      container.style.width = "100%";
      container.style.textAlign = "center";

      const link = document.createElement("a");
      link.href = "https://zalo.me/0764389365";
      link.textContent = "Nhân viên hỗ trợ website - Hoàng website - Hcode Dev";
      link.target = "_blank";
      link.style.display = "inline-block";
      link.style.fontWeight = "bold";
      link.style.fontSize = "16px";
      link.style.color = "#007aff"; // Màu xanh đặc trưng của Zalo
      link.style.textDecoration = "none";

      container.appendChild(link);
      footer.appendChild(container);
    }
  }
});
