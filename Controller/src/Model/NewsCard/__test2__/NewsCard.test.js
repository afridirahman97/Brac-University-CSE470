import React from 'react';
import ReactDOM from 'react-dom';
import NewsCard from './../NewsCard';



it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NewsCard></NewsCard>, div)
})