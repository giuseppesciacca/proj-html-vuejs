<script>
import LinkFooter from './LinkFooter.vue';
//data links
import explorePartOne from '../assets/data/exploreLink.json';
import explorePartTwo from '../assets/data/exploreLinkSecondPart.json';
import informationLink from '../assets/data/informationLinks.json';

export default {
    name: 'FooterLinks',
    data() {
        return {
            explorePartOne,
            explorePartTwo,
            informationLink
        }
    },
    components: {
        LinkFooter
    }
}
</script>

<template>
    <div class="row ">
        <div id="explore_menu" class="col-6">
            <h5 class="my-3">Explore</h5>
            <div class="d-flex">

                <LinkFooter :array="explorePartOne" :src="explorePartOne.src" :text="explorePartOne.text" />

                <LinkFooter :array="explorePartTwo" :src="explorePartOne.src" :text="explorePartOne.text" />

            </div>
        </div>

        <div id="information_menu" class="col-6">
            <h5 class="my-3">Information</h5>

            <LinkFooter :array="informationLink" :src="explorePartOne.src" :text="explorePartOne.text" />
        </div>

    </div>
</template>

<style lang="scss" scoped></style>