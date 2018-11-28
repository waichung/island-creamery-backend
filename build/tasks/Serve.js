// Lib
import Connect from 'gulp-connect';

// Utils & Config
import { logStart } from '../Utils';
import Config from '../Config';

/**
 * Serve Task
 * @uses {gulp-connect}
 *
 * Spinning up a server instance for local development
 */
export default (done) => {

    logStart('Build');

    Connect.server({
        proxy: 'http://nestbloom.local',
        livereload: true,
    });

}
