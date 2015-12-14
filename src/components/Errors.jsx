"use strict";

const ListenerComponent = React.createClass({
	getInitialState() {
		return {
			innerClicks: 0
		};
	},
	componentDidMount() {
		window.addEventListener("click", this.handleMouseClickWithLeak);
		window.addEventListener("click", this.handleMouseClickWithWarning);
		window.addEventListener("click", this.handleMouseClickWithListener);
	},
	handleMouseClickWithLeak() {
		// This method does not do anything useful, but it is present
		console.log("do something...");
	},
	handleMouseClickWithWarning() {
		// Calls setState, which results a warning if the component is not mounted
		this.setState({innerClicks: this.state.innerClicks + 1});
	},
	handleMouseClickWithListener() {
		// The listener is still active, even though the component is unmounted
		this.props.onMouseClick();
	},
	render() {
		return (
			<div/>
		);
	}
});

const Errors = React.createClass({
	getInitialState() {
		return {
			clicks: 0,
			enabled: true
		};
	},
	componentDidMount() {
		setTimeout(() => {
			this.setState({enabled: false});
		}, 0);
	},
	handleMouseClick() {
		this.setState({clicks: this.state.clicks + 1});
	},
	render() {
		return (
			<div>
				<h3>
					Errors demonstration
				</h3>
				<p>
					This example demonstrates the different errors when you fail to
					remove a global mouse click event listener. (Tip: Click somewhere and check the console) 
				</p>
				<p>
					The component that registered the listener is removed from the page,
					but it is still calling the handler (error #3). It also emits console.log events
					(error #1), effectively leaking memory and cpu. Also it sets it's internal state
					even though it is unmounted, resulting an error from React.
				</p>
				<div>clicks: {this.state.clicks}</div>
				{this.state.enabled &&
					<ListenerComponent
						onMouseClick={this.handleMouseClick}
					/>
				}
			</div>
		);
	}
});

