import View from '../js/view';

const resultNode = document.querySelector('#result');
let friend = {};

export default {
    setData(newFriend) {
        friend = newFriend;
    },

    render() {
        resultNode.innerHTML = View.render('friend', friend);
    }
}