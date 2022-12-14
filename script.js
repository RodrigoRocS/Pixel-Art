const titleHeader = () => {
  const headerH1 = document.getElementsByTagName('body')[0];
  const creatH1 = document.createElement('h1');
  creatH1.id = 'title';
  creatH1.innerText = 'Paleta de Cores';
  headerH1.appendChild(creatH1);
};
titleHeader();

const colorPallet = () => {
  const palletP = document.getElementsByTagName('body')[0];
  const colorPallets = document.createElement('div');
  colorPallets.id = 'color-palette';
  palletP.appendChild(colorPallets);
};

colorPallet();
const colorBoxes = (param) => {
  const colorPallets = document.getElementById('color-palette');
  for (let index = 0; index < 4; index += 1) {
    const colorBox = document.createElement('div');
    colorBox.className = 'color';
    colorBox.style.border = '1px solid black';
    colorBox.style.backgroundColor = param[index];
    colorBox.style.display = 'inline';
    colorPallets.appendChild(colorBox);
  }
};
colorBoxes(['black', 'yellow', 'blue', 'red']);
