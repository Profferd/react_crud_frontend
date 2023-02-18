import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Header from 'components/Header';
import HomePage from 'pageProviders/Home';
import EditorPage from 'pageProviders/Editor';
import * as PAGES from 'constants/pages';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route
              component={HomePage}
              path={`/${PAGES.HOME}`}
            />
            <Route
              component={EditorPage}
              path={`/${PAGES.EDITOR}/:bookId`}
            />
            <Redirect from="*" to={`/${PAGES.HOME}`}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
