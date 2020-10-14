import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import verify from '../../../ethereum/academic/verify';
import { Link } from '../../../routes';
import web3 from '../../../ethereum/academic/web3';

class StudentPage extends Component {
  static async getInitialProps(props) {
    const { schoolAddress } = props.query;

    const accounts = await web3.eth.getAccounts();
    const certCount = await verify.methods.getDeployedCerts(accounts[0]).call();
    const studentList = await verify.methods.getStudentList(accounts[0]).call();
    
    const certificates = await Promise.all(
      Array(parseInt(certCount)).fill().map((element, index) => {
        return verify.methods.schoolOwnedCert(accounts[0], studentList[index]).call();
      })
    );

    return { certificates, schoolAddress };
  }

  renderCertificate() {
    const items = this.props.certificates.map((certificate, index) => {
      return {
        header: certificate.name,
        description: (
          <a href={'https://ipfs.io/ipfs/' + certificate.certHash}>
            View from IPFS
          </a> 
          // <Link route={`/Academic/certificates/${certificate.certHash}/success`}>
          //   <a>View from IPFS</a>
          // </Link>
        ),
        meta: certificate.studentAddr,
        fluid: true
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h1>All verified certificates</h1>
          <Link route={`/Academic/school/${this.props.schoolAddress}/index`}>
            <a>back</a>
          </Link>
          <br /><br />
          {this.renderCertificate()}
        </div>
      </Layout>
    );
  }
}

export default StudentPage;