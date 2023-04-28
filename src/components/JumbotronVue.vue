<script>
export default {
    name: 'JumbotronVue'
}
</script>

<template>
    <section id="jumbotron">
        <div class="my_container">
            <div class="row justify-content-center align-content-center">

                <div class="col-5 d-flex flex-column justify-content-center">
                    <h1 class="fw-bold">Distant learning for further expansion</h1>
                    <p>Learning is a life-long journey that in fact we never find the terminate stop. Stop searching,
                        enjoy the process.
                    </p>
                    <button class="btn">
                        <font-awesome-icon :icon="['fas', 'download']" /> Download free guide </button>
                    <p class="pt-3">Have questions? <a href="#">Get Free Sample <font-awesome-icon
                                :icon="['fas', 'arrow-right-long']" /></a></p>
                </div>

                <div class="col-7 image position-relative">
                    <img class="img-fluid img_main"
                        src="../assets/img/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg" alt="">

                    <img class="img-fluid img_circle" src="../assets/img/maxcoach-shape-02.png" alt="">
                    <img class="img-fluid img_dot3" src="../assets/img/maxcoach-shape-07.png" alt="">

                    <img class="img-fluid img_dot1" src="../assets/img/maxcoach-shape-08.png" alt="">
                    <img class="img-fluid img_dot2" src="../assets/img/maxcoach-shape-08.png" alt="">

                    <svg class="circle_svg" width="80" height="80">
                        <circle cx="40" cy="40" r="30" stroke="#ecc5ab" stroke-width="8" fill="white" />
                    </svg>
                </div>

                <div class="col d-flex justify-content-center align-items-center">
                    <img src="../assets/img/client-logo-01.png" alt="">
                </div>
                <div class="col d-flex justify-content-center align-items-center">
                    <img src="../assets/img/client-logo-02.png" alt="">
                </div>
                <div class="col d-flex justify-content-center align-items-center">
                    <img src="../assets/img/client-logo-03.png" alt="">
                </div>
                <div class="col d-flex justify-content-center align-items-center">
                    <img src="../assets/img/client-logo-04.png" alt="">
                </div>
                <div class="col d-flex justify-content-center align-items-center">
                    <img src="../assets/img/client-logo-05.png" alt="">
                </div>
                <div class="col d-flex justify-content-center align-items-center">
                    <img src="../assets/img/client-logo-06.png" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;

#jumbotron {
    height: 840px;

    h1 {
        color: $gun_powder;
    }

    p {
        color: $shady_lady;

        a {
            color: $jungle_green;
            font-weight: bold;
            text-decoration: none;
            border-bottom: 1px solid $shady_lady;
        }

        a:hover {
            color: #3f3a64;
        }
    }

    .btn {
        width: 260px;
        height: 50px;
        font-weight: bold;
        background-color: $jungle_green;
        color: $white;
    }

    .btn:hover {
        background-color: #3f3a64;
    }

    .image {
        height: 700px;

        .img_main {
            width: 570px;
            height: 570px;
            border-radius: 50%;
            position: absolute;
            top: 130px;
            right: 0;
            z-index: 1;
        }

        .img_dot1 {
            position: absolute;
            top: 275px;
            left: 60px;
        }

        .img_dot2 {
            position: absolute;
            top: 420px;
            left: 60px;
        }

        .img_dot3 {
            position: absolute;
            bottom: 10px;
            right: 70px;
        }

        .img_circle {
            position: absolute;
            top: 250px;
            left: 100%;
        }

        .circle_svg {
            position: absolute;
            bottom: 148px;
            left: 85px;
            z-index: -1;
        }
    }
}
</style>