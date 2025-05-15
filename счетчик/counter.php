<?php
session_start();

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if (!isset($_SESSION['count'])) {
    $_SESSION['count'] = 0;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    if (isset($data['action'])) {
        if ($data['action'] === 'plus') {
            $_SESSION['count'] += 1;
        } elseif ($data['action'] === 'minus') {
            $_SESSION['count'] -= 1;
        }
    }
}

echo json_encode([
    'count' => $_SESSION['count'],
    'session_id' => session_id() // для отладки
]);
