import { Component, OnInit} from '@angular/core';
import { IMenu, MenuService } from '../../../services/menu.service';

@Component({
  selector: 'gp-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  listMenu:IMenu[]


  constructor( private menuService:MenuService) {
    this.listMenu = menuService.getMenu()
   }

  ngOnInit(): void {
  }

}
