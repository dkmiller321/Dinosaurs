
    // Create Dino Constructor
    function Organism(species,weight,height,diet,where,when)
    {
        this.species = species; 
        this.image = "./images/"+species+".png";
        this.weight =  weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
    }

    // Create Dino Objects
    import { Dinos as _Dinos } from "./dino.json";
    var Dinos = new Array();

    for (const item of _Dinos) 
    {
        Dinos.push(new Organism(item.species, item.weight,
            item.height, item.diet, item.where, item.when));
    }
    
    console.log(Dinos);

    // Create Human Object
    var Human = new Organism()
    {
        image = "./images/human.png"
    };
    
    // Use IIFE to get human data from form
    function GetHumanData() { return(function()
    {
        var Human = new Organism()
        {
            image = "./images/human.png"
        };
        Human.name = document.getElementById("name").value;
        Human.feet = document.getElementById("feet").value;
        Human.inch = document.getElementById("inches").value;
        Human.weight = document.getElementById("weight").value;
        Human.diet = document.getElementById("diet").value;
    })}
  
    // Add event listener to table
    const el = document.getElementById("btn");
    el.addEventListener("click", GetHumanData);

    var form = document.getElementById("name");
    console.log(form);



    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
    Organism.CompareWeights = function (weight)
    {
        if(this.weight > weight)
        {
            this.listOfFacts.push("I weigh "+this.weight - weight +" more pounds than you!")
        }
        else if(this.weight < weight)
        {
            this.listOfFacts.push("I weigh "+ weight - this.weight +" fewer pounds than you!")
        }
        else
        {
            this.listOfFacts.push("We're the same weight!!!!")
        }
    }

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    Organism.CompareHeights = function (height)
    {
        if(this.weight > weight)
        {
            this.listOfFacts.push("I am "+this.height - height +" inches taller than you!")
        }
        else if(this.weight < weight)
        {
            this.listOfFacts.push("I am "+height - this.height +" inches shorter than you!")
        }
        else
        {
            this.listOfFacts.push("We're the same height!!!!")
        }
    }

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    Organism.CompareDiet = function (diet)
    {
        if(this.diet == diet)
        {
            this.listOfFacts.push("I am also a "+diet+"!");
        }
        else if(diet == "herbavor")
        {
            this.listOfFacts.push("I eat meat unlike you!")
        }
        else if(this.diet == "herbavor")
        {
            this.listOfFacts.push("I only eat plants unlike you!")
        }
    }


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
