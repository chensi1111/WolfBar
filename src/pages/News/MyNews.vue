<template>
  <div>
    <div class="poster">News</div>
    <div class="container">
      <div class="title">最新活動</div>
      <hr>
      <div class="news-container" v-show="showContainer" >
        <div class="news card1" @click="ToActivity" :data-aos="'fade-down'" data-aos-duration="1500">
          <img src="../../assets/news/card1.jpg">
          <div class="content">周末啤酒狂歡日&nbsp; <br class="rwd">當日啤酒通通半價!</div>
        </div>
        <div class="news card2" @click="ToNewProduct" :data-aos="'fade-down'" data-aos-duration="1500">
          <img src="../../assets/news/card2.jpg">
          <div class="content">全新水果啤酒驚喜上市!</div>
        </div>
      </div>
      <div class="title" v-show="showContainer">常駐活動</div>
      <hr>
      <div class="sub-container" v-show="showContainer">
        <div class="card" :data-aos="'fade-down'" data-aos-duration="1250">
          <div class="flip-card-container" :class="{ 'flip-card': isFlip[1] }" @click="flip(1)">
            <div class="front">
              <img src="../../assets/news/shot.jpg">
              <div class="card-content">當月壽星特別活動</div>
            </div>
            <div class="back">
              歡樂狂歡，美酒同樂~<br>
              當月壽星來店消費<br>
              幾歲生日就送幾支shot<br>
              趕快打電話預約!<br><br>
              Tel:02-1234-5678
            </div>
          </div>
          
        </div>

        <div class="card" :data-aos="'fade-down'" data-aos-duration="1500">
          <div class="flip-card-container" :class="{ 'flip-card': isFlip[2] }" @click="flip(2)">
            <div class="front">
              <img src="../../assets/news/bigbeer.jpg">
              <div class="card-content">啤酒大胃王挑戰賽</div>
            </div>
            <div class="back">
              盡情豪飲，樂不思歸~<br>
              每週五晚上舉辦啤酒大賽<br>
              當日冠軍酒錢通通免費<br>
              趕快打電話預約!<br><br>
              Tel:02-1234-5678
            </div>
          </div>
        </div>

        <div class="card" :data-aos="'fade-down'" data-aos-duration="1750">
          <div class="flip-card-container" :class="{ 'flip-card': isFlip[3] }" @click="flip(3)">
            <div class="front">
              <img src="../../assets/news/cheer.jpg">
              <div class="card-content">揪團喝酒享優惠</div>
            </div>
            <div class="back">
              美好時光，友情滿杯~<br>
              揪團來店5人以上<br>
              一人啤酒免費喝到飽<br>
              趕快打電話預約~<br><br>
              Tel:02-1234-5678
            </div>
          </div>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      showContainer: true,
      isFlip: {
        1: false,
        2: false,
        3: false
      }
    }
  },
  created() {
    // 初始化檢查路由
    this.checkRoute(this.$route);
  },
  methods: {
    ToActivity() {
      this.$router.push({
        path: '/news/activity'
      })
    },
    ToNewProduct() {
      this.$router.push({
        path: '/news/new-product'
      })
    },
    flip(index) {
      this.isFlip[index] = !this.isFlip[index]
    },
    checkRoute(to) {
      //路由為news時為true
      this.showContainer = to.path === '/news';
    }
  },
  watch: {
    '$route'(to) {
      //監聽路由變化
      this.checkRoute(to);
    }
  }

}
</script>

<style scoped>
.poster {
  background-image: url(../../assets/news-poster.jpg);
  background-size: cover;
  height: 300px;
  font-size: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  text-shadow: gray 5px 5px;
}

.container {
  background-color: rgba(252, 212, 94, 0.3);
}

.title {
  padding-top: 30px;
  text-align: center;
  font-size: 45px;
  font-weight: bold;
}

/*最新消息 */
.news-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

img {
  display: block;
}

.news {
  width: 500px;
  height: 600px;
  border: 3px solid black;
  margin: 30px;
  box-shadow: 5px 5px black;
}

.news:hover {
  cursor: pointer;
}

.content {
  height: 100px;
  background-color: rgba(248, 200, 58, 0.3);
  font-size: 25px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/*卡片區 */
.sub-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  height: 400px;
  width: 350px;
  perspective: 1000px;
  margin: 20px;
}

.card:hover {
  cursor: pointer;
  transform: translate(-5px, -5px);
}

.card-content {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
}

.flip-card-container {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border: black solid 2px;
  position: relative;
  /*flip card*/
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.front,
.back {
  height: 100%;
  width: 100%;
  position: absolute;
  overflow: hidden;
  /*Flip Card*/
  backface-visibility: hidden;
}

.front {
  background-color: rgba(248, 200, 58, 0.3);
}

.back {
  background-color: rgba(248, 200, 58, 0.3);
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  /*Flip Card*/
  transform: rotateY(180deg);
}

.flip-card {
  transform: rotateY(180deg);
}
.rwd{
  display: none;
}
@media screen and (max-width:767px){
  .poster{
    font-size: 100px;
  }
  .news{
    width: 350px;
    height: 400px;
    margin: 20px;
  }
  .title{
    font-size: 35px;
  }
  .content{
    height: 50px;
    font-size: 20px;
  }
  .news img{
    width:100%;
    height: 350px;
  }
}
@media screen and (max-width:414px){
  .poster{
    background-position: center;
  }
  .rwd{
    display: block;
  }
  .back{
    font-size: 20px;
  }
  
}
</style>