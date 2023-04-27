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

                    <form action="">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Enter your email"
                                aria-label="Enter your email" aria-describedby="basic-addon2">
                            <button class="input-group-text" id="basic-addon2">Subscribe</button>
                        </div>

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

    .input-group-text {
        background-color: $jungle_green;
        color: $white;
        font-weight: bold;
    }
}
</style>