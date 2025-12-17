<script setup lang="ts">
import type { RouterLink } from 'vue-router';

</script>

<template>
    <header>
        <nav>
            <a class="button" href="/">Color Notebook</a>
            <RouterLink to="/notes" id="laptop">
                <button>
                    My notes
                    <i class="fa-regular fa-note-sticky"></i>
                </button>
            </RouterLink>
            <RouterLink to="/notes" id="mobile">
                <button>
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