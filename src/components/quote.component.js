import React from 'react';
import CustomButtonTwo from '../components/custom-button2.component';

const Quote = () => {
    return (
        <div className='container bg-light'>
            <div className='row bg-light'>
                <div className='col-md-6'>
                    <h4 className='text-center fix'>Receive an answer back with the amount you are guaranteed for all in less than one minute!</h4>
                    <h4 className='fix text-center lead'>*Minimum loan of $1000 max $7500*</h4>
                </div>
                <div className='col-md-6 align-self-center'>
                    <CustomButtonTwo />
                </div>
            </div>
        </div>
    );
}

export default Quote;