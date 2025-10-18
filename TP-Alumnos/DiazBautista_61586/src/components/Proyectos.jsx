import Card from "react-bootstrap/Card";

const Proyectos = () => {
  return (
    <div className="containerCards">
      <section id="proyectos">
        <h3>Proyectos</h3>
        <div className="containerCard">
          <Card className="proyectoCard">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body className="proyectoCardBody">
              <Card.Title>E-Commerce Farmacia</Card.Title>
              <Card.Text>Tecnologias Utilizadas:</Card.Text>
              <Card.Img
                variant="bottom"
                src="html.png"
                className="imagenTecnologia"
              />
              <Card.Img
                variant="bottom"
                src="css.png"
                className="imagenTecnologia"
              />
              <Card.Img
                variant="bottom"
                src="js.png"
                className="imagenTecnologia"
              />
              <Card.Img
                variant="bottom"
                src="node.png"
                className="imagenTecnologia"
              />
              <Card.Img
                variant="bottom"
                src="express.png"
                className="imagenTecnologia"
              />
              <Card.Img
                variant="bottom"
                src="mysql.png"
                className="imagenTecnologia"
              />
            </Card.Body>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Proyectos;
