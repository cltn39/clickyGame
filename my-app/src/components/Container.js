import React, { Component } from "react";

class Container extends Component {
  state = {
    books: []
  };

  handleFormSubmit = event => {
    event.preventDefault();
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <body id="page-top">
        {/* Nav */}
        <nav
          class="navbar navbar-expand-lg navbar-light fixed-top"
          id="mainNav"
        >
          <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
              Start Bootstrap
            </a>
            <button
              class="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i class="fas fa-bars" />
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#about">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#projects">
                    Projects
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#signup">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Header */}
        <header class="masthead">
          <div class="container d-flex h-100 align-items-center">
            <div class="mx-auto text-center">
              <h1 class="mx-auto my-0 text-uppercase">Clicky Game</h1>
              <h3 class="mx-auto my-0 mb-5">
                Click on an image to earn points, but don't click on any more
                than once!
              </h3>
            </div>
          </div>
        </header>
        {/* about section */}
        <section id="about" class="about-section text-center">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <h2 class="text-white mb-4">Built with Bootstrap 4</h2>
                <p class="text-white-50">
                  Grayscale is a free Bootstrap theme created by Start
                  Bootstrap. It can be yours right now, simply download the
                  template on
                  <a href="http://startbootstrap.com/template-overviews/grayscale/">
                    the preview page
                  </a>
                  . The theme is open source, and you can use it for any
                  purpose, personal or commercial.
                </p>
              </div>
            </div>
            <img src="img/ipad.png" class="img-fluid" alt="" />
          </div>
        </section>

        {/* Main  */}
  <section id="projects" class="projects-section bg-light">
    <div class="container">

      {/* row1 */}
      <div class="row align-items-center no-gutters mb-4 mb-lg-5">
        <div class="col-xl-8 col-lg-7">
          <img class="img-fluid mb-3 mb-lg-0" src="img/bg-masthead.jpg" alt=""></img>
        </div>
        <div class="col-xl-4 col-lg-5">
          <div class="featured-text text-center text-lg-left">
            <h4>Shoreline</h4>
            <p class="text-black-50 mb-0">Grayscale is open source and MIT licensed. This means you can use it for any project - even commercial projects! Download it, customize it, and publish your website!</p>
          </div>
        </div>
      </div>

      {/* row2 */}
      <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
        <div class="col-lg-6">
          <img class="img-fluid" src="img/demo-image-01.jpg" alt=""></img>
        </div>
        <div class="col-lg-6">
          <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-left">
                <h4 class="text-white">Misty</h4>
                <p class="mb-0 text-white-50">An example of where you can put an image of a project, or anything else, along with a description.</p>
                <hr class="d-none d-lg-block mb-0 ml-0"></hr>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* row3 */}
      <div class="row justify-content-center no-gutters">
        <div class="col-lg-6">
          <img class="img-fluid" src="img/demo-image-02.jpg" alt=""></img>
        </div>
        <div class="col-lg-6 order-lg-first">
          <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-right">
                <h4 class="text-white">Mountains</h4>
                <p class="mb-0 text-white-50">Another example of a project with its respective description. These sections work well responsively as well, try this theme on a small screen!</p>
                <hr class="d-none d-lg-block mb-0 mr-0"></hr>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
        {/* footer */}
        <footer class="bg-black small text-center text-white-50">
          <div class="container">Copyright &copy; Your Website 2019</div>
        </footer>

        {/* Bootstrap core JS */}
        <script src="vendor/jquery/jquery.min.js" />
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js" />
        {/* Plugin JS */}
        <script src="vendor/jquery-easing/jquery.easing.min.js" />
        {/* Custom scripts */}
        <script src="js/grayscale.min.js" />
      </body>
    );
  }
}

export default Container;
