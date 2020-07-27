import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import { Link } from '../../../routes';
import CourseRow from '../../../components/CourseRow';
import certData from '../../../certificate.json';
import CryptoJS from 'crypto-js';
class Transcript extends Component {
  static async getInitialProps() {
    const transcriptCount = certData.transcript.length;
    //console.log(transcriptCount);
    
    const transcripts = await Promise.all(
      Array(transcriptCount).fill().map((element, index) => {
        return certData.transcript[index];
      })
    );

    //console.log(transcripts);

    return { transcripts };
  }

   renderRows() {
     return this.props.transcripts.map((transcript, index) => {
       return (
        <CourseRow
          key={index}
          transcript={transcript}
        />
       );
     });
   }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;

    return (
      <Layout>
        <h1>Transcript</h1>
        <Link route={"/Academic/certificates/success"}>
          <a>back</a>
        </Link>
        <Table>
          <Header>
            <Row>
              <HeaderCell>CourseID</HeaderCell>
              <HeaderCell>Name</HeaderCell>
              <HeaderCell>Grade</HeaderCell>
              <HeaderCell>Credit</HeaderCell>
              <HeaderCell>Semester</HeaderCell>
              <HeaderCell>End date</HeaderCell>
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

export default Transcript;