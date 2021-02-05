<template>
  <div align="center">
    <h2>공지사항 등록</h2>
    <board-register-form @submit="onSubmit"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BoardRegisterForm from '@/views/notice/components/BoardRegisterForm.vue'
import AxiosService from '@/service'
import { Board } from '@/store/modules/board'

@Component({
  components: {
    BoardRegisterForm
  }
})
export default class extends Vue {
  onSubmit(payload: Board) {
    const { id, title, contents, date, priority, created_at, updated_at } = payload
    AxiosService.instance.post('noticeList', { id, title, contents, date, priority, created_at, updated_at })
      .then((res) => {
        alert('등록되었습니다.')
        this.$router.push({
          name: 'BoardReadPage',
          params: { boardNo: res.data.boardNo }
        })
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }
}
</script>
