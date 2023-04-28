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
                    "src": "#most_viewed"
                },
                {
                    "text": "About us",
                    "src": "#access_tutoring"
                },
                {
                    "text": "Success story",
                    "src": "#our_learners"
                },
                {
                    "text": "Courses",
                    "src": "#featured_online_courses"
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
            <h5 class="my-3 ms-1">Explore</h5>
            <div class="d-flex">

                <ListFooter class="explore_list ms-1" :array="exploreLinks" :src="exploreLinks.src"
                    :text="exploreLinks.text" />

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
}
</style>