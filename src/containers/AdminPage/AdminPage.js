import React, {Component} from 'react';
import axiosApi from "../../axios";
import {PAGES} from "../../constants";
import {Button, Container, Form, FormGroup, Input, Label} from "reactstrap";

class AdminPage extends Component {
    state = {
        content: '',
        title: '',
        category: PAGES[0]
    };

    inputChangeHandler = e => this.setState({[e.target.name]: e.target.value});

    async getThisInfo() {
        const thisPage = this.state.category;
        const response = await axiosApi.get('/pages/' + thisPage + '.json');
        if (response.data) {
            this.setState({title: response.data.title, content: response.data.content});
        }
    }

    async componentDidMount() {
        this.getThisInfo();
    }

    formSubmitHandler = async (e) => {
        e.preventDefault();

        const editedInfo = {
            content: this.state.content,
            title: this.state.title,
        };
        this.setState({title: '', content: ''});

        const thisPage = this.state.category;
        await axiosApi.put('/pages/' + thisPage + '.json', editedInfo);
        this.props.history.push('/pages/' + thisPage);
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.category !== this.state.category) {
            return this.getThisInfo();
        }
    }

    render() {
        return (
            <Container>
                <h1>Admin Page</h1>
                <Form onSubmit={this.formSubmitHandler}>
                    <FormGroup>
                        <Label for="category">Page</Label>
                        <Input type="select" name="category" id="category" value={this.state.category}
                               onChange={this.inputChangeHandler}>
                            {PAGES.map(page => (
                                <option key={page} value={page}>{page}</option>
                            ))}
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input required
                               type="text"
                               name="title"
                               id="title"
                               value={this.state.title}
                               onChange={this.inputChangeHandler}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="content">Content</Label>
                        <Input required
                               type="textarea"
                               name="content"
                               id="content"
                               value={this.state.content}
                               onChange={this.inputChangeHandler}/>
                    </FormGroup>
                    <Button color="info">Save</Button>
                </Form>
            </Container>


        );
    }
}

export default AdminPage;