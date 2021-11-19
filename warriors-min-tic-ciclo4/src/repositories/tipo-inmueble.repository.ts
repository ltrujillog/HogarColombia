import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DatasourceDataSource} from '../datasources';
import {TipoInmueble, TipoInmuebleRelations} from '../models';

export class TipoInmuebleRepository extends DefaultCrudRepository<
  TipoInmueble,
  typeof TipoInmueble.prototype.id,
  TipoInmuebleRelations
> {
  constructor(
    @inject('datasources.datasource') dataSource: DatasourceDataSource,
  ) {
    super(TipoInmueble, dataSource);
  }
}
