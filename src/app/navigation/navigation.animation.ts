import {animate, animateChild, group, query, style, transition, trigger} from "@angular/animations";

export const navigateAnimation =
  trigger('navigateAnimation', [
    transition('* => *', [
      query(
        ':enter',
        [
          style({
            opacity: 0,
            position: 'absolute',
            height: 'auto',
            width: '100%',
          })
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({
            opacity: 1,
            position: 'absolute',
            height: 'auto',
            width: '100%',
          }),
          // animate('.12s', style({ opacity: 0 }))
          animate('.12s', style({ opacity: 0 }))
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          style({
            opacity: 0,
            position: 'absolute',
            height: 'auto',
            width: '100%',
          }),
          // animate('.12s', style({ opacity: 1 }))
          animate('.12s', style({ opacity: 1 }))
        ],
        { optional: true }
        )
    ])
  ]);
