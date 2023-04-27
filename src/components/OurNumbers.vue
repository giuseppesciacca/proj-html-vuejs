<script>
export default {
    name: 'OurNumbers'
}
</script>

<template>
    <section id="our_numbers">
        <div class="my_container">
            <div class="row text-center">
                <div class="col-3 d-flex flex-column justify-content-center px-5">
                    <h4>Successfully trained</h4>
                    <p class="fs-1 fw-bold number">1790</p>
                    <p class="description">ENROLLED LEARNERS</p>
                </div>

                <div class="col-3 d-flex flex-column justify-content-center px-5">
                    <h4>Proudly Received</h4>
                    <p class="fs-1 fw-bold number">19</p>
                    <p class="description">COUNTRYWIDE AWARDS</p>
                </div>

                <div class="col-3 d-flex flex-column justify-content-center px-5">
                    <h4>Firmly Established</h4>
                    <p class="fs-1 fw-bold number">24</p>
                    <p class="description">LOCAL BRANCHES</p>
                </div>

                <div class="col-3 d-flex flex-column justify-content-center px-5">
                    <h4>Getting Featured on</h4>
                    <p class="fs-1 fw-bold number">1090</p>
                    <p class="description">BLOG POSTS</p>
                </div>

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;

.row:first-child {
    border-left: 1px solid $hint_of_red;
}

.col-3 {
    border-right: 1px solid $hint_of_red;
    height: 400px;

    h4 {
        color: $gun_powder;
        font-weight: bold;
    }

    .number {
        color: $jungle_green;
    }

    .description {
        color: $shady_lady;
        font-weight: bold;
    }
}
</style>