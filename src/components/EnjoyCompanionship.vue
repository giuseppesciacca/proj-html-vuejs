<script>
export default {
    name: 'EnjoyCompanionship'
}
</script>

<template>
    <section id="enjoy_companionship" class="pb-5">
        <div class="my_container">
            <div class="row">
                <div class="col-7 image position-relative">
                    <img class="img-fluid img_video" src="../assets/img/home-2-popup-video-poster.jpg" alt="">

                    <img class="img-fluid icon_youtube" src="../assets/img/icon-youtube-play.png" alt="">
                    <img class="img-fluid img_dot_circle" src="../assets/img/maxcoach-shape-05.png" alt="">
                    <img class="img-fluid img_dot_square" src="../assets/img/maxcoach-shape-07.png" alt="">

                </div>
                <div class="col-5 d-flex flex-column justify-content-center px-5">
                    <h6>GET STARDED <span>EFFORTLESSLY</span></h6>
                    <h2>Enjoy Our <br> <span>Companionship</span></h2>
                    <p>Sneek peek into what has in store for you on our online teaching and mentoring portal. Seek for some
                        hidden hints of early-bird rewards as well.</p>

                    <p><a href="#">Download free guidebook <font-awesome-icon :icon="['fas', 'arrow-right-long']" /></a></p>
                </div>
            </div>
        </div>
    </section>
    <svg class="wave-1hkxOo" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"
        preserveAspectRatio="none">
        <path class="wavePath-haxJK1 animationPaused-2hZ4IO"
            d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
            fill="currentColor">
        </path>
    </svg>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;

.col-7 {
    height: 600px;
}

h6 {
    color: $shady_lady;

    span {
        color: $gun_powder
    }
}

h2 {
    color: $gun_powder;
    font-weight: bold;

    span {
        color: $jungle_green;
        font-weight: normal;
    }
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

.img_video {
    position: relative;
    top: 65px;
    right: 0;
    z-index: 1;
    box-shadow: 0px 120px 50px -100px #d8d8d8;
}

.icon_youtube {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
}

.img_dot_circle {
    position: absolute;
    top: 90px;
    left: -65px;
}

.img_dot_square {
    position: absolute;
    bottom: -20px;
    right: 15px;
}

.wave-1hkxOo {
    color: $hint_of_red;
}
</style>