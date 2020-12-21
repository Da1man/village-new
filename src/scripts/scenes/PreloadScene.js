import Phaser from 'phaser';
import tileSetPng from '../../assets/Village-map.png';
import tileSetJson from '../../assets/Village-map';
import tileMapJson from '../../assets/New-village';
import objectsPng from '../../assets/village-objects.png';
import objectsJson from '../../assets/village-objects';

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super('Preload')
  }

  preload() {
    console.log('PreloadScene preload');
    // load map files
    console.log('load map files');
    this.load.spritesheet('tileSet', tileSetPng,{frameWidth: 64, frameHeight: 64});

    this.load.tilemapTiledJSON('tileMap', tileMapJson);
    this.load.atlas('objects', objectsPng, objectsJson);

  }

  create() {
    console.log('PreloadScene create');
    this.scene.start('Game');
  }

}
