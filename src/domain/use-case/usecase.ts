export interface UseCase<InputDto, inputAndOutput> {
  execute(input: InputDto): Promise<inputAndOutput>;
}
