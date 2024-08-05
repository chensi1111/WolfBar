<template>
  <div class="reserve-complete">
    <div class="title">訂位成功</div>
    <div class="info-container">
        <div class="info">
        <label>訂位編號:</label>{{ code }}
      </div>
      <div class="info">
        <label>訂位姓名:</label>{{ name }}
      </div>
      <div class="info">
        <label>訂位人數:</label>{{ people }}
      </div>
      <div class="info">
        <label>連絡電話:</label>{{ tel }}
      </div>
      <div class="info">
        <label>預約日期:</label>{{ date }}
      </div>
      <div class="info">
        <label>預約時間:</label>{{ time }}
      </div>
      <div class="info">
        <label>預定據點:</label>{{ place }}
      </div>
      <div class="info">
        <label>用餐目的:</label>{{ purpose }}
      </div>
      <div class="info">
        <label>其他備註:</label>{{ remark }}
      </div>
    </div>
    <button @click="backHome">完成</button>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      name: "",
      people: "",
      tel: "",
      date: "",
      time: "",
      place: "",
      purpose: "",
      remark: "",
      code:""
    };
  },
  mounted() {
    this.name = this.$route.query.name;
    this.people = this.$route.query.people;
    this.tel = this.$route.query.tel;
    this.date = this.$route.query.date;
    this.time = this.$route.query.time;
    this.place = this.$route.query.place;
    this.purpose = this.$route.query.purpose;
    this.remark = this.$route.query.remark;
    this.code = this.getProjectNum() + Math.floor(Math.random() * 100000);
  },
  methods:{
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
    backHome(){
        this.$router.push({
            path:'/home'
        })
    }
  }
};
</script>
  
  <style scoped>
.reserve-complete {
  width: 50%;
}
.title {
  margin-top: 30px;
  font-size: 23px;
  padding: 10px;
  font-weight: bold;
  box-sizing: border-box;
  background-color: rgba(252, 212, 94, 0.3);
}
.info-container {
  padding: 20px;
  margin-bottom: 30px;
  background-color: rgba(255, 243, 206, 0.3);
}
.info {
  display: flex;
  font-size: 23px;
  margin-bottom: 10px;
}
label {
  font-weight: bold;
  margin-right:15px ;
}
button {
  display: block;
  margin: auto;
  width: 150px;
  height: 40px;
  font-size: 23px;
  border-radius: 3px;
  margin-bottom: 20px;
}
button:hover {
  cursor: pointer;
  transform: translate(-3px, -3px);
}
@media screen and (max-width:767px){
  .reserve-complete{
    width: 80%;
  }
  .info{
    font-size: 20px;
  }
  button{
    width: 100px;
    font-size: 20px;
  }
  
}
@media screen and (max-width:414px){
  .reserve-complete{
    width: 90%;
  }
  .title{
    font-size: 20px;
  }
  .info{
    font-size: 18px;
  }
  button{
    font-size: 18px;
  }
}
</style>