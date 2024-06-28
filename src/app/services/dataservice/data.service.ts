import { Injectable } from '@angular/core';
import { UmbracoService } from "../umbracoservice/umbraco.service";


export interface Message {
  name: string;
  author: string;

  id: number;

}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [];


  musicData: any = null;


  constructor(private umbracoService: UmbracoService) {
   this.fetchSongs();





  }


  private fetchSongs(): void {
    this.umbracoService.getMusic().subscribe(
      (item) => {

        for(let i = 0; i < item.length; i++)
        {
          console.log('Name: ' + item[i][0].values[0].publishedValue)
          console.log('Author: ' + item[i][1].values[0].publishedValue)

          let message: Message = new class implements Message {
            author: string = item[i][1].values[0].publishedValue;
            id: number = i;
            name: string = item[i][0].values[0].publishedValue;
          }

          this.messages.push(message);

        }



        //console.log('Author: ' + item[1].values[0].publishedValue);
        // Further processing of data can be done here
      },
      (error) => {
        console.error('Error occurred:', error); // Log any errors
      }
    );
  }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }



}

interface Song {
  name: string;
  author: string;
}
