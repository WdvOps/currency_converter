import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  formulario : any;
  valorConvertido! : number;
  visibilidadeValorConvertido! : boolean;

  ngOnInit(): void {
    this.formulario = new FormGroup({
      valor: new FormControl(null)
    });


}}
