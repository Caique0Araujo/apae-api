import { Donation } from "../../entities/donation";

export interface GetDonationsUseCase{
    load(): Promise<Donation[]>
}