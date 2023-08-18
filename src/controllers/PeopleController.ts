import { Request, Response } from 'express'
import { PeopleService } from '../service/PeopleService'


export class PeopleController {
    async createPeople (req: Request, res: Response)  {
        try {
            const peopleSerice = new PeopleService();
            const people = await peopleSerice.createPeople(req.body)
            res.json({ people })

        } catch (err) {
            res.json(err)
        }

    }
    async getPeople (req: Request, res: Response) {
        try {
            const peopleService = new PeopleService();
            const people = await peopleService.getPeople(req.body)
            res.status(200).json({ people })
        } catch (err) {
            res.status(500).json(err)
        }
    }
    async updatePeople(req: Request, res: Response){
        try{
            const peopleService = new PeopleService();
            const people = await peopleService.updatePeople(Number(req.params.id), req.body)
            res.status(200).json({people})

        }catch(err){
            res.status(500).json(err)

        }
    }
    async deletePeople(req: Request, res: Response){
        try{
            const peopleService = new PeopleService();
            const people = await peopleService.deletePeople(Number(req.params.id))
            res.status(200).json({delete: 'deleted',
            people: people
        })
        }catch(err){
            res.status(500).json(err)
        }
    }
}