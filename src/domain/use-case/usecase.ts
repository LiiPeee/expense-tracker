export interface IUseCase<InputDto, inputAndOutput> {
  execute(input: InputDto): Promise<inputAndOutput>;
}
