<?php
$host = 'localhost';
$dbname = 'myapp';
$user = 'root';
$pass = ''; // если есть пароль — укажи

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
} catch (PDOException $e) {
    die("Ошибка подключения к БД: " . $e->getMessage());
}
