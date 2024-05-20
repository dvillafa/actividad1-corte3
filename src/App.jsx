//importaciones de los componentes
import './App.css'
import Error from './components/Error'
import Prestamo from './components/Prestamo';
import Inicio from './components/Inicio'
import Msj from './components/Msj'
import { BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Quienessomos from './components/Quienessomos'
import User from './components/User'
import ListarPrestamos from './components/ListarPrestamos';
import EliminarPrestamos from './components/EliminarPrestamos';
import EditarPrestamos from './components/EditarPrestamos';
import TodosPrestamos from './components/TodosPrestamos';

function App() {
  {/*Declaracion de constantes*/}
  const userName = 'Guest'
  const userId = 3444334666
  const url = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivXEXgJUr-WtHnzv75zCxrpUWsTNrmZJcN0MpZ986uqS3wZlPPJZYFmsjEYA6xAoiI9bhW1CphNgBby4tVBvBP-c7B3F8pGaDfwb7s8XiARWfMXBISr0frxhAvCl1edABPxGxs-nhT8oDU/s1600/banner-libros.jpg'
  const ULibrosPrestados = ['Crónica de una muerte anunciada, de Gabriel García Márquez','La odisea, de Homero']
  const librosRecomendados = ["Don Quijote de la Mancha, de Miguel de Cervantes", "Cien años de soledad, de Gabriel García Márquez", "1984, de George Orwell", "Orgullo y prejuicio, de Jane Austen", "El principito, de Antoine de Saint-Exupéry", "Matar a un ruiseñor, de Harper Lee", "El Gran Gatsby, de F. Scott Fitzgerald", "Crimen y castigo, de Fyodor Dostoevsky" , "El señor de los anillos, de J.R.R. Tolkien", "Harry Potter y la piedra filosofal, de J.K. Rowling"]
  
  return (
    <Router> {/*Inicia el enrutador BrowserRouter de react-router-dom*/}
      {/*Navbar*/}
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Biblioteca</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link to="/quienessomos" className="nav-link">Quiénes Somos</Link>
              </li>
              <li className="nav-item">
                <Link to="/mensaje" className="nav-link">Mensaje</Link>
              </li>
              <li className="nav-item">
                <Link to="/todosprestamos" className="nav-link">Prestamos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes> {/*Define las rutas y sus componentes correspondientes*/}
        <Route path='quienessomos/:id' element={<User/>}/>
        <Route path='/' element={<Inicio />}/>
        <Route path='quienessomos' element={<Quienessomos/>}/>
        {/*Define la ruta '/mensaje' con el componente Msj y pasa algunas props.*/}
        <Route path='mensaje' element={<Msj userName={userName} userId={userId} url={url} ULibrosPrestados={ULibrosPrestados} librosRecomendados={librosRecomendados} />}/>
        <Route path="prestamo" element={<Prestamo/>} />
        <Route path="listarprestamos" element={<ListarPrestamos/>} />
        <Route path="eliminarprestamos" element={<EliminarPrestamos/>} />
        <Route path="editarprestamos" element={<EditarPrestamos/>} />
        <Route path="todosprestamos" element={<TodosPrestamos/>} />
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  )
}
 
export default App // Exporta el componente App para que pueda ser utilizado en otros archivos.



