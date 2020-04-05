mode from webpack.config.js

https://webpack.js.org/configuration/mode/

- development
Sets process.env.NODE_ENV on DefinePlugin to value development . Enables NamedChunksPlugin and NamedModulesPlugin .
- production
Sets process.env.NODE_ENV on DefinePlugin to value production . Enables FlagDependencyUsagePlugin , FlagIncludedChunksPlugin , ModuleConcatenationPlugin , NoEmitOnErrorsPlugin , OccurrenceOrderPlugin , SideEffectsFlagPlugin and TerserPlugin .
- none
Opts out of any default optimization options

If not set, webpack sets production as the default value for mode.



webpack-dev-server

yarn add webpack-dev-server --dev
