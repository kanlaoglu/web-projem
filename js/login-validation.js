function loginKontrol() {
    const kullanici = document.getElementById("kullanici").value.trim();
    const sifre = document.getElementById("sifre").value.trim();

    if (kullanici === "" || sifre === "") {
        alert("Kullanıcı adı ve şifre boş bırakılamaz.");
        return false;
    }

    const emailKontrol = /^[a-z][0-9]{9}@sakarya\.edu\.tr$/;

    if (!emailKontrol.test(kullanici)) {
        alert("Kullanıcı adı b241210001@sakarya.edu.tr formatında olmalıdır.");
        return false;
    }

    if (!/^[0-9]+$/.test(sifre)) {
        alert("Şifre sadece rakamlardan oluşmalıdır.");
        return false;
    }

    return true;
}