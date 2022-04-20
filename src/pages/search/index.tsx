// ==================== -EXERCISE 3 MODUL 3- =====================
// ================ -CONVERT FORM KE SEARCHBAR- ==================
import React from "react";
import { SearchBar } from "./SearchBar";
import {Gif} from "./Gif";
import doFetchAPI from "./doFetchAPI";
import { useState } from "react";

// const api_key = process.env.REACT_APP_GIPHY_KEY;
// const GIPHY_API = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=12&q=`;

const GIFSearch = () => {
    const [search, setSearch] = useState("");
    const [gifs, setGifs] = useState([]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const HandleSearchGif = async () => {
        const result = await doFetchAPI(search);
                setGifs(result);
    };

    return (
        <div>
        <SearchBar
            HandleSearchGif={HandleSearchGif}
            onChangeHandler={onChangeHandler}
        />
        <Gif gifs={gifs} />
    </div>
    );
};
export default GIFSearch;
