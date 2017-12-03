import { trigger, transition, style, animate } from '@angular/animations';

export const NguAlertAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('alertAnimation', [

        // route 'enter' transition
        transition('* => 1', [

            // styles at start of transition
            style({
                // start with the content positioned off the right of the screen,
                // -400% is required instead of -100% because the negative position adds to the width of the element
                transform: 'translateX(110%)'
            }),

            // animation and styles at end of transition
            animate('.3s ease-in-out', style({
                // transition the right position to 0 which slides the content into view
                transform: 'translateX(0%)'
            }))
        ]),

        // route 'leave' transition
        transition('1 => 0', [
          style({
                // start with the content positioned off the right of the screen,
                // -400% is required instead of -100% because the negative position adds to the width of the element
                transform: 'translateX(0%)'
            }),
            // animation and styles at end of transition
            animate('.3s ease-in-out', style({
                // transition the right position to -400% which slides the content out of view
                transform: 'translateX(110%)'
            }))
        ])
    ]);
