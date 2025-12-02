<template>
  <div>
    <h5>Contratos</h5>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">LEAD</th>
          <th scope="col">SERVIÇO</th>
          <th scope="col">DATA INICIAL</th>
          <th scope="col">DATA FINAL</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="d in dados" :key="d.id">
          <td>{{ d.id }}</td>
          <td>{{ d.leadId }}</td>
          <td>{{ d.servicoId }}</td>
          <td>{{$moment(d.data_inicio).format('DD/MM/YYYY')}}</td>
          <td>{{ $moment(d.data_fim).format('DD/MM/YYYY') }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ApiMixin from '@/mixins/ApiMixin';

export default {
    name: 'ContratosVendas',
    mixins: [ApiMixin],
    data: () => ({
    }),
    methods: {
    },
    created() {
      this.getDadosApi('http://localhost:3000/contratos?_expand=lead&_expand=servicos')
      console.log(this.dados)
    }
}
</script>

<style>

</style>