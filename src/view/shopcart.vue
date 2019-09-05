<template>
  <div>
    <y-header></y-header>
    <div class="box-war">
      <table class="box">
        <tr>
          <td class="box-input">

          </td>
          <td class="box-item">
            商品
          </td>
          <td class="box-price">
            单价（元）
          </td>
          <td class="box-number">
            数量
          </td>
          <td class="box-yuan">
            小计（元）
          </td>
        </tr>
      </table>
      <div class="shopcart-list">
        <table>
          <tr class="cart-product" v-for="item in cartData" :key="item.fields.timeid">
            <td class="cart-select">
              <img :src="item.fields.shopaddress" alt="" class="cart-img">
            </td>
            <td class="cart-name">
              <span class="cart-title">{{item.fields.bandname}}</span>
            </td>
            <td class="cart-pri">{{item.fields.prize}}</td>
            <td class="cart-price">
              <div class="cart-input clearfix">
                <button class="fl" @click="down">-</button>
                <input type="number" v-model="activeNumber" class="fl">
                <button class="fl" @click="up">+</button>
              </div>
            </td>
            <td class="cart-num">¥{{item.fields.prize}}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <a href="javascript: " class="btn danger btn" @click="buy">结算</a>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <y-fotter></y-fotter>
  </div>
</template>

<script type="text/javascript">

    import YHeader from "../components/yheader";
    import YFotter from "../components/fotter";
    import  axios from 'axios'
    export default {
        name: '',
        components: {YFotter, YHeader},
        data() {
            return {
                cartData: [],
                activeNumber:1
            }
        },
        methods: {
            up() {
                this.activeNumber = parseInt(this.activeNumber) + 1
            },
            down() {
                if (this.activeNumber > 0) {
                    this.activeNumber = parseInt(this.activeNumber) - 1
                }
            },
            buy() {
                this.$Message.success('购买成功');
            },

            async getCartData() {
                let {data} = await axios.get('/api/paythemoney/', {
                    params: {
                        username: this.$root.name
                    }
                })
                this.cartData = data.list
                console.log(this.cartData)
            }
        },
        mounted() {
            this.getCartData()
        }
    }
</script>
<style lang="less" scoped>
  .box-war {
    width: 1024px;
    margin: 0 auto;
    padding-top: 100px;
  }

  .box {
    background-color: white;
    margin-top: 10px;
    border-bottom: 1px solid #efefef;
    color: #333;

    td {
      height: 49px;
    }

    input {
      vertical-align: middle;
      height: 18px;
      width: 18px;
      border-color: #bdbdbd;
      /*转化为行内元素*/
      display: inline-block;
    }

    .box-input {
      padding-left: 40px;
      width: 220px;

    }

    .box-item {
      width: 270px;
    }

    .box-price {
      width: 220px;
      text-align: center;
    }

    .box-number {
      width: 200px;
      text-align: center;
    }

    .box-yuan {
      width: 160px;
      text-align: center;
    }

    .box-do {
      width: 170px;
      padding-right: 40px;
      text-align: right;
    }
  }

  .cart-select {
    padding-left: 45px;
    text-align: left;
    width: 190px;

    .cart-checkbox {
      width: 18px;
      height: 18px;
      border-color: #bdbdbd;
      display: inline-block;
      background-color: #fff;
      border-radius: 2px;
      font-size: 10px;
      vertical-align: middle;
    }

    .cart-img {
      width: 80px;
      height: 80px;
      margin-left: 15px;
      margin-right: 65px;
      vertical-align: middle;
    }
  }

  .cart-name {
    width: 255px;
    text-align: left;
    margin-left: 50px;

    .cart-title {
      display: inline-block;
      width: 100%;
      overflow: hidden;
      //不能换行
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .cart-price {
    margin-left: 50px;
    width: 140px;
    text-align: center;
  }

  .cart-num {
    width: 200px;
    text-align: center;
  }

  .cart-total {
    width: 160px;
    text-align: center;
  }

  .cart-operate {
    width: 170px;
    padding-left: 40px;
    text-align: center;
  }

  .shopcart-list {
    background-color: #fff;
    margin-bottom: 10px;
  }

  .cart-product {
    height: 150px;
    border-top: 1px solid #EFEFEF;

    &:last-child {
      border-bottom: 1px solid #EFEFEF;
    }

    .cart-input {
      width: 140px;
      height: 38px;
      border: 1px solid #EFEFEF;

      button {
        width: 38px;
        height: 33px;
        text-align: center;
        background: transparent;
        border: none;
        font-size: 20px;
        cursor: pointer;
      }

      input {
        width: 58px;
        height: 36px;
        border: none;
        border-right: 1px solid #EFEFEF;
        border-left: 1px solid #EFEFEF;
        text-align: center;
      }
    }

    .cart-pri {
      width: 350px;
      text-align: center;
    }
  }
  .btn{
    margin-top: 10px;
    margin-left: 58px;
  }
</style>
