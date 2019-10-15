import * as settings from '../js/settings';
import * as utils from '../js/utils'
import View from '../js/view';

const resultNode = document.querySelector('#result');
let items = [];
let sorting = settings.getFriendSort();

export default {
    setData(newItems) {
        items = newItems;
    },

    setSorting(newSorting) {
        sorting = newSorting;
        settings.setFriendSort(newSorting);
    },

    render() {
        if (sorting === 'name') {
            utils.sortByName(items);
        } else if (sorting === 'bday') {
            utils.sortByBDay(items);
        }

        resultNode.innerHTML = View.render('friends', { list: items });

        const sort = resultNode.querySelector('[data-role=sort]');

        sort.value = sorting;
        sort.addEventListener('change', e => {
           this.setSorting(e.target.value);
           this.render();
        });
    }
}