import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Reservas from "../pages/Reservas";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/reservas" component={Reservas} />
    </Switch>
  );
}
