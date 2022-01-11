import { Get, JsonController, Param, Params } from "routing-controllers";
import { digimonRepository } from "../repository/digimonRepository";

@JsonController("/digimon")
export class DigimonController {
  @Get("/list")
  public async list() {
    const result = await digimonRepository.getAll();
    return result;
  }
}



// @JsonController()
// export class DigimonController {
//   @Get("/list/:id")
//   public async list(@Param("id")id:string) {
//     const result = await digimonRepository.getAll();
//     return result;
//   }
// }
