<script>
export default {
    name: 'SideNav'
}
</script>

<template>
    <div id="side_nav" class="d-flex flex-column justify-content-between align-items-center p-1">
        <button class="p-0 border-0"> <font-awesome-icon :icon="['fas', 'ruler-combined']" size="xs" /></button>

        <button class="p-0 border-0"><font-awesome-icon :icon="['far', 'life-ring']" size="xs" /></button>

        <button class="p-0 border-0"><font-awesome-icon :icon="['fas', 'book']" size="xs" /></button>

        <button class="p-0 border-0"><font-awesome-icon :icon="['fas', 'cart-shopping']" size="xs" /></button>
    </div>

    <div id="go_up" class="d-flex align-items-center justify-content-center">
        <a href="#"><font-awesome-icon :icon="['fas', 'arrow-up']" /></a>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;

#side_nav {
    background-color: $white;
    position: fixed;
    top: calc(100vh / 4);
    right: 0;
    z-index: 100;
    box-shadow: 0px 0px 5px 0px $shady_lady;
    border-radius: 0.25rem;

    button {
        color: $gun_powder;
        background-color: $white;
    }

    button:active {
        scale: 0.90;
    }
}

#go_up {
    width: 50px;
    height: 50px;
    background-color: $jungle_green;
    position: fixed;
    bottom: 20px;
    right: 20px;
    border-radius: 50%;
    z-index: 100;

    a {
        color: $white;
        padding: 1rem;
    }
}
</style>