import { Donation } from "../../../../data/dto/donation";
import { GetDonationsRepository } from "../../../../data/interfaces/donation/getAllRepository";
import { NotFoundError } from "../../../../domain/errors/NotFoundError";
import Donations from "../../../dataSource/sequelize/donations";

export class GetDonationsRepositorySequelize implements GetDonationsRepository{
    async getAll(): Promise<Donation[]> {

        const donations = await Donations.findAll({raw: true, where: {is_enabled: true }}); 

        if(!donations) throw new NotFoundError('Donations')

        return donations
    }
}