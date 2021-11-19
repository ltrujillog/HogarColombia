import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DatasourceDataSource} from '../datasources';
import {Departamento, DepartamentoRelations} from '../models';

export class DepartamentoRepository extends DefaultCrudRepository<
  Departamento,
  typeof Departamento.prototype.id,
  DepartamentoRelations
> {
  constructor(
    @inject('datasources.datasource') dataSource: DatasourceDataSource,
  ) {
    super(Departamento, dataSource);
  }
}
