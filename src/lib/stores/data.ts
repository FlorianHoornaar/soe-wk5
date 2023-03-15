// src/stores/user.ts
export class Data {
  firstPerson: string;
  people: string[];
  newPerson: string;
  values: {
      name: string,
      description: string
  } [];
  newAchievement: string;
  achievements: string[];
  awards: {
      person: string,
      achievement: string,
      value: string
  } []


  constructor() {
    this.firstPerson = "";
    this.people = [];
    this.newPerson = "";
    this.values = [
      {
      name: "Empathy",
      description: "Listen actively and respect others' opinions and perspectives."
  },
  {
      name: "Empowerment",
      description: "Take initiative and propose new ideas to improve processes or solve problems."
  },
  {
      name: "Innovation",
      description: "Look for new and better ways to do things, and don't be afraid to experiment."
  },
  {
      name: "Inclusion",
      description: "Create a diverse and inclusive workplace where everyone feels welcome and respected."
  },
  {
      name: "Customer focus",
      description: "Use customer feedback to inform decisions and improve processes."
  },
  {
      name: "Growth Mindset",
      description: "Seek out new opportunities for learning and development, both within and outside the organization."
  }
];;
    this.newAchievement = "";
    this.achievements = [];
    this.awards = [];
  }
}
