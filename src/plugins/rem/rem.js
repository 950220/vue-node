((doc, win) => {
    const docEl = doc.documentElement;
    const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    const recalc = function recalc() {
            const clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 37.5 * (clientWidth / 375) + 'px';
            /**
             * 以iphone6为标准得设计稿宽度为 750px, dpr:2
             * 设计稿宽度除以2；比如30px -> 15px
             * 15px -> .15rem
             */
            // docEl.style.fontSize = (clientWidth / 750) * 100 + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
