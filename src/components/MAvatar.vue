<template>
  <el-avatar v-bind="propss" :src="src"></el-avatar>
</template>

<script lang='ts'>
import { getImg } from '@/utils/splicing-domain';
export default {
  name: 'Mavatar',
  inheritAttrs: false,
  computed: {
    src(){
      return getImg(this.$attrs.src)
    },
    propss(){
      const { src, ...rest } = this.$attrs
      return rest
    }
  }
}
</script>

<style lang='scss' scoped>

</style>