<template>
  <div>
    <router-link to="/reserve/reserve-info" class="router-style">
      <div class="booking">立即訂位</div>
    </router-link>
    <div class="rwd" @click="toReserve">立即訂位</div>
  </div>
</template>

<script>
export default {
  name: "MyBooking",
  methods: {
    toReserve() {
      this.$router.push({
        path: "/reserve/reserve-info",
      });
    },
  },
};
</script>

<style scoped>
.booking {
  font-size: 25px;
  font-weight: bold;
  writing-mode: vertical-lr;
  position: fixed;
  right: 3%;
  top: 60%;
  text-shadow: 2px 2px rgba(248, 200, 58, 0.3);
  z-index: 100;
}

.booking:hover {
  cursor: pointer;
  transform: translate(5px, 5px);
}

.booking::before {
  content: url(../assets/order-icon.png);
  margin: 3px;
}

.booking:hover::before {
  content: url(../assets/order-icon-active.png);
}
.router-style {
  text-decoration: none;
  color: black;
}
.rwd{
    display: none;
}

@media screen and (max-width: 767px) {
  .router-style {
    display: none;
  }
  .rwd {
    display: block;
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    z-index: 50;
  }
  .rwd:hover {
    cursor: pointer;
  }
}
@media screen and (max-width:414px){
  .rwd{
    font-size: 20px;
  }
  
}
</style>