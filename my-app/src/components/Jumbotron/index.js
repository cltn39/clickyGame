import React from "react";

const Jumbotron = () => (
  <header className="header">
    {/* Header */}
    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="title">Clicky Game</h1>
          <h3 className="title">
            Click on an image to earn points, but don't click on any more than
            once!
          </h3>
        </div>
      </div>
    </header>
    {/* about section */}
    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4"  style= {{ color: " darkgrey "}} >Built with Create-react-app Bootstrap</h2>
            <p className="text-white-50" style= {{ color: " darkgrey "}}>
              Clicky Game is React based memory game. Inspired by the &nbsp;
              <a href="https://clicky-game.netlify.com/">
                example page
              </a>
               &nbsp;that were provided, added personal spin to the UI/game play.
            </p>
          </div>
        </div>
      </div>
    </section>
  </header>
);
export default Jumbotron;
