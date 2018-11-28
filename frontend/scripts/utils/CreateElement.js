export default (tag = 'div', opts = {}) => {

    const element = document.createElement(tag);

    for(const [key, value] of Object.entries(opts)) {

        element.setAttribute(key, value);

        if(key === 'content') element.innerHTML = value;

    }

    return element;


}
