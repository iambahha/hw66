import React from 'react';


const withLoader = (WrappedComponent) => {
	return props => {
		return <WrappedComponent {...props} />
	}
};


export default withLoader;