const SoftSkills = () => {
  const softSkills = [
    "Responsable",
    "Autodidacta",
    "Trabajo en equipo",
    "Ayudo a otros",
    "Dedicado",
    "Comunicación clara",
  ];

  return (
    <div>
      <section id="softskills">
        <h3>SoftSkills</h3>
        {softSkills.map((habBlandas) => (
          <p key={habBlandas}>{habBlandas}</p>
        ))}
      </section>
    </div>
  );
};

export default SoftSkills;
