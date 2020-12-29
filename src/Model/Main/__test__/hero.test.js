import React from 'react';
import ReactDOM from 'react-dom';
import Apphero from './../hero';



it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Apphero></Apphero>, div)
})