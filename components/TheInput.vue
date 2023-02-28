<template>
    <div class="ag-popup-form_row"
        :class="`ag-popup-form_row__${modifier} ${status}`"
        :status="success"
    >
        <input class="ag-popup-form_input ag-popup-form_input__icon"
         :type="type"
         :name="name"
         :placeholder="placeholder"
         :value="value"
        />


        <TheUseIcon v-if="status === 'success'" name="check" />

        <TheUseIcon v-if="status === 'error'" name="clear" />

        <TheUseIcon v-if="type === 'password'" name="eye" />

        <div v-if="status === 'error'" class="ag-popup-form_error">
            {{ errortext }}
        </div>
    </div>
</template>

<script setup>
const props = defineProps ({
    type: String,
    name: String,
    placeholder: String,
    type: String,
    value: String,
    status: String,
    modifier: String,
    errortext: String,
})
</script>