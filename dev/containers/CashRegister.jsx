import React from 'react';
import NewPayment from "../containers/NewPayment";
import CashStackUI from '../containers/CashStackUI';


export default class CashRegister extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            stack: null,
            initialStack: null,
            newPayment: false,
            showDetails: false,
            display: []
        }

        this.setInitalCash = this.setInitalCash.bind(this)
        this.showPayment = this.showPayment.bind(this)
        this.hidePayment = this.hidePayment.bind(this)
        this.onNewPayment = this.onNewPayment.bind(this)
        this.updateDisplay = this.updateDisplay.bind(this)
        this.showDetails = this.showDetails.bind(this)
        this.hideDetails = this.hideDetails.bind(this)
    }

    setInitalCash(stack) {
        this.setState({
            stack,
            initialStack: Object.assign({}, stack)
        })
    }

    showPayment() {
        this.setState({
            newPayment: true
        })
    }

    hidePayment() {       
        this.setState({
            newPayment: false
        }) 
    }

    showDetails() {
        this.setState({
            showDetails: true
        })
    }

    hideDetails() {
        console.log('hide')
        this.setState({
            showDetails: false
        })
    }

    updateDisplay() {
        const display = this.state.display.slice(1)
        this.setState({
            display
        })
    }

    onNewPayment(price, paymentStack) {

        const changeResult = this.state.stack.getChange(price, paymentStack)

        const ret = { message: [] }
        const display = this.state.display.slice()
        if (changeResult.success) {
            this.setState({
                stack: changeResult.newStack
            })
            display.push('Change Due: $' + changeResult.changeStack.getSum().toString())
        }
        else {
            display.push('Insufficient Funds')
        }
        display.push('Closed')
        this.setState({ 
            display,
            newPayment: false
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="small-12 columns">
                        <h3>Cash Register</h3>
                    </div>
                    <div className="small-12 columns">
                        {!this.state.stack ? (
                            <div>
                                <h4>Fill in initial cash</h4>
                                <CashStackUI onUserSubmit={this.setInitalCash} />
                            </div>
                        ) : (
                                <div>
                                    <div className="callout secondary display">
                                        <h4 className="text-center message">
                                            {this.state.display.length > 0 && (
                                                <span>
                                                    {this.state.display[0]}<br /><a onClick={this.updateDisplay}>Next</a>
                                                </span>
                                            )}
                                        </h4>
                                        <div className="row details">
                                            <div className="small-12 medium-4 columns">Total available:<br />${this.state.stack.getSum().toString()}</div>
                                            <div className="small-12 medium-4 columns">Initialy available:<br />${this.state.initialStack.getSum().toString()}</div>
                                            <div className="small-12 medium-4 columns">Sold amount:<br />${this.state.stack.getSum().minus(this.state.initialStack.getSum()).toString()}</div>
                                        </div>
                                    </div>
                                    {!this.state.newPayment ? (
                                        <div className="button-group">
                                            <a className="secondary button" onClick={this.showPayment} disabled={this.state.display.length > 0}>New payment</a>
                                            <a className="button" onClick={this.showDetails} disabled={this.state.showDetails}>Get current cash details</a>
                                        </div>
                                    ) : (
                                        <NewPayment onSubmit={this.onNewPayment} onCancel={this.hidePayment} />
                                    )}
                                    { this.state.showDetails && (
                                        <div>
                                            <h4>Available cash detail</h4>
                                            <CashStackUI onUserSubmit={this.hideDetails} stack={this.state.stack} disabled={true} />
                                        </div>
                                    )}
                                </div>
                            )}
                    </div>
                </div>
            </div>
        )
    }
}