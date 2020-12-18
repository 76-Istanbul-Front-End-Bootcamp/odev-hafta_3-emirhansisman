class Animal {
    constructor(name) {
        this.name = name;
    }

    action(event) {
        event.stopPropagation();
        document.getElementById(this.actionSoundName).play();
    }

    showImage() {
        document.querySelector('img').src = this.image;
    }

    putInTheDocument() {
        var petsTable = document.getElementById("petsTable");
        var petTR = document.createElement("tr");
      
        var petNameTD = document.createElement("td");
        petNameTD.textContent = this.name;
        petTR.appendChild(petNameTD);
      
        var petLegsTD = document.createElement("td");
        petLegsTD.textContent = this.legs;
        petTR.appendChild(petLegsTD);
      
        var petActionTD = document.createElement("td");
        var petActionTDButton = document.createElement("button");
        petActionTDButton.textContent = this.actionText;
        petActionTD.appendChild(petActionTDButton);
        petTR.appendChild(petActionTD);
        
        petActionTDButton.onclick = this.action.bind(this);
        petTR.onclick = this.showImage.bind(this);
        petsTable.querySelector("tbody").appendChild(petTR);
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
        this.legs = 4;
        this.actionText = "Meoow";
        this.actionSoundName = "meow";
        this.image = "https://i.ibb.co/f448CRW/mila.jpg";
    }
}

class Monkey extends Animal {
    constructor(name) {
        super(name);
        this.legs = 2;
        this.actionText = "Scream";
        this.actionSoundName = "scream";
        this.image = "https://i.ibb.co/P9Lscry/charlie.jpg";
    }
}

const mila = new Cat("Mila");
mila.putInTheDocument();

const charlie = new Monkey("Charlie");
charlie.putInTheDocument();