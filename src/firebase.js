// Importa las funciones que necesitas de los SDK que necesitas
import firebase from "firebase/app"; // Importa el módulo firebase de la biblioteca firebase.
import "firebase/firestore"; // Importa el módulo de Firestore de firebase

// Configuración de tu aplicación web Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDH_1h_nj4OWStn7W4UNGTSh6-SHIgHoys",
  authDomain: "actividad1c3.firebaseapp.com",
  projectId: "actividad1c3",
  storageBucket: "actividad1c3.appspot.com",
  messagingSenderId: "509054049070",
  appId: "1:509054049070:web:bb6c422d666cb218c3f8bf"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig); //Inicializa la aplicación de Firebase con la configuración proporcionada.
const db = firebase.firestore(); // Obtiene una instancia de Firestore y la asigna a la constante db.

export default db; // Exporta la instancia de Firestore para que pueda ser utilizada en otros archivos.