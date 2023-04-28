<script>
import JumbotronVue from './JumbotronVue.vue';
import SideNav from './SideNav.vue';
import FeaturedCourses from './FeaturedCourses.vue';
import AccessTutoring from './AccessTutoring.vue';
import EnjoyCompanionship from './EnjoyCompanionship.vue';
import OurLearners from './OurLearners.vue';
import OurNumbers from './OurNumbers.vue';
import MostViewed from './MostViewed.vue';
import SubscribeNewsletter from './SubscribeNewsletter.vue';

export default {
    name: 'PageMain',
    components: {
        JumbotronVue,
        SideNav,
        FeaturedCourses,
        AccessTutoring,
        EnjoyCompanionship,
        OurLearners,
        OurNumbers,
        MostViewed,
        SubscribeNewsletter
    }
}
</script>

<template>
    <main>
        <SideNav />
        <JumbotronVue />
        <FeaturedCourses />
        <AccessTutoring />
        <EnjoyCompanionship />
        <OurLearners />
        <OurNumbers />
        <MostViewed />
        <SubscribeNewsletter />
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;
</style>