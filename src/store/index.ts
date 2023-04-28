import {createStore} from "vuex";

const $store = createStore({
    state: {
        count: 0,
    },
    getters: {},
    mutations: {
        increment(state, payload) {
            state.count = state.count + 1
            console.log('payload:' + payload)
        },
    },
    actions: {},
    modules: {}
})

export default $store;


