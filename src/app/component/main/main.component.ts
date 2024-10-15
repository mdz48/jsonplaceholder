import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { IPost } from '../../models/ipost';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  posts : IPost[] = [];
  postForm: FormGroup;
  constructor(readonly postService : PostService, private router: Router){
    this.postForm =

  ngOnInit(): void {
    this.postService.getPosts().subscribe
  } 


}
