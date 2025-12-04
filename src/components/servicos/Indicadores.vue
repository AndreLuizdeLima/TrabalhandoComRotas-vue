<template>
  <div>indicador {{ idIndicador }}</div>
</template>

<script>
export default {
  name: 'IndicadoresServico',
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