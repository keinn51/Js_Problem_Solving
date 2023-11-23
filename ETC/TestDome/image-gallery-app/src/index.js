import React, { useCallback, useState } from "react";
import { createRoot } from "react-dom/client";

const ImageGallery = ({ links }) => {
    const [stateLinks, setStateLinks] = useState(links);

    const renderer = useCallback(() => {
        return stateLinks.map((link, i) => (
            <div className="image" key={link + i}>
                <img src={link} />
                <button
                    className="remove"
                    onClick={() => {
                        const _newLinks = [...stateLinks];
                        _newLinks.splice(i, 1);
                        setStateLinks(_newLinks);
                    }}
                >
                    X
                </button>
            </div>
        ));
    }, [stateLinks]);

    return <div>{renderer()}</div>;
};

document.body.innerHTML = "<div id='root'> </div>";

const rootElement = document.getElementById("root");
const links = ["https://bit.ly/3lmYVna", "https://bit.ly/3flyaMj"];
const root = createRoot(rootElement);
root.render(<ImageGallery links={links} />);

setTimeout(() => {
    document.querySelectorAll(".remove")[0]?.click();
    setTimeout(() => {
        console.log(rootElement?.innerHTML);
    });
});
