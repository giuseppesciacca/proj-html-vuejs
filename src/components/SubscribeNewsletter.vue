<script>
export default {
    name: 'SubscribeNewsletter'
}
</script>

<template>
    <section id="subscribe" class="py-5 text-center d-flex flex-column justify-content-center">
        <div class="my_container">
            <div class="row justify-content-center">
                <div class="col-6">
                    <h2 class="p-3">Subscribe <span>Newsletters</span></h2>
                    <p class="p-3">Enter your email address to register to our newsletter subscription delibered on a
                        regular basis!
                    </p>

                    <form action="" class="position-relative">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Enter your email"
                                aria-label="Enter your email" aria-describedby="basic-addon2">
                            <button class="input-group-text" id="basic-addon2">Subscribe</button>
                        </div>

                        <img class="img_circle" src="../assets/img/maxcoach-shape-02.png" alt="">
                        <img class="img_square_rotate" src="../assets/img/maxcoach-shape-09.png" alt="">
                        <svg class="svg_circle" width="80" height="80">
                            <circle cx="30" cy="30" r="20" stroke="#8fd6ca" stroke-width="6" fill="white" />
                            Sorry, your browser does not support inline SVG.
                        </svg>
                    </form>
                </div>
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;

#subscribe {
    height: 405px;

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
        font-weight: bold;
    }

    .img_circle {
        position: absolute;
        bottom: 0;
        right: -250px;
        z-index: 1;
    }

    .svg_circle {
        position: absolute;
        bottom: 10px;
        left: -250px;
    }

    .img_square_rotate {
        position: absolute;
        bottom: 55px;
        right: -250px;
    }

    .input-group-text {
        background-color: $jungle_green;
        color: $white;
        font-weight: bold;
    }

    button:hover {
        background-color: #3f3a64;
    }
}
</style>