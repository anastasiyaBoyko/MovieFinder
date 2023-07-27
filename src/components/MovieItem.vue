import { default } from '../App.vue';
<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
    movie: {
        type: Object,
        required: true,
        default:() => {}
    }
})

const toMoviePage = () => {
    router.push({
        name: 'movie',
        query: {
            movieTitle: props.movie.Title,
            moviePoster: props.movie.Poster
        }
    })
}
</script>

<template>
    <div class="movie-card">
      <el-row class="movie-card__inner">
        <el-col :span="8">
          <el-card :body-style="{ padding: '0px' }">
            <img
              :src="props.movie?.Poster"
              class="image" alt="poster"
            />
            <div class="movie-card__info" style="padding: 14px">
              <span>{{props.movie?.Title}}</span>
              <div class="bottom">
                <el-button text class="button movie-card__action" @click="toMoviePage">See more</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>   
    </div>
</template>

<style lang="scss">
.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}

.movie-card {
    width: 20%;
    max-width: 20%;

    height: 290px;
    max-height: 290px;

    &__inner img {
        width: 100%;
        max-width: 100%;
        height: 200px;
        max-height: 200px;

        object-fit: contain;
    }

    &__info {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
    }

    &__action {
        cursor: pointer;
    }
}
</style>