<script>
export default {
    name: 'SideNav'
}
</script>

<template>
    <div id="side_nav" class="d-flex flex-column justify-content-between align-items-center p-1">
        <button class="btn p-0"> <font-awesome-icon :icon="['fas', 'ruler-combined']" size="xs" /></button>

        <button class="btn p-0"><font-awesome-icon :icon="['far', 'life-ring']" size="xs" /></button>

        <button class="btn p-0"><font-awesome-icon :icon="['fas', 'book']" size="xs" /></button>

        <button class="btn p-0"><font-awesome-icon :icon="['fas', 'cart-shopping']" size="xs" /></button>
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
    }
}
</style>