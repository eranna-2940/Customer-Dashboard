import React from 'react';

import StatsItem from './StatsItem';

import {uniqueCustomers} from './uniquecustomers';

import {totalAmount} from './totalOrders'

const  StatsContainer = (props) => {
    
    const{customersDashboardData} = props;

    const customerOrdersCount = customersDashboardData.length;

    const totalOrdersCount = totalAmount(customersDashboardData)
    
    const result = uniqueCustomers(customersDashboardData).length;

    return (

        <section className='mt-2'>

            
            <div className="row">

            
                <div className="col-lg-4 col-sm-6 my-2">

                    
                    <StatsItem
                        orderCount = {customerOrdersCount} text = 'orders'
                    />

                </div>

                

            
                <div className="col-lg-4 col-sm-6 my-2">

                    <StatsItem
                        orderCount = {totalOrdersCount} text = 'amount'
                    />

                </div>

            

            
                <div className="col-lg-4 col-sm-6 my-2">

                    <StatsItem
                        orderCount ={result} text = 'unique customers'
                    />

                </div>

            

            </div>
            

        </section>

    )
}

export default StatsContainer;