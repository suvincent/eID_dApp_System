import React, { Component } from 'react';
import { Table, Label } from 'semantic-ui-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class SchoolRow extends Component {
  render() {
    const { Row, Cell, Body } = Table;
    const { school } = this.props;
    return (
      <Row>
        <Cell>{school.name}</Cell>
        <Cell>
          {school.schoolAddr}
          <CopyToClipboard text={school.schoolAddr}>
            <Label as='a' icon='copy' content='copy' style={{ marginLeft: 10 }}></Label>
          </CopyToClipboard>
        </Cell>
      </Row>
    );
  }
}

export default SchoolRow;