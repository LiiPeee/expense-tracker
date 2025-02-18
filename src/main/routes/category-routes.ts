import { Router } from "express";
import { adaptRoute } from "../adapters/express-adapter";
import { adaptRouteWithParam } from "../adapters/express-adapter-with-param";
import { makeCreateCategoryFactory } from "../factories/category/create-category-factory";
import { makeDeleteCategoryFactory } from "../factories/category/delete-category-factory";
import { makeGetCategoryFactory } from "../factories/category/get-category-factory";
import { makeUpdateCategoryFactory } from "../factories/category/update-category-factory";
import { makeGetTransactionByContactController } from "../factories/transaction/get-transaction-by-contact-controller.factory";

export const categoryRouter = async (router: Router): Promise<void> => {
    router.post("/category", adaptRoute(await makeCreateCategoryFactory()));

    router.get("/category", adaptRoute(await makeGetCategoryFactory()));

    router.put("/category", adaptRoute(await makeUpdateCategoryFactory()));

    router.delete("/category", adaptRoute(await makeDeleteCategoryFactory()));

    router.get("/category/:email", adaptRouteWithParam(await makeGetTransactionByContactController()));

};
