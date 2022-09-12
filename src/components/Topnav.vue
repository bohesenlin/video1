<template>
    <div class="topnav">
        <div class="nav">
            <div class="left">
                <div class="back" @click="click_back()">
                    <img src="../assets/img/返回.png">
                </div>
                <div class="main" @click="click_main()">
                    <img src="../assets/img/主页.png">
                </div>
            </div>
            <div class="right">
                <div class="record" @click="click_record()">
                    <img src="../assets/img/历史.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
    },
    methods:{
        click_back(){
            // this.$router.push({path:this.$store.state.path,query:{'item':JSON.stringify(this.$store.state.query)}})
            this.$router.back()
        },
        click_main(){
            this.$router.push({path:'/'})
        },
        click_record(){
            this.$router.push({path:'/records'})
        },
    }
}
</script>

<style scoped>
.topnav {
    height: 10vw;
    margin: 0.6vw 0 0 1vw;
}
.topnav .nav{
    display: flex;
    justify-content: space-between;
}
.topnav .nav .left{
    display: flex;
    width: 24vw;
}
.topnav .nav .left{
    border-radius: 10vw;
    border: 2px solid#6a6a6a;
}
.topnav .nav .left .back{
    padding: 1vw 3vw 1vw 4vw;
}
.topnav .nav .left .main{
    padding: 0 2vw 0 0;
}
.topnav .nav .left .back img{
    height: 5.1vw;
    width: 5.1vw;
}
.topnav .nav .left .main img{
    height: 6.8vw;
    width: 6.8vw;
}
.topnav .nav .right .record{
    padding: 2vw 3vw 0 2vw;
}
.topnav .nav .right .record img{
    height: 5.1vw;
    width: 5.1vw;
}
</style>
