import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui';
import router from './router'
import store from './store'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
