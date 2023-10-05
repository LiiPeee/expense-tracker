import { Request, Response } from "express";
import { TransactionUseCase } from "../usecase/TransactionUseCase";

export class TransactionController {
    public transactionUseCase: TransactionUseCase | undefined;
    constructor(transactionUseCase: TransactionUseCase) {
        this.transactionUseCase = transactionUseCase;
    }
    async createTransaction(req: Request, res: Response): Promise<any> {
        try {
            let transacao = await this.transactionUseCase?.createTransaction(req.body);
            console.log(transacao)
            res.json(transacao)
        } catch (err: any) {
            console.log(err)
            res.status(500).json({ err })
        }
    }
    async getTransactionById(req: Request, res: Response) {
        try {
            const getTransacao = await this.transactionUseCase?.pegarTodasTransacoes();
            res.json(getTransacao)
        } catch (err) {
            res.status(500).json({ err })
        }
    }
    async getAllTransaction(req: Request, res: Response) {
        try {
            const getTodasTransacoes = await this.transactionUseCase?.pegarTodasTransacoes();
            res.json(getTodasTransacoes)
        } catch (err: any) {
            res.status(500).json({ err })
        }
    }
    async updateTransaction(req: Request, res: Response) {
        try {
            const attTransacao = await this.transactionUseCase?.atualizarTransacao(req.params.id, req.body);
            res.json(attTransacao).status(200)
        } catch (err: any) {
            res.status(500).json({ err })
        }
    }
    async deleteTransactionById(req: Request, res: Response) {
        try {
            await this.transactionUseCase?.deletarTransacao(req.params.id)
            res.json({
                resposta: {
                    delete: "sucess"
                }
            }).status(200)
        } catch (err: any) {
            res.status(500).json({ err })
        }
    }

}