import { Component, OnInit,EventEmitter } from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  entries: Diary[] =[
    new Diary(1, "Can't wait to update you dear diary", "It was one of the best days I've had","prose", new Date(2020,1,6)),
    new Diary(2, "Bored", "Is life not a thousand times too short for us to bore ourselves?","poetry", new Date(2020,1,12))
    ,new Diary(3, "Humor", "I'm not afraid of death; I just don't want to be there when it happens.","poetic", new Date(2020,2,3)),
    new Diary(4, "Mind-games", "Artists use lies to tell the truth. Yes, I created a lie. But because you believed it, you found something true about yourself","fiction", new Date(2020,3,23)),
    new Diary(5, "Hopeful", "When I called, you answered me; you made me bold and stouthearted","bibilical", new Date(2020,4,19))

  ]
  addNewEntry(entry){
    let entryid = this.entries.length;
    entry.id = entryid+1;
    entry.date = new Date(entry.date)
    this.entries.push(entry)
  }
  deleteEntry(index){
    let toDelete = confirm(`Are you sure you want to delete this entry ${this.entries[index].title}`)
    
    if(toDelete){
      this.entries.splice(index,1)
    }
  }
  toggleContent(index){
    this.entries[index].showContent = !this.entries[index].showContent;
  }

  constructor() { }

  ngOnInit(): void {
  }

}