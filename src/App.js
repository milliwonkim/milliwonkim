import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Footer from './component/footer/Footer';

import Login from './component/auth/Login';
import Logout from './component/auth/Logout';
import Developer from './component/Developer';
import Article from './component/article/Article';
import Feed from './component/article/feed/Feed';

import styled, { createGlobalStyle } from 'styled-components';

import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import './App.css';

const GlobalStyle = createGlobalStyle`
  html body {
    font-family: Raleway;
    height: 100vh;
    box-sizing: border-box;
  }
`;

const StyledDiv = styled.div`
`;

const app = () => {



  let routes = (
    <Switch>
      <Route path="/whoisthedeveloper" component={Developer} />
      <Route path="/article" component={Article} />
      <Route path="/:id" component={Feed} />
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Home} />
    </Switch>
  );

  // if (this.props.isAuthenticated) {
  //   routes = (
  //     <Switch>
  //       <Route path="/whoisthedeveloper" component={Developer} />
  //       <Route path="/logout" component={Logout} />
  //     </Switch>
  //   )
  // }

  return (
    <div>
      <GlobalStyle />
      <Navbar />
        <StyledDiv>
          {routes}
        </StyledDiv>
      <Footer />
    </div>
  );
}

export default app;
