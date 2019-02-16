<template>
<div>
    <b-container>
    <h1 style="margin-top: 20px">Data Kelas</h1>
    <br>
        <b-button variant="success" style="margin-bottom: 0.5%;float: right" to="/kelas/form">Add Kelas</b-button>
    <b-table responsive striped hover :items="items">

    </b-table>
    </b-container>
</div>
</template>
<script>
    import BTable from "bootstrap-vue/src/components/table/table";
    import BContainer from "bootstrap-vue/src/components/layout/container";
    export default {
        name: 'Kelas',
        components: {BContainer, BTable},
        data:function () {
            return {
                items: [
                    { Kelas: 'XII RPL 1',Jurusan: 'Rekayasa Perangkat Lunak' },
                    { Kelas: 'XII RPL 2',Jurusan:'Rekayasa Perangkat Lunak'},
                    { Kelas: 'XII RPL 3',Jurusan: 'Rekayasa Perangkat Lunak'},
                    { Kelas: 'XII TKJ 1',Jurusan: 'Teknik Komputer Jaringan' }
                ]
            }
        }
    }
</script>