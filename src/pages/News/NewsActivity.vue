<template>
  <div class="activity">
    <div class="title">周末啤酒狂歡日&nbsp;<br class="rwd">當日啤酒通通半價!</div>
    <div class="poster"></div>
    <div class="content">
      在這裡，您可以品嚐來自世界各地的精釀啤酒，體驗不同風味的美妙滋味。<br>
      與此同時，酒吧為您準備了豐富的美食和現場音樂表演，讓您在啤酒的陶醉中感受到愉悅與放鬆。<br>
      快約上您的好友，一起來野狼酒吧度過充滿啤酒和歡樂的週末吧！<br><br>
      <span>活動名稱：</span><br class="rwd">週末狂歡啤酒節<br>
      <span>活動時間：</span><br class="rwd">每週末晚上<br>
      <span>活動地點：</span><br class="rwd">野狼酒吧<br>
      <span>活動內容：</span><br>
      每週末，野狼酒吧為您帶來啤酒狂歡！所有種類的啤酒都享受半價優惠！<br>
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
.activity {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin: 15px;
  color: rgb(123, 44, 2);
}
.poster {
  background-image: url(../../assets/poster1.jpg);
  background-size: cover;
  background-position: right;
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
span{
font-size: 25px;
  font-weight: bold;
  margin-left: -10px;
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