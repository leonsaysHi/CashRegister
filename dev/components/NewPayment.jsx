import React from 'react';
import CashStack from './CashStack';

export default class NewPayment extends React.Component {
    render() {
        return (
            <div>
                <h4>Fill new payment infos</h4>
                <div className="input-group">
                    <span className="input-group-label">Amount in $</span>
                    <input className="input-group-field" type="number" />
                </div>
                <hr />
                <CashStack />
            </div>
        );
    }
}