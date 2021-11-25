import React from 'react';

import './Main.scss';


const StatsItem = (props) =>{

    const{orderCount,text} = props;

    return (
        <article className='border p-1 mb-2 text-center border-primary'>

            <h3>
                {orderCount}
            </h3>

            <h4 className='text-capitalize text-success'>
                {text}
            </h4>

        </article>
    )
}

export default StatsItem;