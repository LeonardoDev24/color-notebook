<script setup lang="ts">
const { item } = defineProps({
    item: String
})

let message: string = ""

switch (item) {
    case "all":
        message = "all of your notes"
        break;
    case "note":
        message = "this note"
        break;
    default:
        message = "this"
        break;
}

</script>

<template>
    <section id="delete-modal">
        <article id="warning">
            <h5><b>Delete {{ item }}</b></h5>
            <p>This action will erase {{ message }} permanently. Continue?</p>
            <div id="option-btns">
                <button @click="$emit('cancel')">
                    <i class="fa-solid fa-arrow-left"></i>
                    Back
                </button>
                <button class="btn btn-danger" @click="$emit('confirm')">
                    Delete
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </article>
    </section>
</template>