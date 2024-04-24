import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';

export class UpdateCarDTO {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString({ message: 'La marca debe ser una cadena de texto.' })
  @IsOptional()
  readonly brand?: string;

  @IsString({ message: 'El modelo debe ser una cadena de texto.' })
  @MinLength(5, { message: 'El modelo debe tener al menos 5 caracteres.' })
  @IsNotEmpty({ message: 'El modelo no puede estar vacía.' })
  @IsOptional()
  readonly model?: string;
}
