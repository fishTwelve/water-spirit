<template>
  <div class="footer">
    <div class="footer-wrapper ">
      <div class="clearfix">
        <div class="fl icon" style="margin-top: 30px">
          <Icon type="ios-pin" size="40"/>
          快速定位
          <Icon type="md-flash" size="40"/>
          一键购水
          <Icon type="md-bus" size="40"/>
          极速送达
          <Icon type="md-mic" size="40"/>
          意见反馈
        </div>
        <div class="fr online-service" style="margin-right: 10px">
          <span>周一至周日 7:30—24:00</span>
          <p>400-788-3333</p>
          <a href="">在线客服</a>
        </div>
      </div>
      <hr class="font-hr">
      <div>
        <div class="footer-rights">
          <p>
            2019 waterSprite All rights reserved. 粤ICP备13003602号合字B2-20190010 营业执照法律声明粤公网安备 440491024960XX 号
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
    export default {
        name: 'YFotter',
    }
</script>
<style lang="less" scoped>
  .footer {
    margin-top: 40px;
    padding-top: 28px;
    background-color: white;
    border: 1px solid #efefef;

    .footer-wrapper {
      width: 1240px;
      margin: 0 auto;

      .icon {
        i {
          margin-left: 60px;
          cursor: pointer;
        }
      }

      .footer-server {
        width: 1000px;
        li {
          display: inline-block;
          height: 57px;
          width: 240px;
          font-size: 12px;
          color: #999;
        }

        span, img {
          // 垂直对齐
          vertical-align: middle;
        }
      }
    }

    .online-service {
      text-align: right;

      span {
        font-size: 12px;
        color: #999;
      }

      p {
        color: #00c3f5;
        font-size: 30px;
        font-weight: 400;
      }
    }

    .font-hr {
      margin-top: 20px;
      margin-bottom: 8px;
      height: 1px;
      border: 0;
      border-top: 1px solid #eee;
    }

    .external-link {
      li {
        display: inline-block;
        padding-right: 15px;
        margin-right: 15px;
        border-right: 1px solid #d6d6d6;
        font-size: 12px;
        color: #999;

        &:last-child {
          border-right: none;
        }
      }
    }

    .footer-rights {
      color: #999;
      font-size: 12px;
      text-align: center;
    }

    .subscribe {
      text-align: right;
      margin-top: 18px;

      a {
        color: #999;
        padding-right: 10px;
        margin-right: 10px;
        border-right: 1px solid #999;

        &:last-child {
          border-right: none;
        }

        &:hover {
          color: #31a5e7;
        }
      }
    }
  }
</style>
