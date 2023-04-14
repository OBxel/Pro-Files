import React from "react";

import "../styles/home.css";

const Home = (props) => {
  const handleClick = (site) => {
    switch (site) {
      case "site1":
        window.open(
          "https://www.linkedin.com/in/olivier-brul%C3%A9/",
          "_blank"
        );
        break;
      case "site2":
        window.open("https://github.com/OBxel", "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="homePage">
        {/* TOP BOX START */}
        <h1 className="main-title">Welcome to Pro-Files</h1>
        <div className="presentation-container">
          <div className="presentation">
            Welcome to Pro-Files,
            <br /> This site have for purpose to show my work and what I have
            done. <br /> You will find all my public projects and links to see
            them or the source code. <br /> You can also find all the projects I
            am actually working on and see their updates.
          </div>
        </div>
        <div className="containers">
          {/* title and présentation */}

          {/* title and présentation */}
          {/* picture and bio */}
          <div className="bio-container">
            <div className="picture containers"></div>
            <div className="bio containers">
              Hello, <br /> My name is Olivier Brule I am a fullstack developper
              working with React Node JS. <br /> Here you will find multiples
              sites I have developped with React Node.JS. <br />
              You will also find sites I have made or work on with Wordpress.{" "}
              <br /> Feel free to contact me for more informations.{" "}
              <div className="btn">
                <a
                  className="dlfile"
                  href="/src/assets/files/CV-olivier-brule.pdf"
                  download
                >
                  <i className="fa fa-download"> Download CV : </i>
                </a>
              </div>
            </div>

            <div className="contact containers">
              <div className="contact-info"> INFORMATIONS: </div>
              <div className="contact-tab">
                <div>
                  <div> TEL :</div>
                  <div> EMAIL :</div>
                </div>
                <div>
                  <div> 06 23 89 26 83</div>
                  <div> olivier.a.brule@gmail.com </div>
                </div>
              </div>

              <div className="contact-info"> SOCIALS: </div>
              <div className="social-tab">
                <button
                  className="btn linkedin"
                  onClick={() => handleClick("site1")}
                >
                  {" "}
                </button>
                <button
                  className="btn github"
                  onClick={() => handleClick("site2")}
                ></button>
              </div>
            </div>
            {/* picture and bio */}
          </div>
        </div>
        {/* TOP BOX END */}
        {/* MID BOX START */}
        <div className="containers">
          <div className="info-box">
            <span className="info containers"> comments </span>
            <h2 className="items">Projects online</h2>
          </div>

          <div className="info-box">
            <span className="info containers"> comments</span>
            <h2 className="items">Wordpress</h2>
          </div>

          <div className="info-box">
            <span className="info containers"> comments</span>
            <h2 className="items">Projects in queue</h2>
          </div>

          <div className="info-box">
            <span className="info containers"> comments</span>
            <h2 className="items">Competences</h2>
          </div>
        </div>
        {/* MID BOX END */}
      </div>
    </div>
  );
};

export default Home;
