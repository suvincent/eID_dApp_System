import React, { Component } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import { Router } from '../../../routes';
import Layout from '../../../components/Layout_dNews';

class News extends Component {
    render () {
        return (
        <Layout>
            <h1>News Browser</h1>
            <a class="ui blue image label">
            Jake Hsu
            <div class="detail">Journalist</div>
            </a>
            <a class="ui red image label">
            media name
            <div class="detail">Media</div>
            </a>
            <a class="ui yellow image label">
            News Type (Business)
            <div class="detail">Addr.</div>
            </a>
            <div class = "ui item" style={{marginTop:25}}>
                <div class = "item">
                    <div class = "content">
                    <a class="header">Header</a>
                    <div class="meta">
                        <span>Description</span>
                    </div>
                    <div class="description">
                        <p></p>
                    </div>
                    <div class="extra">
                        Additional Details
                     </div>
                    </div>
                </div>
            </div>
        </Layout>
        )
    };
}

export default News;