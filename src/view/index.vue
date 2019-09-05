<template>
  <div style="background-color: #f4f4f4;">
    <y-header></y-header>
    <div class="shuffling">
      <Carousel autoplay v-model="value" loop trigger="hover">
        <CarouselItem>
          <div class="demo-carousel">
            <img src="../assets/images/3.png" alt="">
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">
            <img src="../assets/images/1.png" alt="">
          </div>
        </CarouselItem>
      </Carousel>
    </div>
    <div class="index-container">
      <div class="sale">
        <h3 class="title">矿泉水</h3>
        <y-goods :data="navData1" @goDetail="goDetail"></y-goods>
        <h3 class="title">饮水设备</h3>
        <y-goods :data="navData2" @goDetail="goDetail"></y-goods>
        <h3 class="title">洋酒</h3>
        <y-goods :data="navData3" @goDetail="goDetail"></y-goods>
        <h3 class="title">红酒</h3>
        <y-goods :data="navData4" @goDetail="goDetail"></y-goods>
      </div>
    </div>
    <y-fotter></y-fotter>
  </div>
</template>

<script type="text/javascript">
    import YHeader from "../components/yheader";
    import YGoods from "../components/goodsList";
    import YFotter from "../components/fotter";
    import axios from 'axios'
    import AdList from "../components/adList";
    export default {
        name: '',
        components: {AdList, YFotter, YGoods, YHeader},
        data() {
            return {
                value: 0,
                navData1: [],
                navData2: [],
                navData3: [],
                navData4: [],
            }
        },
        methods: {
            async getNavData1() {
                let {data} = await axios.get('http://47.95.214.173:8001/getwater/')
                this.navData1 = data
            },
            async getNavData2() {
                let {data} = await axios.get('http://47.95.214.173:8001/getcup/')
                this.navData2 = data
            },
            async getNavData3() {
                let {data} = await axios.get('http://47.95.214.173:8001/gettea/')
                this.navData3 = data
            },
            async getNavData4() {
                let {data} = await axios.get('http://47.95.214.173:8001/getwine/')
                this.navData4 = data
            },
            goDetail(item){
                this.$router.push({
                    name: 'detail',
                    params: {
                        id: item.timeid
                    }
                })
            }
        },
        mounted() {
            this.getNavData1()
            this.getNavData2()
            this.getNavData3()
            this.getNavData4()
        }
    }
</script>
<style lang="less" scoped>
  .shuffling {
    width: 100%;

    .demo-carousel {
      background-color: silver;
      height: 700px;
      width: 100%;
      font-size: 30px;
      text-align: center;
    }

    img {
      height: 700px;
      width: 100%
    }
  }

  .index-container {
    width: 1240px;
    margin: 0 auto;
    .title {
      font-size: 30px;
      font-weight: 400;
      margin-top: 20px;
      margin-bottom: 15px;
      text-align: center;
    }

    .sale {
      margin-bottom: 50px;
    }
  }
</style>
