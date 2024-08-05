<template>
  <div class="alcohol">
    <div
      v-for="(product, index) in products"
      :key="index"
      class="product"
      :style="{ background: product.background }"
    >
      <div class="left" data-aos="zoom-in" data-aos-duration="1500">
        <img :src="product.image" />
      </div>
      <div class="right">
        <h1>{{ product.name }}</h1>
        <p >{{product.description}}</p>
        <p class="type">{{ product.type }}</p>
        <h2>酒精濃度:{{ product.alcohol }}</h2>
        <div class="btn">
          <button @click="showMatch(product)">餐酒搭配</button>
          <button @click="showMessage(product)">了解更多</button>
        </div>
      </div>
      <!--了解更多-->
      <el-dialog :visible.sync="dialogVisible" width="50%">
        <div slot="title" class="dialog-title">了解更多</div>
        <div class="message">
          <div class="msg-left">
            <img
              v-show="currentProduct === '月夜'"
              src="../../assets/menu/rating1.png"
            />
            <img
              v-show="currentProduct === '獵人'"
              src="../../assets/menu/rating2.png"
            />
            <img
              v-show="currentProduct === '狼魂'"
              src="../../assets/menu/rating3.png"
            />
            <img
              v-show="currentProduct === '獨行'"
              src="../../assets/menu/rating4.png"
            />
            <img
              v-show="currentProduct === '野性'"
              src="../../assets/menu/rating5.png"
            />
          </div>
          <div class="msg-right" v-html="currentMessage"></div>
        </div>
      </el-dialog>
      <!--餐酒搭配-->
      <el-dialog :visible.sync="dialogVisible2" width="50%">
        <div slot="title" class="dialog-title">搭配推薦</div>
        <div class="match">
          <div class="sidedish">搭配｜{{ currentMatch.sidedish }}</div>
          <div class="reason">原因｜{{ currentMatch.reason }}</div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          name: "月夜",
          image: require("../../assets/menu/beer1.png"),
          description: "以其獨特風味聞名。它散發著獨特的苦味和啤酒花的芬芳香氣，同時充滿麥芽的濃厚風味。這款啤酒口感清新，爽口怡人，酒液活潑而深邃。",
          type: "苦味突出/麥芽風味/清爽口感",
          alcohol: "6%",
          background:
            "radial-gradient(circle at 25% 50%, rgb(200,200,200) 1%, rgba(233, 198, 35, 0.8))",
          message: `
                    風味｜清新、帶有啤酒花的苦味、麥芽的濃厚風味<br>
                    香氣｜啤酒花的芬芳香氣<br>
                    酒體｜中等<br>
                    酒色｜淺金色<br>
                    苦度｜中等`,
          sidedish: "烤雞翅或炸魚薯條",
          reason:
            "啤酒的清新口感與烤雞翅的香脆以及炸魚薯條的油膩搭配得很好，清新口感與油膩食物相得益彰",
        },
        {
          name: "獵人",
          image: require("../../assets/menu/beer2.png"),
          description: "以其清爽口感和平衡的味道而著稱。具有清澈的金黃色澤，帶有麥芽和啤酒花的微妙香氣，口感清新宜人，有微妙的苦味。是一款廣受歡迎的易飲型啤酒。",
          type: "金黃色澤/平衡風味/清爽口感",
          alcohol: "4%",
          background:
            "radial-gradient(circle at 25% 50%, rgb(200,200,200) 1%, rgba(236, 167, 6, 0.8))",
          message: `
                    風味｜清爽、平衡的味道<br>
                    香氣｜微妙的麥芽和啤酒花香氣<br>
                    酒體｜輕盈<br>
                    酒色｜金黃色<br>
                    苦度｜低`,
          sidedish: "烤三文魚或凱撒沙拉",
          reason:
            "啤酒的清爽口感與三文魚的淡雅口味以及凱撒沙拉的清爽味道相得益彰，搭配起來很順口",
        },
        {
          name: "狼魂",
          image: require("../../assets/menu/beer3.png"),
          description: "以其豐富多變的口感和鮮明層次的味道而聞名。其獨特之處在於酵母帶來的水果和香料風味，以及複雜的麥芽香氣，常展現出深沉、豐富而迷人的品鑑體驗。",
          type: "醇厚質地/複雜風味/強烈口感",
          alcohol: "9.5%",
          background:
            "radial-gradient(circle at 25% 50%, rgb(200,200,200) 1%, rgba(224, 82, 11, 0.8))",
          message: `
                    風味｜豐富多變、鮮明層次的味道<br>
                    香氣｜酵母帶來的水果和香料風味、複雜的麥芽香氣<br>
                    酒體｜醇厚<br>
                    酒色｜深色<br>
                    苦度｜中等`,
          sidedish: "比利時炸薯條或奶酪拼盤",
          reason:
            "啤酒的豐富口感與炸薯條的香脆口感以及奶酪拼盤的濃郁味道相得益彰，增添了美食的層次感",
        },
        {
          name: "獨行",
          image: require("../../assets/menu/beer4.png"),
          description: "以其醇厚口感和深邃味道而聞名。濃郁的麥芽香氣和啤酒花的苦澀交織，展現複雜多層的風味。這款啤酒常呈現深色酒體，口感豐富飽滿，是追求濃郁口味的理想之選。",
          type: "深色酒體/深沉風味/醇厚口感",
          alcohol: "6%",
          background:
            "radial-gradient(circle at 25% 50%, rgb(200,200,200) 1%, rgba(186, 47, 33, 0.8))",
          message: `
                    風味｜醇厚、深邃的味道<br>
                    香氣｜濃郁的麥芽和啤酒花香氣<br>
                    酒體｜濃郁<br>
                    酒色｜深色<br>
                    苦度｜高`,
          sidedish: "烤牛排或芝士漢堡",
          reason:
            "啤酒的濃郁口感與烤牛排的肉汁鮮美以及芝士漢堡的奶香味道相得益彰，搭配起來很豐富",
        },
        {
          name: "野性",
          image: require("../../assets/menu/beer5.png"),
          description: "以深色酒體和濃郁口感著稱。具有濃厚的麥芽風味，少許焦糖和咖啡香氣，口感圓潤。一款深受喜愛的濃郁啤酒，展現德國釀酒工藝的精髓",
          type: "苦味突出/麥芽風味/清爽口感",
          alcohol: "7%",
          background:
            "radial-gradient(circle at 25% 50%, rgb(200,200,200) 1%, rgba(51, 35, 30, 0.8))",
          message: `
                    風味｜濃郁、圓潤口感<br>
                    香氣｜濃厚的麥芽風味、焦糖和咖啡香氣  <br>
                    酒體｜濃郁<br>
                    酒色｜深色<br>
                    苦度｜中等`,
          sidedish: "德國香腸或烤肉串",
          reason:
            "啤酒的濃郁口感與德國香腸的鹹香口味以及烤肉串的碳烤風味相得益彰，是一款很棒的搭配",
        },
      ],
      dialogVisible: false,
      dialogVisible2: false,
      currentProduct: "",
      currentMessage: "",
      currentMatch: "",
    };
  },
  methods: {
    showMessage(product) {
      this.currentProduct = product.name;
      this.currentMessage = product.message;
      this.dialogVisible = true;
    },
    showMatch(product) {
      this.currentMatch = product;
      this.dialogVisible2 = true;
    },
  },
};
</script>

<style scoped>
.product {
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  line-height: 1.9;
  padding: 0 50px;
}
.alcohol h1 {
  color: black;
  text-shadow: 1px 1px rgb(255, 253, 253);
  text-align: center;
}
.alcohol p {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin: 0;
}
.alcohol .right {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  width: 40%;
}
.alcohol .type {
  text-align: center;
  font-size: 20px;
  color: rgb(0, 0, 200);
}
.alcohol h2 {
  text-align: center;
  font-size: 20px;
  color: rgb(200, 0, 0);
  margin: 0;
}
.alcohol .btn {
  display: flex;
  justify-content: center;
}
.alcohol button {
  margin: 15px;
  width: 150px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
}
.alcohol button:hover {
  cursor: pointer;
}

/*了解更多 */

.dialog-title {
  text-align: center;
  font-size: 25px;
  font-weight: bolder;
}
::v-deep .el-dialog__body{
  padding: 10px 20px;
}
.message {
  display: flex;
  padding: 0 20px;
}
.msg-left {
  width: 50%;
}
.msg-left img {
  width: 100%;
  border: 1px solid black;
}

.msg-right {
  font-size: 20px;
  font-weight: bold;
  color: black;
  width: 50%;
  margin-left: 30px;
}

/*餐酒搭配 */

.match {
  font-size: 20px;
  font-weight: bold;
  color: black;
}

@media screen and (max-width: 1024px) {
  .message {
    flex-direction: column;
  }
  .msg-left {
    width: 100%;
  }
  .msg-right {
    width: 100%;
    margin: 0;
  }
}
@media screen and (max-width: 767px) {
  .product {
    flex-direction: column;
    height: 100%;
    padding: 20px;
  }
  .left {
    display: flex;
    justify-content: center;
  }
  .left img {
    width: 60%;
  }
  .alcohol .right {
    width: 90%;
    margin-bottom: 20px;
  }
  
  ::v-deep .el-dialog {
    width: 90% !important;
  }
  .msg-right,.match {
    font-size: 18px;
  }
}
@media screen and (max-width:414px){
  .product{
    padding: 10px;
    line-height: 1.7;
  }
  .dialog-title{
    font-size: 20px;
  }
  .alcohol button {
    font-size: 18px;  
    height: 40px;
    width: 100px;
  }
  
}
</style>