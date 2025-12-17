<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import loadNotes from '../utils/all-notes';
import type { NoteJSON } from '../models/note-model';

const route = useRoute()
const router = useRouter()

const notes: NoteJSON[] = loadNotes()
const noteId = route.params.noteid
const thisNote: NoteJSON | undefined = notes.find(note => note._id === noteId)

if (!thisNote) {
    router.replace("/404")
}
</script>

<template>
    <section id="thisNote" :class="thisNote?.color">
        <h1>{{ thisNote?.title }}</h1>
        <p><i>{{ thisNote?.createdAt }}</i></p>
        <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, atque ab. Sequi rem, ducimus eligendi,
            itaque suscipit dolor odio dolore quisquam tempora molestias laudantium alias minus sed commodi, aut
            voluptates?
        </h5>
    </section>
</template>