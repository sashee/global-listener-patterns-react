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

