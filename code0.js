gdjs.MenuCode = {};
gdjs.MenuCode.GDbuttonplayObjects1= [];
gdjs.MenuCode.GDbuttonplayObjects2= [];
gdjs.MenuCode.GDNewTextObjects1= [];
gdjs.MenuCode.GDNewTextObjects2= [];
gdjs.MenuCode.GDNewText2Objects1= [];
gdjs.MenuCode.GDNewText2Objects2= [];
gdjs.MenuCode.GDhighscoreObjects1= [];
gdjs.MenuCode.GDhighscoreObjects2= [];
gdjs.MenuCode.GDScoreObjects1= [];
gdjs.MenuCode.GDScoreObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDbuttonplayObjects1Objects = Hashtable.newFrom({"buttonplay": gdjs.MenuCode.GDbuttonplayObjects1});
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("buttonplay"), gdjs.MenuCode.GDbuttonplayObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDbuttonplayObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}{runtimeScene.getGame().getVariables().get("score").setNumber(0);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}{runtimeScene.getGame().getVariables().get("score").setNumber(0);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.MenuCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDScoreObjects1[i].setString(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().get("score")));
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.MenuCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewTextObjects1[i].setString("Press space");
}
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDbuttonplayObjects1.length = 0;
gdjs.MenuCode.GDbuttonplayObjects2.length = 0;
gdjs.MenuCode.GDNewTextObjects1.length = 0;
gdjs.MenuCode.GDNewTextObjects2.length = 0;
gdjs.MenuCode.GDNewText2Objects1.length = 0;
gdjs.MenuCode.GDNewText2Objects2.length = 0;
gdjs.MenuCode.GDhighscoreObjects1.length = 0;
gdjs.MenuCode.GDhighscoreObjects2.length = 0;
gdjs.MenuCode.GDScoreObjects1.length = 0;
gdjs.MenuCode.GDScoreObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
