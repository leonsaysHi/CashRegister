import React from 'react';

export default class CashStack extends React.Component {
    render() {
        return (
            <div className="stackForm">
                <div className="row">
                    <div className="small-12 medium-4 columns">
                        <div className="input-group">
                            <span className="input-group-label">Pennies:</span>
                            <input className="input-group-field" type="number" />
                        </div>
                    </div>
                    <div className="small-12 medium-4 columns">
                        <div className="input-group">
                            <span className="input-group-label">Nickel:</span>
                            <input className="input-group-field" type="number" />
                        </div>
                    </div>
                    <div className="small-12 medium-4 columns">
                        <div className="input-group">
                            <span className="input-group-label">Dime:</span>
                            <input className="input-group-field" type="number" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="small-12 medium-10 columns">
                        <h5 className="text-right">Total: $ XXX</h5>
                    </div>
                    <div className="small-12 medium-2 columns">
                        <button type="button" className="button expanded">Go</button>
                    </div>
                </div>
            </div>
        );
    }
}