<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $kullanici = trim($_POST["kullanici"]);
    $sifre = trim($_POST["sifre"]);

    $ogrenciNo = "b251210588";
    $dogruKullanici = $ogrenciNo . "@sakarya.edu.tr";
    $dogruSifre = "251210588";

    if ($kullanici === $dogruKullanici && $sifre === $dogruSifre) {
?>
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Giriş Başarılı</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">

<div class="container my-5">
    <div class="card shadow-sm p-4 text-center">
        <div class="alert alert-success">
            <h1 class="mb-3">Hoşgeldiniz <?php echo htmlspecialchars($ogrenciNo); ?></h1>
            <p class="mb-0">Giriş işlemi başarıyla gerçekleşti.</p>
        </div>

        <a href="index.html" class="btn btn-primary">Ana Sayfaya Dön</a>
    </div>
</div>

</body>
</html>
<?php
    } else {
        header("Location: login.html");
        exit();
    }

} else {
    header("Location: login.html");
    exit();
}
?>
