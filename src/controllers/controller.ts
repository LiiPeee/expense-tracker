import axios from 'axios'
import { Request, Response } from 'express'

export const pegarMatchController = {
    getMatch: async (req: Request, res: Response) => {

        let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos'
        let api_key = req.query.api_key
        try {
            let sol = req.query.sol
            const response = await axios.get(`${url}${sol}${api_key}`)
            res.json(response)
            console.log(response.data)
        } catch (err) {
            console.log('error', err)
        }

    }
}