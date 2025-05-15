<?php
require 'db.php';
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username']);
    $password = $_POST['password'];

    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->execute([$username]);
    $user = $stmt->fetch();

    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user'] = $user['username'];
        header('Location: profile.php');
        exit;
    } else {
        echo "Неверные данные!";
    }
}
?>

<form method="POST">
  <h2>Вход</h2>
  <input type="text" name="username" placeholder="Имя пользователя" required><br>
  <input type="password" name="password" placeholder="Пароль" required><br>
  <button type="submit">Войти</button>
</form>
