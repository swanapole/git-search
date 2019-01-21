import { Injectable } from '@angular/core';
import { Profile } from './profile';
import { Repo } from './repo';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
// import {  Http, Headers } from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class GhProfileService {
  http:HttpClient;
  private username:string;
  profile:Profile;
  repos:Repo;
  reposArray:any;
  BaseUrl = environment.BaseUrl;
  FinalUrl = environment.FinalUrl;

  constructor(private https:HttpClient){
    this.username = "swanapole";
    this.profile = new Profile ("","","","","","","","","",0,0,0,0,"");
    this.repos = new Repo("","","");
    this.reposArray = [];
    this.http=https;
  }

  profileRequest(){
    interface ApiResponse{
      name:string;
      login:string;
      company:string;
      location:string;
      avatar_url:string;
      bio:string;
      hireable:string;
      blog:string;
      email:string;
      followers:number;
      following:number;
      public_gists:number;
      public_repos:number;
      html_url:string;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get(this.BaseUrl + this.username + this.FinalUrl).toPromise().then(response=>{
         this.profile.name = response.name;
         this.profile.login = response.login;
         this.profile.company = response.company;
         this.profile.location = response.location;
         this.profile.avatar_url = response.avatar_url;
         this.profile.bio = response.bio;
         this.profile.hireable = response.hireable;
         this.profile.blog = response.blog;
         this.profile.email = response.email;
         this.profile.followers = response.followers;
         this.profile.following = response.following;
         this.profile.public_gists = response.public_gists;
         this.profile.public_repos = response.public_repos;
         this.profile.html_url = response.html_url;
        resolve()
        console.log("Working!");
        console.log(this.profile);
      },
      error=>{
        console.log("Error occured")
        reject(error);
      })
    })
    return promise;
  }

  repoRequest(){
    this.reposArray = [];
    interface ApiResponse{
      name:string;
      html_url:string;
      description:string;
    }


    let promise = new Promise((resolve,reject)=>{
      this.http.get(this.BaseUrl + this.username +"/repos" + this.FinalUrl).toPromise().then(response=> {
         for (let repo of response) {
         this.repos.name = repo.name;
         this.repos.html_url = repo.html_url;
         this.repos.description = repo.description;
         this.reposArray.push(this.repos);
         this.repos =new Repo("","","");

         }
        console.log(this.reposArray);

      },
      error=>{
        console.log("Error occured");
      })
    })
    return promise;
  }

  updateProfile(username:string){
    this.username = username;
  }
}
