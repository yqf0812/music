import { getHotList } from './../api/index'
import { HOT_LIST } from './mutation-types'
export default {    
    //获取热门歌单
    //异步
    async reqHotList({ commit}) {
        const result = await getHotList(); //mutation必须是同步的
        commit(HOT_LIST, { hotlist:result.searchArr.list})
    }


}