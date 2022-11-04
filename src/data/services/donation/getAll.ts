import { Donation } from "../../../domain/entities/donation";
import { GetDonationsUseCase } from "../../../domain/useCases/donation/getAll";
import { GetDonationsRepository } from "../../interfaces/donation/getAllRepository";

export class GetDonationsService implements GetDonationsUseCase{
    constructor(
        private readonly getDonationRepository: GetDonationsRepository
    ){}

    async load(): Promise<Donation[]> {
        return await this.getDonationRepository.getAll();
    }
}