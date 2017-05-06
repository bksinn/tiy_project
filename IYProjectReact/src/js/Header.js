import React from 'react';
import '../css/App.css';


class Header extends React.Component {

 render() {
   return (
	<div className="title-search-wrapper">

      <h1 className="title-name">FindMD</h1>
          <input type="text" className="search-field search-box" id="search-term" placeholder="Longitude"/>
          <input type="text" className="search-field search-box" id="search-term" placeholder="Latitude"/>

          <button {...this.props} id="search-button" className="search-button btn btn-primary" type="button">Search
          </button>
   		<button className="search-button btn btn-primary" type="button">Filter</button>
      </div>
   );
 }

}

module.exports = Header;
