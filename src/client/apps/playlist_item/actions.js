let itemId = 0;

export const addPlayListItem = url => ({
  type: 'ADD_ITEM',
  id: itemId++,
  url,
});

export const fetchTitle = videoId => (
  window.gapi.client.load('youtube', 'v3').then(() =>
    window.gapi.client.youtube.videos.list({
      part: 'snippet',
      id: videoId,
    }).then(response => response.result.items[0].snippet.title)
  )
);