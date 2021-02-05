<template>
  <div class="app-contatiner">
    <table>
      <tr>
        <td align="center" width="80">번호</td>
        <td align="center" width="320">제목</td>
        <!-- <td align="center" width="100">내용</td> -->
        <td align="center" width="180">등록일시</td>
        <td align="center" width="100">편집</td>
      </tr>

      <tr v-for="(value, id) in data" :key="id">
        <th>{{ value.id }}</th>
        <th>{{ value.title }}</th>
        <!-- <th>{{ value.contents }}</th> -->
        <th>{{ value.date }}</th>
        <th><input type = "button" value="Edit"></th>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Board } from '@/store/modules/board'
import axios from 'axios'

@Component
export default class extends Vue {
  @Prop() private boards!: Board[];
  id = 0
  contents = ''
  title = ''
  data = ''
  date = ''

  created() {
    const BASE_URL = 'http://localhost:8000/t_notice/'
    axios.get(`${BASE_URL}`).then((result: any) => {
      this.id = result.data.id
      this.title = result.data.title
      this.contents = result.data.contents
      this.date = result.data.date
      this.data = result.data
      console.log(result)
    })
  }
}
</script>
<style lang="scss" scoped>
div {
  padding: 20px;
  width: 100%;
}
div table {
  border-top: 1px solid #444444;
  border-collapse: collapse;
}
th, td {
  border-bottom: 1px solid #444444;
  padding: 10px;
}
</style>
