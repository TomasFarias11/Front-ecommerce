import axios from "axios";



export const GET_ORDER_2 = "GET_ORDER_2"
export const GET_ORDER_USER_2 = "GET_ORDER_USER_2"
export const ORDER_ASC = "ORDER_ASC"
export const ORDER_DESC = "ORDER_DESC"
export const PUT_ORDER_2 = "PUT_ORDER_2"



export function getOrder () {
    return async function (dispatch) {
        try {
            const order = await axios.get(`/order`)
            // console.log(order.data, "esta es la orden de la action jhon")
            return dispatch({type: GET_ORDER_2, payload: order.data})
            
        } catch (err) {
            console.log(err);
        }
    }
}

export function getOrderUserId (idUser) {
    return async function (dispatch) {
        try {
            const order = await axios.get(`/order/${idUser}`);
            console.log('orden de la action', order)
            return dispatch({type: GET_ORDER_USER_2, payload: order.data})
        } catch (err) {
            console.log(err)
        }
    }
}


export const orderAsc = () => { return { type: ORDER_ASC } }


export const orderDesc = () => { return { type: ORDER_DESC } }

export function editOrder (idUser, payload) {
    console.log('?????',payload)
    return async function (dispatch) {
        try {
            await axios.put(`/order/${idUser}`, payload)
            const {data} = await axios.get(`/order/${idUser}`)
            console.log('la data de la orden', data[0])
            return dispatch({type: PUT_ORDER_2, payload:data[0]})
        } catch (err) {
            console.log(err)
        }
    }
}

