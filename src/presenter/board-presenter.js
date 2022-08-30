import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import FormAddView from './view/form-add-view.js';
import FormEditView from './view/form-edit-view.js';
import RoutePointView from './view/route-point-view.js';
import { render } from '../render.js';


export default class BoardPresenter {
  filterComponent = new FilterView();
  sortComponent = new SortView();
  formAddComponent = new FormAddView();
  formEditComponent = new FormEditView();
  routePointComponent = new RoutePointView();

  init = (boardContainer) => {
    this.boardContainer = boardContainer;

    render(this.boardComponent, this.boardContainer);
    render(this.filterComponent, this.boardComponent.getElement());
    render(this.sortComponent, this.boardComponent.getElement());
    render(this.formAddComponent, this.boardComponent.getElement());
    render(this.formEditComponent, this.boardComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(this.routePointComponent, this.boardComponent.getElement());
    }
  };
}
