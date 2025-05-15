<?php
require 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username']);
    $password = $_POST['password'];

    if (!$username || !$password) {
        die('Введите имя и пароль');
    }

    $hash = password_hash($password, PASSWORD_DEFAULT);

    $stmt = $pdo->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    try {
        $stmt->execute([$username, $hash]);
        echo "Регистрация успешна. <a href='login.php'>Войти</a>";
    } catch (PDOException $e) {
        echo "Ошибка: пользователь уже существует.";
    }
}
?>

<form method="POST">
  <h2>Регистрация</h2>
  <input type="text" name="username" placeholder="Имя пользователя" required><br>
  <input type="password" name="password" placeholder="Пароль" required><br>
  <button type="submit">Зарегистрироваться</button>
</form>
