import React from 'react';
import NewPayment from "../containers/NewPayment";
import CashStackUI from '../containers/CashStackUI';


export default class CashRegister extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            stack: null,
            newPayment: false
        }

        this.setInitalCash = this.setInitalCash.bind(this)
        this.showPayment = this.showPayment.bind(this)
        this.onNewPayment = this.onNewPayment.bind(this)
    }

    setInitalCash (stack) {
        this.setState({
            stack
        })
    }

    showPayment () {
        this.setState({
            newPayment: true
        })
    }

    onNewPayment (price, stack) {
        console.log('CR onNewPayment', price, stack)
        this.setState({
            newPayment: false
        })
    }

    render() {
        return  (
            <div>                
                <div className="row">
                    <div className="small-12 columns">
                        <h3>Cash Register</h3>
                    </div>
                    <div className="small-12 columns">
                        { !this.state.stack ? (
                            <div>
                                <h4>Fill in initial cash</h4>
                                <CashStackUI onUserSubmit={this.setInitalCash} />
                            </div>
                        ) : (
                            <div>
                                <div className="callout large primary">
                                    <div className="row column">
                                        <p>Output:</p>
                                        <h4 className="text-center">...</h4>
                                        <p>${this.state.stack.getSum().toString()}</p>
                                    </div>
                                </div>
                                 { !this.state.newPayment ? (
                                     <div className="button-group">
                                        <a className="secondary button" onClick={this.showPayment}>New payment</a>
                                        <a className="button">Get current cash details</a>
                                    </div>
                                ) : (
                                    <NewPayment onSubmit={this.onNewPayment} />
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}