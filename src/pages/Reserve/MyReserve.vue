<template>
  <div>
    <div class="poster">Reseve</div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.poster {
  background-image: url(../../assets/reserve/poster.jpg);
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
.container {
  background-color: rgba(69, 53, 38, 0.5);
  display: flex;
  align-items: center;
  flex-direction: column;
}
@media screen and (max-width:767px){
  .poster{
    font-size: 100px;
  }
  
}
@media screen and (max-width:414px){
  .poster{
    font-size: 70px;
  }
  
}
</style>