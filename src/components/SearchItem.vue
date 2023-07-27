<script setup>
import {ref} from 'vue'
import { useMoviesStore } from '../store/index'
import { useRouter } from 'vue-router'

const router = useRouter()
const moviesStore = useMoviesStore()
const searchValue = ref('')

function startSearch() {
    if(searchValue.value.length > 0) {
        moviesStore.searchMovie(searchValue.value)
        router.push('/results')
    }
    else router.push('/')
}
</script>

<template>
    <div class="search">
        <el-input v-model="searchValue" v-debounce:1000ms="startSearch" placeholder="Please input" />
    </div>
</template>

<style lang="scss" scoped>
.search {
    margin-bottom: 50px;
}
</style>