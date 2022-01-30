import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteModule } from './Note/note.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/Nest', {
      autoCreate: true,
    }),
    NoteModule,
  ],
})
export class AppModule {}
