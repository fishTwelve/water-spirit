<template>
  <div>
    <ul class="clearfix">
      <li class="goods-list" v-for="(item,index) in data.list" :key="index" @click="goNext(item.fields)">
        <img :src="item.fields.shopaddress" alt="" class="good-img">
        <div class="goods-name">{{item.fields.bandname}}</div>
        <div class="goods-desc">{{item.fields.watername}}</div>
        <div class="goods-price">
          <i>¥</i>
          {{item.fields.prize}}
        </div>

      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
    export default {
        name: 'yGoods',
        // 数据通过父组件传过来
        props: {
            data: {},
        },
        methods:{
            goNext(item){
                this.$emit('goDetail', item)
            }
        }
    }
</script>
<style lang="less" scoped>
  .goods-list {
    float: left;
    height: 400px;
    width: 303px;
    background-color: #fff;
    cursor: pointer;
    position: relative;
    margin-right: 9px;
    margin-top: 10px;
    overflow: hidden;
    text-align: center;
    transition: all .3s;

    &:hover {
      box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
    }

    &:nth-child(4n-4) {
      margin-right: 0;
    }

    .good-img {
      // 只设置高度 如果还要设置宽度的话 图片可能会畸形
      height: 230px;
      margin-top: 30px;
    }

    .goods-name {
      margin-top: 30px;
      color: #333;
      font-size: 16px;
      margin-bottom: 2px;
    }

    .goods-desc {
      color: #333;
      font-size: 14px;
    }

    .goods-price {
      position: relative;
      display: inline-block;
      padding-left: 14px;
      font-size: 22px;
      color: #c00;

      i {
        font-style: normal;
        font-size: 14px;
        position: absolute;
        left: 0;
        top: 5px;
      }
    }

    .lower {
      font-size: 16px;
    }

    .good-oldPrice {
      text-decoration: line-through;
      color: #666;
      font-size: 14px;
      margin-left: 8px;
    }

    .good-new {
      position: absolute;
      top: 30px;
      left: 30px;
      width: 60px;
      height: 60px;
      line-height: 60px;
      border-radius: 50%;
      background: linear-gradient(120deg, #2e74f6, #56bdf9);
      color: white;
    }
  }
</style>
