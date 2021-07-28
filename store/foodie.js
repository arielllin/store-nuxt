import {
  getCategories,
  getCities,
  getCollections,
  getCuisines,
  getEstablishments,
  getRestaurants,
  getRestaurant
} from '~/api/modules/foodie'

import Test from '@/api/test'

const state = () => {
  return {
    categories: [],
    collections: [],
    establishments: [],
    restaurants: [],
    restaurant: null
  }
}

const actions = {
  async GetCategories({ commit }) {
    try {
      const { categories } = await getCategories()
      commit('SET_CATEGORIES', categories)
      console.log(categories)
    } catch (error) {
      console.log(error)
      throw error
    }
  },
  async GetCities({ commit }) {
    try {
      const { cities } = await getCities()
      // commit('SET_CATEGORIES', categories)
      console.log(cities)
    } catch (error) {
      console.log(error)
      throw error
    }
  },
  async GetCollections({ commit, dispatch }) {
    try {
      await dispatch('GetEstablishments')
      const { collections } = await getCollections()
      commit('SET_COLLECTIONS', collections)
      console.log(collections)
    } catch (error) {
      console.log(error)
      throw error
    }
  },
  async GetCuisines({ commit }) {
    try {
      const { cuisines } = await getCuisines()
      // commit('SET_COLLECTIONS', collections)
      console.log(cuisines)
    } catch (error) {
      console.log(error)
      throw error
    }
  },
  async GetEstablishments({ commit, dispatch }) {
    try {
      const { establishments } = await getEstablishments()
      commit('SET_ESTABLISHMENT', establishments)
      console.log(establishments)
    } catch (error) {
      console.log(error)
      throw error
    }
  },
  async GetRestaurants({ commit }) {
    try {
      const { restaurants } = await getRestaurants()
      commit('SET_RESTAURANTS', restaurants)
      console.log(restaurants)
    } catch (error) {
      console.log(error)
      throw error
    }
  },
  async GetRestaurant({ commit }, Id) {
    try {
      const restaurant = await getRestaurant(Id)
      commit('SET_RESTAURANT', restaurant)
      console.log('restaurant', restaurant)
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

const mutations = {
  SET_CATEGORIES: (state, categories) => {
    state.categories = categories
  },
  SET_COLLECTIONS: (state, collections) => {
    collections.forEach((item, index) =>
      state.collections.push(new Test(item, index, state.establishments))
    )
    // state.collections = collections
  },
  SET_ESTABLISHMENT: (state, establishments) => {
    state.establishments = establishments
  },
  SET_RESTAURANTS: (state, restaurants) => {
    state.restaurants = restaurants
  },
  SET_RESTAURANT: (state, restaurant) => {
    state.restaurant = restaurant
  }
}

const getters = {
  // ...
}

// 最終要匯出
export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true // 多模組的時候，當有相同名稱的變數或方法才能區隔開
}
