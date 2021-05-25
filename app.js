
    // Create Dino Constructor
    function Dino(species,fact)
    {
        this.species = species; 
        this.fact =  fact;
    }

    // Create Dino Objects
    var json =require( "./dino.json");
    var Dinos = new Array();

    for (const item of json.Dinos) {
        
        Dinos.push(new Dino(item.species,item.fact));
    }
    
    console.log(Dinos);
    
        

    // Create Human Object
    const Human = new Object();
    

    // Use IIFE to get human data from form
    var form = document.getElementById("name");
    console.log(form);
    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
