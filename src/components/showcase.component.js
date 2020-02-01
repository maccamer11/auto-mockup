import React from 'react';
import CustomButton from '../components/custom-button.component';

const Showcase = () => {

    return (
        <section id="showcase" className="py-5">
            <div className="primary-overlay">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 text-center">
                            <h1 className="display-3 mt-5 pt-5 banner-text font-weight-bolder make-room">
                                WE WORK HARD
              </h1>
                            <h2 className='text-white display-5 make-room'>
                                TO SAVE YOUR MONEY
              </h2>
                            <span id='banner-button'><CustomButton /></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Showcase;