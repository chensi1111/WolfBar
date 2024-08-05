<template>
  <div class="wrapper">
    <div class="poster">Brewing</div>
    <div class="container">
      <div class="introduce">
        <img class="footprint" src="../../assets/brewing/footprint.png" />
        <p class="one" @click="moveToSection('.section1')">首席釀酒大師</p>
        <p class="two" @click="moveToSection('.section2')">純粹釀酒原料</p>
        <p class="three" @click="moveToSection('.section3')">嚴謹釀酒製程</p>
        <p class="four" @click="moveToSection('.section4')">極致絕佳風味</p>
      </div>
    </div>
    <div class="section1">
      <div class="man" data-aos="fade-up" data-aos-duration="1500">
        <img src="../../assets/brewing/man.png" />
      </div>
      <div class="section1-top">
        <h1>Benjamin Brewer</h1>
        <p>WolfBar首席釀酒師-Benjamin Brewer</p>
        <p>美國加州大學學士，主修啤酒釀酒科學與工程</p>
        <p>德國慕尼黑工業大學碩士，啤酒釀酒專業。</p>
      </div>
      <div class="cover"></div>
      <div class="section1-bottom">
        <h1>首席釀酒大師</h1>
        <p>百年酒廠釀酒師（2010-2015）</p>
        <p>
          負責研發多款經典啤酒，包括淡啤酒、黑啤酒和IPA等，領導團隊贏得數項國際啤酒大賽獎項。
        </p>
        <p>德國啤酒協會顧問（2016-2020）</p>
        <p>
          擔任德國啤酒協會的技術顧問，推動德國傳統啤酒工藝與現代技術的結合，提升德國啤酒在國際市場的競爭力。
        </p>
      </div>
    </div>
    <div class="section2">
      <h1>純粹經典釀酒原料</h1>
      <div class="materials">
        <div class="material">
          <div class="content">
            100% 德產優質麥芽<br /><br />
            <span
              >野狼酒吧引以為傲地選用優質德國麥芽，為我們的啤酒注入獨特風味和高品質的口感。這種精挑細選的原料不僅提升了我們啤酒的品質，更使得每一杯野狼啤酒都充滿了德國麥芽的獨特魅力。這種對品質的堅持與對釀酒工藝的熱愛，使野狼酒吧成為品味享受的理想之地。</span
            >
          </div>
          <div class="pic" data-aos="zoom-in" data-aos-duration="1500">
            <img src="../../assets/brewing/material1.png" />
          </div>
        </div>
        <div class="material">
          <div class="pic" data-aos="zoom-in" data-aos-duration="1500">
            <img src="../../assets/brewing/material2.png" />
          </div>
          <div class="content">
            100% 德國的啤酒花<br /><br />
            <span
              >野狼酒吧以優質德國啤酒花釀造啤酒，每一口都散發著獨特的芳香和濃郁的風味。我們選用的啤酒花經過嚴格篩選，確保了啤酒的品質和口感。這種對品質的追求和對釀酒工藝的熱愛，使野狼酒吧成為品味享受的絕佳場所，每一杯野狼啤酒都是對德國啤酒花的極致致敬。</span
            >
          </div>
        </div>
        <div class="material">
          <div class="content">
            100% 自行擴培酵母<br /><br />
            <span
              >野狼酒吧以自行擴培的酵母釀造啤酒，為每一杯酒賦予獨特風味和口感。我們精心挑選優質酵母菌株，並在嚴格控制的環境中培養和繁殖，確保啤酒的品質和穩定性。這種對酵母的精心培育和選擇，使野狼酒吧的啤酒充滿了獨特的酵母風味，成為品味享受的不二之選。</span
            >
          </div>
          <div class="pic" data-aos="zoom-in" data-aos-duration="1500">
            <img src="../../assets/brewing/material3.png" />
          </div>
        </div>
        <div class="material">
          <div class="pic" data-aos="zoom-in" data-aos-duration="1500">
            <img src="../../assets/brewing/material4.png" />
          </div>
          <div class="content">
            100% 甘甜滑順水源<br /><br />
            <span
              >野狼酒吧向您呈現源自甘甜水質的啤酒，將清新純淨的風味融入每一杯酒中。我們精挑細選甜美的水源，經過嚴格檢測和多重過濾，確保水質純凈安全。這種用心選擇和處理，賦予野狼酒吧啤酒獨特的甘甜風味，為您帶來極致享受。讓我們的啤酒伴您度過愉快時光，品味生活中的美好滋味。</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="section3">
      <div class="left"></div>
      <div class="right">
        <h1>堅持嚴謹德式釀酒製程</h1>
        <p>
          野狼釀酒廠秉承著傳統工藝，堅持選用優質的大麥、啤酒花和水源，
          並遵循著嚴格的製作工藝，確保每一批釀造出來的啤酒都保持著卓越的品質。
        </p>
        <p>
          野狼啤酒廠不僅注重於生產出口感豐富、口味獨特的啤酒產品，
          同時也致力於保護環境、推動可持續發展，
          以確保未來世代也能品嚐到優質的野狼啤酒。
        </p>
      </div>
    </div>
    <div class="section4">
      <div class="content" data-aos="flip-up" data-aos-duration="1500">
        <h1>追求極致絕佳風味</h1>
        <p>
          野狼酒吧以優秀的釀酒師團隊著稱，
          他們精心挑選原料，並不斷優化生產工藝， 追求最平衡、最美妙的啤酒風味。
        </p>
        <p>
          結合德國釀酒技術，野狼啤酒以獨特的品質和口感著稱，
          每一口都展現對極致風味的堅持和追求， 讓您沉醉其中，回味無窮。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    moveToSection(selector) {
      document.querySelector(selector).scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: radial-gradient(
    circle,
    rgba(32, 40, 82, 0.5),
    rgba(22, 31, 75, 0.9)
  );
  padding-bottom: 30px;
}

.poster {
  background-image: url(../../assets/brewing/poster.jpg);
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

/*足跡商標 */
.introduce {
  position: relative;
}

.footprint {
  margin-top: 30px;
}

.introduce p {
  position: absolute;
  font-size: 30px;
  font-weight: bold;
  color: white;
  text-shadow: 1px 1px black;
}

.introduce p:hover {
  color: rgb(192, 147, 90);
  cursor: pointer;
}

.one {
  top: 35%;
  left: -65%;
}

.one::after {
  content: "";
  position: absolute;
  top: 50%;
  right: -40%;
  width: 50px;
  height: 3px;
  background-color: black;
  transform: translateY(-50%);
}

.two {
  top: 10%;
  left: -40%;
}

.two::after {
  content: "";
  position: absolute;
  top: 50%;
  right: -35%;
  width: 50px;
  height: 3px;
  background-color: black;
  transform: translateY(-50%);
}

.three {
  top: 10%;
  right: -40%;
}

.three::after {
  content: "";
  position: absolute;
  top: 50%;
  left: -35%;
  width: 50px;
  height: 3px;
  background-color: black;
  transform: translateY(-50%);
}

.four {
  top: 35%;
  right: -65%;
}

.four::after {
  content: "";
  position: absolute;
  top: 50%;
  left: -40%;
  width: 50px;
  height: 3px;
  background-color: black;
  transform: translateY(-50%);
}

/*內容區 */
/*section1 */
.section1 {
  position: relative;
  height: 100%;
  background-color: rgba(69, 53, 38, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.man {
  height: 100%;
}

.section1-top {
  position: absolute;
  left: 5%;
  top: 5%;
  width: 45%;
}

.section1-bottom {
  position: absolute;
  left: 5%;
  bottom: 0%;
  width: 45%;
}

.section1-top h1,
.section1-bottom h1 {
  color: rgb(123, 44, 2);
  font-size: 35px;
  margin: 0;
  text-shadow: 1px 1px black;
}

.section1-top p,
.section1-bottom p {
  color: black;
  font-size: 22px;
  font-weight: bold;
}

.cover {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  background-color: rgba(2, 2, 2, 0.3);
}

/*section2 */
.section2 {
  height: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(248, 200, 58, 0.3);
}

.section2 h1 {
  font-size: 45px;
  color: rgb(123, 44, 2);
  text-shadow: 1px 1px black;
}

.materials {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 20px;
}

.material {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 300px;
  margin: 20px;
}

.material .content {
  width: 100%;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  color: rgb(123, 44, 2);
}
.material .pic {
  width: 100%;
  display: flex;
  justify-content: center;
}
.material span {
  color: black;
  font-size: 18px;
}
/*section3 */
.section3 {
  height: 100vh;
  width: 100%;
  display: flex;
  background-color: rgba(69, 53, 38, 0.5);
}
.section3 .left {
  width: 50%;
  background-image: url(../../assets/brewing/factory.jpg);
  background-size: cover;
}
.section3 .right {
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.section3 h1 {
  font-size: 45px;
  color: rgb(123, 44, 2);
  text-shadow: 1px 1px black;
}
.section3 p {
  width: 80%;
  color: black;
  font-size: 22px;
  font-weight: bold;
}
/*section4 */
.section4 {
  height: 100vh;
  width: 100%;
  background-image: url(../../assets/brewing/drinking.jpg);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.section4 .content {
  width: 80%;
  background-color: rgba(248, 200, 58, 0.3);
  padding: 30px;
}
.section4 h1 {
  font-size: 45px;
  color: rgb(123, 44, 2);
  text-shadow: 1px 1px black;
}
.section4 p {
  color: black;
  font-size: 22px;
  font-weight: bold;
}

@media screen and (max-width: 1024px) {
  .introduce {
    display: flex;
    justify-content: center;
  }
  .introduce p {
    font-size: 25px;
  }
  .footprint {
    width: 50%;
  }
  .one {
    top: 33%;
    left: -30%;
  }
  .two {
    top: 7%;
    left: -15%;
  }
  .three {
    top: 7%;
    right: -15%;
  }
  .four {
    top: 33%;
    right: -30%;
  }
  .section1 {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  }

  .section1-top h1,
  .section1-bottom h1 {
    font-size: 30px;
  }

  .section1-top p,
  .section1-bottom p {
    font-size: 18px;
  }
  .material .content {
    order: 1;
  }
  .material .pic {
    order: 2;
  }
  .section3 h1,
  .section4 h1 {
    font-size: 30px;
  }
  .section3 p,
  .section4 p {
    font-size: 18px;
  }
}
@media screen and (max-width: 767px) {
  .poster {
    font-size: 100px;
  }
  .footprint {
    display: none;
  }
  .introduce {
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .introduce p {
    position: static;
  }
  .one::after,
  .two::after,
  .three::after,
  .four::after {
    display: none;
  }
  .cover {
    display: none;
  }
  img {
    width: 60%;
  }
  .section1 {
    align-items: center;
  }
  .section1-top,
  .section1-bottom {
    position: static;
    margin-top: 30px;
    width: 80%;
  }
  .man {
    display: flex;
    justify-content: center;
  }
  .section3 {
    height: 100%;
    flex-direction: column;
  }
  .section3 .left,
  .section3 .right {
    width: 100%;
  }
  .section3 .left {
    height: 50vh;
  }
 
}
@media screen and (max-width: 414px) {
  .poster {
    font-size: 70px;
  }
  .section1-top,
  .section1-bottom {
    width: 100%;
  }
  .section1 {
    padding: 10px;
  }
  .section1 h1 {
    font-size: 25px;
  }
  .section2 h1 {
    font-size: 35px;
  }

  .section3 h1 {
    font-size: 25px;
  }
  .section4 .content {
    padding: 15px;
  }
  .section4 h1 {
    font-size: 25px;
  }
}
</style>