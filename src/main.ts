import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from './app/app.module'

// Linha para ser carregado um modulo inicialmente ao executar o projeto
platformBrowserDynamic().bootstrapModule(AppModule);

// Linhas para ser carregado um component standalone inicialmente ao executar o projeto
// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
