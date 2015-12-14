"use strict";

const ClickListener = React.createClass({
	componentDidMount() {
		window.addEventListener("click", this.props.onClick);
	},
	componentWillUnmount() {
		window.removeEventListener("click", this.props.onClick);
	},
	render() {
		return (
			<div/>
		);
	}
});

const ListenerComponent = React.createClass({
	handleClick(){
		console.log("do something...");
	},
	render() {
		return (
			<div>
				<ClickListener onClick={this.handleClick}/>
			</div>
		);
	}
});

const Element = React.createClass({
	getInitialState() {
		return {
			enabled: true
		};
	},
	render() {
		return (
			<div>
				<h3>
					Listener element demonstration
				</h3>
				<p>
					This module demonstrates a listener pattern using a specialized React element.
					(Tip: Open the console, then click somewhere. The listener is registered / removed as needed)
				</p>
				<div>
					Events are {this.state.enabled ? "handled" : "not handled"}
				</div>
				{this.state.enabled && <button onClick={() => {this.setState({enabled: false})}}>Remove component</button>}
				{!this.state.enabled && <button onClick={() => {this.setState({enabled: true})}}>Add component</button>}
				{this.state.enabled &&
					<ListenerComponent
					/>
				}
			</div>
		);
	}
});

