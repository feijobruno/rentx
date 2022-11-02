import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string; 
}

class CreateSpecificationUseCase {

    constructor( private specificationsRepository: ISpecificationsRepository ){}

    execute({ name, description }: IRequest) : void {
  
        const specificationAlreadyExists = this.specificationsRepository.findByName(name);

        if (specificationAlreadyExists) {
            // Sempre que tiver error no Service
            throw new Error("Specification already exists!");
        }
        this.specificationsRepository.create({ 
            name,
            description
        });
    }

}
export { CreateSpecificationUseCase }