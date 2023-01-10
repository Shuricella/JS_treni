// Реализация тестирования функции (спецификация)
describe("function POW", function() {

    describe("возводит число в степень 3", function() {

        function makeTest(x) {
          let expected = x * x * x;
      
          it(`число ${x} возвести в степень 3, результат ${expected}`, function() {
          assert.equal(pow(x, 3), expected);
          });
      
        }
        
        for(let j = 1; j <= 5; j++){
          makeTest(j);
        }

    })

    describe("возводит число в степень 4", function() {

        function makeTest(x) {
          let expected = x * x * x * x;
      
          it(`число ${x} возвести в степень 4, результат ${expected}`, function() {
          assert.equal(pow(x, 4), expected);
          });
      
        }
        
        for(let j = 1; j <= 5; j++){
          makeTest(j);
        }

    })

    // Проводим тестирование на NaN
    describe("проверка степени", function() {
      
          it("Проверка числа степени", function() {
          assert.isNaN(pow(2, -1));
          });
        
          it("Проверка числа степени", function() {
            assert.isNaN(pow(2, 0.5));
            });
    })

});
  