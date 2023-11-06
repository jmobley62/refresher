


export class Fish{

  name: string;
  color: string;
  weight: number;
  length: number;
  image: string;
  price: number;
  description: string;

  constructor(  name: string, color: string, weight: number, length: number, image: string, price: number, description: string) {
    this.name = name;
    this.color = color;
    this.weight = weight;
    this.length = length;
    this.image = image;
    this.price = price;
    this.description = description;
  }

  logFish() {
    console.log(this);
  }
}


// let myFish = new Fish('Salmon', 'Red', 5, 30, 'image.png', 20, 'A tasty fish');
// myFish.logFish();
