import {layout} from './layout';


// Disable form submit... we are a SPA!
$('form').on('submit', function (e) {
    e.preventDefault();
});

// // Show the app when all JS has run
export function showApp() {
    $('.loading').hide();
    $('.cloak').show();
    layout();
}