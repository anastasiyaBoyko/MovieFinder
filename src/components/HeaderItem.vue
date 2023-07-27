<script setup>

</script>

<template>
    <el-header class="header">
        <el-icon class="header__icon" @click="$router.push('/')"><House /></el-icon>
        <div class="header__main" @click="$router.push('/')">
            <div class="header__logo">
                <img src="../assets/logo.png" alt="logo" />
            </div>
            <p>Movie Founder</p>
        </div>
    </el-header>
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;

    width: 100%;
    max-width: 100%;

    background-color: rgba(128, 128, 128, 0.373);

    &__main {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;

        width: 100%;
        max-width: 100%;
        cursor: pointer;
    }

    &__icon {
        display: inline-block;
        width: 20px;
        height: 20px;

        margin-right: 30px;
        padding-left: 20px;
        cursor: pointer;
    }

    &__logo {
        width: 50px;
        height: 50px;

        margin-right: 20px;

        img {
            width: 100%;
            max-width: 100%;
        }
    }
}
</style>