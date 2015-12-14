"use strict";

var ClickListener = React.createClass({
	displayName: "ClickListener",
	componentDidMount: function componentDidMount() {
		window.addEventListener("click", this.props.onClick);
	},
	componentWillUnmount: function componentWillUnmount() {
		window.removeEventListener("click", this.props.onClick);
	},
	render: function render() {
		return React.createElement("div", null);
	}
});

var ListenerComponent = React.createClass({
	displayName: "ListenerComponent",
	handleClick: function handleClick() {
		console.log("do something...");
	},
	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(ClickListener, { onClick: this.handleClick })
		);
	}
});

var Element = React.createClass({
	displayName: "Element",
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
				"Listener element demonstration"
			),
			React.createElement(
				"p",
				null,
				"This module demonstrates a listener pattern using a specialized React element. (Tip: Open the console, then click somewhere. The listener is registered / removed as needed)"
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
//# sourceMappingURL=Element.js.map
