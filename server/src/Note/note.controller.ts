import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  Param,
  NotFoundException,
  Put,
} from '@nestjs/common';
import { NOTE_NOT_FOUND_ERROR } from './note.constants';
import { CreateNoteDto, LinkDto } from './dto/create-note.dto';
import { NoteService } from './note.service';

@Controller()
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Get('all')
  async getAall() {
    return this.noteService.all();
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const detetedNote = await this.noteService.deleteById(id);
    if (!detetedNote) {
      throw new NotFoundException(NOTE_NOT_FOUND_ERROR);
    }
  }

  @Post('create')
  async create(@Body() dto: CreateNoteDto) {
    return this.noteService.create(dto);
  }

  @Patch(':id')
  async patch(@Param('id') id: string) {
    const updatedNote = await this.noteService.updateByIdStatus(id);
    if (!updatedNote) {
      throw new NotFoundException(NOTE_NOT_FOUND_ERROR);
    }
    return updatedNote;
  }

  @Put(':id')
  async put(@Param('id') id: string, @Body() dto: LinkDto) {
    const updatedNote = await this.noteService.updateByIdLink(id, dto)
    if (!updatedNote) {
      throw new NotFoundException(NOTE_NOT_FOUND_ERROR);
    }
    return updatedNote;
  }
}
