var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      maxResults: options.max,
      q: options.query,
      type: 'video',
      key: options.key,
      videoEmbeddable: true
    },
    dataType: 'json',
    success: (data) => callback(data.items),
    error: () => {
      console.error('youtube: Failed to get videos');
    }
  });
};

export default searchYouTube;