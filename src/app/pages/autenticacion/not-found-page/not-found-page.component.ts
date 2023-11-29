import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  template: `

  <div class="not-found-container">

  <img src="../../../../assets/img/notfound.png" alt="Imagen no encontrada" class="not-found-image">

</div>

`,
styles: [`

.not-found-container {
width: 100%;
height: 75vh;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
}

.not-found-image {
width: auto;
height: 100%;
object-fit: contain;
object-position: center;
}

`]
})
export class NotFoundPageComponent {

}
