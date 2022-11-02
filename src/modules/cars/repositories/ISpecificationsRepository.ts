import { Specification } from "../model/Specification";

// DTO => Data transfer object
interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository{
    create({name, description}: ICreateSpecificationDTO ): void;   
    findByName(name: string): Specification;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };