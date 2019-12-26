import React, {Component} from 'react';
import axiosApi from "../axios";
import {Container} from "reactstrap";

class Pages extends Component {

    state = {
        title: '',
        content: ''
    };

    async getInfo() {
        const page = this.props.match.params.name;
        const response = await axiosApi.get('/pages/' + page + '.json');
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
                <h2>{this.state.title}</h2>
                <p>{this.state.content}</p>
            </Container>
        );
    }
}

export default Pages;