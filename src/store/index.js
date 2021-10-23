import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        subscribers: 'subscribers'
    },
    getters: {
        subscribers: (state) => {
            return localStorage.getItem(state.subscribers);
        },
        isSubscriber: state => email => {
            return localStorage.getItem(state.subscribers) && localStorage.getItem(state.subscribers).includes(email);
        },
    },
    mutations: {
        saveSubscriber: (state, email) => {
            let curSubs = localStorage.getItem(state.subscribers) ? JSON.parse(localStorage.getItem(state.subscribers)) : [];
            curSubs.push(email);
            localStorage.setItem(state.subscribers, JSON.stringify(curSubs));
        }
    }
})
