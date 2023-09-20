import { Request, Response } from "express";
import { TransacaoService } from "../service/TransacaoService";

export class TransacaoController {
    public transacaoService: TransacaoService;
    constructor(transacaoService: TransacaoService) {
        this.transacaoService = transacaoService;
    }
    async criarTransacao(req: Request, res: Response): Promise<any> {
        try {
            let transacao = await this.transacaoService.criandoTransacao(req.body);
            console.log(transacao)
            res.json(transacao)
        } catch (err: any) {
            console.log(err)
            res.status(500).json({ err })
        }
    }
    async encontrarTransacao(req: Request, res: Response){
        try{
            const getTransacao = await this.transacaoService.pegarTransacao(req.params)
            res.json(getTransacao)
        }catch (err){
            res.status(500).json({err})
        }
    }

}