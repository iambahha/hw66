import React, {Component, Fragment} from 'react';
import Backdrop from '../../components/UI/Backdrop/Backdrop';


const withLoader = (WrappedComponent, axios) => {

	return class WithLoading extends Component {
		constructor(props) {
			super(props);

			this.state = {
				error: null,
				loading: false
			};

			this.state.interceptorId = axios.interceptors.response.use(res => {
				this.setState({loading: false});
				return res;
			}, error => {
				this.setState({error});
				throw error;
			});

			axios.interceptors.request.use(req => {
				this.setState({loading: true});
				return req;
			});
		}

		componentWillUnmount() {
			axios.interceptors.response.eject(this.state.interceptorId);
		}

		dismissLoading = () => {
			this.setState({loading: false})
		};

		render() {
			return (
				<Fragment>
					<Backdrop show={!!this.state.loading}
										onClick={this.dismissLoading} />
					<WrappedComponent {...this.props} />
				</Fragment>
			)
		}
	}
};

export default withLoader;