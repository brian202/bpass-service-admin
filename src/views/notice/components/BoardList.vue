<template>
  <div>
    <table border="2">
      <tr>
        <th align="center" width="80">번호</th>
        <th align="center" width="320">제목</th>
        <th align="center" width="100">내용</th>
        <th align="center" width="180">등록일시</th>
      </tr>

      <tr v-for="(value, id) in data" :key="id">
        <th>{{ value.id }}</th>
        <th>{{ value.title }}</th>
        <th>{{ value.contents }}</th>
        <th>{{ value.date }}</th>
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
