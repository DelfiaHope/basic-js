const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
  
class VigenereCipheringMachine {

  constructor(type){

    if(type === undefined || type){
      this.machine = 'direct'
    } if(type === false){
      this.machine = 'reverse'
    }

    this.alphabet =  ['abcdefghijklmnopqrstuvwxyz'.toUpperCase().split(''),
                      'bcdefghijklmnopqrstuvwxyza'.toUpperCase().split(''), 
                      'cdefghijklmnopqrstuvwxyzab'.toUpperCase().split(''), 
                      'defghijklmnopqrstuvwxyzabc'.toUpperCase().split(''), 
                      'efghijklmnopqrstuvwxyzabcd'.toUpperCase().split(''), 
                      'fghijklmnopqrstuvwxyzabcde'.toUpperCase().split(''), 
                      'ghijklmnopqrstuvwxyzabcdef'.toUpperCase().split(''), 
                      'hijklmnopqrstuvwxyzabcdefg'.toUpperCase().split(''), 
                      'ijklmnopqrstuvwxyzabcdefgh'.toUpperCase().split(''), 
                      'jklmnopqrstuvwxyzabcdefghi'.toUpperCase().split(''), 
                      'klmnopqrstuvwxyzabcdefghij'.toUpperCase().split(''), 
                      'lmnopqrstuvwxyzabcdefghijk'.toUpperCase().split(''), 
                      'mnopqrstuvwxyzabcdefghijkl'.toUpperCase().split(''), 
                      'nopqrstuvwxyzabcdefghijklm'.toUpperCase().split(''), 
                      'opqrstuvwxyzabcdefghijklmn'.toUpperCase().split(''), 
                      'pqrstuvwxyzabcdefghijklmno'.toUpperCase().split(''), 
                      'qrstuvwxyzabcdefghijklmnop'.toUpperCase().split(''), 
                      'rstuvwxyzabcdefghijklmnopq'.toUpperCase().split(''), 
                      'stuvwxyzabcdefghijklmnopqr'.toUpperCase().split(''), 
                      'tuvwxyzabcdefghijklmnopqrs'.toUpperCase().split(''), 
                      'uvwxyzabcdefghijklmnopqrst'.toUpperCase().split(''), 
                      'vwxyzabcdefghijklmnopqrstu'.toUpperCase().split(''), 
                      'wxyzabcdefghijklmnopqrstuv'.toUpperCase().split(''), 
                      'xyzabcdefghijklmnopqrstuvw'.toUpperCase().split(''), 
                      'yzabcdefghijklmnopqrstuvwx'.toUpperCase().split(''), 
                      'zabcdefghijklmnopqrstuvwxy'.toUpperCase().split('')]
  }

  encrypt(message, key) {
    if(!message || !key){
      throw new Error('Incorrect arguments!')
    }  
    message = message.toUpperCase().split('')
    key = key.toUpperCase().split("");
    if(message.length == key.length){  
        key = key;  
    } else {
      let contin = key.length;    
        for (let i = 0; i < (message.length-contin);  i++){             
            key.push(key[i % key.length])
        }  
      key = key;
    }
    
    let newPhrase = []
    for(let i = 0; i < message.length; i++){
      if(this.alphabet[0].indexOf(message[i]) === -1){
        newPhrase.push(message[i])
        key.splice(i,0,message[i])
      } else {
        let indexStr = this.alphabet[0].indexOf(message[i]);
        let indexKey = this.alphabet[0].indexOf(key[i]);
        newPhrase.push(this.alphabet[indexStr][indexKey])
        //console.log(indexKey, indexStr)
      } 
    }    
    return this.machine === 'reverse'? newPhrase.reverse().join(''):newPhrase.join('')
     
    
    }    
  
  decrypt(encryptedMessage, key) {
    if(!encryptedMessage || !key){
      throw new Error('Incorrect arguments!')
    }
    
    encryptedMessage = encryptedMessage.toUpperCase().split('')
    key = key.toUpperCase().split("");
    if(encryptedMessage.length == key.length){  
        key = key;  
    } else {
      let contin = key.length;    
        for (let i = 0; i < (encryptedMessage.length-contin);  i++){             
            key.push(key[i % key.length])
        }  
      key = key;
    }
    let newPhrase = []
    for(let i = 0; i < encryptedMessage.length; i++){
      if(this.alphabet[0].indexOf(encryptedMessage[i]) === -1){
        newPhrase.push(encryptedMessage[i])
        key.splice(i,0,encryptedMessage[i])
        console.log(key)
      } else {          
        let indexKey = this.alphabet[0].indexOf(key[i]);
        let indexStr = this.alphabet[indexKey].indexOf(encryptedMessage[i]);
        newPhrase.push(this.alphabet[0][indexStr])
        //console.log(indexKey, indexStr)
      } 
    }    
    return this.machine === 'reverse'? newPhrase.reverse().join(''):newPhrase.join('')

  }
}

module.exports = {
  VigenereCipheringMachine
};
