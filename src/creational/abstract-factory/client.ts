import { EnterpriseCreateVehicleCustomerFactory } from './factories/enterprise-customer-vehicle-factory';
import { IndividualCreateVehicleCustomerFactory } from './factories/individual-customer-vehicle-factory';

const enterpriseFactory = new EnterpriseCreateVehicleCustomerFactory();
const individualFactory = new IndividualCreateVehicleCustomerFactory();

const car1 = enterpriseFactory.createVehicle('Fusca', 'Joao');
const car2 = individualFactory.createVehicle('Celta', 'Elisson');

car1.pickUp();
car2.pickUp();
