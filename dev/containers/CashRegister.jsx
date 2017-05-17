import React from 'react';
import NewPayment from "../components/NewPayment";
import CashStack from '../components/CashStack';


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
                                <CashStack onUserSubmit={this.setInitalCash} />
                            </div>
                        ) : (
                            <div>
                                <div className="callout large primary">
                                    <div className="row column">
                                        <p>Output:</p>
                                        <h4 className="text-center">...</h4>
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