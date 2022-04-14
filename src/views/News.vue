<template>
  <div class="news">
    <Header />
    <ComputerHeader />
    <div class="youtube-video">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/1CqVgJDXYk4" frameborder="0" allowfullscreen></iframe>
    </div>
    <!-- 圖庫 -->
      <div id="gallerywrapper">
      <div id="gallery">
      <div id="pic1">
      <img src="../assets/image/LINE_ALBUM_覓棗晨_220414_0.jpg" height="350" width="500" alt="Image 1">
      <a class="previous" href="#pic5">&lt;</a>
      <a class="next" href="#pic2">&gt;</a>
      <h3>蜜棗 1</h3>
      <p>蜜棗</p>
      </div>
      <div id="pic2">
      <img src="../assets/image/LINE_ALBUM_覓棗晨_220414_2.jpg" height="350" width="500" alt="Image 2">
      <a class="previous" href="#pic1">&lt;</a>
      <a class="next" href="#pic3">&gt;</a>
      <h3>蜜棗 2</h3>
      <p>蜜棗 2.</p>
      </div>
      <div id="pic3">
      <img src="../assets/image/LINE_ALBUM_覓棗晨_220414_4.jpg" height="350" width="500" alt="Image 3">
      <a class="previous" href="#pic2">&lt;</a>
      <a class="next" href="#pic4">&gt;</a>
      <h3>蜜棗 3</h3>
      <p>蜜棗 3.</p>
      </div>
      <div id="pic4">
      <img src="../assets/image/LINE_ALBUM_覓棗晨_220414_5.jpg" height="350" width="500" alt="Image 4">
      <a class="previous" href="#pic3">&lt;</a>
      <a class="next" href="#pic5">&gt;</a>
      <h3>蜜棗 4</h3>
      <p>蜜棗 4.</p>
      </div>
      <div id="pic5">
      <img src="../assets/image/LINE_ALBUM_覓棗晨_220414_7.jpg" height="350" width="500" alt="Image 5">
      <a class="previous" href="#pic4">&lt;</a>
      <a class="next" href="#pic1">&gt;</a>
      <h3>蜜棗 5</h3>
      <p>蜜棗 5.</p>
      </div>
      </div>
      </div>
    <!-- 圖庫 -->
    <Footer />
  </div>
</template>

<script>
import Header from '../components/header.vue'
import ComputerHeader from "../components/computerHeader.vue";
import Footer from '../components/footer.vue'

export default {
  components: {
    Header,
    ComputerHeader,
    Footer,
  },
}

</script>

<style lang="scss" scoped>
  .youtube-video{
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
    width: 80%;
    margin: 40px auto;
     iframe, o object, embed {
      position: absolute;
      top: 0;left: 0;
      width: 100%;
      height: 100%;
    }
  }


 #gallerywrapper {
     width:640px;
     height:450px;
     margin:0 auto;
     position:relative;
     font-family:verdana, arial, sans-serif;
 } 

 #gallerywrapper #gallery {
     position:absolute;
     left:0;
     top:0;
     height:450px;
     width:640px;
     overflow:hidden;
     text-align:center;
 } 

 #gallerywrapper #gallery div {
     width:640px; height:900px; 
     padding-top:10px; 
     position:relative;
 } 

 #gallerywrapper #gallery div img {
     clear:both; 
     display:block; 
     margin:0 auto; 
     border:0;
 } 

 #gallerywrapper #gallery div h3 {
     padding:10px 0 0 0; 
     margin:0; 
     font-size:18px;
 } 

 #gallerywrapper #gallery div p {
     padding:5px 0; 
     margin:0; 
     font-size:12px; 
     line-height:18px;
 } 

 #gallery .previous{ 
     display:inline;
     float:left;
     margin-left:80px;
     text-decoration:none;
 } 

 #gallery .next{ 
     display:inline;
     float:right;
     margin-right:80px;
     text-decoration:none;
 }
</style>
