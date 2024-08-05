<template>
  <div class="container">
    <el-steps :active="active"  finish-status="success">
      <el-step title="購物車"></el-step>
      <el-step title="用戶資料"></el-step>
      <el-step title="訂購完成"></el-step>
    </el-steps>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
      active:0
    }
  },
  watch:{
    '$route'(to){
      if(to.path==='/shopping-cart/shopping-list'){
        this.active=0
      }
      if(to.path==='/shopping-cart/customer-info'){
        this.active=1
      }
      if(to.path==='/shopping-cart/order-complete'){
        this.active=2
      }
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  min-height: 100vh;
  background-color: rgba(69, 53, 38, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.el-icon-shopping-cart-2 {
  font-size: 40px;
  font-weight: bolder;
  margin-top: 50px;
}
.el-steps{
  width: 70%;
  margin-top:50px;
}
::v-deep .el-step__title{
  font-size: 30px;
  font-weight: bold;
  color: black;
}
::v-deep .el-step__title.is-wait{
  color: rgb(90, 90, 90);
}
::v-deep .el-step__icon{
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
  font-size: 25px;
}
::v-deep .el-step__line{
  margin-top: 5px;
}
@media screen and (max-width:767px){
  ::v-deep .el-step__title{
    font-size: 20px;
  }
  ::v-deep .el-step__icon{
    width: 30px;
    height: 30px;
    font-size: 20px;
  }
  
}
@media screen and (max-width:414px){
  .el-steps{
    width: 80%;
  }
  ::v-deep .el-step__title{
    font-size: 18px;
  }
  ::v-deep .el-step__icon{
    width: 25px;
    height: 25px;
    font-size: 18px;
  }
  ::v-deep .el-step__line{
  margin-top: 0px;
}
}
</style>