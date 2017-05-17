import React from 'react';
import InitialCash from "./InitialCash";
import NewPayment from "./NewPayment";

export default class CashRegister extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="medium-12 column">
                    <h3>Cash Register w/ React</h3>
                    <InitialCash />
                    <div className="callout large primary">
                        <div className="row column">
                            <p>Output:</p>
                            <h4 className="text-center">...</h4>
                        </div>
                    </div>
                    <div className="button-group">
                        <a className="secondary button">New payment</a>
                        <a className="button">Get current cash details</a>
                    </div>
                    <NewPayment />
                </div>
            </div>
        );
    }
}