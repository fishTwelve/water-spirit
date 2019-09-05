<template>
  <div>
    <y-header type="one"></y-header>
    <div class="category-wrapper">
      <y-goods :data="navData" @goDetail="goDetail"></y-goods>
    </div>
    <y-fotter></y-fotter>
  </div>
</template>

<script type="text/javascript">
    import YHeader from "../components/yheader";
    import YGoods from "../components/goodsList";
    import YFotter from "../components/fotter";
    import axios from 'axios'
    export default {
        name: '',
        data(){
            return{
                navData:[]
            }
        },
        components: {YFotter, YGoods, YHeader},
        methods:{
            async getNavData() {
                let {data} = await axios.get('http://47.95.214.173:8001/getcup/')
                this.navData = data
                // console.log(this.navData.list)
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
            this.getNavData()
        }
    }
</script>
<style lang="less">
  body {
    background-color: #F4F4F4;
  }
</style>
<style lang="less" scoped>
  .category-wrapper{
    width: 1240px;
    padding-top: 130px;
    padding-bottom: 50px;
    margin: 0 auto;
  }
</style>
