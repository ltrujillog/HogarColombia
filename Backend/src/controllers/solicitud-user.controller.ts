import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Solicitud,
  User,
} from '../models';
import {SolicitudRepository} from '../repositories';

export class SolicitudUserController {
  constructor(
    @repository(SolicitudRepository)
    public solicitudRepository: SolicitudRepository,
  ) { }

  @get('/solicituds/{id}/user', {
    responses: {
      '200': {
        description: 'User belonging to Solicitud',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(User)},
          },
        },
      },
    },
  })
  async getUser(
    @param.path.string('id') id: typeof Solicitud.prototype.id,
  ): Promise<User> {
    return this.solicitudRepository.cliente(id);
  }
}
