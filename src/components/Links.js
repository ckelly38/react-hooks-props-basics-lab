import React from "react";

function Links({github, linkedin}) {
    let nogit = (github === undefined || github === null || github.length < 1);
    let nolinked = (linkedin === undefined || linkedin === null || linkedin.length < 1);
    //console.log("nogit = " + nogit);
    //console.log("nolinked = " + nolinked);
    if (nogit === nolinked)
    {
        if (nogit)
        {
            return (
                <h3>Links</h3>
            );
        }
        else
        {
            return (
                <>
                    <h3>Links</h3>
                    <a href={github}>{github}</a>
                    <a href={linkedin}>{linkedin}</a>
                </>
              );
        }
    }
    else
    {
        if (nogit)
        {
            return (
                <>
                    <h3>Links</h3>
                    <a href={linkedin}>{linkedin}</a>
                </>
              );
        }
        else
        {
            return (
                <>
                    <h3>Links</h3>
                    <a href={github}>{github}</a>
                </>
              );
        }
    }
}

export default Links;
