import React from 'react';

import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import NavbarContainer from './navbar/navbar_container';
import LoginFormContainer from './login_form/login_form_container';
import Home from './home/home_page';
import UserOnboardingContainer from './user_profile/user_onboarding_container';


export const App = () => {
    return (
        <div>
            <header>
                <NavbarContainer />
            </header>
            <div className="main">
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <Route exact path="/signup" component={UserOnboardingContainer} />
                <Route exact path="/" component={Home} />
            </div>
        </div>
    )
}