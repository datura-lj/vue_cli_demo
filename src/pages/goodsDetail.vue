<template lang="html">
  <div class="detail">
      <detail-header></detail-header>
      <img src="../assets/image/54205424_big.jpg" alt="" />
      <p class="site-title">树懒果园 泰国进口大金煌芒果</p>
      <router-link to="/detail/msg">
        <p class="site-cont">5斤装，约2-4个果，大！！！甜！！！</p>
      </router-link>
      <div class="show">
        <router-view></router-view>
      </div>
      <common-footer></common-footer>
  </div>
</template>

<script>
import DetailHeader from '../components/DetailHeader'
import CommonFooter from '../components/commonFooter'

export default {
  data () {
    return {

    }
  },
  components: {
    DetailHeader,
    CommonFooter
  }
}
</script>

<style lang="css">
  .detail {
    padding: 0.25rem;
    font-size: 12px;
  }
  .detail > img {
    display: block;
    width: 80%;
    margin:  0 auto 0.5rem;
  }
  .detail > p {
    font-size: 1.1rem;
    line-height: 1.5rem;
    text-align: left;
    padding-bottom: 0.5rem;
  }
  .detail > p.site-title {
    color: #ff8000;
  }
  p.site-cont {
    color: #666;
    font-size: 0.9rem;
  }
  div.show{
    color: #f00;
    font-size: 0.9rem;
  }
</style>
