Vue.component('conditional', {
    data(){
        return {
            age: 10
        }
    },
    template: `
        <div>
            <h2>Condicionales con v-if</h2>
            <input v-model="age"/>
            <p v-if="age < 18">Menor de edad</p>
            <p v-else-if="age >= 18 && age < 30">Mayor de edad pero menor de 30</p>
            <p v-else-if="age >= 30 && age < 65">Mayor de 30 pero menor de 65</p>
            <p v-else>Estás jubilado</p>
        </div>
    `
});