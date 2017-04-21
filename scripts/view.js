
var app = function(app) {

    app.makePages = function(stage, stageW, stageH, layoutManager, frame){
        zog(layoutManager)

        var p = {};

        var page1 = p.page1 = new zim.Container(stageW, stageH).addTo(stage);

        page1.name = "Intro Page";

        var logo = frame.asset("logo.png")
            .addTo(page1);

        var content = new zim.Rectangle(700,600,"white")
            .addTo(page1);

         var label1 = new zim.Label({
           text:"Welcome to Rebecca Dautremer's Dreamland",
           color:"pink",
           size:90,
           lineWidth:800,
           align:"center",
        }).center(content);

        var label2 = new zim.Label({
           text:"START",
           size:40,
           color:"white",
           fontOptions:"bold"
        });

        var buttons = page1.button= new zim.Button({
           label:label2,
           width:390,
           height:110,
           color:"#FFE57F",
           corner:30
        }).addTo(page1);

        // LAYOUT
        // holder, regions, lastMargin, backgroundColor,
        // vertical, regionShape, scalingObject, hideKey

        var layout = new zim.Layout({
            holder:page1,
            regions:[
                {object:logo, marginTop:5, maxWidth:100, height:20, align:"center", valign:"top"},
                {object:content, marginTop:5, maxWidth:200},
                {object:buttons, marginTop:5, maxWidth:100, minHeight:10,}
            ],
            lastMargin:3,
            scalingObject:stage
        });

        layoutManager.add(layout);


        //PAGE 2
        var page2 = p.page2 = new zim.Container(stageW, stageH);

        page2.name = "Second Page";


        var logo2 = page2.logo = frame.asset("logo.png").clone().addTo(page2);
        
        var buttons2 = new zim.Container()
            .addTo(page2);

        function makeNav(left, right) {
            var nav = new zim.Container();
            // width, height, label, color, rollColor, borderColor, borderThickness, corner, shadowColor
            nav.left = new zim.Button(250, 100, left, "#81D4FA", "#444", null, 0, 20, -1);
            nav.addChild(nav.left);
            nav.right = new zim.Button(250, 100, right, "#FFAB91", "#444", null, 0, 20, -1);
            nav.addChild(nav.right);
            nav.right.x = nav.left.width+2;
            return nav;
        }

        var label3 = new zim.Label({
           text:"Like",
           size:40,
           color:"white",
           fontOptions:"bold"
        });

         var label4 = new zim.Label({
           text:"Dislike",
           size:40,
           color:"white",
           fontOptions:"bold"
        });
  
        var tabs2 = page2.tabs = makeNav(label3, label4);

        buttons2.addChild(tabs2);

        var content2 = page2.content = new zim.Container();

        var image = frame.asset("1.png");

        content2.addChild(image);

        page2.addChild(content2);

        // LAYOUT
        var layout2 = new zim.Layout({
            holder:page2,
            regions:[
                {object:logo2, marginTop:5, maxWidth:100, height:20, align:"center", valign:"top"},
                {object:content2, marginTop:5, maxWidth:200},
                {object:buttons2, marginTop:5, maxWidth:100, minHeight:10,}
            ],
            lastMargin:3,
            scalingObject:stage
        });

        layoutManager.add(layout2);


        //pages3
        var page3 = p.page3 = new zim.Container(stageW, stageH);

        page3.name = "Thanks Page";

        var logo3 = frame.asset("logo.png").clone().addTo(page3);  
        
        var content3 = frame.asset("thanks.png")
            .addTo(page3);

        var label3 = new zim.Label({
           text:"RESTART",
           size:40,
           color:"white",
           fontOptions:"bold"
        });

        var buttons3 = page3.button = new zim.Button({
           label:label3,
           width:390,
           height:110,
           color:"black",
           corner:30
        }).addTo(page3);

        // LAYOUT
        var layout3 = new zim.Layout({
            holder:page3,
            regions:[
                {object:logo3, marginTop:5, maxWidth:100, height:20, align:"center", valign:"top"},
                {object:content3, marginTop:5, maxWidth:100},
                {object:buttons3, marginTop:5, maxWidth:100, minHeight:10,}
            ],
            lastMargin:3,
            scalingObject:stage
        });

        layoutManager.add(layout3);

        return p;
    }

    return app;
}(app || {});
