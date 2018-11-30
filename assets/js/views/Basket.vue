<template>
    <div>
        <section class="section basket is-medium">
            <h2 class="title basket is-3">Basket overview</h2>
            <ul class="basket-list columns is-multiline">
                {{ carts.length }}
                <li class="basket-list__item column is-12" v-for="cart in carts" :key="cart.id">
                    {{ cart.name }}
                </li>
            </ul>
        </section>
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
            'carts',
        ]),
    }
}
</script>