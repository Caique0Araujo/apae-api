import { Response, Request } from "express";
import { Controller } from "../../../presentation/controllers/controller";


export const adaptRoute = (controller: Controller) =>{
        return async (req: Request, res: Response) =>{
            const authHeader = req.headers.authorization;
            const data = {content: '', token: ''}
            data.content = req._body ? req.body : req.params
            data.token = authHeader ? authHeader : null
            //console.log(data)
            const httpResponse = await controller.handle(data);
            res.status(httpResponse.status).json(httpResponse.body)
        }
    }
