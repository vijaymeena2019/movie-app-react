// import React, {Component} from 'react';
// import {render} from 'react-dom';

const Item = ({ index, onDetele, item, onIncrease, onDecrease }) => {   // single source of truth
    return (  // event raiser
                <div>
                    <span className="m-2">{item.quantity}</span>
                    <button className="m-2 btn btn-secondary btn-sm" onClick={() =>onIncrease(item)}>+</button>
                    <button className="m-2 btn btn-secondary btn-sm" onClick={() =>onDecrease(item)}>-</button>
                    <button className="m-2 btn btn-secondary" onClick={() =>onDetele(item)}>Detele</button>  
                </div>
            );
}


// class App extends Component {    // App function not working 
//      constructor () {
//         super()
//         this.state = {
//             qty: 'zero'
//         }
//      }

//     increase = () =>{
//         console.log('increase',this.state.qty)
//         if (this.state.qty >= 0) this.setState({qty: this.state.qty + 1});   // how it is evaluate (this.state.qty >= 0) // getting false // not working {qty: this.state.qty++} 
//         else this.setState({qty: 1});
//     }
    
//     decrease = () => {
//         console.log('decrease', this.state.qty)
//         if (this.state.qty > 1) this.setState({qty: this.state.qty -1});
//         else if (this.state.qty === 1) this.setState({qty:'zero'});
//     }


//     render () {           
//     return (
//         <div>
//             <p>{this.state.qty}</p>
//             <button onClick={this.increase}>+</button>
//             <button onClick={this.decrease}>-</button>
//             {/* <button onclick={}>Detele</button>   {/* <button onclick={}>Detele</button> */}
//         </div>
//     );
//     }
// }
export default Item;