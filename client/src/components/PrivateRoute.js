import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: CompositionEvent, ...rest}) => {
    return (
        <Route
        {...rest}
        render={props => {
            if(localStorage.getItem('token')) {
                return <Compoenent {...props} />;
            }else {
                return <Redirect to='/login/' />
            }
        }}
        />
    )
}

export default PrivateRoute;