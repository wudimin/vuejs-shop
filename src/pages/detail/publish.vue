<template>
  <div class="sales-board">
      <div class="sales-board-intro">
        <h2>失踪的孩子</h2>
        <p>那不勒斯四部曲之四：失踪的孩子<br>“我的整个生命，只是一场为了提升社会地位的低俗斗争。”</p>
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
              <p>单价：31.00元</p><br>
              <div class="sales-board-line-left">
                  总价: {{ buyNum*31 }} 元
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
          <p>埃莱娜·费兰特，目前意大利*受欢迎也*神秘的作家。埃莱娜·费兰特是一个笔名，其真实身份至今是谜。埃莱娜·费兰特1992年发表第*部长篇小说《讨厌的爱》，1995年被意大利导演马里奥·马尔托内改编为同名电影</p>
        <h3>内容简介</h3>
          <p>《失踪的孩子》是“那不勒斯四部曲”的第四部，小 说聚焦了莉拉和埃莱娜（“我”）的壮年和晚年，为她们持续了五十多年的友谊划上了一个令人心碎的句号。
              “我”为了爱情和写作，离开丈夫带着两个女儿回到了那不勒斯，不可避免地与莉拉，还有我曾想要逃离的城区再度变得亲密。
              “我”和莉拉甚至在同一年怀孕、生子，并经历了恐怖残暴的那不勒斯大地震，一切都分崩离析，一切又将被重建。<br>
              “我”在不自觉中卷入莉拉秘密的企图——她希望利用我的名声和写作技巧来对抗城区陈腐而猖獗的恶势力。但在经历了生命*恐怖的打击之后，莉拉选择以一种怪异夸张的方式在城区彻底将自己流放。</p>
        <h3>原文摘录</h3>
        <ul>
          <li>那些抑郁的人不会写书，那些幸福的人、旅行的人、恋爱的人才会写书，他们说呀说，说呀说，他们确信自己说的话都会派上用场。</li>
          <li>一切都在变，愿望和想象比血液流得还快！</li>
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
<style>

</style>
