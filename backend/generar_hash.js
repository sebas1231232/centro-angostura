// backend/generar_hash.js
const bcrypt = require('bcrypt');
const saltRounds = 10;

// ---- ¡CAMBIA ESTOS VALORES! ----
const miPasswordPlana = 'admin12345'; // La contraseña que QUIERES usar
const miEmail = 'admin@angostura.cl'; // El email que QUIERES usar
// ---------------------------------

console.log(`Generando hash para: ${miEmail}`);

bcrypt.hash(miPasswordPlana, saltRounds, function(err, hash) {
    if (err) {
        console.error("Error generando el hash:", err);
        return;
    }

    console.log("\n¡Hash generado con éxito!");
    console.log("------------------------------------------------------");
    console.log("Copia este hash (el texto largo que empieza con $2b):");
    console.log(hash);
    console.log("------------------------------------------------------");

    console.log("\nAhora, ve a phpMyAdmin y ejecuta este comando SQL:");
    console.log(
      `INSERT INTO administradores (email, password_hash) VALUES ('${miEmail}', '${hash}');`
    );
});