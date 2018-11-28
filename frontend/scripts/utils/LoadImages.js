/**
 * Loack the pack images to get width and height before drawinng canvas
 * @param  {Array}   srcs
 * @param  {Function} fn
 * @return {Array}
 */
export default (srcs, fn) => {

    let imgs = [], img;
    let remaining = srcs.length;

    for (var i = 0; i < srcs.length; i++) {

        img = new Image();
        imgs.push(img);

        img.onload = () => {
            --remaining;
            if(remaining === 0) fn(imgs);
        };

        img.src = srcs[i];

    }

    return(imgs);

}
