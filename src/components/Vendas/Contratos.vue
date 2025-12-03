<template>
  <div>
    <h5>Contratos</h5>

    <router-link class="btn btn-primary" :to="{name: 'contratos', query: {_limit:1}}">Limit id 1</router-link>
    <router-link class="btn btn-success" to="/home/vendas/contratos">Reverter</router-link>
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
      queryParamsBase: ''
    }),
    methods: {
    },
    created() {
      const queryParams = new URLSearchParams(this.$route.params).toString()
      this.getDadosApi(`http://localhost:3000/contratos?${this.queryParams}&${queryParams}`)
    }, 
    beforeRouteUpdate(to){
      const queryParams = new URLSearchParams(to.query).toString()
      this.getDadosApi(`http://localhost:3000/contratos?${queryParams}`)
    }
}
</script>

<style>

</style>