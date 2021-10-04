import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

function App() {
  return (
    <BrowserRouter basename={getBasename()}>
      <Switch>
        <Route path="/" component={LoginPage} />
        <Route exact path="/guest/s/:slug" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
