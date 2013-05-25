test('constructor',function(){
   var c=new Calculator();
   
   ok(c instanceof Calculator,'new演算子をつけて');

   c = Calculator();
   
   ok(c instanceof Calculator,'new演算子をつけて');
});

test('getExpression',function(){
    var c = new Calculator();
    var result = c.getExpression();
    equal(result,'');

});
test('append',function(){
var c= new Calculator;
c.append(1);
result= c.getExpression();
equal(result,1);
});
 
test('clearEntry',function(){
var c= new Calculator;
c.append(123);
c.clearEntry();
result=c.getExpression();
equal(result,12);
});

test('clear',function(){
var c =new Calculator;
c.append(123);
c.clear();
result=c.getExpression();
equal(result,'');
});

test('calculate',function(){
var c=new Calculator;
attend(1×2);
c.clear();
result=c.getExpression();
equal(result,2);
});

});
