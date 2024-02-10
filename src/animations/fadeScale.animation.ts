import {animate, animateChild, group, query, style, transition, trigger} from "@angular/animations";

export const fadeScaleAnimation =
  trigger('modalOpenAnimation', [
    transition(':enter', [
      style({opacity: 0}),
      animate('300ms cubic-bezier(0.35, 0, 0.25, 1)', style({opacity: 1})),
    ]),
    transition(':leave', [
      query('section', [
        animate('150ms cubic-bezier(0.35, 0, 0.25, 1)', style({transform: 'scale(0.85)', opacity: 0})),
      ]),

      animate('100ms', style({opacity: 0})),
    ])
  ])

//for development


// export const fadeScaleAnimation =
//   trigger('modalOpenAnimation', [
//     transition(':enter', [
//       style({opacity: 0}),
//       animate('1s cubic-bezier(0.35, 0, 0.25, 1)', style({opacity: 1})),
//     ]),
//     transition(':leave', [
//       query('section', [
//         animate('1s cubic-bezier(0.35, 0, 0.25, 1)', style({transform: 'scale(0.85)', opacity: 0})),
//       ]),
//
//       animate('1s', style({opacity: 0})),
//     ])
//   ])
