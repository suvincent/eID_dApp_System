import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import Head from 'next/head';
import { Link } from '../routes';

export default () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
    <Link route="/Eid/List">
        <a className="item">Entity list</a>
    </Link>
    <Link route="/Eid/CreateEntity">
        <a className="item">+</a>
    </Link>

    <Menu.Menu position="right">
        <Link route="/">
        <a className="item">Go to Dapps</a>
        </Link>
    </Menu.Menu>
    </Menu>
  )
}