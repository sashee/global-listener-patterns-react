"use strict";

var ListenerComponent = React.createClass({
	displayName: "ListenerComponent",
	getInitialState: function getInitialState() {
		return {
			innerClicks: 0
		};
	},
	componentDidMount: function componentDidMount() {
		window.addEventListener("click", this.handleMouseClickWithLeak);
		window.addEventListener("click", this.handleMouseClickWithWarning);
		window.addEventListener("click", this.handleMouseClickWithListener);
	},
	handleMouseClickWithLeak: function handleMouseClickWithLeak() {
		// This method does not do anything useful, but it is present
		console.log("do something...");
	},
	handleMouseClickWithWarning: function handleMouseClickWithWarning() {
		// Calls setState, which results a warning if the component is not mounted
		this.setState({ innerClicks: this.state.innerClicks + 1 });
	},
	handleMouseClickWithListener: function handleMouseClickWithListener() {
		// The listener is still active, even though the component is unmounted
		this.props.onMouseClick();
	},
	render: function render() {
		return React.createElement("div", null);
	}
});

var Errors = React.createClass({
	displayName: "Errors",
	getInitialState: function getInitialState() {
		return {
			clicks: 0,
			enabled: true
		};
	},
	componentDidMount: function componentDidMount() {
		var _this = this;

		setTimeout(function () {
			_this.setState({ enabled: false });
		}, 0);
	},
	handleMouseClick: function handleMouseClick() {
		this.setState({ clicks: this.state.clicks + 1 });
	},
	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"h3",
				null,
				"Errors demonstration"
			),
			React.createElement(
				"p",
				null,
				"This example demonstrates the different errors when you fail to remove a global mouse click event listener. (Tip: Click somewhere and check the console)"
			),
			React.createElement(
				"p",
				null,
				"The component that registered the listener is removed from the page, but it is still calling the handler (error #3). It also emits console.log events (error #1), effectively leaking memory and cpu. Also it sets it's internal state even though it is unmounted, resulting an error from React."
			),
			React.createElement(
				"div",
				null,
				"clicks: ",
				this.state.clicks
			),
			this.state.enabled && React.createElement(ListenerComponent, {
				onMouseClick: this.handleMouseClick
			})
		);
	}
});
//# sourceMappingURL=Errors.js.map
