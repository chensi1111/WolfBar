<template>
  <div class="customer">
    <div class="title">用戶資料</div>
    <div class="info-container">
      <div class="info">
        <label>姓名:</label>
        <div>
          <input type="text" placeholder="請輸入姓名" v-model="name" />
          <div class="alert" v-show="isEmpty[1]">本欄不能為空</div>
        </div>
      </div>
      <div class="info">
        <label>電話:</label>
        <div>
          <input type="tel" placeholder="請輸入聯絡電話" v-model="tel" />
          <div class="alert" v-show="isEmpty[2]">本欄不能為空</div>
        </div>
      </div>
      <div class="info">
        <label>信箱:</label>
        <div>
          <input type="email" placeholder="請輸入電子信箱" v-model="mail" />
        </div>
      </div>
      <div class="info">
        <label>地址:</label>
        <div>
          <input type="text" placeholder="請輸入送貨地址" v-model="address" />
          <div class="alert" v-show="isEmpty[3]">本欄不能為空</div>
        </div>
      </div>
      <div class="info">
        <label>付款方式:</label>
        <div>
          <select v-model="pay">
            <option value="">選擇付款方式</option>
            <option value="貨到付款">貨到付款</option>
            <option value="信用卡">信用卡</option>
          </select>
          <div class="alert" v-show="isEmpty[4]">本欄不能為空</div>
        </div>
      </div>
      <div class="info" v-show="pay === '信用卡'">
        <label>信用卡號:</label>
        <div>
          <input
            type="text"
            placeholder="請輸入16碼卡號"
            maxlength="16"
            v-model="cardCode"
          />
          <div class="alert" v-show="isEmpty[5]">本欄不能為空</div>
        </div>
      </div>
      <div class="info" v-show="pay === '信用卡'">
        <label>到期日:</label>
        <div>
          <div>
            <input
              type="text"
              class="card"
              placeholder="Month"
              maxlength="2"
              v-model="cardMonth"
            />
            <input
              type="text"
              class="card"
              placeholder="Year"
              maxlength="2"
              v-model="cardYear"
            />
            <input
              type="text"
              class="card"
              placeholder="CVV"
              maxlength="3"
              v-model="ccv"
            />
          </div>
          <div class="alert" v-show="isEmpty[6]">本欄不能為空</div>
        </div>
      </div>
      <div class="info">
        <label>備註:</label
        ><textarea placeholder="有甚麼需求請告知" v-model="remark"></textarea>
      </div>
    </div>
    <div class="buttons">
      <button @click="GoBack">上一步</button>
      <button @click="ToOrderComplete">送出</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shoppingCartData: "",
      name: "",
      tel: "",
      mail: "",
      address: "",
      pay: "",
      cardCode: "",
      cardMonth: "",
      cardYear: "",
      ccv: "",
      remark: "",
      isEmpty: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
      },
    };
  },
  methods: {
    ToOrderComplete() {
      if (
        this.name === "" ||
        this.tel === "" ||
        this.address === "" ||
        this.pay === "" ||
        (this.pay === "信用卡" &&
          (this.cardCode === "" ||
            this.cardMonth === "" ||
            this.cardYear === "" ||
            this.ccv === ""))
      ) {
        this.$message({
          message:"請輸入正確資訊",
          type:"error",
          center:true
        });
        this.isEmpty[1] = this.name === "";
        this.isEmpty[2] = this.tel === "";
        this.isEmpty[3] = this.address === "";
        this.isEmpty[4] = this.pay === "";
        this.isEmpty[5] = this.pay === "信用卡" && this.cardCode === "";
        this.isEmpty[6] =
          this.pay === "信用卡" &&
          (this.cardMonth === "" || this.cardYear === "" || this.ccv === "");
      } else {
        this.$message({
        message:'訂單已送出',
        type:'success',
        center:true
      });
        this.$bus.$emit("shoppingCartData", 0);
        this.$router.push({
          path: "/shopping-cart/order-complete",
          query: {
            name: this.name,
            tel: this.tel,
            mail: this.mail,
            address: this.address,
            pay: this.pay,
            cardCode: this.cardCode,
            cardMonth: this.cardMonth,
            cardYear: this.cardYear,
            ccv: this.ccv,
            remark: this.remark,
            shoppingCartData: JSON.stringify(this.shoppingCartData),
          },
        });
      }
    },
    GoBack() {
      this.$router.push({
        path: "/shopping-cart/shopping-list",
      });
    },
  },
  mounted() {
    this.shoppingCartData = this.$route.query;
  },
};
</script>

<style scoped>
.customer {
  width: 50%;
  margin: 100px auto 30px ;
  padding-bottom: 50px;
  background-color: rgba(255, 243, 206, 0.3);
  display: flex;
  flex-direction: column;
}
.title {
  font-size: 23px;
  padding: 10px;
  font-weight: bold;
  background-color: rgba(252, 212, 94, 0.3);
}
.info-container {
  margin: 30px;
}
.info {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 23px;
}
label {
  width: 100px;
}
input,select,textarea{
  box-sizing: border-box;
}
input {
  margin-left: 10px;
  height: 23px;
  width: 300px;
}
select {
  margin-left: 10px;
  height: 30px;
  width: 300px;
}
.card {
  width: 50px;
}
textarea {
  margin-left: 10px;
  height: 150px;
  width: 300px;
}
.alert {
  font-size: 20px;
  color: rgb(190, 0, 0);
  margin-left: 10px;
}
.buttons {
  display: block;
  margin: auto;
}
button {
  display: inline-block;
  margin: 0 10px;
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
  .customer {
    width: 80%;
  }
  .info-container {
    margin: 20px;
  }
}
@media screen and (max-width: 767px) {
  .info {
    font-size: 20px;
    flex-wrap: wrap;
  }
  .alert {
    font-size: 18px;
    margin: 5px 0 0 10px;
  }
  label {
    margin-bottom: 5px;
  }

  input,
  select,
  textarea {
    margin-left: 0;
    width: 200px;
  }
  button {
    width: 130px;
    font-size: 20px;
  }
}
@media screen and (max-width: 414px) {
  .title{
    font-size: 20px;
  }
  .info{
    font-size: 18px;
  }
  button{
    width: 100px;
    font-size: 18px;
  }
}
</style>
<style>
@media screen and (max-width:414px){
  .el-message{
    min-width:200px
  }
}
</style>