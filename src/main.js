import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import FormAddView from './view/form-add-view.js';
import FormEditView from './view/form-edit-view.js';
import RoutePointView from './view/route-point-view.js';
import BoardPresenter from './presenter/board-presenter.js';


import {render} from './render.js';

const siteBodyElement = document.querySelector('body');
const siteHeaderElement = document.querySelector('header');
const filterHeaderElement = siteHeaderElement.querySelector('h2');

const siteMainElement = document.querySelector('main');
const sectionMainElement = siteMainElement.querySelector('.trip-events');
const sortHeaderElement = sectionMainElement.querySelector('h2');

const ulAddElement = sectionMainElement.querySelector('.trip-events__list');

const listFormElement = ulAddElement.querySelector('.trip-events__item');

const ulMainElement = siteMainElement.querySelector('.trip-events__list');


const boardPresenter = new BoardPresenter();

render(new FilterView(), filterHeaderElement);
render(new SortView(), sortHeaderElement);
render(new FormAddView(), listFormElement);
render(new FormEditView(), listFormElement);
render(new RoutePointView(), ulMainElement);

boardPresenter.init(siteBodyElement);


