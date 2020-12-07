import axios from 'axios';

const KEY = 'AIzaSyAfa22KRuR1cQPe_oq2Ltctm0tKpF2tdIo';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
