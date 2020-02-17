Vue.component('slots', {
    template: `
        <div>
            <h2>Slots, ejemplo de layout</h2>
            <div>
                <header>
                <p>Contenido de inicio</p>
                    <slot name="header"></slot>
                </header>
                <main>
                    <slot></slot>
                </main>
                <footer>
                    <slot name="footer"></slot>
                </footer>
            </div>
        </div>
    `
});