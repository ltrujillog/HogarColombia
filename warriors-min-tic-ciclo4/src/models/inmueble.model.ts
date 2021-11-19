import {Entity, model, property} from '@loopback/repository';

@model()
export class Inmueble extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  @property({
    type: 'number',
    required: true,
  })
  valor: number;

  @property({
    type: 'string',
    required: true,
  })
  tipoOferta: string;

  @property({
    type: 'string',
    required: true,
  })
  nombreEncargado: string;

  @property({
    type: 'string',
    required: true,
  })
  contactoEncargado: string;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  foto: string[];

  @property({
    type: 'string',
  })
  video?: string;


  constructor(data?: Partial<Inmueble>) {
    super(data);
  }
}

export interface InmuebleRelations {
  // describe navigational properties here
}

export type InmuebleWithRelations = Inmueble & InmuebleRelations;
