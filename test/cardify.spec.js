describe('validar si img y attr existen', () => {
  it('la img existe', () => {
    expect($('img')).to.exist;
  });
  it('la imagen tiene el atributo src', () => {
    expect($('img').attr('src')).to.exist;
  });
  it('la imagen tiene un atributo alt', () => {
    expect($('img').attr('alt')).to.exist;
  });
});

describe('prueba para funcion createFigureInImg()', () => {
  var contenedor = 'body';
  createFigureInImg(contenedor);
  it('debería agregar un figure por cada img', () => {
    var countImg = $(contenedor).find('figure').length;
    var countFigures = $(contenedor).find('img').length;
    assert.equal(countImg, countFigures);
  });
  it('debería agregar cada figure como padre de cada img', () => {
    var countImg = $(contenedor).find('img').length;
    var count = 0;
    $('body').find('img').parent().each(function(i, el) {
      if ($(el).is('figure')) {
        count++;
      }
    });
    assert.equal(countImg, count);
  });
  it('Deberia tener un hermano llamado figcaption', () => {
    var countImg = $(contenedor).find('img').length;
    var countBrother = $('body').find('img').next().length; 
    assert.equal(countImg, countBrother);
  });
});

describe('prueba para funcion hideFigcaption()', () => {
  var contenedor = 'body';
  hideFigcaption(contenedor);
  
  it('Debería esconder figcaption', () => {
    var figCaption = $(contenedor).find('figcaption');
    var count = 0;
    figCaption.each(function(i, el) {
      console.log($(el).css('display'));
      if ($(el).css('display') == 'none') {
        count++;
      }
    });
    assert.equal(count, figCaption.length);
  });
});

