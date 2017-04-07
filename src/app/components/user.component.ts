import { Component } from '@angular/core';
import {PostService} from '../services/post.service'

@Component({
      moduleId: module.id,
      selector: 'user',
      templateUrl:'user.component.html',
      providers: [PostService]
})
export class UserComponent  { 
    name:String;
    email:String;
    address:address;
    hobbies:String[];
    showhobbies:boolean;
    posts:Post[];

      constructor (private postService: PostService) {
            console.log('constructor run');
            this.name = 'Grimor SuperSaiyanPlunker 3';
            this.email= 'asdf@gmai.com';
            this.address= {
                  street:'losllombos',
                  city:'leon',
                  state:'españa'          
            };
            this.hobbies=['music','darksouls','sports'];
            this.showhobbies = false;

            this.postService.getPosts().subscribe(posts => {
                 this.posts = posts;              
            })
      }
       toggleHobbies () {
            console.log('toggleHobbies run');           
            this.showhobbies = !this.showhobbies;
      }

      addHobby(hobby:String){
            console.log(hobby);
            this.hobbies.push(hobby);
      }

     deleteHobby(i:number){            
            this.hobbies.splice(i,1);
      }
 }

 interface address{
      street:String;
      city:String;
      state:String;    
 }
 interface Post{
       id: number;
       title:string;
       body:string;
 }

 
