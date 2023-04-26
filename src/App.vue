<script>
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';


export default {
    components: {
        PageHeader,
        PageMain
    }
}
</script>

<template>
    <PageHeader />

    <PageMain />


    <footer></footer>
</template>

<style lang="scss">
.my_container {
    max-width: 1200px;
    margin: auto;
}

footer {
    height: 405px;
}
</style>