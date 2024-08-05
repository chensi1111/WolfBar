<template>
  <div class="littlewolf">
    <div class="top" data-aos="zoom-in" data-aos-duration="1500">
      <img src="../../assets/location/littlewolf-logo.png" alt="" />
    </div>
    <div class="bottom">
      <div class="title">小野狼餐酒館</div>
      <div class="content">
        提供在地鮮釀德式啤酒及嚴選上等日本、澳洲和牛、
        美國特選級牛肉和多種新鮮食材，
        讓顧客滿足對燒肉的慾望及啤酒的渴望！
      </div>
      <hr />
      <div class="sub-title">餐廳地址:</div>
      <div class="sub-content el-icon-location">
        <a href="https://www.google.com/maps/dir//Mitsui%20Shopping%20Park%20LaLaport%20%E5%8F%B0%E4%B8%AD" target="_blank">台中市小野狼區小野狼路1段</a>
      </div>
      <div class="sub-title">訂位專線:</div>
      <div class="sub-content el-icon-phone"><a href="tel:0287654321">02-8765-4321</a></div>
      <div class="sub-title">營業時間:</div>
      <div class="sub-content">
        <span class="el-icon-d-arrow-right"></span>每日 午間 11:30-14:30<br />
        <span class="el-icon-d-arrow-right"></span>周日至周四 晚間
        17:30-24:00<br />
        <span class="el-icon-d-arrow-right"></span>周五至周六 晚間
        17:30-24:00<br />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.littlewolf {
  display: flex;
  flex-direction: column;
  line-height: 1.7;
}
hr{
  border: 1px solid black;
}
a{
  text-decoration: none;
  color: black;
}
a:hover{
  font-weight: bolder;
}
.littlewolf .top {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
}
.littlewolf .bottom {
  width: 100%;
  padding: 20px 50px 0 50px;
  box-sizing: border-box;
}

.littlewolf .title {
  font-size: 30px;
  font-weight: bolder;
}
.littlewolf .content {
  font-size: 20px;
  font-weight: 400;
}
.littlewolf .sub-title {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 15px;
}
.littlewolf .sub-content {
  font-size: 20px;
  margin: 0 0 15px 10px;
  font-weight: 400;
}

@media screen and (max-width:414px){
  .littlewolf .bottom{
    padding: 20px;
  }
  .littlewolf .title{
    font-size: 25px;
  }
  .littlewolf .content {
    font-size: 18px;
  }
  .littlewolf .sub-title{
    font-size: 20px;
  }
  .littlewolf .sub-content{
    font-size: 18px;
  }
}
</style>