<?php get_header(); ?>

<div id="app" class="container is-narrow">
    <header class="app__header">
        <app-header-nav />
    </header>

    <main class="app__content">
        <router-view><router-view/>
    </main>

    <footer class="app__footer">         
        
    </footer>
</div>

<?php get_footer(); ?>