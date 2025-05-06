export interface IEvent {
  on(input: string, data: any): void;
  emit(input: string, data: any): void;
}
