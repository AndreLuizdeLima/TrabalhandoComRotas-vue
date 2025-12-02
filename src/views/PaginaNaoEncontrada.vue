<template>
  <div class="container">
    <div class="card">
      <h2 class="card-title">404 Error...</h2>
      <h5 class="card-title">-_- Opsss. Essa Página não foi encontrada!</h5>
      <br>
      <router-link class="btn btn-primary" to="/">Voltar</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaginaNaoEncontrada'
}
</script>

<style scoped>
.container {
  padding-top: 40vh;
}

.card{
  padding: 15px;
  align-items: center;
}
</style>