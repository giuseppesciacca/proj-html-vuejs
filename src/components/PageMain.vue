<script>
import JumbotronVue from './JumbotronVue.vue';
import FeaturedCourses from './FeaturedCourses.vue';

export default {
    name: 'PageMain',
    components: {
        JumbotronVue,
        FeaturedCourses
    }
}
</script>

<template>
    <main>
        <JumbotronVue />
        <FeaturedCourses />


    </main>
</template>

<style lang="scss" scoped></style>