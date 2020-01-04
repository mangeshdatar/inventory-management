import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from 'angular-reactive-validation';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private loginForm: FormGroup;
  private readonly errorMessage: string;
  constructor(private readonly fb: FormBuilder,private router: Router,		public afAuth: AngularFireAuth,public toastController: ToastController
    ) { }
  ngOnInit() {
    this.loginForm = this.fb.group({
      // reactive form
      username: new FormControl('', {
        validators: [Validators.required(), Validators.minLength(3)],
        updateOn: 'change',
      }),
      password: new FormControl('', {
        validators: [Validators.required(), Validators.minLength(1)],
        updateOn: 'change',
      }),
    });
  }
  onSubmit() {
    console.log('submit')

  }
  login() {
        return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(this.loginForm.value.username, this.loginForm.value.password)
      .then(
        res => {
          resolve(res);
          if (res) {
            this.router.navigate(['inventory']);
          }
          console.log(res);
        },
        err => {
          reject(err);
          console.log(err);
          this.presentToast(err);
        })
    })
  }
  async presentToast(err) {
    const toast = await this.toastController.create({
      message: err,
      duration: 2000,
      color:"danger"
    });
    toast.present();
  }
}
