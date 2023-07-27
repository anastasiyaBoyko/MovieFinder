<script setup>
import { defineAsyncComponent } from 'vue'
import { useMoviesStore } from '../store/index'
import { useRouter } from 'vue-router'

const router = useRouter()

const moviesStore = useMoviesStore()
const Movie = defineAsyncComponent(() => import('../components/MovieItem.vue'))
</script>

<template>
    <el-main class="main">
        <h2>Search Results:</h2>
        <div class="movies-wrapper" v-if="!moviesStore.isLoading">
            <div v-if="moviesStore.searchList.length > 0">
                <Movie 
                    v-for="movie in moviesStore.searchList" 
                    :movie="movie" 
                    :key="movie.imdbID" />
            </div>
            <div v-else class="info-message">Sorry, we cant find any movies!</div>
        </div>
        <el-icon v-else class="loading"><Loading /></el-icon>
        <el-icon class="back-icon" @click="router.go(-1)"><ArrowLeftBold /></el-icon>
    </el-main>
</template>

<style lang="scss" scoped>
.loading {
    margin-bottom: 30px;
}

.info-message {
    margin-bottom: 50px;
}
</style>