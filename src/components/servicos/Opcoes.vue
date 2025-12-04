<template>
  <div>opcoes {{ idIndicador }}</div>
</template>

<script>
export default {
  name: 'OpcoesServico',
  props: ['id'],
  data: () => ({
    idIndicador: ''
  }),
  created() {
    this.idIndicador = this.id
  }
}
</script>

<style></style>