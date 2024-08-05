<template>
  <div class="meal">
    <!-- 後退按鈕 -->
    <button
      class="el-icon-caret-left"
      @click="prevPage"
      :style="{ transform: prevBtn }"
    ></button>

    <!-- 主體 -->
    <div id="book" class="book" :style="{ transform: bookTransform }">
      <!-- 第一頁 -->
      <div
        class="paper"
        :class="{
          flipped: isFlipped[1],
        }"
        :style="{ zIndex: paperZIndex[1] }"
      >
        <div class="front">
          <div id="f1" class="front-content">
            <h1>Menu</h1>
            <img src="../../assets/menu/footprint.png" />
          </div>
        </div>
        <div class="back">
          <div id="b1" class="back-content">
            <div class="overlay"></div>
            <h1>主食</h1>
            <div class="food">
              <div class="name">凱薩沙拉<br /><span>Caesar salad</span></div>
              <div class="cost">$250</div>
            </div>
            <div class="food">
              <div class="name">德國香腸<br /><span>German sausage</span></div>
              <div class="cost">$250</div>
            </div>
            <div class="food">
              <div class="name">炸薯條<br /><span>French fries</span></div>
              <div class="cost">$250</div>
            </div>
            <div class="food">
              <div class="name">乳酪拼盤<br /><span>Cheese platter</span></div>
              <div class="cost">$300</div>
            </div>
            <div class="food">
              <div class="name">芝士漢堡<br /><span>Cheeseburger</span></div>
              <div class="cost">$300</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 第二頁 -->
      <div
        class="paper"
        :class="{
          flipped: isFlipped[2],
        }"
        :style="{ zIndex: paperZIndex[2] }"
      >
        <div class="front">
          <div id="f2" class="front-content">
            <div class="overlay"></div>
            <h1>主食</h1>
            <div class="food">
              <div class="name">炸魚薯條<br /><span>Fish and chips</span></div>
              <div class="cost">$300</div>
            </div>
            <div class="food">
              <div class="name">
                烤雞翅<br /><span>Grilled chicken wings</span>
              </div>
              <div class="cost">$300</div>
            </div>
            <div class="food">
              <div class="name">烤肉串<br /><span>Grilled skewers</span></div>
              <div class="cost">$350</div>
            </div>
            <div class="food">
              <div class="name">烤鮭魚<br /><span>Grilled salmon</span></div>
              <div class="cost">$400</div>
            </div>
            <div class="food">
              <div class="name">烤牛排<br /><span>Grilled steak</span></div>
              <div class="cost">$500</div>
            </div>
          </div>
        </div>
        <div class="back">
          <div id="b2" class="back-content">
            <div class="overlay"></div>
            <h1>啤酒</h1>
            <div class="food">
              <div class="name">月夜<br /><span>Moonlit night</span></div>
              <div class="cost">$300</div>
            </div>
            <div class="food">
              <div class="name">獵人<br /><span>Hunter</span></div>
              <div class="cost">$300</div>
            </div>
            <div class="food">
              <div class="name">狼魂<br /><span>Wolf spirit</span></div>
              <div class="cost">$300</div>
            </div>
            <div class="food">
              <div class="name">獨行<br /><span>Lone wolf</span></div>
              <div class="cost">$300</div>
            </div>
            <div class="food">
              <div class="name">野性<br /><span>Wildness</span></div>
              <div class="cost">$300</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 第三頁 -->
      <div
        class="paper"
        :class="{
          flipped: isFlipped[3],
        }"
        :style="{ zIndex: paperZIndex[3] }"
      >
        <div class="front">
          <div id="f3" class="front-content">
            <div class="overlay"></div>
            <h1>套餐</h1>
            <h2>經典套餐</h2>
            <div class="food">
              <div class="name">
                凱薩沙拉<br />
                <span>Caesar salad</span><br />
                炸薯條<br />
                <span>French fries</span><br />
                芝士漢堡<br />
                <span>Cheeseburger</span><br />
                烤牛排<br />
                <span>Grilled steak</span><br />
                任兩款啤酒<br />
                <span>Any two beers</span>
              </div>
              <div class="cost">$1500</div>
            </div>
          </div>
        </div>
        <div class="back">
          <div id="b3" class="back-content">
          </div>
        </div>
      </div>
    </div>

    <!-- 前進按鈕 -->
    <button
      class="el-icon-caret-right"
      @click="nextPage"
      :style="{ transform: nextBtn }"
    ></button>
    <!--rwd-->
    <div class="rwd">
      <div class="rwd-page front-page" data-aos="fade-up" data-aos-duration="1500">
        <h1 class="title">Menu</h1>
        <img src="../../assets/menu/footprint.png" />
      </div>
      <div class="rwd-page" data-aos="fade-up" data-aos-duration="1500">
        <h1>主食</h1>
        <div class="food">
          <div class="name">凱薩沙拉<br /><span>Caesar salad</span></div>
          <div class="cost">$250</div>
        </div>
        <div class="food">
          <div class="name">德國香腸<br /><span>German sausage</span></div>
          <div class="cost">$250</div>
        </div>
        <div class="food">
          <div class="name">炸薯條<br /><span>French fries</span></div>
          <div class="cost">$250</div>
        </div>
        <div class="food">
          <div class="name">乳酪拼盤<br /><span>Cheese platter</span></div>
          <div class="cost">$300</div>
        </div>
        <div class="food">
          <div class="name">芝士漢堡<br /><span>Cheeseburger</span></div>
          <div class="cost">$300</div>
        </div>
      </div>
      <div class="rwd-page" data-aos="fade-up" data-aos-duration="1500">
        <h1>主食</h1>
        <div class="food">
          <div class="name">炸魚薯條<br /><span>Fish and chips</span></div>
          <div class="cost">$300</div>
        </div>
        <div class="food">
          <div class="name">烤雞翅<br /><span>Grilled chicken wings</span></div>
          <div class="cost">$300</div>
        </div>
        <div class="food">
          <div class="name">烤肉串<br /><span>Grilled skewers</span></div>
          <div class="cost">$350</div>
        </div>
        <div class="food">
          <div class="name">烤鮭魚<br /><span>Grilled salmon</span></div>
          <div class="cost">$400</div>
        </div>
        <div class="food">
          <div class="name">烤牛排<br /><span>Grilled steak</span></div>
          <div class="cost">$500</div>
        </div>
      </div>
      <div class="rwd-page" data-aos="fade-up" data-aos-duration="1500">
        <h1>啤酒</h1>
        <div class="food">
          <div class="name">月夜<br /><span>Moonlit night</span></div>
          <div class="cost">$300</div>
        </div>
        <div class="food">
          <div class="name">獵人<br /><span>Hunter</span></div>
          <div class="cost">$300</div>
        </div>
        <div class="food">
          <div class="name">狼魂<br /><span>Wolf spirit</span></div>
          <div class="cost">$300</div>
        </div>
        <div class="food">
          <div class="name">獨行<br /><span>Lone wolf</span></div>
          <div class="cost">$300</div>
        </div>
        <div class="food">
          <div class="name">野性<br /><span>Wildness</span></div>
          <div class="cost">$300</div>
        </div>
      </div>
      <div class="rwd-page" data-aos="fade-up" data-aos-duration="1500">
        <h1>套餐</h1>
        <h2>經典套餐</h2>
        <div class="food">
          <div class="name">
            凱薩沙拉<br />
            <span>Caesar salad</span><br />
            炸薯條<br />
            <span>French fries</span><br />
            芝士漢堡<br />
            <span>Cheeseburger</span><br />
            烤牛排<br />
            <span>Grilled steak</span><br />
            任兩款啤酒<br />
            <span>Any two beers</span>
          </div>
          <div class="cost">$1500</div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      isFlipped: { 1: false, 2: false, 3: false },
      currentLocation: 1,
      numOfPapers: 3,
      paperZIndex: { 1: 3, 2: 2, 3: 1 },
      bookTransform: "translateX(0%)",
      prevBtn: "translateX(0px)",
      nextBtn: "translateX(0px)",
    };
  },
  methods: {
    openBook() {
      this.bookTransform = "translateX(50%)";
      this.prevBtn = "translateX(-225px)";
      this.nextBtn = "translateX(225px)";
    },
    closeBook() {
      if (this.currentLocation === 2) {
        this.bookTransform = "translateX(0%)";
      } else {
        this.bookTransform = "translateX(100%)";
      }
      this.prevBtn = "translateX(0px)";
      this.nextBtn = "translateX(0px)";
    },
    nextPage() {
      if (this.currentLocation < this.numOfPapers + 1) {
        this.openBook();
        this.isFlipped[this.currentLocation] = true;
        if (this.currentLocation === this.numOfPapers) {
          this.closeBook();
        }
        this.currentLocation++;
        this.updatePaperZIndex();
      }
    },
    prevPage() {
      if (this.currentLocation > 1) {
        this.openBook();
        this.isFlipped[this.currentLocation - 1] = false;
        if (this.currentLocation === 2) {
          this.closeBook();
        }
        this.currentLocation--;
        this.updatePaperZIndex();
      }
    },
    updatePaperZIndex() {
      if (this.currentLocation === 1) {
        this.paperZIndex = { 1: 3, 2: 2, 3: 1 };
      } else if (this.currentLocation === 2) {
        this.paperZIndex = { 1: 1, 2: 3, 3: 2 };
      } else if (this.currentLocation === 3) {
        this.paperZIndex = { 1: 1, 2: 2, 3: 3 };
      } else if (this.currentLocation === 4) {
        this.paperZIndex = { 1: 1, 2: 2, 3: 3 };
      }
    },
  },
};
</script>

<style scoped>
.meal {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(69, 53, 38, 0.5);
}
/* 本體 */
.book {
  position: relative;
  width: 450px;
  height: 600px;
  transition: transform 0.5s;
}

.paper {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  perspective: 1500px;
}
#f1,#b3{
  background: radial-gradient(circle, rgb(154, 120, 77), rgb(112, 72, 34));
}
.front,
.back {
  background-image: url(../../assets/menu/menu.jpg);
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform-origin: left;
  transition: transform 0.5s;
}

.front {
  z-index: 1;
  backface-visibility: hidden;
  border-left: 3px solid rgba(0, 0, 0, 0.65);
}

.back {
  z-index: 0;
}

.front-content,
.back-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding-top: 10%;
  box-sizing: border-box;
  color: rgb(0, 0, 0);
  transition: box-shadow 0.5s;
}

.back-content {
  transform: rotateY(180deg);
}

#b1 h1,
#f2 h1,
#b2 h1,
#f3 h1,
#b3 h1 {
  font-size: 40px;
  margin: 0;
}
#f1 {
  font-size: 50px;
}
.overlay {
  position: absolute;
  width: 85%;
  height: 85%;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 5;
}
.food {
  display: flex;
  width: 70%;
  justify-content: space-between;
  margin-top: 20px;
}
.name {
  font-size: 28px;
  font-weight: bold;
}
.name span {
  font-size: 18px;
  color: rgb(32, 32, 32);
}
#f3 .name {
  font-size: 25px;
}
.cost {
  font-size: 25px;
}
p {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  width: 75%;
}

/* 翻頁效果 */
.flipped .front,
.flipped .back {
  transform: rotateY(-180deg);
}

/* 按鈕 */
button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin: 10px;
  transition: transform 0.5s;
  font-size: 100px;
}

button:hover {
  color: gray;
}
.rwd {
  display: none;
}
@media screen and (max-width: 1024px) {
  .meal{
    height: 100%;
  }
  button,
  .book {
    display: none;
  }
  .rwd {
    display: block;
    height: 100%;
  }
  .rwd-page {
    width: 450px;
    height: 600px;
    background-image: url(../../assets/menu/menu.jpg);
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin:20px 0;
  }
  .rwd-page.front-page{
    background:radial-gradient(circle, rgb(154, 120, 77), rgb(112, 72, 34));
  }
  .rwd-page h1{
    font-size: 40px;
  }
  .rwd-page .title{
    font-size: 100px;
  }

}
@media screen and (max-width:767px){
  .rwd-page{
    width: 350px;
  }
}
@media screen and (max-width:414px){
  .rwd-page{
    width: 280px;
    height: 373px;
  }
  .rwd-page h1{
    font-size: 30px;
    margin: 0;
  }
  .rwd-page h2{
    margin: 0;
    font-size: 20px;
  }
  .rwd-page .title{
    font-size: 80px;
  }
  .rwd-page .name{
    font-size: 20px;
  }
  .rwd-page .cost{
    font-size: 18px;
  }
  .rwd-page span{
    font-size: 16px;
  }
  .rwd-page .food{
    margin-top: 5px;
  }
}
</style>