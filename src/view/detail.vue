<template>
  <div class="background">
    <y-header></y-header>
    <div class="detail-wrapper">
      <div class="clearfix">
        <div class="fl detail-image">
          <images-list :data="detailData" :type="big"></images-list>
        </div>
        <div class="fl detail-props">
          <h3>{{detailData.bandname}}</h3>
          <div class="detail-price">
            <span class="price-text">价<span class="price-space"></span>格：</span>
            <span class="price-number">¥{{detailData.prize}}</span>
          </div>
          <div>
            <span class="price-text">支<span class="price-space"></span>持：</span>
            <ul class="server-list">
              <li class="server-item"><i class="icon-font icon-check-circle"></i>百城速达</li>
              <li class="server-item"><i class="icon-font icon-check-circle"></i>顺丰包邮</li>
              <li class="server-item"><i class="icon-font icon-check-circle"></i>七天无理由退货</li>
            </ul>
          </div>
          <div class="props-server">
            <span class="price-text">服<span class="price-space"></span>务：</span>
            <span>本商品由水精灵负责发货并提供售后服务</span>
          </div>
          <div>
            <span class="price-text">数<span class="price-space"></span>量</span>
            <div class="clearfix props-number">
              <input type="number" class="fl props-input" v-model="activeNumber">
              <div class="fl change-box">
                <div class="change-value" @click="up">+</div>
                <div class="change-value" @click="down">-</div>
              </div>
            </div>
          </div>
          <div class="props-btn">
            <a href="javascript: " class="btn danger btn1" @click="buy">立即购买</a>
            <a href="javascript: " class="btn success btn1" @click="goCart">加入购物车</a>
          </div>
        </div>
      </div>
    </div>
    <y-fotter></y-fotter>
  </div>
</template>

<script type="text/javascript">
    import axios from 'axios'
    import YHeader from "../components/yheader";
    import ImagesList from '../components/imagesList'
    import YFotter from "../components/fotter";

    export default {
        name: 'detail',
        // eslint-disable-next-line vue/require-render-return
        render: function (h) {
            return {}
        },
        components: {YFotter, ImagesList, YHeader},
        data() {
            return {
                detailData: {},
                big: 'big',
                activeNumber: 1,
                cartFlag:null,
            }
        },
        mounted() {
            this.getDetailData(this.$route.params.id)
        },
        methods: {
            async sendCartData(id) {
                let {data} = await axios.get('http://47.95.214.173:8001/addshoppingcart/',{
                    params:{
                        timeid: id,
                        username: this.$root.name
                    }
                })
                this.cartFlag = data
                console.log(this.cartFlag)
            },
            async getDetailData(id) {
                const {data} = await axios.get(`http://47.95.214.173:8001/getdetails/`,{
                    params:{
                        timeid: id
                    }
                })
                this.detailData = data.fields
                // console.log(this.detailData)
            },
            up() {
                this.activeNumber = parseInt(this.activeNumber) + 1
            },
            down() {
                if (this.activeNumber > 0) {
                    this.activeNumber = parseInt(this.activeNumber) - 1
                }
            },
            goCart() {
                if(this.$root.Flag){
                    this.sendCartData(this.$route.params.id)
                    this.$Message.success('添加成功');
                }
                else {
                    this.$Message.error('请先登陆');
                }
            },
            buy(){
                if(this.$root.Flag){
                    this.sendCartData(this.$route.params.id)
                    this.$router.push({
                        name:'shopcart'
                    })
                }
                else{
                    this.$Message.error('请先登陆');
                }
            }
        }
    }
</script>
<style lang="less" scoped>
  .background {
    background-color: white;
  }

  .detail-wrapper {
    width: 1240px;
    margin: 0 auto;
    padding-top: 150px;

    .bread {
      height: 40px;
      line-height: 40px;

      .arrow, .last-bread {
        color: #999;
      }
    }

    .detail-image {
      width: 495px;
    }
  }

  .detail-props {
    width: 675px;
    font-size: 12px;

    .price-space {
      padding-left: 12px;
    }

    h3 {
      font-size: 24px;
      font-weight: 400;
      color: #000;
      margin-bottom: 10px;
    }

    p {
      font-size: 16px;
      color: #e22841;
      margin-bottom: 15px;
    }

    .detail-price {
      height: 55px;
      margin-top: 15px;
      margin-bottom: 26px;
      background-color: #f5f5f5;

      .price-text {
        line-height: 34px;
        font-size: 12px;
        padding: 0 10px;
      }

      .price-number {
        color: #e02b41;
        font-size: 24px;
        line-height: 55px;
      }
    }

    .server-list {
      display: inline-block;

      .server-item {
        display: inline-block;
        margin-right: 20px;

        i {
          margin-right: 5px;
          color: #00c3f5;
        }
      }
    }

    .props-number {
      vertical-align: middle;
      display: inline-block;
      margin-left: 12px;

      .props-input {
        width: 53px;
        height: 38px;
        line-height: 38px;
        border: 1px solid #dcdcdc;
        color: #333;
        text-align: center;
      }

      .change-box {
        margin-left: 6px;

        .change-value {
          width: 20px;
          height: 16px;
          font-size: 14px;
          color: #666;
          border: 1px solid #dcdcdc;
          line-height: 14px;
          cursor: pointer;
          text-align: center;
          margin-top: 6px;

          &:first-child {
            margin-top: 0;
          }
        }
      }
    }

    .props-server {
      margin-top: 16px;
      margin-bottom: 10px;
    }

    .props-btn {
      margin-top: 17px;

      .btn1 {
        height: 34px;
        width: 102px;
        margin-right: 18px;
      }
    }
  }

  .detail-info-wrapper {
    // 清除图片之间的默认空隙
    font-size: 0;
    margin-bottom: 80px;

    .detail-info {
      height: 62px;
      border-bottom: 1px solid #dcdcdc;
      margin-top: 60px;
    }

    .info-title {
      font-size: 16px;
      height: 62px;
      line-height: 62px;
      color: #00c3f5;
      border-bottom: 1px solid #00c3f5;
      padding: 0 20px;
      margin-bottom: -1px;
      box-sizing: border-box;
      display: inline-block;
    }

    img {
      width: 1240px;
    }
  }
</style>
