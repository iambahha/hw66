import React from "react";
import {NavLink as RouterNavLink} from 'react-router-dom';
import './NavigationItem.css';
import {NavItem, NavLink} from "reactstrap";



const NavigationItem = props => (
	<NavItem className="NavigationItem">
		<NavLink tag={RouterNavLink} to={props.to} exact={props.exact}>
			{props.children}
		</NavLink>
	</NavItem>
);



export default NavigationItem;