import React, { Component } from 'react';
import {  Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';

class SuccessPage extends Component {
  render() {
    return (
      <Layout>
        <div>
          <h1>Successfully Upload!!!</h1>
        </div>
      </Layout>
    );
  }
}

export default SuccessPage;