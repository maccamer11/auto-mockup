import React from 'react';
import CustomButton from '../components/custom-button.component';

import { image } from '../assets/tire2.jpeg';

const Showcase = () => {

    return (
        <section id="showcase" className="py-5">
            <div className='image-wrap primary-overlay img-fluid'>
                <div className='img-content container-fluid'>
                    <img src={image} />
                </div>
                <div className="row">
                    <div className='banner-content col-md-5 text-center'>
                        <h1 className="display-3 mt-5 pt-5 banner-text font-weight-bolder make-room">
                            WE WORK HARD
              </h1>
                        <h2 className='text-white display-5 make-room'>
                            TO SAVE YOUR MONEY
              </h2>
                        <span className='banner-btn' id='banner-button'><CustomButton /></span>
                    </div>
                </div>
            </div>
        </section>


    );
}

export default Showcase;