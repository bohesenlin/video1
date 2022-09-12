import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    path:'',
    query:'',
}

const store = new Vuex.Store({
    state,
    mutations: {
        updatePath(state, path) {
            state.path = path
        },

        updateQuery(state, query) {
            state.query = query
        },
        
    },
})

export default store
