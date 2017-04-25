<template lang="html">
  <div class="footer">
    <ul class="footer-cont">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
  .footer {
    height: 1.8rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 2px solid #ccc;
    background-color: #fff;
  }
  .footer-cont li {
    float: left;
    width: 25%;
    height: 1.8rem;
    line-height: 1.8rem;
    font-size: 1.4rem;
    color: #ff8000;
    text-align: center;
  }
  .footer-cont li:active {
    background-color: #ccc;
  }
  .footer-cont:after {
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
</style>
