function montarFrase() {
  function getFrase() {
    if (true) {
      return firstLetterUpper(frase1) + ', ' + frase2 + ' ' + frase3 + '?';
    } else {
      return frase4;
    }
  }

  const a1 = [
    'desculpa atrapalhar',
    'sem brincadeira, estou perdida',
    'tenho uma dúvida',
    'mas falando serio',
    'preciso muito de sua ajuda',
    'sério cara, não entendi',
    'falando sério, não estou entendendo',
    'me tire uma dúvida',
    'dúvida',
    'sendo bem direta',
    'estive pensando',
    'falando sério agora',
  ];

  const a2 = [
    'teria como vc me explicar como que eu faço para',
    'como que eu faço para',
    'consegue ajudar me explicando como que eu faço para',
    'explique pra mim como que eu faço para',
    'o que eu devo fazer se eu quiser',
    'o que eu devo fazer para que eu consiga',
    'o que eu preciso fazer para que eu possa',
    'me explique em detalhes, como eu faço para',
    // 'para mim [] como eu faço?',
    // 'se eu quiser [] o que eu devo fazer?',
    // 'para mim [] devo fazer o quê?',
  ];

  const a3 = [
    'abrir a porta',
    'contar até 10',
    'peidar baixinho',
    'cagar de roupa',
    'dormir pelada',
    'por meia sem tênis',
    'respirar',
  ];

  const aX = [
    'por que zero elevado zero é igual a 1',
    'como é zero em algarismos romanos',
    'Existe um universo alternativo onde universos alternativos não existem',
    'Por que baixamos a cabeça para correr na chuva… molha menos',
    'se nossos joelhos fossem ao contrário, como seriam nossas cadeiras',
    'se sabemos a velocidade da luz, qual será a velocidade do escuro',
    'Se depois do banho estamos limpos, por que lavar uma toalha?',
    'Por que é que as lojas abertas 24 horas possuem fechadura?',
    'Se a lente da câmera é redonda, por que a foto sai quadrada?',
    'Por que existe bolso em pijamas?',
    'Adão tinha umbigo?',
    'Por que dormimos só quando estamos dormindo?',
    'Porque os kamikazes usavam capacete?',
  ];

  // Nossa, desculpa a pergunta besta, mas qual é a raiz quadrada de pi ?

  const n1 = Math.floor(Math.random() * a1.length);
  const n2 = Math.floor(Math.random() * a2.length);
  const n3 = Math.floor(Math.random() * a3.length);
  const nX = Math.floor(Math.random() * aX.length);

  const frase1 = a1[n1].toLowerCase();
  const frase2 = a2[n2].toLowerCase();
  const frase3 = a3[n3].toLowerCase();

  const frase = getFrase();

  document.getElementById('frase').innerText = frase;

  // document.getElementById('n1').innerText = n1.toString();
  // document.getElementById('n2').innerText = n2.toString();
  // document.getElementById('n3').innerText = n3.toString();

  // document.getElementById('n1').innerText = a1.length - 1;
  // document.getElementById('n2').innerText = a2.length - 1;
  // document.getElementById('n3').innerText = a3.length - 1;

  const div = document.querySelector('.bb');
  div.classList.add('tremor');

  // Remove a classe após a animação para permitir reaplicar
  div.addEventListener(
    'animationend',
    () => {
      div.classList.remove('tremor');
    },
    { once: true },
  );
}

function firstLetterUpper(frase) {
  return frase.charAt(0).toUpperCase() + frase.slice(1).toLowerCase();
}
