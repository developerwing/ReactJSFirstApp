import React, { Component } from 'react';
import Counter from './counter'
class Counters extends Component {
    
    render() {
       
        return (
            <div>
                <button  onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {this.props.counters.map(m => <Counter key={m.id}
                    counter = {m}
                    selected={true}
                    onIncrement = {this.props.onIncrement}
                    onDelete={this.props.onDeletion}
                    onDecrement = {this.props.onDecrement}
                ><span>{m.id}</span>
                </Counter>)}
            </div>
        );
    }
    
}

export default Counters;