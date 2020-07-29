import React, { Component } from 'react';
import { Button, Card } from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import verify from '../../../ethereum/academic/verify';
import { Link } from '../../../routes';

class StudentPage extends Component {
  static async getInitialProps() {
    const certCount = await verify.methods.getDeployedCerts().call();

    const certificates = await Promise.all(
      Array(parseInt(certCount)).fill().map((element, index) => {
        return verify.methods.certificates(index).call();
      })
    );

    return { certificates };
  }

  renderCertificate() {
    const items = this.props.certificates.map((certificate, index) => {
      return {
        header: certificate.name,
        description: (
          <Link route={`/Academic/certificates/${certificate.certHash}/success`}>
            <a>View Certificate</a>
          </Link>
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
          <Link route={"/Academic/school/index"}>
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