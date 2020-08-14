import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
      <Menu.Menu position="left">
        <a className="item">Academic Credential</a>
      </Menu.Menu>

      <Link route="/Academic/getRegistry/index">
        <a className="item">Verify Mode</a>
      </Link>

      <Link route="/Academic/school/index">
        <a className="item">School Mode</a>
      </Link>

      <Link route="/Academic/ministry/index">
        <a className="item">Ministry Mode</a>
      </Link>

      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">Go to Other Services</a>
        </Link>
      </Menu.Menu>
    </Menu>
  )
}