<template>
  <div class="sales-board">
      <div class="sales-board-intro">
        <h2>白夜行</h2>
        <p>东野圭吾：白夜行（易烊千玺、孟非推荐，东野圭吾作品无冕之王）<br>
        我一直走在白夜里，从来就没有太阳，所以不怕失去。中文版发行量超600万册。</p>
      </div>
      <div class="sales-board-form">
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  购买数量：
              </div>
              <div class="sales-board-line-right">
                <v-counter @on-change="onParamChange('buyNum', $event)"></v-counter>
              </div>
          </div>

          <div class="sales-board-line">
              <p>单价：29.80元</p><br>
              <div class="sales-board-line-left">
                  总价: {{ buyNum*29.8 }} 元
              </div>
              
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">&nbsp;</div>
              <div class="sales-board-line-right">
                  <div class="button">
                    立即购买
                  </div>
              </div>
          </div>
      </div>
      <div class="sales-board-des">
        <h2>作者简介</h2>
        <p>东野圭吾 日本著名作家。1985年，凭《放学后》获第31届江户川乱步奖，开始专职写作；1999年，《秘密》获第52届日本推理作家协会奖；此后《白夜行》、《单恋》、《信》、《幻夜》先后入围直木奖。
        2005年出版的《嫌疑人X的献身》史无前例地将第134届直木奖、第6届本格推理小说大奖，以及年度三大推理小说排行榜第1名一并斩获；2008年，《流星之绊》获第43届新风奖。2009年出版的《新参者》获两大推理小说排行榜年度第1名；2012年，《浪矢杂货店的奇迹》获第7届中央公论文艺奖。</p>
        <h3>内容简介</h3>
        <p>东野圭吾万千书迷心中的无冕之王,周刊文春推理小说年度BEST10第1名。本格推理小说年度BEST10第2名。《白夜行》是东野圭吾迄今口碑最好的长篇杰作，具备经典名著的一切要素：一宗离奇命案牵出跨度近20年步步惊心的故事：悲凉的爱情、吊诡的命运、令人发指的犯罪、复杂人性的对决与救赎……</p>
        <h3>原文摘录</h3>
        <ul>
          <li>我的天空没有太阳，总是黑夜，但并不暗，因为有东西代替了太阳。虽然没有太阳那么明亮，但对我来说已经足够。凭借这份光，我便能把黑夜当成白天。我从来就没有太阳，所以不怕失去。</li>
          <li>人生也一样，有白天和黑夜，只是不会像真正的太阳那样，有定时的日出和日落。有些人一辈子都活在太阳的照耀下，也有些人不得不一直活在漆黑的深夜里。人害怕的，就是本来一直存在的太阳落下不再升起，也就是非常害怕原本照在身上的光芒消失。</li>
        </ul>
      </div>
  </div>
</template>

<script>

import VCounter from '../../components/base/counter'
import VMulChooser from '../../components/base/multiplyChooser'
export default {
  components: {
    
    VCounter,
    VMulChooser
  },
  data () {
    return {
      buyNum: 1,
    }
  },
  methods: {
    onParamChange (attr, val) {
      this[attr] = val
      this.getPrice()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
