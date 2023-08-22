import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent{

  @Input() contenidoMarkDownInput? = ''
  @Input() placeholderTextArea: string = ''
  @Output() textoEscrito: EventEmitter<string> = new EventEmitter<string>()

  inputTextArea(evento: any) {
    const text = evento.target?.value
    this.contenidoMarkDownInput = text;
    this.textoEscrito.emit(text)
  }

}
