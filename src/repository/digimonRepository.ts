
import { EntityRepository, getCustomRepository, Repository } from "typeorm"
import {Digimon} from "../entity/digimon"
import {IDigimon} from "../interface/IDigimon"


@EntityRepository(Digimon)
class DigimonRepository extends Repository<IDigimon>{
    public getAll() {
        return this.find({
            // relations: ["digimons"]
        })
    }

    public async addAll(name: string, img: string, level: string){
        return this.save(this.create({name, img, level}))
    }
}

export const digimonRepository = getCustomRepository(DigimonRepository)