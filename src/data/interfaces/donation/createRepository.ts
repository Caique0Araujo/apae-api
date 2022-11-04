import { Donation } from "../../dto/donation";

export interface CreateDonationRepository{
    create(donation: Donation): Promise<Donation>;
}