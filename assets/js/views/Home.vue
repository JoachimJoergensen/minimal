<template>
    <div class="app__content__homepage">
        
        <section class="section offer is-medium">
            <!-- <app-offer /> -->
            <carousel :perPage="1" autoplay loop v-if="featuredProducts">
                <slide v-for="product in featuredProducts" :key="product.id" :style="{ 'background-image': 'url(' + product.images[0].src + ')' }" v-if="product.images[0]">
                    <h2 class="">asd</h2>
                </slide>
            </carousel>  
        </section><!-- End of offer section -->

        <section class="section is-medium">
            <h3 class="title is-5">Products</h3>
            <ul class="product-list columns is-multiline">
                <li class="product-list__item column is-4" v-for="product in products.slice(0,3)" :key="product.id">
                    <app-product :product="product" />
                </li>   
            </ul>
        </section><!-- End of products section -->

        <section class="section is-medium">
            <h3 class="title is-4">Categories</h3>
            <ul class="categories-list columns is-multiline" v-if="categories">
                <li class="categories-list__item column is-4" v-for="category in categories.slice(0, 3)" :key="category.id">
                    <figure v-if="category.image">
                        <img :src="category.image.src" :alt="category.image.alt">
                    </figure>
                    {{ category.name }}           
                </li>
            </ul>

        </section><!-- End of categories section -->

        <section class="section is-medium">
            <h3 class="title is-4">We are delevering to the whole world!</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsa accusantium alias ex, assumenda inventore. Ipsam voluptatem, quia, mollitia sed facere quod reiciendis repellat, ullam laboriosam velit ex doloribus quibusdam!</p>
        </section><!-- End of about section -->
    </div>
</template>

<script>
    
    import { mapState } from 'vuex'

    export default {
         data() {
            return {
                featuredProducts: [],
            }
        },
        computed: {
            ...mapState([
                'products',
                'categories',
                'carts',
            ])
        },
        created() {
            this.featuredProducts = this.products.filter(product => product.featured);
        }
    }
</script>

