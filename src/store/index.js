import { defineStore } from 'pinia'
import { ref } from 'vue'

const apiUrl = process.env.VUE_APP_API_URL
const apiKey = process.env.VUE_APP_API_KEY
const defaultQuery = 'all'

export const useMoviesStore = defineStore('movies', () => {
    const moviesList = ref([])
    const searchList = ref([])
    const isLoading = ref(false)

    async function getDefaultMovies() {
        isLoading.value = true
        const response = await fetch(`${apiUrl}?s=${defaultQuery}&apikey=${apiKey}`)
        const data = await response.json()
        if(data.Response == 'False') {
            console.error(data.Error)
            isLoading.value = false
        } else {
            moviesList.value = data.Search
            isLoading.value = false
        }
    }

    async function searchMovie(searchValue) {
        isLoading.value = true
        searchList.value = []
        const response = await fetch(`${apiUrl}?t=${searchValue}&apikey=${apiKey}`)
        const data = await response.json()
        if(data.Response == 'False') {
            console.error(data.Error)
            isLoading.value = false
        } else {
            searchList.value = [data]
            isLoading.value = false
        }
    }

    return {
        moviesList, getDefaultMovies,
        isLoading,
        searchMovie, searchList,
    }
})