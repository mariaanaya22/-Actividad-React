const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  <Encabezado/>
  <Cuerpo/>
  <Piernas/>
  <Contacto/>
 
</> 
    );  
function  Encabezado(){
 return(
    <>
<nav className="navbar navbar-expand-lg  ">
  <div className="container-fluid bg-white" >
    <a className="navbar-brand text-dark" href="#">Menu</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent text-dark">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
        <li className="nav-item dropdown">
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">sobre nosotros</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Quienes somos</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
     
        <button className="btn btn-outline-success border-white bg-dark text-white" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </> );
} 

function Cuerpo(){
  return(
    <>
    <article className="article">
 <h1 className= "bienvenido">WELCOMEN</h1>

<div className="card w-40 mt-5">
  <div className="card-body">
    <h5 className="card-title">NUESTRA TIENDA CALL</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-dark">Button</a>
  </div>
</div>
</article>
    </>
  );
}


function Piernas(){
  return(
    <>

<div className="d-flex justify-content-around">
  <div className="card" style={{ width: "18rem" }}>
    <img src="https://images.pexels.com/photos/2643698/pexels-photo-2643698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Caracteristicas</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
    </ul>
    <div className="card-body">
      <a href="#" className="card-link">Card link</a>
      <a href="#" className="card-link">Another link</a>
    </div>
  </div>

  <div className="card" style={{ width: "18rem" }}>
    <img src="https://images.pexels.com/photos/2643698/pexels-photo-2643698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Caracteristicas</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
    </ul>
    <div className="card-body">
      <a href="#" className="card-link">Card link</a>
      <a href="#" className="card-link">Another link</a>
    </div>
  </div>
</div>



  <div className="d-flex justify-content-around">
  <div className="card" style={{ width: "18rem" }}>
    <img src="https://img.freepik.com/vector-gratis/smartphone-vistas-diferentes-estilo-realista_23-2147849865.jpg?t=st=1717556413~exp=1717560013~hmac=930211b19179f9ae5151582ffa6b61079fe42635b755d30d11baa914b6a68901&w=740" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Caracteristicas</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
    </ul>
    <div className="card-body">
      <a href="#" className="card-link">Card link</a>
      <a href="#" className="card-link">Another link</a>
    </div>
  </div>

  <div className="card" style={{ width: "18rem" }}>
    <img src="https://img.freepik.com/vector-gratis/smartphone-vistas-diferentes-estilo-realista_23-2147849865.jpg?t=st=1717556413~exp=1717560013~hmac=930211b19179f9ae5151582ffa6b61079fe42635b755d30d11baa914b6a68901&w=740" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Caracteristicas</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
    </ul>
    <div className="card-body">
      <a href="#" className="card-link">Card link</a>
      <a href="#" className="card-link">Another link</a>
    </div>
  </div>
</div>
</>
    );
    }

    function Contacto(){
      return(
        <>
 <h1 className= "bienvenido">CONTACTO</h1>
    <form className="row g-3">
      <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label text-white">Email</label>
        <input type="email" className="form-control" id="inputEmail4" />
      </div>

      <div className="col-12">
        <label htmlFor="inputAddress" className="form-label text-white border-dark">Address</label>
        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
      </div>
      <div className="col-12">
        <label htmlFor="inputAddress2" className="form-label text-white border-dark">Address 2</label>
        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputCity" className="form-label text-white border-dark">City</label>
        <input type="text" className="form-control" id="inputCity" />
      </div>
      <div className="col-md-4">
        <label htmlFor="inputState" className="form-label text-white border-dark">State</label>
        <select id="inputState" className="form-select">
          <option selected>Choose...</option>
          <option>...</option>
        </select>
      </div>
      <div className="col-md-2">
        <label htmlFor="inputZip" className="form-label text-white border-dark">Zip</label>
        <input type="text" className="form-control" id="inputZip" />
      </div>
      <div className="col-12">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck" />
          <label className="form-check-label text-white border-dark" htmlFor="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-dark text-white">Registrate</button>
      </div>
    </form>
</>
      );
    }

  

