import React from 'react';

const Contact = () => {

    return (
        <section id="contact" className="bg-light py-5">
            <div className="container">
                <div className="row">
                    <div className="text-center align-items-center my-auto col-md-12">
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
                                className="btn btn-custom btn-block btn-lg"
                            />
                        </form>
                    </div>

                    <div className="col-lg-3 align-self-center">
                        <img src="img/mlogo.png" alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;