import Estudios from "./Estudios";
import Idiomas from "./Idiomas";
import Proyectos from "./Proyectos";
import SoftSkills from "./SoftSkills";


Estudios;

const Main = () => {
  return (
    <div className="Main">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
      reprehenderit maiores eos! Autem, qui, iure repellendus voluptate
      voluptatem architecto deserunt vel reprehenderit, fugiat quae cumque
      adipisci praesentium repellat neque totam. Ipsam alias tempora possimus
      velit reprehenderit, explicabo exercitationem dolorem. Maxime recusandae
      veniam tenetur quidem velit sint molestiae vel fugiat ad. Obcaecati veniam
      facilis nulla exercitationem quaerat cumque ullam deleniti quo.
      <Estudios />
      <SoftSkills />
      <Proyectos />
      <Idiomas />
    </div>
  );
};

export default Main;
