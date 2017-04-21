var app = function(app) {

    app.makeController = function(stage, p, pages, frame) {

    	pages.on("pagetransitioned",function(e){
    		zog(pages.page.name)
    	});

        p.page1.button.on("mousedown", function() {
            pages.go(p.page2, 'right'); //direction you are going to
        });

    	var hotSpots = new zim.HotSpots([
		    {page:p.page2, rect:p.page2.logo, call:function(){pages.go(p.page1, 'left');}},
            {page:p.page2, rect:p.page2.tabs, call:function(){reveal();}}
		]);

        p.page3.button.on("mousedown", function() {
            pages.go(p.page1, 'right'); //direction you are going to
        });
 
        var tries = 0;
        var pic = 0;
        
        function reveal(){         
            var images = ["2.png","3.png","4.png","5.png","6.png"];    
            var image2 = frame.asset(images[pic]);  
            p.page2.content.addChild(image2);     
            stage.update();
            pic++;    
            tries++;
            if (tries >= 6) {  
                pages.go(p.page3, "right");
                pic = 0;
                tries = 0;
            } 
        }
    }
    return app;
}(app || {});
