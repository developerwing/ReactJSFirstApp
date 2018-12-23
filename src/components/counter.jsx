import React, { Component } from "react";

class Counter extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-1">
                        <span className={this.getBadgeClasses()}>
                            {this.formatCount()}{" "}
                        </span>
                    </div>
                    <div className="col">
                        <button
                            className="btn btn-sm btn-secondary m-2"
                            onClick={() => {
                                this.props.onIncrement(this.props.counter);
                            }} >
                            +</button>

                        <button
                            className="btn btn-sm btn-secondary"
                            onClick={() => {
                                this.props.onDecrement(this.props.counter);
                            }}  disabled = {this.props.counter.value === 0 ? 'disabled' : '' }
                        >
                            -  
            </button>
                        <button
                            onClick={() => this.props.onDelete(this.props.counter.id)}
                            className="btn btn-danger m-2"
                        >
                            Delete
            </button>
                    </div>
                </div>
            </div>
        );
    }

    formatCount() {
        return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
    }
    getBadgeClasses() {
        let classes = "badge badge-pill badge-";
        return (classes += this.props.counter.value === 0 ? "warning" : "primary");
    }
}

export default Counter;
