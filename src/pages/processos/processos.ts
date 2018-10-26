import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProcessoService } from '../../service/processo.service';
import { Processo } from '../../model/processo';


/**
 * Generated class for the ProcessosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-processos',
  templateUrl: 'processos.html',
})
export class ProcessosPage {

  processos : Processo[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public service : ProcessoService) {
    
  }

  ionViewDidLoad() {
    this.service.getProcessos()
   .subscribe(response => {
     this.processos = response;
     
   });

  }
}
