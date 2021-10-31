import React from "react";
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";

import ChoicePage from "../pages/ChoicePage/index";
import CustomizePage from "../pages/CustomizePage/index";
import SummaryPage from "../pages/SummaryPage/index";

const Routes: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="sistema-acai/escolha" component={ChoicePage} />
          <Route path="sistema-acai/personalização" component={CustomizePage} />
          <Route path="sistema-acai/resumo" component={SummaryPage} />
          <Route exact path="*">
            <Redirect to="sistema-acai/escolha" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
