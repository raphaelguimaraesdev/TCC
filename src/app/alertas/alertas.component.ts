import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})

export class AlertasComponent {

  @Input()
  public alertas: Array<IAlerta> = [];
  public backup: Array<IAlerta> = [];

  constructor() {
    this.alertas.push({
      id: 1,
      type: 'success',
      mensagem: 'This is an success alert',
    }
  }

  public fecharAlerta(alerta: IAlerta) {
    const index: number = this.alertas.indexOf(alerta);
    this.alertas.splice(index, 1);
  }

  public resetar() {
    this.alertas = this.backup.map((alerta: IAlerta) => Object.assign({}, alerta));
  }

}

export interface IAlerta {
  id: number;
  type: string;
  mensagem: string;
}
