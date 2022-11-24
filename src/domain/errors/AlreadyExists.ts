export class AlreadyExistsError extends Error{
  constructor(){
      super('Login já cadastrado.');
      this.name = 'AlreadyExistsError';
  }
}