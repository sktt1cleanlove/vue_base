
const state = {
    numArray: [1, 2, 3, 4],
    books: [
        {id:1, name:'双城记', price:2.0, todo:true},
        {id:2, name:'雾都孤儿', price:4.0, todo:true},
        {id:3, name:'傲慢与偏见', price:3.0, todo:true},
        {id:4, name:'鲁滨孙漂流记', price:2.0, todo:true},
    ],
    person:{
        id:1,
        name:'zs',
        age:20,
    }
}


const mutations = {
    changeTxt(){
        console.log("moduleA........")
    }
}


export default{
    namespaced: true,
    state,
    mutations,  
}