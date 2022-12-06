import * as Sentry from '@sentry/browser'

function init() {
//     Sentry.init({
//         dsn: "https://5fa0052d38c14eb38b7b67858763ff1f@o4503971622682624.ingest.sentry.io/4503971624452096",
//         release: '0.0.1',
//         environment: 'development-test',
// });
}


function log(error) {
    // Sentry.captureException(error);
    console.error(error);
}

export default {
    log, init
}