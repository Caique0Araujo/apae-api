import { Response, Request } from "express";
import { Controller } from "../../../presentation/controllers/controller";


export const adaptRoute = (controller: Controller) =>{
        return async (req: Request, res: Response) =>{
            const data = req.params.id || req.body;
            console.log(data)
            const httpResponse = await controller.handle(data);
            res.status(httpResponse.status).json(httpResponse.body)
        }
    }
