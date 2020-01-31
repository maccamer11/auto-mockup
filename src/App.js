import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav
        class="navbar navbar-expand-md navbar-light fixed-top py-4"
        id="main-nav"
      >
        <div class="container">
          <a href="#home" class="navbar-brand">
            <img src='logo.jpg' width="50" height="50" alt="" />
            <h3 class="d-inline align-middle">Canada Custom Autos</h3>
          </a>
          <button
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a href="#home" class="nav-link">Home</a>
              </li>
              <li class="nav-item">
                <a href="#about" class="nav-link">About Us</a>
              </li>
              <li class="nav-item">
                <a href="#authors" class="nav-link">Services</a>
              </li>
              <li class="nav-item">
                <a href="#contact" class="nav-link">Gallery</a>
              </li>
              <li class="nav-item">
                <a href="#contact" class="nav-link">Blog</a>
              </li>
              <li class="nav-item">
                <a href="#contact" class="nav-link">Locations</a>
              </li>
              <li class="nav-item">
                <a href="#contact" class="nav-link">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <!--SHOWCASE--> */}

      <section id="showcase" class="py-5">
        <div class="primary-overlay">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 text-center">
                <h1 class="display-2 mt-5 pt-5">
                  WE WORK HARD
              </h1>
                <p class="lead">
                  TO SAVE YOUR MONEY
              </p>
                <a href="#" class="btn btn-danger btn-lg">
                  <i class="fas fa-arrow-right"></i> Contact Us
              </a>
              </div>
              <div class="col-lg-6">
                <img
                  src="img/book.png"
                  alt=""
                  class="img-fluid d-none d-lg-block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--NEWSLETTER--> */}
      {/* 
      <section id="newsletter" class="bg-dark text-white py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <input
                type="text"
                class="form-control form-control-lg mb-resp"
                placeholder="Enter Name"
              />
            </div>
            <div class="col-md-4">
              <input
                type="email"
                class="form-control form-control-lg mb-resp"
                placeholder="Enter Email"
              />
            </div>
            <div class="col-md-4">
              <button class="btn btn-primary btn-lg btn-block">
                <i class="fas fa-envelope-open-o"></i>Subscribe
            </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* <!--BOXES--> */}
      <section id="boxes" class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <div class="card text-center border-primary mb-resp">
                <div class="card-body">
                  <h3 class="text-primary">Be Better</h3>
                  <p class="text-muted">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptas, sed!
                </p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card text-center bg-primary text-white mb-resp">
                <div class="card-body">
                  <h3>Be Smarter</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptas, sed!
                </p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card text-center border-primary mb-resp">
                <div class="card-body">
                  <h3 class="text-primary">Be Faster</h3>
                  <p class="text-muted">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptas, sed!
                </p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card text-center bg-primary text-white">
                <div class="card-body">
                  <h3>Be Strong</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptas, sed!
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--ABOUT/WHY SECTION--> */}
      <section id="about" class="py-5 text-center bg-light">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="info-header mb-5">
                <h1 class="text-primary pb-3">
                  Why This Book?
              </h1>
                <p class="lead pb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  voluptates modi sapiente ut obcaecati libero!
              </p>
              </div>

              {/* <!--ACCORDION--> */}
              <div id="accordion">
                <div class="card">
                  <div class="card-header">
                    <h5 class="mb-0">
                      <div
                        href="#collapse1"
                        data-toggle="collapse"
                        data-parent="#accordion"
                      >
                        <i class="fas fa-arrow-circle-down"></i> Get Inspired
                    </div>
                    </h5>
                  </div>

                  <div id="collapse1" class="collapse show">
                    <div class="card-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas, distinctio ut dolor error corporis repellendus ex
                      nihil, ad necessitatibus sint libero quisquam consequatur
                      suscipit omnis doloribus saepe sequi maxime corrupti
                      doloremque pariatur quibusdam illum! Voluptatem error minima
                      commodi hic officiis voluptatum consequatur nesciunt.
                      Voluptatibus fuga quisquam mollitia. Sed, dicta assumenda.
                  </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header">
                    <h5 class="mb-0">
                      <div
                        href="#collapse2"
                        data-toggle="collapse"
                        data-parent="#accordion"
                      >
                        <i class="fas fa-arrow-circle-down"></i> Gain The
                        Knowledge
                    </div>
                    </h5>
                  </div>

                  <div id="collapse2" class="collapse">
                    <div class="card-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas, distinctio ut dolor error corporis repellendus ex
                      nihil, ad necessitatibus sint libero quisquam consequatur
                      suscipit omnis doloribus saepe sequi maxime corrupti
                      doloremque pariatur quibusdam illum! Voluptatem error minima
                      commodi hic officiis voluptatum consequatur nesciunt.
                      Voluptatibus fuga quisquam mollitia. Sed, dicta assumenda.
                  </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header">
                    <h5 class="mb-0">
                      <div
                        href="#collapse3"
                        data-toggle="collapse"
                        data-parent="#accordion"
                      >
                        <i class="fas fa-arrow-circle-down"></i> Open Your Mind
                    </div>
                    </h5>
                  </div>

                  <div id="collapse3" class="collapse">
                    <div class="card-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas, distinctio ut dolor error corporis repellendus ex
                      nihil, ad necessitatibus sint libero quisquam consequatur
                      suscipit omnis doloribus saepe sequi maxime corrupti
                      doloremque pariatur quibusdam illum! Voluptatem error minima
                      commodi hic officiis voluptatum consequatur nesciunt.
                      Voluptatibus fuga quisquam mollitia. Sed, dicta assumenda.
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--AUTHORS--> */}
      <section id="authors" class="my-5 text-center">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="info-header mb-5">
                <h1 class="text-primary pb-3">
                  Meet The Authors
              </h1>
                <p class="lead">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Doloremque veniam magni atque cum rerum enim?
              </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="card">
                <div class="card-body">
                  <img
                    src="img/person1.jpg"
                    alt=""
                    class="img-fluid rounded-circle w-50 mb-3"
                  />
                  <h3>Susan Williams</h3>
                  <h5 class="text-muted">Lead Writer</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                    eum incidunt. Soluta harum deleniti repellat.
                </p>
                  <div class="d-flex justify-content-center">
                    <div class="p-4">
                      <a href="http://facebook.com">
                        <i class="fab fa-facebook"></i>
                      </a>
                    </div>
                    <div class="p-4">
                      <a href="http://twitter.com">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </div>
                    <div class="p-4">
                      <a href="http://instagram.com">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="card">
                <div class="card-body">
                  <img
                    src="img/person2.jpg"
                    alt=""
                    class="img-fluid rounded-circle w-50 mb-3"
                  />
                  <h3>Grace Smith</h3>
                  <h5 class="text-muted">Co-Writer</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                    eum incidunt. Soluta harum deleniti repellat.
                </p>
                  <div class="d-flex justify-content-center">
                    <div class="p-4">
                      <a href="http://facebook.com">
                        <i class="fab fa-facebook"></i>
                      </a>
                    </div>
                    <div class="p-4">
                      <a href="http://twitter.com">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </div>
                    <div class="p-4">
                      <a href="http://instagram.com">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="card">
                <div class="card-body">
                  <img
                    src="img/person3.jpg"
                    alt=""
                    class="img-fluid rounded-circle w-50 mb-3"
                  />
                  <h3>John Doe</h3>
                  <h5 class="text-muted">Editor</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                    eum incidunt. Soluta harum deleniti repellat.
                </p>
                  <div class="d-flex justify-content-center">
                    <div class="p-4">
                      <a href="http://facebook.com">
                        <i class="fab fa-facebook"></i>
                      </a>
                    </div>
                    <div class="p-4">
                      <a href="http://twitter.com">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </div>
                    <div class="p-4">
                      <a href="http://instagram.com">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="card">
                <div class="card-body">
                  <img
                    src="img/person4.jpg"
                    alt=""
                    class="img-fluid rounded-circle w-50 mb-3"
                  />
                  <h3>Kevin Swanson</h3>
                  <h5 class="text-muted">Designer</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                    eum incidunt. Soluta harum deleniti repellat.
                </p>
                  <div class="d-flex justify-content-center">
                    <div class="p-4">
                      <a href="http://facebook.com">
                        <i class="fab fa-facebook"></i>
                      </a>
                    </div>
                    <div class="p-4">
                      <a href="http://twitter.com">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </div>
                    <div class="p-4">
                      <a href="http://instagram.com">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--CONTACT--> */}

      <section id="contact" class="bg-light py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-9">
              <h3>Get In Touch</h3>
              <p class="lead">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
                iusto?
            </p>
              <form>
                <div class="input-group input-group-lg mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                  <input type="text" class="form-control" placeholder="Name" />
                </div>

                <div class="input-group input-group-lg mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </div>
                  <input type="text" class="form-control" placeholder="Email" />
                </div>

                <div class="input-group input-group-lg mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-pencil-alt"></i>
                    </span>
                  </div>
                  <textarea
                    class="form-control"
                    placeholder="Message"
                    rows="5"
                  ></textarea>
                </div>

                <input
                  type="submit"
                  value="Submit"
                  class="btn btn-primary btn-block btn-lg"
                />
              </form>
            </div>

            <div class="col-lg-3 align-self-center">
              <img src="img/mlogo.png" alt="" class="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* <!--FOOTER--> */}
      <footer id="main-footer" class="py-5 bg-primary text-white">
        <div class="container">
          <div class="row text-center">
            <div class="col-md-6 ml-auto">
              <p class="lead">Copyright &copy; <span id="year"></span></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
