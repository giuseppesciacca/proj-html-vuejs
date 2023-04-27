<script>
import JumbotronVue from './JumbotronVue.vue';
import FeaturedCourses from './FeaturedCourses.vue';
import AccessTutoring from './AccessTutoring.vue';

export default {
    name: 'PageMain',
    components: {
        JumbotronVue,
        FeaturedCourses,
        AccessTutoring,
    }
}
</script>

<template>
    <main>
        <JumbotronVue />
        <FeaturedCourses />
        <AccessTutoring />
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;
</style>