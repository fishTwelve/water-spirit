<template>
  <div>
    <div class="clearfix" :class="{'header' : type === 'all','header_one': type === 'one'}">
      <div class="header-logo fl" @click="goHome">
        <i>WaterSpirit</i>
      </div>
      <div class="header-cart fr">
        <i @click="goCart">
          <Icon type="ios-cart-outline" size="30"/>
        </i>
      </div>
      <div class="header-my fr">
        <i @click="modal1=true">
          <Icon type="ios-contact-outline" size="30"/>
        </i>
      </div>
      <ul class="header-nav fr">
        <li @mouseenter="navShow(navData1)" @click="goToList1()">饮用水</li>
        <li @mouseenter="navShow(navData2)" @click="goToList2()">饮水设备</li>
        <li @mouseenter="navShow(navData3)" @click="goToList3()">洋酒</li>
        <li @mouseenter="navShow(navData4)" @click="goToList4()">红酒</li>
        <li @click="goToOne">随机购水</li>
        <li @click="getWh">快速定位</li>
        <li @click="modal3=true">留言</li>
      </ul>
    </div>
    <transition name="na">
      <div class="nav-children" @mouseleave="navHide" v-show="navFlag">
        <div class="children-wrapper">
          <transition-group tag="ul" @enter="enter">
            <li class="children-item" v-for=" (item,index) in navData.list" :key="item.fields.shopaddress " @click="goDetail(item.fields)"
                :data-index="index">
              <img :src=item.fields.shopaddress
                   alt="">
              <p>{{item.fields.bandname}}</p>
              <p>¥{{item.fields.prize}}</p>
            </li>
          </transition-group>
        </div>
      </div>
    </transition>
    <Modal
      :mask-closable="false"
      width="300"
      footer-hide=""
      v-model="modal1"
      title="登录"
      @on-ok=""
      @on-cancel="">
      <Form ref="formInline1" :model="formInline1" :rules="ruleInline1">
        <FormItem prop="user" style="margin-top: 10px">
          <Input type="text" v-model="formInline1.user" placeholder="用户名">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password" style="margin-top: 50px">
          <Input type="password" v-model="formInline1.password" placeholder="密码">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem :label-width="30" style="margin-top: 40px">
          <Button type="default" @click="handleSubmit1('formInline1')" style="width: 80px">登录</Button>
          <Button type="default" @click="handleSubmit2('formInline1')" style="width: 80px; margin-left: 30px">注册
          </Button>
        </FormItem>
      </Form>
    </Modal>
    <Modal
      :mask-closable="false"
      width="300"
      footer-hide=""
      v-model="modal2"
      title="注册"
      @on-ok=""
      @on-cancel="">
      <Form ref="formInline2" :model="formInline2" :rules="ruleInline2">
        <FormItem prop="user" style="margin-top: 10px">
          <Input type="text" v-model="formInline2.user" placeholder="用户名">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password" style="margin-top: 50px">
          <Input type="password" v-model="formInline2.password" placeholder="密码">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="repassword" style="margin-top: 50px">
          <Input type="password" v-model="formInline2.repassword" placeholder="确认密码">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="email" style="margin-top: 50px">
          <Input type="password" v-model="formInline2.email" placeholder="邮箱">
            <Icon type="ios-mail-outline" slot="prepend"/>
          </Input>
        </FormItem>
        <FormItem :label-width="30" style="margin-top: 40px">
          <Button type="default" @click="handleSubmit3('formInline2')" style="width: 80px">确认</Button>
          <Button type="default" @click="handleSubmit4('formInline2')" style="width: 80px; margin-left: 30px">取消
          </Button>
        </FormItem>
      </Form>
    </Modal>
    <Modal
      :mask-closable="false"
      v-model="modal3"
      title="给我们留言"
      @on-ok=""
      @on-cancel=""
      footer-hide=""
    >
      <Form ref="form" :model="formItem">
        <FormItem label="评分" prop="radio">
          <Rate v-model="value"/>
        </FormItem>

        <FormItem label="性别" prop="radio">
          <RadioGroup v-model="formItem.radio">
            <Radio label="male">男</Radio>
            <Radio label="female">女</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="" prop="textarea">
          <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 4,maxRows: 6}"
                 placeholder="你好..."></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit5('form')">提交</Button>
          <Button style="margin-left: 8px" @click="handleSubmit6('form')">取消</Button>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script type="text/javascript">
    import Velocity from 'velocity-animate'
    import axios from 'axios'

    export default {

        props: {
            type: {
                type: String,
                default() {
                    return 'all'
                }
            }
        },
        name: 'yHeader',
        data() {
            return {
                flag: this.$root.Flag,
                value: 0,
                navFlag: false,
                navData1: [],
                navData2: [],
                navData3: [],
                navData4: [],
                navData: [],
                childrenData: [],
                modal1: false,
                modal2: false,
                modal3: false,
                formInline1: {
                    user: '',
                    password: '',
                },
                formInline2: {
                    user: '',
                    password: '',
                    repassword: '',
                    email: ''
                },
                ruleInline1: {
                    user: [
                        {required: true, message: '请输入账号', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                    ]
                },
                ruleInline2: {
                    user: [
                        {required: true, message: '请输入账号', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                    ],
                    repassword: [
                        {required: true, message: '请再次输入密码', trigger: 'blur'},
                    ],
                    email: [
                        {required: true, message: '请输入邮箱', trigger: 'blur'},
                    ]
                },
                formItem: {
                    radio: 'male',
                    textarea: '',
                    text: ''
                }
            }
        },
        methods: {
            goDetail(item){
                this.$router.push({
                    name: 'detail',
                    params: {
                        id: item.timeid
                    }
                })
            },
            goCart(){
                if(this.$root.Flag){
                    this.$router.push({
                        name:'shopcart'
                    })
                }
                else {
                    this.$Message.error('请先登陆');
                }
            },
            navShow(item) {
                this.navFlag = true
                this.navData = item
                // console.log(item)
            },
            navHide() {
                this.navFlag = false
                this.childrenData = []
            },
            enter(el) {
                Velocity(el, {
                    'opacity': 1,
                })
            },
            goHome(){
                this.$router.push({
                    name: 'home'
                })
            },
            async getNavData1() {
                let {data} = await axios.get('/api/getwater/')
                this.navData1 = data
                // console.log(this.navData1.list)
            },
            async getNavData2() {
                let {data} = await axios.get('/api/getcup/')
                this.navData2 = data
                // console.log(this.navData2.list)
            },
            async getNavData3() {
                let {data} = await axios.get('/api/gettea/')
                this.navData3 = data
                // console.log(this.navData3.list)
            },
            async getNavData4() {
                let {data} = await axios.get('/api/getwine/')
                this.navData4 = data
                // console.log(this.navData4.list)
            },
            handleSubmit1(name) {
                if (this.modal1 === true) {
                    this.$refs[name].validate((valid) => {
                        if (valid) {
                            axios.get('/api/login/', {
                                params: {
                                    nickname: this.formInline1.user,
                                    password: this.formInline1.password
                                }
                            }).then((res) => {
                                if (res.data.status === 'successful') {
                                    this.$Message.success('登录成功');
                                    //清空表单
                                    this.$root.name = this.formInline1.user
                                    this.$refs[name].resetFields();
                                    this.modal1 = false
                                    this.$root.Flag = true
                                    // console.log(this.$root.name)
                                } else {
                                    this.$Message.error('用户名或密码错误');
                                }
                            })
                        } else {
                            this.$Message.error('登陆失败');
                        }
                    })
                }
            },
            handleSubmit2(name) {
                this.$refs[name].resetFields();
                this.modal1 = false
                this.modal2 = true
            },
            handleSubmit3(name) {
                this.$refs[name].validate((valid) => {
                    if (this.formInline2.password !== this.formInline2.repassword) {
                        this.$Message.error('两次输入密码不一致');
                    } else if (valid) {
                        axios.get('/api/register/', {
                            params: {
                                address: this.formInline2.user,
                                nickname: this.formInline2.user,
                                email: this.formInline2.email,
                                password: this.formInline2.password,
                            }
                        }).then((res) => {
                            // console.log(res.data)
                            if (res.data.status === 'failed') {
                                this.$Message.error(res.data.message);
                            }
                            if (res.data.status === 'successful') {
                                this.$Message.success(res.data.message);
                                this.$refs[name].resetFields();
                                this.modal2 = false
                            }
                        })
                    }
                })
            },
            handleSubmit4(name) {
                this.$refs[name].resetFields();
                this.modal1 = false
                this.modal2 = false
            },
            handleSubmit5(name) {
                if (this.modal3 === true) {
                    this.$refs[name].validate((valid) => {
                        if (valid) {
                            this.$Message.success('提交成功');
                            //清空表单
                            this.$refs[name].resetFields();
                            this.modal3 = false
                            this.value = 0
                        } else {
                            this.$Message.error('提交失败');
                        }
                    })
                }
            },
            handleSubmit6(name) {
                this.$refs[name].resetFields();
                this.modal3 = false;
                this.value = 0
            },
            getWh() {
                if (this.$root.Flag) {
                    this.$router.push({
                        name: 'getWhere'
                    })
                } else {
                    this.$Message.error('请先登陆');
                    this.modal1 = true
                }
            },
            goToOne() {
                if (this.$root.Flag) {
                    this.$router.push({
                        name: 'justOne'
                    })
                } else {
                    this.$Message.error('请先登陆');
                    this.modal1 = true
                }
            },
            goToList1() {
                this.$router.push({
                    name: 'cartList'
                })
            },
            goToList2() {
                this.$router.push({
                    name: 'cartList2'
                })
            },
            goToList3() {
                this.$router.push({
                    name: 'cartList3'
                })
            },
            goToList4() {
                this.$router.push({
                    name: 'cartList4'
                })
            },
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
  .header {
    position: absolute;
    width: 100%;
    z-index: 999;
    height: 80px;
    padding: 20px 0;

    &.active {
      background-color: white;
    }

    .header-logo {
      margin-left: 10px;
      font-size: 30px;
      color: #478de9;
      font-weight: 500;
      line-height: 30px;
    }

    .header-nav {
      li {
        cursor: pointer;
        display: inline-block;
        width: 80px;
        padding: 10px 10px;
        text-align: center;
        color: black;
        font-size: 15px;
        font-weight: 500;

        &:hover {
          color: #478de9;
        }
      }
    }

    .header-search {
      margin: 6px 0;
      border-radius: 15px;
      border: 1px solid #515151;
      height: 25px;
      width: 130px;
      position: relative;
      background-color: white;

      input {
        color: #999999;
        position: absolute;
        outline: none;
        border: 0;
        height: 15px;
        width: 90px;
        left: 6px;
        top: 4px;
        font-size: 9px;
        background-color: transparent;
      }

      i {
        position: absolute;
        right: 2px;
        top: 1px;
      }
    }

    .header-cart {
      margin: 3px 10px;
    }

    .header-my {
      margin: 3px 0 3px 10px;
    }

    i {
      cursor: pointer;
    }
  }

  .header_one {
    position: absolute;
    width: 100%;
    z-index: 999;
    height: 80px;
    padding: 20px 0;
    background-color: white;

    &.active {
      background-color: white;
    }

    .header-logo {
      margin-left: 10px;
      font-size: 30px;
      color: #478de9;
      font-weight: 500;
      line-height: 30px;
    }

    .header-nav {
      li {
        cursor: pointer;
        display: inline-block;
        width: 80px;
        padding: 10px 10px;
        text-align: center;
        color: black;
        font-size: 15px;
        font-weight: 500;

        &:hover {
          color: #478de9;
        }
      }
    }

    .header-search {
      margin: 6px 0;
      border-radius: 15px;
      border: 1px solid #515151;
      height: 25px;
      width: 130px;
      position: relative;
      background-color: white;

      input {
        color: #999999;
        position: absolute;
        outline: none;
        border: 0;
        height: 15px;
        width: 90px;
        left: 6px;
        top: 4px;
        font-size: 9px;
        background-color: transparent;
      }

      i {
        position: absolute;
        right: 2px;
        top: 1px;
      }
    }

    .header-cart {
      margin: 3px 10px;
    }

    .header-my {
      margin: 3px 0 3px 10px;
    }

    i {
      cursor: pointer;
    }
  }

  .nav-children {
    width: 100%;
    height: 236px;
    background-color: white;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    border-bottom: 1px solid #e9e9e9;
    overflow: hidden;

    .children-wrapper {
      width: 1240px;
      padding-left: 150px;
      /*text-align: center;*/
      margin: 0 auto;
    }

    .children-item {
      opacity: 0;
      width: 136px;
      height: 145px;
      margin-left: 20px;
      margin-top: 75px;
      //把li设置为行内样式，把使原来竖着排列的li变成横着的
      display: inline-block;
      text-align: center;
      font-size: 12px;
      color: #666;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }

      img {
        height: 100px;
        width: 100px;
      }
    }
  }

  .na-enter-active, .na-leave-active {
    height: 236px;
    transition: height .3s ease-in-out;
  }

  .na-enter, .na-leave-to {
    height: 0;
  }

</style>
