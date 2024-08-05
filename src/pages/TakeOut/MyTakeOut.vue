<template>
  <div class="container">
    <div class="poster">TakeOut</div>
    <div class="nav-container">
      <div class="nav" @click="moveTo('#meal')">主食</div>
      <div class="nav" @click="moveTo('#beer')">啤酒</div>
    </div>
    <hr>
    <div class="sub-title" id="meal">主食</div>
    <div class="cards">
      <div v-for="(product, index) in products" :key="index" class="product">
        <div class="card" :data-aos="'fade-down'" data-aos-duration="1500">
          <div class="pic">
            <img :src="product.image" />
          </div>
          <div class="content">
            <h1>{{ product.name }}</h1>
            <h2>{{ product.english }}</h2>
            <div class="number">
              <div class="el-icon-remove" @click="minusCount(product)"></div>
              <input type="text" class="count" v-model.number="product.count" />
              <div
                class="el-icon-circle-plus"
                @click="plusCount(product)"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sub-title" id="beer">啤酒</div>
    <div class="cards">
      <div v-for="(beer, index) in beers" :key="index" class="product">
        <div class="card" :data-aos="'fade-down'" data-aos-duration="1500">
          <div class="pic">
            <img :src="beer.image" />
          </div>
          <div class="content">
            <h1>{{ beer.name }}</h1>
            <h2>{{ beer.english }}</h2>
            <div class="number">
              <div class="el-icon-remove" @click="minusCount(beer)"></div>
              <input type="text" class="count" v-model.number="beer.count" />
              <div class="el-icon-circle-plus" @click="plusCount(beer)"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button @click="sendShoppingInfo">加入購物車</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          name: "凱薩沙拉",
          english: "Caesar salad",
          image: require("../../assets/takeout/salad.jpg"),
          count: 0,
          price: 250,
          isChecked: false,
        },
        {
          name: "德國香腸",
          english: "German sausage",
          image: require("../../assets/takeout/sausage.jpg"),
          count: 0,
          price: 250,
          isChecked: false,
        },
        {
          name: "炸薯條",
          english: "French fries",
          image: require("../../assets/takeout/frenchfrie.jpg"),
          count: 0,
          price: 250,
          isChecked: false,
        },
        {
          name: "乳酪拼盤",
          english: "Cheese platter",
          image: require("../../assets/takeout/cheese.jpg"),
          count: 0,
          price: 300,
          isChecked: false,
        },
        {
          name: "芝士漢堡",
          english: "Cheeseburger",
          image: require("../../assets/takeout/hamburger.jpg"),
          count: 0,
          price: 300,
          isChecked: false,
        },
        {
          name: "炸魚薯條",
          english: "Fish and chips",
          image: require("../../assets/takeout/fish.jpg"),
          count: 0,
          price: 300,
          isChecked: false,
        },
        {
          name: "烤雞翅",
          english: "Grilled chicken wings",
          image: require("../../assets/takeout/chickenwing.jpg"),
          count: 0,
          price: 300,
          isChecked: false,
        },
        {
          name: "烤肉串",
          english: "Grilled skewers",
          image: require("../../assets/takeout/bbq.jpg"),
          count: 0,
          price: 350,
          isChecked: false,
        },
        {
          name: "烤鮭魚",
          english: "Grilled salmon",
          image: require("../../assets/takeout/salmon.jpg"),
          count: 0,
          price: 400,
          isChecked: false,
        },
        {
          name: "烤牛排",
          english: "Grilled steak",
          image: require("../../assets/takeout/steak.jpg"),
          count: 0,
          price: 500,
          isChecked: false,
        },
      ],
      beers: [
        {
          name: "月夜",
          english: "Moonlit night",
          image: require("../../assets/takeout/beer1.png"),
          count: 0,
          price: 300,
          isChecked: false,
        },
        {
          name: "獵人",
          english: "Hunter",
          image: require("../../assets/takeout/beer2.png"),
          count: 0,
          price: 300,
          isChecked: false,
        },
        {
          name: "狼魂",
          english: "Wolf spirit",
          image: require("../../assets/takeout/beer3.png"),
          count: 0,
          price: 300,
          isChecked: false,
        },
        {
          name: "獨行",
          english: "Lone wolf",
          image: require("../../assets/takeout/beer4.png"),
          count: 0,
          price: 300,
          isChecked: false,
        },
        {
          name: "野性",
          english: "Wildness",
          image: require("../../assets/takeout/beer5.png"),
          count: 0,
          price: 300,
          isChecked: false,
        },
      ],
    };
  },
  methods: {
    minusCount(vm) {
      if (vm.count > 0) {
        this.$set(vm, "count", vm.count - 1);
      }
    },
    plusCount(vm) {
      this.$set(vm, "count", vm.count + 1);
    },
    sendShoppingInfo() {
      // 先從路由查詢中取得先前的資料
      const { products: savedProducts, beers: savedBeers } = this.$route.query;

      // 將先前的資料轉換為物件形式
      const parsedProducts = JSON.parse(savedProducts || "[]");
      const parsedBeers = JSON.parse(savedBeers || "[]");

      // 合併新的資料到先前的資料中
      const mergedProducts = [...parsedProducts, ...this.products];
      const mergedBeers = [...parsedBeers, ...this.beers];

      // 篩選出數量大於0的產品
      const selectedProducts = mergedProducts.filter(product => product.count > 0);
      const selectedBeers = mergedBeers.filter(beer => beer.count > 0);

      // 將合併後的資料再轉換為 JSON 字串
      const updatedProducts = JSON.stringify(selectedProducts);
      const updatedBeers = JSON.stringify(selectedBeers);

      // 將更新後的資料透過路由傳遞到下一個路由
      this.$router.push({
        path: "/shopping-cart/shopping-list",
        query: {
          products: updatedProducts,
          beers: updatedBeers,
        },
      });
    },
    moveTo(selector) {
      document.querySelector(selector).scrollIntoView({
        behavior: "smooth",
      });
  },
  },
};
</script>

<style scoped>

.container {
  background-color: rgba(69, 53, 38, 0.5);
  padding-bottom: 20px;
}
.poster {
  background-image: url(../../assets/takeout/poster.jpg);
  background-size: cover;
  background-position: center;
  height: 300px;
  font-size: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  text-shadow: gray 5px 5px;
}
.nav-container{
  display: flex;
  justify-content: center;
}
.nav{
  font-size: 35px;
  margin: 10px 20px;
  padding: 3px 15px;
  border: 3px solid black;
  border-radius: 5px 5px;
  background-color: rgb(171, 171, 171);
}
.nav:hover{
  cursor: pointer;
  font-weight: bold;
  
}
.sub-title {
  text-align: center;
  font-size: 60px;
  margin: 20px;
  font-weight: bold;
}
.cards {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  width: 350px;
  height: 450px;
  border: 3px solid black;
  margin: 30px;
  box-shadow: 2px 2px black;
}

.pic {
  width: 350px;
  height: 350px;
}
img {
  width: 100%;
  height: 100%;
}
.content {
  width: 350px;
  height: 100px;
  background-color: rgba(248, 200, 58, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.content h1 {
  font-size: 25px;
  text-align: center;
  margin: 0;
}
.content h2 {
  font-size: 18px;
  text-align: center;
  margin: 0;
}
.number {
  display: flex;
  justify-content: center;
  align-items: center;
}
.count {
  width: 30%;
  height: 25px;
  margin: 10px;
  font-size: 20px;
  text-align: center;
}
.el-icon-remove,
.el-icon-circle-plus {
  font-size: 20px;
}
.el-icon-remove:hover,
.el-icon-circle-plus:hover {
  cursor: pointer;
}
button {
  display: block;
  margin: 0 auto;
  width: 200px;
  height: 50px;
  font-size: 25px;
  border-radius: 3px;
}
button:hover {
  cursor: pointer;
  transform: translate(-5px, -5px);
}
@media screen and (max-width: 767px) {
  .poster {
    font-size: 90px;
  }
  .nav{
    font-size: 30px;
  }
  .sub-title {
    font-size: 50px;
  }
  .card {
    margin: 20px;
    width: 250px;
    height: 350px;
  }
  .pic {
    width: 250px;
    height: 250px;
  }
  .content {
    width: 250px;
  }
  .count {
    height: 20px;
  }
  button{
    width: 150px;
    font-size: 20px;
  }
}
@media screen and (max-width: 414px) {
  .poster {
    font-size: 70px;
  }
  .nav{
    font-size: 20px;
  }
  .sub-title {
    font-size: 40px;
  }
  .card {
    margin: 5px;
    width: 150px;
    height: 250px;
  }
  .pic {
    width: 150px;
    height: 150px;
  }
  .content {
    width: 150px;
    height: 100px;
  }
  .content h1 {
    margin-top: 10px;
    font-size: 18px;
  }
  .content h2 {
    font-size: 16px;
  }
  .count {
    height: 15px;
    margin-bottom: 10px;
    font-size: 18px;
  }
  .el-icon-remove,
  .el-icon-circle-plus {
    font-size: 15px;
  }
  button{
    font-size: 18px;
    width: 120px;
    height: 35px;
    margin-top: 10px;
  }
}
</style>