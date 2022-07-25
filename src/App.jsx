import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            header: "Button 1",
            productDivs: [
                {
                    id: 1,
                    name: 'Product 1',
                    price: '10$',
                    amount: 1,
                },
                {
                    id: 2,
                    name: 'Product 2',
                    price: '20$',
                    amount: 2,
                },
                {
                    id: 3,
                    name: 'Product 3',
                    price: '30$',
                    amount: 3,
                }
            ],
        }
    }


    render() {
        return (
            <div className={'products'}>
                <button className={'btn-edit'} onClick={(event) => {this.setState({})}}>{this.state.header}</button>
                {this.state.productDivs.map((elem, index) => {
                    return (
                        <div className={'product'}>
                            <p>{'ID: '}{elem.id}</p>
                            <h1>{elem.name}</h1>
                            <p>{elem.price}</p>
                            <p>{elem.amount}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default App;