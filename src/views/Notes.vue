<script setup lang="ts">
import type { RouterLink } from 'vue-router'
import { type NoteJSON } from '../models/note-model';

let totalNotes = localStorage.length

function sortByDate(a: NoteJSON, b: NoteJSON): number {
    return b.longDate.localeCompare(a.longDate)
}

const notes: NoteJSON[] = Object.keys(localStorage) // Array of localStorage keys
    .map(key => localStorage.getItem(key)) // Array of localStorage items
    .filter(value => value !== null) // Erase nulls
    .map(note => JSON.parse(note)) // Return notes interface
    .sort(sortByDate)

</script>

<template>
    <h1>My notes</h1>
    <br>
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
        <ol id="all-notes">
            <li v-for="note in notes" :class="`note ${note.color}`" :key="note._id">
                <a :href="`/${note.title}`" class="note-link">
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
                </a>
            </li>
        </ol>
    </section>
</template>