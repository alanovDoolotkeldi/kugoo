import React from "react";

function Search() {
    function handleSubmit (event) {
        event.preventDefault()
    }
  return (
    <form onSubmit={handleSubmit} action="" className="search-form">
      <div className="form-content">
        <div className="everywhere">
          Везде <img src="/public/assets/svg/bottom.svg" alt="" />
        </div>

        <input type="text" placeholder="Искать самокат KUGO" />
        <button type="submit">
          <img src="/public/assets/svg/search.svg" alt="" />
        </button>
      </div>
    </form>
  );
}

export default Search;
