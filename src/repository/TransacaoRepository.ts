import { PrismaClient, Transacao } from "@prisma/client";

const prisma = new PrismaClient();

export class TransacaoRepository {
	async criarTransacao(data: any): Promise<Transacao> {
		const transacaoData: any = {
			valor: data?.valor,
			comentario: data?.comentario,
			formaDePagamento: data?.formaDePagamento,
			pago: data?.pago,
			contatos: {
				create: {
					nome: data.contatos?.nome,
					tel: data.contatos?.tel,
				}
			},
			categorias: {
				create: {
					tipoTransacao: data.categorias?.tipoTransacao,
					recorrencia: data.categorias?.recorrencia
				}
			}
		};
		const criandoTransacao = await prisma.transacao.create({
			data: transacaoData,
			include: {
				categorias: true
			}
		});

		return criandoTransacao;
	}
	async pegarTransacaoId(input: any) {
		const { id } = input;
		const pegarTransacao = await prisma.transacao.findFirst({
			where: {
				id: parseInt(id),
			}, include: { categorias: true }
		})
		return pegarTransacao;
	}
	async getTodasTransacoes() {
		const pegarTodasTransacoes = await prisma.transacao.findMany();
		return pegarTodasTransacoes;
	}
	async atualizarTransacao(inputId: any, input: any) {
		const { id } = inputId;
		const pegarTransacao = await prisma.transacao.findFirst({
			where: {
				id: parseInt(id),
			}
		})
		if (pegarTransacao) {
			const atualizarTransacao = await prisma.transacao.update({
				where: {
					id: parseInt(id),
				},
				data: {
					valor: input?.valor,
					pago: input?.pagos,
					comentario: input?.comentario,
					formaDePagamento: input?.formaDePagamento
				}
			})
			return atualizarTransacao;
		}

	}
	async deletarTransacao(input: any): Promise<any> {
		const { id } = input
		const deletar = await prisma.transacao.delete({
			where: {
				id: parseInt(id)
			},
			include:{
				categorias: true,
				contatos: true
			}
		})
		return deletar;
	}
}
