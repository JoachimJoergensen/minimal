<template>
    <section class="product-overview">
        <h1 class="title is-1">Product Page</h1>
        <ul class="product-list columns is-multiline">
            <li class="product-list__item column is-4" v-for="product in products" :key="product.id">
                <app-product :product="product" />
            </li>   
        </ul>
    </section>
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
                'products',
            ])
        }
    }
</script>
