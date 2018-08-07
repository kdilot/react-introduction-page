import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

const emp = [
  {
    'start': '2013.10',
    'end': '2014.12',
    'title': 'Wein Technology, Inc (Korea)',
    'contents': 'sdfasdfasdfasdf',
    'skills' : [
      'PHP',
      'JavaScript',
      'PostgreSQL',
      'MySQL',
    ]
  },
  {
    'start': '2014.4',
    'end': '2015.11',
    'title': 'Dico System, Inc (Korea)',
    'contents': 'a',
    'skills' : [
      'PHP',
      'JavaScript',
      'JQuery',
      'Restful API',
      'MySQL',
      'MariaDb',
    ]
  },
 
];

const EmpList = emp.map(
  (list, index) => (
    <Grid key={index}>
      <Cell col={4}>
        <p>{list.start} - {list.end}</p>
      </Cell>
      <Cell col={8}>
        <h4>{list.title}</h4>
        <p>{list.contents}</p>
        {list.skills = list.skills.map(
          (_list, index) => <p className="icon-white" key={index}>{_list}</p>
        )}
      </Cell>
    </Grid>
  )
)

class Employment extends Component {
  render() {
    return (
      <div>
        <h2>Employment</h2>
        {EmpList}
      </div>
    );
  }
}

export default Employment;