import {
    HOT_LIST
} from './mutation-types'

export default {
    [HOT_LIST](state, { hotlist}) {
        state.hotList = hotlist;
    }
}