import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNoteDto, LinkDto } from './dto/create-note.dto';
import { NoteDocument, Note } from './note.model';

@Injectable()
export class NoteService {
  constructor(
    @InjectModel(Note.name) private readonly noteModel: Model<NoteDocument>,
  ) {}

  async all() {
    return this.noteModel.find().exec();
  }

  async create(dto: CreateNoteDto) {
    return this.noteModel.create(dto);
  }

  async deleteById(id: string) {
    return this.noteModel.findByIdAndRemove(id).exec();
  }

  async updateByIdStatus(id: string) {
    const currentNote = await this.noteModel.findById(id);
    if (currentNote.status === false) {
      return this.noteModel
        .findByIdAndUpdate(id, { status: true }, { new: true })
        .exec();
    }
    if (currentNote.status === true) {
      return this.noteModel
        .findByIdAndUpdate(id, { status: false }, { new: true })
        .exec();
    }
  }

  async updateByIdLink(id: string, dto: LinkDto) {
    const { link } = dto;
    return this.noteModel.findByIdAndUpdate(id, { link }, { new: true }).exec();
  }
}
