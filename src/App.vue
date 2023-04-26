<script>
import PageHeader from './components/PageHeader.vue';

export default {
    data() {
        return {

        }
    },
    components: {
        PageHeader
    }
}
</script>

<template>
    <PageHeader />
    <main class="debug">
        <section id="jumbotron">
            <div class="container">
                <div class="row">
                    <div class="col-5">
                        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit asperiores fugiat recusandae.
                        </p>
                    </div>
                    <div class="col-7">
                        IMG HERE
                    </div>
                </div>
                SERIE DI IMG
            </div>
        </section>
    </main>
    <footer></footer>
</template>

<style lang="scss">
.debug section {
    height: 600px;
}

.debug #jumbotron {
    background-color: aquamarine;
}



footer {
    height: 405px;
}
</style>