import {getLatestRemotionVersion} from './get-latest-remotion-version';
import {getPackageManager, lockFilePaths} from './get-package-manager';
import {overrideWebpackConfig} from './override-webpack';
import {startServer} from './start-server';
import {cacheExists, clearCache} from './webpack-cache';
import esbuild = require('esbuild');

export const BundlerInternals = {
	startServer,
	cacheExists,
	clearCache,
	getLatestRemotionVersion,
	getPackageManager,
	lockFilePaths,
	esbuild,
};

export type {ProjectInfo} from './project-info';

export {bundle} from './bundler';
export {overrideWebpackConfig};
export {PackageManager} from './get-package-manager';
