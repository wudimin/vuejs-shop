<template>
    <div class="index-wrap">
      <div class="index-left">
        <div class="index-left-block">
          <h2>畅销图书榜</h2>
          <template>
            <h3>小说</h3>
            <ul>
              <li><a href="https://book.douban.com/subject/4913064/" target="_blank">活着</a></li>
              <li><a href="https://book.douban.com/subject/1084336/" target="_blank">小王子</a></li>
              <li><a href="https://book.douban.com/subject/4011670/" target="_blank">人间失格</a></li>
              <li><a href="https://book.douban.com/subject/1770782/" target="_blank">追风筝的人</a></li>
            </ul>
            <hr/>
  
            <h3>漫画</h3>
            <ul>
              <li><a href="https://book.douban.com/subject/26602392/" target="_blank">你今天真好看</a></li>
              <li><a href="https://book.douban.com/subject/30473909/" target="_blank">OPUS 作品</a></li>
              <li><a href="https://book.douban.com/subject/1066462/" target="_blank">向左走·向右走</a></li>
              <li><a href="https://book.douban.com/subject/1002898/" target="_blank">父与子全集</a></li>
            </ul>
          </template>
        </div>
        <div class="index-left-block lastest-news">
          <h2>最新消息</h2>
          <ul>
            <li>12.12年终狂欢</li>
            <li>经济管理，5折封顶</li>
            <li>悦小说品文学，5折封顶</li>
            <li>文学艺术，人生传记，5折封顶</li>
          </ul>
        </div>
      </div>

      <div class="index-right">
        <carousel :navigationEnabled="true" :perPage="1" :autoplay="true">
          <slide v-for="slide in slides" :key="slide.ky">
            <router-link :to="{name: slide.toKey}">
              <img :src="slide.src">
            </router-link>
          </slide>
        </carousel>

        <div class="index-board-list">
          <div
          class="index-board-item"
          v-for="(item, index) in boardList"
          :class="[{'line-last' : index % 2 !== 0}, 'index-board-' + item.title]">
            <div class="index-board-item-inner" >
              <h2>{{ item.title }}</h2>
              <p>{{ item.description }}</p>
              <div class="index-board-button">
                <router-link class="button" :to="{name: item.toKey}">立即购买</router-link>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { Carousel, Slide } from 'vue-carousel'
  import axios from 'axios'
  export default {
    components: {
      Carousel,
      Slide
    },
    mounted () {
      axios.get('api/getNewsList')
      .then((res) => {
        console.log(res)
        this.newsList = res.data.list
      })
      .catch((error) => {
        console.log(error)
      })
      axios.get('api/getBoardList')
      .then((res) => {
        console.log(res)
        this.boardList = res.data
      })
      .catch((error) => {
        console.log(error)
      })
      axios.get('api/getProductList')
      .then((res) => {
        console.log(res)
        this.productList = res.data
      })
      .catch((error) => {
        console.log(error)
      })
      axios.get('api/getSlides')
      .then((res) => {
        console.log(res)
        this.slides = res.data
      })
      .catch((error) => {
        console.log(error)
      })
    },
    data () {
      return {
        slides: null,
        boardList: null,
        newsList: [],
        productList: null
      }
    }
  }
  </script>
  
  <style>
      li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #000000;
  }
  a:hover {
    text-decoration: none;
    color: #0000FF;
        }
  .index-wrap {
    width: 1000px;
    margin: 0 auto;
    overflow: hidden;
  }
  .index-left {
    float: left;
    width: 30%;
    text-align: left;
  }
  .index-right {
    float: left;
    width: 70%;
  }
  .index-left-block {
    margin: 0 15px 15px 15px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    border-radius: 10px;
  }
  .index-left-block .hr {
    margin-bottom: 20px;
  }
  .index-left-block h2 {
    background: #4fc08d;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
  }
  .index-left-block h3 {
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
  }
  .index-left-block ul {
    padding: 10px 15px;
  }
  .index-left-block li {
    padding: 5px;
  }
  .index-board-list {
    overflow: hidden;
  }
  .index-board-item {
    float: left;
    width: 43%;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 3%;
    margin-right: 2%;
    margin-bottom: 20px;
    border-radius: 0 0 10px 10px;
  }
  .index-board-item-inner {
    min-height: 125px;
    padding-left: 120px;
    line-height: 1.6;
  }
  .index-board-平凡的世界 .index-board-item-inner{
    background: url(../assets/images/3.jpg) no-repeat;
  }
  .index-board-百年孤独 .index-board-item-inner{
    background: url(../assets/images/2.jpg) no-repeat;
  }
  .index-board-白夜行 .index-board-item-inner{
    background: url(../assets/images/1.jpg) no-repeat;
  }
  .index-board-失踪的孩子 .index-board-item-inner{
    background: url(../assets/images/4.jpg) no-repeat;
  }
  .index-board-item h2 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
  }
  .line-last {
    margin-right: 0;
  }
  .index-board-button {
    margin-top: 20px;
  }
  .lastest-news {
    min-height: 512px;
  }
  .hot-tag {
    background: #c04fb1;
    color: #fff;
    font-size: 12px;
    padding: 0 5px;
  }
  .new-item {
    display: inline-block;
    width: 230px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .VueCarousel {
    margin-bottom: 10px;
  }
  .VueCarousel-slide {
    position: relative;
    color: #fff;
    font-family: Arial;
    font-size: 24px;
    text-align: center;
    min-height: 100px;
    width: 100%;
  }
  .VueCarousel-slide img {
    width: 100%;
  }
  .VueCarousel-navigation-prev {
    left: 30px !important;
  }
  .VueCarousel-navigation-next {
    right: 30px !important;
  }
  .VueCarousel-pagination {
    position: absolute;
    bottom: 10px;
    z-index: 9;
  }
  </style>
  