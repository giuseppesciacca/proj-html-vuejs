<script>
import ListFooter from './ListFooter.vue';

export default {
    name: 'FooterLinks',
    data() {
        return {
            exploreLinksFirstPart: [
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
                }
            ],
            exploreLinksSecondPart: [
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
            <h5 class="my-3">Explore</h5>
            <div class="d-flex">

                <ListFooter :array="exploreLinksFirstPart" :src="exploreLinksFirstPart.src"
                    :text="exploreLinksFirstPart.text" />

                <ListFooter :array="exploreLinksSecondPart" :src="exploreLinksSecondPart.src"
                    :text="exploreLinksSecondPart.text" />

            </div>
        </div>

        <div id="information_menu" class="col-6">
            <h5 class="my-3">Information</h5>

            <ListFooter :array="informationLinks" :src="informationLinks.src" :text="informationLinks.text" />
        </div>

    </div>
</template>

<style lang="scss" scoped></style>