<template>
  <div id="app">
    <el-backtop :right="20" :bottom="50" />
    <MyHeader></MyHeader>
    <MyBooking></MyBooking>
    <router-view></router-view>
    <MyFooter></MyFooter>    
  </div>
</template>

<script>
import MyHeader from './components/Header.vue'
import MyFooter from './components/Footer.vue'
import MyBooking from './components/Booking.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter,
    MyBooking
  },
  mounted () {
    AOS.init()
  }
}
</script>

<style>
html,
body{
  margin: 0;
  height: 100%;
  font-family: "Helvetica", "Arial","LiHei Pro","黑體-繁","微軟正黑體", sans-serif;
}

.el-backtop{
  background-color: rgba(255, 255, 255, 0.5);
}
@media screen and (max-width:767px){
  .el-backtop{
    height: 35px;
    width: 35px;
  }
  
}
@media screen and (max-width:414px){
  .el-backtop{
    height: 30px;
    width: 30px;
  }
  
}
</style>
  