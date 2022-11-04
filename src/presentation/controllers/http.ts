export type HttpResponse<T = any> = {
    status: number,
    body: T
}

export const login = (body: any, token: string): HttpResponse => ({
    status: 200,
    body: {body, token},
})

export const serverError = (error: Error): HttpResponse => ({
    status: 500,
    body: error.message
})

export const created = (body: any): HttpResponse => ({
    status: 201,
    body: body
})

export const ok = (body: any): HttpResponse => ({
    status: 200,
    body: body
})

export const updated = (): HttpResponse => ({
    status: 200,
    body: 'User updated!'
})

export const deleted = (): HttpResponse => ({
    status: 204,
    body: 'User Deleted!'
})

export const badRequest = (error: Error): HttpResponse => ({
    status: 400,
    body: error.message
})

export const notFound = (error: Error): HttpResponse => ({
    status: 404,
    body: error.message
})
export const notAuthorized = (error: Error): HttpResponse => ({
    status: 401,
    body: error.message
})