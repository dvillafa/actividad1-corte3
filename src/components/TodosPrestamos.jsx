import Prestamo from './Prestamo'; // Importa el componente Prestamo desde el archivo './Prestamo'.
import ListarPrestamos from './ListarPrestamos'; // Importa el componente ListarPrestamos desde el archivo './ListarPrestamos'.
import EliminarPrestamos from './EliminarPrestamos'; // Importa el componente EliminarPrestamos desde el archivo './EliminarPrestamos'.
import EditarPrestamos from './EditarPrestamos'; // Importa el componente EditarPrestamos desde el archivo './EditarPrestamos'.

const TodosPrestamos = () => { // Define el componente funcional TodosPrestamos.
  return ( // Devuelve un fragmento que contiene todos los componentes relacionados con la gestión de préstamos.
    <div>
      <Prestamo />
      <ListarPrestamos />
      <EliminarPrestamos />
      <EditarPrestamos />
    </div>
  );
};

export default TodosPrestamos; // Exporta el componente TodosPrestamos para que pueda ser utilizado en otros archivos.