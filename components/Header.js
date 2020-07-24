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
    </Menu>
  )
}