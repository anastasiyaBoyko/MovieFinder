<script setup>
import { defineAsyncComponent } from 'vue'
import { useMoviesStore } from '../store/index'

const moviesStore = useMoviesStore()
const Movie = defineAsyncComponent(() => import('../components/MovieItem.vue'))
const BackTo = defineAsyncComponent(() => import('../components/ui/BackAction.vue'))
</script>

<template>
    <el-main class="main">
        <h2>Search Results:</h2>
        <div class="movies-wrapper" v-if="!moviesStore.isLoading">
            <el-carousel indicator-position="outside" v-if="moviesStore.searchList.length > 0" height="400px">
                <el-carousel-item  v-for="movie in moviesStore.searchList"  :key="movie">
                    <Movie class="carousel-item"
                        :movie="movie" 
                        :key="movie.imdbID" />
                </el-carousel-item>
            </el-carousel>
            <div v-else class="info-message">Sorry, we cant find any movies!</div>
        </div>
        <el-icon v-else class="loading"><Loading /></el-icon>
       <BackTo />
    </el-main>
</template>

<style lang="scss" scoped>
.loading {
    margin-bottom: 30px;
}

.info-message {
    margin-bottom: 50px;
}

.carousel-item {
    margin: 0 auto;
}

.movies-wrapper {
    margin-bottom: 50px;
}
</style>