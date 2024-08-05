<template>
  <div class="shopping-list">
    <div class="cart-container" v-show="shoppingCartData.length">
      <div class="nav">
        <div class="block b1 nav"></div>
        <div class="block b2 nav">商品</div>
        <div class="block b3 nav">單價</div>
        <div class="block b4 nav">數量</div>
        <div class="block b5 nav">總計</div>
        <div class="block b6 nav"></div>
      </div>
      <div class="nav" v-for="(item, index) in shoppingCartData" :key="index">
        <div class="block b1 product">
          <input type="checkbox" v-model="item.isChecked" />
        </div>
        <div class="block b2 product">
          <img :src="item.image" />
          <p>{{ item.name }}</p>
        </div>
        <div class="block b3 product">${{ item.price }}</div>
        <div class="block b4 product">
          <span class="el-icon-remove" @click="minusCount(item)"></span
          >{{ item.count
          }}<span class="el-icon-circle-plus" @click="plusCount(item)"></span>
        </div>
        <div class="block b5 product">${{ total(item) }}</div>
        <div class="block b6 product">
          <span class="el-icon-delete-solid" @click="deleteCount(item)"></span>
        </div>
      </div>
      <div class="bottom">
        <div>
          <div class="select-all" @click="selectAll">全選</div>
          <div
            class="delete-select"
            @click="deleteSelect"
            v-show="anyItemChecked"
          >
            刪除所選
          </div>
        </div>
        <div class="total">總金額:{{ totalAll }}</div>
      </div>
      <button @click="ToCustomerInfo">填寫用戶資料</button>
    </div>
    <div class="empty" v-show="!shoppingCartData.length">
      <h1>你的購物車空空如也</h1>
      <p @click="toTakeout">現在就去買!</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shoppingCartData: [],
      isCheckedAll: false,
    };
  },
  methods: {
    minusCount(item) {
      if (item.count > 1) {
        item.count--;
      }
    },
    plusCount(item) {
      item.count++;
    },
    deleteCount(item) {
      this.$confirm(`確認要刪除${item.name}嗎?`, "提示", {
        customClass: "delete-message",
        confirmButtonText: "確定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          const index = this.shoppingCartData.indexOf(item);
          if (index !== -1) {
            this.shoppingCartData.splice(index, 1);
          }
          this.$message({
            type: "success",
            message: "删除成功!",
            center: true,
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消刪除",
            center: true,
          });
        });
    },
    selectAll() {
      this.isCheckedAll = !this.isCheckedAll;
      this.shoppingCartData.forEach((item) => {
        item.isChecked = this.isCheckedAll;
      });
    },
    deleteSelect() {
      const selectedItems = this.shoppingCartData.filter(
        (item) => item.isChecked
      );
      this.$confirm(`確認要刪除所選嗎?`, "提示", {
        customClass: "delete-message",
        confirmButtonText: "確定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          selectedItems.forEach((item) => {
            const index = this.shoppingCartData.indexOf(item);
            if (index !== -1) {
              this.shoppingCartData.splice(index, 1);
            }
          });
          this.$message({
            type: "success",
            message: "删除成功!",
            center: true,
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消刪除",
            center: true,
          });
        });
    },
    ToCustomerInfo() {
      this.$router.push({
        path: "/shopping-cart/customer-info",
        query: {
          shoppingCartData: this.shoppingCartData,
          total: this.totalAll,
        },
      });
    },
    toTakeout() {
      this.$router.push({
        path: "/take-out",
      });
    },
  },
  computed: {
    total() {
      return (item) => item.price * item.count;
    },
    //用reduce累加total
    totalAll() {
      return this.shoppingCartData.reduce(
        (acc, item) => acc + this.total(item),
        0
      );
    },
    //只要有任一個item的isChecked為true，則為true
    anyItemChecked() {
      return this.shoppingCartData.some((item) => item.isChecked);
    },
  },
  mounted() {
    // 從路由獲取購物車資料
    const { products, beers } = this.$route.query;

    // 如果路由有傳進任一資料，先從 localStorage 加載現有資料
    const savedData = localStorage.getItem("shoppingCartData");
    if (savedData) {
      this.shoppingCartData = JSON.parse(savedData);
    }

    // 如果路由有傳遞資料，將其解析後與現有資料合併或追加
    if (products || beers) {
      const productsObj = JSON.parse(products || "[]");
      const beersObj = JSON.parse(beers || "[]");

      // 將新資料追加到現有資料中，如果存在相同項目，則更新其數量
      const newData = [
        ...Object.values(productsObj),
        ...Object.values(beersObj),
      ];

      newData.forEach((newItem) => {
        const existingItem = this.shoppingCartData.find(
          (item) => item.name === newItem.name
        );
        if (existingItem) {
          // 如果存在相同的項目，則更新其數量
          existingItem.count += newItem.count;
        } else {
          // 否則添加到購物車中
          this.shoppingCartData.push(newItem);
        }
      });
    }
  },
  watch: {
    //將資料存進localStorage
    shoppingCartData: {
      handler(value) {
        localStorage.setItem("shoppingCartData", JSON.stringify(value));
        this.$bus.$emit("shoppingCartData", value.length);
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.shopping-list {
  width: 90%;
  margin-top: 30px;
}
.cart-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.nav {
  display: flex;
  justify-content: center;
  width: 100%;
}
.block {
  font-size: 18px;
  padding: 10px;
  background-color: rgba(255, 243, 206, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.block.nav {
  background-color: rgba(252, 212, 94, 0.3);
  font-weight: bold;
}
.b4 span {
  margin: 0 15px;
}
.el-icon-remove:hover,
.el-icon-circle-plus:hover {
  cursor: pointer;
}

.el-icon-delete-solid:hover {
  cursor: pointer;
}
.block img {
  width: 80px;
  height: 80px;
  margin-right: 10px;
}
.b2.product {
  justify-content: left;
}
.b1,
.b6 {
  width: 50px;
}
input {
  width: 20px;
  height: 20px;
}
.b3,
.b5 {
  width: 150px;
}
.b2,
.b4 {
  width: 300px;
}
.bottom {
  width: 80%;
  margin: 30px auto 0;
  display: flex;
  justify-content: space-between;
}
.select-all,
.delete-select {
  font-size: 20px;
  border: 1px solid black;
  border-radius: 2px;
  padding: 5px;
  margin-right: 15px;
  display: inline-block;
  background-color: white;
}
.select-all:hover,
.delete-select:hover {
  cursor: pointer;
}
.total {
  font-size: 25px;
}
button {
  display: block;
  margin: 20px auto;
  width: 200px;
  height: 50px;
  font-size: 25px;
  border-radius: 3px;
}
button:hover {
  cursor: pointer;
  transform: translate(-5px, -5px);
}
.empty {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.empty p {
  font-size: 20px;
  border: 2px solid black;
  border-radius: 3px 3px;
  padding: 5px;
  margin: 0;
}
.empty p:hover {
  cursor: pointer;
  font-weight: bold;
}
@media screen and (max-width: 767px) {
  .shopping-list {
    width: 95%;
  }
  .block {
    font-size: 16px;
  }
  .block img {
    display: none;
  }

  .b4 span {
    margin: 0 5px;
  }

  .bottom {
    width: 100%;
  }
  .select-all,
  .delete-select {
    font-size: 18px;
  }
  .total {
    font-size: 23px;
  }
  button {
    font-size: 20px;
    width: 180px;
  }
}

@media screen and (max-width: 414px) {
  .total {
    font-size: 20px;
  }
  input {
    width: 15px;
    height: 15px;
  }
  .block {
    padding: 5px;
  }
  .b2,
  .b3,
  .b4,
  .b5 {
    width: 200px;
  }
  button {
    height: 40px;
    width: 150px;
    font-size: 18px;
  }
  .empty h1 {
    font-size: 25px;
  }
}
</style>
<style>
@media screen and (max-width: 767px) {
  .delete-message {
    width: 300px;
  }
}
@media screen and (max-width: 414px) {
  .delete-message {
    width: 200px;
  }
  .el-message {
    min-width: 200px;
  }
}
</style>