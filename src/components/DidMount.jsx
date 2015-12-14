"use strict";

const ListenerComponent = React.createClass({
	componentDidMount() {
		window.addEventListener("click", this.handleMouseClick);
	},
	componentWillUnmount() {
		window.removeEventListener("click", this.handleMouseClick);
	},
	handleMouseClick() {
		console.log("do something...");
	},
	render() {
		return (
			<div/>
		);
	}
});

const DidMount = React.createClass({
	getInitialState() {
		return {
			enabled: true
		};
	},
	render() {
		return (
			<div>
				<h3>
					DidMount / WillUnmount pattern demonstration
				</h3>
				<p>
					This module demonstrates a listener pattern using componentDidMount / componentWillUnmount
					events. (Tip: Open the console and click somewhere to see the event is handled.
					Remove the component, and add back if you'd like, the listener works as it is supposed)
				</p>
				<div>
					Events are {this.state.enabled ? "handled" : "not handled"}
				</div>
				{this.state.enabled && <button onClick={() => {this.setState({enabled:false})}}>Remove component</button>}
				{!this.state.enabled && <button onClick={() => {this.setState({enabled:true})}}>Add component</button>}
				{this.state.enabled &&
					<ListenerComponent
					/>
				}
			</div>
		);
	}
});

