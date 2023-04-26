<script>
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
import PageFooter from './components/PageFooter.vue';


export default {
    components: {
        PageHeader,
        PageMain,
        PageFooter
    }
}
</script>

<template>
    <PageHeader />

    <PageMain />

    <PageFooter />
</template>

<style lang="scss">
.my_container {
    max-width: 1200px;
    margin: auto;
}
</style>