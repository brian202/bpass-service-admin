<template>
  <div align = "center">
    <BoardRegister/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { handleClipboard } from '@/utils/clipboard'
import BoardRegister from '@/views/notice/pages/BoardRegisterPage.vue'

@Component({
  name: 'Notice',
  components: {
    BoardRegister
  }
})
export default class extends Vue {

  private handleClipboard = handleClipboard

  private generateElementIconCode(symbol: string) {
    return `<i class="el-icon-${symbol}" />`
  }

  private generateSvgIconCode(symbol: string) {
    return `<svg-icon name="${symbol}" />`
  }
}
</script>
