class BaseScene extends Phaser.Scene{
	constructor(id){
		super(id);
		this.imageSource;
		this.tilemapSource;
		this.tilesetName;
		this.tattooX = 0;
		this.tattooY = 0;
	}
	preload(){
		this.load.image('tattooImage', this.imageSource);
        this.load.tilemapTiledJSON("tattooTilemap", this.tilemapSource);
       // this.load.image('tileset', 'assets/bare-back.png');
	}
	create(){
		this.map = this.make.tilemap({ key: "tattooTilemap" });
		
		var tattooImage = this.map.addTilesetImage(this.tilesetName, "tattooImage");
		
		this.tattoo = this.map.createDynamicLayer('tattooLayer', tattooImage, this.tattooX, this.tattooY);
		
		this.input.on('pointerdown', function(pointer){
			var tile = this.tattoo.getTileAtWorldXY(pointer.x, pointer.y);

			if(tile !== null){ //Check the tile is valid - In case the player clicks outside of the tatto layer
				if(tile.properties.clickable){ //Is the tile clickable - Is it a tattoo
					if(!tile.alreadyClicked){ //Has this tile already been clicked previously?
						tile.setVisible(false);
						tile.alreadyClicked = true;
					} else {
						console.log("This has already been clicked on");
					}
				} else {
					console.log("This isn't part of the tattoo");
				}
			} else {
				console.log("This isn't even close to the tattoo");
			}
			
        }, this)
       // if (clickableTile === null){  if (clcickableTile.properties !== clciked  } if(tile.alreadyClickable)  {  null tile.setVisable(true);  
        //if all clcickable tiles are clicked go to next scene.
	}
	   
	update(){

	}

}
