"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var ListenerComponent = React.createClass({
	displayName: "ListenerComponent",
	getInitialState: function getInitialState() {
		return {
			listeners: []
		};
	},
	componentDidMount: function componentDidMount() {
		this.handleListenersChange([], this.state.listeners);
	},
	componentWillUnmount: function componentWillUnmount() {
		this.handleListenersChange(this.state.listeners, []);
	},
	componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
		this.handleListenersChange(prevState.listeners, this.state.listeners);
	},
	handleListenersChange: function handleListenersChange(prevListeners, listeners) {
		_.each(_.difference(prevListeners, listeners), function (listenerToRemove) {
			window.removeEventListener("click", listenerToRemove);
		});
		_.each(_.difference(listeners, prevListeners), function (listenerToAdd) {
			window.addEventListener("click", listenerToAdd);
		});
	},
	addNewListener: function addNewListener() {
		var listenerNum = this.state.listeners.length;
		var newListener = function newListener() {
			console.log("Listener #" + listenerNum);
		};
		this.setState({ listeners: [].concat(_toConsumableArray(this.state.listeners), [newListener]) });
	},
	removeLastListener: function removeLastListener() {
		this.setState({ listeners: _.initial(this.state.listeners) });
	},
	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"div",
				null,
				"There are ",
				this.state.listeners.length,
				" listener(s) attached"
			),
			React.createElement(
				"button",
				{ onClick: this.addNewListener },
				"Add listener"
			),
			this.state.listeners.length > 0 && React.createElement(
				"button",
				{ onClick: this.removeLastListener },
				"Remove the last listener"
			)
		);
	}
});

var DidUpdate = React.createClass({
	displayName: "DidUpdate",
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
				"DidUpdate pattern demonstration"
			),
			React.createElement(
				"p",
				null,
				"This module allows multiple listeners and are handled through the component's state. (Tip: Open the console, add some listeners and click around. Removing listeners or the component will not result in leftover handlers)"
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
//# sourceMappingURL=DidUpdate.js.map
