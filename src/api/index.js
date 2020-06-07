import ajax from './ajax'


//基础路径

const BASE_URL = 'http://localhost:3000';

//热门歌单
export const getHotList = () => ajax(BASE_URL + '/hotList');
