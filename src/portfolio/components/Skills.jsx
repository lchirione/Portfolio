export const Skills = () => {
  const styleFront = {
    backgroundImage: `url("https://i.ibb.co/xmvtJZG/1.webp")`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  };

  const styleBack = {
    backgroundImage: `url("https://i.ibb.co/gVtyvTd/2.jpg")`,
  };

  return (
    <div className="container-section animate__animated animate__slideInUp">
      <div className="skills__container">
        <section className="section-frontend" style={styleFront}>
          <h3>Frontend</h3>
          <div className="section-skills">
            <h4>
              <i className="fas fa-check-circle"></i> HTML
            </h4>
            <h4>
              <i className="fas fa-check-circle"></i> CSS / SASS
            </h4>
            <h4>
              <i className="fas fa-check-circle"></i> Javascript
            </h4>
            <h4>
              <i className="fas fa-check-circle"></i> Jquery
            </h4>
            <h4>
              <i className="fas fa-check-circle"></i> Bootstrap
            </h4>
            <h4>
              <i className="fas fa-check-circle"></i> React / Redux
            </h4>
            <h4>
              <i className="fas fa-check-circle"></i> Git / Github
            </h4>
          </div>
        </section>

        <section className="section-backend" style={styleBack}>
          <h3>Backend</h3>
          <div className="section-skills">
            <h4>
              <i className="fas fa-check-circle"></i> NodeJS
            </h4>
            <h4>
              <i className="fas fa-check-circle"></i> Express
            </h4>
            <h4>
              <i className="fas fa-check-circle"></i> Firebase
            </h4>
            <h4>
              <i className="fas fa-check-circle"></i> Mongodb
            </h4>
          </div>
        </section>
      </div>
    </div>
  );
};
