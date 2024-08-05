<template>
  <!--輪播圖-->
  <div class="container">
    <el-carousel trigger="click" height="500px">
      <el-carousel-item v-for="(item, index) in items" :key="index">
        <div
          class="image-container"
          :style="{ backgroundImage: 'url(' + item.image + ')' }"
          @click="handleClick(item)"
        ></div>
        <h3 class="small">{{ item.title }}<br />{{ item.content }}</h3>
      </el-carousel-item>
    </el-carousel>

    <!--介紹頁1-->

    <div class="introduce1">
      <div class="right" data-aos="zoom-in" data-aos-duration="1500">
        <img src="../../assets/beer.png" class="beer" />
      </div>
      <div class="left">
        <h1>完美呈現 德國啤酒工藝</h1>
        <div>
          <p>
            野狼啤酒，源自德國傳統釀酒工藝，以豐富的口感和優質的原料而聞名。
          </p>
          <p>
            採用嚴格的製作工藝，每一口都散發著濃郁的傳統風味，清爽而順滑，深受啤酒愛好者的喜愛。
          </p>
          <p>
            無論是輕盈的小麥啤酒還是濃郁的黑啤酒，野狼啤酒都展現出了其獨特的魅力。
          </p>
          <p>
            注重傳統與創新的結合，野狼啤酒不僅代表了德國釀酒工藝的精髓，更融入了現代元素，成為品質與個性並存的啤酒品牌。
          </p>
        </div>
        <button @click="ToAbout">關於野狼啤酒</button>
      </div>
    </div>

    <!--介紹頁2-->

    <div class="introduce2">
      <div class="left" data-aos="zoom-in" data-aos-duration="1500">
        <img src="../../assets/winery.png" class="winery" />
      </div>
      <div class="right">
        <h1>堅持嚴謹德式釀酒製程</h1>
        <div>
          <p>
            這座釀酒廠秉承著傳統工藝，堅持選用優質的大麥、啤酒花和水源，並遵循著嚴格的製作工藝，確保每一批釀造出來的啤酒都保持著卓越的品質。
          </p>
          <p>
            野狼啤酒廠不僅注重於生產出口感豐富、口味獨特的啤酒產品，同時也致力於保護環境、推動可持續發展，以確保未來世代也能品嚐到優質的野狼啤酒。
          </p>
        </div>
        <button @click="ToBrewing">經典工藝</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "poster1",
          image: require("../../assets/poster1.jpg"),
          title: "周末啤酒狂歡日",
          content: "當日啤酒通通半價!",
        },
        {
          name: "poster2",
          image: require("../../assets/poster2.jpg"),
          title: "全新水果啤酒",
          content: "驚喜上市!",
        },
      ],
    };
  },
  methods: {
    //介紹頁跳轉方法
    ToAbout() {
      this.$router.push({
        path: "/about",
      });
    },
    ToBrewing() {
      this.$router.push({
        path: "/brewing",
      });
    },
    //輪播圖跳轉
    handleClick(item) {
      if (item.name === "poster1") {
        this.poster1Method();
      } else if (item.name === "poster2") {
        this.poster2Method();
      }
    },
    //輪播圖跳轉方法
    poster1Method() {
      this.$router.push({
        path: "/news/activity",
      });
    },
    poster2Method() {
      this.$router.push({
        path: "/news/new-product",
      });
    },
  },
};
</script>

<style scoped>
.el-carousel__item {
  background-color: #99a9bf;
}

.small {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  text-align: center;
}
.image-container {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
}
.image-container:hover {
  cursor: pointer;
}
.left,
.right {
  width: 50%;
}
img {
  width: 100%;
}
.introduce1,
.introduce2 {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  line-height: 1.9;
  padding: 0 50px;
  box-sizing: border-box;
}
.introduce1 {
  background-color: rgba(69, 53, 38, 0.5);
}
h1 {
  color: rgb(0, 0, 110);
}
p {
  font-size: 18px;
  font-weight: bold;
}
.introduce2 {
  background-color: rgba(252, 212, 94, 0.3);
}
button {
  width: 200px;
  height: 50px;
  font-size: 20px;
  margin: 20px 0;
  font-weight: bolder;
  background-color: rgba(239, 239, 36, 0.311);
  border-radius: 10px;
}

button:hover {
  cursor: pointer;
  background-color: rgba(239, 239, 36, 0.622);
  color: rgb(0, 0, 110);
}
@media screen and (max-width: 1024px) {
  .right,
  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
  }
  .introduce1,
  .introduce2 {
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
  img {
    width: 50%;
  }
}
@media screen and (max-width: 767px) {
  .right,
  .left {
    width: 100%;
  }
  h1 {
    font-size: 25px;
  }
  img {
    width: 80%;
  }
  .el-carousel {
    height: 400px;
    overflow-y: hidden;
  }
  .small {
    top: 30%;
    font-size: 40px;
  }
  ::v-deep .el-carousel__arrow--left,
  ::v-deep .el-carousel__arrow--right {
    top: 200px;
  }
}
@media screen and (max-width: 414px) {
  .small {
    font-size: 30px;
  }
  .el-carousel {
    height: 300px;
  }
  ::v-deep .el-carousel__arrow--left,
  ::v-deep .el-carousel__arrow--right {
    top: 150px;
  }
  .introduce1,
  .introduce2 {
    padding: 20px;
  }
  h1 {
    font-size: 23px;
  }
  button {
    width: 180px;
  }
}
</style>