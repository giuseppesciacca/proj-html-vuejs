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

                    <div class="my-3 icon_social">
                        <a href="#" class="me-4 fb">
                            <font-awesome-icon :icon="['fab', 'square-facebook']" size="xl" />
                        </a>
                        <a href="#" class="me-4 tw">
                            <font-awesome-icon :icon="['fab', 'twitter']" size="xl" />
                        </a>
                        <a href="#" class="me-4 ist">
                            <font-awesome-icon :icon="['fab', 'instagram']" size="xl" />
                        </a>
                        <a href="#" class="me-4 lin">
                            <font-awesome-icon :icon="['fab', 'linkedin']" size="xl" />
                        </a>
                    </div>
                </div>

                <div class="col-6">
                    <FooterLinks />
                </div>
            </div>
        </div>

        <p class="text-center credits"><font-awesome-icon :icon="['far', 'copyright']" /> 2020 Maxcoach. All Rights Reserved
        </p>
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

    a:hover {
        color: $gun_powder;
        text-decoration: underline;
    }

    .icon_social {
        .fb:hover {
            color: #1873eb;
        }

        .tw:hover {
            color: #1c96e9;
        }

        .ist:hover {
            color: #f6086c;
        }

        .lin:hover {
            color: #0073b1;
        }
    }

    ul {
        list-style: none;
    }

    h5 {
        color: $cod_gray;
    }

    a,
    p {
        color: $edward;
    }

    .credits {
        color: $shady_lady;
    }
}
</style>