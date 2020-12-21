export default class Map {
  constructor(scene) {
    this.scene = scene;
    this.init();
    this.create();
  }

  init() {
    this.tilemap = this.scene.make.tilemap({key: 'tileMap'});
    console.log('this.tilemap', this.tilemap);
    this.tileset = this.tilemap.addTilesetImage('Village-map', 'tileSet', 64, 64);
    console.log('this.tileset', this.tileset);
  }

  create() {
    this.createLayers();
    this.createCollisionObjects();
    this.createGrassObjects();
    this.createTreesObjects();
    this.createHouses();
  }

  createLayers() {
    this.tilemap.createLayer('Grass', this.tileset);
    this.tilemap.createLayer('Borders', this.tileset);
    this.tilemap.createLayer('Roads', this.tileset);
  }

  createCollisionObjects() {
    this.tilemap.findObject('Collision-objects', collision => {
      const sprite = this.scene.matter.add.sprite(collision.x + collision.width / 2, collision.y - collision.height / 2, 'objects', `${collision.name}.png`);
      sprite.setStatic(true);
      // sprite.setSensor(true);
    })
  }

  createGrassObjects() {
    this.tilemap.findObject('Grass-objects', collision => {
      const sprite = this.scene.matter.add.sprite(collision.x + collision.width / 2, collision.y - collision.height / 2, 'objects', `${collision.name}.png`);
      sprite.setStatic(true);
      sprite.setSensor(true);
    })
  }

  createTreesObjects() {
    this.tilemap.findObject('Trees-objects', collision => {
      const sprite = this.scene.matter.add.sprite(collision.x + collision.width / 2, collision.y - collision.height / 2, 'objects', `${collision.name}.png`);
      sprite.setStatic(true);
      sprite.setSensor(true);
    })
  }

  createHouses() {
    this.tilemap.findObject('Houses', collision => {
      const sprite = this.scene.matter.add.sprite(collision.x + collision.width / 2, collision.y - collision.height / 2, 'objects', `${collision.name}.png`);
      sprite.setStatic(true);
      sprite.setSensor(true);
    })
  }

  getPlayerPosition (positionName) {
    return this.tilemap.findObject(positionName, position => {
      return position.name === positionName
    })
  }
}
