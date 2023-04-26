<script>
export default {
    name: 'LinkFooter',
    props: {
        array: Array,
        src: String,
        text: String,
    }
}
</script>

<template>
    <ul>
        <li v-for="link in array">
            <a :href="link.src">{{ link.text }}</a>
        </li>
    </ul>
</template>

<style lang="scss" scoped></style>