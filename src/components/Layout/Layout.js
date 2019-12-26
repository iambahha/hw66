import React, {Fragment} from 'react';
import Navigation from "../Navigation/NavigationItems/NavigationItems";

const Layout = props => (
    <Fragment>
        <Navigation />
            <main style={{marginTop: '72px'}}>
                {props.children}
            </main>
    </Fragment>
);

export default Layout;