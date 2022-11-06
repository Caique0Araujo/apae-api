import { Response, Request } from "express";
import { Controller } from "../../../presentation/controllers/controller";


export const adaptRoute = (controller: Controller) =>{
        return async (req: Request, res: Response) =>{
            const data = req.params || req.body;
            const httpResponse = await controller.handle(data);
            res.status(httpResponse.status).json(httpResponse.body)
        }
    }
