<template>
    <div class="box">
      <div id="allmap">
      </div>
    </div>
</template>
<script type="text/javascript">
    import BMap from 'BMap'
    import BMapSymbolSHAPEPOINT from 'BMap_Symbol_SHAPE_POINT'
    export default {
        name: '',
        methods:{
            handleSpinCustom () {
                this.$Spin.show({
                    render: (h) => {
                        return h('div', [
                            h('Icon', {
                                'class': 'demo-spin-icon-load',
                                props: {
                                    type: 'ios-loading',
                                    size: 18
                                }
                            }),
                            h('div', '请稍后')
                        ])
                    }
                });
                setTimeout(() => {
                    this.$Spin.hide();
                }, 5000);
            },
            buildMap(){
                var map = new BMap.Map("allmap");
                var point = new BMap.Point(116.331398,39.897445);
                map.centerAndZoom(point,18);
                var geolocation = new BMap.Geolocation();
                geolocation.getCurrentPosition(function(r){
                    if(this.getStatus() === BMAP_STATUS_SUCCESS){
                        var mk = new BMap.Marker(r.point);
                        map.addOverlay(mk);
                        map.panTo(r.point);
                        // alert('您的货物位于');
                    }
                    else {
                        // alert('定位失败，请刷新');
                    }
                },{enableHighAccuracy: true})
            }
        },
        mounted() {
            this.buildMap()
            this.handleSpinCustom()
        }

    }
</script>

<style lang="less" scoped>
  .demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
  }
  .box{
    #allmap{
      height: 800px;
      width: 100%;
    }
  }
</style>
