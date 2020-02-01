import React from 'react';
import './App.css';
import NavBar from './components/navbar.component';
import Boxes from './components/boxes.component';
import CustomButton from './components/custom-button.component';
import CustomButtonTwo from './components/custom-button2.component';

function App() {
  return (
    <div className="App">
      <span><NavBar /></span>



      {/* <!--SHOWCASE--> */}

      <section id="showcase" className="py-5">
        <div className="primary-overlay">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 text-center">
                <h1 className="display-2 mt-5 pt-5 banner-text">
                  WE WORK HARD
              </h1>
                <p className="lead">
                  TO SAVE YOUR MONEY
              </p>
                <CustomButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--NEWSLETTER--> */}
      {/* 
      <section id="newsletter" className="bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control form-control-lg mb-resp"
                placeholder="Enter Name"
              />
            </div>
            <div className="col-md-4">
              <input
                type="email"
                className="form-control form-control-lg mb-resp"
                placeholder="Enter Email"
              />
            </div>
            <div className="col-md-4">
              <button className="btn btn-primary btn-lg btn-block">
                <i className="fas fa-envelope-open-o"></i>Subscribe
            </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* <!--BOXES--> */}
      <Boxes />
      <section id='breaker'>
        <div className="dark-overlay">
          <div className="row">
            <div className='col'>
              <div className='container pt-5 text-left'>
                <h1>Your #1 Choice for Custom Wheels and Tires</h1>
                <h4>in Calgary, Red Deer, Lloydminster, Westbank and Regina!
          </h4>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get a quote */}
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <h3 className='text-center fix'>Receive an answer back with the amount you are guaranteed for all in less than one minute!</h3>
            <h4 className='fix text-center'>*Minimum loan of $1000 max $7500*</h4>
          </div>
          <div className='col-md-6 align-self-center'><CustomButtonTwo /></div>
        </div>
      </div>


      {/* <!--AUTHORS--> */}
      <section id="authors" className="my-5 text-center">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="info-header mb-5">
                <h1 className="text-primary pb-3">
                  Meet The Authors
              </h1>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Doloremque veniam magni atque cum rerum enim?
              </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body">
                  <img
                    src="img/person1.jpg"
                    alt=""
                    className="img-fluid rounded-circle w-50 mb-3"
                  />
                  <h3>Susan Williams</h3>
                  <h5 className="text-muted">Lead Writer</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                    eum incidunt. Soluta harum deleniti repellat.
                </p>
                  <div className="d-flex justify-content-center">
                    <div className="p-4">
                      <a href="http://facebook.com">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </div>
                    <div className="p-4">
                      <a href="http://twitter.com">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                    <div className="p-4">
                      <a href="http://instagram.com">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body">
                  <img
                    src="img/person2.jpg"
                    alt=""
                    className="img-fluid rounded-circle w-50 mb-3"
                  />
                  <h3>Grace Smith</h3>
                  <h5 className="text-muted">Co-Writer</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                    eum incidunt. Soluta harum deleniti repellat.
                </p>
                  <div className="d-flex justify-content-center">
                    <div className="p-4">
                      <a href="http://facebook.com">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </div>
                    <div className="p-4">
                      <a href="http://twitter.com">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                    <div className="p-4">
                      <a href="http://instagram.com">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body">
                  <img
                    src="img/person3.jpg"
                    alt=""
                    className="img-fluid rounded-circle w-50 mb-3"
                  />
                  <h3>John Doe</h3>
                  <h5 className="text-muted">Editor</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                    eum incidunt. Soluta harum deleniti repellat.
                </p>
                  <div className="d-flex justify-content-center">
                    <div className="p-4">
                      <a href="http://facebook.com">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </div>
                    <div className="p-4">
                      <a href="http://twitter.com">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                    <div className="p-4">
                      <a href="http://instagram.com">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body">
                  <img
                    src="img/person4.jpg"
                    alt=""
                    className="img-fluid rounded-circle w-50 mb-3"
                  />
                  <h3>Kevin Swanson</h3>
                  <h5 className="text-muted">Designer</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                    eum incidunt. Soluta harum deleniti repellat.
                </p>
                  <div className="d-flex justify-content-center">
                    <div className="p-4">
                      <a href="http://facebook.com">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </div>
                    <div className="p-4">
                      <a href="http://twitter.com">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                    <div className="p-4">
                      <a href="http://instagram.com">
                        <i className="fab fa-instagram"></i>
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

      <section id="contact" className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <h3>Get In Touch</h3>
              <p className="lead">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
                iusto?
            </p>
              <form>
                <div className="input-group input-group-lg mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input type="text" className="form-control" placeholder="Name" />
                </div>

                <div className="input-group input-group-lg mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-envelope"></i>
                    </span>
                  </div>
                  <input type="text" className="form-control" placeholder="Email" />
                </div>

                <div className="input-group input-group-lg mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-pencil-alt"></i>
                    </span>
                  </div>
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    rows="5"
                  ></textarea>
                </div>

                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary btn-block btn-lg"
                />
              </form>
            </div>

            <div className="col-lg-3 align-self-center">
              <img src="img/mlogo.png" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* <!--FOOTER--> */}
      <footer id="main-footer" className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-6 ml-auto">
              <p className="lead">Copyright &copy; <span id="year"></span></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
