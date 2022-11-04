import { Donation } from "../../entities/donation";

export interface CreateDonationUseCase{
    load(donation: Donation): Promise<Donation>;
}