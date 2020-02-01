import React from 'react';
import { FaRegCreditCard, FaRegClock, FaRegMoneyBillAlt, FaRegFileAlt, FaBan, FaCheck } from 'react-icons/fa';
import { IconContext } from "react-icons";
import CustomButton from './custom-button.component';



const Boxes = () => {

    return (
        <section id="boxes" className="py-5">
            <div className="container">
                <div className='container making-room'>
                    <div className="row">
                        <div className="col-md-4">
                            <div className=" text-center text-white mb-resp">
                                <div className="">
                                    <IconContext.Provider value={{ color: "red", size: 34, className: "global-class-name" }}>
                                        <div className='icons col-md-3'>
                                            <FaRegCreditCard />
                                        </div>
                                    </IconContext.Provider>
                                    <h4 className="font-weight-bold spacer">No More Credit Checks!</h4>
                                    <p className="">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Voluptas, sed!
                </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className=" text-center text-white mb-resp">
                                <div className="">
                                    <IconContext.Provider value={{ color: "red", size: 34, className: "global-class-name" }}>
                                        <div className='icons col-md-3'>
                                            <FaRegFileAlt />
                                        </div>
                                    </IconContext.Provider>
                                    <h4 className="font-weight-bold spacer">No Loan Applications!</h4>
                                    <p className="">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Voluptas, sed!
                </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className=" text-center text-white mb-resp">
                                <div className="">
                                    <IconContext.Provider value={{ color: "rgb(190, 17, 17)", size: 34, className: "global-class-name" }}>
                                        <div className='icons col-md-3'>
                                            <FaRegClock />
                                        </div>
                                    </IconContext.Provider>
                                    <h4 className="font-weight-bold spacer">No Waiting On Approvals!</h4>
                                    <p className="">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Voluptas, sed!
                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row whitespace'>
                        <div className="col-md-4">
                            <div className=" text-center text-white">
                                <div className="">
                                    <IconContext.Provider value={{ color: "red", size: 34, className: "global-class-name" }}>
                                        <div className='icons col-md-3'>
                                            <FaRegMoneyBillAlt />
                                        </div>
                                    </IconContext.Provider>
                                    <h4 className="font-weight-bold spacer">No Down Payments!</h4>
                                    <p className="">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Voluptas, sed!
                </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className=" text-center text-white">
                                <div className="">
                                    <IconContext.Provider value={{ color: "red", size: 34, className: "global-class-name" }}>
                                        <div className='icons col-md-3'>
                                            <FaBan />
                                        </div>
                                    </IconContext.Provider>
                                    <h4 className="font-weight-bold spacer">No Penalties!</h4>
                                    <p className="">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Voluptas, sed!
                </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className=" text-center text-white">
                                <div className="">
                                    <IconContext.Provider value={{ color: "red", size: 34, className: "global-class-name" }}>
                                        <div className='icons col-md-3'>
                                            <FaCheck />
                                        </div>
                                    </IconContext.Provider>
                                    <h4 className="font-weight-bold spacer">No Regrets!</h4>
                                    <p className="">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Voluptas, sed!
                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Boxes;