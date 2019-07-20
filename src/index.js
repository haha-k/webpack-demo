import _ from 'lodash';

function component(){
    var element = document.createElement('div');

    element.innerHTML = _.join(['haha','kk'],' ');

    return element;
}

document.body.appendChild(component());
