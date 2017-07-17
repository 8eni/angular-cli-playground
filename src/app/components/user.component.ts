import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostsService]
})
export class UserComponent {
  
  name: string;
  email: string;
  address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];
  
  constructor(private postsService: PostsService){
    console.log('ran...')
    this.name = 'app';
    this.email = 'john@gmail.com'
    this.address = {
    	'firstLine': '123 MAIN ST',
    	'secondLine': 'Portland Oregan' 
    }
    this.hobbies = ['music','sports','movies'];
    this.showHobbies = false;

    this.postsService.getPosts().subscribe(posts => {
      this.posts= posts;
    });

  }

  switchHobbies () {
    (!this.showHobbies) ? this.showHobbies = true : this.showHobbies = false; 
  }

  addHobby(hobby){
    console.log(hobby)
    this.hobbies.push(hobby)
  }

  deleteHobby(i) {
    this.hobbies.splice(i, 1);
  }
}

interface address {
  firstLine: string;
  secondLine: string;
}
interface Post {
  id: number;
  title: string;
  body: string;
}