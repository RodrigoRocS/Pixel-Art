const titleHeader = () => {
  const headerH1 = document.getElementsByTagName('body')[0];
  const creatH1 = document.createElement('h1');
  creatH1.id = 'title';
  creatH1.innerText = 'Paleta de Cores';
  headerH1.appendChild(creatH1);
};

const colorPallet = () => {
  const palletP = document.getElementsByTagName('body')[0];
  const colorPallets = document.createElement('div');
  colorPallets.id = 'color-palette';
  palletP.appendChild(colorPallets);
};

const colorBoxes = () => {
  const colorPallets = document.getElementById('color-palette');
  for (let index = 0; index < 4; index += 1) {
    const colorBox = document.createElement('div');
    colorBox.className = 'color';
    colorBox.style.border = '1px solid black';
    colorBox.style.display = 'inline';
    colorBox.style.padding = '25px';
    colorPallets.appendChild(colorBox);
  }
};

// const primeBlack = () => {
//   const paintBoxCol = document.getElementsByClassName('color');
//   paintBoxCol[0].style.backgroundColor = 'rgb(0,0,0)';
// };

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

const changeColBtn = () => {
  const paiDoBtn = document.getElementsByTagName('body')[0];
  const criaBtn = document.createElement('button');
  criaBtn.id = 'button-random-color';
  criaBtn.innerText = 'Cores aleatórias';
  criaBtn.addEventListener('click', paintBox);
  criaBtn.style.marginTop = '25px';
  paiDoBtn.appendChild(criaBtn);
};

window.onload = () => {
  titleHeader();
  colorPallet();
  colorBoxes();
  paintBox();
  changeColBtn();
};
