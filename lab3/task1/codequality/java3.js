//BDD (Behavior Driven Development)
it ("raises x to the power n", function(){
    let x = 5;

    let result = x;
    assert.equal(pow(x, 1), result);

    result *= x;
    assert.equal(pow(x, 2), result);


    result *= x;
    assert.equal(pow(x, 3), result);
});

// Главная ошибка: Нарушение принципа "Один тест проверяет одну вещь".

// Свалка проверок: Внутри одного блока it находятся сразу три проверки (assert).

// Эффект домино: Если первый assert (для степени 1) упадет, выполнение функции прервется. Ты никогда не узнаешь, работают ли степени 2 и 3.

// Сложность отладки: Если тест выдаст ошибку, сообщение будет общим: "Raises x to the power n — FAILED". Тебе придется лезть в код теста,
//  чтобы понять, на какой именно итерации (1, 2 или 3) всё сломалось.




describe("pow", function(){
    it ("5 в степени 1 равно 5", function(){
        assert.equal(pow(5,1), 5);
    });
    
    it("5 в степени 2 равно 25",function(){
        assert.equal(pow(5,2), 25);
    });
    it("5 в степени 3 равно 125", function(){
        assert.equal(pow(5,3),125);
    });
});


// Основные термины BDD простыми словами
// Spec (Спецификация): Это твой файл с тестами. Он служит одновременно и проверкой, и инструкцией (документацией).

// describe: Заголовок главы. "Я описываю работу функции Х".

// it: Конкретный пример. "Она (функция) должна делать вот это".

// assert (Утверждение): Твоя ставка. "Я утверждаю, что результат будет 8". Если ты не прав — тест проигран.




// Краткое резюме по "хукам":
// before/after — запустить один раз (например, подключиться к базе данных).

// beforeEach/afterEach — запускать перед каждым it. Это полезно, если каждый тест должен начинать с "чистого листа" (например, обнулять переменную).






function sum(a, b){
    return a + b;
}



describe("sum", function(){
    it("2+3 = 5",function(){
        assert.equal(sum(2, 3), 5);
    });

    it("4+5=9",function(){
        assert.equal(sum(4, 5), 9);
    });

    it("7 + 8 = 15", function(){
        assert.equal(sum(7, 8), 15);
    });
});







// task 1
it("Raises x to the power n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});





describe("Raises x to power n", function() {
  it("5 in the power of 1 equals 5", function() {
    assert.equal(pow(5, 1), 5);
  });

  it("5 in the power of 2 equals 25", function() {
    assert.equal(pow(5, 2), 25);
  });

  it("5 in the power of 3 equals 125", function() {
    assert.equal(pow(5, 3), 125);
  });
});




describe("Raises x to power n", function() {
  it("5 in the power of 1 equals 5", function() {
    assert.equal(pow(5, 1), 5);
  });

  // Mocha will run only this block
  it.only("5 in the power of 2 equals 25", function() {
    assert.equal(pow(5, 2), 25);
  });

  it("5 in the power of 3 equals 125", function() {
    assert.equal(pow(5, 3), 125);
  });
});