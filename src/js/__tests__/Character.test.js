import Character from '../Character.js'
import Bowerman from "../Bowerman";

test('success levelUp', () => {
    const bowman = new Bowerman('snow', 'Bowerman');
    bowman.levelUp();
    expect(bowman).toEqual(bowman);
});
test('success levelUp', () => {
    const bowman = new Character();
    bowman.health = 0;
    expect(() => bowman.levelUp()).toThrowError('cannot raise level');
});