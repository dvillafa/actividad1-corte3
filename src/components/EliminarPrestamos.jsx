import { useState } from 'react'; // Importa el hook useState desde la biblioteca 'react'.
import db from '../firebase'; // Importa la instancia de Firebase desde el archivo firebase.js ubicado en la carpeta firebase.

const EliminarPrestamos = () => { // Define el componente funcional EliminarPrestamos.
  const [id, setId] = useState(''); // Declara el estado 'id' como una cadena vacía y la función 'setId' para actualizarlo.

  const eliminarPrestamo = async (e) => { // Define una función asincrónica eliminarPrestamo que se ejecutará al enviar el formulario.
    e.preventDefault(); // Previene el comportamiento por defecto del formulario al enviarlo.

    if (!id) { // Verifica si el campo de ID está vacío.
      alert('Llenar el campo es obligatorio'); // Muestra una alerta si el campo de ID está vacío.
      return; // Sale de la función eliminarPrestamo si el campo de ID está vacío.
    }

    const docRef = db.collection('prestamos').doc(id); // Obtiene una referencia al documento en la colección 'prestamos' con el ID especificado.
    const doc = await docRef.get(); // Obtiene el documento correspondiente al ID especificado.

    if (!doc.exists) { // Verifica si el documento existe.
      alert('El préstamo con el ID proporcionado no existe'); // Muestra una alerta si el préstamo con el ID especificado no existe.
      return; // Sale de la función eliminarPrestamo si el documento no existe.
    }
    
    try { // Intenta realizar la eliminación del préstamo en Firestore.
      await db.collection('prestamos').doc(id).delete(); // Elimina el documento con el ID especificado de la colección 'prestamos' en Firestore.
      setId(''); // Limpia el campo de ID después de eliminar el préstamo con éxito.
      alert('Préstamo eliminado exitosamente'); // Muestra una alerta indicando que el préstamo se eliminó con éxito.
    } catch (error) { // Captura cualquier error que pueda ocurrir durante la eliminación del préstamo.
      console.error(error); // Imprime el error en la consola del navegador.
      alert('Error al eliminar el préstamo'); // Muestra una alerta indicando que se produjo un error al intentar eliminar el préstamo.
    }
  };

  return (
    <div className="container">
      <h3 className="text-center my-4">Eliminar préstamo</h3>
      <form onSubmit={eliminarPrestamo} className="needs-validation" noValidate>
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
          <div className="col-12">
            <button type="submit" className="btn btn-danger w-100">Eliminar</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EliminarPrestamos; // Exporta el componente EliminarPrestamos para que pueda ser utilizado en otros archivos.