// import { Request } from "express";
// import { DataBaseError } from "../../../data-layer/errors/data-base-error";
// import { Controller } from "../../protocols/controller";
// import { HttpResponse } from "../../protocols/http";
// import { badRequest, created, serverError } from "../../response/helper";

// export class DeleteCategoryController implements Controller {
//   constructor(private readonly categoryUseCase: IDeleteCategoryUseCase) {}
//   async handle(req: Request): Promise<HttpResponse> {
//     try {
//       const category = await this.categoryUseCase.execute(req.body);

//       if (!category) throw new DataBaseError("somenthing is wrong in Database");

//       return created(category);
//     } catch (error: any) {
//       if (badRequest(error)) return badRequest(error);
//       return serverError(error);
//     }
//   }
// }
