import React,{useState} from 'react';                                                                                                          
import { customerData } from './customer-data';

import StatsContainer from './StatsContainer';

import CustomersContainer from './CustomersContainer';

import OrdersContainer from './OrdersContainer';

const App = (props) => {

    const [data] = useState(customerData);

    return (
        <div className='mt-2 ml-2 container'>

            <h1 className='text-secondary text-center mb-0 text-capitalize'>
                customer dashboard 
            </h1>

            <div className="underline-three bg-dark mx-auto"></div>

        
            <StatsContainer
                customersDashboardData = {data}
            />

            <CustomersContainer
                customersData = {data}
            />

            <OrdersContainer
                data={data}
            />

        </div>
    )
}

export default App;