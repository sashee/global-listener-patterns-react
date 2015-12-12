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
	componentDidMount() {
		setTimeout(() => {
			this.setState({enabled: false});
		}, 0);
	},
	render() {
		return (
			<div>
				{this.state.enabled &&
					<ListenerComponent
					/>
				}
			</div>
		);
	}
});

