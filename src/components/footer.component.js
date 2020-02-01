import React from 'react';

const Footer = () => {

    return (
        <footer id="main-footer" className="py-5 text-white bg-custom">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-6 ml-auto">
                        <p className="lead">Copyright &copy; <span id="year"></span></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;