<?php
// 1. Cabeceras para CORS y JSON (¡MUY IMPORTANTE!)
// Esto permite que tu app de React (ej. localhost:5173) hable con tu API (localhost:80)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// 2. Detalles de la conexión
$servername = "localhost";
$username = "root";       // Usuario por defecto de XAMPP
$password = "";           // Contraseña por defecto de XAMPP
$dbname = "db_angostura"; // El nombre de tu base de datos

// 3. Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// 4. Verificar conexión
if ($conn->connect_error) {
  // Si falla, envía un error JSON
  echo json_encode(["error" => "Conexión fallida: " . $conn->connect_error]);
  exit();
}

// 5. Asegurar que los datos se lean como UTF-8 (para tildes, etc.)
$conn->set_charset("utf8mb4");

// 6. Preparar la consulta SQL
$sql = "SELECT id, nombre, nombreCientifico, tipo, dondeVive, comoEs, queCome, reproduccion, datoCurioso, imageURL FROM animales";
$result = $conn->query($sql);

// 7. Procesar los resultados
$animales = array();

if ($result->num_rows > 0) {
  // Obtener cada fila como un array asociativo
  while($row = $result->fetch_assoc()) {
    $animales[] = $row;
  }
}

// 8. Devolver los resultados como JSON
echo json_encode($animales);

// 9. Cerrar la conexión
$conn->close();

?>