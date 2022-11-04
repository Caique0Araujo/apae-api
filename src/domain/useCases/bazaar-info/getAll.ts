import { BazaarInfo } from "../../entities/bazaar-info";

export interface GetBazaarInfosUseCase{
    load(): Promise<BazaarInfo[]>
}