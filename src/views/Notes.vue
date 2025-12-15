<script setup lang="ts">
import type { RouterLink } from 'vue-router'
import { type NoteJSON } from '../models/note-model';

let totalNotes = localStorage.length
// let notes: NoteJSON[] = []

// for (const key in localStorage) {
//     const value = localStorage.getItem(key)

//     if (!value) continue

//     const note: NoteJSON = JSON.parse(value)
//     notes.push(note)
// }

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
    <section v-else class="notes-container">
        <article v-for="note in notes" class="note">
            <h1>{{ note.title }}</h1>
            <small>{{ note.createdAt }}</small>
            <p>{{ note.body }}</p>
        </article>
    </section>
</template>