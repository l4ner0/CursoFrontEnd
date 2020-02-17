Vue.component('watchers', {
    data() {
        return {
            user: null,
            oldUsers: null
        }
    },
    mounted() {
        this.randomUsers();
    },
    methods: {
        async randomUsers() {
            try {
                const data = await fetch('https://randomuser.me/api/');
                const json = await data.json();
                const user = json.results[0];
                console.log(user);
                this.user = `${user.name.title} ${user.name.first} ${user.name.last}`;
            } catch (error) {
                console.log("Error: ", error);
            }
        }
    },
    watch: {
        user(newVal, oldVal){
            this.user = newVal;
            this.oldUsers = oldVal;
        }
    },
    template: `
        <div>
            <h2>Watchers con Vuejs 2</h2>
            <button @click="randomUsers">Obtener un usuario aleatorio</button>
            <p>Nuevo usuario: {{ user }}</p>
            <p>Anterior usuario: {{ oldUsers }}</p>
        </div>
    `
});