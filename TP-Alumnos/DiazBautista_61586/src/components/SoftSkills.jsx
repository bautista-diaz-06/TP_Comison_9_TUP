import Card from "react-bootstrap/Card";
import { FaCheckCircle } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import { FaComments } from "react-icons/fa";

const SoftSkills = () => {
  const softSkills = [
    {
      softs: "Responsable",
      icono: <FaCheckCircle />,
    },
    {
      softs: "Autodidacta",
      icono: <FaBookOpen />,
    },
    {
      softs: "Trabajo en equipo",
      icono: <FaUsers />,
    },
    {
      softs: "Ayudo a otros",
      icono: <FaHandsHelping />,
    },
    {
      softs: "Dedicado",
      icono: <FaFire />,
    },
    {
      softs: "Comunicación clara",
      icono: <FaComments />,
    },
  ];

  return (
    <div>
      <section id="softskills">
        <h3>SoftSkills</h3>
        {softSkills.map((habBlandas) => (
          <p key={habBlandas}>
            <Card>
              <Card.Body>
                <Card.Title>{habBlandas.icono}</Card.Title>
                <Card.Subtitle>{habBlandas.softs}</Card.Subtitle>
              </Card.Body>
            </Card>
          </p>
        ))}
      </section>
    </div>
  );
};

export default SoftSkills;
