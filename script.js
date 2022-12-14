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
const colorBoxes = () => {
  const colorPallets = document.getElementById('color-palette');
  for (let index = 0; index < 4; index += 1) {
    const colorBox = document.createElement('div');
    colorBox.className = 'color';
    colorPallets.appendChild(colorBox);
  }
};
colorBoxes();
