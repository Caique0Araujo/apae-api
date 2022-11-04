import { Donation } from "../../../domain/entities/donation";
import { CreateDonationUseCase } from "../../../domain/useCases/donation/create";
import { CreateDonationRepository } from "../../interfaces/donation/createRepository";

export class CreateDonationService implements CreateDonationUseCase{
    constructor(
        private readonly createDonationRepository: CreateDonationRepository
    ){}

    async load(Donation: Donation): Promise<Donation> {
        return await this.createDonationRepository.create(Donation);
    }
}