<template>
  <div class="complete">
    <div class="title">訂購完成</div>
    <div class="container">
      <div class="left">
        <div class="info"><span>訂單編號:</span>{{ code }}</div>
        <div class="info"><span>訂購姓名:</span>{{ info.name }}</div>
        <div class="info"><span>連絡電話:</span>{{ info.tel }}</div>
        <div class="info"><span>聯絡信箱:</span>{{ info.mail }}</div>
        <div class="info"><span>送貨地址:</span>{{ info.address }}</div>
        <div class="info"><span>付款方式:</span>{{ info.pay }}</div>
        <div class="info"><span>備註:</span>{{ info.remark }}</div>
      </div>
      <div class="right">
        <div class="products" v-for="(item, index) in product" :key="index">
          <div class="product"><img :src="item.image" /></div>
          <div class="product">{{ item.name }}</div>
          <div class="product">數量:{{ item.count }}</div>
          <div class="product">單價:{{ item.price }}</div>
        </div>
        <div class="total">總金額:{{ total }}</div>
      </div>
    </div>
    <button @click="complete">完成</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: [],
      total: [],
      product: [],
      code: "",
    };
  },
  mounted() {
    this.info = this.$route.query;
    this.shoppingCartData = JSON.parse(this.$route.query.shoppingCartData);
    this.total = this.shoppingCartData.total;
    this.product = this.shoppingCartData.shoppingCartData;
    this.code = this.getProjectNum() + Math.floor(Math.random() * 10000);
  },
  methods: {
    complete() {
      localStorage.removeItem("shoppingCartData");
      this.$router.push({
        path: "/home",
      });
    },
    getProjectNum() {
      const projectTime = new Date();
      const Year = projectTime.getFullYear();
      const Month = projectTime.getMonth() + 1; //從0開始計算
      const Day = projectTime.getDate();
      var CurrentDate = Year;
      if (Month >= 10) {
        CurrentDate += Month;
      } else {
        CurrentDate += "0" + Month;
      }
      if (Day >= 10) {
        CurrentDate += Day;
      } else {
        CurrentDate += "0" + Day;
      }
      return CurrentDate;
    },
  },
};
</script>

<style scoped>
.complete {
  width: 80%;
  margin: 100px auto 30px ;
  padding-bottom: 30px ;
  background-color: rgba(255, 243, 206, 0.3);
  display: flex;
  flex-direction: column;
}
.title {
  font-size: 23px;
  padding: 10px;
  margin-bottom: 30px;
  font-weight: bold;
  background-color: rgba(252, 212, 94, 0.3);
}
.container {
  display: flex;
  margin: 30px;
}

.left,
.right {
  font-size: 20px;
  width: 50%;
}

.info {
  margin-bottom: 10px;
  width: 90%;
  word-wrap: break-word;
}
.products {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.product {
  margin-right: 10px;
}
.total {
  font-size: 23px;
  margin-top: 20px;
}
img {
  width: 100px;
  height: 100px;
}
span {
  margin-right: 10px;
  font-weight: bold;
}
button {
  display: block;
  margin: 20px auto 0;
  width: 150px;
  height: 40px;
  font-size: 23px;
  border-radius: 3px;
}
button:hover {
  cursor: pointer;
  transform: translate(-3px, -3px);
}
@media screen and (max-width: 1024px) {
  .complete {
    width: 85%;
  }
  .container {
    margin: 15px;
  }
  img {
    width: 80px;
    height: 80px;
  }
  .right {
    width: 60%;
  }
  .product {
    margin-right: 5px;
  }
}
@media screen and (max-width: 767px) {
  .container {
    flex-direction: column;
  }
  .left,
  .right {
    width: 100%;
    font-size: 18px;
  }
  button {
    width: 100px;
    font-size: 20px;
  }
}
@media screen and (max-width: 414px) {
  .complete {
    width: 90%;
  }
  .container{
    margin: 5px;
  }
  .title {
    font-size: 20px;
  }
  img {
    width: 50px;
    height: 50px;
  }
  .product:nth-child(4){
    margin-right: 0;
  }
  button{
    font-size: 18px;
  }
  .total{
    font-size: 20px;
  }
}
</style>