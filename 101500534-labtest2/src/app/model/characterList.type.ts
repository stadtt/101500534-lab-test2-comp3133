export class CharacterList {
  id!: string;
  name!: string;
  alternate_names!: string[];
  house!: string;
  image!: string;

  constructor(init?: Partial<CharacterList>) {
    Object.assign(this, init);
  }
}