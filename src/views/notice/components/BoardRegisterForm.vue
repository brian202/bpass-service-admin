<template>
  <form @submit.prevent="onSubmit">
    <table>
      <tr>
        <td>제목</td>
        <td><input type="text" v-model="title"></td>
      </tr>
      <tr>
        <td>작성자</td>
        <td><input type="text" v-model="writer"></td>
      </tr>
      <tr>
        <td>내용</td>
        <td><textarea v-model="contents" rows="5"></textarea></td>
      </tr>
    </table>

    <div>
      <button type="submit">등록</button>
      <button>
        <router-link :to="{name: 'BoardListPage'}">취소</router-link>
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator'

@Component
export default class BoardRegisterForm extends Vue {
  title = ''
  contents = ''
  writer = ''

  @Emit('submit')
  onSubmit() {
    const { title, contents, writer } = this
    return { title, contents, writer }
  }
}
</script>
