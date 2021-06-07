import { Injectable } from '@angular/core';
import { Note } from './note.module';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes: Note[] = new Array<Note>();

  constructor() { }

  getAll(){
    return this.notes;
  }

  get(id: number){
    return this.notes[id];
  }

  getId(note: Note){
    return this.notes.indexOf(note)
  }

  add(note: Note){
    let newLength = this.notes.push(note);
    let index = newLength-1;
    this.notes[index].id = index;  
    return index;
  }

  update(id: number, title: string, body: string){
    let note = this.notes[id];
    note.title = title;
    note.note = body;
    
  }

  delete(id: number){
    this.notes.splice(id, 1);
    let i = 0;
    this.notes.forEach(note => {
      note.id = i;
      i++;
    });
  }
}
