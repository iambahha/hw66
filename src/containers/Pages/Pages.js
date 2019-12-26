import React, {Component} from 'react';
import axiosApi from "../../axios";
import {Container} from "reactstrap";

class Pages extends Component {

    state = {
        content: '',
        title: '',
    };

    async getInfo() {
        const thisPage = this.props.match.params.name;
        const response = await axiosApi.get('/pages/' + thisPage + '.json');
        if (response.data) {
            this.setState({title: response.data.title, content: response.data.content});
        }
    }

    async componentDidMount() {
        this.getInfo();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.name !== this.props.match.params.name) {
            return this.getInfo();
        }
    }

    render() {
        return (
            <Container>
                <h1>{this.state.title}</h1>
                <h4>{this.state.content}</h4>
            </Container>
        );
    }
}

export default Pages;