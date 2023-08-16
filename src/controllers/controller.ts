import {People} from '../model/People'
import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
export const pegarMatchController = {
    createPeople: async (req: Request, res: Response): Promise<{people?: People}> => {
        // try {
        //     let {
        //         id,
        //         firstName,
        //         lastName,
        //         email,
        //         birthDate,
        //         balance,
        //     } = req.body

        //     const people: People = {
        //         id,
        //         firstName,
        //         lastName,
        //         email,
        //         birthDate,
        //         balance
        //     }
        //     const response = await


        // } catch (err) {

        // }

    }
}