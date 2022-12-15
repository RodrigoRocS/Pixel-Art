const pegaBody = document.getElementsByTagName('body')[0];

const titleHeader = () => {
  const creatH1 = document.createElement('h1');
  creatH1.id = 'title';
  creatH1.innerText = 'Paleta de Cores';
  pegaBody.appendChild(creatH1);
};

const colorPallet = () => {
  const colorPallets = document.createElement('div');
  colorPallets.id = 'color-palette';
  pegaBody.appendChild(colorPallets);
};

const colorBoxes = () => {
  const colorPallets = document.getElementById('color-palette');
  for (let index = 0; index < 4; index += 1) {
    const colorBox = document.createElement('div');
    colorBox.className = 'color';
    colorBox.style.border = '1px solid black';
    colorBox.style.display = 'inline-block';
    colorBox.style.padding = '25px';
    colorPallets.appendChild(colorBox);
  }
};

const randomCollors = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
};

const paintBox = () => {
  const paintBoxCol = document.getElementsByClassName('color');
  for (let index = 1; index < paintBoxCol.length; index += 1) {
    paintBoxCol[index].style.backgroundColor = randomCollors();
    if (paintBoxCol[0].style.backgroundColor !== 'rgba(0,0,0)') {
      paintBoxCol[0].style.backgroundColor = 'rgba(0,0,0)';
    }
  }
};

const saveFirstPallet = () => {
  const pegaCores = document.querySelectorAll('.color');
  const saveColor = [];
  for (let index = 0; index < pegaCores.length; index += 1) {
    saveColor.push(pegaCores[index].style.backgroundColor);
  }
  localStorage.setItem('colorPalette', JSON.stringify(saveColor));
};

const paintBox2 = () => {
  const paintBoxCol = document.getElementsByClassName('color');
  for (let index = 1; index < paintBoxCol.length; index += 1) {
    paintBoxCol[index].style.backgroundColor = randomCollors();
    if (paintBoxCol[0].style.backgroundColor !== 'rgba(0,0,0)') {
      paintBoxCol[0].style.backgroundColor = 'rgba(0,0,0)';
    }
  }
  saveFirstPallet();
};

const changeColBtn = () => {
  const criaBtn = document.createElement('button');
  criaBtn.id = 'button-random-color';
  criaBtn.innerText = 'Cores aleatórias';
  criaBtn.addEventListener('click', paintBox2);
  criaBtn.style.marginTop = '25px';
  pegaBody.appendChild(criaBtn);
};

const returnFirstPalett = () => {
  const pegaCores = document.querySelectorAll('.color');
  const getColorsBack = JSON.parse(localStorage.getItem('colorPalette'));

  for (let index = 0; index < getColorsBack.length; index += 1) {
    pegaCores[index].style.backgroundColor = getColorsBack[index];
  }
};

const criarPainel = () => {
  const painelCriar = document.createElement('div');
  painelCriar.id = 'pixel-board';
  pegaBody.appendChild(painelCriar);
  painelCriar.style.display = 'inline-block';
  painelCriar.style.padding = '25px';
  painelCriar.style.border = '2px solid black';

  for (let index = 0; index < 5; index += 1) {
    const criaLinha = document.createElement('div');
    // criaLinha.className = 'pixel';
    painelCriar.appendChild(criaLinha);
    for (let index2 = 0; index2 < 5; index2 += 1) {
      const criaColuna = document.createElement('div');
      criaColuna.className = 'pixel';
      criaLinha.appendChild(criaColuna);
    }
  }
};

const pixelCss = () => {
  const pegaPixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < pegaPixel.length; index += 1) {
    pegaPixel[index].style.backgroundColor = 'white';
    pegaPixel[index].style.width = '40px';
    pegaPixel[index].style.height = '40px';
    pegaPixel[index].style.border = '1px solid black';
    pegaPixel[index].style.display = 'inline-block';
  }
};

const selecionaCor = () => {
  const pegaCor = document.querySelectorAll('.color');
  for (let index = 0; index < pegaCor.length; index += 1) {
    pegaCor[0].classList.add('selected');
    pegaCor[index].addEventListener('click', (event) => {
      const selecionado = document.querySelector('.selected');
      if (selecionado) {
        selecionado.classList.remove('selected');
      }
      event.target.classList.add('selected');
    });
  }
};

const pintaPixel = () => {
  const getPixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < getPixel.length; index += 1) {
    getPixel[index].addEventListener('click', (event) => {
      const selecionado = document.querySelector('.selected');
      event.target.style.backgroundColor = selecionado.style.backgroundColor;
    });
  }
};

window.onload = () => {
  titleHeader();
  colorPallet();
  colorBoxes();
  paintBox();
  criarPainel();
  pixelCss();
  changeColBtn();
  if (localStorage.getItem('colorPalette')) {
    returnFirstPalett();
  }
  selecionaCor();
  pintaPixel();
};
