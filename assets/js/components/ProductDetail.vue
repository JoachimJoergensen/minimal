<template>
    <div class="product-detail-container">
        <div class="columns">
            <div class="column is-8">
                <figure class="product-list__item__product__image is-covered" v-if="product.images[0]">
                    <img :src="product.images[0].src" :alt="product.images[0].alt">
                </figure>
            </div>
            <div class="column is-4">
                product details
                <h4>{{ product.name }}</h4>
               <p v-html="product.short_description"></p>
               <button class="btn product-list__item__buy-product" @click="shuffle"> Læg produkt i kurven. </button>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapState } from 'vuex'

    export default {
        data() {
            return {
            }
        },
        computed: {
            ...mapState([
                'products'
            ])
        },
        created() {
            this.product = this.products.find(product => product.id === Number(this.$route.params.id));
        },
        methods: {
            shuffle() {
                console.log('clicked!');
            },
        }
    }
</script>