<script setup>
import {ref, onMounted} from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const title = ref(null)
const poster = ref(null)

onMounted(() => {
    title.value = route.query.movieTitle
    poster.value = route.query.moviePoster
})
</script>

<template>
    <el-main class="main">
        <el-image :src="poster" lazy />
        <h1 class="title">{{title}}</h1>
        <el-icon class="back-icon" @click="router.go(-1)"><ArrowLeftBold /></el-icon>
    </el-main>
</template>

<style lang="scss" scoped>

.title {
    margin-bottom: 50px;
}
</style>