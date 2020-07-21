import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import certData from '../certificate.json';

class CourseRow extends Component {
  render() {
    const { Row, Cell, Body } = Table;
    const reptiles = ['alligator', 'snake', 'lizard'];
    //const { id, request, approversCount } = this.props; 
    console.log(certData.transcript.length);
    return (
      <Body>
        <Row>
          <Cell>{certData.transcript[0].courseCode}</Cell>
          <Cell>{certData.transcript[0].name}</Cell>
          <Cell>{certData.transcript[0].grade}</Cell>
          <Cell>{certData.transcript[0].courseCredit}</Cell>
          <Cell>{certData.transcript[0].semester}</Cell>
          <Cell>{certData.transcript[0].examinationDate}</Cell>
        </Row>
        <Row>
          <Cell>{certData.transcript[1].courseCode}</Cell>
          <Cell>{certData.transcript[1].name}</Cell>
          <Cell>{certData.transcript[1].grade}</Cell>
          <Cell>{certData.transcript[1].courseCredit}</Cell>
          <Cell>{certData.transcript[1].semester}</Cell>
          <Cell>{certData.transcript[1].examinationDate}</Cell>
        </Row>
        <Row>
          <Cell>{certData.transcript[2].courseCode}</Cell>
          <Cell>{certData.transcript[2].name}</Cell>
          <Cell>{certData.transcript[2].grade}</Cell>
          <Cell>{certData.transcript[2].courseCredit}</Cell>
          <Cell>{certData.transcript[2].semester}</Cell>
          <Cell>{certData.transcript[2].examinationDate}</Cell>
        </Row>
      </Body>
    );
  }
}

export default CourseRow;