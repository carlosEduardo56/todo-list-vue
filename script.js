const bd = [
]

//Configuration for the aplication
const tasksConfig = {
    
    data() {
        return {
            tasks: bd,
            taskEntity: {
                title : null,
                desc  : null,
                urgent: false
            }
        }
    },

    methods: {
        addTask(){
            if( !this.taskEntity.title || this.taskEntity.title === '' ){
               alert("Title is required.") 
            } else {
                this.tasks.push(this.taskEntity)
                this.taskEntity = {
                    title : null,
                    desc  : null,
                    urgent: false
                }
            }
        }
    }

}

Vue.createApp(tasksConfig).mount('#app');