<script setup lang="ts">
import type { RouterLink } from 'vue-router';

</script>

<template>
    <header>
        <nav>
            <a class="btn" href="/">Color Notebook</a>
            <RouterLink to="/new">
                <button class="navbar-btn">
                    New
                    <i class="fa-solid fa-file-pen"></i>
                </button>
            </RouterLink>
        </nav>
    </header>

    <slot></slot>

    <footer>
        <small>Created with Vue</small>
    </footer>
</template>