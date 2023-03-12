import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import LoginModal from "../home/LoginModal";



const Nosotros = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      

      <br />
      <br />
      <h1 className="tituwe">NOSOTROS SOMOS RSHOW</h1>
      
      <CardGroup className="divwe">
        <Card className="cardwe">
          <Card.Img variant="top" src="/Oscar.jpeg" className="img-fluid" />
          <Card.Body>
            <Card.Title>Oscar Guerrero</Card.Title>
            <Card.Text>
              Mi nombre es Oscar y soy el administrador y uno de los creadores
              del sitio. Amo la musica desde muy chiquito y me apasiona poder
              hacerles llegar los mejores shows a nuestros usuarios.
            </Card.Text>
          </Card.Body>
          {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
        </Card>
        <Card className="cardwe">
          <Card.Img
            variant="top"
            src="/bernardita.jpeg"
            className="img-fluid"
          />
          <Card.Body>
            <Card.Title>Bernardita Zarate</Card.Title>
            <Card.Text>
              Mi nombre es Bernardita y soy una de las creadoras y responsables
              de que ustedes puedan acceder a los mejores shows que llegan a
              nuestro pais.
            </Card.Text>
          </Card.Body>
          {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
        </Card>
        <Card className="cardwe">
          <Card.Img variant="top" src="/estefi.jpg" className="img-fluid" />
          <Card.Body>
            <Card.Title>Estefania Avila</Card.Title>
            <Card.Text>
              Soy Estefania y ademas de creadora soy la responsable del diseño y
              color de nuestra pagina. Tambien amo viajar tanto como la musica.
            </Card.Text>
          </Card.Body>
          {/* <Card.Footer>
         
        </Card.Footer> */}
        </Card>
        <Card className="cardwe">
          <Card.Img variant="top" src="/franco.jpeg" className="img-fluid" />
          <Card.Body>
            <Card.Title>Franco Herrera</Card.Title>
            
            <Card.Text>
              Mi nombre es Franco y soy el administrador y uno de los creadores
              del sitio. Amo la musica desde muy chiquito y me apasiona poder
              hacerles llegar los mejores shows a nuestros usuarios.
            </Card.Text>
          </Card.Body>
          {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
        </Card>
      </CardGroup>

      
    </div>
  );
};

export default Nosotros;
