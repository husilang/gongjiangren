<template>
  <div class="steps">
    <ul>
      <li v-for="(item,index) in stepsArr" :class="{'cur': index == active}">
        <span class="num">{{index+1}}</span>
        {{item}}
        <span class="line" v-if="index != stepsArr.length-1"></span>
      </li>
    </ul>
  </div>
</template>
<style scoped>
  .steps {
    font-family: 'Microsoft YaHei';
    font-weight: normal;
    padding-top: 44px;
    height: 118px;
    border-bottom: 1px solid #eeeeee;
    text-align: center;
  }
  .steps li {
    display: inline-block;
    font-size: 16px;
    color: #bec3ca;
  }
  .steps li span.line {
    width: 20px;
    height: 1px;
    background: #bec3ca;
    margin-bottom: 5px;
    margin-right: 6px;
    display: inline-block;
  }
  .steps li.cur {
    color: #429ffe;
  }
  .steps li span.num {
    display: inline-block;
    width: 28px;
    height: 28px;
    border: 1px solid #bec3ca;
    border-radius: 50%;
    text-align: center;
    line-height: 26px;
  }
  .steps li.cur span {
    color: #fff;
    background: #429ffe;
    border-color: #429ffe;
  }
</style>
<script type="text/ecmascript-6">
  export default {
    props: {
      active: {
        type: Number,
        default: 0
      },
      stepsArr: {
        type: Array,
        default: []
      }
    }
  }
</script>
