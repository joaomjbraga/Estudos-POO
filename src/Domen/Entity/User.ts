export class User {
  private _id: string
  private _name: string
  private _email: string
  private _passwordHash: string

  constructor(
    id: string,
    name: string,
    email: string,
    passwordHash: string
  )
  {
    this._id = id
    this._name = name
    this._email = email
    this._passwordHash = passwordHash

    this.validate()
  }

  get id(): string {
    return this._id
  }
  get name(): string {
    return this._name
  }
  get email(): string {
    return this._email
  }
  get passwordHash(): string {
    return this._passwordHash
  }

  private validate(): void {
    if(!this._id) {
      throw new Error("ID invalido.")
    }
    if(!this._name) {
      throw new Error("nome invalido.")
    }
    if(!this._email) {
      throw new Error("email invalida.")
    }
    if(!this._passwordHash) {
      throw new Error("senha invalida.")
    }
  }
}
