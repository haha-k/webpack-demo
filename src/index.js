import _ from 'lodash';
import './style.css'
import './style.scss';
import Icon from './asset/img/icon.jpg'


function component(){
    var element = document.createElement('div');

    element.innerHTML = _.join(['haha','kk'],' ');
    element.classList.add('hello');
    element.classList.add('box');

    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());
console.log("hahak");
