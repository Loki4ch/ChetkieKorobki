import React from 'react';
import productsArrState from './stateArray'
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            header: "Button 1",
            productDivs: productsArrState,
        }
    }

    render() {
        return (
            <div className={'products'}>
                <button className={'btn-edit'} onClick={(event) => {this.setState({header: this.state.header + 1})}}>{this.state.header}</button>
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
            </div>
        )
    }
}


export default App;