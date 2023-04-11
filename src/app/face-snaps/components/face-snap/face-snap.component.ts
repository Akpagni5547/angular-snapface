import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapService } from '../../../core/services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  isClicked!:boolean;
  constructor(private router:Router) {}

  @Input() faceSnap!: FaceSnap;

  ngOnInit(): void {
    this.isClicked = false;
  }

  onViewFaceSnap(): void {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
