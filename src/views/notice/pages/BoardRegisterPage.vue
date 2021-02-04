<template>
  <div align="center">
    <h2>공지사항 등록</h2>
    <board-register-form @submit="onSubmit"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BoardRegisterForm from '@/views/notice/components/BoardRegisterForm.vue';
import AxiosService from '@/service';
import { Board } from '@/store/modules/board';

@Component({
  components: {
    BoardRegisterForm,
  },
})
export default class BoardRegisterPage extends Vue {

  onSubmit(payload: Board) {
    const { title, content, writer } = payload;
    AxiosService.instance.post('noticeList', { title, content, writer })
      .then((res) => {
        alert('등록되었습니다.');
        this.$router.push({
          name: 'BoardReadPage',
          params: { boardNo: res.data.boardNo },
        });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }

}
</script>
