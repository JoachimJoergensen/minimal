<template>
    <nav class="app__header__navigation navbar" role="navigation" aria-label="main navigation">
        <div class="app__header__navbar-brand navbar-brand">
            <router-link class="navbar-item is-uppercase" :to="'/'">Minimal</router-link>
            <span class="navbar-burger burger" data-target="navMenu">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </div>

        <div id="navMenu" class="navbar-menu">
            <div class="navbar-end">
                <router-link class="navbar-item" :to="'/'">Home</router-link>
                <router-link class="navbar-item" :to="'/products'">Product</router-link>
                <router-link class="navbar-item" :to="'/basket'">Basket ({{ carts.length }})</router-link>
            </div>            
        </div>
    </nav>
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