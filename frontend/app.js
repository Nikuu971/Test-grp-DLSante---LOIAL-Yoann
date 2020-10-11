new Vue({
    el:'#app-vue',
    userid:'',
    data(){
        return{
            submit:false,
            userName:'',
            userLastname:'',
        }
    },

    methods:{
        addUser(){
            this.submit=true;
            axios.post("http://localhost:3000/back",{
                nom:this.userName,
                prenom:this.userLastname
            })
            .then(response=>this.userid=reponse.data.id)
            router.push("./home.html")
            this.submit=true;
        },
        
        getName(){
            axios.get("http://localhost:3000/back/"+this.userid)
        .then((reponse)=>{
            const data=reponse.data;
            this.users=data;
        })
    }
}
})
