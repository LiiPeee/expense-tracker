import * as express from "express"
import  {PeopleController}  from "../controllers/PeopleController";
import { PeopleService } from "../service/PeopleService";
import { PeopleRepository } from "../repository/PeopleRepository";
const peopleRepository = new PeopleRepository()
const peopleService = new PeopleService(peopleRepository)
const peopleController = new PeopleController(peopleService);

export const router = express.Router();
router.post('/v1/people',peopleController.createPeople);
router.get('/v1/people',peopleController.getPeople);
router.put('/v1/people/:id', peopleController.updatePeople)
router.delete('/v1/people/:id',peopleController.deletePeople)