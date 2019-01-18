import App from './App.js';

var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onKeyUp={(event) => {
      props.updateVideos(event.target.value);
    }
    }/>
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// onKeyUp={(event) => {
//   debounced.cancel();
//   debounced();
// }}


// debounced(event) {
//  _.debounced(props.updateVideos(event.target.value), 2000);
// }


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
