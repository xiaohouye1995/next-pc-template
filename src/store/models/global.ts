import { createSlice, Dispatch } from '@reduxjs/toolkit'

interface GlobalState {
  menusTitle: string
  token: string
}

const initialState: GlobalState = {
  menusTitle: '',
  token: '123456'
}

const global = createSlice({
  name: 'global',
  initialState,
  reducers: {
    getMenusTitileSuccess(state, action) {
      state.menusTitle = action.payload
      localStorage.setItem('menusTitle', action.payload)
    }
  }
})

export const { getMenusTitileSuccess } = global.actions

export default global.reducer

export function getMenusTitile(title: string) {
  return (dispatch: Dispatch) => {
    dispatch(getMenusTitileSuccess(title))
  }
}
