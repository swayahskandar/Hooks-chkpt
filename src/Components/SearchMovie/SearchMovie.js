import React from "react";
import Rate from "../Rate/Rate";
import "./searchmovie.css";

export const SearchMovie = ({
  setNameSearch,
  setRatingSearch,
  ratingSearch,
}) => {
  return (
    <div className="search">
      <Rate
        className="star-rating"
        starIndex={setRatingSearch}
        rating={ratingSearch}
      />
      <div>
        <form action="" autoComplete="on">
          <input
            className="input-search"
            name="search"
            type="text"
            placeholder="search"
            onChange={(event) => {
              setNameSearch(event.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
};
