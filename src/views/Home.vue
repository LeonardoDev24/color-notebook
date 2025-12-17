<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <h1>Hello world!</h1>
  <p>This is a colorful notebook</p>
  <br>
  <div id="btns">
    <RouterLink to="/notes">
      <button>
        My notes
        <i class="fa-regular fa-note-sticky"></i>
      </button>
    </RouterLink>
    <RouterLink to="/new">
      <button class="navbar-btn">
        New
        <i class="fa-solid fa-file-pen"></i>
      </button>
    </RouterLink>
  </div>
</template>