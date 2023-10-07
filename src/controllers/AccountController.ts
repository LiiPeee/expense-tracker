import { AccountUseCase } from "../usecase/AccountUseCase";
import { Request, Response } from "express";


export class AccountController {
    public accountUsecase: AccountUseCase
    constructor(accountUsecase: AccountUseCase) {
        this.accountUsecase = accountUsecase;
    }

    async createAccount(req: Request, res: Response){
        try{
            const creatingAccount = await this.accountUsecase.createAccount(req.body)
            res.json(creatingAccount).status(200)
        }catch(err: any){
            res.json(err).status(500)

        }

    }
}