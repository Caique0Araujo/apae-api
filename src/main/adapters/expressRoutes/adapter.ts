import { Response, Request } from "express";
import { Controller } from "../../../presentation/controllers/controller";


export const adaptRoute = (controller: Controller) =>{
        return async (req: Request, res: Response) =>{
            const data = req._body ? req.body : req.params
            const httpResponse = await controller.handle(data);
            res.status(httpResponse.status).json(httpResponse.body)
        }
    }
