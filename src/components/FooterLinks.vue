<script>
import ListFooter from './ListFooter.vue';

export default {
    name: 'FooterLinks',
    data() {
        return {
            exploreLinks: [
                {
                    "text": "Start here",
                    "src": "#"
                },
                {
                    "text": "Blog",
                    "src": "#"
                },
                {
                    "text": "About us",
                    "src": "#"
                },
                {
                    "text": "Success story",
                    "src": "#"
                },
                {
                    "text": "Courses",
                    "src": "#"
                },
                {
                    "text": "Contact us",
                    "src": "#"
                }
            ],
            informationLinks: [
                {
                    "text": "Membership",
                    "src": "#"
                },
                {
                    "text": "Purchase guide",
                    "src": "#"
                },
                {
                    "text": "Privacy policy",
                    "src": "#"
                },
                {
                    "text": "Terms of services",
                    "src": "#"
                }
            ]
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
            <h5 class="my-3 ms-3">Explore</h5>
            <div class="d-flex">

                <ListFooter class="explore_list" :array="exploreLinks" :src="exploreLinks.src" :text="exploreLinks.text" />

            </div>
        </div>

        <div id="information_menu" class="col-6">
            <h5 class="my-3">Information</h5>

            <ListFooter :array="informationLinks" :src="informationLinks.src" :text="informationLinks.text" />
        </div>

    </div>
</template>

<style lang="scss">
.explore_list {
    columns: 2;
    margin-left: 1rem;
}
</style>