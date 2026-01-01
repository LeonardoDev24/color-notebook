<script setup lang="ts">
    import { useRouter } from 'vue-router'
    import { Note, type NoteJSON } from '../models/note-model'
    import { ref, Teleport } from 'vue'
    import InfoModal from './InfoModal.vue'
    const router = useRouter()
    const { note } = defineProps<{ note: NoteJSON }>()
    
    let isEditing: boolean = false

    if (note._id) {
        isEditing = true
    } else {
        isEditing = false
    }

    const textPlaceholder = "Wetness is the liquid's ability to maintain contact with a solid surface, meaning that water itself is not wet \nSource: BBC Science Focus"
    const colors: string[] = ["Red","Orange","Yellow","Green","Blue","Purple"]
    let title = ref<string>(note.title)
    let body = ref<string>(note.body)
    let selectedColor = ref<string>(note.color)

    let anyVoidInputs = ref<boolean>(false)

    function addNote(): void {
        const newNote = new Note(title.value,body.value,selectedColor.value)
        newNote.save()
    }

    function editNote() {
        note.title = title.value
        note.body = body.value
        note.color = selectedColor.value

        localStorage.setItem(note._id,JSON.stringify(note))
    }

    function handleSubmit(e: SubmitEvent): void {
        e.preventDefault()

        if (!title.value || !body.value || !selectedColor.value) {
            anyVoidInputs.value = true
            return
        }

        if (isEditing) {
            editNote()
        } else {
            addNote()
        }
        router.push("/notes")
    }

    function deleteAll(): void {
        title.value = ""
        body.value = ""
        selectedColor.value = ""
    }
</script>

<template>
    <form action="/notes" @submit="handleSubmit">
        <label for="title"><h5>Title</h5></label>
        <input type="text" name="title" id="title"
            placeholder="Water might not be wet" v-model="title" required>
        <br>
        <label for="body"><h5>Description</h5></label>
        <textarea name="body" id="body" :placeholder="textPlaceholder" required
            v-model="body"></textarea>
        <br>
        <h5>Color</h5>
        <div id="colors">
            <div v-for="color in colors">
                <input type="radio" name="color" :id="color" :value="color" v-model="selectedColor">
                <label :for="color" :class="color">
                    <span>{{ color }}</span>
                </label>
            </div>
        </div>
        <br>
        <div id="formButtons">
            <button type="reset" @click="deleteAll">
                Clean
                <i class="fa-solid fa-arrow-rotate-left"></i>
            </button>
            <button>
                Save
                <i class="fa-regular fa-floppy-disk"></i>
            </button>
        </div>
    </form>

    <Teleport to="#portal" v-if="anyVoidInputs">
        <InfoModal @close="anyVoidInputs = false"/>
    </Teleport>
</template>