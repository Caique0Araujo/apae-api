import { BazaarInfo } from "../../dto/bazaar-info";

export interface GetBazarInfosRepository{
    getAll(): Promise<BazaarInfo[]>;
}