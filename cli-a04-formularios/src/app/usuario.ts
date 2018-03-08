export class Usuario {
  constructor(
    public id: number,
    public name: string,
    public tipo: string,
    public email: string,
    public tlf?: string
  ) {  }
}
