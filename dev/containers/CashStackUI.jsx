import React from 'react'
import CashStackModel from '../libs/CashStackModel'

export default class CashStack extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cashstack: this.props.stack || new CashStackModel()
        }

        this.submitStack = this.submitStack.bind(this)
        this.handleItemCountChange = this.handleItemCountChange.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        
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

        const okbuttonclasses = ['button']
        !this.props.onCancel && okbuttonclasses.push('expanded')
        return (
            <div className="stackForm">
                <div className="row">
                    {this.state.cashstack.getItemsStack().map((item, idx) => (
                        <div className="small-12 medium-4 columns" key={idx}>
                            <div className="input-group">
                                <span className="input-group-label">{item.label}:</span>
                                <input disabled={this.props.disabled} className="input-group-field" type="number" value={item.count} name={item.name} onChange={this.handleItemCountChange(idx)} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="small-12 medium-9 columns">
                        <h5 className="text-right">Total: $ {this.state.cashstack.getSum().toString()}</h5>
                    </div>
                    <div className="small-12 medium-3 columns">
                        <div className="button-group">
                            {this.props.onCancel && <button type="button" className="button secondary" onClick={this.props.onCancel}>Cancel</button>}
                            <button type="button" className={okbuttonclasses.join(' ')} onClick={this.submitStack}>OK</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}