<?php
session_start();
if (!isset($_SESSION['user'])) {
    header('Location: login.php');
    exit;
}
?>

<h2>Добро пожаловать, <?= htmlspecialchars($_SESSION['user']) ?>!</h2>
<a href="logout.php">Выйти</a>
