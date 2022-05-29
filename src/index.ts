import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0])

numbersCollection.sort();
console.log(numbersCollection.data);


const charactersCollection = new CharactersCollection('String')


charactersCollection.sort();
console.log(charactersCollection.data);


const linkedListCollection = new LinkedList();
linkedListCollection.add(3);
linkedListCollection.add(-1);
linkedListCollection.add(-32);
linkedListCollection.add(5);


linkedListCollection.sort();
linkedListCollection.print();
