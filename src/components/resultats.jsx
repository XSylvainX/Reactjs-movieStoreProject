import React from 'react';
import Result from './result'

const Resultats = ({ results, openPopup }) => {
    return (
        <section className="resultats">
            {results.map(result => (
                <Result key={result.imdbID} result={result} openPopup={openPopup} />
            ))}
        </section>
    )
}
export default Resultats;
