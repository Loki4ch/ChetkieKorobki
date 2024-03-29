import React from 'react';
import {productsArrState} from './stateArray';
import {changeAmount} from "./stateArray";
import {Login} from "../Components/Login.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            header: "Button 1",
            productDivs: productsArrState,
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state.productDivs);
        console.log(this.state.header);
    }

    render() {
        return (
            <div className={'products'}>
                <button className={'btn-edit'} onClick={(event) =>
                {this.setState({productDivs: changeAmount()})}}>{this.state.header}</button>
                {this.state.productDivs.map((elem, index) => {
                    return (
                        <div className={'product'}>
                            <p>{'ID: '}{elem.id}</p>
                            <h1>{'Name: '}{elem.name}</h1>
                            <p>{'Price: '}{elem.price}</p>
                            <p>{'Amount: '}{elem.amount}</p>
                        </div>
                    )
                })}
                <Login/>
            </div>
        )
    }
}

export default App;