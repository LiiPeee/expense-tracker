import * as express from "express"
import { TransacaoController } from "../controllers/TransacaoController";
import { TransacaoService } from "../service/TransacaoService";
import { TransacaoRepository } from "../repository/TransacaoRepository";


export const router = express.Router();

const transacaoRepository = new TransacaoRepository();
const transacaoService = new TransacaoService(transacaoRepository);
const transacaoController = new TransacaoController(transacaoService);
router.post('/transacao', transacaoController.criarTransacao.bind(transacaoController));
router.get('/transacao/:id', transacaoController.encontrarTransacao.bind(transacaoController))

