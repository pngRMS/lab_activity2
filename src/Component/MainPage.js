import React from "react";
import Card from "./Card";
import cardData from "./cardData";
import Card2 from "./Card2";
import cardData2 from "./cardData2";
function MainPage() {
  return (
    <main className="_bf41cb02-index_layout-view">
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js"
        integrity="sha256-gOQJIa9+K/XdfAuBkg2ONAdw5EnQbokw/s2b8BqsRFg="
        crossorigin="anonymous"
      ></script>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://denali-static.grammarly.com/css/c51116413f7444baba9a/stylesv26.css"
      />

      <div className="mt-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            aria-label="Search"
            aria-describedby="searchBtn"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="searchBtn"
            >
              Search
            </button>
          </div>
        </div>

        <div className="container mt-4 row">
          {/* Map through cardData (assuming it has more than one card) */}
          {cardData.map((card, index) => (
            <div key={index} className="row-col ml-3">
              <div className="row wrap">
                <Card cardObj={card} />
                {/* Assume that you want to display a card from cardData2 as well */}
                {cardData2.map((card2, index2) => (
                  <Card2 key={index2} cardObj={card2} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default MainPage;
