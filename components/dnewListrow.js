import React, { Component } from 'react';
import { Table, Label ,Button} from 'semantic-ui-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link, Router } from '../routes';

class DnewsRow extends Component {
 click(){
    console.log("press");
    Router.pushRoute('/dNews/journalist/editor/ChildInfo')
 }
  render() {
    const { Row, Cell, Body } = Table;
    const { request } = this.props;
    return (
      <Row>
        <Cell>{request.EA}</Cell>
        <Cell>
          {(request.state=="0")?"SendRequest":
           (request.state=="1")?"GrantedPermission":
           (request.state=="2")?"DeniedPermission":
           (request.state=="3")?"SentAttestationRequest":
           (request.state=="4")?"GrantedAttestation":
           (request.state=="5")?"DeniedAttestation":"Error"}


            <Button onClick={this.click}disabled={!(request.state=="1")}>go to child table</Button>
          
        </Cell>
      </Row>
    );
  }
}

export default DnewsRow;