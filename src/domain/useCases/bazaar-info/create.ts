import { BazaarInfo } from "../../entities/bazaar-info";

export interface CreateBazaarInfoUseCase{
    load(bazaarInfo: BazaarInfo): Promise<BazaarInfo>;
}