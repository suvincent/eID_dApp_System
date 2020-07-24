import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import certData from '../certificate.json';

class CourseRow extends Component {
  render() {
    const { Row, Cell, Body } = Table;
    const { transcript } = this.props; 
    //console.log(certData.transcript.length);
    //console.log(transcript.courseCode);
    return (
      <Row>
        <Cell>{transcript.courseCode}</Cell>
        <Cell>{transcript.name}</Cell>
        <Cell>{transcript.grade}</Cell>
        <Cell>{transcript.courseCredit}</Cell>
        <Cell>{transcript.semester}</Cell>
        <Cell>{transcript.examinationDate}</Cell>
      </Row>
    );
  }
}

export default CourseRow;