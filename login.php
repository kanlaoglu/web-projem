<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $kullanici = $_POST["kullanici"];
    $sifre = $_POST["sifre"];

    $ogrenciNo = "b251210588";
    $dogruKullanici = $ogrenciNo . "@sakarya.edu.tr";
    $dogruSifre = "251210588";

    if ($kullanici == $dogruKullanici && $sifre == $dogruSifre) {
        echo "<h1>Hoşgeldiniz " . $ogrenciNo . "</h1>";
    } else {
        header("Location: login.html");
        exit();
    }

} else {
    header("Location: login.html");
    exit();
}
?>