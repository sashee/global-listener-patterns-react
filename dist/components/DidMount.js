"use strict";

var ListenerComponent = React.createClass({
	displayName: "ListenerComponent",
	componentDidMount: function componentDidMount() {
		window.addEventListener("click", this.handleMouseClick);
	},
	componentWillUnmount: function componentWillUnmount() {
		window.removeEventListener("click", this.handleMouseClick);
	},
	handleMouseClick: function handleMouseClick() {
		console.log("do something...");
	},
	render: function render() {
		return React.createElement("div", null);
	}
});

var DidMount = React.createClass({
	displayName: "DidMount",
	getInitialState: function getInitialState() {
		return {
			enabled: true
		};
	},
	render: function render() {
		var _this = this;

		return React.createElement(
			"div",
			null,
			React.createElement(
				"h3",
				null,
				"DidMount / WillUnmount pattern demonstration"
			),
			React.createElement(
				"p",
				null,
				"This module demonstrates a listener pattern using componentDidMount / componentWillUnmount events. (Tip: Open the console and click somewhere to see the event is handled. Remove the component, and add back if you'd like, the listener works as it is supposed)"
			),
			React.createElement(
				"div",
				null,
				"Events are ",
				this.state.enabled ? "handled" : "not handled"
			),
			this.state.enabled && React.createElement(
				"button",
				{ onClick: function onClick() {
						_this.setState({ enabled: false });
					} },
				"Remove component"
			),
			!this.state.enabled && React.createElement(
				"button",
				{ onClick: function onClick() {
						_this.setState({ enabled: true });
					} },
				"Add component"
			),
			this.state.enabled && React.createElement(ListenerComponent, null)
		);
	}
});
//# sourceMappingURL=DidMount.js.map
