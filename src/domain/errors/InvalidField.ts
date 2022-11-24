export class InvalidFieldError extends Error{
    constructor(){
        super('Campos inválidos.');
        this.name = 'InvalidFieldError';
    }
}