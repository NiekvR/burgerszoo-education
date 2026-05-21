import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {Ecodisplays} from '../../../../model/ecodisplays.enum';

@Component({
  selector: 'app-ecodisplays',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './ecodisplays.component.html',
  styleUrl: './ecodisplays.component.scss'
})
export class EcodisplaysComponent implements OnInit {
  public ecodisplays = [
    Ecodisplays.Bush,
    Ecodisplays.Desert,
    Ecodisplays.Mangrove,
    Ecodisplays.Ocean,
    Ecodisplays.Park,
    Ecodisplays.Rimba,
    Ecodisplays.Safari
  ];
  public selectedEcodisplays: { string: boolean } | {} = {};

  @Output() dataChange = new EventEmitter<{ string: boolean }>();

  ngOnInit() {
    const storedEcodisplays = localStorage.getItem('ecodisplays');

    if (storedEcodisplays) {
      const ecodisplays = JSON.parse(storedEcodisplays);
      this.selectedEcodisplays = ecodisplays;
    }
  }

  public selectEcodisplay(ecodisplay: string) {
    this.selectedEcodisplays[ ecodisplay ] = !this.selectedEcodisplays[ ecodisplay ];
  }

  public send() {
    this.dataChange.emit(this.selectedEcodisplays as { string: boolean});
    localStorage.setItem('ecodisplays', JSON.stringify(this.selectedEcodisplays));
  }
}
