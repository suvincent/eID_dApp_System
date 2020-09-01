import React, { Component } from 'react';
import { Table, Button, Label } from 'semantic-ui-react';
import Layout from '../../../components/Layout_dNews';
import SchoolRow from '../../../components/SchoolRow';
import verify from '../../../ethereum/academic/verify';
import { Link } from '../../../routes';

class MediaPage extends Component {
  static async getInitialProps() {
    const schoolCount = await verify.methods.getSchoolsCount().call();

    const schools = await Promise.all(
      Array(parseInt(schoolCount)).fill().map((element, index) => {
        return verify.methods.schools(index).call();
      })
    );

    console.log(schools);

    return { schools };
  }

  renderRows() {
    return this.props.schools.map((school, index) => {
      return (
        <SchoolRow 
          key={index}
          school={school}
        />
      );
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;

    return (
      <Layout>
        <h1>All qualified Media</h1>
        <Link route={"/dNews/ncc/Certificate"}>
          <a>back</a>
        </Link>
        <Table>
          <Header>
            <Row>
              <HeaderCell>Media&ensp;Name</HeaderCell>
              <HeaderCell>Media&ensp;Entity&ensp;Address</HeaderCell>
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

export default MediaPage;