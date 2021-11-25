import React from 'react';

import OrdersTable from './OrdersTable';

import OrdersChart from './OrdersChart';

import { uniqueCustomers } from './uniquecustomers';

const OrdersContainer = (props)  => {


    const{data} = props;


    const frequencyTable = function(){

        const uniqueCustomersTable = uniqueCustomers(data);

        const frequencyDistribution = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            '5+': 0
        }

        uniqueCustomersTable.forEach(function(ele){

            const customerOrders = data.filter(function(cus){
                return cus.Phone === ele.Phone;
            })

            const res = customerOrders.length;

            if( res >=5){
                
                frequencyDistribution['5+']++
            }else{
                
                frequencyDistribution[res]++
            }
        })

        return frequencyDistribution;
    }

    return (
        <section>

            <h2 className='text-center text-capitalize text-success'>
                order distribution 
            </h2>

        
            <div className="row">

            
                <div className="col-lg-6 col-sm-6 my-2">

                
                    <OrdersTable
                        data = {frequencyTable()}
                    />

                </div>

                <div className="col-lg-6 col-sm-6 mt-3">

                
                    <OrdersChart
                        data={frequencyTable()}
                    />

                </div>
            

            </div>
            

        </section>
    )
}

export default OrdersContainer;