import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pipe-replace-domain';
  news_body = '<h2>Diseño minimalista y adaptable</h2>\n' +
    '\n' +
    '<p>El restyling de la nueva web, tiene como principal objetivo llegar al mayor número de usuarios posibles. Por ello, se ha construido una web adaptable a cualquier dispositivo del mercado.</p>\n' +
    '<img alt="All devices julen melgar" src="/sites/default/files/inline-images/julenmelgaralldevices.png" class="align-center"><h2>Últimas tecnologías.</h2>\n' +
    '\n' +
    '<p>En esta nueva versión de la web, disponemos de una capa de presentación montada sobre <a href="https://angular.io/" target="_blank">Angular</a> + <a href="https://ionicframework.com/" target="_blank">Ionic 3</a>, lo que nos permite migrar la web a cualquier plataforma (<a href="https://www.apple.com/es/ios" target="_blank">IOS</a>, <a href="https://www.android.com/intl/es_es/" target="_blank">Android</a>, Windows Phone...).</p>\n' +
    '\n' +
    '<p>Mientras que la capa de negocio y datos está montada sobre una API REST en <a href="https://www.drupal.org/" target="_blank">Drupal 8</a>, que nos proporciona un back amigable para la gestión de los&nbsp;datos.</p>\n' +
    '<img alt="Últimas tecnologías" src="/sites/default/files/inline-images/tecnologia.png" class="align-center">';
}
