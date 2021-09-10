import { zomatoRequest as request } from '@/api/request'

export function getCategories() {
  return request({
    url: '/api/v2.1/categories',
    method: 'GET',
    params: {
      // city_id: 280
    }
  })
}

export function getCities(city_ids = 280) {
  return request({
    url: '/api/v2.1/cities',
    method: 'GET',
    params: {
      city_ids
    }
  })
}

export function getCuisines() {
  return request({
    url: '/api/v2.1/cuisines',
    method: 'GET',
    params: {
      city_id: 280
    }
  })
}

export function getCollections() {
  return request({
    url: '/api/v2.1/collections',
    method: 'GET',
    params: {
      city_id: 280
    }
  })
}

export function getEstablishments() {
  return request({
    url: '/api/v2.1/establishments',
    method: 'GET',
    params: {
      city_id: 280
    }
  })
}
export function getRestaurants() {
  return request({
    url: '/api/v2.1/search',
    method: 'GET',
    params: {
      entity_id: 280,
      entity_type: 'city'
    }
  })
}

export function getRestaurant(res_id) {
  return request({
    url: '/api/v2.1/restaurant',
    method: 'GET',
    params: {
      res_id
    }
  })
}

