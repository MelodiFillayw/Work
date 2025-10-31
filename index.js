    //Random Jokes Code//
    
    //Generate a Random Joke//
    async function getRandomJoke() {
      try {
        const res = await axios.get("https://official-joke-api.appspot.com/random_joke");
        console.log("Random Joke:", res.data.setup, "-", res.data.punchline);
      } catch (err) {
        console.error("Error fetching random joke:", err);
      }
    }

    //Generate Miltiple Jokes//
    async function getTenJokes() {
      try {
        const res = await axios.get("https://official-joke-api.appspot.com/random_ten");
        console.log("Ten Jokes:");
        res.data.forEach(j => console.log(j.setup, "-", j.punchline));
      } catch (err) {
        console.error("Error fetching ten jokes:", err);
      }
    }

    //Generate Jokes via Programming Category//
     async function getProgrammingJokes() {
      try {
        const res = await axios.get("https://official-joke-api.appspot.com/jokes/programming/ten");
        console.log("Programming Jokes:");
        res.data.forEach(j => console.log(j.setup, "-", j.punchline));
      } catch (err) {
        console.error("Error fetching programming jokes:", err);
      }
    }

    //Generate Multiple Jokes in the Programing Category//
    async function getFourRandomJokes() {
      try {
        const requests = [
          axios.get("https://official-joke-api.appspot.com/random_joke"),
          axios.get("https://official-joke-api.appspot.com/random_joke"),
          axios.get("https://official-joke-api.appspot.com/random_joke"),
          axios.get("https://official-joke-api.appspot.com/random_joke"),
        ];
        const results = await Promise.all(requests);
        console.log("Four Random Jokes:");
        results.forEach(r => console.log(r.data.setup, "-", r.data.punchline));
      } catch (err) {
        console.error("Error fetching multiple jokes:", err);
      }
    }
    
    //Stretch: Generate Multiple Jokes and Log Them//
    async function logFiveJokes() {
      try {
        console.log("Five Jokes in a row:");
        for (let i = 0; i < 5; i++) {
          const res = await axios.get("https://official-joke-api.appspot.com/random_joke");
          console.log(res.data.setup, "-", res.data.punchline);
        }
      } catch (err) {
        console.error("Error fetching five jokes:", err);
      }
    }

    //Deck of Cards Code//

     async function deckOfCardsDemo() {
      try {
        //New Deck//
        const deckRes = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/");
        const deckId = deckRes.data.deck_id;
        console.log("New Deck ID:", deckId);

        //Draw One Card//
        let res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
        console.log("Single Card:", res.data.cards[0].value, "of", res.data.cards[0].suit);

        //Draw multiple Cards//
        res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`);
        console.log("Five Cards:");
        res.data.cards.forEach(c => console.log(c.value, "of", c.suit));

        //Shuffle Deck + Redraw Two//
        await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`);
        res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`);
        console.log("After Shuffle, Two Cards:");
        res.data.cards.forEach(c => console.log(c.value, "of", c.suit));

        //Stretch: Draw Hands for 4 players//
        async function drawCards(deckId, count) {
          const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`);
          return res.data.cards;
        }

        console.log("Hands for 4 players:");
        for (let i = 1; i <= 4; i++) {
          const hand = await drawCards(deckId, 5);
          console.log(`Player ${i}:`, hand.map(c => `${c.value} of ${c.suit}`).join(", "));
        }

      } catch (err) {
        console.error("Error with Deck of Cards API:", err);
      }
    }


    getRandomJoke();

    getTenJokes();

    getProgrammingJokes();

    getFourRandomJokes();

    logFiveJokes();

//Deck of Cards//    
    deckOfCardsDemo();