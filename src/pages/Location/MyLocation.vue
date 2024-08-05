<template>
  <div>
    <div class="poster">Location</div>
    <div class="container">
      <div class="title">
        <router-link to="/location/wolf" class="place">酒吧</router-link>
        <router-link to="/location/little-wolf" class="place"
          >餐酒館</router-link
        >
      </div>
      <div class="content">
        <div class="left">
          <router-view name="img"></router-view>
        </div>
        <div class="right">
          <div class="info">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  background: radial-gradient(
    circle,
    rgba(32, 40, 82, 0.5),
    rgba(22, 31, 75, 0.9)
  );
  display: flex;
  flex-direction: column;
}
.poster {
  background-image: url(../../assets/location/poster.jpg);
  background-size: cover;
  background-position: left;
  height: 300px;
  font-size: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  text-shadow: gray 5px 5px;
}

.content{
  display: flex;
}
.left {
  width: 45%;
  margin-top: 50px;
}
.right {
  width: 55%;
}
.title {
  display: flex;
  justify-content: center;
}
.place {
  width: 50%;
  text-align: center;
  margin-top: 20px;
  font-size: 35px;
  padding: 10px 40px;
  font-weight: bolder;
  border-bottom: 4px solid white;
  text-decoration: none;
  color: white;
}
.router-link-active {
  color: rgba(229, 187, 0, 0.8);
  border-bottom: 4px solid rgba(229, 187, 0, 0.8);
}
@media screen and (max-width: 1024px) {
  .left {
    display: flex;
    align-items: center;
    margin: 0;
  }
  .title {
    width: 100%;
  }
}
@media screen and (max-width:767px){
  .poster{
    font-size: 85px;
  }
  .content{
    flex-direction: column;
  }
  .left{
    width: 100%;
    
  }
  .right{
    width: 100%;
  }  
}
@media screen and (max-width:414px){
  
  .poster{
    font-size: 70px;
  }
  .place{
    font-size: 28px;
    padding: 10px 20px;
  }
}
</style>