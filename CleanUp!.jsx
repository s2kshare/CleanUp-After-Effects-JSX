// Devontae / s2kshareGithub

(function(thisObj){
    var isPanel = thisObj instanceof Panel; // true or false
    var w = isPanel ? thisObj : new Window("palette", "Clean Up!", undefined);


    Image.prototype.onDraw = function()
    {
        if( !this.image ) return;
        var WH = this.size,
        wh = this.image.size,
        k = Math.min(WH[0]/wh[0], WH[1]/wh[1]), xy;

        wh = [k*wh[0],k*wh[1]];

        xy = [ (WH[0]-wh[0])/2, (WH[1]-wh[1])/2 ];
        this.graphics.drawImage(this.image,xy[0],xy[1],wh[0],wh[1]);
        WH = wh = xy = null;
    }

    var msWM = w.add("image", undefined, logo);
    msWM.size = [150,150];
    var introtext = w.add("statictext", undefined, "This script will clean your project panel");
    var btn_Execute = w.add("button", undefined, "Clean!");

    btn_Execute.onClick = function() {
        cleanProject();
    };
        
    var FootageFolderCheck = false;
    var CompositionFolderCheck = false;
    var SolidCheck = false;
    var FootageFolder;
    var CompositionFolder;
    var FootageCol = 1;
    var CompositionCol = 3;
    var SolidCol = 4;
        
    function cleanProject() {
        
        app.beginUndoGroup("Process");
        
        for (var i = 1; i <= app.project.numItems; i++){
            if (app.project.item(i) instanceof FolderItem && app.project.item(i).name == "Footage") FootageFolderCheck = true;
            else if (app.project.item(i) instanceof FolderItem && app.project.item(i).name == "Compositions") CompositionFolderCheck = true;
        }
        if (!FootageFolderCheck) FootageFolder = app.project.items.addFolder("Footage");
        if (!CompositionFolderCheck) CompositionFolder = app.project.items.addFolder("Compositions");
            
        FootageFolder.label = FootageCol;
        CompositionFolder.label = CompositionCol;
        
        selectAndMoveItems();
    }
        
    function selectAndMoveItems(){
        var footageArr = [];
        var SolidFolder;
        
            //created this way since original for loop misses a layer
            //Footage Folder
        for (var i = 1; i <= app.project.numItems; i++){
            if (app.project.item(i) instanceof FootageItem) footageArr.push(app.project.item(i));
            if (app.project.item(i) instanceof FolderItem && app.project.item(i).name == "Solids"){
                SolidFolder = app.project.item(i);
                SolidCheck = true;
            } 
        }
        
        for (i = 0; i <= footageArr.length-1; i++) {
            if (!(footageArr[i].mainSource instanceof SolidSource)){
                footageArr[i].parentFolder = FootageFolder;
                footageArr[i].label = FootageCol;
            }
            else if (footageArr[i].mainSource instanceof SolidSource){
                if (SolidCheck == false) SolidFolder = app.project.items.addFolder("Solids");
                SolidFolder.label = SolidCol;
                footageArr[i].parentFolder = SolidFolder;
                footageArr[i].label = SolidCol;
            }
        }
        footageArr = [];
        
        //Compositions Folder
        for (var i = 1; i < app.project.numItems; i++) if (app.project.item(i) instanceof CompItem) footageArr.push(app.project.item(i));
        for (i = 0; i <= footageArr.length-1; i++) {
            footageArr[i].parentFolder = CompositionFolder;
            footageArr[i].label = CompositionCol;
        }
        app.endUndoGroup();
    }

    if (!isPanel) {
        w.show();
    } else {
        w.layout.layout(true);
        w.layout.resize();
    }
})(this);