"use strict";

const ListenerComponent = React.createClass({
	getInitialState() {
		return {
			listeners: []
		}
	},
	componentDidMount() {
		this.handleListenersChange([], this.state.listeners);
	},
	componentWillUnmount() {
		this.handleListenersChange(this.state.listeners, []);
	},
	componentDidUpdate(prevProps, prevState) {
		this.handleListenersChange(prevState.listeners, this.state.listeners);
	},
	handleListenersChange(prevListeners, listeners) {
		_.each(_.difference(prevListeners, listeners), (listenerToRemove) => {
			window.removeEventListener("click", listenerToRemove);
		});
		_.each(_.difference(listeners, prevListeners), (listenerToAdd) => {
			window.addEventListener("click", listenerToAdd);
		});
	},
	addNewListener() {
		const listenerNum = this.state.listeners.length;
		const newListener = () => {
			console.log(`Listener #${listenerNum}`);
		};
		this.setState({listeners: [...this.state.listeners, newListener]});
	},
	removeLastListener() {
		this.setState({listeners: _.initial(this.state.listeners)});
	},
	render() {
		return (
			<div>
				<div>
					There are {this.state.listeners.length} listener(s) attached
				</div>
				<button onClick={this.addNewListener}>Add listener</button>
				{this.state.listeners.length > 0 && <button onClick={this.removeLastListener}>Remove the last listener</button>}
			</div>
		);
	}
});

const DidUpdate = React.createClass({
	getInitialState() {
		return {
			enabled: true
		};
	},
	render() {
		return (
			<div>
				<h3>
					DidUpdate pattern demonstration
				</h3>
				<p>
					This module allows multiple listeners and are handled through the component's state.
					(Tip: Open the console, add some listeners and click around. Removing listeners or the
					 component will not result in leftover handlers)
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

