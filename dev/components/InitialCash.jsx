import React from 'react';
import CashStack from './CashStack';

export default class InitialCash extends React.Component {
    render() {
        return (
            <div>
                <h4>Fill in initial cash</h4>
                <CashStack />
            </div>
        );
    }
}