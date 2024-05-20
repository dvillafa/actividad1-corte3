import React from 'react'; // Importa React para poder utilizar sus características.
import { useParams } from 'react-router-dom'; // Importa useParams de react-router-dom para acceder a los parámetros de la URL.

const User = () => { // Define el componente funcional User.
    const { id } = useParams(); // Extrae el parámetro 'id' de la URL utilizando useParams de react-router-dom.
    const [empleado, setEmpleado] = React.useState([]); // Declara el estado 'empleado' y su función setter 'setEmpleado' utilizando React.useState, inicializado en un array vacío.

    React.useEffect(() => { // Define un efecto que se ejecuta después de que el componente se monta.
        obtenerDato(); // Llama a la función obtenerDato.
    }); // El efecto se ejecuta solo una vez después del montaje del componente, ya que el array de dependencias está vacío.

    const obtenerDato = async () => { // Declara la función obtenerDato que realiza una solicitud GET para obtener los datos del empleado.
      const dato = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`); // Realiza una solicitud GET a la API con el ID del empleado.
      const emp = await dato.json(); // Convierte la respuesta en formato JSON.
      setEmpleado(emp); // Actualiza el estado 'empleado' con los datos obtenidos.
    };
  
    return (
      <div className="container">
        <header>
          <h2>Datos del Empleado</h2>
        </header>
        <main className="row">
          <section>
            <h3>{empleado.name}</h3>
            <p>Website: {empleado.website} - Username: {empleado.username}</p>
          </section>
        </main>
      </div>
    );
  };
  
  export default User; // Exporta el componente User para su uso en otros archivos.