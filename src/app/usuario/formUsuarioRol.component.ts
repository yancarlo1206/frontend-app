import { Component, OnInit } from '@angular/core';
import { Rol } from '../core/_models/rol.model';
import { RolService } from '../rol/rol.service';
import { Router, ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-formUsuarioRol',
  templateUrl: './formUsuarioRol.component.html',
  styleUrls: ['./formUsuarioRol.component.css']
})

export class FormUsuarioRolComponent implements OnInit {

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  rol: Rol[];
  constructor(private rolService: RolService,
  private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.rolService.getRoles().subscribe(
      (rol) => {this.rol = rol}
    );

    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

}