<template>
  <div class="home">
    <el-button type="success" @click="handleClick">测试element++</el-button>
    <el-button type="success" @click="handleUpdateToken">token</el-button>
    <testChar></testChar>
    <div>{{ count }}</div>
    <div>{{ token }}</div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import testChar from '@/components/TestChart.vue'

@Component({
  components: {
    testChar
  }

})
export default class HomeView extends Vue {
  get count() {
    return this.$store.state.count
  }

  get token() {
    return this.$store.state.common.token
  }

  handleClick() {
    this.$store.commit('increment', 9)
  }

  handleUpdateToken() {
    this.$store.commit('updateToken', 8888)
  }

  beforeRouteEnter(to: any, from: any, next: any) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  }

  beforeRouteUpdate(to: any, from: any, next: any) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  }

  beforeRouteLeave(to: any, from: any, next: any) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
}
</script>
