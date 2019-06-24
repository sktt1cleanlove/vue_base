<template>
    <div>
        manage
        <!-- {{changeTxt1()}}
         {{changeTxt2()}} -->
         <!-- {{books}} -->
         <!-- {{bookList}} -->
         <!-- {{booksList}} -->
         {{bookLists}}


         <el-pagination
            :background= true
            :page-size="2"
            :pager-count="5"
            layout="prev, pager, next"
            :total="10"
            @current-change="getCurrentPage">
           
        </el-pagination>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
    name:'OrderManger',
    computed:{
        ...mapState({
            books: (state) => {
                let bookList = state.moduleA.books;
                let bs =bookList.filter((b, index, arr) => 
                    b.price > 2.0
                )
                console.log(bs)
                return ;
            },
        }),

        bookList(){
            let bookList = this.$store.state.moduleA.books;
            bookList.forEach((b, index, arr) =>{
                b.price *=10;
            })
            //
            console.log(bookList)
            return ;
        },

        booksList(){
            let bookList = this.$store.state.moduleA.books;
            let res = bookList.map((b, index, arr) =>{
                b.price *=5;
            })
            console.log(bookList)
        },


        bookLists(){
            let bookList = this.$store.state.moduleA.books;
            let bs =bookList.filter((b, index, arr) =>
                b.price > 2
            )
            console.log(bs)
        }

    },
    methods:{
        ...mapMutations({changeTxt1: 'moduleA/changeTxt',changeTxt2: 'moduleB/changeTxt'}),
        getCurrentPage(page){
            console.log(page)
        },
        changeTxt11(){
            this.changeTxt1(param);
        }
    },
}
</script>

<style scoped>

</style>
