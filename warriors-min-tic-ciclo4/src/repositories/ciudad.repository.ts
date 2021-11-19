import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DatasourceDataSource} from '../datasources';
import {Ciudad, CiudadRelations} from '../models';

export class CiudadRepository extends DefaultCrudRepository<
  Ciudad,
  typeof Ciudad.prototype.id,
  CiudadRelations
> {
  constructor(
    @inject('datasources.datasource') dataSource: DatasourceDataSource,
  ) {
    super(Ciudad, dataSource);
  }
}
