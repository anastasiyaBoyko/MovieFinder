<script setup>
import { defineAsyncComponent, onMounted } from 'vue'
import { useMoviesStore } from '../store/index'

const moviesStore = useMoviesStore()

const Search = defineAsyncComponent(() => import('../components/SearchItem.vue'))
const Movie = defineAsyncComponent(() => import('../components/MovieItem.vue'))

onMounted(() => {
    moviesStore.getDefaultMovies()
})
</script>

<template>
    <el-main class="main">
        <Search />
        <div class="movies-wrapper" v-if="!moviesStore.isLoading">
            <Movie 
                v-for="movie in moviesStore.moviesList" 
                :movie="movie" 
                :key="movie.imdbID" />
        </div>
        <el-icon v-else class="loading"><Loading /></el-icon>
    </el-main>
</template>

<style lang="scss" scoped>
.movies-wrapper {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: space-around;
}
</style>