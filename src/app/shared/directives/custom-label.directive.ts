import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit{
  @Input() set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrorMessage();
  }

  private htmlElement?: ElementRef<HTMLElement>
  private _color: string = 'green';
  private _errors?: ValidationErrors | null;

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setStyle();
  }

  setStyle():void {
    if(!this.htmlElement) return;
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setErrorMessage():void {
    if(!this.htmlElement) return;

    if(!this._errors) {
      this.htmlElement.nativeElement.innerText = 'No hay errores.';
      return;
    }

    const errors = Object.keys(this._errors);
    console.log(this._errors)
    if(errors.includes('required')) {
      this.htmlElement.nativeElement.innerText = 'Este campo es requerido.';
      return;
    }

    if(errors.includes('minlength')) {
      const min = this._errors!['minlength']['requiredLength'];
      const current = this._errors!['minlength']['actualLength'];

      this.htmlElement.nativeElement.innerText = `El mínimo de caracteres es de ${min}, tienes ${current}`;
      return;
    }

    if(errors.includes('email')) {
      this.htmlElement.nativeElement.innerText = 'Debes introducir un email.';
      return;
    }
  }

}
