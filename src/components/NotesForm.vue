<script setup lang="ts">
    const textPlaceholder = "Wetness is the liquid's ability to maintain contact with a solid surface, meaning that water itself is not wet \nSource: BBC Science Focus"
    function addNote(e: SubmitEvent): void {
        e.preventDefault()
        const form = e.target
        console.log(form)
    }
</script>

<template>
    <form action="/notes" @submit="addNote">
        <label for="title"><h5>Title</h5></label>
        <input type="text" name="title" id="title" placeholder="Water might not be wet">
        <br>
        <label for="body"><h5>Description</h5></label>
        <textarea name="body" id="body" :placeholder="textPlaceholder"></textarea>
        <br>
        <div id="formButtons">
            <button type="reset">
                Clean
                <i class="fa-solid fa-arrow-rotate-left"></i>
            </button>
            <button>
                Save
                <i class="fa-regular fa-floppy-disk"></i>
            </button>
        </div>
    </form>
</template>