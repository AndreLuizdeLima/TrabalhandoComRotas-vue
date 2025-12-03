<template>
  <div>
    <div class="card mb-4">
      <div class="card-header">Contratos</div>
      <div class="card-body">
        <div class="row">
          <div class="col-6">
            <label class="form-label">ID Contrato:</label>
            <input type="text" class="form-control">
          </div>
          <div class="col-6">
            <label class="form-label">Data início:</label>
            <div class="input-group">
              <input type="date" class="form-control">
              <input type="date" class="form-control">
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-primary">Pesquisar</button>
      </div>
    </div>
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
          <td>{{ $moment(d.data_inicio).format('DD/MM/YYYY') }}</td>
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
    const queryParams = new URLSearchParams(this.$route.params).toString()
    this.getDadosApi(`http://localhost:3000/contratos?${queryParams}`)
  },
  beforeRouteUpdate(to) {
    const queryParams = new URLSearchParams(to.query).toString()
    this.getDadosApi(`http://localhost:3000/contratos?${queryParams}`)
  }
}
</script>

<style></style>