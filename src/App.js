import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/">
      <Route path="/" component={LoginPage}/>
      <Route exact path="/guest/s/:slug" component={LoginPage}/>
    </BrowserRouter>
  );
}

export default App;
