export class NotFoundError extends Error {
    constructor(){
        super("Data not found");
    }
}