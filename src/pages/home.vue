<template lang="html">
  <div class="container">
    <home-header></home-header>
    <div class="content">
      <ul class="cont-ul">
        <list v-for="item in items" :price="item.price" :title="item.title" :img="item.img"></list>
      </ul>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import HomeHeader from '../components/HomeHeader'
import CommonFooter from '../components/commonFooter'
import List from '../components/list'
export default {
  data () {
      return {
          items: []
      }
  },
  components: {
    HomeHeader,
    CommonFooter,
    List
  },
  created () {
      this.$http.get('/api/goods').then((data) => {
      this.items = data.body.data;
      })
  }
}
</script>

<style lang="css" scoped>
  .container {
    width: 100%;
    margin: 0 auto;
  }
  .content {
    margin-bottom: 1.8rem;
  }
  .cont-ul {
    padding-top: 0.5rem;
    background-color: #ccc;
  }
  .cont-ul::after {
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
</style>
