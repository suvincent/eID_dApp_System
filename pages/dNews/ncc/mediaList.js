import React, { Component } from 'react';
import { Table, Button, Label } from 'semantic-ui-react';
import Layout from '../../../components/Layout_dNews';
import SchoolRow from '../../../components/SchoolRow';
import Newsid from '../../../ethereum/dNews/Certificate';
import { Link } from '../../../routes';

class MediaPage extends Component {
  static async getInitialProps() {
    const { address } = props.query;
    const mediaCount = await Newsid.methods.getMediasCount().call();

    const medias = await Promise.all(
      Array(parseInt(mediaCount)).fill().map((element, index) => {
        return Newsid.methods.Medias(index).call();
      })
    );

    console.log(medias);

    return { medias, address };
  }

  renderRows() {
    return this.props.medias.map((media, index) => {
      return (
        <SchoolRow 
          key={index}
          media={media}
        />
      );
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;

    return (
      <Layout>
        <h1>All qualified Medias</h1>
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