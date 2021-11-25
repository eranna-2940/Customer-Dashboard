import React from 'react';

import { Chart } from 'react-google-charts';

const OrdersChart = (props) => {

    const{data} = props;

    return (
        <div>

            <Chart
                width={'630px'}

                height={'198px'}

                chartType="PieChart"

                loader={<div>Loading Chart</div>}

                data={[
                    ['Number of Orders','Count of Customers'],

                    ['1',11],

                    ['2',9],

                    ['3',10],

                    ['4',8],

                    ['5+',9]
                ]}

                options={{
                    title: 'Order Information Chart',
                }}

                rootProps={{ 'data-testid': '1' }}
            />

        </div>
    )
}

export default OrdersChart;