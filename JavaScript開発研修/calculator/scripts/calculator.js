function Calculator(){
   if (!(this instanceof Calculator)){
        return new Calculator();
   }
   this.expression='';
 
   this.getExpression=function(){
     return this.expression;
   };
 
   this.append=function(ch){
   this.expression +=ch
    };


  this.clearEntry=function(){
  var c2=this.expression
  this.expression=c2.substring(0,c2.length-1)
  return this.expression
  };

  this.clear=function(){
  this.expression=''
  return this.expression;
  };

  this.calculate=function(){
  this.expression=this.expression.replace('Å~','*');
  this.expression=this.expression.replace('ÅÄ','/');
  this.expression=eval(this.expression);
  };

};