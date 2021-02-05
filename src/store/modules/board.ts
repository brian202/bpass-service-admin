import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import AxiosService from '@/service'
import {
  FETCH_BOARD_LIST,
  FETCH_BOARD
} from './mutation-types'

Vue.use(Vuex)

export interface Board {
  boardNo: number
  id: string
  title: string
  contents: string
  date: string
  priority: number
  created_at: string
  updated_at: string
}

interface BoardState {
  boards: Board[]
  board: Board
}

const store: StoreOptions<BoardState> = {
  state: {
    boards: [],
    board: { boardNo: 0, id: '', title: '', contents: '', date: '', priority: 0, created_at: '', updated_at: '' }
  },
  mutations: {
    [FETCH_BOARD_LIST](state, boards: Board[]) {
      state.boards = boards
    },
    [FETCH_BOARD](state, board: Board) {
      state.board = board
    }
  },
  actions: {
    fetchBoardList({ commit }) {
      return AxiosService.instance.get('/notice')
        .then((res) => {
          commit(FETCH_BOARD_LIST, res.data)
        })
    },
    fetchBoard({ commit }, boardNo: number) {
      return AxiosService.instance.get(`/notice/${boardNo}`)
        .then((res) => {
          commit(FETCH_BOARD, res.data)
        })
    }
  }
}

export default new Vuex.Store(store)
