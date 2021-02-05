<template>
  <form @submit.prevent="onSubmit">
    <table>
      <tr>
        <td>제목</td>
        <th><input type="text" v-model="title"></th>
      </tr>
      <tr>
        <td>내용</td>
        <th><textarea v-model="contents" rows="10"></textarea></th>
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

  @Emit('submit')
  onSubmit() {
    const { title, contents } = this
    return { title, contents }
  }
}
</script>
<style lang="scss" scope>
form {
  padding: 30px;
}
td {
  padding: 20px;
}
th {
  block-size: 50px;
}
input {
  width : 100%;
}
textarea {
  width: 100%;
}
table {
  width: 100%;
  border-top: #1A90D8 2px solid;
  border-bottom: #BABABA 1px solid;
  border-collapse: collapse;
}
table td {
  border-bottom: #E0E0E0 1px solid;
  padding-left: 2px;
  padding-right:2px;
  background-color: #E4EAF8;
  height: 20px;
}
</style>
