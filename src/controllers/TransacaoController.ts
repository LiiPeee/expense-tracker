import { Request, Response } from "express";
import { TransacaoUsecase } from "../usecase/TransacaoUsecase";

export class TransacaoController {
    public transacaoUsecase: TransacaoUsecase;
    constructor(transacaoUsecase: TransacaoUsecase) {
        this.transacaoUsecase = transacaoUsecase;
    }
    async criarTransacao(req: Request, res: Response): Promise<any> {
        try {
            let transacao = await this.transacaoUsecase.criandoTransacao(req.body);
            console.log(transacao)
            res.json(transacao)
        } catch (err: any) {
            console.log(err)
            res.status(500).json({ err })
        }
    }
    async encontrarTransacaoPeloId(req: Request, res: Response) {
        try {
            const getTransacao = await this.transacaoUsecase.pegarTransacaoId(req.params)
            res.json(getTransacao)
        } catch (err) {
            res.status(500).json({ err })
        }
    }
    async encontrarTodasTransacoes(req: Request, res: Response) {
        try {
            const getTodasTransacoes = await this.transacaoUsecase.pegarTodasTransacoes();
            res.json(getTodasTransacoes)
        } catch (err: any) {
            res.status(500).json({ err })
        }
    }
    async atualizarTransacao(req: Request, res: Response) {
        try {
            const attTransacao = await this.transacaoUsecase.atualizarTransacao(req.params.id, req.body);
            res.json(attTransacao).status(200)
        } catch (err: any) {
            res.status(500).json({ err })
        }
    }
    async deletarTransacao(req: Request, res: Response) {
        try {
            const deletar = await this.transacaoUsecase.deletarTransacao(req.params.id)
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