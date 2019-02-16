import Vue from 'vue'
import  Router from 'vue-router'
import Siswa from '@/components/Siswa'
import Kelas from '@/components/Kelas'
import SiswaForm from "../components/Form/SiswaForm"
import KelasForm from "../components/Form/KelasForm"

Vue.use(Router)

export default new Router({
    routes:[
        {
            path: '/siswa',
            name: 'Siswa',
            component: Siswa
        },
        {
            path: '/kelas',
            name: 'Kelas',
            component: Kelas
        },
        {
            path: '/siswa/form',
            name: 'SiswaForm',
            component: SiswaForm
        },
        {
            path: '/kelas/form',
            name: 'KelasForm',
            component: KelasForm
        }
    ]
})
