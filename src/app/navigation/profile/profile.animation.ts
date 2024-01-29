import {animate, query, style, transition, trigger} from "@angular/animations";

export const profileAnimation =
  trigger('navigateAnimation', [
    transition('* => *', [
      query(
        ':enter',
        [
          style({
            opacity: 0,
            position: 'absolute',
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
            left: 0, right: 0, top: 0,

          }),
          // animate('.12s', style({ opacity: 0 }))
          animate('.1s', style({ opacity: 0 }))
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          style({
            opacity: 0,
            left: 0, right: 0, top: 0,

            width: 'auto'
          }),
          // animate('.12s', style({ opacity: 1 }))
          animate('.1s', style({ opacity: 1 }))
        ],
        { optional: true }
      )
    ])
  ]);
