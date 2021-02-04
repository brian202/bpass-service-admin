<template>
  <div align = "center">
    <BoardList/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { handleClipboard } from '@/utils/clipboard'
import BoardList from '@/views/notice/pages/BoardListPage.vue'

@Component({
  name: 'Notice',
  components: {
    BoardList
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
