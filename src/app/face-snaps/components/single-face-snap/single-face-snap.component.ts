import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapService } from '../../../core/services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit{
  constructor(private faceSnapService: FaceSnapService, private router: ActivatedRoute) {}

  @Input() faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;

  isClicked!: boolean;

  ngOnInit(): void {
    this.isClicked = false;
    const snapId = +this.router.snapshot.params['id'];
    // this.faceSnap = this.faceSnapService.getFaceSnapById(snapId);
    this.faceSnap$ = this.faceSnapService.getFaceSnapByIdApi(snapId);
  }

  onAddSnap(faceSnapId: number): void {
    if (this.isClicked) {
      this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
        tap(() => this.isClicked = false)
      )
      // this.isClicked = false;
      // this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    } else {
      // this.isClicked = true;
      // this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId, 'snap').pipe(
        tap(() => this.isClicked = true)
      )
    }
  }
}
