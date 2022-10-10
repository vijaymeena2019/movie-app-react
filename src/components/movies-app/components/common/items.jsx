import Item from './item';
import React from 'react';
const Items = ({onIncrease, onDecrease, onDetele, onReset, products}) => {
    
        return (
            <div>
                <button onClick={onReset} className="">Reset</button>
            {
                products.map((item,index) => <Item 
                key= {index} 
                onDetele= {onDetele} 
                index= {index} 
                onIncrease = {onIncrease} 
                onDecrease = {onDecrease} 
                item = {item}
                />)
            }
            </div>
        )
}

export default Items;