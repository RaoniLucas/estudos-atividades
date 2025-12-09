function rankBalance() {
   let users = [
       ["Aragorn", 15],
       ["Gandalf", 75],
       ["Legolas", 30],
       ["Gimli", 8],
       ["Frodo", 102],
       ["Samwise", 45],
       ["Galadriel", 90]
   ];
   
   for (let [name, numberOfWins] of users) {
      let patent;
      
      if (numberOfWins < 10) {
         patent = 'Ferro';
      } else if (numberOfWins >= 10 && numberOfWins <= 20) {
         patent = 'Bronze';
      } else if (numberOfWins > 20 && numberOfWins <= 50) {
         patent = 'Prata';
      } else if (numberOfWins > 50 && numberOfWins <= 80) {
         patent = 'Ouro';
      } else if (numberOfWins > 80 && numberOfWins <= 90) {
         patent = 'Diamante';
      } else if (numberOfWins > 90 && numberOfWins <= 100) {
         patent = 'Lendário';
      } else if (numberOfWins >= 101) {
         patent = 'Imortal';
      }
      
      console.log(`O herói ${name} tem um saldo de vitória de ${numberOfWins} e está no nível ${patent}`)
   }
}

rankBalance();