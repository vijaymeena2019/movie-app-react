import _ from 'lodash';
import React from 'react';

export default function paginate (items, pageNumber, pageSize) {
    
    const startIndex = pageSize*(pageNumber-1);

    // _.slice(items,startIndex)  // it will slice index from startIndex point
    // _.take(pageSize)  // total number of items take from the array
    // In order to call these lodash method, we need to first convert items array into lodash wrapper.
     return _(items)
            .slice(startIndex)
            .take(pageSize)
            .value()   // .value() is to again convert it into normal object
   
   
   
    // const copyItems = [...items];
    // const filteredItems = [];
    // for(let i=(pageSize * ((pageNumber-1)-1)); i < pageSize*currentPage; i++ ){
    //     filteredItems.push(copyItems[i]);
    // }
    // return filteredItems;
}