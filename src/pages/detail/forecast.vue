<template>
  <div class="sales-board">
      <div class="sales-board-intro">
        <h2>百年孤独</h2>
        <p> 马尔克斯：百年孤独（50周年纪念版）50周年纪念版！全新典藏内封，限量赠50周年精美魔幻明信片1套。<br>
          马尔克斯代表作，全球惟一正式授权中文版，未作任何删节！6年发行量超600万册！</p>
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
            <p>单价：27.50元</p><br>
              <div class="sales-board-line-left">
                  总价: {{ buyNum*27.5 }} 元
              </div>
              
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">&nbsp;</div>
              <div class="sales-board-line-right">
                  <div class="button" @click="showPayDialog">
                    立即购买
                  </div>
              </div>
          </div>
      </div>
      <div class="sales-board-des">
        <h2>作者简介</h2>
          <p>加西亚•马尔克斯（Gabriel García Márquez）1927年出生于哥伦比亚马格达莱纳海滨小镇阿拉卡塔卡。童年与外祖父母一起生活。1936年随父母迁居苏克雷。1947年考入波哥大国立大学。1948年因内战辍学，进入报界。五十年代开始发表文学作品。六十年代初移居墨西哥。1967年出版《百年孤独》。1982年获诺贝尔文学奖。</p>
        <h3>内容简介</h3>
          <p>《百年孤独》是魔幻现实主义文学的代表作，描写了布恩迪亚家族七代人的传奇故事，以及加勒比海沿岸小镇马孔多的百年兴衰，反映了拉丁美洲一个世纪以来风云变幻的历史。作品融入神话传说、民间故事、宗教典故等神秘因素，巧妙地糅合了现实与虚幻，展现出一个瑰丽的想象世界，成为20世纪最重要的经典文学巨著之一。1982年加西亚•马尔克斯获得诺贝尔文学奖，奠定世界级文学大师的地位，很大程度上乃是凭借《百年孤独》的巨大影响。</p>
        <h3>原文摘录</h3>
        <ul>
          <li>失眠症最可怕之处不在于让人毫无倦意不能入睡，而是会不可逆转地恶化到更严重的境地：遗忘。也就是说，患者慢慢习惯了无眠的状态，就开始淡忘童年的记忆，继之以事物的名称和概念，最后是各人的身份，以至失去自我，沦为没有过往的白痴。</li>
          <li>人们一派懈怠，而遗忘却日渐贪婪，无情地吞噬一点一滴的记忆。</li>
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
