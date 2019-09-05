<template>
    <div :class="{'images-wrapper' : type==='small' , 'images-wrapper_big' : type === 'big'}">
      <img :src="data.shopaddress" alt="" class="img">
    </div>
</template>
<script type="text/javascript">
export default {
  name: 'imagesList',
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    },
    type: {
      type: String,
      default () {
        return 'small'
      }
    }
  },
  data () {
    return {
      activeImage: 0
    }
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
  .images-wrapper{
    text-align: center;
    .img{
      // 不需要设置宽度 防止图片畸形
      height: 230px;
      margin-top: 20px;
    }
    .imgs{
      margin-bottom: 15px;
      margin-top: 13px;
      .imgs-item{
        display: inline-block;
        height: 40px;
        width: 40px;
        margin-right: 8px;
        border: 1px solid#efefef;
        border-radius: 4px;
        cursor: pointer;
        &:last-child{
          margin-right: 0;
        }
        &:hover{
          border-color: #bdbdbd;
        }
        img{
          height: 40px;
          width: 40px;
        }
      }
    }
  }
  .images-wrapper_big{
    text-align: center;
    .img{
      // 不需要设置宽度 防止图片畸形
      height: 350px;
      margin-top: -30px;
    }
    .imgs{
      margin-top: 10px;
      .imgs-item{
        display: inline-block;
        height: 75px;
        width: 75px;
        margin-right: 10px;
        border: 1px solid transparent;
        border-radius: 4px;
        cursor: pointer;
        &:last-child{
          margin-right: 0;
        }
        &:hover{
          border-color: #dcdcdc;
        }
        img{
          height: 75px;
          width: 75px;
        }
      }
    }
  }
</style>
