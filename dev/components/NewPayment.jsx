import React from 'react';
import CashStack from './CashStack';

export default class NewPayment extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            price: 0
        }

        this.onStackSubmit = this.onStackSubmit.bind(this) 
    }

    onStackSubmit (stack) {
        this.props.onSubmit(stack, this.state.price)
    }

    render() {
        return (
            <div>
                <h4>Fill new payment infos</h4>
                <div className="input-group">
                    <span className="input-group-label">Amount in $</span>
                    <input className="input-group-field" type="number" value={this.state.price} />
                </div>
                <hr />
                <CashStack onUserSubmit={this.onStackSubmit}  />
            </div>
        );
    }
}