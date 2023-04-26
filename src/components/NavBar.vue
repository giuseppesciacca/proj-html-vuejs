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

                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search..." aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped></style>