# Warriors_MinTic_Ciclo4
Repositorio para proyecto MinTic. Desarrollo Web


## Instalación de paquetes
1. npm init
2. npm install express --save
3. npm i mongoose --save
4. npm install -g nodemon
5. npm install body-parser
6. npm install dotenv

## Loopback
1. npm i -g @loopback/cli
2. lb4 app
3. Ejecutar comando cuando presente error desde el shell: Set-ExecutionPolicy RemoteSigned

## Creación de API en Loopback
### Datasource
1. lb4 datasource
2. Nombre del datasource
3. Seleccionar la base de datos
4. Ingresar cadena de conexion = URL
5. Seleccionar Si soporta versiones superiores 

### Model
1. lb4 Model
2. Nombre de la entidad
3. Seleccionar Entity (guardar en BD)
4. No permitir propiedades adicionales
5. Ingresar nombre de propiedad
6. Ingresar tipo de datos
7. Validar si es propiedad identificadora
8. Validar si se genera automaticamente
9. Repetir los Pasos y validar si es requerido

### Respositorio
1. lb4 respository
2. Seleccionar datasource
3. Seleccionar los modeles.. espacio para seleccionar
5. Seleccionar predeterminado

### Relaciones
1. lb4 relation
2.  belongsTo (Muchos a Uno. Foreign key)
    hasMany (Uno a Muchos)
    hasManyThrough (Muchos a Muchos)
    hasOne (Uno a Uno)
3. seleccionar tabla origen
4. seleccionar tabla description
5. validar, cambiar y/o confirmar nombre del la llave foranea
6. nombre de la relacion
7. Permitir incluir datos de las instancias
8. Crear la relacion en otro sentido (iniciar paso 1)

### Servicios
1. lb4 service
2. Seleccionar tipo de servicio (Clase de servicio local)
3. Nombre del servicio

### Controladores
1. lb4 controller
2. Nombre del controlador (Realizarlo por cada modelo)
3. Seleccionar Tipo de Controlador
4. Seleccionar entidad
5. Seleccionar repositorio de la entidad
6. Ingresar el campo del atributo id
7. Ingresar el tipo de datos del atributo id
8. Seleccionar si se omite la Id al crear nueva instancia (automatico)
9. Nombre de acceso a traves de la URL	
