import React, { useEffect } from 'react'; // Importa React y useEffect desde la biblioteca 'react'.
import { Link } from 'react-router-dom'; // Importa el componente Link desde 'react-router-dom'.

const Quienessomos = () => { // Define el componente funcional Quienessomos.
    const [lista, setLista] = React.useState([]); // Declara el estado 'lista' como un array vacío y la función 'setLista' para actualizarlo.

    // Se ejecuta una acción
    useEffect(() => { // Utiliza el hook useEffect para realizar efectos secundarios en el componente.
        obtenerDatos(); // Llama a la función obtenerDatos al renderizar el componente.
    }, []); // El segundo argumento del useEffect es un array vacío, lo que significa que el efecto solo se ejecutará una vez, al montar el componente.

    const obtenerDatos = async () => { // Declara una función asincrónica obtenerDatos.
        const datos = await fetch('https://jsonplaceholder.typicode.com/users'); // Realiza una solicitud GET a la API JSONPlaceholder para obtener datos de usuarios.
        const empleados = await datos.json(); // Convierte la respuesta de la solicitud en formato JSON.
        setLista(empleados); // Actualiza el estado 'lista' con los datos obtenidos de la API.
    };
    
      return (
        <div className="container">
          <header>
            <h3>Lista de Empleados:</h3>
          </header>
          <main className="row">
            <ul className="list-group">
              {lista.map((user) => ( //Mapea sobre el array 'lista' y renderiza un elemento de lista para cada usuario.
                <li key={user.id} className="list-group-item"> 
                  <Link to={`/quienessomos/${user.id}`}>{user.name} - {user.email}</Link> {/* Crea un enlace con la URL dinámica hacia la página de detalles del usuario y muestra su nombre y correo electrónico.*/}
                </li>
              ))}
            </ul>
          </main>
        </div>
      );
    };
    

export default Quienessomos // Exporta el componente Quienessomos para que pueda ser utilizado en otros archivos.