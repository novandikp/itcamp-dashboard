import React from "react";
import parser from "react-html-parser";
const Timeline = ({ data }) => {
    return ( <
        section className = "box-timeline py-5 mb-5 position-relative"
        style = {
            { "z-index": "1200" } }
        id = "banner" >
        <
        div className = "header-timeline mb-4" >
        <
        div className = "block-title text-center" >
        <
        h2 className = "block-title__title" >
        <
        span > Timeline < /span> <
        /h2> <
        p > { parser(data.nama_lomba) } < /p> <
        /div> <
        div className = "timeline" > {
            data.timeline.map((data, index, arr) => ( <
                div className = "item-timeline" >
                <
                div className = "line-timeline" >
                <
                div className = "round-timeline" >
                <
                div className = "round-inner" >
                <
                div className = "item-round" > < /div> <
                /div> <
                /div> {
                    arr.length - 1 !== index && ( <
                        div className = "garistimeline" > < /div>
                    )
                } <
                /div> <
                div className = "ml-3" >
                <
                h1 className = "title-timeline" > { data.tahap } < /h1> <
                p className = "css-13wylk3" > { data.tanggal } < /p> <
                /div> <
                /div>
            ))
        } <
        /div> <
        /div> <
        /section>
    );
};
export default Timeline;