import Imagen from "./Imagen";
import "bootstrap/dist/css/bootstrap.min.css";

const Inicio = () => { //Define el componente funcional Inicio
  return (
    <div className="container">
      <h1 className="text-center my-4">Bienvenido a Biblioteca</h1>
      <p className="lead text-center">Encuentra los mejores libros.</p>
      <div className="row">
        <div className="col-md-6 col-12 mb-4">
          <div className="card h-100">
          <Imagen urlimg="https://t2.uc.ltmcdn.com/es/posts/6/5/2/los_mejores_libros_de_ciencia_ficcion_54256_600.webp" altText="Ciencia ficción y fantasía"/>
            <div className="card-body">  
              <h5 className="card-title">Ciencia ficción y fantasía</h5>
              <p className="card-text">
                Viaja a mundos extraordinarios llenos de tecnología avanzada,
                criaturas mágicas y aventuras épicas que desafían los límites de
                la imaginación.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 mb-4">
          <div className="card h-100">
            <Imagen urlimg="https://t2.uc.ltmcdn.com/es/posts/7/0/3/los_mejores_libros_de_misterio_53307_orig.jpg" altText="Misterio y suspenso" />
            <div className="card-body">
              <h5 className="card-title">Misterio y suspenso</h5>
              <p className="card-text">
                Descubre emocionantes tramas llenas de intriga, giros inesperados
                y personajes fascinantes que te mantendrán pegado a las páginas
                hasta el último momento.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 mb-4">
          <div className="card h-100">
            <Imagen urlimg="https://t2.uc.ltmcdn.com/es/posts/5/6/1/los_mejores_libros_de_amor_53165_orig.jpg" altText="Romance" />
            <div className="card-body">
              <h5 className="card-title">Romance</h5>
              <p className="card-text">
                Déjate llevar por historias apasionadas y románticas que exploran
                los lazos del corazón y celebran el poder del amor en todas sus
                formas y expresiones.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 mb-4">
          <div className="card h-100">
            <Imagen urlimg="https://t2.uc.ltmcdn.com/es/posts/5/2/3/los_mejores_libros_de_autoayuda_53325_600.webp" altText="Autoayuda" />
            <div className="card-body">
              <h5 className="card-title">Autoayuda</h5>
              <p className="card-text">
              Aprende sobre las vidas y experiencias de las personas más
              inspiradoras, desde líderes históricos hasta íconos de la cultura
              y del mundo del entretenimiento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio; // Exporta el componente Inicio para que pueda ser utilizado en otros archivos.
