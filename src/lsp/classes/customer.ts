import {
  IndividualCostumerProtocol,
  EntrepriseCostumerProtocol,
} from './interface/customer-protocol';

class IndividualCostumer implements IndividualCostumerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }
}

class EntrepriseCostumer implements EntrepriseCostumerProtocol {
  name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
}
