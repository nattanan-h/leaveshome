export const state = () => ({
    drawer: false
  })
  
export const mutations = {
  set_drawer (state, newstate) {
    // console.error(state)
    state.drawer = newstate
  },
}

// export const news = () => ({
//   news_id: ''
// })

  