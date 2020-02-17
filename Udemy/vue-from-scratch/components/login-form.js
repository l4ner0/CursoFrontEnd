Vue.component('login-form', {
    data(){
        return {
            logged: false,
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            this.logged = this.user.email == 'test@m.com' && this.user.password === '1234';
        }
    },
    template: `
        <div>
            <h2>Formulario de login</h2>
            <p v-show="logged" style="background: green; color: #fff;">
                Has iniciado sesión con los datos: {{ user }}
            </p>
            <form @submit.prevent="login">
                <input autocomplate="off" type="email" v-model="user.email" name="email"/>
                <input autocomplate="off" type="password" v-model="user.password" name="password"/>
                <input type="submit" value="Iniciar sesion"/>
            </form>
        </div>
    `
});