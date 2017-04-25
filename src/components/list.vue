<template lang="html">
  <li class="goods-list">
    <router-link to="/detail"  class="goods-list-link">
      <div class="goods-list-pic">
        <img :src="img" alt="">
      </div>
      <div class="goods-list-desc">
          <p class="goods-list-name">{{ title }}555555</p>
          <p class="goods-list-price">{{ price|dTofixed|dCurrency }}</p>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  props: ['price', 'title', 'img']
}
</script>

<style lang="css" scoped>
  .goods-list {
    width: 50%;
    float: left;
    box-sizing: border-box;
    margin-bottom: 0.2rem;
  }
  .goods-list:nth-of-type(odd) {
    border-right: 0.15rem solid #ccc;
  }
  .goods-list:nth-of-type(even) {
    border-left: 0.15rem solid #ccc;
  }
  .goods-list-link {
    display: block;
    padding: 0.5rem 0;
    margin: 0 0.3rem;
    text-align: center;
    background-color: #fff;
  }
  .goods-list:nth-of-type(even) .goods-list-link{
    margin-left: 0;
  }
  .goods-list:nth-of-type(odd) .goods-list-link{
    margin-right: 0;
  }
  .goods-list-pic {
    padding: 0.5rem;
  }
  .goods-list-pic > img {
    width: auto;
    height: 4rem;
  }
  .goods-list-desc {
    padding: 0 0.5rem;
  }
  .goods-list-desc:after {
    display: block;
    content: '';
    clear: both;
  }
  .goods-list-name,.goods-list-price {
    width: 50%;
    height: 1.2rem;
    line-height: 1.2rem;
    font-size: 0.8rem;
    color: #333;
    float: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .goods-list-price {
    color: #ff8000;
    float: right;
  }
</style>
