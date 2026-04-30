function formKontrol() {
    const adsoyad = document.getElementById("adsoyad").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefon = document.getElementById("telefon").value.trim();
    const sehir = document.getElementById("sehir").value;
    const dogumTarihi = document.getElementById("dogumTarihi").value;
    const mesaj = document.getElementById("mesaj").value.trim();

    const cinsiyetler = document.getElementsByName("cinsiyet");
    const ilgiler = document.getElementsByName("ilgiler[]");

    let cinsiyetSecildi = false;
    let ilgiSecildi = false;

    for (let i = 0; i < cinsiyetler.length; i++) {
        if (cinsiyetler[i].checked) {
            cinsiyetSecildi = true;
            break;
        }
    }

    for (let i = 0; i < ilgiler.length; i++) {
        if (ilgiler[i].checked) {
            ilgiSecildi = true;
            break;
        }
    }

    if (adsoyad === "" || email === "" || telefon === "" || sehir === "" || dogumTarihi === "" || mesaj === "") {
        alert("Lütfen tüm alanları doldurunuz.");
        return false;
    }

    if (!cinsiyetSecildi) {
        alert("Lütfen cinsiyet seçiniz.");
        return false;
    }

    if (!ilgiSecildi) {
        alert("Lütfen en az bir ilgi alanı seçiniz.");
        return false;
    }

    const emailKontrol = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailKontrol.test(email)) {
        alert("Lütfen geçerli bir e-posta adresi giriniz.");
        return false;
    }

    const telefonKontrol = /^[0-9]+$/;
    if (!telefonKontrol.test(telefon)) {
        alert("Telefon numarası sadece rakamlardan oluşmalıdır.");
        return false;
    }

    if (telefon.length < 10) {
        alert("Telefon numarası en az 10 haneli olmalıdır.");
        return false;
    }

    return true;
}