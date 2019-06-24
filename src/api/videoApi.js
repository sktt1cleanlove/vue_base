import {axios} from '@/api/index'


export default {
    getVideoInfo(...param){
        return axios.get("http://192.168.0.100:8089/api/v1/roomInfo/findRoomInfo?virtualRoomId=" +param)
    },


    getPaperInfo(){
        return axios.get("http://192.168.0.100:8089/api/v1/video/statistics/basic/10086")
    }
}