<script>
import JumbotronVue from './JumbotronVue.vue';
import FeaturedCourses from './FeaturedCourses.vue';
import AccessTutoring from './AccessTutoring.vue';
import EnjoyCompanionship from './EnjoyCompanionship.vue';
import OurLerners from './OurLerners.vue';

export default {
    name: 'PageMain',
    components: {
        JumbotronVue,
        FeaturedCourses,
        AccessTutoring,
        EnjoyCompanionship,
        OurLerners,
    }
}
</script>

<template>
    <main>
        <JumbotronVue />
        <FeaturedCourses />
        <AccessTutoring />
        <EnjoyCompanionship />
        <OurLerners />
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;
</style>