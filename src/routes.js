import React from "react";
import { Route, Switch } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { ApiTestPage } from "./pages/ApiTestPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipeDetailPage } from "./pages/RecipeDetailPage";
import { RecipeEditPage } from "./pages/RecipeEditPage";

export function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/recipes" component={RecipeListPage} />
            <Route exact path="/recipe/:slug" component={RecipeDetailPage} />
            <Route path="/recipe/:slug/upravit" component={RecipeEditPage} />
            <Route path="/api-test" component={ApiTestPage} />
            <Route path="*" component={NotFoundPage} />
            {/* TODO: PATHS */}
            <Route path="/prilohy" component={NotFoundPage} />
        </Switch>
    );
}
