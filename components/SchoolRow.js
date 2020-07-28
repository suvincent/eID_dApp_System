import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import certData from '../certificate.json';

class SchoolRow extends Component {
  render() {
    const { Row, Cell, Body } = Table;
    const { school } = this.props;
    return (
      <Row>
        <Cell>{school.name}</Cell>
        <Cell>{school.schoolAddr}</Cell>
      </Row>
    );
  }
}

export default SchoolRow;