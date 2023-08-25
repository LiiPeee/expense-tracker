import { Request, Response } from 'express'
import { PeopleService } from '../service/PeopleService'


export class PeopleController {
    constructor(private readonly peopleService: PeopleService){

    }
    async createPeople (req: Request, res: Response)  {
        try {
            const people = await this.peopleService.createPeople(req.body)
            res.json({ people })

        } catch (err) {
            res.json(err)
        }

    }
    async getPeople (req: Request, res: Response) {
        try {
            const people = await this.peopleService.getPeople(req.body)
            res.status(200).json({ people })
        } catch (err) {
            res.status(500).json(err)
        }
    }
    async updatePeople(req: Request, res: Response){
        try{
            const people = await this.peopleService.updatePeople(Number(req.params.id), req.body)
            res.status(200).json({people})

        }catch(err){
            res.status(500).json(err)

        }
    }
    async deletePeople(req: Request, res: Response){
        try{
            const people = await this.peopleService.deletePeople(Number(req.params.id))
            res.status(200).json({delete: 'deleted',
            people: people
        })
        }catch(err){
            res.status(500).json(err)
        }
    }
}