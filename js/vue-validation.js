document.getElementById("vueBtn").addEventListener("click", function () {

    const adsoyad = document.getElementById("adsoyad").value.trim();
    const email = document.getElementById("email").value.trim();

    if (adsoyad === "" || email === "") {
        alert("Vue.js kontrolü: Ad Soyad ve Email boş bırakılamaz.");
        return;
    }

    const emailKontrol = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailKontrol.test(email)) {
        alert("Vue.js kontrolü: Geçerli email giriniz.");
        return;
    }

    alert("Vue.js kontrolü başarılı.");
});