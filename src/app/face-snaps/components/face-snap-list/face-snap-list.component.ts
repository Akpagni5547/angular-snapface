import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, take, tap, Subject, takeUntil, Observable } from 'rxjs';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapService } from '../../../core/services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss'],
})
export class FaceSnapListComponent implements OnInit, OnDestroy {
  constructor(private faceSnapService: FaceSnapService) {}
  faceSnaps$!: Observable<FaceSnap[]>;
  faceSnaps!: FaceSnap[];
  private destroy$!: Subject<boolean>;

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapService.getAllFaceSnaps();
    this.destroy$ = new Subject<boolean>();
    this.faceSnaps = this.faceSnapService.faceSnaps;
    interval(1000).pipe(tap(console.log), takeUntil(this.destroy$)).subscribe();
  }
}
