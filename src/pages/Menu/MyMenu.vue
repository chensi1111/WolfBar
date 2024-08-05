<template>
  <div class="container">
    <div class="poster">Menu</div>
    <div class="btn">
      <div class="btn-alcohol" @click="ToAlcohol">經典啤酒</div>
      <div class="btn-meal" @click="ToMeal">精緻美食</div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    ToAlcohol() {
      this.$router.push({
        path: "/menu/alcohol",
      });
    },
    ToMeal() {
      this.$router.push({
        path: "/menu/meal",
      });
    },
  },
};
</script>

<style scoped>
.container {
  background-color: rgba(252, 212, 94, 0.3);
}
.poster {
  background-image: url(../../assets/menu/poster.jpg);
  background-size: cover;
  background-position: bottom;
  height: 300px;
  font-size: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  text-shadow: gray 5px 5px;
}
.btn {
  display: flex;
  justify-content: center;
  margin: 20px;
}
.btn-alcohol,
.btn-meal {
  font-size: 30px;
  padding: 5px;
  margin: 10px 15px;
  font-weight: bold;
}
.btn-alcohol:hover,
.btn-meal:hover {
  border: 3px solid black;
  border-radius: 5px;
  transition: 0.1s;
  cursor: pointer;
}

@media screen and (max-width: 767px) {
  .poster {
    font-size: 100px;
  }
  .btn-alcohol,
  .btn-meal {
    font-size: 25px;
  }
}
@media screen and (max-width:414px){
  .btn-alcohol,
  .btn-meal {
    font-size: 20px;
  }
  
}
</style>