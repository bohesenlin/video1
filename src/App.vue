<template>
    <div id="app">
        <!-- <keep-alive> -->
            <router-view />
        <!-- </keep-alive> -->
        <BtnView />
    </div>
</template>
<script>
import BtnView from './components/BtnView'
export default {
    components: {
        BtnView,
    },
}
</script>
<style>
.router-link-active {
  background-color: rgb(238, 238, 238);
}
</style>
