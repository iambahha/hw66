import React from 'react';
import NavigationItem from "./NavigationItem/NavigationItem";
import './NavigationItems.css';
import {Nav} from "reactstrap";


const NavigationItems = () => (
	<Nav className="NavigationItems container">
		<NavigationItem to="/" exact>Home</NavigationItem>
		<NavigationItem to="/pages/main" exact>Main</NavigationItem>
		<NavigationItem to="/pages/about" exact>About</NavigationItem>
		<NavigationItem to="/pages/services" exact>Services</NavigationItem>
		<NavigationItem to="/pages/payment" exact>Payment</NavigationItem>
		<NavigationItem to="/pages/contacts" exact>Contacts</NavigationItem>
		<NavigationItem to="/pages/admin" exact>Admin</NavigationItem>
	</Nav>
);


export default NavigationItems;
