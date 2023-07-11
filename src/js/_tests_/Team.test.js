import Team from "../Team";
import Bowerman from "../Bowerman";
import Character from "../Character";
import Daemon from "../Daemon";
import Magician from "../Magician";
import Swordsman from "../Swordsman";
import Undead from "../Undead";
import Zombie from "../Zombie";

test('test iterators', () => {
    const bowerman = new Bowerman('Igor');
    const character = new Character('vova');
    const daemon = new Daemon('Vania');
    const magician = new Magician('Eva');
    const swordsman = new Swordsman('Max');
    const all = new Team();

    all.addAll(bowerman, character, daemon, magician, swordsman);

    const arrAll = all.toArray();

    const arr = [];
    for (let int of all) {
        arr.push(int);
    }

    expext(arr).toEqual(arrAll);
});

test('test Set function', () => {
    const undead = new Undead('Vanka');
    const zombie = new Zombie('Pasha');
    const all = new Team();

    all.addAll(undead, zombie, zombie);

    expect((all.toArray).toEqual([undead, zombie]));
});

test('test Set function throw error', () => {
    const zombie = new Zombie('Pasha');
    const all = new Team();

    all.add(zombie);

    expect(() => all.add(zombie)).throw('Такой персонаж уже выбран!');
});