class FaceScene extends BaseScene {
	constructor(){
		super('FaceScene')
		
		this.imageSource = 'assets/face.png';
		this.tilemapSource = 'assets/face.json';
		this.tilesetName = 'face';
		this.tattooX = 300;
		this.tattooY = 500;
	}
	
	preload(){
        super.preload();
        this.load.image('image', 'assets/bare-back.jpg');
	}
	
	create(){
        super.create();
         this.scoreText = this.add.text(0, 32, 'Money = $' + this.money, { fontFamily: 'Arial', fontSize: '24px', fill: '#fff' });
         this.satisText = this.add.text(200, 32, 'Satis = $', { fontFamily: 'Arial', fontSize: '24px', fill: '#fff' });
        }
	
        update(){
		super.update();
	}
}
  //  function() {      maybe the ifstatement to move 2 the next scene here

   // }