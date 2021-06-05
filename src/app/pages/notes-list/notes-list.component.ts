import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/note.module';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  
  animations: [
    
    trigger('pageChange',[
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate('500ms ease-out')
      ])
    ])
  ] 
})
export class NotesListComponent implements OnInit {

  notes: Note[] = new Array<Note>();
  filteredNotes: Note[] = new Array<Note>();

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.notes = this.notesService.getAll();
    this.filteredNotes = this.notes;
  }

  deleteNote(id:number){
    this.notesService.delete(id);
  }

  filter(query: string){
    query = query.toLowerCase().trim();
    let allResult: Note[] = new Array<Note>();
    let terms: string[] = query.split(' ');

    terms = this.removeDuplicates(terms);

    terms.forEach(term => {
      let result: Note[] = this.relevantNotes(term);
      allResult = [...allResult, ...result]
    });
    let uniqueResult = this.removeDuplicates(allResult);
    this.filteredNotes = uniqueResult;
  }

  removeDuplicates(arr: Array<any>) : Array<any> {
    let uniqueResult: Set<any> = new Set<any>();
    arr.forEach(e => uniqueResult.add(e));
    return Array.from(uniqueResult);
  }

  relevantNotes(query: string) :Array<any>{
    query = query.toLowerCase().trim();
    let relevantNotes = this.notes.filter(note => {
      if(note.title && note.title.toLowerCase().includes(query)){
        return true;
      }
      if(note.note && note.note.toLowerCase().includes(query)){
        return true;
      }
      return false;
    })
    return relevantNotes;
  }
}
