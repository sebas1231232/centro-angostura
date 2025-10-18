// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";

// --- PEGA AQUÍ TU CONFIGURACIÓN DE FIREBASE ---
// La que copiaste al crear tu app web
const firebaseConfig = {
  apiKey: "AIzaSy...xxxxxxxxxxxx",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "xxxxxxxxxxxx",
  appId: "1:xxxxxxxxxxxx:web:xxxxxxxxxxxx"
};
// ---------------------------------------------

// Inicializar servicios
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); // Aunque ahora falle, lo dejamos listo

// Referencias de la base de datos
const animalsCollection = collection(db, "animales");

// --- Funciones de Base de Datos ---

// Obtener todos los animales
export const fetchAnimals = async () => {
  const querySnapshot = await getDocs(animalsCollection);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Guardar (Crear o Editar) un animal
// Usamos setDoc con merge:true para que sirva para crear y actualizar
export const saveAnimal = (animalData) => {
  const animalRef = doc(db, "animales", animalData.id);
  // Usamos merge: true para no sobrescribir todo el documento si solo actualizamos
  // y para crearlo si no existe.
  return updateDoc(animalRef, animalData, { merge: true });
};

// Crear un nuevo animal (usando setDoc)
export const createAnimal = (animalData) => {
    // Generamos un ID en el cliente o dejamos que Firestore lo haga
    const newDocRef = doc(animalsCollection, animalData.id); // Usamos el ID que ya trae (uuid)
    return setDoc(newDocRef, animalData);
}

// Borrar un animal
export const deleteAnimal = (animalId) => {
  const animalRef = doc(db, "animales", animalId);
  return deleteDoc(animalRef);
};

// --- Funciones de Autenticación ---

export const loginAdmin = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logoutAdmin = () => {
  return signOut(auth);
};

// Observador para saber si el admin está logueado
export const onAdminStateChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};