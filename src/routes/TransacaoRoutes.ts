import * as express from "express"
import { TransacaoController } from "../controllers/TransacaoController";
import { TransacaoUsecase } from "../usecase/TransacaoUsecase";
import { TransacaoRepository } from "../repository/TransacaoRepository";


export const router = express.Router();

const transacaoRepository = new TransacaoRepository();
const transacaoService = new TransacaoUsecase(transacaoRepository);
const transacaoController = new TransacaoController(transacaoService);
router.post('/transacao', transacaoController.criarTransacao.bind(transacaoController));
router.get('/transacao/:id', transacaoController.encontrarTransacaoPeloId.bind(transacaoController))
router.get("/transacao", transacaoController.encontrarTodasTransacoes.bind(transacaoController))
router.put("/transaca/:id", transacaoController.atualizarTransacao.bind(transacaoController))
router.delete("/transacao/:id", transacaoController.deletarTransacao.bind(transacaoController))
