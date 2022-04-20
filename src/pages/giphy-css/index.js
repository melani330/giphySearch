// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React from "react";
// import TrendingPage from "./trending";
// import SearchPage from "./search";
import { Gif } from "../search/Gif";

function GiphyCss(){
    return(
        <div class="parent white">
            <div class="card purple">
                <h1>Title Here</h1>
                <div class="visual yellow">{Gif}</div>
                <p>Descriptive Text. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed est error repellat veritatis.</p>
            </div>
        </div>
    );
}
export default GiphyCss;