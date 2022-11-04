import { Donation } from "../../../../data/dto/donation";
import { CreateDonationRepository } from "../../../../data/interfaces/donation/createRepository";
import Donations from "../../../dataSource/sequelize/donations";

export class CreateDonationRepositorySequelize implements CreateDonationRepository{
    async create(newDonation: Donation): Promise<Donation> {
        return await Donations.create(newDonation);
    }
}