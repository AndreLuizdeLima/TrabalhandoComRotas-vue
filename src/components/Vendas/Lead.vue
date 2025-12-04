<template>
    <div>
        <h5>{{dados.id}} - {{ dados.nome }}</h5>

        <div class="mb-3 row">
            <label for="col-sm-2 col-form-label">Nome</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" :value="dados.nome">
            </div>
        </div>

        <div class="mb-3 row">
            <label for="col-sm-2 col-form-label">Telefone</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" :value="dados.telefone" v-mask="['(##) #####-####', '(##) ####-####']" >
            </div>
        </div>

        <div class="col-auto d-flex justify-content-between">
            <button type="button" class="btn btn-warning" @click="$router.push({name: 'leads'})">Voltar</button>
            <button type="button" class="btn btn-primary">Atualizar</button>
        </div>

    </div>
</template>

<script>
import ApiMixin from '@/mixins/ApiMixin';

export default {
    name: 'LeadVendas',
    mixins: [ApiMixin],
    props: ['id', 'outro'],
    data: () => ({
    }),
    methods: {
    },
    created() {
        this.getDadosApi(`http://localhost:3000/leads/${this.id}`)
    }
}
</script>

<style></style>