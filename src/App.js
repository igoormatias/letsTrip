import {  Router } from "react-router-dom";
import { Provider } from "react-redux"


import Routes from "./routes/routes";
import Header from "./components/Header";

import history from "./services/history";
import store from "./store"


function App() {
  return (
    <Provider store={store}>
    <Router history={history}>
      <Header />
      <Routes />
    </Router>
    </Provider>
  );
}

export default App;
