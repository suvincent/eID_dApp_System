import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
      <Link route="/Academic/index">
        <a className="item">Academic Credential</a>
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