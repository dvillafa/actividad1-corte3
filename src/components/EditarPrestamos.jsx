import { useState } from 'react'; // Importa la función useState desde React para gestionar el estado del componente.
import db from '../firebase'; // Importa el objeto db que representa la instancia de Firebase Firestore desde '../firebase'.

const EditarPrestamos = () => { // Define el componente funcional EditarPrestamos.
  const [id, setId] = useState(''); // Declara el estado 'id' y su función setter 'setId' utilizando useState, inicializado en un string vacío.
  const [nombre, setNombre] = useState(''); // Declara el estado 'nombre' y su función setter 'setNombre' utilizando useState, inicializado en un string vacío.
  const [apellido, setApellido] = useState(''); // Declara el estado 'apellido' y su función setter 'setApellido' utilizando useState, inicializado en un string vacío.
  const [titulo, setTitulo] = useState(''); // Declara el estado 'titulo' y su función setter 'setTitulo' utilizando useState, inicializado en un string vacío.
  const [autor, setAutor] = useState(''); // Declara el estado 'autor' y su función setter 'setAutor' utilizando useState, inicializado en un string vacío.
  const [editorial, setEditorial] = useState(''); // Declara el estado 'editorial' y su función setter 'setEditorial' utilizando useState, inicializado en un string vacío.
  const [año, setAño] = useState(''); // Declara el estado 'año' y su función setter 'setAño' utilizando useState, inicializado en un string vacío.

  const editarPrestamo = async (e) => { // Declara la función editarPrestamo que se ejecuta al enviar el formulario.
    e.preventDefault(); // Previene el comportamiento por defecto del envío del formulario.

    // Realiza validaciones de los campos del formulario.
    if (!id || !nombre || !apellido || !titulo || !autor || !editorial || !año) {
      alert('Todos los campos son obligatorios'); // Muestra una alerta si algún campo está vacío.
      return; // Detiene la ejecución de la función.
    }
    if (isNaN(año) || año < 1000 || año > new Date().getFullYear()) {
      alert('El año debe ser un número válido entre 1000 y el año actual'); // Muestra una alerta si el año no es válido.
      return; // Detiene la ejecución de la función.
    }

    // Verifica si el documento existe en Firestore.
    const docRef = db.collection('prestamos').doc(id);
    const doc = await docRef.get();
    if (!doc.exists) {
      alert('El préstamo con el ID proporcionado no existe'); // Muestra una alerta si el préstamo no existe.
      return; // Detiene la ejecución de la función.
    }
    
    // Verifica si ya existe un usuario registrado con el mismo nombre y apellido.
    const userRef = db.collection('prestamos').where('nombre', '==', nombre).where('apellido', '==', apellido);
    const userDoc = await userRef.get();
    if (!userDoc.empty) {
      alert('El usuario ya está registrado'); // Muestra una alerta si el usuario ya está registrado.
      return; // Detiene la ejecución de la función.
    }

    try {
      // Actualiza el documento en Firestore con los nuevos datos.
      await docRef.update({
        nombre,
        apellido,
        titulo,
        autor,
        editorial,
        año,
      });
      // Limpia los campos del formulario.
      setId('');
      setNombre('');
      setApellido('');
      setTitulo('');
      setAutor('');
      setEditorial('');
      setAño('');
      alert('Préstamo editado exitosamente'); // Muestra una alerta indicando que el préstamo fue editado exitosamente.
    } catch (error) {
      console.error(error);
      alert('Error al editar el préstamo'); // Muestra una alerta si ocurre un error al editar el préstamo.
    }
  };

  return (
    <div className="container">
      <h3 className="text-center my-4">Editar préstamo</h3>
      <form onSubmit={editarPrestamo} className="needs-validation" noValidate>
        <div className="row g-3">
          <div className="col-12">
            <label htmlFor="id" className="form-label">ID de préstamo:</label>
            <input
              type="text"
              className="form-control"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value.trim())}
              required
            />
          </div>
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
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">Editar préstamo</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditarPrestamos; // Exporta el componente EditarPrestamos para su uso en otros archivos.