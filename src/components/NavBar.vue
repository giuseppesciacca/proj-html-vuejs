<script>
export default {
    name: 'NavBar',
    props: {
        menu: Array,
        name: String,
        links: Array,
    }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul v-for="item in menu" class=" navbar-nav me-auto mb-2 mb-lg-0">

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            {{ item.name }}
                        </a>
                        <ul class="dropdown-menu">
                            <li v-for="link in item.links"><a class="dropdown-item" href="#">{{ link }}</a></li>
                        </ul>
                    </li>
                </ul>

                <button class="btn"><font-awesome-icon :icon="['far', 'circle-user']" size="sm" /></button>

                <form class="input-group d-flex" role="search">
                    <input id="field_search" class="form-control border-0" type="search" placeholder="Search..."
                        aria-label="Search">
                    <span class="input-group-text border-0" id="Search"><font-awesome-icon
                            :icon="['fas', 'magnifying-glass']" /></span>
                </form>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;

#field_search,
#Search {
    background-color: #f5f5f5;
}

#Search {
    color: $jungle_green;
}
</style>