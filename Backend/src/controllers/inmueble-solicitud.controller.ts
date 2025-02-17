import { authenticate } from '@loopback/authentication';
import { authorize } from '@loopback/authorization';
import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import { basicAuthorization } from '../middlewares/auth.midd';
import {
  Inmueble,
  Solicitud,
} from '../models';
import {InmuebleRepository} from '../repositories';

export class InmuebleSolicitudController {
  constructor(
    @repository(InmuebleRepository) protected inmuebleRepository: InmuebleRepository,
  ) { }

  @get('/inmuebles/{id}/solicituds', {
    responses: {
      '200': {
        description: 'Array of Inmueble has many Solicitud',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Solicitud)},
          },
        },
      },
    },
  })
  //Autorización administrador y asesor
  @authenticate('jwt')
  @authorize({
    allowedRoles: ['Admin','Adviser'],
    voters: [basicAuthorization],
  })  
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Solicitud>,
  ): Promise<Solicitud[]> {
    return this.inmuebleRepository.solicitudes(id).find(filter);
  }

  @post('/inmuebles/{id}/solicituds', {
    responses: {
      '200': {
        description: 'Inmueble model instance',
        content: {'application/json': {schema: getModelSchemaRef(Solicitud)}},
      },
    },
  })
  //Autorización cliente
  @authenticate('jwt')
  @authorize({
    allowedRoles: ['Client'],
    voters: [basicAuthorization],
  })    
  async create(
    @param.path.string('id') id: typeof Inmueble.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitud, {
            title: 'NewSolicitudInInmueble',
            exclude: ['id'],
            optional: ['inmuebleId']
          }),
        },
      },
    }) solicitud: Omit<Solicitud, 'id'>,
  ): Promise<Solicitud> {
    return this.inmuebleRepository.solicitudes(id).create(solicitud);
  }

  @patch('/inmuebles/{id}/solicituds', {
    responses: {
      '200': {
        description: 'Inmueble.Solicitud PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  //Autorización cliente
  @authenticate('jwt')
  @authorize({
    allowedRoles: ['Client'],
    voters: [basicAuthorization],
  }) 
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitud, {partial: true}),
        },
      },
    })
    solicitud: Partial<Solicitud>,
    @param.query.object('where', getWhereSchemaFor(Solicitud)) where?: Where<Solicitud>,
  ): Promise<Count> {
    return this.inmuebleRepository.solicitudes(id).patch(solicitud, where);
  }

  @del('/inmuebles/{id}/solicituds', {
    responses: {
      '200': {
        description: 'Inmueble.Solicitud DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  //Autorización administrador 
  @authenticate('jwt')
  @authorize({
    allowedRoles: ['Admin'],
    voters: [basicAuthorization],
  })   
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Solicitud)) where?: Where<Solicitud>,
  ): Promise<Count> {
    return this.inmuebleRepository.solicitudes(id).delete(where);
  }
}
