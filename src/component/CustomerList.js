import React, { useState, useEffect } from 'react';
import { Customer } from './Customer';
import sampleData from '../data/sampleData'

export const CustomerList = () => {
    const [customersData, setCustomersData] = useState([]);

    useEffect(() => {
        //timeout to show delay as while making call to api
        setTimeout(() => {
            setCustomersData(sampleData);
        }, 1000);
    }, []);

    // Sample data passed in customer component
    return (
        <div className="list">
            {customersData.length === 0 ? (
                <p>Loading data...</p>
            ) : (
                customersData.map((customer) => <Customer key={customer.customerId} customer={customer} />)
            )}
        </div>
    );
};
