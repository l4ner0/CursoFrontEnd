Vue.component('child-methods', {
    data(){
        return {
            cmpName: 'Child Methods CMP'
        }
    },
    methods: {
        showCmpName(){
            console.log("Ejecutando método showCmpName", this.cmpName);
        }
    },
    template: `
        <div>
            <h2>Acceso a métodos desde cmp hijo desde el cmp padre</h2>
        </div>
    `
});