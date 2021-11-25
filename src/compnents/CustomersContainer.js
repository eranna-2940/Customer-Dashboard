import React,{useState} from 'react';

import {uniqueCustomers} from './uniquecustomers'

import { totalAmount } from './totalOrders';

import CustomersTable from './CustomersTable';

import SearchItem from './SearchItem';

const CustomersContainer = (props) => {

    const{customersData} = props;

    const showDetails = function(ele){
    
        const filterCustomerOrders = customersData.filter(function(cust){
            return cust.Phone === ele.Phone;
        });

        const ordersTotalAmount = totalAmount(filterCustomerOrders)

        alert(
            `
                Name - ${ele.Name},
                Orders - ${filterCustomerOrders.length}
                Total Amount - ${ordersTotalAmount}
            `
        );

    }

    const uniqueCustomerss = uniqueCustomers(customersData);


    const[text,setText] = useState('');

    const handleChange = function(e){
        const inputValue = e.target.value;

        setText(inputValue);
    }

    const filteredSearchResults = function(){
        const result = uniqueCustomerss.filter(function(cus){
            return cus.Name.toLowerCase().includes(text) || cus.Phone.toString().includes(text)
        })
        return result;
    }
    return (
        <section>

            

                <h4 className='text-capitalize text-warning'>
                    listing customers - {uniqueCustomerss.length}
                </h4>

                <SearchItem
                    inputText = {text}
                    callBackFunc = {handleChange}
                    data={uniqueCustomerss}
                />

            

            <CustomersTable
                data = {filteredSearchResults()}
                showCustomerOrders = {showDetails}
            />

        </section>
    )
}

export default CustomersContainer;