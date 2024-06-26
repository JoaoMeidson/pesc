import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  readonly pescEmail = 'parque.ecologico@saocarlos.sp.gov.br';

  goToFacebook(): void {
    window.open('https://www.facebook.com/ParqueEcologicoSaoCarlos/', '_blank');
  }

  goToInstagram(): void {
    window.open('https://www.instagram.com/parqueecologicosaocarlos/', '_blank');
  }
}
