<template>
  <main class="page error-page">
    <header style="text-align: center; margin-bottom: 1rem">
      <h1 v-if="error.statusCode === 404">Oops... Có vẻ như bạn đã bị lạc</h1>
      <h1 v-else>Một lỗi xảy ra</h1>
    </header>
    <div class="img-wrapper" style="display: flex; justify-content: center">
      <img src="~/assets/images/error.gif" alt="Đứa trẻ lúng túng nhìn bạn" />
    </div>
  </main>
</template>

<script>
export default {
  props: ['error'],
}
</script>

<style></style>
