<template>
  <div class="wrapper">
    <div class="nav-burger" :style="{ top: isMenuOpen ? '0' : '-100vh' }">
      <div @click="closeMenu">
        <router-link to="/news" class="router-style">最新消息</router-link>
      </div>
      <div @click="closeMenu">
        <router-link to="/about" class="router-style">關於我們</router-link>
      </div>
      <div @click="closeMenu">
        <router-link to="/brewing" class="router-style">經典工藝</router-link>
      </div>
      <div @click="closeMenu">
        <router-link to="/menu/alcohol" class="router-style"
          >美食介紹</router-link
        >
      </div>
      <div @click="closeMenu">
        <router-link to="/take-out" class="router-style">我要外送</router-link>
      </div>
      <div @click="closeMenu">
        <router-link to="/location/wolf" class="router-style"
          >美味據點</router-link
        >
      </div>
    </div>
    <header>
      <div class="logo" @click="ToHome">
        <img src="../assets/footprint.png" />
      </div>
      <ul class="nav">
        <li>
          <router-link to="/news" class="router-style">最新消息</router-link>
        </li>
        <li>
          <router-link to="/about" class="router-style">關於我們</router-link>
        </li>
        <li>
          <router-link to="/brewing" class="router-style">經典工藝</router-link>
        </li>
        <li>
          <router-link to="/menu/alcohol" class="router-style"
            >美食介紹</router-link
          >
        </li>
        <li>
          <router-link to="/take-out" class="router-style"
            >我要外送</router-link
          >
        </li>
        <li>
          <router-link to="/location/wolf" class="router-style"
            >美味據點</router-link
          >
        </li>
      </ul>
      <div class="icons">
        <el-badge :value="shoppingCartCount" class="item">
          <div class="el-icon-shopping-cart-2" @click="ToShoppingCart"></div>
        </el-badge>
        <div class="burger" @click="toggleMenu">
          <div
            class="bar"
            :class="{ bar1: isMenuOpen, close: !isMenuOpen }"
          ></div>
          <div
            class="bar"
            :class="{ bar2: isMenuOpen, close: !isMenuOpen }"
          ></div>
          <div
            class="bar"
            :class="{ bar3: isMenuOpen, close: !isMenuOpen }"
          ></div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "MyHeader",
  data() {
    return {
      shoppingCartCount: "",
      isMenuOpen: false,
    };
  },
  methods: {
    ToHome() {
      this.$router.push({
        path: "/home",
      });
    },
    ToShoppingCart() {
      this.$router.push({
        path: "/shopping-cart/shopping-list",
      });
    },
    ToMember() {
      this.$router.push({
        path: "/member",
      });
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
  //接收購物車的值
  mounted() {
    //轉為數值
    this.shoppingCartCount = parseInt(
      localStorage.getItem("shoppingCartCount")
    );
    this.$bus.$on("shoppingCartData", (value) => {
      this.shoppingCartCount = value;
    });
  },
  beforeDestroy() {
    this.$bus.$off("shoppingCartData", this.shoppingCartCount);
  },
  watch: {
    shoppingCartCount: {
      handler(value) {
        localStorage.setItem("shoppingCartCount", JSON.stringify(value));
      },
    },
  },
};
</script>

<style scoped>
.wrapper {
  position: relative;
}
header {
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.router-style {
  color: white;
  text-decoration: none;
  position: relative;
}
.router-style:hover {
  color: black;
}

.nav li {
  display: inline-block;
  margin-right: 20px;
  font-size: 25px;
  font-weight: bold;
}
.nav-burger {
  display: none;
}
.logo {
  margin: 10px;
}
.logo:hover {
  cursor: pointer;
}
.icons {
  display: flex;
  margin-right: 30px;
}
::v-deep .el-badge__content {
  right: 20px;
  top: 5px;
}
.el-icon-shopping-cart-2 {
  color: white;
  display: block;
  font-size: 70px;
  margin-right: 15px;
}

.el-icon-shopping-cart-2:hover {
  cursor: pointer;
}
.burger {
  color: white;
  display: none;
  z-index: 20;
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(4px);
  position: absolute;
  top: -9999px;
  left: -9999px;
}
.bar {
  display: none;
  width: 30px;
  height: 4px;
  margin: 8px;
  background-color: white;
}
.bar1 {
  transform: translateY(12px) rotate(45deg);
  transition: 0.5s;
}
.close {
  transform: translateY(0) rotate(0);
  opacity: 1;
  transition: 0.5s;
}
.bar2 {
  opacity: 0;
  transition: 0.5s;
}
.bar3 {
  transform: translateY(-12px) rotate(-45deg);
  transition: 0.5s;
}
.burger:hover {
  cursor: pointer;
}
@media screen and (max-width: 1024px) {
  header {
    justify-content: space-between;
  }
  .logo {
    margin-left: 30px;
  }
  .logo img {
    width: 80px;
  }
  .el-icon-shopping-cart-2 {
    font-size: 50px;
  }
  .burger {
    display: block;
    position: static;
  }
  .bar {
    display: block;
  }
  .nav {
    display: none;
  }
  .nav-burger {
    display: block;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.85);
    transition: 0.5s;
  }
  .nav-burger .router-style {
    font-size: 40px;
    line-height: 2;
  }
  .nav-burger .router-style:hover {
    color: gray;
  }
}
@media screen and (max-width: 768px) {
  .nav-burger .router-style {
    font-size: 35px;
    line-height: 1.8;
  }
}
@media screen and (max-width: 414px) {
  .logo img {
    width: 60px;
  }
  .icons{
    margin-right: 10px;
  }
}
</style>