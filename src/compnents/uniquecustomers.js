// To remove duplicates

import _ from 'lodash';

export const uniqueCustomers = function(cus){
    const result = _.uniqBy(cus,'Phone')
    return result;
} 