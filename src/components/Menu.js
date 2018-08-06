import React from 'react';
import { Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';

const MenuList = [
  {
    'route': '',
    'name': 'Home'
  },
  {
    'route': 'project',
    'name': 'Project'
  },
  {
    'route': 'resume',
    'name': 'Resume'
  },
];

const List = MenuList.map(
  list => (
    <Link to={list.route} key={list.route}>{list.name}</Link>
  )
)

const Menu = () => (
  <Navigation>
    {List}
  </Navigation>
)


export default Menu;