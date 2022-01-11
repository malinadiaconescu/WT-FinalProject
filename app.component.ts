import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from './post';
import { PostService } from './post.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'wt-final';
  public posts: Post[] | undefined;
  constructor(private postService: PostService) { }

  ngOnInit()
  {
    this.getPosts();
  }

  public getPosts(): void
  {
    this.postService.getPosts().subscribe(
      (response: Post[]) =>
        {
          this.posts = response;
        },
        (error: HttpErrorResponse) =>
        {
          alert(error.message);
        }
    );
  }



  public onAddPost(addForm: NgForm): void {
    document.getElementById('add-post-form')?.click();
    this.postService.addPost(addForm.value).subscribe(
      (response: Post) => {
        console.log(response);
        this.getPosts();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }


  public onOpenModal(post: Post |null, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button')
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal')
    if (mode == 'add'){
      button.setAttribute('data-target','#addPostModal');
      const aux=document.getElementById('newsfeed');
      aux.style.display="block";
      const aux1=document.getElementById('form');
      aux1.style.display="none"
      const aux2=document.getElementById('homepage');
      aux2.style.display="none"
      const aux3=document.getElementById("delete");
    aux3.style.display="none"
    }
    if (mode == 'delete'){
      button.setAttribute('data-target','#deletePostModal');
      const aux=document.getElementById("delete");
      aux.style.display="block";
      const aux1=document.getElementById("form");
      const aux2=document.getElementById("newsfeed");
      const aux3=document.getElementById("homepage");
      aux1.style.display="none";
      aux2.style.display="none";
      aux3.style.display="none";

    }
    if (mode == 'view')
      {button.setAttribute('data-target','#viewPostModal');
      const aux=document.getElementById('form');
      aux.style.display="block"
      const aux1=document.getElementById('newsfeed');
      aux1.style.display="none"
      const aux2=document.getElementById('homepage');
      aux2.style.display="none"
      const aux3=document.getElementById("delete");
      aux3.style.display="none"
      }
    if(mode=='home')
    {
      this.goToHomePage();
    }

    container?.append(button);
    button.click()
  }

  public goToNewsFeed():void
  {
    const aux=document.getElementById('form');
    aux.style.display="none";
    const aux1=document.getElementById('newsfeed');
    aux1.style.display="block";
    const aux2=document.getElementById('homepage');
    aux2.style.display="none";
    const aux3=document.getElementById("delete");
    aux3.style.display="none"
  }
  public numberOfPosts():any{
      return this.posts.length;
  }

  public friends():any{
    var users:string[]=[];
    for(var post of this.posts)
    {
      if(users.includes(post.user)==false)
      users.push(post.user)
    }
    return users.toString();
  }

  public goToHomePage():void{
    const aux=document.getElementById("form");
    aux.style.display="none";
    const aux1=document.getElementById("newsfeed");
    aux1.style.display="none";
    const aux2=document.getElementById("homepage");
    aux2.style.display="block";
    const aux3=document.getElementById("delete");
    aux3.style.display="none"
  }


  public onDeletePost1(PostId: number): void {
    this.postService.deletePost(PostId).subscribe(
      (response: void) => {
        console.log(response);
        console.log(PostId);
        this.getPosts();
      },
      (error: HttpErrorResponse) => {
        console.log(PostId)
        alert(error.message);
      }
    );
  }

  public onDeletePost(): void {

    const removeForm = parseInt((document.getElementById("id") as HTMLInputElement).value);
    this.postService.deletePost(removeForm).subscribe(
      (response: void) => {
        alert("Post "+removeForm+" deleted!")
      },
      (error: HttpErrorResponse) => {
        console.log(removeForm)
        alert(error.message);
      }
    );
  }


public onDeletePost3(PostId: number ): void {
  this.postService.deletePost(PostId).subscribe(
    (response: void) => {
      console.log(response);
      console.log(PostId);
      this.getPosts();
    },
    (error: HttpErrorResponse) => {
      console.log(PostId)
      alert(error.message);
    }
  );
}
}
