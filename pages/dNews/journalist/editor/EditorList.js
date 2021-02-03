import React, { Component } from 'react';
import { Button, Form, Input, Message, Table } from 'semantic-ui-react';
import Layout from '../../../../components/Layout_dNews';
import DnewsRow from '../../../../components/dnewListrow';
import Newsid from '../../../../ethereum/dNews/Certificate';
//import verify from '../../../../ethereum/academic/verify';
import { Link } from '../../../../routes';

class Requests extends Component {
  static async getInitialProps(props) {
    const { state,address,index } = props.query;
    const requestcount = await Newsid.methods.return_request_length(address).call();
    const requests = await Promise.all(
      Array(parseInt(requestcount)).fill().map((element, index) => {
        return Newsid.methods.Requests(address,index).call();
      })
    );

    return { state,requests };
  }

  renderRows() {
    console.log(this.props.requests)
    return this.props.requests.map((request, index) => {
      return (
        <DnewsRow 
          key={index}
          request={request}
          state={(this.props.state==0)?true:false}
        />
      );
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;

    return (
      <Layout>
        <h1>All the News Requests</h1>
        <Link route={"/dNews/journalist/EditorReq"}>
          <a>back</a>
        </Link>
        <Table>
          <Header>
            <Row>
              <HeaderCell>Editor's&ensp;Entity&ensp;Address</HeaderCell>
              <HeaderCell>state</HeaderCell>
            </Row>
          </Header>
          <Body>
            {this.renderRows()}
          </Body>
        </Table>
      </Layout>
    );
  }
}

export default Requests;
