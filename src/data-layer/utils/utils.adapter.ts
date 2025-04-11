import { CreateTransactionInput } from "../../domain/inputAndOutput";

export class UtilsAdapter {


    private async createInstallmentsPerMonth(email: string, input: CreateTransactionInput, transactionRepo: any): Promise<any> {
        let date = new Date();

        if (!input.transaction.number_of_installments) return;

        for (let index = 1; index <= input.transaction.number_of_installments; index++) {
            const newDate = new Date(date.setMonth(date.getMonth() + 1
            ));

            input.transaction.installments_date = newDate;

            const transaction = await this.transactionRepo.create(
                email,
                input
            );

            if (input.transaction.number_of_installments === index) return transaction

        }
    }
    private async createInstallmentsPerWeek(email: string, input: CreateTransactionInput): Promise<any> {
        if (!input.transaction.number_of_installments || !input.transaction.installments_date) return;

        let startDate = new Date(input.transaction.installments_date);

        let week = 7 * 24 * 60 * 60 * 1000;

        for (let index = 0; index <= input.transaction.number_of_installments; index++) {

            const newDate = new Date(startDate.getTime() + index * week)

            input.transaction.installments_date = newDate;

            const transaction = await this.transactionRepository.create(
                email,
                input
            );

            if (input.transaction.number_of_installments === index) return transaction

        }
    }
}

