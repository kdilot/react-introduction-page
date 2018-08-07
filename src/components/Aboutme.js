import React, { Component } from 'react';

const Myinfo = [
  {
    'title': 'Introduction',
    'contents': 'sdfsdfsdffffffffffffffffsdfffffffffff'
  },
  {
    'title': 'Address',
    'contents': '-----------, CA'
  },
  {
    'title': 'Email',
    'contents': '----------@gmail.com'
  },
];

const MyinfoList = Myinfo.map(
  (list, index) => (
    <div key={index}>
      <hr />
      <h5>{list.title}</h5>
      <p>{list.contents}</p>
    </div>
  )
)

class Aboutme extends Component {
  render() {
    return (
      <div>
        <h2>RK</h2>
        {MyinfoList}
      </div>
    );
  }
}

export default Aboutme;