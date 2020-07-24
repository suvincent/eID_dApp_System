import React, { Component } from 'react';
import { Button, Card } from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import verify from '../../../ethereum/academic/verify';
import { Link } from '../../../routes';

class StudentPage extends Component {
  static async getInitialProps() {
    const certificates = await verify.methods.getDeployedCerts().call();

    return { certificates };
  }

  renderCampaign() {
    const items = this.props.certificates.map(string => {
      return {
        header: string,
        description: (
          <Link route={`/Academic/certificates/${string}/success`}>
            <a>View Certificate</a>
          </Link>
        ),
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
          {this.renderCampaign()}
        </div>
      </Layout>
    );
  }
}

export default StudentPage;