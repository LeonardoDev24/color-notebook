<script setup lang="ts">
import type { RouterLink } from 'vue-router';

let notes = localStorage.length
</script>

<template>
    <h1>My notes</h1>
    <br>
    <section v-if="!notes" class="no-notes">
        <p>You don't have notes yet. Maybe start adding?</p>
        <RouterLink to="/new">
            <button>
                New
                <i class="fa-solid fa-file-pen"></i>
            </button>
        </RouterLink>
    </section>
    <section v-else>
        <h4>Yes you have notes here</h4>
    </section>
</template>