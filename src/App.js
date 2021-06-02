import './App.css';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Auth from '../src/pages/Auth';
import HomePage from '../src/pages/HomePage';

function App() {
  return (
    <div className="AppContainer">
      {/* <header className="App-header"> */}
        <BrowserRouter >
          <Switch>
            <Route path="/" exact>
              <Auth />
            </Route>
            <Route path="homepage" exact>
              <HomePage />
            </Route>
          </Switch>
        </BrowserRouter>
      {/* </header> */}
    </div>
  );
}

export default App;

