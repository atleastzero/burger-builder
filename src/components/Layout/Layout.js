import React from 'react';

import Aux from '../../hoc/Aux'

const layout = props => (
    <Aux>
        <ul>
            <li>Toolbar</li>
            <li>SideDrawer</li>
            <li>Backdrop</li>
        </ul>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;