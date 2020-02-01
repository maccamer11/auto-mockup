import React from 'react';
import CustomButtonTwo from '../components/custom-button2.component';

const Quote = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <h3 className='text-center fix'>Receive an answer back with the amount you are guaranteed for all in less than one minute!</h3>
                    <h4 className='fix text-center'>*Minimum loan of $1000 max $7500*</h4>
                </div>
                <div className='col-md-6 align-self-center'>
                    <CustomButtonTwo />
                </div>
            </div>
        </div>
    );
}

export default Quote;