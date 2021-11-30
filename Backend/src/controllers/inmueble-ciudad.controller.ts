import { authenticate } from '@loopback/authentication';
import { authorize } from '@loopback/authorization';
import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import { basicAuthorization } from '../middlewares/auth.midd';
import {
  Inmueble,
  Ciudad,
} from '../models';
import {InmuebleRepository} from '../repositories';

export class InmuebleCiudadController {
  constructor(
    @repository(InmuebleRepository)
    public inmuebleRepository: InmuebleRepository,
  ) { }

  @get('/inmuebles/{id}/ciudad', {
    responses: {
      '200': {
        description: 'Ciudad belonging to Inmueble',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Ciudad)},
          },
        },
      },
    },
  })
  //Autorización administrador, cliente, asesor y usuario
  @authenticate('jwt')
  @authorize({
    allowedRoles: ['Admin','Client','Adviser','User'],
    voters: [basicAuthorization],
  })    
  async getCiudad(
    @param.path.string('id') id: typeof Inmueble.prototype.id,
  ): Promise<Ciudad> {
    return this.inmuebleRepository.ciudad(id);
  }
}
