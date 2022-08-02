import React from 'react';
import FlipMove from "react-flip-move";
import Thumbnail from './Thumbnail';

function Results({results}) {
    return (
        <FlipMove className="px-6 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3">
            {results.map((result) => (
                <Thumbnail key={result.id} result={result} />
            ))}
        </FlipMove>
    );
}

export default Results;