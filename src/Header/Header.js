import React from 'react';
import './Header.scss';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isOn: false};
		this.onToggle = this.props.onToggle;
	}
	
	handleToggle(e) {
		this.setState({isOn: !this.state.isOn});
		this.onToggle();
	}
	
	render() {
		return (
			<div className="component-wrapper">
                <p>Portfolio</p>
				<Switch 
					isOn={this.state.isOn}	
					handleToggle={this.handleToggle.bind(this)}
				/>
                <p>About</p>
			</div>		
		);
	}
}

const Switch = function(props) {
	let classNames = ["switch", (props.isOn) ? "switch_is-on" : "switch_is-off"].join(" ");
	return (
		<div className={classNames} onClick={props.handleToggle}>
			<ToggleButton 
				isOn={props.isOn}
			/>
		</div>
	);
}

const ToggleButton = function(props) {
		let classNames = ["toggle-button", (props.isOn) ? "toggle-button_position-right" : "toggle-button_position-left"].join(" ");
		return (<div className={classNames}></div>);
};

export default Header;