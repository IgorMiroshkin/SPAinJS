import View from '../js/view';

const resultNode = document.querySelector('#result');
let items = [];

export default {
    setData(newItems) {
        items = newItems;
    },

    render() {
        resultNode.innerHTML = View.render('news', { list: items });
    }
}