import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

const edu = [
  {
    'start': '2018.3',
    'end': '2018.12',
    'title': 'D University (Korea)',
    'contents': 'sdfasdfasdfasdf',
  },
  {
    'start': '2019.3',
    'end': '2021.1',
    'title': 'KA',
    'contents': '',
  },
  {
    'start': '2021.3',
    'end': '2023.12',
    'title': 'D University (Korea)',
    'contents': 'sdfasdfasdfasdf',
  },
];

const EduList = edu.map(
  (list, index) => (
    <Grid key={index}>
      <Cell col={4}>
        <p>{list.start} - {list.end}</p>
      </Cell>
      <Cell col={8}>
        <h4>{list.title}</h4>
        <p>{list.contents}</p>
      </Cell>
    </Grid>
  )
)

class Education extends Component {
  render() {
    return (
      <div>
        <h2>Education</h2>
        {EduList}
      </div>
    );
  }
}

export default Education;