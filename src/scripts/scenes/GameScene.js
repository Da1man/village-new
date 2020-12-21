import Phaser from 'phaser';
import Map from '../classes/Map'

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game')
  }

  preload() {
  }

  create() {
    console.log('GameScene create');
    this.map = new Map(this);

  }

}
