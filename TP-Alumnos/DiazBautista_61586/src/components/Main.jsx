import Estudios from "./Estudios";
import Idiomas from "./Idiomas";
import Proyectos from "./Proyectos";
import SoftSkills from "./SoftSkills";

const Main = () => {
  return (
    <div className="Main">
      Hola! Soy Bautista Díaz, tengo 19 años y soy de Argentina. Hace algo más
      de un año comencé a adentrarme en el mundo del desarrollo de software. Con
      el tiempo, y a través de la práctica y los proyectos personales, descubrí
      que realmente me apasiona. Actualmente me desempeño como desarrollador
      backend aún en aprendizaje, aunque también me interesa aprender frontend para mis proyectos
      personales y, en el futuro, posiblemente convertirme en desarrollador fullstack.
      <Estudios />
      <SoftSkills />
      <Proyectos />
      <Idiomas />
    </div>
  );
};

export default Main;
