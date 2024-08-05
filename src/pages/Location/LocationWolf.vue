<template>
  <div class="wolf">
    <div class="top" data-aos="zoom-in" data-aos-duration="1500">
      <img src="../../assets/location/wolf-logo.png" alt="" />
    </div>
    <div class="bottom">
      <div class="title">野狼酒吧</div>
      <div class="content">
        主廚推薦的門市限定餐點，提供更多型態的歐陸美食選擇，
        在寬敞富有設計感的空間中，完美享受啤酒與美食的極致饗宴！
      </div>
      <hr />
      <div class="sub-title">餐廳地址:</div>
      <div class="sub-content el-icon-location" ><a href="https://www.google.com/maps/dir//%E5%8F%B0%E5%8C%97101%E8%A7%80%E6%99%AF%E5%8F%B0" target="_blank">台北市野狼區野狼路1段1F</a></div>
      <div class="sub-title">訂位專線:</div>
      <div class="sub-content el-icon-phone"><a href="tel:0212345678">02-1234-5678</a></div>
      <div class="sub-title">營業時間:</div>
      <div class="sub-content">
        <span class="el-icon-d-arrow-right"></span>週日至週四 11:30-24:00<br />
        <span class="el-icon-d-arrow-right"></span>週五與週六 11:30-24:00<br />
        商業午餐供應時間<br />
        <span class="el-icon-d-arrow-right"></span>平日11:30-14:30 <br>(最後點餐 14:00)<br />
        <span class="el-icon-d-arrow-right"></span>商業午餐均附個人份今日湯品、沙拉及可續杯紅茶或咖啡<br />
        (可補差價換購其他飲品)
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.wolf {
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
.wolf .top {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
}

.wolf .bottom {
  width: 100%;
  padding: 20px 50px;
  box-sizing: border-box;
}

.wolf .title {
  font-size: 30px;
  font-weight: bolder;
}
.wolf .content {
  font-size: 20px;
  font-weight: 400;
}
.wolf .sub-title {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 15px;
}
.wolf .sub-content {
  font-size: 20px;
  margin:0 0 15px 10px;
  font-weight: 400;
}
@media screen and (max-width:414px){
  .wolf .bottom{
    padding: 20px;
  }
  .wolf .title{
    font-size: 25px;
  }
  .wolf .content {
    font-size: 18px;
  }
  .wolf .sub-title{
    font-size: 20px;
  }
  .wolf .sub-content{
    font-size: 18px;
  }
}
</style>