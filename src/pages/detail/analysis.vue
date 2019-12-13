<template>
  <div class="sales-board">
      <div class="sales-board-intro">
        <h2>平凡的世界</h2>
        <p>平凡的世界：全三册（故事里的中国，董卿、朱一龙推荐，八年级下册自主阅读推荐）
          新晋男神朱一龙推荐阅读。茅盾文学奖皇冠上的明珠，激励亿万读者的不朽经典。深受老师和学生喜爱的新课标必读书 一书一册有乾坤！更多文学小说5折抢>><br>
          作者:路遥 著，新经典 出品出版社:北京十月文艺出版社出版时间:2017年06月 </p>
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
            <p>单价：54.00元</p><br>
              <div class="sales-board-line-left">
                  总价： {{ buyNum*54 }} 元
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
        <p>路遥（1949-1992）原名王卫国，1949年12月3日生于陕西榆林市清涧县一个贫困的农民家庭，7岁时因为家里困难被过继给延川县农村的伯父。曾在延川县立中学学习，1969年回乡务农。这段时间里他做过许多临时性的工作，并在农村一小学中教过一年书。1973年进入延安大学中文系学习。</p>
        <h3>内容简介</h3>
        <p>这是一部现实主义小说，也是小说化的家族史。作家高度浓缩了中国西北农村的历史变迁过程，作品达到了思想性与艺术性的高度统一，特别是主人公面对困境艰苦奋斗的精神，对今天的大学生朋友仍有启迪。这是一部全景式地表现中国当代城乡社会生活的长篇小说，本书共三部。作者在近十年间广阔背景 上，通过复杂的矛盾纠葛，刻画了社会各阶层众多普通人的形象。劳动与爱情，挫折与追求，痛苦与欢乐，日常生活与巨大社会冲突，纷繁地交织在一起，深刻地展示了普通人在大时代历史进程中所走过的艰难曲折的道路。</p>
        <h3>原文摘录</h3>
        <ul>
          <li>小时后，我们常常把‘亲戚’这两个字看得多么美好和重要。一旦长大成人，开始独立生活，我们便很快知道，亲戚关系常常是庸俗的；互相设法沾光，沾不上光就翻白眼；甚至你生活中最大的困难也常常是亲戚们造成的；生活同样也会告诉你，亲戚往往不如朋友对你真诚。见鬼去吧，亲戚！</li>
          <li>以前，每当有生活的暴风雨袭来的时候，他一颗年幼的心总要战栗，然后便迫使自己硬着头皮经受捶打。一次又一次，使他的心脏渐渐地强有力起来，并且在一次次的磨难中也尝到了生活的另一番滋味。他觉得自己正一步步迈向成年人的行列。他慢慢懂得，人活着，就要随时准备经受磨难。他已经看过一些书，知道不论是普通人还是了不起的人，都要在自己的一生中经受许多的磨难……</li>
        </ul>
      </div>
      <my-dialog :is-show="isShowPayDialog" @on-close="hidePayDialog">
        <table class="buy-dialog-table">
          <tr>
            <th>购买数量</th>
            <th>总价</th>
          </tr>
          <tr>
            <td>{{ buyNum }}</td>
            <td>{{ price }}</td>
          </tr>
        </table>
        <h3 class="buy-dialog-title">请选择银行</h3>
        <bank-chooser @on-change="onChangeBanks"></bank-chooser>
        <div class="button buy-dialog-btn" @click="confirmBuy">
          确认购买
        </div>
      </my-dialog>
      <my-dialog :is-show="isShowErrDialog" @on-close="hideErrDialog">
        支付失败！
      </my-dialog>
      <check-order :is-show-check-dialog="isShowCheckOrder" :order-id="orderId" @on-close-check-dialog="hideCheckOrder"></check-order>
  </div>
</template>

<script>
import VSelection from '../../components/base/selection'
import VCounter from '../../components/base/counter'
import VChooser from '../../components/base/chooser'
import VMulChooser from '../../components/base/multiplyChooser'
import Dialog from '../../components/base/dialog'
import BankChooser from '../../components/bankChooser'
import CheckOrder from '../../components/checkOrder'
import _ from 'lodash'
import axios from 'axios'
export default {
  components: {
    VSelection,
    VCounter,
    VChooser,
    VMulChooser,
    MyDialog: Dialog,
    BankChooser,
    CheckOrder
  },
  data () {
    return {
      buyNum: 0,
      buyType: {},
      versions: [],
      period: {},
      price: 0,
      
      isShowPayDialog: false,
      bankId: null,
      orderId: null,
      isShowCheckOrder: false,
      isShowErrDialog: false
    }
  },
  methods: {
    onParamChange (attr, val) {
      this[attr] = val
      this.getPrice()
    },
    getPrice () {
      let buyVersionsArray = _.map(this.versions, (item) => {
        return item.value
      })
      let reqParams = {
        buyNumber: this.buyNum,
        buyType: this.buyType.value,
        period: this.period.value,
        version: buyVersionsArray.join(',')
      }
      axios.post('/api/getPrice', reqParams)
      .then((res) => {
        this.price = res.data.number
      })
    },
    showPayDialog () {
      this.isShowPayDialog = true
    },
    hidePayDialog () {
      this.isShowPayDialog = false
    },
    hideErrDialog () {
      this.isShowErrDialog = false
    },
    hideCheckOrder () {
      this.isShowCheckOrder = false
    },
    onChangeBanks (bankObj) {
      this.bankId = bankObj.id
    },
    confirmBuy () {
      let buyVersionsArray = _.map(this.versions, (item) => {
        return item.value
      })
      let reqParams = {
        buyNumber: this.buyNum,
        buyType: this.buyType.value,
        period: this.period.value,
        version: buyVersionsArray.join(','),
        bankId: this.bankId
      }
      axios.post('/api/createOrder', reqParams)
      .then((res) => {
        this.orderId = res.data.orderId
        this.isShowCheckOrder = true
        this.isShowPayDialog = false
      })
      .catch((err) => {
        this.isShowBuyDialog = false
        this.isShowErrDialog = true
      })
    }
  },
  mounted () {
    this.buyNum = 1
    this.buyType = this.buyTypes[0]
    this.versions = [this.versionList[0]]
    this.period = this.periodList[0]
    this.getPrice()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buy-dialog-title {
  font-size: 16px;
  font-weight: bold;
}
.buy-dialog-btn {
  margin-top: 20px;
}
.buy-dialog-table {
  width: 100%;
  margin-bottom: 20px;
}
.buy-dialog-table td,
.buy-dialog-table th{
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 5px 0;
}
.buy-dialog-table th {
  background: #4fc08d;
  color: #fff;
  border: 1px solid #4fc08d;
}
</style>
