import {People} from '../model/People'
import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import {PeopleService} from '../service/PeopleService'
import * as express from 'express';

export const router = express.Router();

    router.post('/v1/people', async (req: Request, res: Response) => {
        try {
            const people = await PeopleService.createPeople(req.body)
            res.json({people})

        } catch (err) {
            res.json(err)
        }
    
    })
    router.get('/v1/people', async(req: Request,res: Response)=>{
        try{
            const people = await PeopleService.getPeople(req.body)
            res.status(200).json({people})
        }catch(err){
            res.status(500).json(err)
        }
    })
