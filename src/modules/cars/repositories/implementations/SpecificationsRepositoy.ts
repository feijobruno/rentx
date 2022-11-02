import { Specification } from "../../model/Specification";
import { specificationsRoutes } from "../../../../routes/specifications.routes";
import { ISpecificationsRepository, ICreateSpecificationDTO } from "../ISpecificationsRepository";


class SpecificationsRepository implements ISpecificationsRepository{
    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification: Specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });

        this.specifications.push(specification);
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find((specification) => specificationsRoutes.name === name );
        return specification;
    }
}
export { SpecificationsRepository };
