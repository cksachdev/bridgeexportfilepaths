#target bridge
if(BridgeTalk.appName == 'bridge'){
    var newCommand = new MenuElement('command', 'Export files List...', 'at the end of Tools');
    }

newCommand.onSelect = function (){
  console.log("Hello World!!");
    FolderListExport();
    }

function FolderListExport(){
    var FileList = [];
    var items = 0;
    var parentFolder = new Thumbnail(app.document.presentationPath);
    var logPath = '';
    console.log(logPath);
    var logFile = File(logPath);
    if(parentFolder.container){
        try{
            app.synchronousMode = true;
            parentFolder.refresh();
            FileList = parentFolder.children;
            items = FileList.length;
            if(items == 0) return;
            logFile = new File('~/Desktop/' + parentFolder.name + '.txt').saveDlg('Create New Log File', '*.txt');
            logFile.open('w:');
            for(var i = 0;i < items;i++){
                logFile.writeln(FileList[i].name);
            }
            logFile.close();
            app.synchronousMode = false;
        }
        catch(e){
            alert('Folder list not saved.');
            }
        }
    else{
        alert('Please select a folder. Collections are not supported.');
        return;
        }
    }