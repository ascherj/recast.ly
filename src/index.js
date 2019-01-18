import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js'
import YOUTUBE_API_KEY from './config/youtube.js';

ReactDOM.render(<App searchYouTube={searchYouTube}/>, document.getElementById('app'));
