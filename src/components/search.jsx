import React from 'react';

const Search = ({ handleInput, search }) => {
    return (
        <section className="searchmovie-wrap">
            <input
                type="text"
                placeholder="Search a movie"
                className="searchmovie"
                onChange={handleInput}
                onKeyPress={search}
            />
        </section>
    )
}

export default Search