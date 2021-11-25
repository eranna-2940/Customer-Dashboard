import React from 'react';

const OrdersTable = (props) => {

    
    const{data} = props;

    return (
        <table className='table mt-2 table-bordered table-hover table-sm text-center'>

            <thead>

                <tr>

                    <th scope='col'>
                        Number Of Orders 
                    </th>
                        
                    <th scope='col'>
                        Count of Customers 
                    </th>
                        
                </tr>

            </thead>

            <tbody>

                {
                    Object.keys(data).map(function(ele,index){

                        return(
                            <tr key={index}>

                                <td>
                                    {ele}
                                </td>

                                <td>
                                    {data[ele]}
                                </td>

                            </tr>
                        )
                    })
                }

            </tbody>

        </table>

    )
}

export default OrdersTable;