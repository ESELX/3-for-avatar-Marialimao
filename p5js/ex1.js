//Variáveis tipo let nomeDaVar;

function setup() { //código que só corre uma vez

  ///Não Apagar para Baixo até <<<
  var canvasDiv = document.getElementById('ex1');
  var width = canvasDiv.offsetWidth;
  var sketchCanvas = createCanvas(width,width*.75);
  console.log(sketchCanvas);
  sketchCanvas.parent('ex1');
  ///<<< Não fica a faltar createCanvas


}

function draw() { //código que corre em loop
  background(220,205,0); //podem apagar esta linha!
  numDiv = 4;//map(mouseX,0,width,5,50);

    for (i = 0; i < numDiv-1; i++){
      for (j = 0; j <numDiv-1; j++){
        avatar((i+1)*width/numDiv,(j+1)*height/numDiv, 15);

      }
    }
  }

  function avatar(posX, posY, diam){
    fill(206,0,207)
    ellipse(posX,posY,diam+15);

    fill(206)
    ellipse(posX-diam/4,posY-diam/5,diam/3); //olho esquerdo

    fill(6,0,207)
    ellipse(posX+diam/4,posY-diam/5,diam/5);//olho direito
    fill(206,0)

    ellipse(posX+diam/200,posY-diam/300,diam/5);//olho direito
    fill(206,207,2)

}
