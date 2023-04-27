<script>
import ListFooter from './ListFooter.vue';
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
        ListFooter
    }
}
</script>

<template>
    <div class="row ">
        <div id="explore_menu" class="col-6">
            <h5 class="my-3">Explore</h5>
            <div class="d-flex">

                <ListFooter :array="explorePartOne" :src="explorePartOne.src" :text="explorePartOne.text" />

                <ListFooter :array="explorePartTwo" :src="explorePartOne.src" :text="explorePartOne.text" />

            </div>
        </div>

        <div id="information_menu" class="col-6">
            <h5 class="my-3">Information</h5>

            <ListFooter :array="informationLink" :src="explorePartOne.src" :text="explorePartOne.text" />
        </div>

    </div>
</template>

<style lang="scss" scoped></style>