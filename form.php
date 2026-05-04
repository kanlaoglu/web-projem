<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $adsoyad = htmlspecialchars($_POST["adsoyad"]);
    $email = htmlspecialchars($_POST["email"]);
    $telefon = htmlspecialchars($_POST["telefon"]);
    $cinsiyet = htmlspecialchars($_POST["cinsiyet"]);
    $ilgiler = isset($_POST["ilgiler"]) ? $_POST["ilgiler"] : [];
    $sehir = htmlspecialchars($_POST["sehir"]);
    $dogumTarihi = htmlspecialchars($_POST["dogumTarihi"]);
    $mesaj = htmlspecialchars($_POST["mesaj"]);

} else {
    header("Location: iletisim.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Form Sonuçları</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<div class="container my-5">
    <h1 class="mb-4">Gönderilen Bilgiler</h1>

    <table class="table table-bordered">
        <tr>
            <th>Ad Soyad</th>
            <td><?php echo $adsoyad; ?></td>
        </tr>
        <tr>
            <th>E-posta</th>
            <td><?php echo $email; ?></td>
        </tr>
        <tr>
            <th>Telefon</th>
            <td><?php echo $telefon; ?></td>
        </tr>
        <tr>
            <th>Cinsiyet</th>
            <td><?php echo $cinsiyet; ?></td>
        </tr>
        <tr>
            <th>İlgi Alanları</th>
            <td>
                <?php 
                if (!empty($ilgiler)) {
                    echo htmlspecialchars(implode(", ", $ilgiler));
                } else {
                    echo "Seçilmedi";
                }
                ?>
            </td>
        </tr>
        <tr>
            <th>Şehir</th>
            <td><?php echo $sehir; ?></td>
        </tr>
        <tr>
            <th>Doğum Tarihi</th>
            <td><?php echo $dogumTarihi; ?></td>
        </tr>
        <tr>
            <th>Mesaj</th>
            <td><?php echo $mesaj; ?></td>
        </tr>
    </table>

    <a href="iletisim.html" class="btn btn-primary">Geri Dön</a>
</div>

</body>
</html>