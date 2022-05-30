<template>
  <div class="home">
    <Header />
    <ComputerHeader />
    <main>
      <div class="title">
        <h1 class="my-3">ABOUT US</h1>
        <h5 class="py-2">品牌故事</h5>
      </div>
      <div class="story-beginning">
        <p>
          覓棗晨<br />
          覓/蜜 &nbsp; 飽水灌溉，清脆<span>甜蜜</span><br />
          棗/找 &nbsp; <span>棗子</span>分級，品質第一<br />
          晨/陳 &nbsp; <span>清晨</span>採收，注入朝氣<br />
        </p>
      </div>
      <div class="contain">
        <div class="story-left-text">
          <p>
            生根於高雄阿蓮的在地小農陳爺爺是覓棗晨的現任果園負責人。<br />
            往往在天還沒亮的時候，陳爺爺就起身前往果園準備一日的農作。<br />
          </p>
          <p>
            傳承了祖孫三代對蜜棗的執著與熱情，陳爺爺秉持著初心，選用土地友善的耕作方式，在經驗與創新的栽種下，<br />
            不僅減少對環境的影響，更培育出天然清脆又香甜的蜜棗。
          </p>
        </div>
        <div class="story-image my-4">
          <img
            class="picture"
            src="../assets/image/LINE_ALBUM_覓棗晨_220414_1.jpg"
            alt=""
          />
        </div>
        <div class="story-carousel">
          <div
            id="carouselExampleInterval"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active" data-interval="2000">
                <img
                  src="../assets/image/LINE_ALBUM_覓棗晨_220414_4.jpg"
                  class="d-block  picture-carousel"
                  alt="..."
                />
              </div>
              <div class="carousel-item" data-interval="2000">
                <img
                  src="../assets/image/LINE_ALBUM_覓棗晨_220414_0.jpg"
                  class="d-block picture-carousel"
                  alt="..."
                />
              </div>
              <div class="carousel-item" data-interval="2000">
                <img
                  src="../assets/image/LINE_ALBUM_覓棗晨_220414_7.jpg"
                  class="d-block  picture-carousel"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
        <div class="story-right-text">
          <p>
            在這超過三十年的棗園裡，承載了陳家對栽種蜜棗的無數寶貴回憶。<br />
            施肥、灌溉、整枝、授粉、疏果、採收，每個環節毫不馬虎，一顆顆收成的棗兒都是陳爺爺悉心照顧下的寶貝。
          </p>
          <p>
            顧客大口咬下後滿足的表情是對覓棗晨最大的肯定，也是陳家一路走來始終如一的動力。<br />
            覓棗晨將持續散播這份幸福甘甜，讓更多人品嚐到這份簡單的美好。
          </p>
        </div>
      </div>
      <div class="story-conclusion">
        <h2>想欲呷棗仔，就來找陳家！</h2>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/header.vue";
import ComputerHeader from "../components/computerHeader.vue";
import Footer from "../components/footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    ComputerHeader,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
main {
  color: $main-color;
  font-size: 18px;
  padding-top: 70px;
  .title {
    text-align: center;
    h5 {
      letter-spacing: 0.2rem;
      width: 8rem;
      margin: 0 auto;
      border-top: 1px solid $main-color;
      border-bottom: 1px solid $main-color;
    }
  }
  .story-beginning {
    text-align: center;
    margin: 1rem;
    line-height: 4rem;
    p {
      span {
        color: #b51636;
        font-weight: bold;
      }
    }
  }
  .contain {
    margin: 0 auto;
    text-align: center;
    line-height: 4rem;
    width: 80%;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto auto;
    grid-template-areas:
      "left left"
      "image image"
      "carousel carousel"
      "right right";
    .story-left-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      grid-area: left;
    }
    .story-right-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 2rem;
      grid-area: right;
    }
    .story-image {
      grid-area: image;
      height: 500px;
      .picture {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 2%;
        -webkit-box-shadow: 0px 2px 10px 0x rgba(0, 0, 0, 0.08);
        -moz-box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.08);
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.08);
      }
    }
    .story-carousel {
      grid-area: carousel;
      .carousel{
        .carousel-item{
          width: 100%;
          height: 500px;
          .picture-carousel {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 2%;
          }
        }

      }
    }
  }
  .story-conclusion {
    text-align: center;
    font-weight: 900;
    padding-bottom: 2.5rem;
  }
}

  @media screen and (min-width: 700px) {
    main{
      padding-top: 0;
      .story-beginning {
        line-height: 3.5rem;
      }
      .contain {
        line-height: 3.5rem;
        width: 80%;
        height: 100%;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-areas:
          "left image"
          "left image"
          "carousel right"
          "carousel right";
        gap: 0 20px;
        .story-carousel {
          height: 40rem;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 2%;
        }
        .story-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .story-conclusion {
        padding-top: 2rem;
        padding-bottom: 2rem;
      }
    }
  }
</style>
