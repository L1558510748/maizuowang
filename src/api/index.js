import axios from './request';
export const getFilm=(type)=>{
    return axios.get("/gateway",{
        params:{
            cityId:110100,
            pageNum:1,
            pageSize:10,
            type:type,
            k:Date.now()
        },
        headers:{          
            "X-Host": "mall.film-ticket.film.list"
        }
    })
}
