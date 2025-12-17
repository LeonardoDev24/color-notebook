<script setup lang="ts">
import type { RouterLink } from 'vue-router';

</script>

<template>
    <header>
        <nav>
            <a class="btn" href="/">Color Notebook</a>
            <RouterLink to="/notes">
                <button>
                    My notes
                    <i class="fa-regular fa-note-sticky"></i>
                </button>
            </RouterLink>
        </nav>
    </header>

    <slot></slot>

    <footer>
        <small>Created with Vue</small>
    </footer>
</template>