import { Donation } from "../../../../data/dto/donation";
import { GetDonationsRepository } from "../../../../data/interfaces/donation/getAllRepository";
import Donations from "../../../dataSource/sequelize/donations";

export class GetDonationsRepositorySequelize implements GetDonationsRepository{
    async getAll(): Promise<Donation[]> {
        return await Donations.findAll({raw: true, where: {is_enabled: true }}); 
    }
}