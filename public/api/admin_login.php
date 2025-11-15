<?php
// public/api/admin_login.php (Versión Limpia)

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
  exit(0);
}

$data = json_decode(file_get_contents('php://input'));

if (!$data || !isset($data->email) || !isset($data->password)) {
  echo json_encode(['success' => false, 'message' => 'Datos incompletos.']);
  exit();
}

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db_angostura";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  echo json_encode(['success' => false, 'message' => 'Error de conexión a la BD.']);
  exit();
}

$conn->set_charset("utf8mb4");

$email = $data->email;
$password_ingresada = $data->password;
$response = ['success' => false];

$stmt = $conn->prepare("SELECT password_hash FROM usuarios WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows == 1) {
  $row = $result->fetch_assoc();
  $hash_guardado = $row['password_hash'];

  if (password_verify($password_ingresada, $hash_guardado)) {
    $response['success'] = true;
  } else {
    $response['message'] = 'Email o contraseña incorrectos.';
  }
} else {
  $response['message'] = 'Email o contraseña incorrectos.';
}

echo json_encode($response);
$stmt->close();
$conn->close();
?>