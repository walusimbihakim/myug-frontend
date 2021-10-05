import PhoneNumberPage from "./pages/PhoneNumberPage";
import { BrowserRouter, Switch } from "react-router-dom";
import CaptiveLayout from "./components/layouts/CaptiveLayout";
import LayoutRoute from "./components/routes/LayoutRoute";
import TermsPage from "./pages/TermsPage";


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <LayoutRoute
          exact
          path="/guest/s/default"
          layout={CaptiveLayout}
          component={(props) => <PhoneNumberPage {...props} />}
        />

        <LayoutRoute
          exact
          path="/terms"
          layout={CaptiveLayout}
          component={(props) => <TermsPage {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
