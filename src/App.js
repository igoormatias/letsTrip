import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"

import store from "./store"

import Routes from "./routes/routes";

import Header from "./components/Header";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
    </Provider>
  );
}

export default App;
