<template>
  <div class="container">
    <div class="poster">About</div>
    <div class="introduce1">
      <div class="left" data-aos="zoom-in" data-aos-duration="1500">
        <img src="../../assets/about/beer2.png" />
      </div>
      <div class="right">
        <h1>德國啤酒的起源及經典</h1>
        <p>德國啤酒是世界上最古老、最受尊敬的啤酒之一，起源可追溯至中世紀。</p>
        <p>
          德國啤酒以其嚴謹的釀造工藝和純淨的成分而聞名，
          如德國大麥、啤酒花和水。
        </p>
        <p>
          其獨特的釀造方式，如德式利澤宾法和勃拉特法，
          賦予了德國啤酒獨特的口感和風味。
        </p>
        <p>
          其中包括諸如比爾森、德國小麥啤酒和黑啤酒等經典品種，
          不僅在德國國內備受推崇，在全球範圍內也享有盛譽。
        </p>
      </div>
    </div>
    <div class="introduce2">
      <div class="right" data-aos="zoom-in" data-aos-duration="1500">
        <img src="../../assets/about/beer.png" />
      </div>
      <div class="left">
        <h1>完美呈現 德國啤酒工藝</h1>
        <p>野狼啤酒，源自德國傳統釀酒工藝，以豐富的口感和優質的原料而聞名。</p>
        <p>
          採用嚴格的製作工藝，每一口都散發著濃郁的傳統風味，
          清爽而順滑，深受啤酒愛好者的喜愛。
        </p>
        <p>
          無論是輕盈的小麥啤酒還是濃郁的黑啤酒，野狼啤酒都展現出了其獨特的魅力。
        </p>
        <p>
          注重傳統與創新的結合，野狼啤酒不僅代表了德國釀酒工藝的精髓，
          更融入了現代元素，成為品質與個性並存的啤酒品牌。
        </p>
      </div>
    </div>
    <!--時間線區-->
    <div class="timeline">
      <el-timeline>
        <el-timeline-item
          timestamp="2020.11.11"
          placement="top"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <div class="timeline-container">
            <h1>WolfBar成立</h1>
            <p>
              乾杯慶新店，共享美好時光！<br />
              WolfBar於11月正式開幕
            </p>
            <hr />
          </div>
        </el-timeline-item>
        <el-timeline-item
          timestamp="2021.5.7"
          placement="top"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <div>
            <h1>不負眾望</h1>
            <p>
              冠軍啤酒，品味勝利滋味！<br />
              WolfBar奪得國際啤酒大賽冠軍
            </p>
            <hr />
          </div>
        </el-timeline-item>
        <el-timeline-item
          timestamp="2022.7.22"
          placement="top"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <div>
            <h1>不畏疫情</h1>
            <p>
              抗疫共飲，酒吧不停歇！<br />
              與各大外送平台合作送去你家
            </p>
            <hr />
          </div>
        </el-timeline-item>
        <el-timeline-item
          timestamp="2023.8.20"
          placement="top"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <div>
            <h1>分店成立</h1>
            <p>
              喜迎新店，共品美酒佳釀！<br />
              分店LittleWolf正式於8月開幕
            </p>
            <hr />
          </div>
        </el-timeline-item>
        <el-timeline-item
          timestamp=""
          placement="top"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.poster {
  background-image: url(../../assets/about/poster.jpg);
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
img {
  width: 100%;
}
.introduce1,
.introduce2 {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  line-height: 1.9;
  padding: 0 50px;
  box-sizing: border-box;
}
.introduce1 {
  background-color: rgba(69, 53, 38, 0.5);
}
.introduce1 h1,
.introduce2 h1 {
  color: rgb(0, 0, 110);
}
.introduce1 p,
.introduce2 p {
  font-size: 18px;
  font-weight: bold;
}
.introduce2 {
  background-color: rgba(252, 212, 94, 0.3);
}
hr {
  border-style: dashed;
}
.timeline {
  background: radial-gradient(
    circle,
    rgba(32, 40, 82, 0.5),
    rgba(22, 31, 75, 0.9)
  );
  display: flex;
  justify-content: center;
}
.timeline h1 {
  font-size: 30px;
  font-weight: bolder;
  color: rgb(192, 147, 90);
  text-shadow: 1px 1px black;
}
.timeline p {
  font-size: 25px;
  font-weight: bold;
  color: black;
}

::v-deep .el-timeline {
  background-color: rgba(0, 0, 0, 0.2);
  padding: 20px;
}
::v-deep .el-timeline-item__timestamp {
  font-size: 25px;
  color: black;
  font-weight: bold;
}
::v-deep .el-timeline-item__node {
  background-color: rgb(192, 147, 90);
  width: 20px;
  height: 20px;
  left: -5px;
}
::v-deep .el-timeline-item__tail {
  border: 2px solid rgb(192, 147, 90);
}
@media screen and (max-width: 1024px) {
  .introduce1,
  .introduce2 {
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
  img {
    width: 80%;
  }
}
@media screen and (max-width: 767px) {
  .poster {
    font-size: 100px;
  }
  .introduce1 h1,
  .introduce2 h1 {
    font-size: 25px;
  }
  .timeline h1 {
    font-size: 25px;
  }
  .timeline p {
    font-size: 20px;
  }
  ::v-deep .el-timeline-item__timestamp {
    font-size: 20px;
  }
}
@media screen and (max-width: 414px) {
  .introduce1,
  .introduce2 {
    padding: 0 20px;
  }
  .introduce1 h1,
  .introduce2 h1 {
    font-size: 20px;
  }
  .timeline h1 {
    font-size: 20px;
  }
  .timeline p {
    font-size: 18px;
  }
  ::v-deep .el-timeline-item__timestamp {
    font-size: 18px;
  }
  ::v-deep .el-timeline {
    padding: 20px 5px;
  }
}
</style>