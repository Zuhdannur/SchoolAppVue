<template>
    <div>
        <b-container>
        <h1 style="margin-top: 20px">Data Siswa</h1>
            <b-button variant="success" style="margin-bottom: 0.5%;float: right" to="/siswa/form">Add Siswa</b-button>
        <br>
        <b-table striped hover :items="items"></b-table>
        </b-container>
    </div>
</template>

<script>
    import BContainer from "bootstrap-vue/src/components/layout/container";
    export default {
        name: 'Siswa',
        components: {BContainer},
        data:function () {
            return {
                items: [
                    {  Nis: 1617116697, Nama: 'Zuhdan Nur Ihsan', Kelas: 'XII RPL 1',Jurusan: 'Rekayasa Perangkat Lunak' },
                    { Nis: 1617116682, Nama: 'Ronny Rafael', Kelas: 'XII RPL 2',Jurusan: 'Rekayasa Perangkat Lunak' },
                    { Nis: 1617116681, Nama: 'Gordova', Kelas: 'XII RPL 3',Jurusan: 'Rekayasa Perangkat Lunak'},
                    { Nis: 1617116680, Nama: 'James', Kelas: 'XII TKJ 1' ,Jurusan: 'Teknik Komputer Jaringan'}
                ]
            }
        }
    }
</script>