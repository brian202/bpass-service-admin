<template>
  <div align="center">
    <h2>공지사항 상세보기</h2>
    <board-read v-if="board" :board="board"/>
    <p v-else>loading...</p>
    <router-link :to="{ name: 'BoardModifyPage', params: { boardNo } }">편집</router-link>
    <button>삭제</button>
    <router-link :to="{ name: 'BoardListPage' }">목록</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import BoardRead from '@/views/notice/components/BoardRead.vue';
import { Board } from '@/store/modules/board';

@Component({
  components: {
    BoardRead,
  },
})
export default class BoardReadPage extends Vue {

  @Prop() boardNo!: number;

  @State readonly board!: Board;

  @Action readonly fetchBoard: any;

  created() {
    this.fetchBoard(this.boardNo)
      .catch((err: any) => {
        alert(err.response.data.message);
        this.$router.back();
      });
  }

}
</script>
