import { IsString, IsBoolean } from 'class-validator';

export class CreateNoteDto {
  @IsString()
  title: string;

  @IsString()
  link: string;

  @IsBoolean()
  status: boolean;
}

export class LinkDto {
  @IsString()
  link: string;
}
