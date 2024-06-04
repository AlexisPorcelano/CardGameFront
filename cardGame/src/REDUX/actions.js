import { ENDPOINT } from "../utils/constants"

import axios from "axios"

export const DRAW = 'DRAW'

export const DEPLOY = 'DEPLOY'

export const TURN = 'TURN'

export const LOAD = 'LOAD'

export const draw = async (user, quantity) => {
    try {
        const response = await axios.get(`${ENDPOINT}/draw`, { user: user, quantity: quantity })
        const { data } = response
        if (data) {
            return {
                action: DRAW,
                payload: data
            }
        }
    } catch (error) {
        
    }
}