<script setup lang="ts">
import { ref, Teleport } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import loadNotes from '../utils/all-notes';
import { type NoteJSON, Note } from '../models/note-model';
import DeleteModal from '../components/DeleteModal.vue';

const route = useRoute()
const router = useRouter()

const notes: NoteJSON[] = loadNotes()
const noteId = route.params.noteid as string

const thisNote: NoteJSON = Note.searchNote(noteId,notes)

if (!thisNote._id) {
    router.replace("/404")
}

const showDelete = ref<boolean>(false)

function deleteNote(): void {
    localStorage.removeItem(thisNote._id)
    showDelete.value = false
    router.push("/notes")
}

const item: "all" | "note" = "note"

</script>

<template>
    <section id="thisNote" :class="thisNote.color">
        <h1>{{ thisNote.title }}</h1>
        <p><i>{{ thisNote.createdAt }}</i></p>
        <!-- <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, atque ab. Sequi rem, ducimus eligendi,
            itaque suscipit dolor odio dolore quisquam tempora molestias laudantium alias minus sed commodi, aut
            voluptates?
        </h5> -->
        <h5>{{ thisNote.body }}</h5>
    </section>
    <br>
    <div id="btns">
        <RouterLink :to="`/notes/${thisNote._id}/edit`">
            <button>
                Edit
                <i class="fa-solid fa-pencil"></i>
            </button>
        </RouterLink>
        <button class="btn btn-danger" @click="showDelete = true">
            Delete
            <i class="fa-solid fa-trash"></i>
        </button>
    </div>
    <Teleport to="#portal" v-if="showDelete">
        <DeleteModal
            :item="item"
            @cancel="showDelete = false"
            @confirm="deleteNote"/>
    </Teleport>
</template>