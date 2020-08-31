import React, { Component } from 'react';
import { Form, Button, Input, Message, Dropdown, Table } from 'semantic-ui-react';
import Layout from '../../../components/EidUserLayout';
import web3 from '../../../ethereum/web3';
import { Router, Link } from '../../../routes';

class StorageHomePage extends Component {
    state = {
        addr: '',
        errorMessage: ''
    }

    onSubmit = async (event) => {
        event.preventDefault();

        if(this.state.addr!='0x0000000000000000000000000000000000000000')
            Router.pushRoute(`/Eid/storage/${this.state.addr.toString()}`);
    
        
    };

    render() {
        return(
            <Layout>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} >
                    <Form.Field>
                        <label>Go to your entity</label>
                        <Input
                            label={{ basic: true, content: 'address' }}
                            labelPosition='right'
                            placeholder=''
                            value={this.state.addr}
                            onChange={event => this.setState({ addr: event.target.value })}
                        />

                    </Form.Field>

                    <Message error header="Oops!" content={this.state.errorMessage} />
                    <Button primary>Go!</Button>
                </Form>
            </Layout>

        )
    }
}

export default StorageHomePage;