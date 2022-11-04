import { GetDonationsService } from "../../../../data/services/donation/getAll";
import { GetDonationsRepositorySequelize } from "../../../../infra/repositories/sequelize/donation/getAll";
import { GetDonationsController } from "../../../../presentation/controllers/donation/getAll";
import { Controller } from "../../../../presentation/controllers/controller";


export const getDonationController = (): Controller => {
  const repository = new GetDonationsRepositorySequelize();
  const service = new GetDonationsService(repository);
  return new GetDonationsController(service);
}