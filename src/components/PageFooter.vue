<script>
import FooterLinks from './FooterLinks.vue';

export default {
    name: 'PageFooter',
    components: {
        FooterLinks
    }
}
</script>

<template>
    <footer>
        <div class="my_container py-5">
            <div class="row">
                <div class="col-6">
                    <h5>Address</h5>
                    <p>382 NE 191st St # 87394 Miami, FL 33179- 3899</p>
                    <p>+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</p>
                    <a href="#">support@maxcoach.com</a>

                    <div>
                        <a href="#">FB</a>
                        <a href="#">TW</a>
                        <a href="#">IS</a>
                        <a href="#">LN</a>
                    </div>
                </div>

                <div class="col-6">
                    <FooterLinks />
                </div>
            </div>
        </div>

        <p class="text-center credits">C 2020 Maxcoach. All Rights Reserved</p>
    </footer>
</template>

<style lang="scss">
@use '../assets/scss/partials/variables.scss' as *;

footer {
    height: 405px;
    background-color: $hint_of_red;

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    h5 {
        color: $cod_gray;
        font-weight: 600;
    }

    a,
    p {
        color: $edward;
        font-weight: 600;
    }

    .credits {
        color: $shady_lady;
    }
}
</style>