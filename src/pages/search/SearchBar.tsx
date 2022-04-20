import React from "react";
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: purple[200],
        },
    },
});

interface ISearchBarProps {
    HandleSearchGif: Function;
    onChangeHandler: Function;
}
const SearchBar = ({ HandleSearchGif, onChangeHandler}:ISearchBarProps)=>{
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <form onSubmit={(searchQuery)=>HandleSearchGif(searchQuery)} className="form-search">
                    <TextField
                        id="outlined-basic" 
                        type="text"
                        className="textfield"
                        placeholder="Search GIF"
                        onChange={(searchQuery)=>onChangeHandler(searchQuery)}
                        label="Search Gif"
                        variant="outlined" />
                    <button className="search-button" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </ThemeProvider>
    );
};
export {SearchBar};