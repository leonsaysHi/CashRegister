import React from 'react';
import CashStackUI from './CashStackUI';

export default class NewPayment extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            price: 0,
            priceError: false
        }

        this.handlePriceChange = this.handlePriceChange.bind(this)
        this.onStackSubmit = this.onStackSubmit.bind(this) 
    }

    handlePriceChange(evt) {
        let price = evt.target.value
        this.setState({
            price
        });
    }

    onStackSubmit (stack) {
        console.log(this.state, this.state.formDatas)
        if (parseInt(this.state.price) > 0) {
            this.props.onSubmit(stack, this.state.price)
        }
        else {
            this.setState({
                priceError: true
            })
        }        
    }

    render() {
        return (
            <div>
                <h4>Fill new payment infos</h4>
                <div className="input-group">
                    <span className="input-group-label">Amount in $</span>
                    <input className="input-group-field" type="number" onChange={this.handlePriceChange} />
                </div>
                { this.state.priceError ? <span>Price should be above 0.</span> : '' }
                <hr />
                <CashStackUI onUserSubmit={this.onStackSubmit}  />
            </div>
        );
    }
}