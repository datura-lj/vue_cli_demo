<template>
  <div class="hello">
    <ul class="cont-ul">
        <li v-for="(item, index) in imgArr" :key="index">
          <h3>{{ item.title }}</h3>
          <img :src="item.img" alt="" />
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
     imgArr: []
    }
  },
  created () {
    /*
    * 方式一
    * 使用node中的express
    */
    /*this.$http.get('/api/goods').then((data) => {
      if(data.body.code == 0){
        this.imgArr = data.body.data;
        console.log(this.imgArr)
      }
    })*/
    /*
    * 方式二
    * 使用json-server方式
    */
    this.$http.get('http://127.0.0.1:9527/goods').then((data) => {
      console.log(data.body)
      if(data.body.code == 0){
        this.imgArr = data.body.body;
        console.log(this.imgArr)
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cont-ul{
  width: 100%;
}
.cont-ul::after {
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
li{
  float: left;
  width: 50%;
  list-style: none;
  padding: 5px;
  text-align: center;
  box-sizing: border-box;
}
img{max-width: 100%;}
</style>
