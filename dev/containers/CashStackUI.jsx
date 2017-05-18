import React from 'react'
import CashStackModel from '../libs/CashStackModel'

export default class CashStack extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cashstack: new CashStackModel()
        }

        this.submitStack = this.submitStack.bind(this)
        this.handleItemCountChange = this.handleItemCountChange.bind(this)
    }

    submitStack() {
        this.props.onUserSubmit(this.state.cashstack)
    }

    handleItemCountChange(idx) {
        return (evt) => {
            const cashstack = new CashStackModel()
            cashstack.addStack(this.state.cashstack)
            cashstack.updateKind(evt.target.name, evt.target.value)

            this.setState({ cashstack })
        }
    }

    render() {


        return (
            <div className="stackForm">
                <div className="row">
                    {this.state.cashstack.getItemsStack().map((item, idx) => (
                        <div className="small-12 medium-4 columns" key={idx}>
                            <div className="input-group">
                                <span className="input-group-label">{item.label}:</span>
                                <input className="input-group-field" type="number" name={item.name} onChange={this.handleItemCountChange(idx)} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="small-12 medium-10 columns">
                        <h5 className="text-right">Total: $ {this.state.cashstack.getSum().toString()}</h5>
                    </div>
                    <div className="small-12 medium-2 columns">
                        <button type="button" className="button expanded" onClick={this.submitStack}>Go</button>
                    </div>
                </div>
            </div>
        );
    }
}