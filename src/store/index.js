import { createStore } from 'vuex'
import carouselData from './carousel/index';
import cardsData from './cards/index';
export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        carousel: carouselData,
        cards: cardsData
    }
})