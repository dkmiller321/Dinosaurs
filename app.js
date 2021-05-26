
    // Create Dino Constructor
    function Organism(species,weight,height,diet,where,when,fact)
    {
        this.species = species; 
        this.image = "./images/"+species+".png";
        this.weight =  weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
        this.listOfFacts = [fact];

        // Create Dino Compare Method 1
        // NOTE: Weight in JSON file is in lbs, height in inches. 
        this.compareWeights = function (weight)
        {
            if(this.weight > weight)
            {
                this.listOfFacts.push("I weigh "+ (this.weight - weight).toString() +" more pounds than you!")
            }
            else if(this.weight < weight)
            {
                this.listOfFacts.push("I weigh "+ (weight - this.weight).toString() +" fewer pounds than you!")
            }
            else if(this.weight == weight)
            {
                this.listOfFacts.push("We're the same weight!!!!")
            }
        };
         
        // Create Dino Compare Method 2
        // NOTE: Weight in JSON file is in lbs, height in inches.
        this.compareHeights = function (height)
        {
            if(this.height > height)
            {
                this.listOfFacts.push("I am "+(this.height - height).toString() +" inches taller than you!")
            }
            else if(this.height < height)
            {
                this.listOfFacts.push("I am "+(height - this.height).toString() +" inches shorter than you!")
            }
            else if (this.height == height)
            {
                this.listOfFacts.push("We're the same height!!!!")
            }
        };
        
        // Create Dino Compare Method 3
        // NOTE: Weight in JSON file is in lbs, height in inches.
        this.compareDiet = function (diet)
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
        };
    }

    // Create/Fetch Dino Objects
    let dinos = [];
    fetch("dino.json")
    .then(response => response.json())
    .then(json => dinos = json.Dinos.map(
        dino => new Organism(dino.species,dino.weight,dino.height,dino.diet,dino.where,dino.when,dino.fact)));

    // Create Human Object
    var Human = new Organism();
    
    // Use IIFE to get human data from form
    function GetHumanData() 
    {
        return (function (){
        Human.image = "./images/human.png";
        Human.name = document.getElementById("name").value;
        Human.weight = parseFloat(document.getElementById("weight").value);
        Human.diet = document.getElementById("diet").value;
        var inches = parseFloat(document.getElementById("inches").value);
        var feet = parseFloat(document.getElementById("feet").value);
        Human.height = (feet*12+inches);
        })();
    }
  
    // Add event listener to table
    const el = document.getElementById("btn");
    el.addEventListener("click", function ()
    {
        console.log("click event!!!!");
        // Remove form from screen
        document.getElementById("dino-compare").style.display = "none";
        GetHumanData();
        GenerateTiles();
    });

    
    // Generate Tiles for each Dino in Array
    function GenerateTiles()
    {
        for (let index in dinos) 
        {
            let dino = dinos[index];
            dino.compareDiet(Human.diet);
            dino.compareHeights(Human.height);
            dino.compareWeights(Human.weight);
            dino.listOfFacts.push("Im from "+dino.where);
            dino.listOfFacts.push("I lived during the "+dino.when+" period");
            if (dino.species == "Pigeon") {
                fact = "All birds are dinosaurs."
            }
            else
            {
                var randomIndex = Math.floor(Math.random() * dino.listOfFacts.length)
                fact = dino.listOfFacts[randomIndex];
            }
            let dinoTile = addNewTile(dino.species, dino.image, fact);

            document.getElementById("grid")
                .appendChild(dinoTile);
            if (index == 3) 
            {
                let humanTile = addNewTile(Human.name, Human.image);
                document.getElementById("grid")
                .appendChild(humanTile);
            }
        }
    }
    
    // Add tiles to DOM
    function addNewTile(species, image, fact) {
        let tile = document.createElement("div");
        tile.className = "grid-item";
        
        let speciesElement = document.createElement("h3");
        speciesElement.innerText = species;
        tile.appendChild(speciesElement);
        
        let imageElement = document.createElement("img");
        imageElement.src = image;
        tile.appendChild(imageElement);
        
        
        if (fact) 
        {
            let factElement = document.createElement("p");
            factElement.innerText = fact;
            tile.appendChild(factElement);
        }

        return tile;
    }
