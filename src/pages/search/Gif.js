import React from "react";
// import Paper from "@mui/material/Paper";

const Gif = (props) => {
    const {gifs} = props;
    return gifs.map((gif, index) => {
        return (
        <div className= "container" key={index}>
          <img data-testid="gif_image" src={gif.images.fixed_width.url} alt=""/>
          <p data-testid="gif_title">{gif.title}</p>
          {/* <p data-testid="gif_title" className="text-sm mt-2 mb-2">{props.title}</p> */}
        </div>
        );
    });
};
export {Gif};
