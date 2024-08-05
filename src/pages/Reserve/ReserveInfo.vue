<template>
  <div class="reserve-info">
    <div class="title">訂位資料</div>
    <div class="info-container">
      <div class="info">
        <label>訂位姓名:</label>
        <div class="123">
          <input type="text" placeholder="請輸入姓名" v-model="name" />
          <div class="alert" v-show="isEmpty[1]">此欄不能為空</div>
        </div>
      </div>

      <div class="info">
        <label>訂位人數:</label>
        <div>
          <input type="text" placeholder="請輸入人數" v-model="people" />
          <div class="alert" v-show="isEmpty[2]">此欄不能為空</div>
        </div>
      </div>
      <div class="info">
        <label>連絡電話:</label>
        <div>
          <input type="text" placeholder="請輸入連絡電話" v-model="tel" />
          <div class="alert" v-show="isEmpty[3]">此欄不能為空</div>
        </div>
      </div>
      <div class="info">
        <label>預約日期:</label>
        <div>
          <el-date-picker
            v-model="date"
            type="date"
            placeholder="選擇日期"
            :picker-options="pickerOptions"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
          <div class="alert" v-show="isEmpty[4]">此欄不能為空</div>
        </div>
      </div>
      <div class="info">
        <label>預約時間:</label>
        <div>
          <el-time-select
            v-model="time"
            :picker-options="{
              start: '11:30',
              step: '00:15',
              end: '24:00',
            }"
            placeholder="選擇時間"
          >
          </el-time-select>
          <div class="alert" v-show="isEmpty[5]">此欄不能為空</div>
        </div>
      </div>
      <div class="info">
        <label>預定據點:</label>
        <div>
          <select v-model="place">
            <option value="">請選擇用餐地點</option>
            <option value="野狼酒吧">野狼酒吧</option>
            <option value="小野狼餐酒館">小野狼餐酒館</option>
          </select>
          <div class="alert" v-show="isEmpty[6]">此欄不能為空</div>
        </div>
      </div>
      <div class="info">
        <label>用餐目的:</label>
        <select v-model="purpose">
          <option value="">請選擇用餐目的</option>
          <option value="朋友聚餐">朋友聚餐</option>
          <option value="生日">生日</option>
          <option value="約會">約會</option>
          <option value="紀念日">紀念日</option>
          <option value="其他">其他</option>
        </select>
      </div>
      <div class="info">
        <label>其他備註:</label><textarea v-model="remark"></textarea>
      </div>
    </div>
    <button @click="complete">送出</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions: {
        disabledDate: (time) => {
          return time.getTime() < new Date().getTime() - 24 * 60 * 60 * 1000;
        },
      },
      name: "",
      people: "",
      tel: "",
      date: "",
      time: "",
      place: "",
      purpose: "",
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
    complete() {
      if (
        this.name === "" ||
        this.people === "" ||
        this.tel === "" ||
        this.date === "" ||
        this.time === "" ||
        this.place === ""
      ) {
        this.$message({
          message:"請輸入正確資訊",
          type:"error",
          center:true
        });
        this.isEmpty[1] = this.name === "";
        this.isEmpty[2] = this.people === "";
        this.isEmpty[3] = this.tel === "";
        this.isEmpty[4] = this.date === "";
        this.isEmpty[5] = this.time === "";
        this.isEmpty[6] = this.place === "";
      } else {
        this.$message({
          message: "已成功訂位",
          type: "success",
          center:true
        });
        this.$router.push({
          path: "/reserve/reserve-complete",
          query: {
            name: this.name,
            people: this.people,
            tel: this.tel,
            date: this.date,
            time: this.time,
            place: this.place,
            purpose: this.purpose,
            remark: this.remark,
          },
        });
      }
    },
  },
};
</script>

<style scoped>
.reserve-info {
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
  padding: 30px 0 30px 30px;
  margin-bottom: 30px;
  background-color: rgba(255, 243, 206, 0.3);
}
.info {
  display: flex;
  font-size: 23px;
  margin-bottom: 10px;
}
input,
select {
  height: 23px;
}
::v-deep .el-input__inner {
  height: 23px;
}
::v-deep .el-date-editor.el-input {
  width: 300px;
  margin-left: 20px;
}
label {
  font-weight: bold;
}
input,
select,
textarea {
  margin-left: 20px;
  width: 300px;
  box-sizing: border-box;
}
textarea {
  height: 150px;
}
.alert {
  font-size: 20px;
  color: rgb(190, 0, 0);
  margin-left: 10px;
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

@media screen and (max-width: 1024px) {
  .reserve-info {
    width: 80%;
  }
}
@media screen and (max-width: 767px) {
  .info {
    flex-wrap: wrap;
    font-size: 20px;
  }
  .alert {
    font-size: 18px;
    margin: 5px 0 0 20px;
  }
  input,
  select,
  textarea {
    width: 200px;
  }
  ::v-deep .el-date-editor.el-input{
    width: 200px;
  }
  label {
    margin-bottom: 5px;
  }
  button {
    width: 100px;
  }
}
@media screen and (max-width: 414px) {
  .reserve-info {
    width: 90%;
  }
  .title {
    font-size: 20px;
  }
  .info {
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