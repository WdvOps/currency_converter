import { ConverterService } from './../../converter.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  formulario : any;
  valorConvertido! : number;
  visibilidadeValorConvertido! : boolean;

  constructor( private converterService: ConverterService ) {  }



  ngOnInit(): void {
    this.visibilidadeValorConvertido = false;
    this.formulario = new FormGroup({
      valor: new FormControl(null)
    });

  }

  Converter(): void {

    const valor = this.formulario.value.valor;
    this.visibilidadeValorConvertido = true;
    this.converterService.MakeConvert().subscribe(result => {
      this.valorConvertido = Number((valor * result.rates.BRL).toFixed(2));
    })
  }
}
