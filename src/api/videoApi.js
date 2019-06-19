import axios from 'axios'



export default {
    getVideoInfo(...param){
        return axios.get("http://192.168.0.100:8089/api/v1/roomInfo/findRoomInfo?virtualRoomId=" +param)
    }
}