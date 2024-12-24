<script>
    // التحقق من أن الصفحة هي الصفحة الرئيسية
    if (window.location.pathname !== "/index.html" && window.location.pathname !== "/") { }
    const logo = document.querySelector(".logo");
    if (logo) {logo.style.display = "none" // إخفاء الصورة إذا لم تكن الصفحة الرئيسية
    }
</script>;
