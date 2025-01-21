import { Component, signal } from '@angular/core';
import { MenuItem } from '../../interfaces/interface';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

/*  Manera tradicional
  public menuItems: MenuItem[] = [
    {title: 'Contador', route: 'counter'},
    {title: 'Usuario', route: 'user-info'},
    {title: 'Mutaciones', route: 'properties'}
  ]; */

  public menuItems = signal<MenuItem[]>([
    {title: 'Contador', route: 'counter'},
    {title: 'Usuario', route: 'user-info'},
    {title: 'Mutaciones', route: 'properties'}
  ]);

}
