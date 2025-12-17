<script setup lang="ts">
// function deleteAllNotes(): void {
//     localStorage.clear()
//     window.location.reload()
// }
const { item } = defineProps({
    item: String
})
</script>

<template>
    <section id="delete-modal">
        <article id="warning">
            <h5><b>Delete all notes</b></h5>
            <p>This action will erase all of your notes permanently. Continue?</p>
            <div id="option-btns">
                <button @click="$emit('cancel')">Back</button>
                <button class="btn btn-danger" @click="$emit('confirm')">Delete {{ item }}</button>
            </div>
        </article>
    </section>
</template>