import { Donation } from "../../dto/donation";

export interface GetDonationsRepository{
    getAll(): Promise<Donation[]>;
}