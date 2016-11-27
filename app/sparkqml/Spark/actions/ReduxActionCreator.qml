import QtQuick 2.0

QtObject {

    property var dispatch: function(){}

    function startApp() {
        dispatch({
            type: "startApp"
        });
    }

    function quitApp() {
        dispatch({
            type: "quitApp"
        });
    }

    function load(source) {
        dispatch({
            type: "load",
            source: source
        });
    }

    function setSelectedState(state) {
        dispatch({
            type: "setSelectedState",
            state: state
        });
    }

    function moveSelectedState(direction) {
        dispatch({
            type: "moveSelectedState",
            direction: direction
        });
    }

    function setAvailableStates(states) {
        dispatch({
            type: "setAvailableStates",
            states: states
        });
    }

    function reload() {
        dispatch({
            type: "reload"
        });
    }

    function openDrawer() {
        dispatch({
            type: "openDrawer"
        });
    }

    function scaleToFit() {
        dispatch({
            type: "scaleToFit"
        });
    }

    function resizeToFit() {
        dispatch({
            type: "resizeToFit"
        });
    }

    function openMockupProject() {
        dispatch({
            type: "openMockupProject"
        });
    }

    function copyToClipboard() {
        dispatch({
            type: "copyToClipboard"
        });
    }

    function copyTofile(file) {
        dispatch({
            type: "copyToFile",
            arguments: [file]
        });
    }

    function askToSaveFile() {
        dispatch({
            type: "askToSaveFile"
        });
    }

    function closeErrorPanel() {
        dispatch({
            type: "closeErrorPanel"
        });
    }

    function setErrorString(errorString) {
        dispatch({
            type: "setErrorString",
            errorString: errorString
        });
    }


}
