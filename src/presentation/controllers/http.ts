export type HttpResponse<T = any> = {
    status: number,
    body: T
}

export const login = (body: any, token: string, expires_date_UTC: any): HttpResponse => ({
    status: 200,
    body: {token, expires_date_UTC},
})

export const serverError = (error: Error): HttpResponse => ({
    status: 500,
    body: error.message
})

export const created = (body: any): HttpResponse => ({
    status: 201,
    body: {result: true}
})

export const ok = (body: any): HttpResponse => ({
    status: 200,
    body: body
})

export const updated = (): HttpResponse => ({
    status: 200,
    body: []
})

export const deleted = (value: any): HttpResponse => ({
    status: 204,
    body: {result: value}
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

export const defaultError = (error: any): HttpResponse => ({
    status: error.status,
    body: error.message
})