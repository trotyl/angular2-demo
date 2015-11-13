import { bootstrap, Component } from 'angular2/angular2';


@Component({
    selector: 'ng-demo',
    template: `
    <div class="container">
        <div class="jumbotron">
            <h1>This is the app component.</h1>
            <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
        </div>
    </div>
    `
})
export class AppComponent {

}

//bootstrap(AppComponent);
