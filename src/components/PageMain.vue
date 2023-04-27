<script>
import JumbotronVue from './JumbotronVue.vue';
import FeaturedCourses from './FeaturedCourses.vue';
import AccessTutoring from './AccessTutoring.vue';
import EnjoyCompanionship from './EnjoyCompanionship.vue';
import OurLearners from './OurLearners.vue';
import OurNumbers from './OurNumbers.vue';

export default {
    name: 'PageMain',
    components: {
        JumbotronVue,
        FeaturedCourses,
        AccessTutoring,
        EnjoyCompanionship,
        OurLearners,
        OurNumbers
    }
}
</script>

<template>
    <main>
        <JumbotronVue />
        <FeaturedCourses />
        <AccessTutoring />
        <EnjoyCompanionship />
        <OurLearners />
        <OurNumbers />
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;
</style>