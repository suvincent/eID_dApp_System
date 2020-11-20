import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
      <Menu.Menu position="left">
        <Link route="/dResume/index">
          <a className="item">dResume</a>
        </Link>
      </Menu.Menu>

      <Link route="/dResume/school/upload/login">
        <a className="item">Upload Mode</a>
      </Link>

      <Link route="/dResume/school/cancel/login">
        <a className="item">Cancel Mode</a>
      </Link>

      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">Go to Other Services</a>
        </Link>
      </Menu.Menu>
    </Menu>
  )
}