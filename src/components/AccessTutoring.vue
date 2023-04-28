<script>
export default {
    name: 'AccessTutoring'

}
</script>

<template>
    <section id="access_tutoring" class="py-5 text-center">
        <div class="my_container">
            <h6 class="fw-semibold">MAXCOACH AVAIBLE COURSES</h6>
            <h2>Access <span>Smart Tutoring</span> Program For Benefits.</h2>

            <div class="row text-start justify-content-center py-5 g-3">
                <div class="col-4 p-3">
                    <img class="img-fluid" src="/public/img/home-2-image-box-01.png" alt="">
                    <h4 class="py-3">Customize Preferences</h4>
                    <p>Learners are given the right arrange and customize their study schedule and timetable based on
                        preferences.</p>

                    <p><a href="#">Start here <font-awesome-icon :icon="['fas', 'arrow-right-long']" /></a></p>
                </div>
                <!-- /card -->

                <div class="col-4 p-3">
                    <img class="img-fluid" src="/public/img/home-2-image-box-02.png" alt="">
                    <h4 class="py-3">Cloud Storage</h4>
                    <p>You can store online lessons via online cloud or download to your device and revise lessons on the
                        way.</p>

                    <p><a href="#">Get Free Quote <font-awesome-icon :icon="['fas', 'arrow-right-long']" /></a></p>
                </div>
                <!-- /card -->

                <div class="col-4 p-3">
                    <img class="img-fluid" src="/public/img/home-2-image-box-03.png" alt="">
                    <h4 class="py-3">Multimedia Channels</h4>
                    <p>We provide study materials with various formats: video, audio, slides, doc, prints, books and
                        applications.</p>

                    <p><a href="#">Start now <font-awesome-icon :icon="['fas', 'arrow-right-long']" /></a></p>
                </div>
                <!-- /card -->

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;

h6,
p {
    color: $shady_lady;
}

h2,
h4 {
    color: $gun_powder;
    font-weight: bold;

    span {
        color: $jungle_green;
        font-weight: normal;
    }
}

a {
    text-decoration: none;
    color: $edward;
    font-weight: bold;
}
</style>