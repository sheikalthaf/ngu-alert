import {
  trigger,
  transition,
  style,
  animate,
  AnimationTriggerMetadata,
  state,
  group,
  query
} from '@angular/animations';

export const alertAnimations = {
  alertAnimation: trigger('alertAnimation', [
    state(
      ':enter',
      style({
        transform: 'translateY(110%)'
      })
    ),
    state(
      ':leave',
      style({
        transform: '{{to}}'
      }),
      {
        params: { to: 'none' }
      }
    ),
    transition(
      ':enter',
      animate(
        '225ms cubic-bezier(0.4,0.0,0.2,1)',
        style({
          transform: 'none'
        })
      )
    ),
    transition(
      ':leave',
      animate(
        '225ms cubic-bezier(0.4,0.0,0.2,1)',
        style({
          transform: 'translateY(110%)'
        })
      )
    )
  ]),

  alertAnimation1: trigger('alertAnimation', [
    transition(':enter', [
      style({
        transform: 'translateX(110%)'
      }),
      animate(
        '.3s ease-in-out',
        style({
          transform: 'translateX(0%)'
        })
      )
    ]),
    transition(':leave', [
      style({
        transform: 'translateX(0%)'
      }),
      animate(
        '.3s ease-in-out',
        style({
          transform: 'translateX(110%)'
        })
      )
    ])
  ]),
  alertAnimation2: trigger('alertAnimation', [
    transition(':enter', [
      style({
        transform: 'translateY(110%)',
        opacity: 0
      }),
      animate(
        '225ms cubic-bezier(0.4,0.0,0.2,1)',
        style({
          transform: 'none',
          opacity: 1
        })
      )
    ]),
    transition(':leave', [
      style({
        transform: 'none'
      }),
      animate(
        '225ms cubic-bezier(0.4,0.0,0.2,1)',
        style({
          transform: 'translateY(110%)',
          opacity: 0
        })
      )
    ])
  ])
};
