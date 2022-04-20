import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React from "react";
import TrendingPage from "./trending";
import SearchPage from "./search";

function Search(){
    return(
        <Router>
            <Switch>
                <Route path="/search">
                    <SearchPage/>
                </Route>
                <Route path="/">
                    <TrendingPage/>
                </Route>
            </Switch>
        </Router>
    );
}
export default Search;