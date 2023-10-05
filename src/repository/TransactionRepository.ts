import { PrismaClient, Transaction } from "@prisma/client";

const prisma = new PrismaClient();

export class TransactionRepository {
	async criarTransacao(data: any): Promise<Transaction> {
		const transacaoData: any = {
			value: data?.valor,
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
		const criandoTransacao = await prisma.transaction.create({
			data: transacaoData,
			include: {
				category: true
			}
		});

		return criandoTransacao;
	}
	async pegarTransacaoId(input: any) {
		const { id } = input;
		const pegarTransacao = await prisma.transaction.findFirst({
			where: {
				id: parseInt(id),
			}, include: { category: true }
		})
		return pegarTransacao;
	}
	async getTodasTransacoes() {
		const pegarTodasTransacoes = await prisma.transaction.findMany();
		return pegarTodasTransacoes;
	}
	async atualizarTransacao(inputId: any, input: any) {
		const { id } = inputId;
		const pegarTransacao = await prisma.transaction.findFirst({
			where: {
				id: parseInt(id),
			}
		})
		if (pegarTransacao) {
			const atualizarTransacao = await prisma.transaction.update({
				where: {
					id: parseInt(id),
				},
				data: {
					value: input?.value,
					paid: input?.paid,
					comment: input?.comment,
					formatPayment: input?.formatPayment
				}
			})
			return atualizarTransacao;
		}

	}
	async deletarTransacao(input: any): Promise<any> {
		const { id } = input
		const deletar = await prisma.transaction.delete({
			where: {
				id: parseInt(id)
			},
			include:{
				category: true,
				contact: true
			}
		})
		return deletar;
	}
}
