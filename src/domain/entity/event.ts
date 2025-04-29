export interface IEvent {
  on(input: string, data: any): any;
  emit(input: string, data: any): any;
}
