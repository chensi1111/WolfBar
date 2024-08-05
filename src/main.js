import Vue from 'vue'
import App from './App.vue'
import { Icon,Carousel,CarouselItem,Backtop,Timeline,TimelineItem,Dialog,Steps,Step,Badge,MessageBox,Message,TimePicker,TimeSelect,DatePicker} from 'element-ui'
import VueRouter from 'vue-router'
import router from './router'
Vue.use(Icon)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Backtop)
Vue.use(VueRouter)
Vue.use(Timeline)
Vue.use(TimelineItem)
Vue.use(Dialog)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Badge)
Vue.use(TimePicker)
Vue.use(TimeSelect)
Vue.use(DatePicker)

Vue.component(Message.name, Message)
Vue.component(MessageBox.name, MessageBox)
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  //event bus
  beforeCreate(){
    Vue.prototype.$bus=this;
  }
}).$mount('#app')

router.afterEach((to)=>{
  if(to.meta.toTop){
    window.scrollTo(0, 0)
  }
})