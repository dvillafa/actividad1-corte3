import { useState } from 'react'; // Importa useState desde la biblioteca 'react'.
import db from '../firebase'; // Importa la instancia de Firebase desde el archivo firebase.js ubicado en la carpeta firebase.

const Prestamo = () => { // Define el componente funcional Prestamo.
  const [nombre, setNombre] = useState(''); // Declara el estado 'nombre' y la función 'setNombre' para actualizarlo, inicializado con una cadena vacía.
  const [apellido, setApellido] = useState(''); // Declara el estado 'apellido' y la función 'setApellido' para actualizarlo, inicializado con una cadena vacía.
  const [titulo, setTitulo] = useState(''); // Declara el estado 'titulo' y la función 'setTitulo' para actualizarlo, inicializado con una cadena vacía.
  const [autor, setAutor] = useState(''); // Declara el estado 'autor' y la función 'setAutor' para actualizarlo, inicializado con una cadena vacía.
  const [editorial, setEditorial] = useState(''); // Declara el estado 'editorial' y la función 'setEditorial' para actualizarlo, inicializado con una cadena vacía.
  const [año, setAño] = useState(''); // Declara el estado 'año' y la función 'setAño' para actualizarlo, inicializado con una cadena vacía.

  const registrarPrestamo = async (e) => { // Declara una función asincrónica registrarPrestamo que se ejecuta al enviar el formulario.
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario de recargar la página al enviar.

    // Validaciones
    if (!nombre || !apellido || !titulo || !autor || !editorial || !año) { // Comprueba si alguno de los campos está vacío.
      alert('Todos los campos son obligatorios'); // Muestra una alerta indicando que todos los campos son obligatorios.
      return; // Detiene la ejecución de la función.
    }
    if (isNaN(año) || año < 1000 || año > new Date().getFullYear()) { // Comprueba si el año no es un número válido o está fuera del rango permitido.
      alert('El año debe ser un número válido entre 1000 y el año actual'); // Muestra una alerta indicando que el año debe ser válido.
      return; // Detiene la ejecución de la función.
    }

    // Comprobar si el usuario ya está registrado
    const userRef = db.collection('prestamos').where('nombre', '==', nombre).where('apellido', '==', apellido); // Crea una referencia a la colección 'prestamos' filtrando por nombre y apellido.
    const userDoc = await userRef.get(); // Obtiene los documentos que coinciden con la consulta.
    if (!userDoc.empty) { // Comprueba si la consulta no devuelve documentos (es decir, si el usuario ya está registrado).
      alert('El usuario ya está registrado'); // Muestra una alerta indicando que el usuario ya está registrado.
      return; // Detiene la ejecución de la función.
    }

    // Registrar préstamo en Firestore
    await db.collection('prestamos').add({ // Agrega un nuevo documento a la colección 'prestamos' con los datos del préstamo.
      nombre,
      apellido,
      titulo,
      autor,
      editorial,
      año,
    });

    // Limpiar campos después de registrar el préstamo
    setNombre(''); // Limpia el campo 'nombre' estableciéndolo como una cadena vacía.
    setApellido(''); // Limpia el campo 'apellido' estableciéndolo como una cadena vacía.
    setTitulo(''); // Limpia el campo 'titulo' estableciéndolo como una cadena vacía.
    setAutor(''); // Limpia el campo 'autor' estableciéndolo como una cadena vacía.
    setEditorial(''); // Limpia el campo 'editorial' estableciéndolo como una cadena vacía.
    setAño(''); // Limpia el campo 'año' estableciéndolo como una cadena vacía.
  };

  return (
    <div className="container">
      <h3 className="text-center my-4">Registrar préstamo</h3>
      <form onSubmit={registrarPrestamo} className="needs-validation" noValidate> 
        <div className="row g-3">
          <div className="col-sm-6">
            <label htmlFor="nombre" className="form-label">Nombre:</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value.trim())}
              required
            />
          </div>
          <div className="col-sm-6">
            <label htmlFor="apellido" className="form-label">Apellido:</label>
            <input
              type="text"
              className="form-control"
              id="apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value.trim())}
              required
            />
          </div>
          <div className="col-sm-6">
            <label htmlFor="titulo" className="form-label">Título:</label>
            <input
              type="text"
              className="form-control"
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value.trim())}
              required
            />
          </div>
          <div className="col-sm-6">
            <label htmlFor="autor" className="form-label">Autor:</label>
            <input
              type="text"
              className="form-control"
              id="autor"
              value={autor}
              onChange={(e) => setAutor(e.target.value.trim())}
              required
            />
          </div>
          <div className="col-sm-6">
            <label htmlFor="editorial" className="form-label">Editorial:</label>
            <input
              type="text"
              className="form-control"
              id="editorial"
              value={editorial}
              onChange={(e) => setEditorial(e.target.value.trim())}
              required
            />
          </div>
          <div className="col-sm-6">
            <label htmlFor="año" className="form-label">Año:</label>
            <input
              type="number"
              className="form-control"
              id="año"
              value={año}
              onChange={(e) => setAño(e.target.value)}
              required
            /></div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">Registrar</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Prestamo; // Exporta el componente Prestamo para que pueda ser utilizado en otros archivos.