<script setup lang="ts">
import type { RouterLink } from 'vue-router'
import loadNotes from '../utils/all-notes';
import type { NoteJSON } from '../models/note-model';

let totalNotes = localStorage.length
const notes: NoteJSON[] = loadNotes()

</script>

<template>
    <h1>My notes</h1>
    <section v-if="!totalNotes" class="no-notes">
        <p>You don't have notes yet. Maybe start adding?</p>
        <RouterLink to="/new">
            <button>
                New
                <i class="fa-solid fa-file-pen"></i>
            </button>
        </RouterLink>
    </section>
    <section v-else id="notes-container">
        <RouterLink to="/new" id="new-btn">
            <button class="navbar-btn">
                New
                <i class="fa-solid fa-file-pen"></i>
            </button>
        </RouterLink>
        <br>
        <br>
        <ol id="all-notes">
            <li v-for="note in notes" :class="`note ${note.color}`" :key="note._id">
                <RouterLink :to="`/notes/${note._id}`" class="note-link">
                    <article>
                        <div class="note-title">
                            <h4>{{ note.title }}</h4>
                            <small><i>{{ note.createdAt }}</i></small>
                        </div>
                        <!-- <p>{{ note.body }}</p> -->
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam officiis aliquam rem!
                            Vitae nesciunt atque laborum repellat. Quisquam, sunt a rem quaerat quod, illo magni neque
                            harum officia iste soluta.</p>
                    </article>
                </RouterLink>
            </li>
        </ol>
    </section>
</template>