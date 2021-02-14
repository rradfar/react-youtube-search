import React, {useEffect, useState} from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

function App() {
  const [videos, setVideo] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  const onTermSubmit = (async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    setVideo(response.data.items,);
    setSelectedVideo(response.data.items[0]);
  });

  useEffect(() => {
    onTermSubmit('buildings')
  }, [])

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
      <div className='ui container'>
        <SearchBar onFormSubmit={onTermSubmit}/>
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={selectedVideo}/>
            </div>
            <div className='five wide column'>
              <VideoList
                  onVideoSelect={onVideoSelect}
                  videos={videos}
              />
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
