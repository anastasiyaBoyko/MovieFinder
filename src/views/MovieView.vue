<script setup>
import {ref, onMounted, defineAsyncComponent} from 'vue'
import { useRoute } from 'vue-router'

const BackTo = defineAsyncComponent(() => import('../components/ui/BackAction.vue'))

const route = useRoute()

const title = ref(null)
const poster = ref(null)
const year = ref(null)

//Becouse api not work - need to change logic, make request to api - to get one movie Item
onMounted(() => {
    title.value = route.query.movieTitle
    poster.value = route.query.moviePoster
    year.value = route.query.movieYear
})
</script>

<template>
    <el-main class="main">
        <el-image :src="poster" lazy />
        <h1 class="title">{{title}}</h1>
        <span class="year">{{year}}</span>
        <BackTo />
    </el-main>
</template>

<style lang="scss" scoped>
.year {
    display: block;
    margin-bottom: 50px;
}
</style>
