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

