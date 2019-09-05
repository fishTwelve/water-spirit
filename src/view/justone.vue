<template>
  <div class="ap">
    <div class="box" @click="goToIndex">
      <div class="drop" ></div>
      <div class="wave box"></div>
    </div>
    <Modal
      :mask-closable="false"
      v-model="modal"
      title="这款商品不错哦"
      :styles="{top: '20px'}"
      @on-ok="goTo"
      @on-cancel="goToIndex">
      <div style="margin-left: 80px">
        <y-good :data="Data"></y-good>
      </div>
    </Modal>
  </div>
</template>

<script type="text/javascript">
    import YGoods from "../components/goodsList";
    import YGood from "../components/One";
    import axios from 'axios'
    export default {
        name: '',
        components: {YGoods,YGood},
        data(){
            return{
                modal:false,
                Data:[]
            }
        },
        methods:{
            goToIndex(){
                this.$router.push({
                    name: 'home'
                })
            },
             getOne(){
                setTimeout(()=>{
                    this.modal=true
                },2000)
            },
            async getData() {
                let {data} = await axios.get('http://47.95.214.173:8001/randomgetone/')
                this.Data = data.fields
                console.log(this.Data)
            },
            goTo(){
                this.$Message.success('购买成功');
                this.$router.push({
                    name: 'home'
                })
            }
        },
        mounted() {
            this.getOne()
            this.getData()
        }
    }
</script>
<style scoped>
.ap{
  background-color: #3498DB;
  overflow: hidden;
  height: 800px;
  width: 1270px;
}
  .box {
    cursor: pointer;
    margin: 175px auto;
  }
  .drop {
    position: relative;
    width: 20px;
    height: 20px;
    top: -195px;
    margin: 0 auto;
    background: #FFF;
    -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
    border-radius: 20px;
    -moz-animation-name: drip;
    -webkit-animation-name: drip;
    animation-name: drip;
    -moz-animation-timing-function: cubic-bezier(1,0,.91,.19);
    -webkit-animation-timing-function: cubic-bezier(1,0,.91,.19);
    animation-timing-function: cubic-bezier(1,0,.91,.19);
    -moz-animation-duration: 2s;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -moz-animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  .drop:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 30px solid rgba(255,255,255,1);
    top: -22px;
  }

  .wave {
    position: relative;
    opacity: 0;
    top: 0;
    width: 2px;
    height: 1px;
    border: #FFF 7px solid;
    -moz-border-radius: 300px / 150px;
    -webkit-border-radius: 300px / 150px;
    border-radius: 300px / 150px;
    -moz-animation-name: ripple;
    -webkit-animation-name: ripple;
    animation-name: ripple;
    -moz-animation-delay: 2s;
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
    -moz-animation-duration: 2s;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -moz-animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  .wave:after {
    content: "";
    position: absolute;
    opacity: 0;
    top: -5px;
    left: -5px;
    width: 2px;
    height: 1px;
    border: #FFF 5px solid;
    -moz-border-radius: 300px / 150px;
    -webkit-border-radius: 300px / 150px;
    border-radius: 300px / 150px;
    -moz-animation-name: ripple-2;
    -webkit-animation-name: ripple-2;
    animation-name: ripple-2;
    -moz-animation-duration: 2s;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -moz-animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  @keyframes ripple {
    from {
      opacity: 1;
    }
    to {
      width: 600px;
      height: 300px;
      border-width: 1px;
      top: -100px;
      opacity: 0;
    }
  }

  @keyframes ripple-2 {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      width: 200px;
      height: 100px;
      border-width: 1px;
      top: 100px;
      left: 200px;
    }
  }

  @keyframes drip {
    to {
      top: 190px;
    }
  }
</style>
