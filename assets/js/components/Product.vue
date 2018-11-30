<template>
    <router-link class="product-list__item__product" :to="{ name: 'product', params: { id: product.id }}">
        <figure class="product-list__item__product__image is-covered" v-if="product.images[0]">
            <img :src="product.images[0].src" alt="">
        </figure>
        <h4 class="product-list__item__product__price">{{ product.name }}</h4>
        <p class="product-list__item__product__description"> {{ product.price }} </p>
    </router-link>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        props: {
            product: {
                type: Object,
                required: true,
            },
        },
    }
</script>