import Imagen from "./Imagen" // Importa el componente Imagen desde el archivo Imagen.js ubicado en la misma carpeta

const Msj = ({ userName, userId, url, ULibrosPrestados, librosRecomendados }) => { // Define el componente funcional Msj que recibe props
  return (
    <div className="container">
    <section className="col-12 col-md-12 col-lg-12 mx-auto">
      <h3>Saludos: {userName}</h3>
      <h4>id: {userId}</h4>
      <Imagen urlimg={url} />
      <h4>Ultimos Libros en préstamo:</h4>
      <ul>
        {ULibrosPrestados.map((book, index) => ( // Mapea sobre el array ULibrosPrestados y renderiza un elemento de lista para cada libro
          <li key={index}>{book}</li>
        ))}
      </ul>
      <h4>Top Libros solicitados:</h4>
      <ul>
        {librosRecomendados.map((book, index) => (  // Mapea sobre el array librosRecomendados y renderiza un elemento de lista para cada libro.
          <li key={index}>{book}</li>
        ))}
      </ul>
    </section>
    </div>
  )
}

export default Msj // Exporta el componente Msj para que pueda ser utilizado en otros archivos.