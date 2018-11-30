import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import createPersistedState from 'vuex-persistedstate';

import oauth from './oauth';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [],
        categories: [],
        carts: {},
    },
    actions: {
        async loadProducts({commit}){
            try {
                const request = {
                    url: `${window.location.origin}/wp-json/wc/v3/products`,
                    method: 'GET',
                };
                
                const auth = oauth.authorize(request);

                const json = await axios({
                  url: request.url,
                  method: request.method,
                  headers: {
                      Authorization: `OAuth oauth_consumer_key="${auth.oauth_consumer_key}" oauth_nonce="${auth.oauth_nonce}" oauth_signature="${auth.oauth_signature}" oauth_signature_method="${auth.oauth_signature_method}" oauth_timestamp="${auth.oauth_timestamp}" oauth_version="${auth.oauth_version}"`
                  },
                }); 
                commit('SET_PRODUCTS', json.data);
            } catch(error) {
                console.error(error);
            }
        },
        async loadCategories({commit}){
            try {
                const request = {
                    url: `${window.location.origin}/wp-json/wc/v3/products/categories`,
                    method: 'GET',
                };
                
                const auth = oauth.authorize(request);

                const json = await axios({
                  url: request.url,
                  method: request.method,
                  headers: {
                      Authorization: `OAuth oauth_consumer_key="${auth.oauth_consumer_key}" oauth_nonce="${auth.oauth_nonce}" oauth_signature="${auth.oauth_signature}" oauth_signature_method="${auth.oauth_signature_method}" oauth_timestamp="${auth.oauth_timestamp}" oauth_version="${auth.oauth_version}"`
                  },
                }); 
                commit('SET_CATEGORIES', json.data);
            } catch(error) {
                console.error(error);
            }
        },
    },
    mutations: {
        SET_PRODUCTS (state, products) {
            state.products = products;
        },
        SET_CATEGORIES (state, categories) {
            state.categories = categories;
        },
    },
    // plugins: [createPersistedState()],
});