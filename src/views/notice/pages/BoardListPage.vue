<template>
  <div align="center">
    <h2>공지사항 목록</h2>
    <board-list :boards="boards"/>
    <router-link :to="{name: 'BoardRegisterPage'}">새로 만들기</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Action } from 'vuex-class'
import BoardList from '@/views/notice/components/BoardList.vue'
import { Board } from '@/store/modules/board'

@Component({
  components: {
    BoardList
  }
})
export default class extends Vue {
  @State readonly boards!: Board[]
  @Action readonly fetchBoardList: any
  created() {
    this.fetchBoardList()
  }
}
</script>
