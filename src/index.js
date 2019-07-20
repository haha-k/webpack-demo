import _ from 'lodash';
import './style.css'
import './style.scss';

function component(){
    var element = document.createElement('div');

    element.innerHTML = _.join(['haha','kk'],' ');
    element.classList.add('hello');
    element.classList.add('box');


    return element;
}

document.body.appendChild(component());
