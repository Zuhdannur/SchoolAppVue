<template>
    <div>
        <b-container>
            <h1 style="margin: 2%;">Form Kelas</h1>
            <br>
            <b-form>
                <b-form-group label="Kelas">
                    <b-form-input style="width: 80%;" type="text" placeholder="Nama Kelas" />
                </b-form-group>
                <b-form-group label="Jurusan">
                    <b-form-input style="width: 80%;" type="text" placeholder="Nama Jurusan" />
                </b-form-group>
                <b-button type="submit" style="margin-right: 1%"  variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
        </b-container>
    </div>
</template>
<script>
export default {
    name:'KelasForm',
}
</script>