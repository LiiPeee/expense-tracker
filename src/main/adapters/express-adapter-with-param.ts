import { Request, Response } from "express";
import { Controller } from "../../presentation/protocols/controller";

export const adaptRouteWithParam = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        const request = {
            param: req.params,
        };
        const httpResponse = await controller.handle(request);
        if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
            res.status(httpResponse.statusCode).json(httpResponse.body);
        } else {
            res.status(httpResponse.statusCode).json({
                error: httpResponse.body.message,
            });
        }
    };
};
