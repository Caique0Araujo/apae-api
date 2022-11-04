import { BazaarInfo } from "../../dto/bazaar-info";

export interface CreateBazaarInfoRepository{
    create(product: BazaarInfo): Promise<BazaarInfo>;
}