const app = new Vue({
    el: "#app",
    data: {
        totalEmails: 10,
        emailList: [],
        generated: false,
        errorMsg: "",
        isError: false,
    },
    methods: {
        generateEmailList() {
            // La variabile "generated" viene comunque inizializzata a false nel caso in cui la funzione venisse richiamata altre volte tramite il pulsante.
            this.generated = false;
            this.emailList = [];
            for (let i = 0; i < this.totalEmails; i++) {
                axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then(resp => {
                        this.emailList.push(resp.data.response);
                        if (this.emailList.length === this.totalEmails) this.generated = true;
                    })
                    .catch(error => {
                        this.errorMsg = error;
                        this.isError = true;
                    })
            }
        }
    },
    mounted() {
        this.generateEmailList();
    }
});