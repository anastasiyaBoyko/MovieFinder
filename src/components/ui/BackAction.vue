<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
    <div @click="router.go(-1)" class="back-block">
        <el-icon class="back-icon"><ArrowLeftBold /></el-icon>
        Back
    </div>
</template>

<style lang="scss" scoped>
.back-block {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    width: 100px;
    margin: 0 auto;
}
</style>