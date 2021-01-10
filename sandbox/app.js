const app = Vue.createApp({
    data() {
        return {
            rapper:'Dababy',
            song:'Peephole',
            album:'Kirk',
            sales:1000,
            sentence:'true'
        }
    },
    methods: {
        changeRapper() {
            this.rapper = 'Dame D.O.L.L.A'
        },
        toggleSentence() {
            this.sentence = !this.sentence
        }
    }
});
// Take app instance and mount it onto the DOM
app.mount('#app')