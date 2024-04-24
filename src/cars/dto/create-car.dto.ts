import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateCarDTO {
  @IsString({ message: 'La marca debe ser una cadena de texto.' })
  readonly brand: string;

  @IsString({ message: 'El modelo debe ser una cadena de texto.' })
  @MinLength(5, { message: 'El modelo debe tener al menos 5 caracteres.' })
  @IsNotEmpty({ message: 'El modelo no puede estar vacía.' })
  readonly model: string;
}
