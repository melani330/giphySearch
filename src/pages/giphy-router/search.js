// ==================== -EXERCISE 3 MODUL 3- =====================
// ================ -CONVERT FORM KE SEARCHBAR- ==================
import React from "react";
import { SearchBar } from "../search/SearchBar";
import {Gif} from "../search/Gif";
import doFetchAPI from "../search/doFetchAPI";
import { useState } from "react";


const Search = () => {
    const [search, setSearch] = useState("");
    const [gifs, setGifs] = useState([]);

    const onChangeHandler = (e) => {
        setSearch(e.target.value);
    };

    const HandleSearchGif = async () => {
        const result = await doFetchAPI(search);
                setGifs(result);
    };

    return (
        <div>
            <div>
                <h1>Hello!!</h1>
                <p>Start Searching your favorite gif</p>
                <SearchBar
                    HandleSearchGif={HandleSearchGif}
                    onChangeHandler={onChangeHandler}
                />
            </div>
            <div className="gif-container">
                <Gif gifs={gifs}/>
            </div>
        </div>
    );
};
export default Search;
