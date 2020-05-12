import axios from './request';
export const getFilm=(type,cityid)=>{
    return axios.get("/gateway",{
        params:{
            cityId:cityid,
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
export const getInfo=()=>{
    return axios.get('/gateway?actId=ElzMZU125260',{
        headers:{
            "X-Host": "mall.act.static-page.info"
        }
    })
}
export const getDetail=(id)=>{
    return axios.get("/gateway",{
        params:{
            filmId:id,
            k:Date.now()
        },
        headers:{
            "X-Host": "mall.film-ticket.film.info"
        }
    })
}

export const getCinema=(id)=>{
    return axios.get("/gateway",{
        params:{
            cityId:id,
            ticketFlag:1,
            k:Date.now()
        },
        headers:{
            "X-Host":"mall.film-ticket.cinema.list"
        }
    })
}
export const getCities=()=>{
    return axios.get("/gateway?k=7719936",{
        headers:{
            "X-Host":"mall.film-ticket.city.list"
        }
    })
}