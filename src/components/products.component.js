import React from 'react';
import Tire2 from '../assets/tire2.jpeg';
import CustomButton3 from '../components/custom-button3.component';


import './products.styles.scss';

const Products = () => {

    return (
        <section id="authors" className="my-5 text-center">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="info-header">
                            <h1 className="pb-3">
                                Our <span id='color-it'>products</span>
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
                        <div className='collection-item card'>
                            <div className="image">
                                <img
                                    src={Tire2}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className='info'>
                                <span className='name ml-auto'>Firestone Tires</span>
                                <span className='price mr-auto'>$149.99</span>
                                <span><CustomButton3>Add to cart</CustomButton3></span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className='collection-item card'>
                            <div className="image">
                                <img
                                    src={Tire2}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className='info'>
                                <span className='name ml-auto'>Firestone Tires</span>
                                <span className='price mr-auto'>$149.99</span>
                                <span><CustomButton3>Add to cart</CustomButton3></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className='collection-item card'>
                            <div className="image">
                                <img
                                    src={Tire2}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className='info'>
                                <span className='name ml-auto'>Firestone Tires</span>
                                <span className='price mr-auto'>$149.99</span>
                                <span><CustomButton3>Add to cart</CustomButton3></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className='collection-item card'>
                            <div className="image">
                                <img
                                    src={Tire2}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className='info'>
                                <span className='name ml-auto'>Firestone Tires</span>
                                <span className='price mr-auto'>$149.99</span>
                                <span><CustomButton3>Add to cart</CustomButton3></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Products;