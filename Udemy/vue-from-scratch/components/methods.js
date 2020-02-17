Vue.component('methods', {
    data(){
        return {
            name: 'Israel',
            surname: 'Parra'
        }
    },
    computed: {
        fullName(){
            return `${this.name} ${this.surname}`
        }
    },
    methods: {
        hello() {
            alert(this.name);
        }
    },
    template: `
        <div>
            <h2>Ejecutar métodos con Vuejs</h2>
            <p @click="hello"> Pulsa aquí para eecutar el método hello</p>
        </div>
    ` 
});