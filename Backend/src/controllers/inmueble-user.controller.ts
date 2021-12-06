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
  User,
} from '../models';
import {InmuebleRepository} from '../repositories';

export class InmuebleUserController {
  constructor(
    @repository(InmuebleRepository)
    public inmuebleRepository: InmuebleRepository,
  ) { }

  @get('/inmuebles/{id}/user', {
    responses: {
      '200': {
        description: 'User belonging to Inmueble',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(User)},
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
  async getUser(
    @param.path.string('id') id: typeof Inmueble.prototype.id,
  ): Promise<User> {
    return this.inmuebleRepository.asesor(id);
  }
}
