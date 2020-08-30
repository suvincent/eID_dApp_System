import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import Head from 'next/head';
import { Link } from '../routes';

export default () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
        <Link route="/Eid/index">
        <a className="item">eID HomePage</a>
      </Link>
    <Link route="/Eid/storage">
        <a className="item">Storage</a>
    </Link>
    <Link route="/Eid/sendPage/index">
        <a className="item">Send</a>
    </Link>
    <Link route="/Eid/receivePage/index">
        <a className="item">Receive</a>
    </Link>

    <Menu.Menu position="right">
        <Link route="/">
        <a className="item">Go to Dapps</a>
        </Link>
    </Menu.Menu>
    </Menu>
  )
}