import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { IPost } from '../../models/ipost';
import { FormGroup, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, CardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  posts : IPost[] = [];
  postForm: FormGroup;

  constructor(readonly postService : PostService, private router: Router){
    this.postForm = new FormGroup({
      userId: new FormControl(0, [Validators.required]),
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((value : IPost[]) => {
      this.posts = value
    })
  }

   save() {
    if (this.postForm.valid) {
      const post = {
        userId : this.postForm.get('userId')?.value,
        title : this.postForm.get('title')?.value,
        body: this.postForm.get('body')?.value,
        id: 0
      }

      console.log(post);
      this.postService.doPost(post).subscribe((createdPost: IPost) => {
        console.log('Post creado:', createdPost);
        // this.posts.push(createdPost);
      });
    }
  }
}
