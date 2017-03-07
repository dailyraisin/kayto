import dragNdrop from 'npm-dragndrop';

(function (window, document, dragNdrop) {
    'use strict';

    var defaultMaxWidth = 1600;
    var lastGoodMaxWidth = defaultMaxWidth;
    var columns = 12;
    var RESIZE_DELAY = 700;
    var TYPE_DELAY = 250;

    var checkLabelView, checkInputView, widgetView, iconEditView,
        overlayView, currentWidthView, maxWidthPanelView, toggleOverlayViewFn,
        maxWidthInputView, containerView, bodyClickFn, currentMaxWidthView, valueView, maxWidthLabelView;
    var doResize = debounce(onResize, RESIZE_DELAY);
    var doMaxWidthChanged = debounce(onMaxWidthChange, TYPE_DELAY);
    bodyClickFn = null;

    function debounce(fn, wait) {
        var timeout;
        return function () {
            var context = this,
            args = arguments,
            later = function () {
                timeout = null;
                fn.apply(context, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function onResize () {
        var widthPx = window.innerWidth;
        currentWidthView.textContent = 'Current width: ' + widthPx + ' px';
    }

    function applyValueIfValid (vm) {
        if (/^\d+$/.test(vm)) {
            overlayView.style.maxWidth = vm + 'px';
            containerView.style.maxWidth = vm + 'px';
            lastGoodMaxWidth = vm;
            return true;
        }

        return false;
    }

    function setLastGoodValue () {
        valueView.textContent = lastGoodMaxWidth + 'px'; //clickable label back to an acceptable value
        maxWidthInputView.value = lastGoodMaxWidth; //input field back to an acceptable value
    }

    function stopInternalClick (e) {
        e.stopPropagation(); //don’t fire on the body listener that might be there
    }

    function onMaxWidthChange (e) {
        var code = e.charCode || e.keyCode; //normalize char codes cross browser
        var vm = maxWidthInputView.value;

        if (code === 13) { //13 is enter
            applyValueIfValid(vm);
            toggleEditInPlace();
        }
        else if (code === 27) { //27 is esc
            toggleEditInPlace();
        }
        else { //evaluate what was typed - not enter, not esc keys
            if (!applyValueIfValid(vm)) {
                //TODO invalid - validation error, show something
            }
        }
    }

    function isVisible (el) {
        return el.offsetWidth > 0 || el.offsetHeight > 0 || el.getClientRects().length > 0;
    }

    function toggleDisplay (view) {
        if (isVisible(view)) {
            view.style.display = 'none';
        }
        else {
            view.style.display = 'block';
        }
    }

    function toggleOverlayHidden (view) {
        return function () { //accepts event
            toggleDisplay(view);
        };
    }

    function stopListeningBodyClick () {
        document.body.removeEventListener('click', bodyClickFn);
        document.body.removeEventListener('touch', bodyClickFn);
        bodyClickFn = null;
    }

    function onBodyClick () {
        toggleEditInPlace();
        stopListeningBodyClick();
    }

    function toggleEditInPlace () {
        toggleDisplay(currentMaxWidthView);
        toggleDisplay(maxWidthLabelView);
        toggleDisplay(maxWidthInputView);

        if (isVisible(maxWidthInputView)) {
            maxWidthInputView.focus();
        }
        else {
            setLastGoodValue();
        }

        if (bodyClickFn === null) {
            bodyClickFn = onBodyClick;
            document.body.addEventListener('click', bodyClickFn);
            document.body.addEventListener('touch', bodyClickFn);
        }
        else {
            stopListeningBodyClick();
        }
    }

    function ready () {
        buildGridAssistant();
        onResize();
    }

    function buildGridAssistant () {
        widgetView = document.createElement('div');
        widgetView.className = 'kayto-ctrl';
        widgetView.setAttribute('draggable', 'true');

        var widgetContainer = document.createElement('div');
        widgetContainer.className = 'kayto-ctrl-container';

        currentWidthView = document.createElement('div');
        currentWidthView.className = 'kayto-ctrl-current-width-panel';

        checkLabelView = document.createElement('label');
        checkLabelView.setAttribute('for', 'kayto-enable'); //link up with the checkbox

        checkInputView = document.createElement('input');
        checkInputView.setAttribute('type', 'checkbox');
        checkInputView.setAttribute('tabindex', 0);
        checkInputView.setAttribute('id', 'kayto-enable'); //link up with the label

        checkLabelView.appendChild(checkInputView);
        checkLabelView.appendChild(document.createTextNode('Show Grid Columns'));

        overlayView = document.createElement('div');
        overlayView.className = 'kayto';
        overlayView.style.display = 'none'; //hidden by default, less annoying

        maxWidthPanelView = document.createElement('div');
        maxWidthPanelView.className = 'kayto-ctrl-max-width-panel';

        currentMaxWidthView = document.createElement('a');
        currentMaxWidthView.setAttribute('href', 'javascript:void(0);');
        currentMaxWidthView.className = 'kayto-current-max-width-ctrl';

        var textView = document.createElement('span');
        textView.className = 'kayto-max-width-text';
        textView.textContent = 'Max width: ';

        valueView = document.createElement('span');
        valueView.className = 'kayto-max-width-value';
        valueView.textContent = defaultMaxWidth + 'px';

        iconEditView = document.createElement('span');
        iconEditView.className = 'kayto-edit-icon';
        iconEditView.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 1c-1.031 0-2.179.478-2.851 1.149L3 15.3 1 23l7.7-2L21.85 7.85C22.537 7.162 23 6.094 23 5a4 4 0 0 0-4-4zM5.764 15.363l10.6-10.6.736.737L6.5 16.1l-.736-.737zM7.9 17.5L18.5 6.9l.735.735-10.6 10.6L7.9 17.5zm-3.281-.48l2.361 2.361-3.189.828.828-3.189zM20.613 6.213L17.79 3.39c.316-.209.787-.39 1.21-.39 1.103 0 2 .897 2 2 0 .472-.176.909-.387 1.213z"/></svg>'; //pencil, open icon from WK Icons - better to not have a font dependency

        maxWidthLabelView = document.createElement('label');
        maxWidthLabelView.appendChild(document.createTextNode('Max width:'));
        maxWidthLabelView.setAttribute('for', 'kayto-max-width'); //link up with the input
        maxWidthLabelView.style.display = 'none'; //hidden by default, not in edit mode upon page load

        maxWidthInputView = document.createElement('input');
        maxWidthInputView.setAttribute('type', 'text');
        maxWidthInputView.setAttribute('value', defaultMaxWidth);
        maxWidthInputView.setAttribute('id', 'kayto-max-width'); //link up with the label
        maxWidthInputView.style.display = 'none'; //hidden by default, not in edit mode upon page load

        currentMaxWidthView.appendChild(textView);
        currentMaxWidthView.appendChild(valueView);
        currentMaxWidthView.appendChild(iconEditView);
        maxWidthPanelView.appendChild(maxWidthLabelView);
        maxWidthPanelView.appendChild(maxWidthInputView);

        toggleOverlayViewFn = toggleOverlayHidden(overlayView);

        containerView = document.createElement('div');
        containerView.className = 'kayto-container';

        for(var i = 1; i <= columns; i++) {
            var column = document.createElement('div');
            var content  = document.createElement('div');
            column.className = 'kayto-column';
            content.className = 'kayto-content';
            column.appendChild(content);
            containerView.appendChild(column);
        }

        overlayView.appendChild(containerView);
        widgetContainer.appendChild(checkLabelView);
        maxWidthPanelView.appendChild(currentMaxWidthView);
        widgetView.appendChild(widgetContainer);
        widgetView.appendChild(maxWidthPanelView);
        widgetView.appendChild(currentWidthView);

        document.body.appendChild(widgetView);
        document.body.insertBefore(overlayView, document.body.firstChild);

        maxWidthInputView.addEventListener('keyup', doMaxWidthChanged); //keyup event to capture esc
        checkInputView.addEventListener('click', toggleOverlayViewFn);
        checkInputView.addEventListener('touch', toggleOverlayViewFn);
        currentMaxWidthView.addEventListener('click', toggleEditInPlace);
        currentMaxWidthView.addEventListener('touch', toggleEditInPlace);
        widgetView.addEventListener('click', stopInternalClick);
        widgetView.addEventListener('touch', stopInternalClick);

        dragNdrop({
            element: widgetView,
            customStyles: true
        });
    }

    function unload () {
        maxWidthInputView.removeEventListener('keyup', doMaxWidthChanged); //keyup event to capture esc
        checkInputView.removeEventListener('click', toggleOverlayViewFn);
        checkInputView.removeEventListener('touch', toggleOverlayViewFn);
        currentMaxWidthView.removeEventListener('click', toggleEditInPlace);
        currentMaxWidthView.removeEventListener('touch', toggleEditInPlace);
        widgetView.removeEventListener('click', stopInternalClick);
        widgetView.removeEventListener('touch', stopInternalClick);

        if (bodyClickFn !== null) {
            stopListeningBodyClick();
        }

        window.removeEventListener('resize', doResize);
    }

    document.addEventListener('DOMContentLoaded', ready);
    window.addEventListener('resize', doResize);
    window.addEventListener('unload', unload);
}(window, document, dragNdrop));
