import { CreateDonationService } from "../../../../data/services/donation/create";
import { CreateDonationRepositorySequelize } from "../../../../infra/repositories/sequelize/donation/create";
import { CreateDonationController } from "../../../../presentation/controllers/donation/create";
import { Controller } from "../../../../presentation/controllers/controller";


export const createDonationController = (): Controller => {
  const repository = new CreateDonationRepositorySequelize();
  const service = new CreateDonationService(repository);
  return new CreateDonationController(service);
}