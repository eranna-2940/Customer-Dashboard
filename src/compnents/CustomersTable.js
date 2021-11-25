import React from 'react';

const CustomersTable = (props) => {
    const{data,showCustomerOrders} = props;

    return (
        <>

            <h4 className='mt-2 mb-2 text-muted'>
                Filtered Result - {data.length}
            </h4>

            <table className='table mt-2 table-bordered table-hover table-sm text-center'>

                <thead>

                    <tr>

                        <th scope='col'>
                            Name
                        </th>
                        
                        <th scope='col'>
                            Mobile 
                        </th>
                        
                        <th scope='col'>
                            Details 
                        </th>
                        
                    </tr>

                </thead>

                <tbody>

                    {
                        data.map(function(ele){

                            const{Phone,Name} = ele;

                            return(
                                <tr key={Phone}>

                                    <td>
                                        {Name}
                                    </td>

                                    <td>
                                        {Phone}
                                    </td>

                                    <td>

                                        <button className='btn btn-outline-primary text-dark btn-md text-capitalize' onClick={function(){showCustomerOrders(ele)}}>

                                            show 

                                        </button>
                                        
                                    </td>

                                </tr>
                            )
                        })
                    }

                </tbody>

            </table>

        </>
    )
}

export default CustomersTable;