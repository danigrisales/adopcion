import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
/*
  public usuario: string = null;
  public password:string = null;
  
  public request;
*/
public loading = false;

public login(userLogin: NgForm){
  this.loading = true;
  const formLogin ={
    userName: userLogin.form.value.user,
    password: userLogin.form.value.password,
    
    
 }
 console.log(userLogin)
 
 

}
/*this.router.navigate(['video'], { relativeTo: this.route.parent });*/

    @ViewChild('f', {static: false}) loginForm: NgForm;

    constructor(
        private loginService: LoginService,
        private router: Router,
        private route: ActivatedRoute) { }



/*
        public login(){
            this.loading = true;
            const formLogin ={
              usuario : this.usuario,
              pass: this.password,
              
            
            }
         
          this.loginService.login(this.usuario, this.password).subscribe(dataLogin => {
            if (dataLogin.message.includes("logueado")) {
              alert("Gracias por preferirinos")
              // On login link click
   
              this.router.navigate(['video'], { relativeTo: this.route.parent });
    
            }
          //this.router.navigate(['/home'])
          });
          
        
        
        
        }
        
        
        
        
        
        
          
          autenticar()
          {
            console.log('autenticando')
            //this.loginService.autenticarService('cesar')
             
            this.loginService.obtenerProductos().subscribe(dataFinal => {
              console.log(dataFinal)
              
             },
               error => {
                 console.log(error)
                 
               });
         
          }
       
*/
    // On submit button click
    onSubmit() {
        this.loginForm.reset();
    }
    // On Forgot password link click
    onForgotPassword() {
        this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
    }
    // On registration link click
    onRegister() {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    }

  ngOnInit() {
  }

}
