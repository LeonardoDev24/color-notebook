<script setup lang="ts">
import { ref, Teleport } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import loadNotes from '../utils/all-notes';
import type { NoteJSON } from '../models/note-model';
import DeleteModal from '../components/DeleteModal.vue';

const route = useRoute()
const router = useRouter()

const notes: NoteJSON[] = loadNotes()
const noteId = route.params.noteid

function loadThisNote(): NoteJSON {
    const thisNote: NoteJSON | undefined = notes.find(note => note._id === noteId)
    
    const voidNote: NoteJSON = {
        _id: "",
        title: "",
        body: "",
        createdAt: "",
        longDate: "",
        color: ""
    }

    if (!thisNote) {
        router.replace("/404")
        return voidNote
    }

    return thisNote
}

const thisNote: NoteJSON = loadThisNote()

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
        <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, atque ab. Sequi rem, ducimus eligendi,
            itaque suscipit dolor odio dolore quisquam tempora molestias laudantium alias minus sed commodi, aut
            voluptates?
        </h5>
    </section>
    <br>
    <div id="btns">
        <RouterLink to="">
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