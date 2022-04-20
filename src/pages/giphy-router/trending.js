// ==================== -EXERCISE 3 MODUL 3- =====================
// ================ -CONVERT FORM KE SEARCHBAR- ==================
import React from "react";
import { Gif } from "../search/Gif";
const { useState, useEffect } = require("react");


function Trending(){

const [gifs, handleGifs] = useState([]);

const fetchGifs = async()=>{
    const api_key = process.env.REACT_APP_GIPHY_KEY;
    
    const gifs = await fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=12&q=`
    )
        .then(res => res.json())
        .then(json => json.data)
    return gifs;
};

useEffect(() => {
    fetchGifs().then(gifs => handleGifs(gifs));
}, []);

return(
    <div>
        <h1>Trending Gif!</h1>
        <div className="gif-container">
            <Gif gifs={gifs} />
        </div>
    </div>
)
}
export default Trending;