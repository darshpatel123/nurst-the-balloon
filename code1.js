gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDBallonObjects1= [];
gdjs.Untitled_32sceneCode.GDBallonObjects2= [];
gdjs.Untitled_32sceneCode.GDBorderObjects1= [];
gdjs.Untitled_32sceneCode.GDBorderObjects2= [];
gdjs.Untitled_32sceneCode.GDborder2Objects1= [];
gdjs.Untitled_32sceneCode.GDborder2Objects2= [];
gdjs.Untitled_32sceneCode.GDscoreObjects1= [];
gdjs.Untitled_32sceneCode.GDscoreObjects2= [];
gdjs.Untitled_32sceneCode.GDLeaveObjects1= [];
gdjs.Untitled_32sceneCode.GDLeaveObjects2= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition2IsTrue_0 = {val:false};


gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDBallonObjects1Objects = Hashtable.newFrom({"Ballon": gdjs.Untitled_32sceneCode.GDBallonObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDBallonObjects1Objects = Hashtable.newFrom({"Ballon": gdjs.Untitled_32sceneCode.GDBallonObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDBallonObjects1Objects = Hashtable.newFrom({"Ballon": gdjs.Untitled_32sceneCode.GDBallonObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDLeaveObjects1Objects = Hashtable.newFrom({"Leave": gdjs.Untitled_32sceneCode.GDLeaveObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDborder2Objects1Objects = Hashtable.newFrom({"border2": gdjs.Untitled_32sceneCode.GDborder2Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDBallonObjects1Objects = Hashtable.newFrom({"Ballon": gdjs.Untitled_32sceneCode.GDBallonObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.Untitled_32sceneCode.GDBallonObjects1.length = 0;

{runtimeScene.getGame().getVariables().get("Score").setNumber(0);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDBallonObjects1Objects, gdjs.random(1920), 1229, "");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBallonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBallonObjects1[i].setScale(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ballon"), gdjs.Untitled_32sceneCode.GDBallonObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDBallonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDBallonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Untitled_32sceneCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBallonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBallonObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDBallonObjects1Objects, gdjs.random(1492), 1229, "");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBallonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBallonObjects1[i].setScale(2);
}
}{runtimeScene.getGame().getVariables().get("score").add(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDscoreObjects1[i].setString("Score:" + gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().get("score")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leave"), gdjs.Untitled_32sceneCode.GDLeaveObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDLeaveObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ballon"), gdjs.Untitled_32sceneCode.GDBallonObjects1);
gdjs.copyArray(runtimeScene.getObjects("border2"), gdjs.Untitled_32sceneCode.GDborder2Objects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDborder2Objects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDBallonObjects1Objects, false, runtimeScene, false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDBallonObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBallonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBallonObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Untitled_32sceneCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDscoreObjects1[i].setString("Score:" + gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().get("score")));
}
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Leave"), gdjs.Untitled_32sceneCode.GDLeaveObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLeaveObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLeaveObjects1[i].setString("Press Z to leave");
}
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDBallonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBallonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBorderObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBorderObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDborder2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDborder2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDscoreObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDscoreObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDLeaveObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDLeaveObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
