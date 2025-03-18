import { CreateAccountUseCase } from '../../../../../src/data/usecase/account/create-account.usecase';
import { AccountRepositoryMock } from './../../../../mocks/AccountMockRepository';


jest.mock('../../../../../src/infrastructure/repository/account-repository')
jest.mock('../../../../../src/data/utils/encrypter.adapter')
describe('CreateAccountUseCase', () => {

    let accountRepositoryMock = new AccountRepositoryMock()
    let sut = new CreateAccountUseCase(accountRepositoryMock, encrypter);

    test('should be return success ', async () => {
        let accountRepositoryMock = new AccountRepositoryMock()

        let sut = new CreateAccountUseCase(accountRepositoryMock, encrypter);

    });



});