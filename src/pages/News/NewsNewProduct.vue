<template>
  <div class="newproduct">
    <div class="title">全新水果啤酒&nbsp;<br class="rwd">驚喜上市!</div>
    <div class="poster"></div>
    <div class="content">
      「野狼酒吧推出全新水果啤酒系列，將水果的清新與啤酒的醇厚完美結合！從芒果、草莓到覆盆子，每一款都是大廚精心調製的美味。此次活動限時推出，現在購買水果啤酒，即可享受超值優惠！帶上好友一同來野狼酒吧，品味這獨特的水果啤酒風味吧！」<br><br>
      <span>活動名稱：</span><br class="rwd">嚐鮮水果啤酒！限時優惠！<br>
      <span>活動時間：</span><br class="rwd">即日起至6月底<br>
      <span>活動地點：</span><br class="rwd">野狼酒吧<br>
      <span>活動內容：</span><br class="rwd">購買水果啤酒即享指定折扣<br>
      <span>限量回饋：</span><br class="rwd">購買任一啤酒即贈送水果啤酒試喝<br>
      快來野狼酒吧，一起探索水果與啤酒的美妙組合！<br><br>
      <router-link to="/reserve/reserve-info" class="routerstyle"><span>點我訂位</span></router-link>
    </div>
    <div class="button">
      <button class="el-icon-s-grid" @click="BackNews">返回列表</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    BackNews() {
      this.$router.push({
        path: "/news",
      });
    },
  },
};
</script>

<style scoped>
.newproduct {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  font-size: 40px;
  font-weight: bold;
  margin: 15px;
  color: rgb(123, 44, 2);
  text-align: center;
}
.poster {
  background-image: url(../../assets/poster2.jpg);
  background-size: cover;
  background-position:center;
  width: 80%;
  height: 350px;
}
.content {
  width: 80%;
  background-color: white;
  padding: 40px;
  font-size: 23px;
  box-sizing: border-box;
}
span {
  font-size: 25px;
  font-weight: bold;
}
.routerstyle{
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: black;
}
.routerstyle:hover{
  cursor: pointer;
  text-decoration: underline;
}
.button {
  display: flex;
  justify-content: center;
}
.el-icon-s-grid {
  padding: 10px;
  margin: 10px;
  font-size: 25px;
  font-weight: bolder;
  background-color: rgba(239, 239, 36, 0.311);
  border-radius: 5px;
}
.el-icon-s-grid:hover {
  cursor: pointer;
  background-color: rgba(239, 239, 36, 0.622);
}
.rwd{
  display: none;
}
@media screen and (max-width:767px){
  .poster{
    height: 250px;
  }
  .title{
    font-size: 35px;
  }
  .rwd{
    display: block;
  }
  .content{
    font-size: 20px;
  }
  span{
    font-size: 23px;
  }
}
@media screen and (max-width:414px){
  .title{
    font-size: 28px;
  }
  .poster{
    width: 90%;
  }
  .content{
    width: 90%;
    padding: 20px;
    font-size: 18px;
  }
  span{
    font-size: 20px;
  }
  .el-icon-s-grid{
    font-size: 20px;
  }
}
</style>