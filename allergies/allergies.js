const allergySources = {
  eggs: 1,
  peanuts: 2,
  shellfish: 4,
  strawberries: 8,
  tomatoes: 16,
  chocolate: 32,
  pollen: 64,
  cats: 128,
}

export class Allergies {
  constructor(score) {
    this.score = score;
  }

  list() {
    return Object.keys(allergySources).filter(specificAllergy => this.allergicTo(specificAllergy));
  }

  allergicTo(specificAllergy) {
    return !!(this.score & allergySources[specificAllergy]);
  }
}