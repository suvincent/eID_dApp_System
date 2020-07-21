import React, { Component } from 'react';
import {  Button } from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import { Link } from '../../../routes';
import certData from '../../../certificate.json';

class SuccessPage extends Component {
  render() {
    return (
      <Layout>
        <div>
          <h1>Successfully Verified!!!</h1>
          <Link route="/Academic/certificates/transcript">
            <a>
              <Button floated="right" content='View Transcript' primary={true}/>
            </a>
          </Link>
          <br />
          <h2>Issued to </h2>
          <h3 style={{display: 'inline'}}>Address</h3>&emsp;{certData.data[0].address}
          <br /><br />
          <h3 style={{display: 'inline'}}>Name</h3>&emsp;&emsp;&thinsp;&thinsp;{certData.data[0].name}
          <h2>Issued by</h2>
          <h3 style={{display: 'inline'}}>Address</h3>&emsp;{certData.issuers[0].address}
          <br /> <br />
          <h3 style={{display: 'inline'}}>Name</h3>&emsp;&emsp;&thinsp;&thinsp;{certData.issuers[0].name}
          <h2>Issued at</h2>
          <h3 style={{display: 'inline'}}>Date</h3>&emsp;&emsp;&emsp;{certData.data[0].issuedDate}
        </div>
      </Layout>
    );
  }
}

export default SuccessPage;