import PhoneNumberPage from "./pages/PhoneNumberPage";
import { BrowserRouter, Switch } from "react-router-dom";
import CaptiveLayout from "./components/layouts/CaptiveLayout";
import LayoutRoute from "./components/routes/LayoutRoute";
import TermsPage from "./pages/TermsPage";
import SocialMediaLoginPage from "./pages/SocialMediaLoginPage";

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
        <LayoutRoute
          exact
          path="/social"
          layout={CaptiveLayout}
          component={(props) => <SocialMediaLoginPage {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
