<script>
import menu from '../assets/data/menu.json'
import NavBar from './NavBar.vue';
export default {
    name: 'PageHeader',
    data() {
        return {
            menu
        }
    },
    components: {
        NavBar
    }
}
</script>

<template>
    <header>
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-auto">
                    <img class="img-fluid" src="../assets/img/dark-logo.png" width="160" alt="">
                </div>

                <div class="col-auto">
                    <NavBar :menu="menu" :name="menu.name" :links="menu.links" />
                </div>


            </div>
        </div>

    </header>
</template>

<style lang="scss" scoped>
header {
    height: 80px;
}
</style>