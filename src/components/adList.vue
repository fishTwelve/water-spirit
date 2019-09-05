<template>
    <div class="clearfix">
      <div class="fl ad-left">
        <a href="#">
          <img src="https://img.alicdn.com/bao/uploaded/i1/2549841410/TB2i5GPx4GYBuNjy0FnXXX5lpXa_!!2549841410.jpg" alt="" class="ad-img">
        </a>
      </div>
      <div class="fr">
        <div class="ad-right-top">
          <a href="#">
            <img src="https://img.alicdn.com/bao/uploaded/i1/2549841410/TB2i5GPx4GYBuNjy0FnXXX5lpXa_!!2549841410.jpg" alt="" class="ad-img">
          </a>
        </div>
          <div class="ad-right-bot">
            <div class="fl ad-right-bot-left">
              <a href="#">
                <img src="https://img.alicdn.com/bao/uploaded/i1/2549841410/TB2i5GPx4GYBuNjy0FnXXX5lpXa_!!2549841410.jpg" alt="" class="ad-img">
              </a>
            </div>
            <div class="fr ad-right-bot-right">
              <a href="#">
                <img src="https://img.alicdn.com/bao/uploaded/i1/2549841410/TB2i5GPx4GYBuNjy0FnXXX5lpXa_!!2549841410.jpg" alt="" class="ad-img">
              </a>
            </div>
          </div>
      </div>
    </div>
</template>

<script type="text/javascript">
export default {
  name: 'adList',
  props: {
    data: {

    }
  }
}
</script>
<style lang="less" scoped>
  .ad-left{
    height: 450px;
    width: 615px;
    transition: opacity .3s;
    &:hover{
      opacity: 0.8;
    }
  }
  .ad-right-top {
    height: 220px;
    width: 616px;
    transition: opacity .3s;
    &:hover {
      opacity: 0.8;
    }
  }
  .ad-right-bot{
    margin-top: 10px;
    .ad-right-bot-left, .ad-right-bot-right{
      height: 220px;
      width: 303px;
      transition: opacity .3s;
      &:hover{
        opacity: 0.8;
      }
    }
  }
  // 防止图片畸形
  .ad-img{
    height: 100%;
    width: 100%;
  }

</style>
