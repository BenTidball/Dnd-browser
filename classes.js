class PlayableClass{
    constructor(json) {
        Object.assign(this, json);
    }
} 

async function fetchClassInfo(index) {
    let response = await fetch('https://www.dnd5eapi.co/api/classes/'+index);
    let data = await response.json();
    await createClassInstance(data);
}

async function createClassInstance(x) {
    let startEquip = [];
    x.starting_equipment.forEach(element => {
        startEquip.push(element.equipment.name)
    });

    const i = new PlayableClass({
        name: x.name,
        hitDie: x.hit_die,
        startingEquipment: startEquip
    });
    console.log(i);
}

module.exports = {PlayableClass, fetchClassInfo, createClassInstance};
