import * as express from "express"
import { PeopleController } from "../controllers/PeopleController";
const peopleController = new PeopleController();

export const router = express.Router();
router.post('/v1/people',peopleController.createPeople);
router.get('/v1/people',peopleController.getPeople);
router.put('/v1/people/:id', peopleController.updatePeople)
router.delete('/v1/people/:id',peopleController.deletePeople)