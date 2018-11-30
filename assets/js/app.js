import 'babel-polyfill';
import '../scss/app.scss';
import Vue from 'vue';
import router from './router/index';
import store from './store/index';
import VueCarousel from 'vue-carousel';
import Nav from './components/Nav.vue';
import FooterNav from './components/FooterNav.vue';
import Product from './components/Product.vue';
import ProductDetail from './components/ProductDetail.vue';

Vue.use(VueCarousel);
Vue.component('app-header-nav', Nav);
Vue.component('app-footer-nav', FooterNav);
Vue.component('app-product', Product);
Vue.component('app-product-detail', ProductDetail);

new Vue({
	el: '#app',
	store,
	router,
	mounted() {
		this.$store.dispatch('loadProducts');
		this.$store.dispatch('loadCategories');
	},
});