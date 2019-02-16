<template>
    <div>
        <b-container>
            <h1 style="margin: 2%;">Form Siswa</h1>
            <br>
            <b-form>
                <b-form-group label="NIS">
                    <b-form-input style="width: 30%;" type="number" placeholder="Masukkan NIS" />
                </b-form-group>
                <b-form-group label="Nama Lengkap">
                    <b-form-input style="width: 80%;" type="text" placeholder="Masukkan Nama Lengkap" />
                </b-form-group>
                <b-form-group label="Kelas">
                    <b-form-select placeholder="Pilih Kelas">
                        <option value="xiirp1" selected>XII RPL 1</option>
                        <option value="xiirpl2" selected>XII RPL 2</option>
                        <option value="xiirpl3" selected>XII RPL 3</option>
                    </b-form-select>
                </b-form-group>
                <b-button type="submit" style="margin-right: 1%"  variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
        </b-container>

    </div>
</template>
<script>
    //import BForm from "bootstrap-vue/src/components/form/form";
    import BFormInput from "bootstrap-vue/src/components/form-input/form-input";

    //import BFormGroup from "bootstrap-vue/src/components/form-group/form-group";

    export default {
        name : 'SiswaForm',
        components: {BFormInput},
        text1:'',
        selected:null,
        options: [
            {value:null,text: 'Pilih Kelas'},
            {value:'XIIRPL1',text: 'XII RPL 1'},
            {value:'XIIRPL2',text: 'XII RPL 2'},
            {value:'XIIRPL3',text: 'XII RPL 3'},
        ],

    }
</script>