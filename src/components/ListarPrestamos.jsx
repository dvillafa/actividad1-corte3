import { useState, useEffect } from 'react';
import db from '../firebase';

const ListarPrestamos = () => {
  const [prestamos, setPrestamos] = useState([]); //Inicializa el estado prestamos como un array vacío y la función setPrestamos para actualizarlo.

  useEffect(() => { // Utiliza el hook useEffect para ejecutar efectos secundarios después de que el componente se haya renderizado
    const unsubscribe = db.collection('prestamos').onSnapshot((querySnapshot) => { //Crea una escucha en tiempo real en la colección prestamos de Firestore utilizando el método onSnapshot. La función callback recibe un objeto querySnapshot que contiene los documentos actuales de la colección
      
      //Crea un nuevo array prestamosData con cada documento de la colección prestamos
      const prestamosData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPrestamos(prestamosData);
    });

    return unsubscribe; // Devuelve la función unsubscribe del hook useEffect para detener la escucha cuando el componente se desmonte.
  }, []);

  return (
    <div className="container">
      <h3 className="text-center my-4">Listado de préstamos</h3>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>ID Prestamo</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Título</th>
              <th>Autor</th>
              <th>Editorial</th>
              <th>Año</th>
            </tr>
          </thead>
          <tbody>
            {prestamos.map((prestamo) => (
              <tr key={prestamo.id}>
                <td>{prestamo.id}</td>
                <td>{prestamo.nombre}</td>
                <td>{prestamo.apellido}</td>
                <td>{prestamo.titulo}</td>
                <td>{prestamo.autor}</td>
                <td>{prestamo.editorial}</td>
                <td>{prestamo.año}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListarPrestamos; // Exporta el componente ListarPrestamos para que pueda ser utilizado en otros archivos.