import Card from "react-bootstrap/Card";

const Proyectos = () => {
  return (
    <div style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <h3>Proyectos</h3>
      <Card style={{ width: "18rem", backgroundColor: "gray", borderRadius: "1rem"}}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body style={{backgroundColor: "black"}}>
          <Card.Title style={{fontFamily: "monospace", fontWeight: "bolder"}}>E-Commerce Farmacia</Card.Title>
          <Card.Text style={{fontFamily: "monospace", fontWeight: "bolder"}}>Tecnologias Utilizadas:</Card.Text>
          <Card.Img
            variant="bottom"
            src="html.png"
            style={{ width: "2rem", height: "2rem", padding: "0.5rem", borderRadius: "1rem"}}
          />
          <Card.Img
            variant="bottom"
            src="css.png"
            style={{ width: "2rem", height: "2rem", padding: "0.5rem", borderRadius: "1rem"}}
          />
          <Card.Img
            variant="bottom"
            src="js.png"
            style={{ width: "2rem", height: "2rem", padding: "0.5rem", borderRadius: "1rem"}}
          />
          <Card.Img
            variant="bottom"
            src="node.png"
            style={{ width: "2rem", height: "2rem", padding: "0.5rem", borderRadius: "1rem"}}
          />
          <Card.Img
            variant="bottom"
            src="express.png"
            style={{ width: "2rem", height: "2rem", padding: "0.5rem", borderRadius: "1rem"}}
          />
          <Card.Img
            variant="bottom"
            src="mysql.png"
            style={{ width: "2rem", height: "2rem", padding: "0.5rem", borderRadius: "1rem"}}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Proyectos;
